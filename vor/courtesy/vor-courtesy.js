/* ══════════════════════════════════════════════════════════════
   VÖR · LANDING CARGADOR COURTESY DÚO (va en la descripción del producto)

   Estructura que mandó el cliente (14-10-2026). La compra (fotos,
   precio, colores, carrito) y «También te puede interesar» son los
   NATIVOS del tema. La descripción trae el resto: banner, detalles,
   banner de video, beneficios, medidas e incluye.
   Este archivo solo:
   1) pone los estilos (el editor de TN borra los <style>),
   2) saca el bloque de la columna derecha y lo deja debajo del
      producto, a todo el ancho (se mueve SOLO el bloque nuestro),
   3) arma los íconos de beneficios, el «Ver video» y la barra fija
      de compra, que usa el botón nativo.
   ══════════════════════════════════════════════════════════════ */
(function(){
  if (window.VCD_MONTADO) return;
  window.VCD_MONTADO = true;

  var ICO = {
    rayo:'<path d="M18 3L7 18h8l-2 11 12-16h-8z"/>',
    destello:'<path d="M16 3c1 7 5 12 13 13-8 1-12 6-13 13-1-7-5-12-13-13 8-1 12-6 13-13z"/>',
    capas:'<path d="M16 5l12 6-12 6-12-6z"/><path d="M4 16l12 6 12-6M4 21l12 6 12-6"/>',
    casa:'<path d="M4 15L16 5l12 10"/><path d="M7 13v14h18V13M13 27v-8h6v8"/>',
    hoja:'<path d="M6 26C6 13 14 6 27 5c0 13-7 21-20 21z"/><path d="M6 26L18 14"/>'
  };
  function icoUrl(k){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#9C5A33" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">'+ICO[k]+'</svg>')+'")'}

  var fuentes = document.createElement('link');
  fuentes.rel = 'stylesheet';
  fuentes.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Jost:wght@300;400;500&display=swap';

  var SER = '"Cormorant Garamond","Times New Roman",serif', SAN = 'Jost,"Helvetica Neue",Arial,sans-serif';
  var css = ''
  + '.vcd{--bg:#F8F5F0;--bg2:#F1ECE4;--t:#26211D;--s:#6B635B;--l:#E3DCD1;--c:#9C5A33;--co:#7F4625;--os:#1C1713;'
  +   'background:var(--bg);color:var(--t);font-family:' + SAN + ';-webkit-font-smoothing:antialiased;line-height:1.5;text-align:left}'
  + '.vcd *{box-sizing:border-box}'
  + '.vcd img{display:block;max-width:100%;height:auto}'
  + '.vcd h2,.vcd h3{color:inherit;text-transform:none;letter-spacing:0}'
  + '.vcd p{margin:0}'
  + '.vcd-in{max-width:1240px;margin:0 auto;padding-left:40px;padding-right:40px}'
  /* banners a lo ancho, texto a la izquierda */
  + '.vcd-bnr{position:relative;min-height:clamp(320px,32vw,440px);display:flex;align-items:center;overflow:hidden;background:var(--os);color:#fff}'
  + '.vcd-bnr>img{position:absolute;inset:0;width:100%;height:100%!important;max-width:none!important;object-fit:cover;object-position:70% 50%}'
  + '.vcd-video>img{animation:vcdKb 22s ease-in-out infinite alternate}'
  + '@keyframes vcdKb{from{transform:scale(1)}to{transform:scale(1.07)}}'
  + '.vcd-bnr::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(28,23,19,.62),rgba(28,23,19,.28) 38%,rgba(28,23,19,0) 62%)}'
  + '.vcd-bnr .vcd-tx{position:relative;z-index:2;width:100%;max-width:1240px;margin:0 auto;padding:48px 40px}'
  + '.vcd-bnr h2{font-family:' + SER + '!important;font-weight:500!important;font-size:clamp(36px,4.4vw,56px)!important;line-height:1.02!important;margin:0!important;max-width:11ch;color:#fff!important}'
  + '.vcd-bnr p{font-size:clamp(15px,1.4vw,17px);font-weight:300;line-height:1.45;max-width:22ch;color:#fff;margin-top:20px!important;padding-top:18px;position:relative}'
  + '.vcd-bnr p::before{content:"";position:absolute;left:0;top:0;width:34px;height:1px;background:rgba(255,255,255,.8)}'
  + '.vcd-ver{display:inline-flex;align-items:center;gap:16px;background:none;border:0;color:#fff;padding:0;margin-top:22px;cursor:pointer;font:inherit;text-align:left}'
  + '.vcd-ver i{width:64px;height:64px;border-radius:50%;border:1.5px solid #fff;display:grid;place-items:center;transition:background .2s}'
  + '.vcd-ver i::after{content:"";border-left:16px solid #fff;border-top:10px solid transparent;border-bottom:10px solid transparent;margin-left:5px}'
  + '.vcd-ver:hover i{background:rgba(255,255,255,.14)}'
  + '.vcd-ver b{display:block;font-weight:400;font-size:16px}'
  + '.vcd-ver small{font-size:14px;opacity:.85}'
  /* detalles */
  + '.vcd-det{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2.6fr);gap:48px;align-items:center;padding-top:24px;padding-bottom:24px}'
  + '.vcd h2.vcd-h{font-family:' + SER + '!important;font-weight:500!important;font-size:clamp(30px,3vw,40px)!important;line-height:1.04!important;margin:0!important;max-width:10ch}'
  + '.vcd-det .vcd-tx p{color:var(--s);font-size:14.5px;line-height:1.55;margin-top:18px!important;max-width:34ch}'
  + '.vcd-cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}'
  + '.vcd-card img{width:100%;aspect-ratio:150/124;object-fit:cover;border-radius:3px;background:var(--bg2)}'
  + '.vcd-card h3{font-family:' + SAN + '!important;font-size:14px!important;font-weight:500!important;margin:12px 0 2px!important;line-height:1.3!important}'
  + '.vcd-card p{font-size:13px;color:var(--s);line-height:1.4}'
  /* beneficios */
  + '.vcd-ben{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));padding-top:26px;padding-bottom:26px;border-bottom:1px solid var(--l)}'
  + '.vcd-b{min-height:36px;display:flex;flex-direction:column;justify-content:center;padding:2px 14px 2px 66px;border-left:1px solid var(--l);background:no-repeat 18px 50%/34px 34px}'
  + '.vcd-b:first-child{border-left:0;padding-left:48px;background-position:0 50%}'
  + '.vcd-b strong{font-size:13.5px;font-weight:500;line-height:1.3}'
  + '.vcd-b span{font-size:12.5px;color:var(--s)}'
  /* medidas + incluye */
  + '.vcd-ficha{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);padding-top:26px;padding-bottom:56px}'
  + '.vcd-ficha>div{padding:6px 32px;border-left:1px solid var(--l);min-width:0}'
  + '.vcd-ficha>div:first-child{border-left:0;padding-left:0}'
  + '.vcd-ficha h3{font-family:' + SAN + '!important;font-size:17px!important;font-weight:500!important;margin:0 0 22px!important}'
  + '.vcd-med{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22px;align-items:center}'
  + '.vcd-med img{max-width:220px;width:100%}'
  + '.vcd-med ul{list-style:none;margin:0;padding:0;font-size:13.5px;line-height:1.75;font-variant-numeric:tabular-nums}'
  + '.vcd-med strong{font-weight:400;color:var(--s)}'
  + '.vcd-inc{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;text-align:center;align-items:end}'
  + '.vcd-inc div{display:grid;gap:10px;justify-items:center}'
  + '.vcd-inc img{height:66px!important;width:auto;object-fit:contain}'
  + '.vcd-inc span{font-size:13px;color:var(--s)}'
  /* video */
  + '.vcd-modal{position:fixed;inset:0;z-index:1000;background:rgba(18,14,11,.88);display:none;place-items:center;padding:16px}'
  + '.vcd-modal.on{display:grid}'
  + '.vcd-modal div{position:relative;width:min(960px,100%);aspect-ratio:16/9;overflow:hidden;border-radius:6px;background:#1C1713}'
  + '.vcd-modal img,.vcd-modal video{width:100%;height:100%;object-fit:cover}'
  + '.vcd-modal img{animation:vcdKb 12s linear forwards}'
  + '.vcd-modal button{position:absolute;top:10px;right:10px;width:40px;height:40px;border-radius:50%;border:0;background:rgba(255,255,255,.92);color:#26211D;font-size:22px;line-height:1;cursor:pointer}'
  /* barra fija */
  + '.vcd-fija{position:fixed;left:0;right:0;bottom:0;z-index:999;display:flex;align-items:center;gap:14px;padding:10px max(16px,calc((100vw - 1240px)/2 + 40px));padding-bottom:calc(10px + env(safe-area-inset-bottom,0px));background:rgba(255,255,255,.96);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-top:1px solid #E3DCD1;transform:translateY(110%);transition:transform .3s;font-family:' + SAN + ';color:#26211D}'
  + '.vcd-fija.on{transform:none}'
  + '.vcd-fija img{width:46px;height:46px;object-fit:cover;border-radius:6px}'
  + '.vcd-fija b{font-weight:500;font-size:14px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
  + '.vcd-fija .vcd-pr{margin-left:auto;font-weight:500;font-size:17px;white-space:nowrap}'
  + '.vcd-fija button{height:46px;padding:0 26px;border-radius:999px;border:0;background:#9C5A33;color:#fff;font:500 14.5px/1 ' + SAN + ';cursor:pointer}'
  /* celular */
  + '@media (max-width:980px){'
  +   '.vcd-in{padding-left:16px;padding-right:16px}'
  +   '.vcd-bnr{min-height:380px;align-items:flex-end}'
  +   '.vcd-bnr>img{object-position:74% 50%}'
  +   '.vcd-bnr::before{background:linear-gradient(0deg,rgba(28,23,19,.78),rgba(28,23,19,.35) 48%,rgba(28,23,19,0) 75%)}'
  +   '.vcd-bnr .vcd-tx{padding:28px 16px}'
  +   '.vcd-det{grid-template-columns:minmax(0,1fr);gap:24px;padding-top:36px}'
  +   '.vcd h2.vcd-h{max-width:none}'
  +   '.vcd-cards{grid-template-columns:repeat(2,minmax(0,1fr))}'
  +   '.vcd-ben{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 10px}'
  +   '.vcd-b,.vcd-b:first-child{border-left:0;padding:0 0 0 42px;background-position:0 50%;background-size:30px 30px}'
  +   '.vcd-ficha{grid-template-columns:minmax(0,1fr);gap:30px}'
  +   '.vcd-ficha>div,.vcd-ficha>div:first-child{border-left:0;padding:0}'
  +   '.vcd-ficha>div+div{border-top:1px solid var(--l);padding-top:26px}'
  +   '.vcd-fija{padding-left:12px;padding-right:12px;gap:10px}.vcd-fija img{width:40px;height:40px}'
  +   '.vcd-fija .vcd-pr{font-size:15px}.vcd-fija button{padding:0 18px;font-size:13.5px}'
  + '}'
  /* precio de la compra (arriba, nativo): grande + cuotas, como la referencia */
  + '.vcd-oculto{display:none!important}'
  + '.vcd-precio{font-family:' + SAN + ';color:#26211D;margin:6px 0 18px}'
  + '.vcd-precio b{display:block;font-weight:500;font-size:clamp(30px,3vw,38px);line-height:1.05;letter-spacing:-.01em;font-variant-numeric:tabular-nums}'
  + '.vcd-precio span{display:block;font-size:15px;color:#6B635B;margin-top:8px}'
  /* colores del boceto (círculos) + botón cobre */
  + '.vcd-colores{font-family:' + SAN + ';color:#26211D;margin:0 0 22px}'
  + '.vcd-colores p{font-size:14px;margin:0 0 12px}'
  + '.vcd-colores p b{font-weight:500}'
  + '.vcd-colores div{display:flex;flex-wrap:wrap;gap:12px}'
  + '.vcd-colores button{width:34px;height:34px;border-radius:50%;border:0;padding:0;cursor:pointer;box-shadow:0 0 0 1px rgba(38,33,29,.14) inset}'
  + '.vcd-colores button[aria-pressed="true"]{box-shadow:0 0 0 2px #fff,0 0 0 3px #26211D}'
  + '#single-product .js-addtocart:not(.js-addtocart-placeholder){background:#9C5A33!important;border-color:#9C5A33!important;color:#fff!important;border-radius:999px!important;text-transform:none!important;letter-spacing:.01em!important;font:500 15.5px/1 ' + SAN + '!important;min-height:50px}'
  + '#single-product .js-addtocart:not(.js-addtocart-placeholder):hover{background:#7F4625!important;border-color:#7F4625!important}'
  + '@media (max-width:520px){.vcd-med{grid-template-columns:minmax(0,1fr)}}'
  + '@media (prefers-reduced-motion:reduce){.vcd *{animation:none!important;transition:none!important}}';

  function montar(){
    var vcd = document.querySelector('.vcd');
    if (!vcd || vcd.getAttribute('data-montado')) return;
    vcd.setAttribute('data-montado','1');

    document.head.appendChild(fuentes);
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    /* sacar el bloque de la columna derecha y dejarlo debajo del producto */
    var prod = vcd.closest('#single-product, .js-product-container');
    if (prod && prod.parentNode) prod.parentNode.insertBefore(vcd, prod.nextSibling);

    /* íconos de beneficios */
    var tipos = ['rayo','destello','capas','casa','hoja'];
    Array.prototype.forEach.call(vcd.querySelectorAll('.vcd-b'), function(b,i){ b.style.backgroundImage = icoUrl(tipos[i % 5]); });

    /* «Ver video»: si el banner trae data-video (MP4) lo reproduce; si no, la foto con zoom lento */
    var vid = vcd.querySelector('.vcd-video');
    if (vid) {
      var tx = vid.querySelector('.vcd-tx'), foto = vid.querySelector('img');
      var src = vid.getAttribute('data-video') || '';
      var bt = document.createElement('button'); bt.type = 'button'; bt.className = 'vcd-ver';
      bt.innerHTML = '<i></i><span><b>Ver video</b><small>' + (vid.getAttribute('data-duracion') || '(00:12)') + '</small></span>';
      tx.appendChild(bt);
      var modal = document.createElement('div'); modal.className = 'vcd-modal';
      modal.innerHTML = '<div>' + (src ? '<video controls playsinline src="' + src + '"></video>' : '<img alt="" src="' + (foto ? foto.src : '') + '">') + '<button type="button" aria-label="Cerrar">×</button></div>';
      document.body.appendChild(modal);
      var cerrar = function(){ modal.classList.remove('on'); var v = modal.querySelector('video'); if (v) v.pause(); };
      bt.addEventListener('click', function(){ modal.classList.add('on'); var v = modal.querySelector('video'); if (v) v.play(); });
      modal.addEventListener('click', function(e){ if (e.target === modal || e.target.tagName === 'BUTTON') cerrar(); });
      document.addEventListener('keydown', function(e){ if (e.key === 'Escape') cerrar(); });
    }

    /* precio: lee el NATIVO (data-product-price, en centavos) y lo muestra
       grande con «o 3 cuotas de $ X sin interés». Se re-arma si cambia la variante. */
    var CUOTAS = 3;
    var pnat = document.querySelector('#single-product .js-price-display');
    function pesos(n){ return '$ ' + Math.round(n).toLocaleString('es-AR'); }
    function centavos(){ var v = pnat && parseInt(pnat.getAttribute('data-product-price'), 10); return v > 0 ? v / 100 : 0; }
    if (pnat) {
      var caja = pnat.parentElement && pnat.parentElement.tagName === 'SPAN' ? pnat.parentElement : pnat;
      var pdis = document.createElement('div'); pdis.className = 'vcd-precio';
      caja.parentNode.insertBefore(pdis, caja.nextSibling);
      var armarPrecio = function(){
        var v = centavos();
        if (!v) { caja.classList.remove('vcd-oculto'); pdis.innerHTML = ''; return; }
        caja.classList.add('vcd-oculto');
        pdis.innerHTML = '<b>' + pesos(v) + '</b><span>o ' + CUOTAS + ' cuotas de ' + pesos(v / CUOTAS) + ' sin interés</span>';
      };
      armarPrecio();
      new MutationObserver(armarPrecio).observe(pnat, {attributes:true, childList:true, characterData:true, subtree:true});

      /* colores del boceto: si el producto tiene variantes de color, el círculo
         elige la nativa; si no, cambia el nombre que se muestra */
      var COLORES = [['Blanco roca mineral','#E6DED2'],['Arena tostada','#C4936A'],['Nogal','#6E4729'],['Piedra','#8C8273'],['Grafito suave','#6A6863'],['Negro','#151515']];
      var cols = document.createElement('div'); cols.className = 'vcd-colores';
      cols.innerHTML = '<p>Color: <b>' + COLORES[0][0] + '</b></p><div role="group" aria-label="Color"></div>';
      var fila = cols.querySelector('div'), nom = cols.querySelector('b');
      COLORES.forEach(function(c, i){
        var b = document.createElement('button'); b.type = 'button';
        b.style.background = c[1]; b.setAttribute('aria-label', c[0]); b.setAttribute('aria-pressed', i ? 'false' : 'true');
        b.addEventListener('click', function(){
          Array.prototype.forEach.call(fila.children, function(x){ x.setAttribute('aria-pressed','false'); });
          b.setAttribute('aria-pressed','true'); nom.textContent = c[0];
          Array.prototype.forEach.call(document.querySelectorAll('#single-product select'), function(s){
            Array.prototype.forEach.call(s.options, function(o){ if (o.text.trim().toLowerCase() === c[0].toLowerCase()) { s.value = o.value; s.dispatchEvent(new Event('change', {bubbles:true})); } });
          });
        });
        fila.appendChild(b);
      });
      pdis.parentNode.insertBefore(cols, pdis.nextSibling);
    }

    /* barra fija: lee el nombre, el precio y el botón NATIVOS */
    var btn = document.querySelector('#single-product .js-addtocart, #single-product [type="submit"]');
    if (btn) {
      var nombre = (document.querySelector('#single-product h1') || {}).textContent || '';
      var fimg = document.querySelector('#single-product .js-product-slide-img, #single-product img');
      var fsrc = fimg ? (fimg.currentSrc || fimg.src || '') : '';
      if (/data:image|placeholder|no-photo/.test(fsrc)) fsrc = '';
      var fija = document.createElement('div'); fija.className = 'vcd-fija';
      fija.innerHTML = (fsrc ? '<img alt="" src="' + fsrc + '">' : '') + '<b></b><span class="vcd-pr"></span><button type="button">Agregar al carrito</button>';
      fija.querySelector('b').textContent = nombre.trim();
      var txt = (btn.value || btn.textContent || '').trim();
      if (txt) fija.querySelector('button').textContent = txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      document.body.appendChild(fija);
      var precio = function(){ var v = centavos(); fija.querySelector('.vcd-pr').textContent = v ? pesos(v) : ''; };
      fija.querySelector('button').addEventListener('click', function(){ btn.click(); });
      var ver = function(){ precio(); var r = btn.getBoundingClientRect(); fija.classList.toggle('on', r.bottom < 0); };
      window.addEventListener('scroll', ver, {passive:true}); ver();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar); else montar();
})();
