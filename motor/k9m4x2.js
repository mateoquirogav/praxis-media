/*! Motor PRAXIS - praxis - uso exclusivo del sitio autorizado. */
(function(){var C={"cliente":"Make Me Mambo","tienda":"amazonas · store 4270585","archivo":"k9m4x2","activo":true,"dominios":["makememambo.com.ar","makememambo2.mitiendanube.com"],"fuentes":["https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&family=Archivo+Black&display=swap"],"piel":{"base":"#F4F0E6","tinta":"#0B0B0B","acento":"#FFD400","linea":"#DCD6C8","suave":"#6E6A60","f-tit":"'Archivo Black', system-ui, sans-serif","f-txt":"'Archivo', system-ui, sans-serif","radio":"0px","trans":".25s cubic-bezier(.22,.61,.36,1)"},"bloques":["beneficios"],"beneficios":{"diferencial":4,"velocidad":34,"velocidad_cel":22,"separador":"»»"}};if(window.__PX_MOTOR__){return;}
window.__PX_MOTOR__=true;var HOST=location.hostname.replace(/^www\./,'');var AUTORIZADO=(HOST==='localhost'||HOST==='127.0.0.1');for(var i=0;i<C.dominios.length;i++){if(HOST===C.dominios[i]||HOST.indexOf(C.dominios[i])>-1){AUTORIZADO=true;}}
if(C.libre===true){AUTORIZADO=true;}
if(!AUTORIZADO){return;}
if(C.activo===false){return;}
var DEV=false;try{if(location.search.indexOf('px=dev')>-1){sessionStorage.setItem('px_dev','1');}
DEV=sessionStorage.getItem('px_dev')==='1';}catch(e){}
var PX=window.PX={cfg:C,dev:DEV,log:function(msg,forzar){if(DEV||forzar){try{console.log('[PX '+C.cliente+'] '+msg);}catch(e){}}},estilo:function(id,css){if(document.getElementById('px-css-'+id)){return;}
var s=document.createElement('style');s.id='px-css-'+id;s.textContent=css;(document.head||document.documentElement).appendChild(s);},fuente:function(href){if(document.querySelector('link[href="'+href+'"]')){return;}
var l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);},montar:function(id,fn){if(document.querySelector('[data-px="'+id+'"]')){return;}
var tiempos=[0,400,1000,2000,3500,6000];var listo=false;tiempos.forEach(function(t){setTimeout(function(){if(listo){return;}
if(document.querySelector('[data-px="'+id+'"]')){listo=true;return;}
try{if(fn()===true){listo=true;PX.log('bloque "'+id+'" montado ('+t+'ms)',true);}}catch(e){PX.log('bloque "'+id+'" falló: '+e.message,true);listo=true;}},t);});setTimeout(function(){if(!listo){PX.log('bloque "'+id+'" NO montó: no apareció el ancla',true);}},6500);},marcar:function(nodo,id){nodo.setAttribute('data-px',id);return true;},ancla:function(){for(var i=0;i<arguments.length;i++){var n=document.querySelector(arguments[i]);if(n){PX.log('ancla encontrada: '+arguments[i]);return n;}}
return null;}};(function(){var v='';for(var k in C.piel){v+='--'+k+':'+C.piel[k]+';';}
PX.estilo('piel','.px{'+v+'}');})();(C.fuentes||[]).forEach(function(f){PX.fuente(f);});PX.log('motor arriba · '+C.bloques.length+' bloque(s) · '+(DEV?'MODO DESARROLLO':'normal'),DEV);PX.montar('beneficios',function(){var b=C.beneficios||{};var seccion=PX.ancla('[data-store="banner-services"]','.section-informative-banners');if(!seccion){return false;}
var items=[];for(var n=1;n<=8;n++){var t=seccion.querySelector('.js-informative-banner-title-'+n);var d=seccion.querySelector('.js-informative-banner-description-'+n);var s=seccion.querySelector('.js-informative-banner-icon-'+n+' svg');if(!t||!t.textContent.trim()){continue;}
items.push({titulo:t.textContent.trim(),sub:d?d.textContent.trim():'',icono:s?s.outerHTML:''});}
if(!items.length){return false;}
var sw=seccion.querySelector('.swiper-container');if(sw&&sw.swiper){try{sw.swiper.destroy(true,true);}catch(e){}}
var dif=parseInt(b.diferencial||0,10);var sep=b.separador||'\u00BB\u00BB';function unSet(){var h='';items.forEach(function(it,i){var esDif=(i+1)===dif;h+='<div class="pxb-it'+(esDif?' pxb-it--dif':'')+'">'+
it.icono+'<div class="pxb-tx"><b>'+it.titulo+'</b>'+
(it.sub?'<span>'+it.sub+'</span>':'')+'</div></div>'+'<i class="pxb-sep">'+sep+'</i>';});return h;}
var caja=document.createElement('div');caja.className='px pxb';caja.innerHTML='<div class="pxb-pista">'+'<div class="pxb-set">'+unSet()+'</div>'+'<div class="pxb-set" aria-hidden="true">'+unSet()+'</div>'+'</div>';seccion.innerHTML='';seccion.appendChild(caja);PX.estilo('beneficios',`
.pxb{background:var(--tinta);border-top:3px solid var(--acento);border-bottom:3px solid var(--acento);
     position:relative;overflow:hidden;padding:15px 0}
.pxb::after{content:'';position:absolute;inset:0;opacity:.055;pointer-events:none;z-index:3;
     background-image:radial-gradient(#fff .6px,transparent .7px);background-size:3px 3px}
.pxb-pista{display:flex;width:max-content;animation:pxb-corre ${b.velocidad || 34}s linear infinite}
.pxb-set{display:flex;align-items:center;flex:0 0 auto}
.pxb-it{display:flex;align-items:center;gap:11px;padding:0 26px;flex:0 0 auto}
.pxb-it svg{flex:0 0 auto;width:38px;height:38px;color:var(--base)}
.pxb-tx{display:flex;align-items:baseline;gap:8px;white-space:nowrap}
.pxb-tx b{font-family:var(--f-tit);font-size:16px;line-height:1;text-transform:uppercase;
     letter-spacing:-.015em;color:var(--base);font-weight:900}
.pxb-tx span{font-family:var(--f-txt);font-size:13px;color:color-mix(in srgb,var(--base) 58%,transparent);white-space:nowrap}
.pxb-sep{font-family:var(--f-tit);font-size:15px;color:var(--acento);letter-spacing:-.08em;
     flex:0 0 auto;font-style:normal;font-weight:900}
.pxb-it--dif{background:var(--acento);padding:9px 22px;margin:0 26px;gap:10px}
.pxb-it--dif svg,.pxb-it--dif .pxb-tx b{color:var(--tinta)}
.pxb-it--dif .pxb-tx span{color:color-mix(in srgb,var(--tinta) 62%,transparent)}
@keyframes pxb-corre{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
/* La cinta NO se frena nunca: ni con el cursor encima ni con el dedo apoyado. */
@media (max-width:767px){
  .pxb{padding:12px 0;border-top-width:2px;border-bottom-width:2px}
  .pxb-pista{animation-duration:${b.velocidad_cel || 22}s}
  .pxb-it{padding:0 18px;gap:9px}
  .pxb-it svg{width:32px;height:32px}
  .pxb-tx b{font-size:14px}
  .pxb-tx span{font-size:12px}
  .pxb-it--dif{padding:7px 16px;margin:0 18px}
}
@media (prefers-reduced-motion:reduce){.pxb-pista{animation:none}}
`);PX.log('beneficios: '+items.length+' ranuras leídas del panel',true);return PX.marcar(seccion,'beneficios');});})();