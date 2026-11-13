import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const source=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
export function distribute(target,{apply=false}={}){
 target=path.resolve(target);
 if(target===source)throw Error('Common darf nicht sein eigenes Verteilungsziel sein.');
 const kind=JSON.parse(fs.readFileSync(path.join(target,'project.example.json'),'utf8')).kind;
 if(!['system','e2e'].includes(kind))throw Error('Ziel ist kein bekanntes Kit.');
 const manifestPath=path.join(target,'course-manifest.json');
 const previous=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):{files:{}};
 const entries=[];
 for(const [from,to] of [['shared/docs','docs/course'],['shared/templates','templates/shared'],['.agents/skills','.agents/skills']]){
  for(const file of files(path.join(source,from))){
   const rel=path.posix.join(to,path.relative(path.join(source,from),file).split(path.sep).join('/'));
   const dest=path.join(target,rel),bytes=fs.readFileSync(file);
   if(fs.existsSync(dest)){
    const actual=hash(fs.readFileSync(dest));
    if(actual!==hash(bytes)&&actual!==previous.files[rel])throw Error('Lokal verändert, kein Überschreiben: '+rel);
   }
   entries.push({rel,bytes});
  }
 }
 const next=Object.fromEntries(entries.map(e=>[e.rel,hash(e.bytes)]));
 const removed=Object.keys(previous.files).filter(p=>!(p in next));
 if(removed.length)throw Error('Entfallene Kursdateien zuerst ausdrücklich migrieren: '+removed.join(', '));
 const version=JSON.parse(fs.readFileSync(path.join(source,'package.json'),'utf8')).version;
 if(apply){
  for(const e of entries){const p=path.join(target,e.rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,e.bytes);}
  fs.writeFileSync(manifestPath,JSON.stringify({source:'https://github.com/scepbjoern/cas-prdig-starter-kit-common',version,files:next},null,2)+'\n');
 }
 return {target,version,files:entries.length,applied:apply};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2),apply=args.includes('--apply'),targets=args.filter(a=>a!=='--apply');
 if(!targets.length)throw Error('Aufruf: node tools/distribute.mjs <Kit-Pfad> [--apply]');
 // Alle Ziele zuerst prüfen, erst danach schreiben.
 for(const target of targets)distribute(target);
 for(const target of targets)console.log(JSON.stringify(distribute(target,{apply})));
}
