async function(k){
const R='https://raw.githubusercontent.com/mateoquirogav/praxis-media/ba8e03d/ccjrs/';
const Q=JSON.parse(localStorage.getItem('ccq'));const p=Q[k];const log=[k,p.n];
const w=ms=>new Promise(r=>setTimeout(r,ms));const vis=e=>e&&e.getBoundingClientRect().width>0;
const setI=(el,v)=>{const pr=el instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(pr,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}))};
for(let i=0;i<30&&!(document.querySelector('[name=name]')&&window.tinymce&&tinymce.activeEditor&&document.querySelector('#input-file'));i++)await w(500);
setI(document.querySelector('[name=name]'),p.n);
if(p.d){tinymce.activeEditor.setContent(p.d);tinymce.activeEditor.fire('change');tinymce.activeEditor.save();}
setI(document.querySelector('[name=price]'),String(p.p));
for(const f of p.f){const b=await (await fetch(R+'mud/'+f)).blob();const dt=new DataTransfer();dt.items.add(new File([b],f,{type:'image/jpeg'}));const t=document.querySelector('#input-file').parentElement;for(const ev of ['dragenter','dragover','drop'])t.dispatchEvent(new DragEvent(ev,{bubbles:true,cancelable:true,dataTransfer:dt}));await w(4200)}
const btnDe=(tit)=>[...document.querySelectorAll('button')].filter(b=>/^(Agregar|Editar|Elegir)$/.test(b.innerText.trim())&&vis(b)).find(b=>{let e=b;for(let i=0;i<5;i++){e=e.parentElement;if(!e)return false;const t=e.innerText;if(t.includes(tit))return t.indexOf(tit)<40}return false});
const cerrar=async()=>{const b=document.elementFromPoint(567,25);(b.closest('button,a')||b).click();await w(900)};
btnDe('Categorías').click();await w(1300);
for(const c of [...document.querySelectorAll('input[type=checkbox]')]){let e=c;for(let i=0;i<4;i++)e=e.parentElement;const n=(e.innerText||'').trim().split('\n')[0];if(['Bicicletas','Repuestos','Cascos','Accesorios'].includes(n)&&((n===p.c)!==c.checked)){c.click();await w(350)}}
await cerrar();
const v=p.v||[];
if(v.length===1&&(/color/i.test(v[0].n)||/talle/i.test(v[0].n))){
  btnDe('Variantes').click();await w(1300);
  const sel=document.querySelector('[name=variant-type-es]');Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set.call(sel,/color/i.test(v[0].n)?'color':'size');sel.dispatchEvent(new Event('change',{bubbles:true}));await w(1300);
  const box=()=>[...document.querySelectorAll('input')].filter(i=>vis(i)&&/^Ej\.:/i.test(i.placeholder||'')&&!/Remera|Nike|campera|GTM|G-Y4|Todo el sitio/i.test(i.placeholder));
  for(const raw of v[0].o){const val=raw.replace(/\s*,\s*/g,', ').replace(/\s+/g,' ').trim();let e=box().filter(i=>!i.value);if(!e.length){const a=[...document.querySelectorAll('button,a')].find(b=>/Agregar nuev/i.test(b.innerText)&&vis(b));a.click();await w(500);e=box().filter(i=>!i.value)}setI(e[0],val.charAt(0).toUpperCase()+val.slice(1).toLowerCase());await w(250)}
  [...document.querySelectorAll('button')].filter(b=>/^Crear$/.test(b.innerText.trim())&&vis(b)).pop().click();await w(2000);log.push('var '+v[0].o.length);
} else if(v.length){log.push('VARIANTES A MANO: '+JSON.stringify(v))}
const seo=document.querySelector('[name=seoTitle]');if(seo&&seo.value)setI(seo,'');
log.push('precio='+document.querySelector('[name=price]').value);
[...document.querySelectorAll('button')].find(b=>/Guardar producto/.test(b.innerText)).click();
for(let i=0;i<25;i++){await w(700);if(/\/products\/\d+/.test(location.pathname))break}
log.push(location.pathname.replace(/\D/g,''));return log.join(' | ');
}
