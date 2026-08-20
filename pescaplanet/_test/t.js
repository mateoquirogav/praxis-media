/* ============ CLIENTES FELICES (deslizable, imagenes grandes) ============ */
(function () {
  var BASE = "https://mateoquirogav.github.io/praxis-media/pescaplanet/";
  var TITULO = "Clientes felices";
  var SWIPE = "Deslizá";

  var ITEMS = [
    {tipo: "img", src: "cf-01-pipecelesia.jpg", dur: 5000, tag: "Foto",
     kicker: "Primer dorado de la temporada", fish: "Dorado", user: "@pipecelesia"},
    {tipo: "vid", src: "cf-02-tardesdoradas.mp4", poster: "cf-02-tardesdoradas-poster.jpg", dur: 7000, tag: "Video",
     kicker: "“La línea casera dio la nota”", fish: "4 pejerreyes", user: "@tardes_doradas"},
    {tipo: "img", src: "cf-03-matiasrios482.jpg", dur: 5000, tag: "Foto",
     kicker: "Desde la costa del río", fish: "Dorado", user: "@matiasrios482"},
    {tipo: "vid", src: "cf-04-laguna.mp4", poster: "cf-04-laguna-poster.jpg", dur: 8000, tag: "Video",
     kicker: "Pescando el sábado a la tarde", fish: "4 sacamos", user: "Cliente en la laguna"},
    {tipo: "img", src: "cf-05-moreno.jpg", dur: 5000, tag: "Entrega",
     kicker: "Entrega en mano", fish: "Moreno", user: "Coordinado por WhatsApp"}
  ];

  var FLECHA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';

  function ahora() { return new Date().getTime(); }

  function boot() {
    if (document.querySelector('.cfl')) return;

    var p = location.pathname;
    if (!(p === '/' || p === '' || p === '/index')) return;

    var host = document.querySelector('.pps');
    if (!host) {
      var ref = document.querySelector('.js-swiper-featured');
      host = ref ? (ref.closest('section') || ref.closest('.container-fluid')) : null;
    }
    if (!host) return;

    var total = ITEMS.length;
    var slides = '';
    for (var k = 0; k < total; k++) {
      var it = ITEMS[k];
      var media = (it.tipo === 'vid')
        ? '<video src="' + BASE + it.src + '" poster="' + BASE + it.poster + '" muted loop playsinline preload="metadata"></video>'
        : '<img src="' + BASE + it.src + '" alt="" loading="lazy" draggable="false">';
      slides +=
        '<div class="cfl-item" data-dur="' + it.dur + '">' +
          '<div class="cfl-media">' + media + '<span class="cfl-tag">' + it.tag + '</span></div>' +
          '<div class="cfl-body">' +
            '<p class="cfl-kicker">' + it.kicker + '</p>' +
            '<p class="cfl-fish">' + it.fish + '</p>' +
            '<div class="cfl-rule"></div>' +
            '<p class="cfl-user">' + it.user + '</p>' +
          '</div>' +
        '</div>';
    }

    var bars = '';
    for (var b = 0; b < total; b++) { bars += '<span class="cfl-bar"><span class="cfl-fill"></span></span>'; }

    var sec = document.createElement('section');
    sec.className = 'cfl';
    sec.innerHTML =
      '<div class="cfl-in">' +
        '<div class="cfl-head">' +
          '<p class="cfl-ttl">' + TITULO + '</p>' +
          '<span class="cfl-meta">' +
            '<span class="cfl-swipe">' + SWIPE + FLECHA + '</span>' +
            '<span class="cfl-count"><b class="cfl-n">01</b> / ' + (total < 10 ? '0' : '') + total + '</span>' +
          '</span>' +
        '</div>' +
        '<div class="cfl-stage">' + slides + '</div>' +
        '<div class="cfl-bars">' + bars + '</div>' +
      '</div>';

    host.insertAdjacentElement('afterend', sec);

    var stage = sec.querySelector('.cfl-stage');
    var items = sec.querySelectorAll('.cfl-item');
    var fills = sec.querySelectorAll('.cfl-fill');
    var barEls = sec.querySelectorAll('.cfl-bar');
    var num = sec.querySelector('.cfl-n');
    var n = items.length, i = 0;
    var timer = null, sTimer = null, rTimer = null, lock = 0, visible = true;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function dur() { return parseInt(items[i].getAttribute('data-dur'), 10) || 5000; }

    function pintar() {
      for (var k = 0; k < n; k++) {
        var v = items[k].querySelector('video');
        if (v) {
          if (k === i && visible) {
            try { v.currentTime = 0; } catch (e) {}
            var pr = v.play(); if (pr && pr.catch) { pr.catch(function () {}); }
          } else { v.pause(); }
        }
        fills[k].style.transition = 'none';
        fills[k].style.width = (k < i ? '100%' : '0');
      }
      void fills[i].offsetWidth;
      if (!reduce) { fills[i].style.transition = 'width ' + dur() + 'ms linear'; }
      fills[i].style.width = '100%';
      if (num) { num.textContent = (i + 1 < 10 ? '0' : '') + (i + 1); }
    }

    function reloj() {
      clearTimeout(timer);
      if (reduce || !visible) return;
      timer = setTimeout(function () { ir(i + 1); }, dur());
    }

    function ir(x, instante) {
      i = (x + n) % n;
      lock = ahora() + 900;
      var izq = i * stage.clientWidth;
      if (stage.scrollTo) {
        try { stage.scrollTo({left: izq, behavior: instante ? 'auto' : 'smooth'}); }
        catch (e) { stage.scrollLeft = izq; }
      } else { stage.scrollLeft = izq; }
      pintar();
      reloj();
    }

    stage.addEventListener('scroll', function () {
      if (ahora() < lock) return;
      clearTimeout(sTimer);
      sTimer = setTimeout(function () {
        var w = stage.clientWidth || 1;
        var idx = Math.round(stage.scrollLeft / w);
        if (idx < 0) idx = 0;
        if (idx > n - 1) idx = n - 1;
        if (idx !== i) { i = idx; pintar(); }
        reloj();
      }, 140);
    }, {passive: true});

    /* arrastrar con el mouse en escritorio */
    var down = false, x0 = 0, sl0 = 0, moved = false;
    stage.addEventListener('mousedown', function (e) {
      down = true; moved = false; x0 = e.clientX; sl0 = stage.scrollLeft;
      stage.className = 'cfl-stage cfl-grab';
    });
    window.addEventListener('mousemove', function (e) {
      if (!down) return;
      var d = e.clientX - x0;
      if (Math.abs(d) > 3) { moved = true; e.preventDefault(); }
      stage.scrollLeft = sl0 - d;
      lock = ahora() + 400;
    });
    window.addEventListener('mouseup', function () {
      if (!down) return;
      down = false;
      stage.className = 'cfl-stage';
      if (moved) {
        var w = stage.clientWidth || 1;
        ir(Math.round(stage.scrollLeft / w), false);
      }
    });

    for (var q = 0; q < n; q++) {
      (function (idx) {
        barEls[idx].addEventListener('click', function () { ir(idx); });
      })(q);
    }

    window.addEventListener('resize', function () {
      clearTimeout(rTimer);
      rTimer = setTimeout(function () { ir(i, true); }, 180);
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        en.forEach(function (e) {
          visible = e.isIntersecting;
          if (visible) { pintar(); reloj(); }
          else {
            clearTimeout(timer);
            var v = items[i].querySelector('video');
            if (v) { v.pause(); }
          }
        });
      }, {threshold: .15}).observe(sec);
    }

    pintar();
    reloj();
  }

  if (document.readyState === 'complete') { boot(); }
  else { window.addEventListener('load', boot); }
})();

/* ==================== RIFAS (grupo de WhatsApp) ==================== */
(function () {
  var BASE = "https://mateoquirogav.github.io/praxis-media/pescaplanet/";
  var GRUPO = "https://chat.whatsapp.com/IPLuQuB8l0VFXT0K3RoJ0T";

  var EYEBROW = "Grupo de rifas";
  var TITULO = 'Rifamos equipo de pesca <span>todas las semanas</span>.';
  var TEXTO = 'Armamos un grupo de WhatsApp donde hacemos las rifas y avisamos las <b>novedades y ofertas</b> antes que en ningún otro lado. Se juega entre nosotros, de pescador a pescador: cañas, reeles y accesorios de los que probamos en nuestras propias salidas.';
  var CTA = "Unirme al grupo de WhatsApp";
  var NOTA = "El precio del número cambia según la rifa. Todo se coordina adentro del grupo.";

  var DATOS = [
    {n: "100", l: "números por rifa"},
    {n: "5 a 10", l: "premios en cada una"},
    {n: "3 o 4", l: "rifas por semana"}
  ];

  var COL_A = ["pp-rifa-01.jpg", "pp-rifa-03.jpg", "pp-rifa-05.jpg"];
  var COL_B = ["pp-rifa-02.jpg", "pp-rifa-04.jpg", "pp-rifa-06.jpg"];

  var WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 18.15h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.24 8.24c0 4.54-3.7 8.23-8.23 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81s-.39-.12-.56.12-.64.81-.79.98-.29.19-.54.06-1.05-.39-1.99-1.23c-.74-.66-1.24-1.47-1.38-1.72s-.02-.38.11-.5c.11-.11.25-.29.37-.44s.17-.25.25-.41.04-.31-.02-.44-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31s-.87.85-.87 2.07.89 2.4 1.02 2.56 1.76 2.68 4.26 3.76c.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18s.21-1.08.15-1.18-.23-.19-.48-.31"/></svg>';

  function columna(lista, extra) {
    var h = '';
    for (var vuelta = 0; vuelta < 2; vuelta++) {
      for (var k = 0; k < lista.length; k++) {
        h += '<img src="' + BASE + lista[k] + '" alt="" width="520" height="693" loading="lazy" draggable="false">';
      }
    }
    return '<div class="rif-col' + (extra || '') + '"><div class="rif-track">' + h + '</div></div>';
  }

  function montar() {
    if (document.querySelector('.rif')) return true;

    var host = document.querySelector('.pqe');
    if (!host) return false;

    var datos = '';
    for (var k = 0; k < DATOS.length; k++) {
      datos += '<li><b>' + DATOS[k].n + '</b>' + DATOS[k].l + '</li>';
    }

    var sec = document.createElement('section');
    sec.className = 'rif';
    sec.innerHTML =
      '<div class="rif-in">' +
        '<div class="rif-txt">' +
          '<p class="rif-eyebrow">' + EYEBROW + '</p>' +
          '<h2 class="rif-ttl">' + TITULO + '</h2>' +
          '<p class="rif-sub">' + TEXTO + '</p>' +
          '<ul class="rif-datos">' + datos + '</ul>' +
          '<a class="rif-cta" href="' + GRUPO + '" target="_blank" rel="noopener">' + WA_SVG + CTA + '</a>' +
          '<p class="rif-nota">' + NOTA + '</p>' +
        '</div>' +
        '<div class="rif-media">' + columna(COL_A) + columna(COL_B, ' rif-col2') + '</div>' +
      '</div>';

    host.insertAdjacentElement('afterend', sec);
    return true;
  }

  function init() {
    var p = location.pathname;
    if (!(p === '/' || p === '' || p === '/index')) return;
    if (montar()) return;
    var t = 0;
    var iv = setInterval(function () {
      t++;
      if (montar() || t > 50) { clearInterval(iv); }
    }, 200);
  }

  if (document.readyState === 'complete') { init(); }
  else { window.addEventListener('load', init); }
})();
