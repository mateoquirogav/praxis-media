/* ══════════════════════════════════════════════════════════════
   VÖR · LANDING ENCUENTRO 120 (va en la descripción del producto)

   El contenido (textos y fotos) vive en el HTML de la descripción,
   así se edita desde el panel. Este archivo solo:
   1) pone los estilos (el editor de TN borra los <style>),
   2) saca el bloque de la columna de la derecha (~460 px en Río) y
      lo deja debajo del producto, a todo el ancho. Se mueve SOLO el
      bloque nuestro, nunca el contenedor de la descripción del tema,
   3) arma los botones de color, las preguntas que se abren y la
      barra fija de compra, que usa el botón nativo (el carrito no
      se toca).
   ══════════════════════════════════════════════════════════════ */
(function(){
  if (window.VENC_MONTADO) return;
  window.VENC_MONTADO = true;

  var COLORES = [['Arena','#C49A72'],['Óxido','#9A4A2C'],['Oliva','#6B6B3A'],['Grafito','#26252A']];
  var ICO = {
    hoja:'<path d="M6 26C6 14 13 6 26 6c0 13-8 20-20 20z"/><path d="M6 26L18 14"/>',
    estrella:'<path d="M16 4l2.6 9.4L28 16l-9.4 2.6L16 28l-2.6-9.4L4 16l9.4-2.6z"/>',
    capas:'<path d="M16 5l11 5.5-11 5.5L5 10.5z"/><path d="M5 16l11 5.5L27 16M5 21.5L16 27l11-5.5"/>',
    taza:'<path d="M7 8h15v15a3 3 0 01-3 3h-9a3 3 0 01-3-3z"/><path d="M22 12h2.5a3 3 0 010 6H22"/>'
  };
  function icoUrl(k){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#8A5532" stroke-width="1.3">'+ICO[k]+'</svg>')+'")'}

  var css = ''
  + '.venc{--h:#F3F0E9;--h2:#EAE4D8;--t:#1B1714;--s:#6E665C;--l:#DED6C8;--c:#8A5532;--co:#6F4126;--os:#2a1d14;'
  +   'background:var(--h);color:var(--t);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.5;text-align:left}'
  + '.venc *{box-sizing:border-box}'
  + '.venc img{display:block;max-width:100%;height:auto}'
  + '.venc h2,.venc h3{font-family:Montserrat,system-ui,sans-serif;color:inherit;text-transform:none}'
  + '.venc p{margin:0}'
  + '.venc-in{max-width:1240px;margin:0 auto;padding-left:28px;padding-right:28px}'
  + '.venc-k{font:600 11px/1 Montserrat,sans-serif!important;letter-spacing:.28em;text-transform:uppercase;color:var(--s);margin:0 0 16px!important}'
  /* banners */
  + '.venc-bnr{position:relative;min-height:clamp(360px,36vw,540px);display:flex;align-items:center;overflow:hidden;background:var(--os);color:#FBF6EE}'
  + '.venc-bnr>img{position:absolute;inset:0;width:100%;height:100%!important;max-width:none!important;object-fit:cover;object-position:62% 50%}'
  + '.venc-video>img{object-position:82% 50%;animation:vencKb 16s ease-in-out infinite alternate}'
  + '@keyframes vencKb{from{transform:scale(1)}to{transform:scale(1.07)}}'
  + '.venc-bnr::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(28,18,10,.72),rgba(28,18,10,.42) 38%,rgba(28,18,10,0) 62%)}'
  + '.venc-der::before{background:linear-gradient(270deg,rgba(28,18,10,.72),rgba(28,18,10,.42) 38%,rgba(28,18,10,0) 62%)}'
  + '.venc-bnr .venc-tx{position:relative;z-index:2;width:100%;max-width:1240px;margin:0 auto;padding:56px 28px}'
  + '.venc-der .venc-tx{display:flex;flex-direction:column;align-items:flex-end}'
  + '.venc-der .venc-tx>*{width:420px;max-width:100%}'
  + '.venc-bnr h2{font-weight:300!important;font-size:clamp(34px,4vw,58px)!important;line-height:1.06!important;letter-spacing:-.03em;margin:0!important;max-width:420px}'
  + '.venc-bnr p{font-size:16px;line-height:1.55;color:#EADFD0;margin-top:18px!important;padding-top:18px;border-top:1px solid rgba(251,246,238,.35);max-width:420px}'
  /* detalle */
  + '.venc-detalle{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.6fr)}'
  + '.venc-detalle .venc-tx{padding:64px 48px;align-self:center}'
  + '.venc h2.venc-h{font-weight:300!important;font-size:clamp(32px,3.4vw,48px)!important;line-height:1.06!important;letter-spacing:-.03em;margin:0!important}'
  + '.venc-detalle .venc-tx p:not(.venc-k){font-size:15.5px;line-height:1.7;color:#4A433B;margin-top:20px!important;max-width:40ch}'
  + '.venc-cerca{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding:6px}'
  + '.venc-fig{position:relative;overflow:hidden;border-radius:4px;background:#d9cbb7}'
  + '.venc-fig img{width:100%;height:100%!important;object-fit:cover;aspect-ratio:4/5}'
  + '.venc-fig span{position:absolute;left:10px;right:10px;bottom:10px;font:500 12px/1.3 Montserrat,sans-serif;color:#FBF6EE;background:rgba(28,18,10,.55);padding:8px 10px;border-radius:6px}'
  /* beneficios */
  + '.venc-benef{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));padding-top:34px;padding-bottom:34px}'
  + '.venc-b{padding:4px 22px 4px 76px;border-left:1px solid var(--l);background:no-repeat 22px 2px/34px 34px}'
  + '.venc-b:first-child{border-left:0;padding-left:54px;background-position:0 2px}'
  + '.venc-b strong{display:block;font:600 14px/1.2 Montserrat,sans-serif;margin-bottom:5px}'
  + '.venc-b span{font-size:13px;line-height:1.45;color:var(--s)}'
  /* colección */
  + '.venc-col{background:var(--os);color:#FBF6EE}'
  + '.venc-col .venc-tx{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:40px;align-items:end;padding-top:56px;padding-bottom:28px}'
  + '.venc-col h2{font-weight:300!important;font-size:clamp(34px,4vw,54px)!important;line-height:1.06!important;letter-spacing:-.03em;margin:0!important}'
  + '.venc-col p{font-size:16px;color:#EADFD0}'
  + '.venc-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}'
  + '.venc-chips button{display:flex;align-items:center;gap:8px;font:500 13px/1 Inter,sans-serif;color:#FBF6EE;padding:9px 13px 9px 9px;border-radius:999px;border:1px solid rgba(251,246,238,.45);background:rgba(28,18,10,.25);cursor:pointer}'
  + '.venc-chips i{width:16px;height:16px;border-radius:50%;box-shadow:0 0 0 1px rgba(255,255,255,.4)}'
  + '.venc-pano{overflow-x:auto;scrollbar-width:none}.venc-pano::-webkit-scrollbar{display:none}'
  + '.venc-pano img{width:100%}'
  + '.venc-hint{display:none;font-size:12px;color:#CDBFAE;padding:10px 16px 20px}'
  /* ficha */
  + '.venc-ficha{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);padding-top:56px;padding-bottom:56px}'
  + '.venc-ficha>div{padding:0 32px}.venc-ficha>div:first-child{padding-left:0;border-right:1px solid var(--l)}'
  + '.venc-ficha h3{font-weight:600!important;font-size:18px!important;margin:0 0 22px!important}'
  + '.venc-medidas{display:grid;grid-template-columns:170px minmax(0,1fr);gap:22px;align-items:center}'
  + '.venc-medidas ul{list-style:none;margin:0;padding:0;display:grid;gap:8px;font-size:14.5px;color:#4A433B}'
  + '.venc-medidas strong{color:var(--t)}'
  + '.venc-sistema{display:grid;grid-template-columns:minmax(0,1fr) 28px minmax(0,1fr) 28px minmax(0,1fr);align-items:center;gap:8px;text-align:center}'
  + '.venc-paso img{width:100%;max-width:130px;margin:0 auto}'
  + '.venc-paso img.venc-listo{aspect-ratio:1;object-fit:cover;object-position:45% 60%;border-radius:50%}'
  + '.venc-paso strong{display:block;font:500 12.5px/1.3 Montserrat,sans-serif;margin-top:10px}'
  + '.venc-paso span{display:block;font-size:12px;color:var(--s);margin-top:3px}'
  + '.venc-op{font:300 30px/1 Montserrat,sans-serif;color:var(--c)}'
  /* faq */
  + '.venc-faq{background:var(--h2)}'
  + '.venc-faq .venc-in{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.4fr);gap:56px;padding-top:64px;padding-bottom:64px}'
  + '.venc-q{border-bottom:1px solid var(--l)}.venc-q:first-child{border-top:1px solid var(--l)}'
  + '.venc-q h3{cursor:pointer;display:flex;justify-content:space-between;gap:16px;padding:18px 0!important;margin:0!important;font-weight:500!important;font-size:15px!important;line-height:1.3!important}'
  + '.venc-q h3::after{content:"+";font-weight:300;font-size:22px;line-height:.8}'
  + '.venc-q.abierta h3::after{content:"–"}'
  + '.venc-q p{display:none;padding-bottom:18px;font-size:14.5px;line-height:1.65;color:#4A433B;max-width:60ch}'
  + '.venc-q.abierta p{display:block}'
  + '.venc-ph{font-size:.82em;border:1px dashed currentColor;border-radius:4px;padding:1px 5px;opacity:.75;white-space:nowrap}'
  /* barra fija */
  + '.venc-fija{position:fixed;left:0;right:0;bottom:0;z-index:999;display:flex;align-items:center;gap:14px;padding:12px max(16px,calc((100vw - 1240px)/2 + 28px));background:rgba(243,240,233,.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-top:1px solid #DED6C8;transform:translateY(110%);transition:transform .35s cubic-bezier(.22,.9,.28,1);font-family:Inter,sans-serif;color:#1B1714}'
  + '.venc-fija.on{transform:none}'
  + '.venc-fija img{width:48px;height:48px;object-fit:cover;border-radius:6px}'
  + '.venc-fija b{font:500 14px/1.2 Montserrat,sans-serif;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
  + '.venc-fija .venc-pr{margin-left:auto;font:600 18px/1 Montserrat,sans-serif;white-space:nowrap}'
  + '.venc-fija button{height:48px;padding:0 24px;border-radius:999px;border:0;background:#8A5532;color:#FFF8F0;font:600 14px/1 Montserrat,sans-serif;cursor:pointer}'
  /* celular */
  + '@media (max-width:767px){'
  +   '.venc-in{padding-left:16px;padding-right:16px}'
  +   '.venc-bnr{display:block;min-height:0}'
  +   '.venc-bnr>img{position:relative;aspect-ratio:1/1.05;animation:none}'
  +   '.venc-video>img{object-position:44% 50%}'
  +   '.venc-bnr::before,.venc-der::before{background:linear-gradient(180deg,rgba(28,18,10,0) 30%,rgba(28,18,10,.25) 55%,#2a1d14 100%)}'
  +   '.venc-bnr .venc-tx{margin-top:-120px;padding:0 16px 40px}'
  +   '.venc-der .venc-tx{align-items:flex-start}'
  +   '.venc-bnr h2,.venc-col h2{font-size:34px!important}'
  +   '.venc-detalle{grid-template-columns:minmax(0,1fr)}'
  +   '.venc-detalle .venc-tx{padding:44px 16px 24px}'
  +   '.venc-cerca{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:72%;overflow-x:auto;scroll-snap-type:x mandatory;padding:0 16px 40px;gap:10px;scrollbar-width:none}'
  +   '.venc-fig{scroll-snap-align:start}'
  +   '.venc-benef{grid-template-columns:1fr 1fr;gap:22px 14px;padding-top:32px;padding-bottom:32px}'
  +   '.venc-b,.venc-b:first-child{border:0;padding:44px 0 0;background-position:0 0}'
  +   '.venc-col .venc-tx{grid-template-columns:minmax(0,1fr);gap:16px;padding-top:44px;padding-bottom:22px}'
  +   '.venc-pano img{width:auto;max-width:none!important;height:220px!important}'
  +   '.venc-hint{display:block}'
  +   '.venc-ficha{grid-template-columns:minmax(0,1fr);gap:40px;padding-top:44px;padding-bottom:44px}'
  +   '.venc-ficha>div{padding:0}.venc-ficha>div:first-child{border-right:0;border-bottom:1px solid var(--l);padding-bottom:36px}'
  +   '.venc-medidas{grid-template-columns:120px minmax(0,1fr);gap:16px}'
  +   '.venc-faq .venc-in{grid-template-columns:minmax(0,1fr);gap:24px;padding-top:48px;padding-bottom:48px}'
  +   '.venc-fija{padding:10px 12px;gap:10px}.venc-fija img{width:42px;height:42px}'
  +   '.venc-fija .venc-pr{font-size:16px}.venc-fija button{padding:0 18px;font-size:13px}'
  + '}'
  + '@media (prefers-reduced-motion:reduce){.venc *{animation:none!important;transition:none!important}}';

  function montar(){
    var venc = document.querySelector('.venc');
    if (!venc || venc.getAttribute('data-montado')) return;
    venc.setAttribute('data-montado','1');

    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    /* sacar el bloque de la columna derecha y dejarlo debajo del producto */
    var prod = venc.closest('#single-product, .js-product-container');
    if (prod && prod.parentNode) prod.parentNode.insertBefore(venc, prod.nextSibling);

    /* íconos de beneficios */
    var tipos = ['hoja','estrella','capas','taza'];
    Array.prototype.forEach.call(venc.querySelectorAll('.venc-b'), function(b,i){ b.style.backgroundImage = icoUrl(tipos[i % 4]); });

    /* preguntas que se abren */
    Array.prototype.forEach.call(venc.querySelectorAll('.venc-q h3'), function(h){
      h.setAttribute('tabindex','0'); h.setAttribute('role','button');
      var abrir = function(){ h.parentNode.classList.toggle('abierta'); };
      h.addEventListener('click', abrir);
      h.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });
    });

    /* botones de color: eligen la variante nativa si existe; si no, suben a la compra */
    var chips = venc.querySelector('.venc-chips');
    function subir(){ var t = document.querySelector('#single-product') || document.body; window.scrollTo({top: Math.max(0, t.getBoundingClientRect().top + window.pageYOffset - 90), behavior:'smooth'}); }
    /* el editor deja un &nbsp; en el div vacío: se limpia para que no corra los botones */
    if (chips) chips.innerHTML = '';
    if (chips) COLORES.forEach(function(c){
      var b = document.createElement('button'); b.type = 'button';
      b.innerHTML = '<i style="background:' + c[1] + '"></i>' + c[0];
      b.addEventListener('click', function(){
        var sel = document.querySelectorAll('#single-product select.js-variation-option, #single-product select');
        Array.prototype.forEach.call(sel, function(s){
          Array.prototype.forEach.call(s.options, function(o){ if (o.text.trim().toLowerCase() === c[0].toLowerCase()) { s.value = o.value; s.dispatchEvent(new Event('change', {bubbles:true})); } });
        });
        Array.prototype.forEach.call(document.querySelectorAll('#single-product [data-option], #single-product .js-insta-variant'), function(o){
          if ((o.getAttribute('data-option') || o.textContent || '').trim().toLowerCase() === c[0].toLowerCase()) o.click();
        });
        subir();
      });
      chips.appendChild(b);
    });

    /* panorámica en el celular: arranca en los vasos */
    var pano = venc.querySelector('.venc-pano');
    if (pano) { var ir = function(){ pano.scrollLeft = (pano.scrollWidth - pano.clientWidth) * 0.32; }; var im = pano.querySelector('img'); if (im && !im.complete) im.addEventListener('load', ir); else ir(); }

    /* barra fija: lee el nombre, el precio y el botón NATIVOS */
    var btn = document.querySelector('#single-product .js-addtocart, #single-product [type="submit"]');
    if (btn) {
      var nombre = (document.querySelector('#single-product h1') || {}).textContent || '';
      var fimg = document.querySelector('#single-product .js-product-slide-img, #single-product img');
      var foto = fimg ? (fimg.currentSrc || fimg.src || '') : '';
      if (/data:image|placeholder|no-photo/.test(foto)) foto = '';
      var fija = document.createElement('div'); fija.className = 'venc-fija';
      fija.innerHTML = (foto ? '<img alt="" src="' + foto + '">' : '') + '<b></b><span class="venc-pr"></span><button type="button">Agregar al carrito</button>';
      fija.querySelector('b').textContent = nombre.trim();
      /* el botón dice lo mismo que el nativo (ej.: «Consultar precio» si no hay precio) */
      var txt = (btn.value || btn.textContent || '').trim();
      if (txt) fija.querySelector('button').textContent = txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      document.body.appendChild(fija);
      var precio = function(){ var p = document.querySelector('#single-product .js-price-display'); fija.querySelector('.venc-pr').textContent = p ? p.textContent.trim() : ''; };
      fija.querySelector('button').addEventListener('click', function(){ btn.click(); });
      var ver = function(){ precio(); var r = btn.getBoundingClientRect(); fija.classList.toggle('on', r.bottom < 0); };
      window.addEventListener('scroll', ver, {passive:true}); ver();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar); else montar();
})();
