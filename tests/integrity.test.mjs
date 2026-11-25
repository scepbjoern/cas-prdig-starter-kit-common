import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {distribute} from '../tools/distribute.mjs';
import {courseHash, matchesRecorded, verifyCourse} from '../shared/tools/course-integrity.mjs';
const hash = b => crypto.createHash('sha256').update(b).digest('hex');

test('LF/CRLF migration preserves content and binary differences',()=>{
 const lf=Buffer.from('Änderung\nZweite Zeile\n'), crlf=Buffer.from('Änderung\r\nZweite Zeile\r\n');
 assert.equal(courseHash('a.md',lf),courseHash('a.md',crlf));
 assert.ok(matchesRecorded('a.md',lf,hash(crlf)));
 assert.ok(matchesRecorded('a.md',crlf,hash(lf)));
 assert.ok(!matchesRecorded('a.md',Buffer.from('Fremde Änderung\n'),hash(crlf)));
 assert.notEqual(courseHash('a.bin',lf),courseHash('a.bin',crlf));
 assert.throws(()=>matchesRecorded('a.md',lf,hash(lf),'unknown'),/Unbekannte/);
});

test('fresh Git clones verify with LF and CRLF, real edits block distribution',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'prdig-integrity-'));
 const source=path.join(root,'source'); fs.mkdirSync(source);
 fs.writeFileSync(path.join(source,'project.example.json'),'{"kind":"e2e"}');
 distribute(source,{apply:true});
 // Exercise legacy raw CRLF manifests too, even when the working copy has LF.
 let manifest=JSON.parse(fs.readFileSync(path.join(source,'course-manifest.json')));
 delete manifest.hashPolicy;
 for(const file of Object.keys(manifest.files)){
   const bytes=fs.readFileSync(path.join(source,file));
   manifest.files[file]=hash(Buffer.from(bytes.toString('utf8').replace(/\r?\n/g,'\r\n')));
 }
 fs.writeFileSync(path.join(source,'course-manifest.json'),JSON.stringify(manifest));
 assert.deepEqual(verifyCourse(source).mismatches,[]);
 distribute(source,{apply:true});
 const git=(cwd,...args)=>execFileSync('git',args,{cwd,stdio:'pipe'});
 git(source,'init'); git(source,'add','.');
 git(source,'-c','user.name=Course Test','-c','user.email=test@example.invalid','commit','-m','fixture');
 for(const mode of ['false','true']){
   const clone=path.join(root,'clone-'+mode);
   git(root,'clone','--quiet','--config','core.autocrlf='+mode,source,clone);
   assert.deepEqual(verifyCourse(clone).mismatches,[]);
   const own=path.join(clone,'docs/prototype-brief.md'); fs.writeFileSync(own,'Eigener Auftrag');
   distribute(clone,{apply:true});
   assert.equal(fs.readFileSync(own,'utf8'),'Eigener Auftrag');
   const changed=path.join(clone,'docs/course/GLOSSARY.md');
   fs.appendFileSync(changed,'\nEchte lokale Änderung');
   const before=fs.readFileSync(changed);
   assert.ok(verifyCourse(clone).mismatches.includes('docs/course/GLOSSARY.md'));
   assert.throws(()=>distribute(clone,{apply:true}),/Lokal verändert/);
   assert.deepEqual(fs.readFileSync(changed),before);
 }
});
