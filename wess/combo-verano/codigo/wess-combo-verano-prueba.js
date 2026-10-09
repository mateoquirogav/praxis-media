/* ══════════════════════════════════════════════════════════════
   WESS · UNA SOLA LANDING + COMBO VERANO  (PRAXIS 09-10-2026)

   Corre ANTES que landing-wess-excluir / landing-wess-config.

   ─── 1. UNA SOLA LANDING EN TODA LA TIENDA ────────────────────
   La mayoría de las fichas mostraban DOS landings: la del motor (la
   del carrusel «Wess en movimiento») y la que alguien pegó en la
   descripción (hero rojo, «FULL WIDTH REAL», guía de talles, etc.).
   Pedido de Mateo: queda solo la del carrusel. Cuando el carrusel
   aparece, se ocultan el título «Descripción» y el texto de la
   descripción. Las opiniones y los botones de compartir se quedan.
   Donde la landing del motor no corre (perfumes), la descripción se ve
   como siempre. El texto sigue en el HTML: Google lo lee igual.

   ─── 2. COMBO VERANO (2 y 3 bermudas baggy de rústico) ─────────
   Antes iba pegado en la descripción; ahora vive acá. En esos dos
   productos:
   - no corre la landing del motor (WESS_CONFIG clavado en null) ni la
     de la descripción;
   - «Armá tu combo»: modelo con FOTO + talle por bermuda, una por vez.
     Llena los selects obligatorios de la app «Campo personalizado» de
     Wess (Elegir Bermuda n → «TALLE X - BERMUDA n»), que son los que
     llegan en el pedido. Si algo falla, los selects de Wess quedan a
     la vista como siempre;
   - debajo, landing oscura propia (video, colores, detalles, precio
     por bermuda, talles, bolsita de regalo, confianza, FAQ).
   ⚠️ El número de BERMUDA de cada color (mapa `modelo`) sale del orden
   de las fotos de cada ficha: falta que Wess lo confirme.
   ══════════════════════════════════════════════════════════════ */
(function () {
  if (window.__wbv) return; window.__wbv = 1;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- 1. una sola landing ---- */
  (function () {
    if (!$('[data-store^="product-description-"]')) return; /* solo en la ficha */
    var st = document.createElement('style');
    st.id = 'wess-una-landing-css';
    st.textContent = 'html.wess-1l [data-store^="product-description-"]>.font-small,' +
      'html.wess-1l [data-store^="product-description-"]>.user-content{display:none!important}';
    document.head.appendChild(st);
    var n = 0;
    var t = setInterval(function () {
      n++;
      if ($('.wess-carousel')) { document.documentElement.classList.add('wess-1l'); clearInterval(t); }
      else if (n > 150) clearInterval(t); /* ~30 s */
    }, 200);
  })();

  /* ---- 2. combo verano ---- */
  var M = 'https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@25905c0/wess/combo-verano/';
  var ROJO = '#E10600';
  var PRODUCTOS = {
    '371737471': { n: 2, otro: '/productos/3-bermudas-joggins-baggys-x-74-990-promo-limitada-bx8ao/', modelo: { negro: 1, blanco: 2, gris: 3 } },
    '371736882': { n: 3, otro: '/productos/2-bermudas-joggins-baggys-x-64-990-promo-limitada-a20bh/', modelo: { blanco: 1, gris: 2, negro: 3 } }
  };

  function datos() {
    var f = $('[data-variants]'); if (!f) return null;
    try {
      var v = JSON.parse(f.getAttribute('data-variants'))[0];
      return { id: String(v.product_id), lista: v.price_number, transf: parseFloat(String(v.price_with_payment_discount_short || '').replace(/[^\d,]/g, '').replace(',', '.')) || v.price_number };
    } catch (e) { return null; }
  }
  var D = datos();
  var CFG = D && PRODUCTOS[D.id];
  if (!CFG) return;

  /* la landing del motor no corre en estos dos productos */
  window.WESS_NO_LANDING = true;
  try { Object.defineProperty(window, 'WESS_CONFIG', { value: null, writable: false, configurable: false }); } catch (e) { window.WESS_CONFIG = null; }

  var COLORES = [
    { k: 'negro', nombre: 'Negra' },
    { k: 'gris', nombre: 'Gris' },
    { k: 'blanco', nombre: 'Blanca' }
  ];
  var TALLES = ['S', 'M', 'L', 'XL', 'XXL'];
  var GUIA = [['S', '36', 38, 46, 63, 36], ['M', '38', 40, 52, 64, 38], ['L', '40', 43, 57, 65, 39], ['XL', '42', 44, 58, 68, 40], ['XXL', '44', 47, 61, 69, 41]];
  var REGALO = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';

  var plata = function (n) { return '$' + Math.round(n).toLocaleString('es-AR'); };
  var exacto = function (n) { return '$' + n.toLocaleString('es-AR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }); };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  var nombreDe = function (k) { return COLORES.filter(function (c) { return c.k === k; })[0].nombre; };

  /* ---------- estilos ---------- */
  function estilos() {
    if (!$('link[href*="Barlow+Condensed"]')) {
      var l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600&display=swap';
      document.head.appendChild(l);
    }
    var css = '' +
    /* en estos dos productos no va ninguna descripción */
    '[data-store^="product-description-"]>.font-small,[data-store^="product-description-"]>.user-content{display:none!important}' +
    '.wbv,.wbv *{box-sizing:border-box}' +
    '.wbv{font-family:Inter,system-ui,sans-serif;color:#f4f4f5;-webkit-font-smoothing:antialiased}' +
    '.wbv h2,.wbv h3,.wbv .wbv-t{font-family:"Barlow Condensed",Inter,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.01em;margin:0;line-height:.95}' +
    '.wbv p{margin:0}' +
    '.wbv-k{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:' + ROJO + '}' +

    /* ── tarjeta Armá tu combo (clara, como la ficha) ── */
    '.wbp{font-family:Inter,system-ui,sans-serif;color:#0b0b0d;margin:18px 0 18px;-webkit-font-smoothing:antialiased}' +
    '.wbp *{box-sizing:border-box}' +
    '.wbp-hd{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-bottom:10px}' +
    '.wbp-hd b{font:700 26px/1 "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.01em}' +
    '.wbp-g{appearance:none;background:none;border:0;padding:0;color:#0b0b0d;text-decoration:underline;text-underline-offset:3px;font:500 13px Inter,sans-serif;cursor:pointer;white-space:nowrap}' +
    '.wbp-tg{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}' +
    '.wbp-tg a{display:block;text-decoration:none;border:1.5px solid #d9d9dc;border-radius:12px;padding:11px 12px;color:#52525b;position:relative;background:#fff}' +
    '.wbp-tg a.on{border-color:#0b0b0d;color:#0b0b0d;box-shadow:inset 0 0 0 1px #0b0b0d}' +
    '.wbp-tg a b{display:block;font:700 20px/1 "Barlow Condensed",sans-serif;text-transform:uppercase}' +
    '.wbp-tg a small{display:block;font-size:12.5px;margin-top:4px}' +
    '.wbp-tg a i{position:absolute;top:-9px;right:10px;background:' + ROJO + ';color:#fff;font-style:normal;font-size:10px;font-weight:600;letter-spacing:.1em;padding:3px 7px;border-radius:4px}' +
    '.wbp-s{border:1.5px solid #e4e4e7;border-radius:14px;margin-bottom:8px;background:#fff;overflow:hidden}' +
    '.wbp-s.open{border-color:#0b0b0d}' +
    '.wbp-sh{appearance:none;width:100%;display:flex;align-items:center;gap:10px;background:none;border:0;padding:10px 12px;cursor:pointer;text-align:left;color:#0b0b0d;font:inherit}' +
    '.wbp-n{flex:0 0 26px;height:26px;border-radius:50%;background:#f4f4f5;color:#0b0b0d;display:flex;align-items:center;justify-content:center;font:700 13px Inter,sans-serif}' +
    '.wbp-s.ok .wbp-n{background:#0b0b0d;color:#fff}' +
    '.wbp-th{flex:0 0 40px;width:40px;height:40px;border-radius:8px;object-fit:cover;display:none;margin:0}' +
    '.wbp-s.ok .wbp-th{display:block}' +
    '.wbp-st{flex:1;min-width:0}' +
    '.wbp-st b{display:block;font:700 18px/1.05 "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.02em}' +
    '.wbp-st span{display:block;font-size:13px;color:#71717a;margin-top:2px}' +
    '.wbp-s.ok .wbp-st span{color:#0b0b0d;font-weight:500}' +
    '.wbp-s.falta .wbp-st span{color:' + ROJO + '}' +
    '.wbp-ed{font-size:12.5px;color:#52525b;text-decoration:underline;text-underline-offset:3px;display:none}' +
    '.wbp-s.ok:not(.open) .wbp-ed{display:inline}' +
    '.wbp-bd{display:none;padding:2px 12px 14px}' +
    '.wbp-s.open .wbp-bd{display:block}' +
    '.wbp-l{font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#52525b;margin:4px 0 8px}' +
    '.wbp-cs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px}' +
    '.wbp-c{appearance:none;display:block;border:1.5px solid #e4e4e7;background:#fff;border-radius:12px;padding:0;cursor:pointer;overflow:hidden;text-align:center;color:#0b0b0d;font:600 13.5px Inter,sans-serif;position:relative}' +
    '.wbp-c img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;margin:0;max-width:none}' +
    '.wbp-c span{display:block;padding:7px 4px 8px}' +
    '.wbp-c.on{border-color:#0b0b0d;box-shadow:inset 0 0 0 1px #0b0b0d}' +
    '.wbp-c.on:after{content:"";position:absolute;top:7px;right:7px;width:20px;height:20px;border-radius:50%;background:#0b0b0d url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27%3E%3Cpath d=%27M5 12l5 5L20 7%27/%3E%3C/svg%3E") center/12px no-repeat}' +
    '.wbp-ts{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}' +
    '.wbp-tl{appearance:none;border:1.5px solid #e4e4e7;background:#fff;border-radius:10px;height:44px;cursor:pointer;color:#0b0b0d;font:600 14px Inter,sans-serif;padding:0}' +
    '.wbp-tl.on{background:#0b0b0d;color:#fff;border-color:#0b0b0d}' +
    '.wbp-re{display:flex;align-items:center;gap:10px;margin-top:10px;padding:11px 12px;border-radius:12px;background:#f4f4f5;font-size:13.5px;color:#0b0b0d;line-height:1.35}' +
    '.wbp-re svg{flex:0 0 20px}' +
    '.wbp-res{margin-top:10px;font-size:13px;color:#52525b;line-height:1.4}' +
    '.wbp-res b{color:#0b0b0d;font-weight:600}' +
    '.wbp.err .wbp-s:not(.ok){border-color:' + ROJO + '}' +

    /* modal guía */
    '.wbv-m{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:100000;display:none;align-items:center;justify-content:center;padding:16px}' +
    '.wbv-m.on{display:flex}' +
    '.wbv-mb{background:#0b0b0d;border:1px solid #2c2c30;border-radius:14px;max-width:520px;width:100%;padding:20px 16px;color:#f4f4f5;font-family:Inter,sans-serif;position:relative}' +
    '.wbv-mb h3{font-family:"Barlow Condensed",sans-serif;font-size:28px;font-weight:700;text-transform:uppercase;margin:0 0 4px}' +
    '.wbv-x{position:absolute;top:10px;right:12px;background:none;border:0;color:#fff;font-size:26px;cursor:pointer;line-height:1}' +
    '.wbv-tab{width:100%;border-collapse:collapse;font-size:14px;margin-top:12px}' +
    '.wbv-tab th,.wbv-tab td{padding:9px 6px;text-align:center;border-bottom:1px solid #232326}' +
    '.wbv-tab th{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#a1a1aa;font-weight:600}' +
    '.wbv-tab td:first-child{font-weight:600;color:#fff}' +
    '.wbv-nota{font-size:12.5px;color:#a1a1aa;margin-top:10px;line-height:1.45}' +

    /* ── landing oscura ── */
    '.wbv-land{background:#0b0b0d;margin:28px 0 0;padding:0 0 34px}' +
    '.wbv-in{max-width:1120px;margin:0 auto;padding:0 16px}' +
    '.wbv-sec{padding:48px 0 0}' +
    '.wbv-sec h2{font-size:40px;color:#fff;margin:8px 0 10px}' +
    '.wbv-sec .wbv-sub{font-size:15.5px;color:#c4c4c8;line-height:1.55;max-width:560px}' +
    '.wbv-hero{display:grid;gap:22px;padding-top:36px;align-items:center}' +
    '.wbv-vid{position:relative;border-radius:14px;overflow:hidden;background:#000;aspect-ratio:9/16;max-height:78vh;width:100%;max-width:440px;margin:0 auto}' +
    '.wbv-vid video{width:100%;height:100%;object-fit:cover;display:block}' +
    '.wbv-snd{position:absolute;right:10px;bottom:10px;background:rgba(11,11,13,.82);color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:8px 13px;font:600 12.5px Inter,sans-serif;cursor:pointer}' +
    '.wbv-ht h2{font-size:56px}' +
    '.wbv-ht h2 em{font-style:normal;color:' + ROJO + '}' +
    '.wbv-li{list-style:none;padding:0;margin:16px 0 0;display:grid;gap:10px}' +
    '.wbv-li li{display:flex;gap:10px;align-items:flex-start;font-size:15px;color:#e4e4e7;line-height:1.4}' +
    '.wbv-li li:before{content:"";flex:0 0 8px;height:8px;margin-top:6px;background:' + ROJO + '}' +
    '.wbv-btn{display:inline-block;margin-top:22px;background:' + ROJO + ';color:#fff!important;text-decoration:none;border:0;border-radius:10px;padding:15px 22px;font:700 20px "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}' +
    '.wbv-3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}' +
    '.wbv-fr{position:relative;border-radius:10px;overflow:hidden;background:#141416;aspect-ratio:4/5}' +
    '.wbv-fr video,.wbv-fr img{width:100%;height:100%;object-fit:cover;display:block}' +
    '.wbv-fr span{position:absolute;left:8px;bottom:8px;background:rgba(11,11,13,.82);color:#fff;font:700 15px "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.05em;padding:4px 8px;border-radius:4px}' +
    '.wbv-2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}' +
    '.wbv-d b{display:block;font:700 19px "Barlow Condensed",sans-serif;text-transform:uppercase;color:#fff;margin:9px 0 2px}' +
    '.wbv-d p{font-size:13.5px;color:#a1a1aa;line-height:1.4}' +
    '.wbv-cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}' +
    '.wbv-op{border:1.5px solid #2c2c30;border-radius:12px;padding:16px 14px;position:relative}' +
    '.wbv-op.top{border-color:#fff;background:#141416}' +
    '.wbv-op i{position:absolute;top:-10px;left:12px;background:' + ROJO + ';color:#fff;font-style:normal;font-size:11px;font-weight:600;letter-spacing:.08em;padding:3px 8px;border-radius:4px}' +
    '.wbv-op b{display:block;font:700 26px "Barlow Condensed",sans-serif;text-transform:uppercase;color:#fff}' +
    '.wbv-op .p{font:700 34px "Barlow Condensed",sans-serif;color:#fff;margin-top:6px;line-height:1}' +
    '.wbv-op .u{font-size:13.5px;color:#d4d4d8;margin-top:6px}' +
    '.wbv-op .t{font-size:12px;color:#a1a1aa;margin-top:4px}' +
    '.wbv-gift{display:grid;gap:18px;align-items:center;margin-top:18px;border:1px solid #232326;border-radius:14px;padding:18px 16px;background:#111113}' +
    '.wbv-gift .ic{width:52px;height:52px;border-radius:50%;background:' + ROJO + ';color:#fff;display:flex;align-items:center;justify-content:center}' +
    '.wbv-gift .ic svg{width:26px;height:26px}' +
    '.wbv-gift b{display:block;font:700 30px/1 "Barlow Condensed",sans-serif;text-transform:uppercase;color:#fff}' +
    '.wbv-gift p{font-size:14.5px;color:#c4c4c8;line-height:1.5;margin-top:6px}' +
    '.wbv-ca{display:grid;grid-template-columns:1fr;gap:14px;margin-top:18px}' +
    '.wbv-ca .box{border:1px solid #232326;border-radius:12px;padding:16px 14px}' +
    '.wbv-tru{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}' +
    '.wbv-tru div{border:1px solid #232326;border-radius:12px;padding:14px}' +
    '.wbv-tru b{display:block;font:700 20px "Barlow Condensed",sans-serif;text-transform:uppercase;color:#fff;line-height:1.05}' +
    '.wbv-tru p{font-size:13px;color:#a1a1aa;margin-top:5px;line-height:1.4}' +
    '.wbv-faq{margin-top:14px;border-top:1px solid #232326}' +
    '.wbv-faq details{border-bottom:1px solid #232326}' +
    '.wbv-faq summary{list-style:none;cursor:pointer;padding:16px 30px 16px 0;position:relative;font-weight:600;font-size:15px;color:#fff}' +
    '.wbv-faq summary::-webkit-details-marker{display:none}' +
    '.wbv-faq summary:after{content:"+";position:absolute;right:4px;top:12px;font-size:22px;font-weight:400;color:#a1a1aa}' +
    '.wbv-faq details[open] summary:after{content:"–"}' +
    '.wbv-faq p{padding:0 0 16px;font-size:14px;color:#c4c4c8;line-height:1.55}' +
    '.wbv-fin{text-align:center;padding:56px 0 10px}' +
    '.wbv-fin h2{font-size:48px;color:#fff}' +
    '@media (min-width:768px){' +
      '.wbv-sec{padding-top:76px}.wbv-sec h2{font-size:56px}' +
      '.wbv-hero{grid-template-columns:420px 1fr;gap:56px;padding-top:56px}.wbv-ht h2{font-size:84px}' +
      '.wbv-3{gap:14px}.wbv-2{grid-template-columns:repeat(4,1fr);gap:14px}' +
      '.wbv-cmp{max-width:620px}.wbv-ca{grid-template-columns:1fr 1fr;align-items:start}' +
      '.wbv-gift{grid-template-columns:52px 1fr;max-width:760px;padding:22px 24px}' +
      '.wbv-tru{grid-template-columns:repeat(3,1fr)}' +
      '.wbv-faq{max-width:760px}.wbv-fin h2{font-size:72px}' +
    '}' +
    '.wbv-oculto{display:none!important}';
    var s = el('style'); s.id = 'wbv-css'; s.textContent = css; document.head.appendChild(s);
  }

  /* ---------- campos de Wess (app Campo personalizado) ---------- */
  function camposWess() {
    return $$('select[name^="properties[campo_select_Elegir Bermuda"]').sort(function (a, b) { return a.name < b.name ? -1 : 1; });
  }
  function ponerValor(sel, v) {
    var set = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
    set.call(sel, v);
    sel.dispatchEvent(new Event('input', { bubbles: true }));
    sel.dispatchEvent(new Event('change', { bubbles: true }));
  }

  /* ---------- Armá tu combo: una bermuda por vez, con fotos ---------- */
  function tarjeta(cfg, d, otro) {
    var n = cfg.n, slots = [];
    var guardado = {};
    try { guardado = JSON.parse(sessionStorage.getItem('wbv-elec') || '{}'); } catch (e) {}
    for (var i = 0; i < n; i++) slots.push({ c: (guardado.s && guardado.s[i] && guardado.s[i].c) || null, t: (guardado.s && guardado.s[i] && guardado.s[i].t) || null });

    var card = el('div', 'wbp'); card.id = 'wbv-armar';
    card.appendChild(el('div', 'wbp-hd', '<b>Armá tu combo</b><button type="button" class="wbp-g">Guía de talles</button>'));
    $('.wbp-g', card).addEventListener('click', function () { $('.wbv-m').classList.add('on'); });

    var u2 = n === 2 ? d.transf / 2 : (otro ? otro / 2 : null);
    var u3 = n === 3 ? d.transf / 3 : (otro ? otro / 3 : null);
    var tg = el('div', 'wbp-tg',
      '<a href="' + (n === 2 ? '#' : cfg.otro) + '" class="' + (n === 2 ? 'on' : '') + '"><b>2 bermudas</b><small>' + (u2 ? plata(u2) + ' c/u' : '&nbsp;') + '</small></a>' +
      '<a href="' + (n === 3 ? '#' : cfg.otro) + '" class="' + (n === 3 ? 'on' : '') + '"><i>CONVIENE</i><b>3 bermudas</b><small>' + (u3 ? plata(u3) + ' c/u' : '&nbsp;') + '</small></a>');
    card.appendChild(tg);
    $$('a', tg).forEach(function (a) {
      a.addEventListener('click', function (ev) {
        if (a.classList.contains('on')) { ev.preventDefault(); return; }
        try { sessionStorage.setItem('wbv-elec', JSON.stringify({ s: slots.map(function (x) { return { c: x.c, t: x.t }; }) })); } catch (e) {}
      });
    });

    var abierta = 0;
    slots.forEach(function (s, i) {
      var box = el('div', 'wbp-s');
      box.innerHTML =
        '<button type="button" class="wbp-sh"><span class="wbp-n">' + (i + 1) + '</span><img class="wbp-th" alt="" width="40" height="40">' +
          '<span class="wbp-st"><b>Bermuda ' + (i + 1) + '</b><span></span></span><span class="wbp-ed">Cambiar</span></button>' +
        '<div class="wbp-bd">' +
          '<div class="wbp-l">Modelo</div>' +
          '<div class="wbp-cs">' + COLORES.map(function (c) {
            return '<button type="button" class="wbp-c" data-c="' + c.k + '" aria-label="Bermuda ' + c.nombre + '"><img src="' + M + 'pick-' + c.k + '.jpg" alt="" loading="lazy" width="360" height="360"><span>' + c.nombre + '</span></button>';
          }).join('') + '</div>' +
          '<div class="wbp-l">Talle</div>' +
          '<div class="wbp-ts">' + TALLES.map(function (t) { return '<button type="button" class="wbp-tl" data-t="' + t + '">' + t + '</button>'; }).join('') + '</div>' +
        '</div>';
      $('.wbp-sh', box).addEventListener('click', function () { abierta = abierta === i ? -1 : i; pintar(); });
      $$('.wbp-c', box).forEach(function (b) {
        b.addEventListener('click', function () { s.c = b.getAttribute('data-c'); avanzar(i); pintar(); });
      });
      $$('.wbp-tl', box).forEach(function (b) {
        b.addEventListener('click', function () {
          s.t = b.getAttribute('data-t');
          /* el primer talle elegido se copia a las bermudas que todavía no tienen */
          slots.forEach(function (o) { if (!o.t) o.t = s.t; });
          avanzar(i); pintar();
        });
      });
      s.box = box; card.appendChild(box);
    });

    var rs = el('div', 'wbp-res');
    card.appendChild(rs);
    card.appendChild(el('div', 'wbp-re', REGALO + '<span><b>Te llega en bolsita de regalo.</b> Lista para regalar o para estrenar.</span>'));

    /* cuando una bermuda queda completa, se abre la siguiente que falta */
    function avanzar(i) {
      if (!(slots[i].c && slots[i].t)) return;
      for (var k = 1; k <= n; k++) {
        var j = (i + k) % n;
        if (!(slots[j].c && slots[j].t)) { abierta = j; return; }
      }
      abierta = -1;
    }
    function completo() { return slots.every(function (s) { return s.c && s.t; }); }
    function pintar() {
      var campos = camposWess();
      slots.forEach(function (s, i) {
        var ok = !!(s.c && s.t);
        s.box.classList.toggle('ok', ok);
        s.box.classList.toggle('open', abierta === i);
        s.box.classList.toggle('falta', !ok && card.classList.contains('err'));
        $$('.wbp-c', s.box).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-c') === s.c); });
        $$('.wbp-tl', s.box).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-t') === s.t); });
        var th = $('.wbp-th', s.box);
        if (s.c) th.src = M + 'pick-' + s.c + '.jpg';
        $('.wbp-st span', s.box).textContent = ok ? nombreDe(s.c) + ' · Talle ' + s.t
          : (!s.c && !s.t ? 'Elegí modelo y talle' : (!s.c ? 'Falta el modelo' : 'Falta el talle'));
        if (campos[i]) ponerValor(campos[i], ok ? 'TALLE ' + s.t + ' - BERMUDA ' + cfg.modelo[s.c] : '');
      });
      if (completo()) {
        card.classList.remove('err');
        rs.innerHTML = 'Tu combo: <b>' + slots.map(function (s) { return nombreDe(s.c) + ' ' + s.t; }).join(' + ') + '</b>. Ya podés agregarlo al carrito.';
      } else {
        rs.textContent = 'Podés llevar modelos y talles distintos, o todas iguales.';
      }
    }
    /* arranca abierta la primera que falta */
    abierta = -1;
    for (var k = 0; k < n; k++) { if (!(slots[k].c && slots[k].t)) { abierta = k; break; } }
    card.__completo = completo; card.__pintar = pintar;
    card.__marcar = function () { card.classList.add('err'); for (var k = 0; k < n; k++) { if (!(slots[k].c && slots[k].t)) { abierta = k; break; } } pintar(); };
    return card;
  }

  function modalGuia() {
    var m = el('div', 'wbv-m');
    m.innerHTML = '<div class="wbv-mb" role="dialog" aria-label="Guía de talles"><button class="wbv-x" type="button" aria-label="Cerrar">×</button>' +
      '<div class="wbv-k">Bermuda baggy</div><h3>Guía de talles</h3>' +
      '<table class="wbv-tab"><tr><th>Talle</th><th>Cintura</th><th>Cadera</th><th>Largo</th><th>Tiro</th></tr>' +
      GUIA.map(function (r) { return '<tr><td>' + r[0] + ' <span style="color:#71717a;font-weight:400">(' + r[1] + ')</span></td><td>' + r[2] + '</td><td>' + r[3] + '</td><td>' + r[4] + '</td><td>' + r[5] + '</td></tr>'; }).join('') +
      '</table><p class="wbv-nota">Medidas en cm, con la prenda apoyada: cintura y cadera de lado a lado. El modelo mide 1,70 m, pesa 70 kg y usa L. Si dudás entre dos talles, llevá el más grande: el baggy se usa holgado.</p></div>';
    m.addEventListener('click', function (e) { if (e.target === m || e.target.classList.contains('wbv-x')) m.classList.remove('on'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') m.classList.remove('on'); });
    document.body.appendChild(m);
  }

  /* ---------- landing ---------- */
  function vid(src, poster) {
    return '<video muted playsinline loop preload="none" poster="' + M + poster + '" data-src="' + M + src + '"></video>';
  }
  function landing(cfg, d, otro) {
    var n = cfg.n;
    var p2 = n === 2 ? d.transf : otro, p3 = n === 3 ? d.transf : otro;
    var L = el('section', 'wbv wbv-land');
    L.innerHTML = '<div class="wbv-in">' +
      '<div class="wbv-hero">' +
        '<div class="wbv-vid"><video muted playsinline loop autoplay preload="metadata" poster="' + M + 'combo-verano-poster.jpg" src="' + M + 'combo-verano-720.mp4"></video>' +
          '<button class="wbv-snd" type="button">Activar sonido</button></div>' +
        '<div class="wbv-ht"><div class="wbv-k">Wess Company · Combo Verano</div>' +
          '<h2>La bermuda que <em>va con todo</em></h2>' +
          '<p class="wbv-sub" style="margin-top:12px">Baggy de rústico, de nuestra marca. Te la ponés con lo que tengas y ya estás.</p>' +
          '<ul class="wbv-li"><li>Cintura elástica que calza sin apretar</li><li>Bolsillos amplios a los costados y atrás</li><li>Corte baggy, largo a la rodilla</li><li>Negra, gris y blanca: armá el combo a tu gusto</li><li>Te llega en bolsita de regalo</li></ul>' +
          '<button class="wbv-btn" type="button" data-ir>Armar mi combo</button></div>' +
      '</div>' +

      '<div class="wbv-sec"><div class="wbv-k">Tres colores</div><h2>Combinalas como quieras</h2>' +
        '<p class="wbv-sub">Elegí el color de cada bermuda. Si te gustan dos iguales, también se puede.</p>' +
        '<div class="wbv-3">' +
          '<div class="wbv-fr">' + vid('color-negro.mp4', 'color-negro.jpg') + '<span>Negra</span></div>' +
          '<div class="wbv-fr">' + vid('color-gris.mp4', 'color-gris.jpg') + '<span>Gris</span></div>' +
          '<div class="wbv-fr">' + vid('color-blanco.mp4', 'color-blanco.jpg') + '<span>Blanca</span></div>' +
        '</div></div>' +

      '<div class="wbv-sec"><div class="wbv-k">De cerca</div><h2>Hecha para usarla todos los días</h2>' +
        '<div class="wbv-2">' +
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-cintura.mp4', 'det-cintura.jpg') + '</div><b>Cintura elástica</b><p>Elástico ancho: calza firme y no aprieta.</p></div>' +
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-bolsillo.mp4', 'det-bolsillo.jpg') + '</div><b>Bolsillos amplios</b><p>Uno a cada costado, al alcance de la mano.</p></div>' +
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-espalda.mp4', 'det-espalda.jpg') + '</div><b>Bolsillo atrás</b><p>Bolsillo de parche en la espalda.</p></div>' +
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-caida.mp4', 'det-caida.jpg') + '</div><b>Caída baggy</b><p>Holgada y al largo de la rodilla.</p></div>' +
        '</div></div>' +

      ((p2 && p3) ? '<div class="wbv-sec"><div class="wbv-k">Precio por bermuda</div><h2>Cuantas más, mejor</h2>' +
        '<div class="wbv-cmp">' +
          '<div class="wbv-op' + (n === 2 ? ' top' : '') + '"><b>2 bermudas</b><div class="p">' + plata(p2) + '</div><div class="u">' + plata(p2 / 2) + ' cada una</div><div class="t">con transferencia</div></div>' +
          '<div class="wbv-op' + (n === 3 ? ' top' : '') + '"><i>CONVIENE</i><b>3 bermudas</b><div class="p">' + plata(p3) + '</div><div class="u">' + plata(p3 / 3) + ' cada una</div><div class="t">con transferencia</div></div>' +
        '</div>' +
        '<p class="wbv-sub" style="margin-top:12px">' + (n === 2 ? '<a href="' + cfg.otro + '" style="color:#fff;text-decoration:underline">Pasate al combo de 3</a> y cada bermuda te sale ' + plata(p2 / 2 - p3 / 3) + ' menos.' : 'Con 3 cada bermuda te sale ' + plata(p2 / 2 - p3 / 3) + ' menos que en el combo de 2.') + '</p></div>' : '') +

      '<div class="wbv-sec"><div class="wbv-k">Para regalar</div><h2>Viene listo para regalar</h2>' +
        '<div class="wbv-gift"><div class="ic">' + REGALO + '</div><div><b>Bolsita de regalo</b><p>Tu combo te llega en bolsita de regalo. Si es para vos, lo estrenás; si es para alguien más, no tenés que envolver nada.</p></div></div></div>' +

      '<div class="wbv-sec"><div class="wbv-k">Calce</div><h2>Elegí tu talle sin dudar</h2>' +
        '<div class="wbv-ca"><div class="box"><table class="wbv-tab" style="margin-top:0"><tr><th>Talle</th><th>Cintura</th><th>Cadera</th><th>Largo</th></tr>' +
          GUIA.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td><td>' + r[4] + '</td></tr>'; }).join('') +
          '</table><p class="wbv-nota">Medidas en cm, con la prenda apoyada.</p></div>' +
          '<div class="box"><b class="wbv-t" style="font-size:26px;display:block;color:#fff">El modelo usa L</b><p class="wbv-nota" style="font-size:14.5px;color:#c4c4c8">Mide 1,70 m y pesa 70 kg. Si dudás entre dos talles, llevá el más grande: el baggy se usa holgado.</p>' +
          '<p class="wbv-nota" style="font-size:14.5px;color:#c4c4c8">En el combo podés elegir un talle distinto para cada bermuda.</p></div></div></div>' +

      '<div class="wbv-sec"><div class="wbv-k">Comprá tranquilo</div><h2>Wess, desde Córdoba</h2>' +
        '<div class="wbv-tru">' +
          '<div><b>4,86 en Google</b><p>98 opiniones de nuestros locales.</p></div>' +
          '<div><b>3 locales</b><p>Vení a probártela a nuestros locales de Córdoba.</p></div>' +
          '<div><b>Bolsita de regalo</b><p>Tu combo llega listo para regalar.</p></div>' +
          '<div><b>Cambio en 10 días</b><p>Si el talle no te quedó, la cambiás.</p></div>' +
          '<div><b>Envíos a todo el país</b><p>En Córdoba Capital, con nuestro cadete en el día.</p></div>' +
          '<div><b>3 cuotas sin interés</b><p>O el mejor precio pagando con transferencia.</p></div>' +
        '</div></div>' +

      '<div class="wbv-sec"><div class="wbv-k">Preguntas</div><h2>Lo que nos preguntan</h2><div class="wbv-faq">' +
        '<details><summary>¿Puedo elegir talles distintos en el combo?</summary><p>Sí. Elegís el modelo y el talle de cada bermuda por separado.</p></details>' +
        '<details><summary>¿Puedo llevar dos del mismo color?</summary><p>Sí, el combo se arma como quieras: todas iguales o mezcladas.</p></details>' +
        '<details><summary>¿Viene para regalo?</summary><p>Sí, te llega en bolsita de regalo.</p></details>' +
        '<details><summary>¿Cómo sé mi talle?</summary><p>Fijate la tabla de arriba. El modelo mide 1,70 m, pesa 70 kg y usa L. Si dudás entre dos, llevá el más grande.</p></details>' +
        '<details><summary>¿El precio del combo es con tarjeta?</summary><p>El precio grande es pagando con transferencia. Con tarjeta el combo de ' + n + ' sale ' + exacto(d.lista) + ' y lo ves al pagar.</p></details>' +
        '<details><summary>¿Y si no me queda bien?</summary><p>Tenés 10 días para cambiarla. Escribinos por WhatsApp y lo coordinamos.</p></details>' +
        '<details><summary>¿Cuánto tarda en llegar?</summary><p>En Córdoba Capital te la lleva nuestro cadete, en el día. Al resto del país va por correo con seguimiento.</p></details>' +
      '</div></div>' +

      '<div class="wbv-fin"><div class="wbv-k">Combo Verano</div><h2>Armá el tuyo</h2><button class="wbv-btn" type="button" data-ir>Elegir modelo y talle</button></div>' +
    '</div>';
    return L;
  }

  function videosDiferidos(root) {
    var vs = $$('video[data-src]', root);
    var arrancar = function (v) { if (!v.src) { v.src = v.getAttribute('data-src'); } var p = v.play(); if (p && p.catch) p.catch(function () {}); };
    if (!('IntersectionObserver' in window)) { vs.forEach(arrancar); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { var v = e.target; if (e.isIntersecting) arrancar(v); else if (v.src) v.pause(); });
    }, { rootMargin: '200px 0px' });
    vs.forEach(function (v) { io.observe(v); });
  }

  function montar() {
    var cfg = CFG, d = D;
    var campos = camposWess();
    var form = $('#product_form');
    var single = $('#single-product');
    if (!form || !single || campos.length < cfg.n) return false; /* la app de Wess todavía no dibujó sus campos */

    estilos();
    var otro = null;
    var cuerpo = function () {
      var raiz = $('#campo-personalizado--root');
      var card = tarjeta(cfg, d, otro);
      raiz.parentNode.insertBefore(card, raiz);
      raiz.classList.add('wbv-oculto');
      modalGuia();

      var L = landing(cfg, d, otro);
      var cont = single.querySelector(':scope > .container-fluid, :scope > .container') || single.firstElementChild;
      cont.parentNode.insertBefore(L, cont.nextSibling);
      videosDiferidos(L);

      var hv = $('.wbv-vid video', L), sb = $('.wbv-snd', L);
      sb.addEventListener('click', function () {
        if (hv.muted) { hv.src = M + 'combo-verano-720-sonido.mp4'; hv.muted = false; hv.loop = false; hv.currentTime = 0; hv.play(); sb.textContent = 'Silenciar'; }
        else { hv.muted = true; sb.textContent = 'Activar sonido'; }
      });

      var irA = function () { card.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
      $$('[data-ir]', L).forEach(function (b) { b.addEventListener('click', irA); });

      /* si falta elegir, el botón de compra lleva a la tarjeta en vez de fallar callado */
      var frenar = function (ev) {
        if (card.__completo()) return;
        ev.preventDefault(); ev.stopImmediatePropagation();
        card.__marcar(); irA();
      };
      form.addEventListener('submit', frenar, true);
      document.addEventListener('click', function (ev) {
        var t = ev.target.closest && ev.target.closest('.js-addtocart, .wsa-btn');
        if (t && (t.classList.contains('wsa-btn') || t.closest('#product_form'))) frenar(ev);
      }, true);
      form.addEventListener('invalid', function () { if (!card.__completo()) { card.__marcar(); irA(); } }, true);
      card.__pintar();
    };

    fetch(cfg.otro, { credentials: 'omit' }).then(function (r) { return r.text(); }).then(function (h) {
      var m = h.match(/price_with_payment_discount_short&quot;:&quot;\$([\d.,]+)/);
      if (m) otro = parseFloat(m[1].replace(/\./g, '').replace(',', '.'));
    }).catch(function () {}).then(cuerpo);
    return true;
  }

  function intentar(n) {
    if (montar()) return;
    if (n > 60) return; /* ~15 s: si la app de Wess no aparece, se deja todo como está */
    setTimeout(function () { intentar(n + 1); }, 250);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { intentar(0); });
  else intentar(0);
})();
