['wess-form-faqs','wess-carousel','wess-problema','wess-tresfotos','wess-comp-table','wess-marquee','wess-testimonios','wess-faqs-main','wess-garantia'].forEach(function(i){var e=document.getElementById(i);if(e)e.remove()});document.querySelectorAll('.wbv-land,.wbv-card,.wbv-bar,.wbv-m,#wbv-css').forEach(function(e){e.remove()});document.getElementById('campo-personalizado--root')&&document.getElementById('campo-personalizado--root').classList.remove('wbv-oculto');window.__wbv=0;/* WESS · Landing Combo Verano (bermudas baggy de rústico) — PRAXIS 06-10-2026
   Va DENTRO de la descripción de los dos combos (2 y 3 bermudas). Todo el HTML se arma acá.
   - Apaga la landing general del motor SOLO en estos dos productos (WESS_CONFIG = null).
   - "Armá tu combo": color + talle por bermuda, con fotos. Completa los campos de la app
     «Campo personalizado» de Wess (Elegir Bermuda 1/2/3), que siguen siendo los que llegan en el pedido.
     Si algo falla, los campos de Wess quedan a la vista como siempre.
   - Precios leídos de la ficha (data-variants): nunca escritos a mano. */
(function () {
  if (window.__wbv) return; window.__wbv = 1;
  try { Object.defineProperty(window, 'WESS_CONFIG', { value: null, writable: false, configurable: false }); } catch (e) {}

  var M = 'https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/wess/combo-verano/';
  var ROJO = '#E10600';
  // Qué número de «BERMUDA n» es cada color en la app de Wess (orden de las fotos de cada ficha).
  var PRODUCTOS = {
    '371737471': { n: 2, otro: '/productos/3-bermudas-joggins-baggys-x-74-990-promo-limitada-bx8ao/', modelo: { negro: 1, blanco: 2, gris: 3 } },
    '371736882': { n: 3, otro: '/productos/2-bermudas-joggins-baggys-x-64-990-promo-limitada-a20bh/', modelo: { blanco: 1, gris: 2, negro: 3 } }
  };
  var COLORES = [
    { k: 'negro', nombre: 'Negra' },
    { k: 'gris', nombre: 'Gris' },
    { k: 'blanco', nombre: 'Blanca' }
  ];
  var TALLES = ['S', 'M', 'L', 'XL', 'XXL'];
  var GUIA = [['S', '36', 38, 46, 63, 36], ['M', '38', 40, 52, 64, 38], ['L', '40', 43, 57, 65, 39], ['XL', '42', 44, 58, 68, 40], ['XXL', '44', 47, 61, 69, 41]];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var plata = function (n) { return '$' + Math.round(n).toLocaleString('es-AR'); };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function datos() {
    var f = $('[data-variants]'); if (!f) return null;
    try {
      var v = JSON.parse(f.getAttribute('data-variants'))[0];
      return { id: String(v.product_id), lista: v.price_number, transf: parseFloat(String(v.price_with_payment_discount_short || '').replace(/[^\d,]/g, '').replace(',', '.')) || v.price_number };
    } catch (e) { return null; }
  }

  // ---------- estilos ----------
  function estilos() {
    if (!$('link[href*="Barlow+Condensed"]')) {
      var l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600&display=swap';
      document.head.appendChild(l);
    }
    var css = '' +
    '.wbv,.wbv *{box-sizing:border-box}' +
    '.wbv{font-family:Inter,system-ui,sans-serif;color:#f4f4f5;-webkit-font-smoothing:antialiased}' +
    '.wbv h2,.wbv h3,.wbv .wbv-t{font-family:"Barlow Condensed",Inter,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.01em;margin:0;line-height:.95}' +
    '.wbv p{margin:0}' +
    '.wbv-k{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:' + ROJO + '}' +
    /* tarjeta Armá tu combo */
    '.wbv-card{background:#0b0b0d;border:1px solid #232326;border-radius:14px;padding:18px 16px 16px;margin:14px 0 16px;color:#f4f4f5;font-family:Inter,system-ui,sans-serif}' +
    '.wbv-card *{box-sizing:border-box}' +
    '.wbv-tg{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0 14px}' +
    '.wbv-tg a{display:block;text-decoration:none;border:1.5px solid #2c2c30;border-radius:10px;padding:10px 12px;color:#d4d4d8;position:relative}' +
    '.wbv-tg a.on{border-color:#fff;color:#fff;background:#161618}' +
    '.wbv-tg b{display:block;font-family:"Barlow Condensed",sans-serif;font-size:22px;font-weight:700;text-transform:uppercase;line-height:1}' +
    '.wbv-tg small{display:block;font-size:12.5px;color:#a1a1aa;margin-top:4px}' +
    '.wbv-tg i{position:absolute;top:-9px;right:8px;background:' + ROJO + ';color:#fff;font-style:normal;font-size:10.5px;font-weight:600;letter-spacing:.08em;padding:3px 7px;border-radius:4px}' +
    '.wbv-pr{display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 10px;padding:2px 0 12px;border-bottom:1px solid #232326}' +
    '.wbv-pr .a{font-family:"Barlow Condensed",sans-serif;font-weight:700;font-size:40px;line-height:1;color:#fff}' +
    '.wbv-pr .b{font-size:13px;color:#a1a1aa}' +
    '.wbv-pr .c{flex-basis:100%;font-size:13px;color:#d4d4d8}' +
    '.wbv-slot{padding:12px 0;border-bottom:1px solid #1d1d20}' +
    '.wbv-slot:last-of-type{border-bottom:0}' +
    '.wbv-sh{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}' +
    '.wbv-sh b{font-family:"Barlow Condensed",sans-serif;font-size:19px;font-weight:700;text-transform:uppercase;letter-spacing:.02em}' +
    '.wbv-sh span{font-size:12.5px;color:#a1a1aa}' +
    '.wbv-sh span.ok{color:#4ade80}' +
    '.wbv-cs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px}' +
    '.wbv-c{appearance:none;border:1.5px solid #2c2c30;background:#141416;border-radius:10px;padding:5px 5px 7px;cursor:pointer;color:#d4d4d8;font:500 12.5px Inter,sans-serif;text-align:center}' +
    '.wbv-c img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:6px;margin-bottom:5px}' +
    '.wbv-c.on{border-color:#fff;color:#fff;background:#1c1c1f}' +
    '.wbv-ts{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}' +
    '.wbv-tl{appearance:none;border:1.5px solid #2c2c30;background:#141416;border-radius:8px;height:40px;cursor:pointer;color:#e4e4e7;font:600 14px Inter,sans-serif}' +
    '.wbv-tl.on{background:#fff;color:#0b0b0d;border-color:#fff}' +
    '.wbv-g{appearance:none;background:none;border:0;color:#d4d4d8;text-decoration:underline;font:500 13px Inter,sans-serif;padding:8px 0 0;cursor:pointer}' +
    '.wbv-res{margin-top:10px;font-size:13px;color:#a1a1aa;line-height:1.4}' +
    '.wbv-res b{color:#fff;font-weight:600}' +
    '.wbv-card.err{border-color:' + ROJO + '}' +
    '.wbv-card.err .wbv-sh span.falta{color:#ff6b6b}' +
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
    /* landing */
    '.wbv-land{background:#0b0b0d;margin:28px 0 0;padding:0 0 30px}' +
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
    '.wbv-btn{display:inline-block;margin-top:20px;background:' + ROJO + ';color:#fff!important;text-decoration:none;border:0;border-radius:10px;padding:15px 22px;font:700 20px "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}' +
    '.wbv-3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}' +
    '.wbv-fr{position:relative;border-radius:10px;overflow:hidden;background:#141416;aspect-ratio:4/5}' +
    '.wbv-fr video,.wbv-fr img{width:100%;height:100%;object-fit:cover;display:block}' +
    '.wbv-fr span{position:absolute;left:8px;bottom:8px;background:rgba(11,11,13,.82);color:#fff;font:700 15px "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.05em;padding:4px 8px;border-radius:4px}' +
    '.wbv-2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}' +
    '.wbv-d .wbv-fr{aspect-ratio:4/5}' +
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
    '.wbv-fin{text-align:center;padding:52px 0 10px}' +
    '.wbv-fin h2{font-size:48px;color:#fff}' +
    /* barra fija celular */
    '.wbv-bar{position:fixed;left:0;right:0;bottom:0;z-index:9990;background:#0b0b0d;border-top:1px solid #2c2c30;padding:10px 14px calc(10px + env(safe-area-inset-bottom));display:none;align-items:center;gap:12px;font-family:Inter,sans-serif;transform:translateY(110%);transition:transform .25s ease}' +
    '.wbv-bar.on{transform:none}' +
    '.wbv-bar .p{color:#fff;font:700 24px "Barlow Condensed",sans-serif;line-height:1}' +
    '.wbv-bar small{display:block;color:#a1a1aa;font-size:11.5px;margin-top:2px}' +
    '.wbv-bar button{margin-left:auto;background:' + ROJO + ';color:#fff;border:0;border-radius:10px;padding:13px 16px;font:700 17px "Barlow Condensed",sans-serif;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}' +
    '@media (max-width:767px){.wbv-bar{display:flex}}' +
    '@media (min-width:768px){' +
      '.wbv-sec{padding-top:72px}.wbv-sec h2{font-size:56px}' +
      '.wbv-hero{grid-template-columns:420px 1fr;gap:56px;padding-top:56px}.wbv-ht h2{font-size:84px}' +
      '.wbv-3{gap:14px}.wbv-2{grid-template-columns:repeat(4,1fr);gap:14px}' +
      '.wbv-cmp{max-width:620px}.wbv-ca{grid-template-columns:1fr 1fr;align-items:start}' +
      '.wbv-tru{grid-template-columns:repeat(4,1fr)}' +
      '.wbv-faq{max-width:760px}.wbv-fin h2{font-size:72px}' +
    '}' +
    '.wbv-oculto{display:none!important}';
    var s = el('style'); s.id = 'wbv-css'; s.textContent = css; document.head.appendChild(s);
  }

  // ---------- campos de Wess (app Campo personalizado) ----------
  function camposWess() {
    return $$('select[name^="properties[campo_select_Elegir Bermuda"]').sort(function (a, b) { return a.name < b.name ? -1 : 1; });
  }
  function ponerValor(sel, v) {
    var set = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
    set.call(sel, v);
    sel.dispatchEvent(new Event('input', { bubbles: true }));
    sel.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // ---------- tarjeta Armá tu combo ----------
  function tarjeta(cfg, d, otro) {
    var n = cfg.n, slots = [];
    var guardado = {};
    try { guardado = JSON.parse(sessionStorage.getItem('wbv-elec') || '{}'); } catch (e) {}
    for (var i = 0; i < n; i++) slots.push({ c: (guardado.s && guardado.s[i] && guardado.s[i].c) || null, t: (guardado.s && guardado.s[i] && guardado.s[i].t) || null });

    var card = el('div', 'wbv-card'); card.id = 'wbv-armar';
    var u2 = n === 2 ? d.transf / 2 : (otro ? otro / 2 : null);
    var u3 = n === 3 ? d.transf / 3 : (otro ? otro / 3 : null);
    card.appendChild(el('div', 'wbv-k', 'Armá tu combo'));
    var tg = el('div', 'wbv-tg',
      '<a href="' + (n === 2 ? '#' : cfg.otro) + '" class="' + (n === 2 ? 'on' : '') + '" data-n="2"><b>2 bermudas</b><small>' + (u2 ? plata(u2) + ' c/u' : '&nbsp;') + '</small></a>' +
      '<a href="' + (n === 3 ? '#' : cfg.otro) + '" class="' + (n === 3 ? 'on' : '') + '" data-n="3"><i>CONVIENE</i><b>3 bermudas</b><small>' + (u3 ? plata(u3) + ' c/u' : '&nbsp;') + '</small></a>');
    card.appendChild(tg);
    $$('a', tg).forEach(function (a) {
      a.addEventListener('click', function (ev) {
        if (a.classList.contains('on')) { ev.preventDefault(); return; }
        try { sessionStorage.setItem('wbv-elec', JSON.stringify({ s: slots })); } catch (e) {}
      });
    });
    card.appendChild(el('div', 'wbv-pr',
      '<span class="a">' + plata(d.transf) + '</span><span class="b">con transferencia</span>' +
      '<span class="c">' + plata(d.lista) + ' con tarjeta · ' + n + ' bermudas a elección</span>'));

    var rs = el('div', 'wbv-res');
    slots.forEach(function (s, i) {
      var box = el('div', 'wbv-slot');
      box.innerHTML = '<div class="wbv-sh"><b>Bermuda ' + (i + 1) + '</b><span></span></div>' +
        '<div class="wbv-cs">' + COLORES.map(function (c) {
          return '<button type="button" class="wbv-c" data-c="' + c.k + '" aria-label="' + c.nombre + '"><img src="' + M + 'chip-' + c.k + '.jpg" alt="" loading="lazy" width="200" height="200">' + c.nombre + '</button>';
        }).join('') + '</div>' +
        '<div class="wbv-ts">' + TALLES.map(function (t) { return '<button type="button" class="wbv-tl" data-t="' + t + '">' + t + '</button>'; }).join('') + '</div>';
      $$('.wbv-c', box).forEach(function (b) { b.addEventListener('click', function () { s.c = b.getAttribute('data-c'); pintar(); }); });
      $$('.wbv-tl', box).forEach(function (b) {
        b.addEventListener('click', function () {
          s.t = b.getAttribute('data-t');
          // el primer talle elegido se copia a las bermudas que todavía no tienen talle
          slots.forEach(function (o) { if (!o.t) o.t = s.t; });
          pintar();
        });
      });
      s.box = box; card.appendChild(box);
    });
    var g = el('button', 'wbv-g', 'Ver guía de talles'); g.type = 'button';
    g.addEventListener('click', function () { $('.wbv-m').classList.add('on'); });
    card.appendChild(g);
    card.appendChild(rs);

    function completo() { return slots.every(function (s) { return s.c && s.t; }); }
    function pintar() {
      var campos = camposWess();
      slots.forEach(function (s, i) {
        $$('.wbv-c', s.box).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-c') === s.c); });
        $$('.wbv-tl', s.box).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-t') === s.t); });
        var st = $('.wbv-sh span', s.box);
        var col = s.c && COLORES.filter(function (c) { return c.k === s.c; })[0].nombre;
        if (s.c && s.t) { st.textContent = col + ' · ' + s.t; st.className = 'ok'; }
        else { st.textContent = !s.c && !s.t ? 'Elegí color y talle' : (!s.c ? 'Falta el color' : 'Falta el talle'); st.className = 'falta'; }
        if (campos[i]) ponerValor(campos[i], s.c && s.t ? 'TALLE ' + s.t + ' - BERMUDA ' + cfg.modelo[s.c] : '');
      });
      if (completo()) {
        card.classList.remove('err');
        rs.innerHTML = 'Tu combo: <b>' + slots.map(function (s) { return COLORES.filter(function (c) { return c.k === s.c; })[0].nombre + ' ' + s.t; }).join(' + ') + '</b>. Ya podés agregarlo al carrito.';
      } else {
        rs.textContent = 'Elegí el color y el talle de cada bermuda. Podés llevar talles distintos.';
      }
      var bar = $('.wbv-bar button'); if (bar) bar.textContent = completo() ? 'Agregar al carrito' : 'Armar mi combo';
    }
    card.__completo = completo; card.__pintar = pintar;
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

  // ---------- landing ----------
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
          '<ul class="wbv-li"><li>Cintura elástica que calza sin apretar</li><li>Bolsillos amplios a los costados y atrás</li><li>Corte baggy, largo a la rodilla</li><li>Negra, gris y blanca: armá el combo a tu gusto</li></ul>' +
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
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-bolsillo.mp4', 'det-bolsillo.jpg') + '</div><b>Bolsillos amplios</b><p>Entra el celu, la billetera y las llaves.</p></div>' +
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-espalda.mp4', 'det-espalda.jpg') + '</div><b>Bolsillo atrás</b><p>Bolsillo de parche en la espalda.</p></div>' +
          '<div class="wbv-d"><div class="wbv-fr">' + vid('det-caida.mp4', 'det-caida.jpg') + '</div><b>Caída baggy</b><p>Holgada y al largo de la rodilla.</p></div>' +
        '</div></div>' +

      ((p2 && p3) ? '<div class="wbv-sec"><div class="wbv-k">Precio por bermuda</div><h2>Cuantas más, mejor</h2>' +
        '<div class="wbv-cmp">' +
          '<div class="wbv-op' + (n === 2 ? ' top' : '') + '"><b>2 bermudas</b><div class="p">' + plata(p2) + '</div><div class="u">' + plata(p2 / 2) + ' cada una</div><div class="t">con transferencia</div></div>' +
          '<div class="wbv-op' + (n === 3 ? ' top' : '') + '"><i>CONVIENE</i><b>3 bermudas</b><div class="p">' + plata(p3) + '</div><div class="u">' + plata(p3 / 3) + ' cada una</div><div class="t">con transferencia</div></div>' +
        '</div>' +
        '<p class="wbv-sub" style="margin-top:12px">' + (n === 2 ? '<a href="' + cfg.otro + '" style="color:#fff">Pasate al combo de 3</a> y cada bermuda te sale ' + plata(p2 / 2 - p3 / 3) + ' menos.' : 'Con 3 cada bermuda te sale ' + plata(p2 / 2 - p3 / 3) + ' menos que en el combo de 2.') + '</p></div>' : '') +

      '<div class="wbv-sec"><div class="wbv-k">Calce</div><h2>Elegí tu talle sin dudar</h2>' +
        '<div class="wbv-ca"><div class="box"><table class="wbv-tab" style="margin-top:0"><tr><th>Talle</th><th>Cintura</th><th>Cadera</th><th>Largo</th></tr>' +
          GUIA.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td><td>' + r[4] + '</td></tr>'; }).join('') +
          '</table><p class="wbv-nota">Medidas en cm, con la prenda apoyada.</p></div>' +
          '<div class="box"><b class="wbv-t" style="font-size:26px;display:block;color:#fff">El modelo usa L</b><p class="wbv-nota" style="font-size:14.5px;color:#c4c4c8">Mide 1,70 m y pesa 70 kg. Si dudás entre dos talles, llevá el más grande: el baggy se usa holgado.</p>' +
          '<p class="wbv-nota" style="font-size:14.5px;color:#c4c4c8">En el combo podés elegir un talle distinto para cada bermuda.</p></div></div></div>' +

      '<div class="wbv-sec"><div class="wbv-k">Comprá tranquilo</div><h2>Wess, desde Córdoba</h2>' +
        '<div class="wbv-tru">' +
          '<div><b>4,86 en Google</b><p>98 opiniones de nuestros locales.</p></div>' +
          '<div><b>3 locales</b><p>Vení a probártela a Nueva Córdoba o Yofre Norte.</p></div>' +
          '<div><b>Cambio en 10 días</b><p>Si el talle no te quedó, la cambiás.</p></div>' +
          '<div><b>Envíos a todo el país</b><p>En Córdoba Capital, con nuestro cadete en el día.</p></div>' +
        '</div></div>' +

      '<div class="wbv-sec"><div class="wbv-k">Preguntas</div><h2>Lo que nos preguntan</h2><div class="wbv-faq">' +
        '<details><summary>¿Puedo elegir talles distintos en el combo?</summary><p>Sí. Elegís el color y el talle de cada bermuda por separado.</p></details>' +
        '<details><summary>¿Puedo llevar dos del mismo color?</summary><p>Sí, el combo se arma como quieras: todas iguales o mezcladas.</p></details>' +
        '<details><summary>¿Cómo sé mi talle?</summary><p>Fijate la tabla de arriba. El modelo mide 1,70 m, pesa 70 kg y usa L. Si dudás entre dos, llevá el más grande.</p></details>' +
        '<details><summary>¿El precio del combo es con tarjeta?</summary><p>El precio grande es pagando con transferencia. Con tarjeta el combo de ' + n + ' sale ' + plata(d.lista) + ' y lo ves al pagar.</p></details>' +
        '<details><summary>¿Y si no me queda bien?</summary><p>Tenés 10 días para cambiarla. Escribinos por WhatsApp y lo coordinamos.</p></details>' +
        '<details><summary>¿Cuánto tarda en llegar?</summary><p>En Córdoba Capital te la lleva nuestro cadete, en el día. Al resto del país va por correo con seguimiento.</p></details>' +
      '</div></div>' +

      '<div class="wbv-fin"><div class="wbv-k">Combo Verano</div><h2>Armá el tuyo</h2><button class="wbv-btn" type="button" data-ir>Elegir colores y talle</button></div>' +
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
    var d = datos(); if (!d) return false;
    var cfg = PRODUCTOS[d.id]; if (!cfg) return true;
    var campos = camposWess();
    var form = $('#product_form');
    var single = $('#single-product');
    if (!form || !single || campos.length < cfg.n) return false; // la app de Wess todavía no dibujó sus campos

    estilos();
    // precio del otro combo: lo trae la ficha del otro producto (mismo dominio)
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
      $$('.user-content').forEach(function (u) { u.classList.add('wbv-oculto'); });
      videosDiferidos(L);
      card.__pintar();

      // sonido del video principal
      var hv = $('.wbv-vid video', L), sb = $('.wbv-snd', L);
      sb.addEventListener('click', function () {
        if (hv.muted) { var t = hv.currentTime; hv.src = M + 'combo-verano-720-sonido.mp4'; hv.muted = false; hv.loop = false; hv.currentTime = 0; hv.play(); sb.textContent = 'Silenciar'; }
        else { hv.muted = true; sb.textContent = 'Activar sonido'; }
      });

      var irA = function () { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
      $$('[data-ir]', L).forEach(function (b) { b.addEventListener('click', irA); });

      // si falta elegir, el botón de compra lleva a la tarjeta en vez de fallar callado
      var frenar = function (ev) {
        if (card.__completo()) return;
        ev.preventDefault(); ev.stopImmediatePropagation();
        card.classList.add('err'); irA();
      };
      form.addEventListener('submit', frenar, true);
      $$('.js-addtocart', form).forEach(function (b) { b.addEventListener('click', frenar, true); });

      // barra fija (celular)
      var bar = el('div', 'wbv-bar', '<div><div class="p">' + plata(d.transf) + '</div><small>' + cfg.n + ' bermudas · con transferencia</small></div><button type="button">Armar mi combo</button>');
      document.body.appendChild(bar);
      $('button', bar).addEventListener('click', function () {
        if (card.__completo()) { var b = $('.js-addtocart:not(.js-addtocart-placeholder)', form) || $('.js-addtocart', form); if (b) b.click(); }
        else irA();
      });
      var actualizarBarra = function () {
        var r = card.getBoundingClientRect();
        bar.classList.toggle('on', r.bottom < 0 || r.top > innerHeight);
      };
      addEventListener('scroll', actualizarBarra, { passive: true }); actualizarBarra();
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
    if (n > 60) return; // ~15 s: si la app de Wess no aparece, se deja todo como está
    setTimeout(function () { intentar(n + 1); }, 250);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { intentar(0); });
  else intentar(0);
})();
