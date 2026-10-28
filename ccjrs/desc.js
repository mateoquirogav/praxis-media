async function(k){
const D=JSON.parse(localStorage.getItem('ccd'));const x=D[k];const w=ms=>new Promise(r=>setTimeout(r,ms));const vis=e=>e&&e.getBoundingClientRect().width>0;
for(let i=0;i<30&&!(document.querySelector('[name=seoTitle]')&&[...document.querySelectorAll('button')].some(b=>/Guardar/.test(b.innerText)));i++)await w(500);
let hit='sin PATCH';
const ins=(u,m,b)=>{try{if(/\/v4\/products\/\d+/.test(u)&&/PATCH|PUT/i.test(m||'')&&typeof b==='string'){const j=JSON.parse(b);j.description={es:x.d,default:x.d};hit='PATCH ok';return JSON.stringify(j)}}catch(e){hit='err '+e}return b};
const of=window.fetch;window.fetch=function(u,o){o=o||{};const url=typeof u==='string'?u:u.url;if(o.body)o.body=ins(url,o.method,o.body);return of.call(this,u,o)};
const oo=XMLHttpRequest.prototype.open,os=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(m,u){this.__m=m;this.__u=u;return oo.apply(this,arguments)};XMLHttpRequest.prototype.send=function(b){return os.call(this,ins(this.__u,this.__m,b))};
const s=document.querySelector('[name=seoTitle]');const nv=x.n.slice(0,70);const v2=s.value===nv?nv+' ':nv;
Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(s,v2);s.dispatchEvent(new Event('input',{bubbles:true}));s.dispatchEvent(new Event('change',{bubbles:true}));s.dispatchEvent(new Event('blur',{bubbles:true}));await w(600);
[...document.querySelectorAll('button')].find(b=>/Guardar/.test(b.innerText)&&vis(b)).click();
for(let i=0;i<15&&hit==='sin PATCH';i++)await w(500);await w(1500);
return k+' '+x.n+' '+hit;
}
