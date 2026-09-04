/* SKY PORTO - navegador de modelos - v1 03-09-2026 - CSS: bloque "spx" en el CSS avanzado del tema */
(function () {
  /* candado: solo corre en la tienda de Sky Porto (y en pruebas locales) */
  var DOMINIO = /(^|\.)skyporto\.com\.ar$|^localhost$|^127\.0\.0\.1$/;
  if (!DOMINIO.test(location.hostname)) { return; }

  /* ─────────── EDITABLE ─────────── */
  var WA_NUMERO = "5491156606854";
  var CFG = {
    "fundas-para-tu-modelo": {
      t: "f",
      nom: "Fundas",
      q: "funda",
      paso1: "Elegí la marca de tu celular",
      paso2: "Elegí tu modelo de"
    },
    "proteccion-de-pantalla": {
      t: "p",
      nom: "Protección de pantalla",
      q: "protector",
      paso1: "Elegí la marca de tu celular",
      paso2: "Elegí tu modelo de"
    }
  };
  var BANDA = 'El vidrio o el hidrogel <b>te lo colocamos sin cargo</b> en cualquiera de nuestros dos locales de Caballito. Comprás online y pasás a retirarlo puesto.';
  /* ───────── FIN EDITABLE ───────── */

  var MARCAS = [["iphone","iPhone","17 Pro Max|17 Pro|17|16 Plus|16|16e|15 Pro Max|14 Pro Max|14 Plus|13 Pro Max|11 Pro|11","17 Pro Max|17 Pro|17 Air|17|17e|16 Pro Max|16 Pro|16 Plus|16|16e|15 Pro Max|15 Pro|15 Plus|15|14 Pro Max|14 Pro|14 Plus|14|13 Pro Max|13 Pro|13|13 Mini|12 Pro Max|12 Pro|12|12 Mini|11 Pro Max|11 Pro|11|8 Plus|8|7 Plus|7|6 Plus"],["samsung","Samsung","S26 Ultra|S26 Plus|S26|S25 Ultra|S25 Plus|S25|S25 FE|S24 Ultra|S24 Plus|S24|S24 FE|S23 Ultra|S23 Plus|S23|S23 FE|S22 Ultra|S22 Plus|S22|S21 Ultra|S21|S21 FE|S20|S20 FE|A72|A70|A57|A56|A55|A54|A53|A37|A36|A35|A34|A33|A32|A31|A30|A27|A26|A22|A21S|A16|A15|A14|A13|A12|A10|A06|A05|A05S|A04|A03|A02|A02S","A80|A73|A72|A71|A70|A57|A55|A54|A53|A52|A52S|A51|A50|A50S|A41|A40|A35|A34|A33|A32|A31|A30|A30S|A26|A25|A24|A23|A22|A21|A21S|A20|A20S|A16|A15|A14|A13|A12|A11|A10|A10S|A06|A05|A05S|A04|A04S|A03|A03S|A02|A02S|A01|S26 Ultra|S26 Plus|S26|S25 Ultra|S25 Plus|S25|S25 FE|S24 Ultra|S24 Plus|S24Fe|S24|S23 Ultra|S23 Plus|S23|S23 FE|S22 Ultra|S22 Plus|S22|S21 Ultra|S21 Plus|S21|S21 FE|S20 Ultra|S20 Plus|S20|S20 FE|S11 Plus|S11|S10 Plus|S10"],["motorola","Motorola","G86 Power|G86|G85|G84|G77|G75|G67|G57|G56|G55|G35|G34|G30|G24|G22|G20|G17|G15|G14|G06 Power|G06|G04|Edge 70 Pro|Edge 70 Fusion|Edge 70|Edge 60 Pro|Edge 60 Fusion|Edge 60|Edge 50 Fusion|Edge 50|Edge 40 Pro|Edge 40|Edge 40 Neo|Edge 30 Pro|Edge 30 Fusion|Edge 30|Edge 30 Neo|E20|E14|E13","G200|G100|G86 Power|G86|G85|G84|G82|G77|G75|G73|G72|G67 Power|G67|G62|G54|G52|G51|G42|G41|G35|G34|G32|G30|G24 Power|G24|G23|G22|G20|G17|G15 Power|G15|G14|G13|G07|G06 Power|G05|G04|Edge 70 Pro|Edge 70 Fusion|Edge 70|Edge 60 Pro|Edge 60 Fusion|Edge 60|Edge 60 Neo|Edge 50 Pro|Edge 50 Fusion|Edge 50|Edge 50 Neo|Edge 40 Pro|Edge 40 Neo|Edge40|Edge 30 Pro|Edge 30 Fusion|Edge 30|Edge 20 Pro|Edge 20|E40|E32|E22|E13"],["xiaomi","Xiaomi","Note 15|Note 14|Note 14S|Note 13|Note 12|Redmi 15C|Redmi 14C|Redmi 13C|Redmi 12C|Redmi 10|Poco C85|Poco C75|Poco C65|Poco F7|Poco F6|Poco M7|Poco M6|Poco X7","Redmi 15|Redmi 15C|Redmi 14C|Redmi 13|Redmi 13C|Redmi 12C|Redmi 10C|Redmi 9A|Redmi 9C|Redmi 9T|Redmi 7|Note 15|Note 14|Note 14T|Note 13|Note 12|Note 11|Note 11S|Note 8|Poco X7|Poco X6|Poco X5|Poco X4|Poco C85|Poco C75|Poco C65|Poco C55|Redmi Note 13|Redmi Note 9T|Redmi Note 7|Poco F6|Poco F5|Poco F1|Poco M7|Poco M6"],["infinix","Infinix","Hot 60|Hot 60i|Hot 50|Hot 40|Hot 40i|Note 40|Smart 8","Note 40|Note 30|Smart 9|Smart 8|Hot 40"],["huawei","Huawei","Pura 80 Pro|Pura 80|Pura 70|Nova 14 Pro|Nova Y73 4G","Nova 16 Pro|Nova 16 Ultra|Nova 16|Nova 16Z|Nova 15 Max|Nova 14 Pro|Nova 14i|Nova 13 Pro|Nova 13|Nova 13i|Nova 12 Pro|Nova 12 Ultra|Nova 12|Nova 12S|Nova 12i|Nova 12 Lite|Pura 90 Pro|Pura 90|Pura 80 Pro|Pura 80 Ultra|Pura 80|Pura 70 Pro|Pura 70"],["oppo","Oppo / Realme","C75|C67|A40",""],["nubia","Nubia","Focus 5G|Focus Pro 5G","Neo 3|Neo 2|Focus 5G|Focus Pro 5G|Music"]];
  var UNIV = [["hidrogel-antiespia-kit-instalacion-para-huawei-adkcg","huawei","Nova 12 Lite|Nova 12 Ultra|Nova 12 Pro|Nova 12i|Nova 12S|Nova 13|Nova 13 Pro|Nova 13i|Nova 14i|Nova 15 Max|Nova 16|Nova 16 Pro|Nova 16 Ultra|Nova 16Z|Pura 70|Pura 70 Pro|Pura 80|Pura 80 Pro|Pura 80 Ultra|Pura 90|Pura 90 Pro|Nova 14 Pro"],["hidrogel-matte-premiun-kit-instalacion-para-huawei-19bsy","huawei","Nova 12 Lite|Nova 12 Ultra|Nova 12 Pro|Nova 12i|Nova 12S|Nova 13|Nova 13 Pro|Nova 13i|Nova 14i|Nova 15 Max|Nova 16|Nova 16 Pro|Nova 16 Ultra|Nova 16Z|Pura 70|Pura 70 Pro|Pura 80|Pura 80 Pro|Pura 80 Ultra|Pura 90|Pura 90 Pro"],["film-hidrogel-kit-de-instalacion-para-huawei-13v4p","huawei","Pura 80 Ultra|Nova 12|Nova 12 Lite|Nova 12 Pro|Nova 12 Ultra|Nova 12i|Nova 12S|Nova 13|Nova 13 Pro|Nova 13i|Nova 14i|Nova 15 Max|Nova 16|Nova 16 Ultra|Nova 16Z|Pura 80|Pura 80 Pro|Nova 14 Pro"],["funda-transparente-reforzada-premium-para-samsung-linea-s26-1bhay","samsung","S26|S26 Plus|S26 Ultra"],["funda-para-linea-galaxy-s26-ringke-fusion-magnetic-antigolpe-1thzx","samsung","S26|S26 Plus|S26 Ultra"],["film-hidrogel-brilloso-para-samsung-s26-ultra-s26-s26-plus","samsung","S26|S26 Plus|S26 Ultra"],["film-hidrogel-kit-de-instalacion-para-moto-edge-60-pro-edge-60-edge-60-fusion-1oalc","motorola","Edge 60|Edge 60 Fusion|Edge 60 Pro"],["hidrogel-mate-kit-instalacion-para-moto-edge-60-edge-60-fusion-edge-60-pro-1a43p","motorola","Edge 60|Edge 60 Fusion|Edge 60 Pro"],["protector-hidrogel-curvo-transparente-para-linea-motorola-edge-60-edge-60-pro-edge-6o-fusion-12g2g","motorola","Edge 60|Edge 60 Fusion|Edge 60 Pro"],["vidrio-templado-con-colocador-ultra-hd-para-linea-iphone-17-skyporto-caballito-copia-uyr9m","iphone","17|17 Pro|17 Pro Max|17 Air"],["vidrio-templado-con-relieve-premium-para-iphone-skyporto-caballito-pi6rf","iphone","17|17 Pro|17 Air|17e|17 Pro Max|16|16e"],["flim-hidrogel-full-para-nubia-instalacion-sin-cargo-skyporto-caballito-19txp","nubia","Focus 5G|Focus Pro 5G|Neo 2|Neo 3|Music"],["protector-vidrio-templado-ringke-easy-slide-para-linea-samsung-s26-473nz","samsung","S26|S26 Plus|S26 Ultra"],["flim-hidrogel-full-para-samsung-instalacion-sin-cargo","samsung","S10|S10 Plus|S11|S11 Plus|S20|S20 Plus|S20 Ultra|S20 FE|S21|S21 Ultra|S21 Plus|S22 Ultra|S22 Plus|S22|S23|S23 Plus|S23 Ultra|S23 FE|S24|S24 Plus|S24 Ultra|S24Fe|S25|S25 Plus|S25 Ultra|A80|A73|A72|A71|A70|A55|A54|A53|A52S|A51|A52|A01|A02|A02S|A03|A03S|A04|A04S|A05|A06|A10|A10S|A11|A12|A13|A15|A16|A20|A20S|A22|A23|A30|A30S|A31|A32|A33|A34|A40|A41|A50|A50S|S26 Ultra|S26|S26 Plus"],["vidrio-templado-full-glue-pega-al-100-para-samsung","samsung","A01|A22|A30|A13|S20 FE|A10|A10S|A11|A20|A20S|A30S|A31|A40|A41|A50|A71|A51|A12|A02|A21S|A70|S21 FE|A03|A53|A52|A52S|A14|A24|A02S|A54|A33|A23|A34|A05|A05S|A15|A25|A35|S23 FE|A04S|A55|A72|A06|A16|A26|S23|S25 FE"],["film-hidrogel-calidad-hd-para-motorola-todos-los-modelos","motorola","E13|Edge 50 Pro|G24 Power|G24|G34|G30|G20|G100|G54|G84|G14|G73|G23|G200|E32|G41|G42|G51|G52|G82|Edge 30|Edge 30 Pro|G22|E22|G72|E40|Edge40|Edge 40 Neo|Edge 40 Pro|G13|G62|Edge 30 Fusion|Edge 20|Edge 20 Pro|Edge 50 Fusion|Edge 50|G75|G15|G05|G35|Edge 50 Neo|G04|Edge 70|Edge 70 Fusion|Edge 70 Pro|G07|G77|G17|G67|G15 Power|G67 Power|G06 Power|Edge 60 Neo"],["flim-hidrogel-full-para-xiaomi-instalacion-sin-cargo","xiaomi","Redmi Note 7|Note 8|Redmi 9A|Redmi 9C|Redmi 9T|Redmi Note 9T|Redmi 7|Poco X4|Note 11|Note 11S|Note 12|Note 13|Poco X6|Redmi 13C|Poco C65|Redmi 13|Redmi Note 13|Poco M6|Redmi 14C|Note 14|Note 14T|Poco X7|Poco M7|Poco F5|Poco F6|Poco C55|Poco X5|Redmi 15"],["film-hidrogel-calidad-hd-para-motorola-todos-los-modelos-copia","motorola","E13|Edge 50 Pro|G24 Power|G24|G34|G30|G20|G100|G54|G84|G14|G73|G23|G200|E32|G41|G42|G51|G52|G82|Edge 30|Edge 30 Pro|G22|E22|G72|E40|Edge40|Edge 40 Neo|Edge 40 Pro|G13|G62|Edge 30 Fusion|Edge 20|Edge 20 Pro|Edge 50 Fusion|Edge 50|G75|G15|G05|G35|Edge 50 Neo|G04|Edge 70|Edge 70 Fusion|Edge 70 Pro|G07|G77|G17|G67|G15 Power|G67 Power|G06 Power|Edge 60 Neo|G32"],["hidrogel-premium-apto-huellas-para-iphone","iphone","17 Pro Max|17 Pro|17|16 Pro Max|16 Pro|16 Plus|15 Pro Max|15 Pro|15 Plus|15|14 Pro Max|14 Pro|14 Plus|14|13 Pro Max|13 Pro|13|13 Mini|12 Pro Max|12 Pro|12|11 Pro Max|11 Pro|11|8 Plus|8|7 Plus|7"],["flim-hidrogel-matte-full-para-xiaomi-instalacion-sin-cargo-1ho5k","xiaomi","Redmi Note 7|Note 8|Redmi 9A|Redmi 9C|Redmi 9T|Redmi Note 9T|Redmi 7|Poco X4|Note 11|Note 11S|Note 12|Note 13|Poco X6|Redmi 13C|Poco C65|Redmi 13|Redmi Note 13|Poco M6|Redmi 14C|Note 14|Note 14T|Poco X7|Poco M7|Poco F5|Poco F6|Poco C55|Poco X5"],["flim-hidrogel-full-para-samsung-instalacion-sin-cargo-copia","samsung","S10|S10 Plus|S11|S11 Plus|S20|S20 Plus|S20 Ultra|S20 FE|S21|S21 Ultra|S21 Plus|S22 Ultra|S22 Plus|S22|S23|S23 Plus|S23 Ultra|S23 FE|S24|S24 Plus|S24 Ultra|S24Fe|S25|S25 Plus|S25 Ultra|A80|A73|A72|A71|A70|A55|A54|A53|A52S|A51|A52|A01|A02|A02S|A03|A03S|A04|A04S|A05|A06|A10|A10S|A11|A12|A13|A15|A16|A20|A20S|A22|A23|A30|A30S|A31|A32|A33|A34|A40|A41|A50|A50S|S26 Ultra|S26|S26 Plus"],["vidrio-templado-premium-antiespia-para-linea-iphone-17-gnl4j","iphone","17 Pro Max|17|17 Pro|17 Air"],["hidrogel-antiespia-para-linea-samsung-s26-s26-plus-s26-ultra-privacidad-total-svpro","samsung","S26|S26 Plus|S26 Ultra"],["film-hidrogel-matte-para-samsung-s26-ultra-s26-plus-s26-oowml","samsung","S26|S26 Plus|S26 Ultra"],["film-hidrogel-curvo-brilloso-para-samsung-s26-ultra-s26-s26-plus-7xabp","samsung","S26|S26 Plus|S26 Ultra"],["hidrogel-matte-antiespia-kit-de-instalacion-para-iphone","iphone","17 Pro Max|17 Pro|17 Air|17|16 Pro Max|16 Plus|16|15 Pro Max|15 Pro|15 Plus|15|14|14 Pro|14 Plus|13 Pro Max|13 Pro|13 Mini|13|12 Pro Max|12 Pro|12|11 Pro Max|11 Pro|11|8 Plus|8|7 Plus|7"],["film-hidrogel-calidad-hd-para-iphone-todos-los-modelos-1slmr","iphone","17 Pro Max|17 Pro|17|17 Air|16 Pro Max|16 Pro|16 Plus|15 Pro Max|15 Pro|15|14 Pro Max|14 Pro|14 Plus|14|13 Pro Max|13 Pro|13 Mini|13|12 Pro Max|12 Pro|12 Mini|12|11 Pro Max|11 Pro|11|8 Plus|8|7 Plus|7"],["hidrogel-premium-apto-huellas-para-infinix-1jdjt","infinix","Hot 40|Note 40|Note 30|Smart 8|Smart 9"],["hidrogel-matte-antiespia-kit-de-instalacion-para-infinix-1g6kf","infinix","Hot 40|Note 40|Note 30|Smart 8|Smart 9"],["film-hidrogel-full-para-infinix-instalacion-1m6f3","infinix","Hot 40|Note 40|Note 30|Smart 8|Smart 9"],["film-hidrogel-matte-kit-instalacion-para-infinix-vttv3","infinix","Hot 40|Note 40|Note 30|Smart 8|Smart 9"],["hidrogel-matte-antiespia-para-samsung","samsung","S10|S10 Plus|S11|S11 Plus|S20|S20 Plus|S20 Ultra|S20 FE|S21|S21 Ultra|S21 Plus|S22 Ultra|S22 Plus|S22|S23|S23 Plus|S23 Ultra|S23 FE|S24|S24 Plus|S24 Ultra|S24Fe|S25|S25 Plus|S25 Ultra|S26|S26 Plus|S26 Ultra"],["flim-hidrogel-premium-reforzado-para-samsung-instalacion-sin-cargo","samsung","S10|S10 Plus|S11|S11 Plus|S20|S20 Plus|S20 Ultra|S20 FE|S21|S21 Ultra|S21 Plus|S22 Ultra|S22 Plus|S22|S23|S23 Plus|S23 Ultra|S23 FE|S24|S24 Plus|S24 Ultra|S24Fe|S25|S25 Plus|S25 Ultra|S26 Ultra|S26|S26 Plus"],["hidrogel-mate-antiespia-para-samsung-elegi-modelo-linea-a","samsung","A03|A03S|A04|A04S|A05|A05S|A06|A10|A10S|A20|A20S|A21|A21S|A22|A23|A24|A25|A30|A30S|A31|A32|A33|A34|A35|A50|A50S|A51|A52|A52S|A53|A54|A55|A70|A71|A72|A73|A16"],["vidrio-templado-9h-para-iphone-16-todos-los-modelos-pro-plus","iphone","16 Plus|16 Pro Max|16 Pro|16"],["film-hidrogel-matte-antiespia-para-iphone-todos-los-modelos","iphone","11|14|13 Pro Max|13 Pro|12 Mini|14 Pro Max|13 Mini|11 Pro|11 Pro Max|8|8 Plus|7 Plus|7|12|6 Plus|15|15 Plus|15 Pro|15 Pro Max|16|16 Plus|16 Pro|16 Pro Max|17|17 Pro|17 Pro Max"],["flim-hidrogel-matte-kit-instalacion-para-samsung-linea-a","samsung","A01|A02S|A03S|A10S|A11|A20S|A20|A30|A40|A50S|A70|A80|A03|A22|A41|A23|A53|A73|A33|A02|A10|A12|A30S|A50|A51|A52S|A52|A71|A72|A31|A32|A04S|A04|A54|A34|A13|A15|A05|A06|A16|A55"],["vidrio-templado-5d-9d-11d-full-cover-todo-para-xiaomi","xiaomi","Redmi 9C|Poco F1|Note 11|Note 12|Redmi 10C|Redmi 13|Redmi 12C|Note 13|Poco X6|Poco C75|Redmi 14C|Note 14|Redmi 9T|Redmi 15C|Poco C85"]];
  var RX = {"iphone":"iphone\\s*(\\d{1,2}\\s*pro\\s*max|\\d{1,2}\\s*pro|\\d{1,2}\\s*plus|\\d{1,2}\\s*mini|\\d{1,2}\\s*air|\\d{1,2}\\s*e|\\d{1,2})","samsung":"\\b((?:galaxy\\s*)?s\\d{2}\\s*(?:ultra|plus|fe)|(?:galaxy\\s*)?[as]\\d{2,3}s?)\\b","motorola":"\\b(edge\\s*\\d{2}(?:\\s*fusion|\\s*pro|\\s*neo)?|g\\d{2,3}(?:\\s*power|\\s*play|\\s*plus)?|e\\d{2})\\b","xiaomi":"\\b(redmi\\s*(?:note\\s*)?\\d{1,2}\\w?|poco\\s*\\w\\d+|note\\s*\\d{1,2}\\w?)\\b","infinix":"\\b(hot\\s*\\d{1,2}\\w*|smart\\s*\\d{1,2}|note\\s*\\d{1,2}\\w*)\\b","huawei":"\\b(nova\\s*\\w+\\s*\\w*|pura\\s*\\d{2}\\s*\\w*|y\\d{1,2}\\w?|p\\d{2}\\s*\\w*|mate\\s*\\d{2})\\b","oppo":"\\b(reno\\s*\\d{1,2}\\w*|c\\d{2}|a\\d{2,3})\\b","nubia":"\\b(focus\\s*(?:pro\\s*)?(?:5g)?|neo\\s*\\d|music\\s*\\d?|v\\d{2}\\w*)\\b"};

  var ESCUDO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.2 19 6v5.4c0 4.2-2.8 7.6-7 9.4-4.2-1.8-7-5.2-7-9.4V6l7-2.8Z"></path><path d="m9.2 12 2 2 3.6-3.8"></path></svg>';

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function buscarMarca(id) {
    for (var i = 0; i < MARCAS.length; i++) {
      if (MARCAS[i][0] === id) { return MARCAS[i]; }
    }
    return null;
  }

  function listaModelos(marca, tipo) {
    var crudo = tipo === "p" ? marca[3] : marca[2];
    return crudo ? crudo.split("|") : [];
  }

  /* ── el motor: qué modelos nombra un texto ── */
  function modelosDe(marcaId, txt) {
    if (!RX[marcaId]) { return []; }
    var rx = new RegExp(RX[marcaId], "gi"), out = [], m, k;
    while ((m = rx.exec(txt)) !== null) {
      k = m[1].replace(/\s+/g, " ").replace(/^ +| +$/g, "").toLowerCase();
      k = k.replace(/^galaxy /, "");
      if (k && out.indexOf(k) < 0) { out.push(k); }
      if (rx.lastIndex === m.index) { rx.lastIndex++; }
    }
    return out;
  }

  function calza(nombre, marcaId, modelo) {
    var m = String(modelo).replace(/\s+/g, " ").replace(/^ +| +$/g, "").toLowerCase();
    var mods = modelosDe(marcaId, nombre), i;
    if (mods.indexOf(m) >= 0) { return true; }
    /* "Para la línea S26" cubre S26, S26 Plus y S26 Ultra */
    if (/l[ií]nea/i.test(nombre)) {
      var base = m.split(" ")[0];
      for (i = 0; i < mods.length; i++) {
        if (mods[i].split(" ")[0] === base) { return true; }
      }
    }
    return false;
  }

  /* ── los universales llevan el modelo adentro de la variante ── */
  function universalCubre(href, marcaId, modelo) {
    var m = String(modelo).toLowerCase(), i, lista;
    for (i = 0; i < UNIV.length; i++) {
      if (UNIV[i][1] !== marcaId) { continue; }
      if (href.indexOf("/" + UNIV[i][0]) < 0) { continue; }
      lista = UNIV[i][2].toLowerCase().split("|");
      if (lista.indexOf(m) >= 0) { return true; }
    }
    return false;
  }

  function esProtector(n) {
    return /(hidrogel|film|flim|templado|vidrio|9h|glass|protector)/i.test(n);
  }
  function esFunda(n) {
    return /(funda|case|carcasa)/i.test(n);
  }

  function urlModelo(cfg, marca, modelo) {
    var q = cfg.q + " " + marca[1].split(" /")[0] + " " + modelo;
    return "/search/?q=" + encodeURIComponent(q) +
           "&sp=" + encodeURIComponent(cfg.t + "|" + marca[0] + "|" + modelo);
  }

  /* sube hasta el contenedor del tema sin pasarse de body */
  function cajaDe(el) {
    var n = el.parentNode;
    while (n && n.nodeType === 1 && n !== document.body) {
      if (typeof n.className === "string" && n.className.indexOf("container") >= 0) { return n; }
      n = n.parentNode;
    }
    return el;
  }

  function limpiarRestos() {
    var v = document.querySelectorAll(".spx");
    for (var i = 0; i < v.length; i++) { v[i].parentNode.removeChild(v[i]); }
  }

  /* ══════════ 1 · en la página de categoría ══════════ */
  function montarCategoria(cfg) {
    var cab = document.querySelector('section.page-header[data-store="page-title"]');
    if (!cab) { return; }
    var caja = cajaDe(cab);

    var util = [], i, mods;
    for (i = 0; i < MARCAS.length; i++) {
      mods = listaModelos(MARCAS[i], cfg.t);
      if (mods.length) { util.push([MARCAS[i], mods]); }
    }
    if (!util.length) { return; }

    var htmlMarcas = "";
    for (i = 0; i < util.length; i++) {
      htmlMarcas += '<button type="button" class="spx-marca" data-spx-marca="' + util[i][0][0] + '">' +
        "<b>" + esc(util[i][0][1]) + "</b><i>" + util[i][1].length + " modelos</i></button>";
    }

    var sec = document.createElement("section");
    sec.className = "spx";
    sec.innerHTML =
      '<div class="spx-wrap">' +
        '<div class="spx-paso"><span class="spx-n">1</span>' + esc(cfg.paso1) + "</div>" +
        '<div class="spx-marcas">' + htmlMarcas + "</div>" +
        '<div class="spx-modelos" style="display:none"></div>' +
        '<div class="spx-banda">' + ESCUDO + "<div>" + BANDA + "</div></div>" +
      "</div>";
    caja.parentNode.insertBefore(sec, caja.nextSibling);

    var cajaMod = sec.querySelector(".spx-modelos");

    function pintar(id, mover) {
      var marca = buscarMarca(id);
      if (!marca) { return; }
      var mods = listaModelos(marca, cfg.t), j, chips = "";
      var botones = sec.querySelectorAll(".spx-marca");
      for (j = 0; j < botones.length; j++) {
        botones[j].className = botones[j].getAttribute("data-spx-marca") === id ? "spx-marca is-on" : "spx-marca";
      }
      for (j = 0; j < mods.length; j++) {
        chips += '<a class="spx-chip" href="' + esc(urlModelo(cfg, marca, mods[j])) + '">' + esc(mods[j]) + "</a>";
      }
      cajaMod.innerHTML =
        '<div class="spx-paso"><span class="spx-n">2</span>' + esc(cfg.paso2) + " <b>" + esc(marca[1]) + "</b></div>" +
        (chips ? '<div class="spx-chips">' + chips + "</div>"
               : '<p class="spx-vacio">Todavía no tenemos cargados modelos de esta marca. Escribinos y te lo conseguimos.</p>');
      cajaMod.style.display = "block";
      try { window.localStorage.setItem("spx-marca", id); } catch (e) {}
      if (mover && cajaMod.scrollIntoView) {
        cajaMod.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    sec.addEventListener("click", function (ev) {
      var b = ev.target;
      while (b && b !== sec && !b.getAttribute("data-spx-marca")) { b = b.parentNode; }
      if (b && b !== sec) { pintar(b.getAttribute("data-spx-marca"), true); }
    });

    var guardada = null;
    try { guardada = window.localStorage.getItem("spx-marca"); } catch (e) {}
    if (guardada && buscarMarca(guardada) && listaModelos(buscarMarca(guardada), cfg.t).length) {
      pintar(guardada, false);
    }
  }

  /* ══════════ 2 · en los resultados del buscador ══════════ */
  function filtrarBusqueda() {
    var sp = (location.search.match(/[?&]sp=([^&]+)/) || [])[1];
    if (!sp) { return; }
    var partes = decodeURIComponent(sp).split("|");
    if (partes.length < 3) { return; }
    var tipo = partes[0], marcaId = partes[1], modelo = partes[2];
    var marca = buscarMarca(marcaId);
    if (!marca) { return; }

    var grilla = document.querySelector(".js-product-table");

    function pasar() {
      if (!grilla) { return 0; }
      var items = grilla.querySelectorAll(".js-item-product"), vivos = 0, i, it, nom, href, ok;
      for (i = 0; i < items.length; i++) {
        it = items[i];
        nom = it.querySelector(".js-item-name");
        nom = nom ? nom.textContent : "";
        href = "";
        var a = it.querySelector("a[href]");
        if (a) { href = a.getAttribute("href") || ""; }
        ok = calza(nom, marcaId, modelo) || universalCubre(href, marcaId, modelo);
        if (ok) { ok = tipo === "p" ? esProtector(nom) : esFunda(nom); }
        if (ok) { it.className = it.className.replace(/ ?spx-off/g, ""); vivos++; }
        else if (it.className.indexOf("spx-off") < 0) { it.className += " spx-off"; }
      }
      return vivos;
    }

    var vivos = pasar();
    var cat = tipo === "p" ? "/proteccion-de-pantalla/" : "/fundas-para-tu-modelo/";
    var titulo = (tipo === "p" ? "Protección de pantalla para " : "Fundas para ") +
                 marca[1].split(" /")[0] + " " + modelo;
    var bajada = vivos === 1 ? "1 producto entra en tu equipo"
                             : vivos + " productos entran en tu equipo";
    var extra = "";
    if (!vivos) {
      bajada = "Todavía no tenemos este modelo cargado. Escribinos y te lo conseguimos.";
      extra = '<a class="spx-wa" target="_blank" rel="noopener" href="https://wa.me/' + WA_NUMERO +
              "?text=" + encodeURIComponent("Hola, busco " + titulo.toLowerCase()) + '">Consultar por WhatsApp</a>';
    }

    var cabecera = document.createElement("section");
    cabecera.className = "spx";
    cabecera.innerHTML =
      '<div class="spx-wrap"><div class="spx-res">' +
        '<div class="spx-res-txt"><b>' + esc(titulo) + "</b><span>" + esc(bajada) + "</span></div>" +
        extra +
        '<a class="spx-volver" href="' + cat + '">Cambiar de modelo</a>' +
      "</div></div>";
    if (grilla) {
      grilla.parentNode.insertBefore(cabecera, grilla);
    } else {
      /* búsqueda sin ningún resultado: el tema no dibuja la grilla */
      var cab = document.querySelector('section.page-header[data-store="page-title"]');
      if (!cab) { return; }
      var caja = cajaDe(cab);
      caja.parentNode.insertBefore(cabecera, caja.nextSibling);
    }

    if (grilla && window.MutationObserver) {
      var obs = new MutationObserver(function () { pasar(); });
      obs.observe(grilla, { childList: true });
    }
  }

  /* ══════════ ficha de producto: sale de la columna y se centra ══════════
     La ficha del CSV usa @container, o sea que mide EL CONTENEDOR, no la
     pantalla. El tema la mete en una columna de ~370 px al costado de la
     galería, así que en un monitor de 1425 se dibuja como si fuera un
     celular. Acá se la saca de la columna y se le da el ancho de la página,
     con un tope centrado: el diseño de PC que ya trae adentro se enciende
     solo. Se mide con JS porque calc(50% - 50vw) toma el 50% DE LA COLUMNA
     y el bloque queda corrido.                                              */
  var FICHA_TOPE = 1180;   /* ancho del contenido en PC. La única perilla. */
  var FICHA_MIN  = 900;    /* abajo de esto no se toca: ya ocupa todo */

  function anchoFicha() {
    var doc = document.documentElement.clientWidth;
    var ks = document.querySelectorAll(".k");
    var i, k, r, lat;
    for (i = 0; i < ks.length; i++) {
      k = ks[i];
      if (k.offsetParent === null) { continue; }      /* la copia oculta no */
      k.style.width = "auto";
      k.style.marginLeft = "0";
      k.style.paddingLeft = k.style.paddingRight = "0";
      if (doc < FICHA_MIN) { continue; }
      r = k.getBoundingClientRect();
      lat = Math.max(20, Math.round((doc - FICHA_TOPE) / 2));
      k.style.position = "relative";
      k.style.width = doc + "px";
      k.style.marginLeft = (-r.left) + "px";
      k.style.paddingLeft = k.style.paddingRight = lat + "px";
    }
  }

  function montarFicha() {
    if (!document.querySelector(".k")) { return; }
    anchoFicha();
    setTimeout(anchoFicha, 1500);        /* por si el tema mueve algo al cargar */
    var t = null;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(anchoFicha, 150);
    });
  }

  /* ══════════ arranque ══════════ */
  function arrancar() {
    limpiarRestos();
    var cls = document.body.className;
    if (/template-product/.test(cls)) { montarFicha(); return; }
    if (/template-search/.test(cls)) { filtrarBusqueda(); return; }
    if (!/template-category/.test(cls)) { return; }
    var ruta = location.pathname, k;
    for (k in CFG) {
      if (CFG.hasOwnProperty(k) && ruta.indexOf("/" + k + "/") >= 0) {
        montarCategoria(CFG[k]);
        return;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();
