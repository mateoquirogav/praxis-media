/*! Motor PRAXIS - praxis - uso exclusivo del sitio autorizado. */
(function(){var C={"cliente":"Wess Indumentaria","tienda":"baires (borrador, installation 14323125) · store 3581838","archivo":"lzoqxy","activo":true,"dominios":["wessindumentaria"],"fuentes":[],"piel":{"base":"#FFFFFF","tinta":"#000000","acento":"#000000","linea":"#0000001A","suave":"#6B6B6B","verde":"#0E8A3E","bordo":"#7A0019","f-tit":"'Big Shoulders Display', system-ui, sans-serif","f-txt":"'Chivo', system-ui, sans-serif","radio":"0px","trans":".25s cubic-bezier(.22,.61,.36,1)"},"bloques":["beneficios-cards","vidriera","probador"],"beneficios-cards":{"fondo":"#0B0B0B","card":"#17171A","texto":"#FFFFFF","suave":"#9A9A9F","icono_opacidad":".26","segundos_cel":3.5},"vidriera":{"ancla":"[data-store=\"banner-services\"]","fondo":"#EBEBE9","tinta":"#101014","columnas":4,"items":[{"texto":"Jeans baggy","url":"/pantalones/jeans-baggy/","video":"https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@3987ffe5488af918bd40cf90885c58ee0936f8fe/wess/WESS-jeans-baggy-loop.mp4"},{"texto":"Remeras oversize","url":"/remeras/","video":"https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@3987ffe5488af918bd40cf90885c58ee0936f8fe/wess/WESS-remera-oversize-loop.mp4"},{"texto":"Abrigos","url":"/abrigos/","video":"https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@3987ffe5488af918bd40cf90885c58ee0936f8fe/wess/WESS-abrigos-loop.mp4"},{"texto":"Zapatillas","url":"/zapatillas-importadas/","video":"https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@3987ffe5488af918bd40cf90885c58ee0936f8fe/wess/WESS-zapatillas-loop.mp4"}]},"probador":{"ancla":"[data-store=\"home-products-featured\"]","donde":"antes","tienda":"https://www.wessindumentaria.com","siluetas":"https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@e7c2a44ed791335769d1c1ed3d62465ab1ebfa32/wess/wess-probador-siluetas.svg"}};if(window.__PX_MOTOR__){return;}
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
PX.estilo('piel','.px{'+v+'}');})();(C.fuentes||[]).forEach(function(f){PX.fuente(f);});PX.log('motor arriba · '+C.bloques.length+' bloque(s) · '+(DEV?'MODO DESARROLLO':'normal'),DEV);PX.montar('beneficios-cards',function(){var b=C['beneficios-cards']||{};var seccion=PX.ancla('[data-store="banner-services"]','.section-informative-banners');if(!seccion){return false;}
var items=[];for(var n=1;n<=8;n++){var t=seccion.querySelector('.js-informative-banner-title-'+n);if(!t||!t.textContent.trim()){continue;}
var d=seccion.querySelector('.js-informative-banner-description-'+n);items.push({titulo:t.textContent.trim(),sub:d?d.textContent.trim():''});}
if(!items.length){var vistos={};seccion.querySelectorAll('.swiper-slide h3, .swiper-slide h2, .swiper-slide p').forEach(function(h){var txt=(h.textContent||'').replace(/\s+/g,' ').trim();if(!txt||vistos[txt]){return;}
vistos[txt]=1;var p=txt.split('|');items.push({titulo:p[0].trim(),sub:p.length>1?p.slice(1).join('|').trim():''});});}
if(!items.length){return false;}
if(items.length>5){items=items.slice(0,5);}
var sw=seccion.querySelector('.swiper-container');if(sw&&sw.swiper){try{sw.swiper.destroy(true,true);}catch(e){}}
var ICONOS={off:'<path d="M50 14 14 50"/><circle cx="22" cy="22" r="8"/><circle cx="42" cy="42" r="8"/>',cuota:'<rect x="6" y="16" width="52" height="34" rx="5"/><path d="M6 27h52"/><path d="M15 40h13"/>',envio:'<path d="M4 18h34v26H4z"/><path d="M38 27h11l9 9v8H38z"/><circle cx="16" cy="48" r="5"/><circle cx="46" cy="48" r="5"/>',rapido:'<path d="M36 5 17 36h14L28 59l19-31H33z"/>',cambio:'<path d="M8 26a24 24 0 0 1 41-11"/><path d="M56 38a24 24 0 0 1-41 11"/><path d="M49 4v11H38"/><path d="M15 60V49h11"/>',local:'<path d="M8 26h48v30H8z"/><path d="M6 26 12 10h40l6 16"/><path d="M26 56V38h12v18"/>',garantia:'<path d="M32 6 54 15v18c0 14-9 22-22 26-13-4-22-12-22-26V15z"/><path d="M23 32l7 7 12-14"/>',consulta:'<path d="M56 34c0 12-11 21-24 21a27 27 0 0 1-8-1l-14 5 4-12a20 20 0 0 1-6-13c0-12 11-21 24-21s24 9 24 21z"/>',seguro:'<rect x="12" y="28" width="40" height="28" rx="4"/><path d="M22 28v-8a10 10 0 0 1 20 0v8"/>',marca:'<path d="M32 10v44"/><path d="M13 21l38 22"/><path d="M51 21 13 43"/>'};var CLAVES=[['rapido',/en el d[ií]a|24\s*h|mismo d[ií]a|cadete|hoy|r[aá]pid|express|inmediat/i],['envio',/env[ií]o|envio gratis|gratis|correo|despach|entrega/i],['cuota',/cuota|inter[eé]s|tarjeta|financ/i],['off',/%|off|descuento|transferencia|efectivo|ahorr|promo/i],['cambio',/cambio|devoluci|arrepent/i],['local',/local|sucursal|retir|showroom|tienda f/i],['garantia',/garant[ií]a|original|calidad|autentic/i],['consulta',/whatsapp|atenci[oó]n|asesor|consult|ayuda/i],['seguro',/segur|protegid|datos|ssl/i]];function icono(txt){for(var i=0;i<CLAVES.length;i++){if(CLAVES[i][1].test(txt)){return ICONOS[CLAVES[i][0]];}}
return ICONOS.marca;}
var N=items.length;var esc=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};var cards='';items.forEach(function(it){cards+='<div class="pxbc-it">'+'<div class="pxbc-ico"><svg viewBox="0 0 64 64">'+icono(it.titulo+' '+it.sub)+'</svg></div>'+'<p class="pxbc-tit">'+esc(it.titulo)+'</p>'+'<p class="pxbc-sub">'+esc(it.sub)+'</p>'+'</div>';});var puntos='';for(var k=0;k<N;k++){puntos+='<span class="pxbc-dot"><i></i></span>';}
var caja=document.createElement('div');caja.className='px pxbc';caja.innerHTML='<div class="pxbc-grid">'+cards+'</div>'+'<div class="pxbc-dots">'+puntos+'</div>';seccion.innerHTML='';seccion.appendChild(caja);var paso=parseFloat(b.segundos_cel||3.5);var ciclo=(paso*N).toFixed(2);var tramo=100/N;var op=b.icono_opacidad||'.26';var kSlide='',kIco='',kFill='';for(var i=0;i<N;i++){var ini=(i*tramo).toFixed(3);var fin=(i*tramo+tramo*0.80).toFixed(3);kSlide+=ini+'%,'+fin+'%{transform:translateX(-'+(i*tramo).toFixed(3)+'%)}';}
kSlide+='100%{transform:translateX(0)}';kIco='0%{opacity:0;transform:translate(70px,-50%)}'+
(tramo*0.20).toFixed(3)+'%{opacity:'+op+';transform:translate(0,-50%)}'+
(tramo*0.86).toFixed(3)+'%{opacity:'+op+';transform:translate(0,-50%)}'+
(tramo*0.99).toFixed(3)+'%{opacity:0;transform:translate(70px,-50%)}'+'100%{opacity:0;transform:translate(70px,-50%)}';kFill='0%{transform:scaleX(0)}'+
(tramo*0.88).toFixed(3)+'%{transform:scaleX(1)}'+
(tramo*0.97).toFixed(3)+'%{transform:scaleX(1)}'+
(tramo*0.99).toFixed(3)+'%{transform:scaleX(0)}'+'100%{transform:scaleX(0)}';var css=`
.pxbc{--f:${b.fondo || '#0B0B0B'};--c:${b.card || '#17171A'};--tx:${b.texto || '#FFFFFF'};--sv:${b.suave || '#9A9A9F'};
      background:var(--f);color:var(--tx);padding:18px;overflow:hidden}
.pxbc-grid{display:grid;grid-template-columns:repeat(${N},1fr);gap:10px}
.pxbc-it{position:relative;overflow:hidden;background:var(--c);padding:22px 22px 24px;min-height:132px;
         display:grid;grid-template-rows:auto auto;align-content:center;
         animation:pxbc-up .6s cubic-bezier(.22,.61,.36,1) both}
.pxbc-it::after{content:"";position:absolute;left:22px;top:0;width:26px;height:2px;background:var(--tx);opacity:.9}
@keyframes pxbc-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}

/* el ícono ocupa la mitad derecha y entra de derecha a izquierda */
.pxbc-ico{position:absolute;top:50%;right:4%;width:48%;height:82%;
          display:flex;align-items:center;justify-content:flex-end;
          transform:translateY(-50%);pointer-events:none;opacity:${op};
          -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 38%,#000 100%);
          mask-image:linear-gradient(90deg,transparent 0%,#000 38%,#000 100%);
          animation:pxbc-ico .85s cubic-bezier(.22,.61,.36,1) both}
.pxbc-ico svg{height:100%;width:auto;max-width:100%;display:block}
.pxbc-ico svg *{fill:none;stroke:var(--tx);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;
                vector-effect:non-scaling-stroke}
@keyframes pxbc-ico{from{opacity:0;transform:translate(80px,-50%)}to{opacity:${op};transform:translate(0,-50%)}}

/* título SIEMPRE en una línea → las bajadas arrancan todas a la misma altura */
.pxbc-tit{position:relative;z-index:2;margin:0;font-family:var(--f-tit);font-weight:800;
          font-size:clamp(22px,2.5vw,38px);line-height:1;letter-spacing:.6px;text-transform:uppercase;
          white-space:nowrap;min-height:38px;display:flex;align-items:flex-end}
.pxbc-sub{position:relative;z-index:2;margin:9px 0 0;font-family:var(--f-txt);font-size:12.5px;
          font-weight:300;line-height:1.45;color:var(--sv);max-width:78%;min-height:36px}
.pxbc-dots{display:none}
`;for(var j=1;j<=N;j++){css+='.pxbc-it:nth-child('+j+'){animation-delay:'+(0.05+(j-1)*0.12).toFixed(2)+'s}';css+='.pxbc-it:nth-child('+j+') .pxbc-ico{animation-delay:'+(0.25+(j-1)*0.12).toFixed(2)+'s}';}
css+=`
@media (max-width:767px){
  .pxbc{padding:14px}
  .pxbc-grid{grid-template-columns:repeat(${N},${(100 / N).toFixed(4)}%);gap:0;width:${N * 100}%;
             animation:pxbc-slide ${ciclo}s infinite}
  .pxbc-it{animation:none;min-height:126px;padding:22px 20px 24px}
  /* en el celular el titulo puede cortar en dos lineas: con nowrap un texto
     largo del panel se desbordaba de la card. Todas las cards comparten fila
     de grilla, asi que igual quedan de la misma altura. */
  .pxbc-tit{font-size:clamp(22px,6.6vw,34px);min-height:34px;white-space:normal;line-height:.98}
  .pxbc-sub{max-width:64%;min-height:34px}
  .pxbc-ico{animation:pxbc-icomob ${ciclo}s infinite both}
  .pxbc-dots{display:grid;grid-template-columns:repeat(${N},1fr);gap:6px;padding:0 6px;margin-top:14px}
  .pxbc-dot{height:2px;background:color-mix(in srgb,var(--tx) 16%,transparent);overflow:hidden}
  .pxbc-dot i{display:block;height:100%;width:100%;background:var(--tx);transform:scaleX(0);
              transform-origin:left;animation:pxbc-fill ${ciclo}s infinite}
  @keyframes pxbc-slide{${kSlide}}
  @keyframes pxbc-icomob{${kIco}}
  @keyframes pxbc-fill{${kFill}}
`;for(var m=1;m<=N;m++){var dly=((m-1)*paso).toFixed(2)+'s';css+='  .pxbc-it:nth-child('+m+') .pxbc-ico{animation-delay:'+dly+'}';css+='  .pxbc-dot:nth-child('+m+') i{animation-delay:'+dly+'}';}
css+='}';css+='@media (prefers-reduced-motion:reduce){.pxbc-grid,.pxbc-ico,.pxbc-dot i{animation:none}'+'.pxbc-ico{opacity:'+op+';transform:translate(0,-50%)}}';PX.estilo('beneficios-cards',css);PX.log('beneficios-cards: '+N+' ranuras leídas del panel',true);return PX.marcar(seccion,'beneficios-cards');});PX.montar('vidriera',function(){var v=C.vidriera||{};var items=v.items||[];if(!items.length){return false;}
if(document.body.className.indexOf('template-home')===-1){return true;}
var ancla=PX.ancla(v.ancla||'[data-store="banner-services"]','.section-informative-banners','[data-store="home-slider"]');if(!ancla){return false;}
var N=items.length;var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};var tiles='';items.forEach(function(it,i){tiles+='<a class="pxv-it" href="'+esc(it.url)+'" style="--d:'+(i*0.12).toFixed(2)+'s">'+'<span class="pxv-caja">'+'<video class="pxv-vid" muted loop playsinline preload="none" disablepictureinpicture'+
(it.poster?' poster="'+esc(it.poster)+'"':'')+' data-src="'+esc(it.video)+'"></video>'+'</span>'+'<span class="pxv-piso"></span>'+'<span class="pxv-nm">'+esc(it.texto)+'</span>'+'</a>';});var caja=document.createElement('section');caja.className='px pxv';caja.innerHTML='<span class="pxv-luz"></span><span class="pxv-suelo"></span>'+
(v.titulo?'<h2 class="pxv-tit">'+esc(v.titulo)+'</h2>':'')+'<div class="pxv-grid">'+tiles+'</div>';ancla.insertAdjacentElement('afterend',caja);var piso=v.fondo||'#EBEBE9';var tinta=v.tinta||'#101014';var cols=v.columnas||Math.min(N,4);PX.estilo('vidriera',`
/* Fondo PLANO, exactamente el mismo gris que traen los videos.
   Si el fondo lleva degrade, el rectangulo de cada video se ve. Medido. */
.pxv{--piso:${piso};--tinta:${tinta};
     position:relative;overflow:hidden;padding:${v.titulo ? '46px' : '30px'} 0 30px;
     background:var(--piso)}
/* Techo y piso van ENCIMA de todo, videos incluidos: por eso las prendas
   quedan bajo la misma luz y no cada una con la suya. */
.pxv-luz{position:absolute;inset:0;pointer-events:none;z-index:3;
     background:
       radial-gradient(120% 62% at 50% -6%,rgba(255,255,255,.92),rgba(255,255,255,0) 62%),
       linear-gradient(180deg,rgba(255,255,255,0) 62%,rgba(16,16,20,.055) 100%),
       radial-gradient(130% 100% at 50% 46%,rgba(255,255,255,0) 58%,rgba(16,16,20,.05) 100%)}
.pxv-suelo{position:absolute;left:0;right:0;bottom:104px;height:1px;pointer-events:none;z-index:3;
     background:linear-gradient(90deg,transparent,rgba(16,16,20,.06) 12%,rgba(16,16,20,.06) 88%,transparent)}

.pxv-tit{position:relative;margin:0 0 26px;text-align:center;font-family:var(--f-tit);
     font-weight:800;font-size:clamp(26px,3vw,40px);line-height:1;letter-spacing:.6px;
     text-transform:uppercase;color:var(--tinta)}

.pxv-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(${cols},1fr);
     padding:0 24px;align-items:end}

/* sin bordes ni cajas: las prendas comparten el fondo */
.pxv-it{position:relative;display:block;text-decoration:none;text-align:center;padding:0 8px;
     animation:pxv-in .7s cubic-bezier(.22,.61,.36,1) both;animation-delay:var(--d)}
@keyframes pxv-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

.pxv-caja{position:relative;display:flex;align-items:flex-end;justify-content:center;
     height:clamp(190px,20vw,300px)}
/* Difuminado que apaga el borde del video contra el fondo del bloque.
   Sin esto se ve el rectangulo de cada video: cada uno trae su propio
   viñeteado y no coinciden entre si. Verificado en la tienda real. */
.pxv-caja::after{content:"";position:absolute;inset:-6px;pointer-events:none;z-index:2;
     background:radial-gradient(112% 104% at 50% 50%,rgba(0,0,0,0) 54%,var(--piso) 86%)}
.pxv-vid{max-height:100%;width:auto;max-width:100%;display:block;position:relative;z-index:1;
     -webkit-mask-image:radial-gradient(132% 128% at 50% 50%,#000 84%,transparent 100%);
     mask-image:radial-gradient(132% 128% at 50% 50%,#000 84%,transparent 100%)}

/* la sombra: todas a la MISMA altura, por eso parecen paradas en el mismo piso */
/* sombra apenas insinuada: marcada de mas, el bloque parece un collage */
.pxv-piso{display:block;width:76%;height:10px;margin:14px auto 0;border-radius:50%;
     background:radial-gradient(50% 50% at 50% 50%,rgba(16,16,20,.10),rgba(16,16,20,0) 74%)}

.pxv-nm{display:block;position:relative;z-index:4;margin-top:22px;font-family:var(--f-tit);font-weight:800;
     font-size:clamp(17px,1.7vw,24px);line-height:1;letter-spacing:.7px;text-transform:uppercase;
     color:var(--tinta);transition:opacity var(--trans)}
.pxv-it:hover .pxv-nm{opacity:.55}

/* En el celular van las CUATRO en una sola fila: la vidriera se lee de
   un vistazo y no hay que scrollear para descubrir que habia mas cortes. */
@media (max-width:767px){
  .pxv{padding:${v.titulo ? '26px' : '18px'} 0 18px}
  .pxv-grid{grid-template-columns:repeat(${cols},1fr);padding:0 8px;column-gap:2px}
  .pxv-it{padding:0 2px}
  .pxv-caja{height:112px}
  .pxv-caja::after{inset:-3px;background:radial-gradient(116% 108% at 50% 50%,rgba(0,0,0,0) 48%,var(--piso) 88%)}
  .pxv-piso{width:82%;height:7px;margin-top:8px}
  .pxv-nm{margin-top:10px;font-size:11px;letter-spacing:.3px;line-height:1.15}
  .pxv-suelo{bottom:auto;top:calc(50% + 6px)}
  .pxv-tit{font-size:24px;margin-bottom:14px}
}
/* pantallas muy angostas: que el nombre no se parta feo */
@media (max-width:400px){
  .pxv-caja{height:96px}
  .pxv-nm{font-size:10px}
}
`);var vids=caja.querySelectorAll('.pxv-vid');function prender(el){if(!el.src){el.src=el.getAttribute('data-src');}
if(el.paused){var p=el.play();if(p&&p.catch){p.catch(function(){});}}}
function apagar(el){if(el.src&&!el.paused){el.pause();}}
var pendiente=false;function revisar(){pendiente=false;var alto=window.innerHeight||document.documentElement.clientHeight;Array.prototype.forEach.call(vids,function(el){var r=el.getBoundingClientRect();var cerca=(r.top<alto+200)&&(r.bottom>-200);if(cerca){prender(el);}else{apagar(el);}});}
function pedir(){if(!pendiente){pendiente=true;setTimeout(revisar,80);}}
window.addEventListener('scroll',pedir,{passive:true});window.addEventListener('resize',pedir,{passive:true});window.addEventListener('orientationchange',pedir,{passive:true});document.addEventListener('visibilitychange',revisar);[0,400,1000,2000,3500].forEach(function(t){setTimeout(revisar,t);});if(window.IntersectionObserver){var io=new IntersectionObserver(function(es){es.forEach(function(e){(e.isIntersecting?prender:apagar)(e.target);});},{rootMargin:'200px 0px'});Array.prototype.forEach.call(vids,function(el){io.observe(el);});}
PX.log('vidriera: '+N+' prendas montadas',true);return PX.marcar(caja,'vidriera');});PX.montar('probador',function(){var P=C.probador||{};if(!P.siluetas){PX.log('probador: falta la URL de las siluetas',true);return true;}
if(document.body.className.indexOf('template-home')===-1){return true;}
var ancla=PX.ancla(P.ancla||'[data-store="home-products-featured"]','[data-store="banner-services"]','[data-store="home-slider"]');if(!ancla){return false;}
PX.estilo('probador',`
*{margin:0;padding:0;box-sizing:border-box}
:root{--crema:#F3F3F4;--crema2:#E6E6E9;--blanco:#fff;--tinta:#17171A;--gris:#6C6C73;
--linea:#DEDEE2;--carbon:#17171A;--rojo:#E01E3C;--rojo2:#B3162F;--gris2:#8E8E96;
--sombra:0 10px 30px rgba(20,20,25,.07);--sombra2:0 16px 44px rgba(20,20,25,.11)}
html,body{background:var(--crema);color:var(--tinta);font-family:Nunito,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
body{min-height:100vh;overflow-x:hidden}
.demo-top{max-width:1180px;margin:0 auto;padding:26px 22px 0;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.demo-top .tag{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--rojo);background:#F0E3E6;border-radius:999px;padding:6px 13px}
.demo-top h1{font-size:15px;font-weight:600;color:var(--gris)}.demo-top h1 b{color:var(--tinta);font-weight:800}
.pv{position:relative;max-width:1180px;margin:20px auto 54px;padding:0 22px}
.stage{position:relative;border-radius:34px;overflow:hidden;box-shadow:var(--sombra2);background:
 radial-gradient(760px 440px at 12% 6%, #FFFFFF, transparent 64%),
 linear-gradient(180deg,#FAFAFB,#EDEDF0)}
.burbuja{position:absolute;border-radius:50%;pointer-events:none;opacity:.5;animation:flota linear infinite}
@keyframes flota{0%{transform:translate(0,0) scale(1)}50%{transform:translate(12px,-22px) scale(1.05)}100%{transform:translate(0,0) scale(1)}}
.head{position:relative;text-align:center;padding:42px 22px 4px}
.kick{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#fff;background:var(--rojo);border-radius:999px;padding:8px 16px}
.kick i{width:7px;height:7px;border-radius:50%;background:#fff;animation:blip 1.6s ease-in-out infinite}
@keyframes blip{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.45);opacity:.5}}
.head h2{font-size:46px;line-height:1.05;font-weight:900;margin:16px 0 10px;letter-spacing:-.02em}
.head h2 span{color:var(--rojo);display:inline-block;padding-bottom:3px;background-image:linear-gradient(var(--crema2),var(--crema2));
 background-repeat:no-repeat;background-position:0 96%;background-size:100% 8px;animation:subraya 3.4s ease-in-out infinite}
@keyframes subraya{0%,100%{background-size:100% 8px}50%{background-size:100% 13px}}
.head p{color:var(--gris);font-size:16px;font-weight:600;max-width:540px;margin:0 auto}
.wrap{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.02fr);gap:14px;padding:18px 34px 42px;align-items:stretch}
.viz{position:relative;min-height:580px;border-radius:26px;overflow:hidden;
 background:radial-gradient(ellipse 56% 32% at 50% 97%, rgba(60,60,70,.13), transparent 68%),linear-gradient(180deg,#FFFFFF,#EDEDF1);
 box-shadow:inset 0 -22px 40px rgba(40,40,50,.05), inset 0 1px 0 #fff}
#fig{position:absolute;inset:20px 20px 30px;z-index:2;width:calc(100% - 40px);height:calc(100% - 50px)}
/* --- el idle: se mece, respira y mira. Nunca se pausa con el cursor. --- */
#gFig{transform-box:fill-box;transform-origin:50% 100%;animation:mecer 5.6s ease-in-out infinite}
@keyframes mecer{
  0%,100%{transform:rotate(-.55deg) translateY(0)}
  50%    {transform:rotate(.55deg)  translateY(-7px)}
}
#gCab{transform-box:fill-box;transform-origin:50% 100%;animation:mirar 8s ease-in-out infinite}
@keyframes mirar{
  0%,100%{transform:rotate(0deg)}
  16%{transform:rotate(2.6deg)}
  30%{transform:rotate(1.1deg)}
  52%{transform:rotate(-2.4deg)}
  70%{transform:rotate(-.5deg)}
}
#gFig.festeja{animation:festejar 1.15s cubic-bezier(.28,.9,.32,1) 1}
@keyframes festejar{
  0%  {transform:translateY(0) scale(1,1)}
  12% {transform:translateY(14px) scale(1.05,.93)}
  38% {transform:translateY(-64px) scale(.96,1.05)}
  62% {transform:translateY(-40px) scale(.98,1.02)}
  82% {transform:translateY(10px) scale(1.05,.94)}
  100%{transform:translateY(0) scale(1,1)}
}
#gPala{transform-box:fill-box;transform-origin:50% 50%;animation:helice 1.6s linear infinite}
@keyframes helice{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
#gMirada{transition:transform .5s cubic-bezier(.3,1.2,.4,1)}
#gMirada.der{transform:translateX(10px)}
#fig{cursor:pointer}
#gOjos{transform-box:fill-box;transform-origin:50% 50%;animation:pestanear 5.4s ease-in-out infinite}
@keyframes pestanear{
  0%,42%,100%{transform:scaleY(1)}
  44%{transform:scaleY(.08)}
  46%{transform:scaleY(1)}
  70%{transform:scaleY(1)}
  72%{transform:scaleY(.08)}
  74%{transform:scaleY(1)}
}
@media (prefers-reduced-motion:reduce){#gFig,#gCab,#gOjos{animation:none}}
.sombrapiso{position:absolute;bottom:38px;left:50%;transform:translateX(-50%);width:168px;height:18px;border-radius:50%;background:rgba(40,40,50,.16);filter:blur(7px)}
.hud{position:absolute;z-index:4;top:14px;left:14px;display:flex;flex-direction:column;gap:7px}
.chip{background:rgba(255,255,255,.96);border-radius:15px;padding:7px 12px;min-width:106px;box-shadow:0 4px 14px rgba(30,30,40,.08);border:2px solid transparent;transition:border-color .3s,transform .3s}
.chip small{display:block;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gris)}
.chip b{font-size:16px;font-weight:900;font-variant-numeric:tabular-nums;transition:color .3s}
.chip b i{font-style:normal;font-size:10px;color:var(--gris);font-weight:700;margin-left:1px}
.chip.on{border-color:var(--rojo);transform:scale(1.04)}.chip.on b{color:var(--rojo)}
.globo{position:absolute;z-index:5;top:16px;right:14px;max-width:176px;background:var(--blanco);border-radius:20px 20px 20px 6px;
 padding:12px 15px;box-shadow:var(--sombra);font-size:13px;font-weight:700;line-height:1.42;animation:globoIn .5s cubic-bezier(.2,1.4,.4,1) both}
@keyframes globoIn{from{opacity:0;transform:translateY(8px) scale(.92)}to{opacity:1;transform:none}}
@keyframes cae{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--dx),340px) rotate(var(--rot))}}
.panel{background:var(--blanco);border-radius:28px;padding:30px;box-shadow:var(--sombra2);display:flex;flex-direction:column}
.steps{display:flex;gap:8px;margin-bottom:22px}
.steps i{flex:1;height:8px;border-radius:5px;background:var(--crema2);position:relative;overflow:hidden}
.steps i::after{content:"";position:absolute;inset:0;width:0;border-radius:5px;background:linear-gradient(90deg,var(--gris2),var(--rojo));transition:width .55s cubic-bezier(.3,1.2,.4,1)}
.steps i.done::after{width:100%}
.stepnum{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--rojo);margin-bottom:6px}
.panel h3{font-size:29px;font-weight:900;letter-spacing:-.02em;margin-bottom:5px;line-height:1.15}
.panel .sub{color:var(--gris);font-size:14.5px;font-weight:600;margin-bottom:20px}
.pane{display:none}.pane.on{display:block;animation:fade .5s cubic-bezier(.2,1,.3,1) both}
@keyframes fade{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
.opts{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}
.opt{border:2.5px solid var(--linea);background:var(--blanco);border-radius:20px;padding:15px 6px;text-align:center;cursor:pointer;transition:border-color .25s,transform .25s,box-shadow .25s,background .25s}
.opt:hover{transform:translateY(-3px);box-shadow:var(--sombra)}
.opt .em{width:42px;height:42px;margin:0 auto 7px;border-radius:14px;background:var(--crema);display:grid;place-items:center;transition:background .25s}
.opt svg{stroke:var(--gris);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:stroke .25s}
.opt span{font-size:13.5px;font-weight:800;display:block}
.opt small{font-size:11px;font-weight:700;color:var(--gris);display:block;margin-top:1px}
.opt.sel{border-color:var(--rojo);background:#FAF7F8}.opt.sel .em{background:#F3E4E7}.opt.sel svg{stroke:var(--rojo)}
.val{display:flex;align-items:baseline;gap:7px;margin:4px 0 12px}
.val b{font-size:52px;font-weight:900;letter-spacing:-.04em;font-variant-numeric:tabular-nums;color:var(--rojo)}
.val em{font-style:normal;color:var(--gris);font-size:16px;font-weight:800}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:12px;border-radius:8px;background:var(--crema2);outline:none;cursor:pointer}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:32px;height:32px;border-radius:50%;cursor:pointer;background:var(--rojo);border:5px solid #fff;box-shadow:0 4px 14px rgba(255,59,87,.45)}
input[type=range]::-moz-range-thumb{width:26px;height:26px;border-radius:50%;border:5px solid #fff;background:var(--rojo);cursor:pointer}
.scale{display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:var(--gris);margin-top:9px}
.nav{display:flex;gap:10px;margin-top:auto;padding-top:24px}
.btn{border:0;cursor:pointer;font-family:inherit;font-size:15.5px;font-weight:900;border-radius:16px;padding:16px 26px;transition:transform .2s cubic-bezier(.2,1.4,.4,1),box-shadow .25s,background .25s,color .25s}
.btn.pri{color:#fff;background:var(--rojo);box-shadow:0 8px 22px rgba(255,59,87,.32);flex:1}
.btn.pri:hover{transform:translateY(-2px) scale(1.015);box-shadow:0 12px 28px rgba(255,59,87,.42)}
.btn.gho{background:var(--crema);color:var(--gris)}.btn.gho:hover{background:var(--crema2);color:var(--tinta)}
.btn.volver{background:var(--blanco);color:var(--tinta);border:2.5px solid var(--tinta)}
.btn.volver:hover{background:var(--tinta);color:#fff;transform:translateY(-2px)}
.btn[disabled]{opacity:.4;cursor:not-allowed}
.res{text-align:center}
.badge{position:relative;width:128px;height:128px;margin:0 auto 12px;display:grid;place-items:center;animation:pop .7s cubic-bezier(.2,1.6,.4,1) both}
@keyframes pop{from{transform:scale(.4);opacity:0}to{transform:scale(1);opacity:1}}
.badge svg{position:absolute;inset:0;transform:rotate(-90deg)}
.badge .tal{font-size:54px;font-weight:900;letter-spacing:-.04em;color:var(--rojo)}
.badge .tl{position:absolute;bottom:4px;font-size:9.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--gris);background:var(--blanco);padding:1px 7px;border-radius:7px}
.res h3{font-size:30px;margin-bottom:6px}
.mset{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:14px}
.mset div{background:var(--crema);border-radius:16px;padding:12px 6px}
.mset small{display:block;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--gris);margin-bottom:2px}
.mset b{font-size:18px;font-weight:900;font-variant-numeric:tabular-nums}
.rubros{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.rb{border:2.5px solid var(--linea);background:var(--blanco);border-radius:18px;padding:14px 6px 12px;text-align:center;cursor:pointer;
 transition:border-color .25s,transform .25s,box-shadow .25s,background .25s}
.rb:hover{transform:translateY(-3px);box-shadow:var(--sombra)}
.rb svg{display:block;margin:0 auto 6px;stroke:var(--gris);fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;transition:stroke .25s}
.rb b{display:block;font-size:13.5px;font-weight:800}
.rb small{display:block;font-size:10.5px;font-weight:700;color:var(--gris);margin-top:1px;line-height:1.2}
.rb.sel{border-color:var(--rojo);background:#FAF7F8}.rb.sel svg{stroke:var(--rojo)}
.rb.sel b{color:var(--rojo)}
.opts.cuatro{grid-template-columns:repeat(4,1fr)}
.opts.cuatro .opt{padding:13px 4px}
.opts.cuatro .em{width:36px;height:36px;margin-bottom:5px}
.opts.cuatro span{font-size:12.5px}
.opts.cuatro small{font-size:10px}
.hallazgo{background:var(--tinta);color:#fff;border-radius:18px;padding:16px 18px 14px;margin-bottom:14px}
.hall-top{display:flex;align-items:baseline;gap:9px;justify-content:center}
.hallazgo b{font-size:30px;font-weight:900;line-height:1;font-variant-numeric:tabular-nums}
.hallazgo span{font-size:13.5px;font-weight:700;opacity:.85}
.hall-sub{font-size:12.5px;font-weight:700;opacity:.8;margin:10px 0 10px;text-align:center}
.btn.wa{width:100%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14.5px}
.btn.wa:hover{background:#1DA851;transform:translateY(-2px)}
.prendas{display:grid;grid-template-columns:repeat(5,1fr);gap:9px;margin:6px 0 18px}
.pz{background:var(--crema);border-radius:16px;padding:12px 4px 10px;text-align:center;transition:background .25s,transform .25s}
.pz:hover{background:var(--crema2);transform:translateY(-3px)}
.pz svg{display:block;margin:0 auto 6px;stroke:var(--tinta);fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.pz b{display:block;font-size:11px;font-weight:800;color:var(--rojo);line-height:1.1}
.pz small{display:block;font-size:9.5px;font-weight:700;color:var(--gris);margin-top:2px}
.hint{display:flex;gap:11px;text-align:left;background:var(--crema);border-radius:18px;padding:13px 15px;margin-bottom:14px}
.hint .ic{flex:none;width:28px;height:28px;border-radius:10px;background:var(--rojo);display:grid;place-items:center}
.hint svg{stroke:#fff;fill:none;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.hint p{font-size:13px;font-weight:700;line-height:1.45;color:var(--tinta)}
.mini{font-size:12px;font-weight:700;color:var(--gris);margin-top:10px}
.notas{max-width:1180px;margin:0 auto 70px;padding:0 22px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.nota{background:var(--blanco);border-radius:22px;padding:22px;box-shadow:var(--sombra)}
.nota h4{font-size:14px;font-weight:900;margin-bottom:8px;display:flex;align-items:center;gap:9px}
.nota h4 i{font-style:normal;width:26px;height:26px;border-radius:9px;display:grid;place-items:center;font-size:12px;font-weight:900;color:#fff;background:var(--rojo)}
.nota p{font-size:13px;font-weight:600;line-height:1.6;color:var(--gris)}
.nota p b{color:var(--tinta);font-weight:800}
.nota code{background:var(--crema);border-radius:6px;padding:1px 6px;font-size:12px;font-weight:800;color:var(--rojo2)}
#ref{position:absolute;width:0;height:0;overflow:hidden}
@media (max-width:900px){
  .rubros{grid-template-columns:repeat(2,1fr)}
  .opts.cuatro{grid-template-columns:repeat(2,1fr)}
  .wrap{grid-template-columns:1fr;padding:6px 16px 32px}.viz{min-height:430px}
  .head h2{font-size:33px}.head{padding:32px 16px 0}
  .panel{padding:22px}.panel h3{font-size:25px}
  .chip{min-width:90px;padding:6px 10px}.chip b{font-size:15px}
  .globo{max-width:142px;font-size:12px;padding:10px 12px}
  .notas{grid-template-columns:1fr}
}
`);var caja=document.createElement('section');caja.className='px pxp';caja.innerHTML=`<div class="demo-top">
  <span class="tag">Vista previa</span>
  <h1><b>Wess Indumentaria</b> &middot; Probador Virtual &mdash; bloque para la home</h1>
</div>

<section class="pv">
 <div class="stage" id="stage">
  <div class="head">
    <span class="kick"><i></i>Tu talle en 20 segundos</span>
    <h2>Probate la ropa <span>sin salir de casa</span></h2>
    <p>Contanos c&oacute;mo sos y te decimos qu&eacute; talle pedir en cada prenda. Sin cambios ni devoluciones.</p>
  </div>

  <div class="wrap">
    <div class="viz" id="viz">
      <div class="sombrapiso"></div>
      <div class="globo" id="globo">&iexcl;Hola! Contame c&oacute;mo sos y te digo tu talle.</div>
      <div class="hud">
        <div class="chip" id="c-alt"><small>Altura</small><b><span id="v-alt">175</span><i>cm</i></b></div>
        <div class="chip" id="c-pec"><small>Pecho</small><b><span id="v-pec">97</span><i>cm</i></b></div>
        <div class="chip" id="c-cin"><small>Cintura</small><b><span id="v-cin">84</span><i>cm</i></b></div>
        <div class="chip" id="c-cad"><small>Cadera</small><b><span id="v-cad">98</span><i>cm</i></b></div>
      </div>
      <svg id="fig" viewBox="0 0 1509 1860" preserveAspectRatio="xMidYMax meet"></svg>
    </div>

    <div class="panel">
      <div class="steps"><i id="s0"></i><i id="s1"></i><i id="s2"></i><i id="s3"></i><i id="s4"></i></div>

      <div class="pane" data-step="rubro">
        <div class="stepnum" data-num></div>
        <h3>&iquest;Qu&eacute; and&aacute;s buscando?</h3>
        <p class="sub">Cada prenda tiene su escala de talle. Con esto te pregunto solo lo que hace falta.</p>
        <div class="rubros" id="op-rubro">
          <div class="rb sel" data-v="remeras"><svg width="26" height="26" viewBox="0 0 24 24"><path d="M8 6.5 4.5 8.4l1.4 3.1 2-.9V20h8.2V10.6l2 .9 1.4-3.1L16 6.5a4 4 0 0 1-8 0z"/></svg><b>Remeras</b><small id="n-remeras">&nbsp;</small></div>
          <div class="rb" data-v="abrigos"><svg width="26" height="26" viewBox="0 0 24 24"><path d="M7.6 6.2 4 8.2l1.6 3.4 2-.9V20h8.8v-9.3l2 .9L20 8.2l-3.6-2H14a2 2 0 0 1-4 0z"/><path d="M12 7.2V20"/></svg><b>Abrigos</b><small id="n-abrigos">buzos y camperas</small></div>
          <div class="rb" data-v="pantalones"><svg width="26" height="26" viewBox="0 0 24 24"><path d="M7 4h10l-.6 8.4L15.8 20h-3l-.8-7.2-.8 7.2h-3L7.6 12.4z"/></svg><b>Pantalones</b><small id="n-pantalones">&nbsp;</small></div>
          <div class="rb" data-v="todo"><svg width="26" height="26" viewBox="0 0 24 24"><path d="M4 5h7v7H4zM13 5h7v7h-7zM4 14h7v5H4zM13 14h7v5h-7z"/></svg><b>Ver todo</b><small id="n-todo">el paso a paso</small></div>
        </div>
      </div>

      <div class="pane on" data-step="sil">
        <div class="stepnum" data-num></div>
        <h3>&iquest;Para qui&eacute;n buscamos?</h3>
        <p class="sub">Cambia la horma, la escala de talles y el cuerpo del personaje.</p>
        <div class="opts cuatro" id="op-sil">
          <div class="opt sel" data-v="h"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="5.5" r="2.8"/><path d="M8.6 9.8h6.8L16 15.4h-2V20.5h-4V15.4H8z"/></svg></div><span>Hombre</span></div>
          <div class="opt" data-v="m"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="5.5" r="2.8"/><path d="M12 8.5v4.5M8.4 20l1.7-6.5h3.8L15.6 20M9.6 13.5h4.8"/></svg></div><span>Mujer</span></div>
          <div class="opt" data-v="u"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M5.5 9.5c0-2.6 2.9-4.4 6.5-4.4s6.5 1.8 6.5 4.4M4 9.5h16M12 12v8.5"/></svg></div><span>Unisex</span></div>
          <div class="opt" data-v="teens"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2.4"/><path d="M9.2 10h5.6l.7 4.6h-1.7V20h-3.6v-5.4H8.5z"/><path d="M12 3.6V2"/></svg></div><span>Teens</span><small>talles 12-18</small></div>
        </div>
      </div>

      <div class="pane" data-step="alt">
        <div class="stepnum" data-num></div>
        <h3>&iquest;Cu&aacute;nto med&iacute;s?</h3>
        <p class="sub">Movelo y mir&aacute; c&oacute;mo cambia tu figura.</p>
        <div class="val"><b id="b-alt">175</b><em>cm</em></div>
        <input type="range" id="r-alt" min="148" max="205" value="175">
        <div class="scale"><span>1,48 m</span><span>2,05 m</span></div>
      </div>

      <div class="pane" data-step="pes">
        <div class="stepnum" data-num></div>
        <h3>&iquest;Cu&aacute;nto pes&aacute;s?</h3>
        <p class="sub">Con esto calculamos tu pecho, cintura y cadera.</p>
        <div class="val"><b id="b-pes">72</b><em>kg</em></div>
        <input type="range" id="r-pes" min="45" max="140" value="72">
        <div class="scale"><span>45 kg</span><span>140 kg</span></div>
      </div>

      <div class="pane" data-step="fit">
        <div class="stepnum" data-num></div>
        <h3>&iquest;C&oacute;mo te gusta que quede?</h3>
        <p class="sub">Mir&aacute; c&oacute;mo le cambia la remera a tu figura.</p>
        <div class="opts cuatro" id="op-fit">
          <div class="opt" data-v="-1"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 3.8h6l-.9 4.6 1.2 11.8H8.7l1.2-11.8z"/></svg></div><span>Ajustado</span><small>al cuerpo</small></div>
          <div class="opt sel" data-v="0"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M7.4 3.8h9.2l-1.2 4.8 1.2 11.6H7.4l1.2-11.6z"/></svg></div><span>Normal</span><small>como viene</small></div>
          <div class="opt" data-v="1"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M5.4 4h13.2l-1.8 5.2 1.2 11H6l1.2-11z"/></svg></div><span>Oversize</span><small>bien suelto</small></div>
          <div class="opt" data-v="99"><div class="em"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h7v5H4zM13 6h7v5h-7zM4 13h7v5H4zM13 13h7v5h-7z"/></svg></div><span>Ver todo</span><small>sin filtrar</small></div>
        </div>
      </div>

      <div class="pane res" data-step="res">
        <div class="badge">
          <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="55" fill="none" stroke="#F4ECE3" stroke-width="10"/>
            <circle id="arc" cx="64" cy="64" r="55" fill="none" stroke="#FF3B57" stroke-width="10" stroke-linecap="round" stroke-dasharray="346" stroke-dashoffset="346" style="transition:stroke-dashoffset 1.3s cubic-bezier(.2,.9,.2,1)"/></svg>
          <span class="tal" id="talle">M</span><span class="tl">Tu talle</span>
        </div>
        <h3 id="res-tit">&iexcl;Excelente! Sos talle <span id="talle2">M</span></h3>
        <p class="sub" id="res-sub">Seg&uacute;n tus medidas y el calce que elegiste.</p>
        <div class="mset">
          <div><small>Pecho</small><b id="m-pec">97</b></div>
          <div><small>Cintura</small><b id="m-cin">84</b></div>
          <div><small>Cadera</small><b id="m-cad">98</b></div>
        </div>
        <div class="hallazgo" id="hallazgo">
          <div class="hall-top">
            <b id="cant">&mdash;</b>
            <span id="hall-txt">prendas en tu talle</span>
          </div>
          <p class="hall-sub">&iquest;Te avisamos cuando entren m&aacute;s en tu talle?</p>
          <button class="btn wa" id="wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.1-.7.9-.9 1.1-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4l-.6-.3z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
            &nbsp;Avisame por WhatsApp
          </button>
        </div>
        <div class="prendas" id="prendas"></div>
        <button class="btn pri" style="width:100%" id="go">Ver mis prendas</button>
        <p class="mini">Te lleva al cat&aacute;logo ya filtrado con tus medidas.</p>
        <button class="btn volver" id="otra" style="width:100%;margin-top:10px">&#8635; &nbsp;Volver a empezar</button>
      </div>

      <div class="nav" id="nav">
        <button class="btn gho" id="back" disabled>Atr&aacute;s</button>
        <button class="btn pri" id="next">Siguiente</button>
      </div>
    </div>
  </div>
 </div>
</section>

<div class="notas">
  <div class="nota"><h4><i>1</i>D&oacute;nde vive</h4><p>Bloque inyectado desde el <b>Footer</b> del tema <b>morelia</b>, anclado a un bloque nativo de la home. Convive con los 9 m&oacute;dulos PRAXIS ya vivos en la tienda.</p></div>
  <div class="nota"><h4><i>2</i>El personaje</h4><p>Es la <b>ilustraci&oacute;n original</b>, sin redibujar. Se mueven sus puntos seg&uacute;n las medidas: la cintura se ensancha, las piernas se estiran, <b>la cabeza no cambia nunca</b>.</p></div>
  <div class="nota"><h4><i>3</i>A d&oacute;nde lo manda</h4><p>Al <b>filtro por talle nativo</b> (<code>?Talle=M</code>), el mismo que Wess ya usa en L&iacute;nea Teens. No se crea ninguna categor&iacute;a nueva ni aparece nada en el men&uacute;.</p></div>
</div>`;ancla.insertAdjacentElement(P.donde==='antes'?'beforebegin':'afterend',caja);var arrancado=false,pidiendo=false,pendiente=false;function arrancar(){if(arrancado||pidiendo){return;}
pidiendo=true;fetch(P.siluetas).then(function(r){return r.text();}).then(function(svg){var d=document.createElement('div');d.style.cssText='position:absolute;width:0;height:0;overflow:hidden';d.innerHTML=svg;caja.appendChild(d);arrancado=true;motor();PX.log('probador: siluetas cargadas y motor en marcha',true);})['catch'](function(e){pidiendo=false;PX.log('probador: no pude bajar las siluetas — '+e.message,true);});}
function revisar(){pendiente=false;if(arrancado||pidiendo){return;}
var alto=window.innerHeight||document.documentElement.clientHeight;var r=caja.getBoundingClientRect();if(r.top<alto+300&&r.bottom>-300){arrancar();}}
function pedir(){if(!pendiente){pendiente=true;setTimeout(revisar,80);}}
window.addEventListener('scroll',pedir,{passive:true});window.addEventListener('resize',pedir,{passive:true});document.addEventListener('visibilitychange',revisar);[0,400,1000,2000,3500].forEach(function(t){setTimeout(revisar,t);});function motor(){(function(){"use strict";var TONOS=[{n:'Carb\u00f3n',c:'#232122',sub:'el negro de Wess'},{n:'Crudo',c:'#E6DCCB',sub:'hueso c\u00e1lido'},{n:'Terracota',c:'#B0563B',sub:'tierra quemada'},{n:'Oliva',c:'#5C6349',sub:'verde militar'},{n:'Borgo\u00f1a',c:'#6B2333',sub:'vino profundo'},{n:'Petr\u00f3leo',c:'#27505A',sub:'azul profundo'},{n:'Camel',c:'#B08152',sub:'cuero claro'}];var TIENDA=(C.probador&&C.probador.tienda)||location.origin;var WA='543516661355';var RUBROS={remeras:{n:'Remeras',cat:'/remeras/',esc:'letra',pasos:['alt','pes','fit']},abrigos:{n:'Abrigos',cat:'/abrigos/',esc:'letra',pasos:['alt','pes','fit']},pantalones:{n:'Pantalones',cat:'/pantalones/',esc:'num',pasos:['alt','pes']},todo:{n:'todo el cat\u00e1logo',cat:'/productos/',esc:'ambas',pasos:['alt','pes','fit']}};var TEENS_CAT='/linea-teens/';var STOCK={letra:{XS:24,S:331,M:452,L:447,XL:388,XXL:159,XXXL:7},num:{36:38,38:176,40:180,42:180,44:158,46:130,48:19},teens:{10:4,12:75,14:74,16:74,18:74}};var S={rubro:'remeras',sil:'h',alt:175,pes:72,fit:0,tono:0,step:0};var previo='h';var FLUJO=['rubro','sil','alt','pes','fit','res'];function armarPasos(){FLUJO=(S.sil==='teens')?['sil','alt','pes','res']:['sil','rubro'].concat(RUBROS[S.rubro].pasos,['res']);}
function esTeens(){return S.sil==='teens';}
function escalaActiva(){return esTeens()?'teens':RUBROS[S.rubro].esc;}
function catActiva(){return esTeens()?TEENS_CAT:RUBROS[S.rubro].cat;}
function nombreActivo(){return esTeens()?'L\u00ednea Teens':RUBROS[S.rubro].n;}
function rangos(){var teen=esTeens();var ra=document.getElementById('r-alt'),rp=document.getElementById('r-pes');ra.min=teen?130:148;ra.max=teen?178:205;rp.min=teen?25:45;rp.max=teen?75:140;if(teen){if(S.alt>178)S.alt=158;if(S.pes>75)S.pes=48;}
else{if(S.alt<148)S.alt=172;if(S.pes<45)S.pes=68;}
ra.value=S.alt;rp.value=S.pes;document.getElementById('b-alt').textContent=S.alt;document.getElementById('b-pes').textContent=S.pes;}
var MAXSTEP=5;var Y0=278,Y1=1785,H=Y1-Y0,CXI=754;var f=function(fr){return Y1-fr*H;};var Y_HOMBRO=f(0.818),Y_CINTURA=f(0.618),Y_CADERA=f(0.520);var HORMA={h:[[f(1.000),0,0],[f(0.880),0,0],[f(0.845),.25,.35],[f(0.818),.45,.55],[f(0.728),1.00,.80],[f(0.618),1.55,.85],[f(0.520),1.05,.85],[f(0.468),1.00,1.05],[f(0.283),.62,1.35],[f(0.100),.40,1.30],[f(0.048),.25,.40],[f(0.000),.20,0]],m:[[f(1.000),0,0],[f(0.880),0,0],[f(0.845),.22,.35],[f(0.818),.34,.55],[f(0.728),.92,.80],[f(0.618),1.45,.85],[f(0.520),1.35,.85],[f(0.468),1.15,1.05],[f(0.283),.68,1.35],[f(0.100),.42,1.30],[f(0.048),.25,.40],[f(0.000),.20,0]],u:[[f(1.000),0,0],[f(0.880),0,0],[f(0.845),.24,.35],[f(0.818),.40,.55],[f(0.728),.96,.80],[f(0.618),1.50,.85],[f(0.520),1.20,.85],[f(0.468),1.08,1.05],[f(0.283),.65,1.35],[f(0.100),.41,1.30],[f(0.048),.25,.40],[f(0.000),.20,0]],teens:[[f(1.000),0,0],[f(0.880),0,0],[f(0.845),.22,.35],[f(0.818),.34,.55],[f(0.728),.90,.80],[f(0.618),1.40,.85],[f(0.520),1.05,.85],[f(0.468),1.00,1.05],[f(0.283),.60,1.35],[f(0.100),.38,1.30],[f(0.048),.22,.40],[f(0.000),.18,0]]};function zonaEn(y,i){var p=HORMA[S.sil]||HORMA.u;if(y<=p[0][0])return p[0][i];if(y>=p[p.length-1][0])return p[p.length-1][i];for(var k=0;k<p.length-1;k++)
if(y>=p[k][0]&&y<=p[k+1][0]){var t=(y-p[k][0])/(p[k+1][0]-p[k][0]);t=t*t*(3-2*t);return p[k][i]+(p[k+1][i]-p[k][i])*t;}
return p[p.length-1][i];}
var NUM=/-?\d*\.?\d+(?:e[-+]?\d+)?/gi;function parsear(d){var out=[],re=/([MLCZmlcz])([^MLCZmlcz]*)/g,m;while((m=re.exec(d))){var nums=m[2].match(NUM);out.push({c:m[1],p:nums?nums.map(Number):[]});}
return out;}
function oscuro(fill){var m=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(fill||'');if(!m)return false;return(+m[1]<95&&+m[2]<95&&+m[3]<95);}
var GORRA=[{f:'#232122',d:'M 693 336 C 695 248 813 248 815 336 Z'},{f:'#2E2B2A',d:'M 682 332 C 700 368 808 368 826 332 C 808 352 700 352 682 332 Z'},{f:'#1B1918',d:'M 693 324 L 815 324 L 815 338 L 693 338 Z'},{f:'#E01E3C',d:'M 748 280 C 748 272 760 272 760 280 C 760 288 748 288 748 280 Z'}];var OJOS=[{f:'#2B2726',d:'M 719 386 C 719 372 741 372 741 386 C 741 400 719 400 719 386 Z'},{f:'#2B2726',d:'M 767 386 C 767 372 789 372 789 386 C 789 400 767 400 767 386 Z'}];var BOCA={f:'#2B2726',d:'M 736 425 C 743 437 765 437 772 425 C 765 431 743 431 736 425 Z'};var CARA_CX={h:0,m:-20,u:0,teens:0};function correrCara(d,dx){if(!dx)return d;var i=0;return d.replace(/-?\d*\.?\d+/g,function(n){var v=parseFloat(n),r=(i%2===0)?(v+dx):v;i++;return r.toFixed(1);});}
var HELI=[{f:'#E01E3C',d:'M 693 336 C 695 248 813 248 815 336 Z'},{f:'#FFFFFF',d:'M 754 249 C 792 252 815 292 815 336 L 754 336 Z'},{f:'#17171A',d:'M 682 332 C 700 368 808 368 826 332 C 808 352 700 352 682 332 Z'},{f:'#17171A',d:'M 693 324 L 815 324 L 815 338 L 693 338 Z'},{f:'#8E8E96',d:'M 747 236 L 761 236 L 761 258 L 747 258 Z'}];var PALA={f:'#4A4A52',d:'M 648 231 C 660 219 848 219 860 231 C 848 243 660 243 648 231 Z'};var FIG={},SVG=document.getElementById('fig');['h','m'].forEach(function(k){var origen=document.getElementById(k==='h'?'figH':'figM');FIG[k]={nodos:[],defs:origen.querySelector('defs')};origen.querySelectorAll('path').forEach(function(p){FIG[k].nodos.push({src:p,seg:parsear(p.getAttribute('d')||''),fill:p.getAttribute('fill')||'',prenda:false});});});var vivos=[],gradsVivos=[],gradsOrig=[];function montar(){var clave=(S.sil==='m')?'m':'h';var origen=document.getElementById(clave==='m'?'figM':'figH');SVG.innerHTML='';var defs=origen.querySelector('defs');if(defs)SVG.appendChild(defs.cloneNode(true));var gEsc=document.createElementNS('http://www.w3.org/2000/svg','g');gEsc.setAttribute('id','gEsc');var gFig=document.createElementNS('http://www.w3.org/2000/svg','g');gFig.setAttribute('id','gFig');var gCab=document.createElementNS('http://www.w3.org/2000/svg','g');gCab.setAttribute('id','gCab');SVG.appendChild(gEsc);gEsc.appendChild(gFig);escalarCuerpo();vivos=[];FIG[clave].nodos.forEach(function(n){var el=n.src.cloneNode(false);gFig.appendChild(el);vivos.push({el:el,seg:n.seg,fill:n.fill,prenda:false,cabeza:false});});vivos.forEach(function(v){var b=v.el.getBBox(),cy=b.y+b.height/2;v.prenda=oscuro(v.fill)&&b.width>140&&cy>Y_HOMBRO&&cy<Y_CADERA+80;});if(esTeens()){HELI.forEach(function(g){var el=document.createElementNS('http://www.w3.org/2000/svg','path');el.setAttribute('fill',g.f);gFig.appendChild(el);vivos.push({el:el,seg:parsear(g.d),fill:g.f,prenda:false,cabeza:true});});}
if(S.sil==='u'){GORRA.forEach(function(g){var el=document.createElementNS('http://www.w3.org/2000/svg','path');el.setAttribute('fill',g.f);gFig.appendChild(el);vivos.push({el:el,seg:parsear(g.d),fill:g.f,prenda:false,cabeza:true});});}
vivos.forEach(function(v){if(!v.cabeza){var b=v.el.getBBox();v.cabeza=(b.height>0&&b.y+b.height<Y_HOMBRO-40);}});gFig.appendChild(gCab);vivos.forEach(function(v){if(v.cabeza)gCab.appendChild(v.el);});var dx=CARA_CX[S.sil]||0;var bocaEl=document.createElementNS('http://www.w3.org/2000/svg','path');bocaEl.setAttribute('fill',BOCA.f);gCab.appendChild(bocaEl);vivos.push({el:bocaEl,seg:parsear(correrCara(BOCA.d,dx)),fill:BOCA.f,prenda:false,cabeza:true});var gMirada=document.createElementNS('http://www.w3.org/2000/svg','g');gMirada.setAttribute('id','gMirada');gCab.appendChild(gMirada);var gOjos=document.createElementNS('http://www.w3.org/2000/svg','g');gOjos.setAttribute('id','gOjos');gMirada.appendChild(gOjos);OJOS.forEach(function(o){var el=document.createElementNS('http://www.w3.org/2000/svg','path');el.setAttribute('fill',o.f);gOjos.appendChild(el);vivos.push({el:el,seg:parsear(correrCara(o.d,dx)),fill:o.f,prenda:false,cabeza:true});});if(mirando)gMirada.classList.add('der');if(esTeens()){var gPala=document.createElementNS('http://www.w3.org/2000/svg','g');gPala.setAttribute('id','gPala');gCab.appendChild(gPala);var pal=document.createElementNS('http://www.w3.org/2000/svg','path');pal.setAttribute('fill',PALA.f);gPala.appendChild(pal);vivos.push({el:pal,seg:parsear(PALA.d),fill:PALA.f,prenda:false,cabeza:true});}
gradsVivos=[].slice.call(SVG.querySelectorAll('linearGradient'));gradsOrig=gradsVivos.map(function(g){return{x1:+g.getAttribute('x1'),y1:+g.getAttribute('y1'),x2:+g.getAttribute('x2'),y2:+g.getAttribute('y2'),usa:g.getAttribute('gradientUnits')==='userSpaceOnUse'};});}
function escalarCuerpo(){var g=document.getElementById('gEsc');if(!g)return;var k=esTeens()?0.74:1;g.setAttribute('transform',k===1?'':'translate('+CXI+','+Y1+') scale('+k+') translate('+(-CXI)+','+(-Y1)+')');}
var PASOS=260;function tablaY(a){var t=new Float64Array(PASOS+1),acum=Y0;t[0]=Y0;for(var i=1;i<=PASOS;i++){var y1=Y0+H*(i-1)/PASOS,y2=Y0+H*i/PASOS;acum+=(y2-y1)*(1+(a-1)*zonaEn((y1+y2)/2,2));t[i]=acum;}
return t;}
function warpY(y,T){var p=(y-Y0)/H*PASOS;if(p<=0)return T[0]+(y-Y0);if(p>=PASOS)return T[PASOS]+(y-Y1);var i=p|0;return T[i]+(T[i+1]-T[i])*(p-i);}
function medidas(){var esperado=(S.alt-100)*.92;var k=Math.max(.74,Math.min(1.62,Math.pow(S.pes/esperado,.62)));var mu=(S.sil==='m');return{k:k,pecho:Math.round((mu?84:94)*k+(S.alt-170)*.18),cintura:Math.round((mu?68:80)*Math.pow(k,1.35)+(S.alt-170)*.12),cadera:Math.round(95*Math.pow(k,.95)+(S.alt-170)*.15)};}
var ESCALA=['XS','S','M','L','XL','XXL','XXXL'];function talleLetra(m){var p=m.pecho+(S.sil==='m'?6:0);var i=p<88?0:p<94?1:p<100?2:p<107?3:p<115?4:p<125?5:6;if(S.fit!==99)i=Math.max(0,Math.min(6,i+S.fit));return{t:ESCALA[i],i:i};}
var NUMS=[36,38,40,42,44,46,48];function talleNum(m){var c=m.cintura;var i=c<69?0:c<74?1:c<81?2:c<86?3:c<90?4:c<94?5:6;return{t:String(NUMS[i]),i:i};}
var TEENS=[10,12,14,16,18];function talleTeens(){var a=S.alt;var i=a<142?0:a<152?1:a<160?2:a<168?3:4;return{t:String(TEENS[i]),i:i};}
function talle(){var m=medidas(),esc=escalaActiva();var r;if(esc==='num')r=talleNum(m);else if(esc==='teens')r=talleTeens();else r=talleLetra(m);r.m=m;r.esc=esc;if(esc==='ambas'){r.arriba=talleLetra(m).t;r.abajo=talleNum(m).t;}
return r;}
function escalaDe(esc){return esc==='num'?'num':esc==='teens'?'teens':'letra';}
var VIS={k:1,a:1},DEST={k:1,a:1},animando=false,mirando=false,reloj=0;function mirar(hacia){mirando=hacia;var g=document.getElementById('gMirada');if(g)g.classList.toggle('der',hacia);}
function acercar(){var listo=true;['k','a'].forEach(function(p){var d=DEST[p]-VIS[p];if(Math.abs(d)>0.0008){VIS[p]+=d*0.18;listo=false;}
else VIS[p]=DEST[p];});dibujar();if(!listo)requestAnimationFrame(acercar);else animando=false;}
function pintar(){var m=medidas();DEST.k=m.k;DEST.a=0.88+(S.alt-148)/57*0.24;document.getElementById('v-alt').textContent=S.alt;document.getElementById('v-pec').textContent=m.pecho;document.getElementById('v-cin').textContent=m.cintura;document.getElementById('v-cad').textContent=m.cadera;if(!animando){animando=true;requestAnimationFrame(acercar);}
clearTimeout(reloj);reloj=setTimeout(function(){VIS.k=DEST.k;VIS.a=DEST.a;animando=false;dibujar();},460);}
function dibujar(){var k=VIS.k,a=VIS.a;var T=tablaY(a),corr=Y1-warpY(Y1,T);var holg=S.fit<0?0.975:(S.fit>0?1.10:1.0);var largo=S.fit>0?34:(S.fit<0?-6:0);for(var n=0;n<vivos.length;n++){var v=vivos[n],seg=v.seg,d='';for(var i=0;i<seg.length;i++){var q=seg[i];d+=q.c;for(var j=0;j+1<q.p.length;j+=2){var x=q.p[j],y=q.p[j+1];var sx=1+(k-1)*zonaEn(y,1);if(v.prenda)sx*=holg;var yy=warpY(y,T)+corr;if(v.prenda&&largo&&y>Y_CINTURA)
yy+=largo*Math.min(1,(y-Y_CINTURA)/120);d+=' '+(CXI+(x-CXI)*sx).toFixed(2)+' '+yy.toFixed(2);}}
v.el.setAttribute('d',d);if(v.prenda)v.el.setAttribute('fill','#232122');}
gradsVivos.forEach(function(g,i){var o=gradsOrig[i];if(!o||!o.usa)return;var s1=1+(k-1)*zonaEn(o.y1,1),s2=1+(k-1)*zonaEn(o.y2,1);g.setAttribute('x1',(CXI+(o.x1-CXI)*s1).toFixed(2));g.setAttribute('y1',(warpY(o.y1,T)+corr).toFixed(2));g.setAttribute('x2',(CXI+(o.x2-CXI)*s2).toFixed(2));g.setAttribute('y2',(warpY(o.y2,T)+corr).toFixed(2));});}
var chips={alt:document.getElementById('c-alt'),pec:document.getElementById('c-pec'),cin:document.getElementById('c-cin'),cad:document.getElementById('c-cad')};function hud(){chips.alt.classList.toggle('on',S.step===1);chips.pec.classList.toggle('on',S.step===2||S.step===4);chips.cin.classList.toggle('on',S.step===2||S.step===4);chips.cad.classList.toggle('on',S.step===2||S.step===4);}
var globo=document.getElementById('globo');var FRASES=['\u00a1Hola! \u00bfPara qui\u00e9n buscamos?','\u00bfQu\u00e9 and\u00e1s buscando?','Mov\u00e9s la barra y mi figura crece.','Ahora te doy tu forma. Sin vueltas.','Mir\u00e1 c\u00f3mo me queda la remera con cada calce.','\u00a1Listo! Ya s\u00e9 qu\u00e9 talle te queda.'];function decir(t){globo.textContent=t;globo.style.animation='none';void globo.offsetWidth;globo.style.animation='globoIn .5s cubic-bezier(.2,1.4,.4,1) both';}
var panes=document.querySelectorAll('.pane');var bBack=document.getElementById('back'),bNext=document.getElementById('next'),nav=document.getElementById('nav');function ir(n){armarPasos();S.step=Math.max(0,Math.min(FLUJO.length-1,n));var clave=FLUJO[S.step];panes.forEach(function(p){p.classList.toggle('on',p.dataset.step===clave);});var barras=document.querySelectorAll('.steps i');barras.forEach(function(b,i){b.classList.toggle('done',i<=S.step);});var num=document.querySelector('.pane.on [data-num]');if(num)num.textContent='Paso '+(S.step+1)+' de '+(FLUJO.length-1);bBack.disabled=(S.step===0);bNext.textContent=(S.step===FLUJO.length-2)?'Ver mi talle':'Siguiente';nav.style.display=(clave==='res')?'none':'flex';decir(FRASES[Math.min(S.step,FRASES.length-1)]);mirar(false);if(clave==='res')resultado();hud();pintar();}
function confeti(){var viz=document.getElementById('viz'),col=['#E01E3C','#8E8E96','#17171A','#C7C7CE','#B3162F'];for(var i=0;i<24;i++){(function(i){var c=document.createElement('div');c.style.cssText='position:absolute;z-index:6;width:8px;height:12px;border-radius:2px;top:18%;left:'+
(32+Math.random()*36)+'%;background:'+col[i%col.length]+';';c.style.setProperty('--dx',((Math.random()-.5)*200).toFixed(0)+'px');c.style.setProperty('--rot',(Math.random()*900-450).toFixed(0)+'deg');c.style.animation='cae '+(1.5+Math.random()*1.2)+'s ease-in '+(Math.random()*.4)+'s forwards';viz.appendChild(c);setTimeout(function(){c.remove();},3400);})(i);}}
function urlDestino(r){var cat=catActiva();if(S.fit===99&&escalaActiva()!=='ambas')return TIENDA+cat;return TIENDA+cat+'?Talle='+encodeURIComponent(r.t);}
function contar(r,cb){var caja=document.getElementById('cant');caja.textContent='\u2026';var respaldo=(STOCK[escalaDe(r.esc)]||{})[r.t]||0;var url=urlDestino(r);try{fetch(url,{credentials:'same-origin'}).then(function(x){return x.text();}).then(function(t){var d=new DOMParser().parseFromString(t,'text/html');var n=d.querySelectorAll('[data-store^="product-item-info"]').length;cb(n>0?n:respaldo,n>=72);}).catch(function(){cb(respaldo,false);});}catch(e){cb(respaldo,false);}}
function resultado(){var r=talle();var esAmbas=(r.esc==='ambas');document.getElementById('talle').textContent=esAmbas?r.arriba:r.t;document.getElementById('talle2').textContent=esAmbas?(r.arriba+' arriba \u00b7 '+r.abajo+' abajo'):r.t;document.getElementById('res-tit').innerHTML=esAmbas?'\u00a1Excelente! Sos <span id="talle2">'+r.arriba+' arriba \u00b7 '+r.abajo+' abajo</span>':'\u00a1Excelente! Sos talle <span id="talle2">'+r.t+'</span>';contar(r,function(n,tope){document.getElementById('cant').textContent=tope?(n+'+'):n;document.getElementById('hall-txt').textContent='prendas encontradas en '+(nombreActivo()==='todo el cat\u00e1logo'?'tu talle':nombreActivo().toLowerCase())+
(S.fit===99?' (sin filtrar por calce)':'');document.getElementById('go').innerHTML='Ver '+(tope?'las '+n+'+':'las '+n)+' prendas';});document.getElementById('m-pec').textContent=r.m.pecho;document.getElementById('m-cin').textContent=r.m.cintura;document.getElementById('m-cad').textContent=r.m.cadera;var fitTxt=S.fit<0?'bien al cuerpo':(S.fit>0?'suelto y oversize':'con calce normal');document.getElementById('res-sub').textContent='Con '+S.alt+' cm y '+S.pes+' kg, y porque te gusta '+fitTxt+'.';var arc=document.getElementById('arc');arc.style.strokeDashoffset=346;setTimeout(function(){arc.style.strokeDashoffset=346-346*(0.42+r.i*0.09);},90);pintarPrendas(esAmbas?r.arriba:r.t);var g=document.getElementById('gFig');if(g){g.classList.remove('festeja');void g.offsetWidth;g.classList.add('festeja');setTimeout(function(){g.classList.remove('festeja');},1300);}
confeti();}
var PRENDAS=[{n:'Remeras',d:'M8 6.5 4.5 8.4l1.4 3.1 2-.9V20h8.2V10.6l2 .9 1.4-3.1L16 6.5a4 4 0 0 1-8 0z'},{n:'Buzos',d:'M7.6 6.2 4 8.2l1.6 3.4 2-.9V20h8.8v-9.3l2 .9L20 8.2l-3.6-2H14a2 2 0 0 1-4 0z M9.2 6.4h5.6'},{n:'Jeans',d:'M7 4h10l-.6 8.4L15.8 20h-3l-.8-7.2-.8 7.2h-3L7.6 12.4z'},{n:'Camperas',d:'M8 6 4.6 8l1.5 3.2 1.9-.8V20h8V10.4l1.9.8L19.4 8 16 6l-4 1.6z M12 7.6V20'},{n:'Bermudas',d:'M6.5 5h11l-.5 6-.6 8h-3.2L12 12l-1.2 7H7.6L7 11z'}];var cajaPrendas=document.getElementById('prendas');function pintarPrendas(t){var h='';PRENDAS.forEach(function(p){h+='<div class="pz"><svg width="26" height="26" viewBox="0 0 24 24"><path d="'+p.d+'"/></svg>'+'<b>'+t+'</b><small>'+p.n+'</small></div>';});cajaPrendas.innerHTML=h;}
function grupo(id,cb){var box=document.getElementById(id);box.addEventListener('click',function(e){var o=e.target.closest('.opt');if(!o)return;box.querySelectorAll('.opt').forEach(function(x){x.classList.remove('sel');});o.classList.add('sel');cb(o.dataset.v);});}
(function(){var box=document.getElementById('op-rubro');box.addEventListener('click',function(e){var o=e.target.closest('.rb');if(!o)return;box.querySelectorAll('.rb').forEach(function(x){x.classList.remove('sel');});o.classList.add('sel');S.rubro=o.dataset.v;armarPasos();mirar(true);pintar();});})();grupo('op-sil',function(v){S.sil=v;if(v==='teens'){S.alt=158;S.pes=48;}
else{S.alt=175;S.pes=72;}
armarPasos();rangos();montar();dibujar();pintar();mirar(true);});grupo('op-fit',function(v){S.fit=+v;pintar();mirar(true);});bNext.addEventListener('click',function(){ir(S.step+1);});bBack.addEventListener('click',function(){ir(S.step-1);});document.getElementById('otra').addEventListener('click',function(){ir(0);});document.getElementById('wa').addEventListener('click',function(){var r=talle();var t=(r.esc==='ambas')?(r.arriba+' arriba y '+r.abajo+' abajo'):('talle '+r.t);var msg='Hola Wess! Us\u00e9 el probador y me dio '+t+'.'+'\nMis medidas: pecho '+r.m.pecho+' cm, cintura '+r.m.cintura+' cm, cadera '+r.m.cadera+' cm.'+'\nBusco: '+nombreActivo()+'.'+'\n\u00bfMe avisan cuando entren m\u00e1s prendas en mi talle?'+'\n'+urlDestino(r);window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank');});document.getElementById('go').addEventListener('click',function(){var r=talle();alert('En la tienda real este boton abre:\n\n  '+urlDestino(r)+'\n\nEs el MISMO filtro por talle que Wess ya usa hoy en Linea Teens\n(/linea-teens/?Talle=12). No hay que inventar nada nuevo.\n\nLlega ya filtrado con:\n\u00b7 Talle '+r.t+'\n\u00b7 Pecho '+r.m.pecho+' cm   \u00b7   Cintura '+r.m.cintura+' cm'+'\n\u00b7 Calce '+(S.fit<0?'ajustado':S.fit>0?'oversize':'normal')+'\n\nY ordenado por afinidad con tus medidas.');});document.getElementById('r-alt').addEventListener('input',function(){S.alt=+this.value;document.getElementById('b-alt').textContent=S.alt;pintar();mirar(true);});document.getElementById('r-pes').addEventListener('input',function(){S.pes=+this.value;document.getElementById('b-pes').textContent=S.pes;pintar();mirar(true);});document.getElementById('viz').addEventListener('click',function(e){if(e.target.closest('.globo'))return;ir(0);});var stage=document.getElementById('stage'),bg=['#E8E8EC','#EFEFF2','#E2E2E7','#F1F1F4'];for(var i=0;i<8;i++){var b=document.createElement('div');b.className='burbuja';var s=30+Math.random()*80;b.style.width=b.style.height=s+'px';b.style.background=bg[i%bg.length];b.style.left=(Math.random()*92)+'%';b.style.top=(Math.random()*82)+'%';b.style.animationDuration=(7+Math.random()*7)+'s';b.style.animationDelay=(-Math.random()*9)+'s';stage.insertBefore(b,stage.firstChild);}
var hs=location.hash;var rm=hs.match(/rubro-(\w+)/);if(rm&&RUBROS[rm[1]]){S.rubro=rm[1];document.querySelectorAll('#op-rubro .rb').forEach(function(o){o.classList.toggle('sel',o.dataset.v===S.rubro);});}
var sm=hs.match(/sil(h|m|u|teens)/);if(sm){S.sil=sm[1];if(S.sil==='teens'){S.alt=158;S.pes=48;}
document.querySelectorAll('#op-sil .opt').forEach(function(o){o.classList.toggle('sel',o.dataset.v===S.sil);});}
rangos();montar();VIS.k=1;VIS.a=1;var h=(hs.match(/paso(\d)/)||[])[1];ir(h?+h:0);})();}
return PX.marcar(caja,'probador');});})();