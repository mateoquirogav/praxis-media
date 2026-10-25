/* ══════════════════════════════════════════════════════════════
   KIT CRO · componentes de conversión (25-10-2026)
   Notificaciones flotantes · estrellas + reseñas (compra verificada) ·
   stock · barra de urgencia · insignias de confianza · contador.

   🔴 REGLA DEL KIT: el DISEÑO va por un lado y la PROCEDENCIA del dato por otro.
     · Cada componente recibe `fuente`: "real" o "demo".
     · "real"  → se muestra en la tienda publicada. Solo con datos verificables
                 (cargados desde el admin de TN, una planilla del cliente o la
                 propia ficha). El kit NO inventa compras, reseñas, stock ni plazos.
     · "demo"  → datos de ejemplo para ver el diseño. Se dibujan SOLO en la vista
                 previa del borrador, en el editor o con ?px_demo=1 en ESE navegador,
                 y cada pieza lleva el rótulo «EJEMPLO». Nunca salen al público.
     · Stock y urgencia leen valores reales (stock de la variante en TN, hora de
       corte del cliente, fecha de fin de una promo). Sin dato → no se dibujan.

   🔒 ESTILOS AISLADOS: todo vive dentro de un Shadow DOM (`pxk-host`). Ni el tema
   pisa al kit ni el kit toca tarjetas, pie u otras secciones.

   Piel: C['cro-kit'] = {
     acento, tinta, fondo, radio, fuente_texto,
     notificaciones: { fuente, posicion: "abajo-izq|abajo-der|arriba-izq|arriba-der", distancia: 12 (px al borde; ej. alto del encabezado),
                       primera: 8, duracion: 5, intervalo: 18, max: 12, cerrar: true,
                       items: [{ nombre, ciudad, producto, url, foto, cuando }] },
     resenas:   { fuente, ancla, items: [{ estrellas, texto, nombre, fecha, verificada }] },
     stock:     { umbral: 5, texto: "Quedan {n} en tu talle" },          ← lee TN
     urgencia:  { tipo: "corte", hora: 18, dias: [1,2,3,4,5], texto, fin }  ó
                { tipo: "promo", hasta: "2026-11-04T23:59:00-03:00", texto },
     confianza: { items: [{ icono: "cambio|envio|pago|local|garantia", t, d }] },
     contador:  { fuente, valor, prefijo, sufijo, texto, origen }
   }
   Funciona igual fuera del motor (vista previa): window.PXK.montar(raiz, config).
   ══════════════════════════════════════════════════════════════ */
(function () {
  if (window.PXK) { return; }

  /* ---------- utilidades ---------- */
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var quieto = function () { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
  /* ¿se pueden mostrar datos de EJEMPLO acá? (vista previa, editor o link de demo en este navegador) */
  var demoPermitida = function () {
    try {
      if (/[?&]px_demo=1\b/.test(location.search)) { localStorage.setItem('px-demo', '1'); }
      if (/[?&]px_demo=0\b/.test(location.search)) { localStorage.removeItem('px-demo'); }
      if (localStorage.getItem('px-demo') === '1') { return true; }
    } catch (e) {}
    return !!(window.PXK_VISTA_PREVIA || /preview/.test(location.search) || (window.PX && PX.enEditor));
  };
  var puede = function (bloque) { return !!bloque && (bloque.fuente === 'real' || (bloque.fuente === 'demo' && demoPermitida())); };
  var esDemo = function (bloque) { return bloque && bloque.fuente !== 'real'; };
  var CHIP = '<span class="chip">EJEMPLO</span>';

  var ICONOS = {
    cambio: '<path d="M4 7h11l-3-3M20 17H9l3 3"/>',
    envio: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
    pago: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h4"/>',
    local: '<path d="M4 10l1-5h14l1 5M5 10v9h14v-9M9 19v-5h6v5"/>',
    garantia: '<path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    candado: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
  };
  var icono = function (k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONOS[k] || ICONOS.garantia) + '</svg>'; };
  var estrellasSvg = function (v) {
    var h = '';
    for (var i = 1; i <= 5; i++) {
      var f = Math.max(0, Math.min(1, v - i + 1));
      h += '<span class="st" style="--f:' + Math.round(f * 100) + '%"></span>';
    }
    return '<span class="stars" role="img" aria-label="' + v.toFixed(1).replace('.', ',') + ' de 5">' + h + '</span>';
  };

  /* ---------- estilos (dentro del Shadow DOM: aislados) ---------- */
  var css = function (o) {
    var A = o.acento || '#E4022A', T = o.tinta || '#0B0B0B', F = o.fondo || '#FFFFFF', Rd = (o.radio != null ? o.radio : 14) + 'px';
    var FX = o.fuente_texto || 'Chivo, system-ui, -apple-system, "Segoe UI", sans-serif';
    return ':host{all:initial;--a:' + A + ';--t:' + T + ';--f:' + F + ';--r:' + Rd + ';--m:#6B6B72;--l:#E6E3DE;font:400 14px/1.4 ' + FX + ';color:var(--t)}' +
      '*{box-sizing:border-box}svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}' +
      '.chip{display:inline-block;font:700 9.5px/1 ' + FX + ';letter-spacing:.12em;color:#7A5B00;background:#FFE9A8;border-radius:4px;padding:3px 5px;vertical-align:middle}' +
      /* notificación flotante */
      '.toast{position:fixed;z-index:2147483000;width:min(340px,calc(100vw - 24px));display:grid;grid-template-columns:52px minmax(0,1fr) auto;gap:10px;align-items:center;padding:10px 10px 10px 10px;background:var(--f);color:var(--t);border-radius:var(--r);box-shadow:0 14px 40px -12px rgba(0,0,0,.35),0 0 0 1px rgba(0,0,0,.05);opacity:0;pointer-events:none;transition:opacity .35s ease,transform .45s cubic-bezier(.2,.8,.2,1)}' +
      '.toast.abajo-izq{left:max(12px,env(safe-area-inset-left,0px));bottom:calc(var(--d,12px) + env(safe-area-inset-bottom,0px));transform:translateY(16px)}' +
      '.toast.abajo-der{right:max(12px,env(safe-area-inset-right,0px));bottom:calc(var(--d,12px) + env(safe-area-inset-bottom,0px));transform:translateY(16px)}' +
      '.toast.arriba-izq{left:max(12px,env(safe-area-inset-left,0px));top:calc(var(--d,12px) + env(safe-area-inset-top,0px));transform:translateY(-16px)}' +
      '.toast.arriba-der{right:max(12px,env(safe-area-inset-right,0px));top:calc(var(--d,12px) + env(safe-area-inset-top,0px));transform:translateY(-16px)}' +
      '.toast.on{opacity:1;transform:none;pointer-events:auto}' +
      '.toast .ft{width:52px;height:52px;border-radius:10px;object-fit:cover;background:#F2F1EE;display:block}' +
      '.toast a{color:inherit;text-decoration:none;min-width:0}' +
      '.toast .q{font-size:12.5px;color:var(--m);display:block}.toast .q b{color:var(--t)}' +
      '.toast .p{display:block;font-weight:700;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:2px 0}' +
      '.toast .c{font-size:11.5px;color:var(--m);display:flex;align-items:center;gap:6px}' +
      '.toast .c i{width:6px;height:6px;border-radius:50%;background:#1F9D55;display:inline-block}' +
      '.toast .x{appearance:none;border:0;background:none;color:var(--m);width:30px;height:30px;font-size:18px;line-height:1;cursor:pointer;border-radius:8px;align-self:start}' +
      '.toast .x:focus-visible,a:focus-visible{outline:2px solid var(--a);outline-offset:2px}' +
      /* estrellas y reseñas */
      '.stars{display:inline-flex;gap:2px;vertical-align:middle}' +
      '.st{width:16px;height:16px;background:linear-gradient(90deg,#F5A623 var(--f),#DAD7D1 var(--f));-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2l3 6.6 7.2.7-5.4 4.8 1.6 7.1L12 17.6 5.6 21.2l1.6-7.1L1.8 9.3 9 8.6z%27/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2l3 6.6 7.2.7-5.4 4.8 1.6 7.1L12 17.6 5.6 21.2l1.6-7.1L1.8 9.3 9 8.6z%27/%3E%3C/svg%3E") center/contain no-repeat}' +
      '.rs{display:grid;gap:12px}.rs-h{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px}.rs-h b{font-size:26px;line-height:1}.rs-h span.n{color:var(--m);font-size:13px}' +
      '.rs-l{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}' +
      '.rv{border:1px solid var(--l);border-radius:var(--r);padding:14px;background:var(--f);display:grid;gap:6px;min-width:0}' +
      '.rv p{margin:0;font-size:14px;line-height:1.5;overflow-wrap:anywhere}.rv .who{font-size:12.5px;color:var(--m);display:flex;flex-wrap:wrap;gap:6px;align-items:center}' +
      '.ver{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;font-weight:700;color:#1F7A4A}.ver svg{width:14px;height:14px}' +
      /* stock */
      '.stk{display:flex;align-items:center;gap:8px;font-size:13.5px;color:var(--t);margin:8px 0}' +
      '.stk .bar{flex:0 0 64px;height:6px;border-radius:99px;background:#EFEDE9;overflow:hidden}.stk .bar i{display:block;height:100%;background:var(--a);border-radius:inherit}' +
      '.stk b{color:var(--a)}' +
      /* urgencia */
      '.urg{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:6px 12px;padding:10px 14px;border-radius:var(--r);background:var(--t);color:#fff;font-size:13.5px;text-align:center}' +
      '.urg .rel{display:inline-flex;gap:3px;font-variant-numeric:tabular-nums;font-weight:700}.urg .rel span{background:rgba(255,255,255,.14);border-radius:6px;padding:3px 6px;min-width:26px}' +
      /* confianza */
      '.tr{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}' +
      '.tr div{display:flex;gap:10px;align-items:flex-start;padding:12px;border:1px solid var(--l);border-radius:var(--r);background:var(--f);min-width:0}' +
      '.tr b{display:block;font-size:13.5px}.tr span{display:block;font-size:12px;color:var(--m);margin-top:2px}' +
      /* contador */
      '.cnt{display:flex;flex-direction:column;align-items:flex-start;gap:2px}.cnt b{font-size:34px;line-height:1;font-variant-numeric:tabular-nums}.cnt span{font-size:13px;color:var(--m)}' +
      '@media (prefers-reduced-motion:reduce){.toast{transition:none}}';
  };

  /* ---------- crea un host con Shadow DOM en `donde` ---------- */
  var host = function (donde, o, como) {
    var h = document.createElement('div');
    h.className = 'pxk-host';
    if (como === 'antes') { donde.parentNode.insertBefore(h, donde); }
    else if (como === 'despues') { donde.insertAdjacentElement('afterend', h); }
    else { donde.appendChild(h); }
    var sr = h.attachShadow ? h.attachShadow({ mode: 'open' }) : h;
    var st = document.createElement('style'); st.textContent = css(o); sr.appendChild(st);
    var raiz = document.createElement('div'); sr.appendChild(raiz);
    return raiz;
  };

  /* ================= 1) NOTIFICACIONES FLOTANTES ================= */
  var notificaciones = function (o) {
    var N = o.notificaciones; if (!puede(N)) { return null; }
    var items = (N.items || []).filter(function (x) { return x && x.nombre && x.producto; });
    if (!items.length) { return null; }
    var demo = esDemo(N), pos = N.posicion || 'abajo-izq';
    var primera = (N.primera != null ? N.primera : 8) * 1000, dura = (N.duracion || 5) * 1000, cada = (N.intervalo || 18) * 1000, max = N.max || 12;
    var raiz = host(document.body, o);
    var t = document.createElement('div'); t.className = 'toast ' + pos; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite');
    /* distancia al borde: número fijo o una función (ej. lo que mide el encabezado fijo en ese momento) */
    var dist = function () { var d = typeof N.distancia === 'function' ? N.distancia() : N.distancia; if (d != null && isFinite(+d)) { t.style.setProperty('--d', Math.max(0, +d) + 'px'); } };
    raiz.appendChild(t);
    var i = 0, vistos = 0, cerrado = false, timer = null;
    try { cerrado = sessionStorage.getItem('pxk-notif-x') === '1'; } catch (e) {}
    var pintar = function (x) {
      t.innerHTML = (x.foto ? '<img class="ft" src="' + esc(x.foto) + '" alt="" loading="lazy">' : '<span class="ft"></span>') +
        '<a href="' + esc(x.url || '#') + '"><span class="q"><b>' + esc(x.nombre) + '</b>' + (x.ciudad ? ' de ' + esc(x.ciudad) : '') + ' compró</span>' +
        '<span class="p">' + esc(x.producto) + '</span>' +
        '<span class="c">' + (demo ? CHIP : '<i></i>') + (x.cuando ? '<span>' + esc(x.cuando) + '</span>' : '') + '</span></a>' +
        (N.cerrar !== false ? '<button class="x" type="button" aria-label="Cerrar">×</button>' : '');
      var b = t.querySelector('.x');
      if (b) { b.addEventListener('click', function () { cerrado = true; t.classList.remove('on'); clearTimeout(timer); try { sessionStorage.setItem('pxk-notif-x', '1'); } catch (e) {} }); }
    };
    var ocupado = function () { return document.hidden || document.querySelector('.modal-show, .js-modal-open.show, #modal-cart.modal-show'); };
    var paso = function () {
      if (cerrado || vistos >= max) { return; }
      if (ocupado()) { timer = setTimeout(paso, 3000); return; }
      pintar(items[i % items.length]); i++; vistos++; dist();
      requestAnimationFrame(function () { t.classList.add('on'); });
      timer = setTimeout(function () { t.classList.remove('on'); timer = setTimeout(paso, cada); }, dura);
    };
    if (!cerrado) { timer = setTimeout(paso, primera); }
    return { mostrar: function (k) { clearTimeout(timer); pintar(items[k % items.length]); dist(); t.classList.add('on'); }, ocultar: function () { t.classList.remove('on'); }, items: items, nodo: t };
  };

  /* ================= 2) ESTRELLAS + RESEÑAS ================= */
  var resenas = function (o, donde) {
    var R = o.resenas; if (!puede(R) || !donde) { return null; }
    var items = (R.items || []).filter(function (x) { return x && x.texto && +x.estrellas > 0; });
    if (!items.length) { return null; }
    var demo = esDemo(R);
    var prom = items.reduce(function (s, x) { return s + Math.min(5, +x.estrellas); }, 0) / items.length;
    var raiz = host(donde, o);
    raiz.innerHTML = '<div class="rs"><div class="rs-h">' + estrellasSvg(prom) + '<b>' + prom.toFixed(1).replace('.', ',') + '</b><span class="n">' + items.length + ' reseña' + (items.length === 1 ? '' : 's') + (R.origen ? ' · ' + esc(R.origen) : '') + '</span>' + (demo ? CHIP : '') + '</div>' +
      '<div class="rs-l">' + items.map(function (x) {
        /* «Compra verificada» SOLO si el dato es real y la reseña viene marcada como verificada */
        var ver = !demo && x.verificada === true;
        return '<div class="rv">' + estrellasSvg(+x.estrellas) + '<p>' + esc(x.texto) + '</p><span class="who"><span>' + esc(x.nombre || 'Cliente') + (x.fecha ? ' · ' + esc(x.fecha) : '') + '</span>' +
          (ver ? '<span class="ver">' + icono('garantia') + 'Compra verificada</span>' : '') + (demo ? CHIP : '') + '</span></div>';
      }).join('') + '</div></div>';
    return raiz;
  };

  /* ================= 3) STOCK (lee la variante elegida en TN) ================= */
  var stock = function (o, donde, leer) {
    var S = o.stock; if (!S || !donde) { return null; }
    var umbral = +S.umbral || 5, raiz = host(donde, o, 'despues'), w = document.createElement('div'); raiz.appendChild(w);
    var pintar = function () {
      var n = leer();
      /* sin número real (null = stock infinito o desconocido) o por encima del umbral → no se dice nada */
      if (typeof n !== 'number' || !isFinite(n) || n <= 0 || n > umbral) { w.innerHTML = ''; return; }
      var txt = esc(S.texto || 'Quedan {n} en este talle').replace('{n}', '<b>' + n + '</b>');
      w.innerHTML = '<div class="stk"><span class="bar"><i style="width:' + Math.max(8, Math.round(n / umbral * 100)) + '%"></i></span><span>' + txt + '</span></div>';
    };
    pintar();
    return { pintar: pintar };
  };
  /* lector de stock real de una ficha de Tiendanube: variante elegida en data-variants */
  var stockTN = function () {
    try {
      var f = document.querySelector('[data-variants]'); if (!f) { return null; }
      var vs = JSON.parse(f.getAttribute('data-variants'));
      var sel = Array.prototype.map.call(f.querySelectorAll('select.js-variation-option, .js-variation-option:checked'), function (x) { return x.value; });
      var v = vs.filter(function (x) { return [x.option0, x.option1, x.option2].filter(function (z) { return z != null; }).every(function (z, i) { return !sel.length || sel[i] == null || sel[i] === z; }); })[0] || vs[0];
      return v && v.stock != null ? +v.stock : null;
    } catch (e) { return null; }
  };

  /* ================= 4) BARRA DE URGENCIA (solo plazos reales) ================= */
  var urgencia = function (o, donde) {
    var U = o.urgencia; if (!U || !donde) { return null; }
    var raiz = host(donde, o, 'antes'), w = document.createElement('div'); raiz.appendChild(w);
    var dos = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var ahora = new Date(), fin = null, txt = '';
      if (U.tipo === 'corte') {
        var dias = [].concat(U.dias || [1, 2, 3, 4, 5]); var c = new Date(ahora); c.setHours(+U.hora || 18, 0, 0, 0);
        if (dias.indexOf(ahora.getDay()) > -1 && ahora < c) { fin = c; txt = U.texto || 'Comprá antes de las ' + (+U.hora || 18) + ' h y despachamos hoy'; }
        else if (U.fin) { w.innerHTML = '<div class="urg">' + esc(U.fin) + '</div>'; return; }
      } else if (U.tipo === 'promo' && U.hasta) {
        var h = new Date(U.hasta); if (h > ahora) { fin = h; txt = U.texto || 'La promo termina en'; }
      }
      /* sin plazo real vigente → no se dibuja (nunca un reloj que vuelve a empezar) */
      if (!fin) { w.innerHTML = ''; clearInterval(iv); return; }
      var s = Math.floor((fin - ahora) / 1000), d = Math.floor(s / 86400), hh = Math.floor(s % 86400 / 3600), mm = Math.floor(s % 3600 / 60), ss = s % 60;
      w.innerHTML = '<div class="urg">' + icono('envio') + '<span>' + esc(txt) + '</span><span class="rel" aria-label="Tiempo restante">' + (d ? '<span>' + d + 'd</span>' : '') + '<span>' + dos(hh) + '</span>:<span>' + dos(mm) + '</span>:<span>' + dos(ss) + '</span></span></div>';
    };
    var iv = setInterval(tick, 1000); tick();
    return w;
  };

  /* ================= 5) INSIGNIAS DE CONFIANZA (políticas reales del cliente) ================= */
  var confianza = function (o, donde) {
    var K = o.confianza; if (!K || !donde || !(K.items || []).length) { return null; }
    var raiz = host(donde, o);
    raiz.innerHTML = '<div class="tr">' + K.items.map(function (x) { return '<div>' + icono(x.icono) + '<span><b>' + esc(x.t) + '</b>' + (x.d ? '<span>' + esc(x.d) + '</span>' : '') + '</span></div>'; }).join('') + '</div>';
    return raiz;
  };

  /* ================= 6) CONTADOR (cifra con origen) ================= */
  var contador = function (o, donde) {
    var K = o.contador; if (!puede(K) || !donde || !(+K.valor > 0)) { return null; }
    var raiz = host(donde, o), demo = esDemo(K), v = +K.valor;
    raiz.innerHTML = '<div class="cnt"><b>' + esc(K.prefijo || '') + '<span class="v">0</span>' + esc(K.sufijo || '') + '</b><span>' + esc(K.texto || '') + (K.origen ? ' · ' + esc(K.origen) : '') + ' ' + (demo ? CHIP : '') + '</span></div>';
    var el = raiz.querySelector('.v'), fmt = function (n) { return Math.round(n).toLocaleString('es-AR'); };
    if (quieto()) { el.textContent = fmt(v); return raiz; }
    var ini = null, ani = function (ts) { if (!ini) { ini = ts; } var p = Math.min(1, (ts - ini) / 1400); el.textContent = fmt(v * (1 - Math.pow(1 - p, 3))); if (p < 1) { requestAnimationFrame(ani); } };
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); requestAnimationFrame(ani); } }) : null;
    if (io) { io.observe(raiz.getRootNode().host || raiz); } else { el.textContent = fmt(v); }
    return raiz;
  };

  window.PXK = { notificaciones: notificaciones, resenas: resenas, stock: stock, stockTN: stockTN, urgencia: urgencia, confianza: confianza, contador: contador, demoPermitida: demoPermitida, estrellas: estrellasSvg };

  /* ---------- montaje en la tienda (motor) ---------- */
  if (window.PX && PX.montar) {
    PX.montar('cro-kit', function () {
      var o = (typeof C !== 'undefined' && C['cro-kit']) || {};
      if (o.activo === false) { return true; }
      if (/template-(cart|checkout)/.test(document.body.className)) { return true; }
      if (document.querySelector('[data-px="cro-kit"]')) { return true; }
      var marca = document.createElement('i'); marca.hidden = true; PX.marcar(marca, 'cro-kit'); document.body.appendChild(marca);
      if (o.notificaciones) { notificaciones(o); }
      var ficha = /template-product/.test(document.body.className);
      var compra = ficha && document.querySelector('.js-product-form, #product_form');
      var boton = compra && compra.querySelector('.js-addtocart, [type="submit"]');
      if (o.stock && boton) {
        var s = stock(o, boton, stockTN);
        compra.addEventListener('change', function () { if (s) { setTimeout(s.pintar, 60); } });
      }
      if (o.urgencia && boton) { urgencia(o, compra); }
      var sel = function (q) { return q ? document.querySelector(q) : null; };
      if (o.confianza) { confianza(o, sel(o.confianza.ancla) || (boton && boton.parentNode)); }
      if (o.resenas) { resenas(o, sel(o.resenas.ancla)); }
      if (o.contador) { contador(o, sel(o.contador.ancla)); }
      return true;
    });
  }
})();
