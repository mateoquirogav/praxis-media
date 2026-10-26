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
  /* del boceto a tu hogar (VÖR Design Lab): el origen de la pieza, en 4 pasos reales */
  + '.vcd-lab{padding-top:64px;padding-bottom:56px}'
  + '.vcd-lab-cab{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:48px;align-items:end;margin-bottom:34px}'
  + '.vcd-lab-ojo{font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--c);margin:0 0 14px!important}'
  + '.vcd-lab-cab p.vcd-lab-p{color:var(--s);font-size:15px;line-height:1.6;max-width:44ch}'
  + '.vcd-pasos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;counter-reset:paso}'
  + '.vcd-paso{min-width:0}'
  + '.vcd-paso img{width:100%;aspect-ratio:5/4;object-fit:cover;border-radius:2px;background:var(--bg2)}'
  + '.vcd-paso h3{counter-increment:paso;font-family:' + SAN + '!important;font-size:15px!important;font-weight:500!important;margin:16px 0 4px!important;display:flex;gap:10px;align-items:baseline}'
  + '.vcd-paso h3::before{content:"0" counter(paso);font-size:11.5px;letter-spacing:.12em;color:var(--c)}'
  + '.vcd-paso p{color:var(--s);font-size:13.5px;line-height:1.5}'
  /* cierre: del producto al catálogo */
  + '.vcd-fin{background:var(--bg2);text-align:center;padding:64px 24px 68px}'
  + '.vcd-fin h2{font-family:' + SER + '!important;font-weight:500!important;font-size:clamp(30px,3.4vw,46px)!important;line-height:1.05!important;margin:0 auto!important;max-width:16ch}'
  + '.vcd-fin p{color:var(--s);font-size:15px;margin:16px auto 0!important;max-width:42ch}'
  + '.vcd-fin a.vcd-ir{display:inline-flex;align-items:center;gap:12px;margin-top:28px;background:var(--os);color:#F8F5F0!important;text-decoration:none!important;border-radius:99px;padding:15px 28px;font-size:15px;transition:background .2s}'
  + '.vcd-fin a.vcd-ir:hover{background:var(--co)}'
  + '.vcd-fin a.vcd-ir::after{content:"\\2192";font-size:17px}'
  + '@media (max-width:980px){'
  +   '.vcd-lab{padding-top:44px;padding-bottom:40px}'
  +   '.vcd-lab-cab{grid-template-columns:minmax(0,1fr);gap:14px;margin-bottom:24px}'
  +   '.vcd-pasos{grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 12px}'
  +   '.vcd-fin{padding:48px 20px 52px}'
  +   '.vcd-in{padding-left:16px;padding-right:16px}'
  +   '.vcd-bnr{min-height:380px;align-items:flex-end}'
  +   '.vcd-bnr>img{object-position:74% 50%}'
  +   '.vcd-bnr::before{background:linear-gradient(0deg,rgba(28,23,19,.78),rgba(28,23,19,.35) 48%,rgba(28,23,19,0) 75%)}'
  +   '.vcd-bnr .vcd-tx{padding:28px 16px}'
      /* Banner en capas (26-10): en el celular el texto arriba sobre oscuro y la escena abajo, sin pisarse */
  +   '.vcd-capas{display:grid!important;min-height:0!important;align-items:stretch!important}'
  +   '.vcd-capas>img{position:relative!important;grid-area:2/1;inset:auto!important;height:auto!important;aspect-ratio:4/3}'
  +   '.vcd-capas::before{display:none!important}'
  +   '.vcd-capas .vcd-tx{grid-area:1/1;padding:30px 16px 22px!important}'
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
  /* ficha de arriba como el boceto: foto entera en PC, con aire, y la landing asomando */
  + '#single-product h1.js-product-name{font:500 clamp(26px,2.4vw,32px)/1.12 ' + SAN + '!important;text-transform:none!important;letter-spacing:-.01em!important;color:#26211D!important;margin-top:10px!important}'
  + '#single-product .divider{display:none}'
  + '.vcd-cab{font-family:' + SAN + ';color:#26211D}'
  + '.vcd-cab .vcd-modelo{color:#9C5A33;font-size:17px;margin:6px 0 10px!important}'
  + '.vcd-cab .vcd-estrellas{display:flex;align-items:center;gap:10px;font-size:13px;color:#6B635B;margin:0!important}'
  + '.vcd-cab .vcd-estrellas::before{content:"★★★★★";color:#E2A23B;letter-spacing:2px;font-size:16px}'
  + '.vcd-cab .vcd-bajada{color:#6B635B;font-size:15.5px;line-height:1.55;margin:16px 0 6px!important;max-width:44ch}'
  + '.vcd-cant{display:flex;align-items:center;border:1px solid #E3DCD1;border-radius:999px;height:50px;background:#fff;flex:none;font-family:' + SAN + '}'
  + '.vcd-cant button{background:none;border:0;width:42px;height:100%;font-size:18px;color:#26211D;cursor:pointer}'
  + '.vcd-cant output{min-width:22px;text-align:center;font-variant-numeric:tabular-nums}'
  + '.vcd-compra{display:flex!important;gap:12px;align-items:flex-start}'
  + '.vcd-compra .js-addtocart{margin-bottom:0!important}'
  + '.vcd-compra .js-addtocart:not(.js-addtocart-placeholder){flex:1 1 0%!important;width:auto!important;min-width:0!important;white-space:nowrap!important;padding-left:12px!important;padding-right:12px!important}'
  + '.vcd-sellos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0 8px;padding-top:20px;border-top:1px solid #E3DCD1;font-family:' + SAN + '}'
  + '.vcd-sellos>div{display:block;font-size:12px;line-height:1.3;color:#26211D;min-width:0;padding-left:30px;background:no-repeat 0 50%/22px 22px}'
  + '.vcd-sellos small{display:block;color:#6B635B;font-size:11px}'
  + '@media (min-width:768px){'
  +   '#single-product>.container-fluid{max-width:1240px;margin:0 auto;padding:20px 40px 28px}'
  +   '#single-product .section-single-product{margin-bottom:0!important}'
  +   '#single-product .section-single-product .page-header{padding-top:0!important}'
  +   '#single-product .vcd-colores{margin-bottom:16px}'
  +   '#single-product .vcd-sellos{margin-top:16px;padding-top:16px}'
  +   '#single-product .section-single-product{flex-wrap:nowrap;align-items:flex-start}'
  +   '#single-product .section-single-product>.col-md-8{flex:0 0 700px;max-width:700px;padding:0!important}'
  +   '#single-product.vcd-alto .product-image-container,#single-product.vcd-alto .js-swiper-product,#single-product.vcd-alto .js-swiper-product .swiper-wrapper,#single-product.vcd-alto .js-swiper-product .swiper-slide,#single-product.vcd-alto .js-product-slide-link{height:var(--vcd-alto)!important}'
  +   '#single-product.vcd-alto .js-product-slide-link{padding-bottom:0!important}'
  +   '#single-product.vcd-alto .js-product-slide-img{position:absolute;inset:0;width:100%!important;height:100%!important;max-width:none!important;object-fit:cover;transform:none!important}'
  +   '#single-product .section-single-product>.col-md-8>.row{margin:0;flex-wrap:nowrap}'
  +   '#single-product .section-single-product .col-2{flex:0 0 80px;max-width:80px;padding:0 14px 0 0}'
  +   '#single-product .product-thumb{border-radius:8px;overflow:hidden;border:1px solid #ECE7DF}'
  +   '#single-product .product-image-container{flex:1 1 auto;max-width:none;border:1px solid #ECE7DF;border-radius:16px;overflow:hidden;background:#fff}'
  +   '#single-product .section-single-product>.col{padding-left:56px;max-width:520px}'
  + '}'
  + '@media (max-width:520px){.vcd-med{grid-template-columns:minmax(0,1fr)}.vcd-sellos{grid-template-columns:minmax(0,1fr);gap:10px}}'
  + '@media (prefers-reduced-motion:reduce){.vcd *{animation:none!important;transition:none!important}}';

  function montar(){
    var vcd = document.querySelector('.vcd');
    if (!vcd || vcd.getAttribute('data-montado')) return;
    vcd.setAttribute('data-montado','1');

    document.head.appendChild(fuentes);
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    /* la galería (swiper) mide al cargar: se le avisa que cambió el ancho */
    [60, 400, 1200].forEach(function(t){ setTimeout(function(){ window.dispatchEvent(new Event('resize')); }, t); });

    /* PC: la foto ocupa todo el alto de la columna de compra, hasta los sellos */
    var sp = document.getElementById('single-product');
    function ajustarAlto(){
      var col = sp && sp.querySelector('.section-single-product>.col'), fin = sp && (sp.querySelector('.vcd-sellos') || sp.querySelector('#product_form'));
      if (!col || !fin || window.innerWidth < 768) { if (sp) sp.classList.remove('vcd-alto'); return; }
      var alto = Math.round(fin.getBoundingClientRect().bottom - col.getBoundingClientRect().top);
      if (alto > 300) { sp.style.setProperty('--vcd-alto', alto + 'px'); sp.classList.add('vcd-alto'); }
    }
    [100, 500, 1500, 3000].forEach(function(t){ setTimeout(ajustarAlto, t); });
    window.addEventListener('resize', function(){ clearTimeout(window.__vcdA); window.__vcdA = setTimeout(ajustarAlto, 120); });

    /* sacar el bloque de la columna derecha y dejarlo debajo del producto */
    var prod = vcd.closest('#single-product, .js-product-container');
    if (prod && prod.parentNode) prod.parentNode.insertBefore(vcd, prod.nextSibling);

    /* íconos de beneficios */
    var tipos = ['rayo','destello','capas','casa','hoja'];
    Array.prototype.forEach.call(vcd.querySelectorAll('.vcd-b'), function(b,i){ b.style.backgroundImage = icoUrl(tipos[i % 5]); });

    /* Cierre: «Descubrí nuestros diseños» lleva al catálogo del mismo país (/ar/ o México en la raíz)
       y, en la vista previa del borrador, arrastra sus parámetros */
    var ir = vcd.querySelector('.vcd-ir');
    if (ir) {
      var base = location.pathname.split('/productos/')[0] + '/productos/';
      ir.setAttribute('href', base + (/preview/.test(location.search) ? location.search : ''));
    }
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

    /* modelo, estrellas y bajada: vienen en la descripción (.vcd-cab), van debajo del nombre */
    var cab = vcd.querySelector('.vcd-cab'), h1 = document.querySelector('#single-product h1.js-product-name');
    if (cab && h1) h1.parentNode.insertBefore(cab, h1.nextSibling);

    /* cantidad + botón en una fila */
    var sub = document.querySelector('#single-product .js-addtocart:not(.js-addtocart-placeholder)');
    if (sub && !document.querySelector('.vcd-cant')) {
      var fila2 = sub.parentNode; fila2.classList.add('vcd-compra');
      var form = sub.closest('form'), q = form && form.querySelector('[name="quantity"]');
      if (form && !q) { q = document.createElement('input'); q.type = 'hidden'; q.name = 'quantity'; q.value = '1'; form.appendChild(q); }
      var cant = document.createElement('div'); cant.className = 'vcd-cant';
      cant.innerHTML = '<button type="button" aria-label="Restar uno">−</button><output>1</output><button type="button" aria-label="Sumar uno">+</button>';
      var out = cant.querySelector('output'), n = 1;
      var poner = function(v){ n = Math.max(1, Math.min(99, v)); out.textContent = n; if (q) q.value = n; };
      cant.firstChild.addEventListener('click', function(){ poner(n - 1); });
      cant.lastChild.addEventListener('click', function(){ poner(n + 1); });
      fila2.insertBefore(cant, fila2.firstChild);
    }

    /* sellos: vienen en la descripción (.vcd-sellos), van debajo del botón */
    var sellos = vcd.querySelector('.vcd-sellos'), formu = document.querySelector('#single-product #product_form');
    if (sellos && formu) {
      var SICO = ['<path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7"/><circle cx="6.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/>','<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3 10h18M6.5 14.5h4"/>','<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/>'];
      Array.prototype.forEach.call(sellos.children, function(s, i){ s.style.backgroundImage = 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26211D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' + SICO[i % 3] + '</svg>') + '")'; });
      formu.parentNode.insertBefore(sellos, formu.nextSibling);
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
