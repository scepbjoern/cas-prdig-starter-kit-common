import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {distribute} from '../tools/distribute.mjs';
test('Verteilung schützt lokale Kursänderungen und eigene Projektdokumente',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'prdig-common-'));
 fs.writeFileSync(path.join(root,'project.example.json'),'{"kind":"system"}');
 const preview=distribute(root);assert.equal(preview.applied,false);assert.equal(fs.existsSync(path.join(root,'course-manifest.json')),false);
 distribute(root,{apply:true});const custom=path.join(root,'docs/prd.md');fs.writeFileSync(custom,'Eigene Arbeit');
 distribute(root,{apply:true});assert.equal(fs.readFileSync(custom,'utf8'),'Eigene Arbeit');
 const course=path.join(root,'docs/course/GLOSSARY.md');fs.appendFileSync(course,'\nLokale Änderung');
 assert.throws(()=>distribute(root,{apply:true}),/Lokal verändert/);
 assert.match(fs.readFileSync(course,'utf8'),/Lokale Änderung/);
});
