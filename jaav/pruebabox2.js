
(function(){
  if(window.JAAV_BOXER_LANDING_MOUNTED) return;
  window.JAAV_BOXER_LANDING_MOUNTED = true;

  var JAAV = {
    heroGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2xqbWttMHdzNGlhNGRuOGoyb202aW5vcnlucXZrcm1jaG5zbzlkbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dvnHIGgphZ1VVQSSi9/giphy.gif",
    benefitImage: "https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/jaav/box-benef.jpg",
    tabs: {
      posando:   { gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3g4OWwwMTMxa2I5ZDAybXo4c29uenFqaGVkc3M2ZjF2bjJwamEwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Bfa5V1UekqVvuL7IOb/giphy.gif", titulo: "Se ve bien puesto", texto: "Moldería pensada para que se vea y se sienta bien en el cuerpo real." },
      sentado:   { gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VoMzhzdnZuM2F3NzBmdDNsZjF0aDVrajR2eTRtdHl0eTg1dTJnaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dZ4Z8NqWgMs02f4uTI/giphy.gif", titulo: "No aprieta", texto: "Elástico firme, cómodo y con buen rebote. Sostiene sin marcar de más." },
      caminando: { gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3hrNTM2Zm92czB1aDd5M2s5Z3ZqeGl4enl0Z3owZDcxeGYxNTU3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CWnim1YeJyI6qXLCpa/giphy.gif", titulo: "No se sube", texto: "Calce pensado para acompañar el día sin que tengas que acomodarlo a cada rato." }
    },
    testimonios: [
      "https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/jaav/box-t1.jpg",
      "https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/jaav/box-t2.jpg",
      "https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/jaav/box-t3.jpg",
      "https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/jaav/box-t4.jpg",
      "https://cdn.jsdelivr.net/gh/mateoquirogav/praxis-media@main/jaav/box-t5.jpg"
    ]
  };

  function injectCSS(){
    if(document.getElementById("jaav-v3-css")) return;
    var css = `

      

      /* ── WRAPPER FIRST MOBILE ── */
      #jaavLanding {
        display:block!important;
        background:#050505!important;
        color:#f7f7f7!important;
        font-family:"DM Sans",Arial,sans-serif!important;
        overflow-x:hidden!important;
        overflow-y:visible!important;
        padding-bottom:110px!important;
        max-width:1180px!important;
        margin:0 auto!important;
        position:relative!important;
        width:100%!important;
        box-sizing:border-box!important;
      }
      #jaavLanding *{box-sizing:border-box!important}
      #jaavLanding img{max-width:100%!important;display:block!important}
      #jaavLanding button{font-family:inherit!important;-webkit-appearance:none!important}

      .jv-section{padding:38px 16px!important;border-top:1px solid rgba(255,255,255,.08)!important}

      /* TIPOGRAFÍA */
      .jv-kicker{font-size:10px!important;font-weight:900!important;letter-spacing:.20em!important;text-transform:uppercase!important;color:#9a9a9a!important;margin:0 0 10px!important;text-align:center!important;display:block!important}
      .jv-title{font-size:34px!important;line-height:.94!important;font-weight:950!important;text-transform:uppercase!important;margin:0 0 12px!important;color:#fff!important;text-align:center!important;letter-spacing:-.04em!important;display:block!important}
      .jv-text{font-size:14px!important;line-height:1.62!important;color:#b0b0b0!important;margin:0 auto!important;text-align:center!important;display:block!important}

      /* ── HERO ── */
      .jv-hero{padding:26px 16px 0!important;display:block!important}
      .jv-hero .jv-kicker,.jv-hero .jv-title,.jv-hero .jv-text{text-align:left!important}
      .jv-rating{display:flex!important;align-items:center!important;gap:8px!important;margin:10px 0!important;font-size:13px!important;color:#e8e8e8!important;flex-wrap:wrap!important}
      .jv-stars{color:#f6b800!important;letter-spacing:1px!important}

      /* ── BENEFICIOS EN IMAGEN ANCHA ── */
      .jv-benefits-image{
        width:100%!important;
        margin:18px 0!important;
        border-radius:18px!important;
        overflow:hidden!important;
        border:1px solid rgba(255,255,255,.10)!important;
        background:#0d0d0d!important;
        box-shadow:0 12px 28px rgba(0,0,0,.28)!important;
      }
      .jv-benefits-image img{
        width:100%!important;
        height:auto!important;
        display:block!important;
        object-fit:cover!important;
      }

      /* ── PILLS ── */
      .jv-pills{display:flex!important;gap:7px!important;flex-wrap:wrap!important;margin:12px 0!important}
      .jv-pill{display:inline-flex!important;align-items:center!important;gap:5px!important;background:#111!important;border:1px solid rgba(255,255,255,.12)!important;color:#fff!important;border-radius:999px!important;padding:8px 11px!important;font-size:11px!important;font-weight:800!important}
      .jv-transfer{background:linear-gradient(135deg,#16a34a,#15803d)!important;border:none!important;color:#fff!important;animation:jvPulse 2s ease-in-out infinite!important}
      @keyframes jvPulse{0%,100%{box-shadow:0 0 0 0 rgba(22,163,74,.45)}70%{box-shadow:0 0 0 10px rgba(22,163,74,0)}}

      /* ── BOTÓN VERDE CTA ── */
      .jv-btn{
        display:flex!important;align-items:center!important;justify-content:center!important;
        width:100%!important;border:0!important;outline:0!important;
        border-radius:14px!important;
        background:linear-gradient(135deg,#4ade80,#22c55e)!important;
        color:#052e16!important;
        font-size:15px!important;font-weight:950!important;text-transform:uppercase!important;
        padding:16px 20px!important;cursor:pointer!important;
        text-decoration:none!important;letter-spacing:.05em!important;
        box-shadow:0 12px 28px rgba(74,222,128,.26)!important;
        transition:transform .2s, box-shadow .2s!important;
        -webkit-tap-highlight-color:transparent!important;
      }
      .jv-btn:active{transform:scale(.98)!important}

      /* ── HERO VIDEO ── */
      .jv-hero-video{position:relative!important;border-radius:22px!important;overflow:hidden!important;border:1px solid rgba(255,255,255,.11)!important;margin-top:20px!important;background:#101010!important}
      .jv-hero-video img{width:100%!important;height:480px!important;object-fit:cover!important;display:block!important}
      .jv-video-label{position:absolute!important;left:13px!important;right:13px!important;bottom:13px!important;background:rgba(0,0,0,.62)!important;backdrop-filter:blur(10px)!important;-webkit-backdrop-filter:blur(10px)!important;border:1px solid rgba(255,255,255,.10)!important;border-radius:14px!important;padding:12px!important;color:#fff!important}
      .jv-video-label strong{display:block!important;font-size:13px!important;margin-bottom:2px!important}
      .jv-video-label span{font-size:11px!important;color:#cfcfcf!important}

      /* ── TRUST ── */
      .jv-trust{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;padding:18px 16px 0!important}
      .jv-trust-item{background:#0d0d0d!important;border:1px solid rgba(255,255,255,.08)!important;border-radius:13px!important;padding:12px 10px!important;display:flex!important;align-items:center!important;gap:8px!important;color:#cfcfcf!important;font-size:11px!important}
      .jv-trust-item svg{width:18px!important;height:18px!important;flex-shrink:0!important;color:#fff!important}
      .jv-trust-item strong{display:block!important;color:#fff!important;font-size:12px!important;margin-bottom:1px!important}

      /* ── PROBLEMAS ── */
      .jv-problems{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;margin-top:16px!important}
      .jv-problem{background:#111!important;border:1px solid rgba(255,255,255,.08)!important;border-radius:15px!important;padding:14px 12px!important}
      .jv-problem span{font-size:20px!important;display:block!important;margin-bottom:7px!important;color:#ef4444!important;font-weight:900!important}
      .jv-problem strong{font-size:12px!important;color:#fff!important;display:block!important;line-height:1.25!important;margin-bottom:4px!important}
      .jv-problem p{font-size:11px!important;color:#888!important;margin:0!important;line-height:1.45!important}
      .jv-alert{margin:16px 0 0!important;background:#fff!important;color:#050505!important;border-radius:14px!important;padding:15px!important;text-align:center!important;font-weight:950!important;font-size:15px!important;line-height:1.3!important}

      /* ── TABS ACCIÓN ── */
      .jv-tabs{display:flex!important;background:#111!important;border:1px solid rgba(255,255,255,.10)!important;border-radius:14px!important;padding:4px!important;gap:4px!important;margin:16px 0!important}
      .jv-tab{flex:1!important;border:0!important;outline:0!important;background:transparent!important;border-radius:11px!important;padding:11px 4px!important;font-weight:900!important;cursor:pointer!important;color:#777!important;font-size:11px!important;text-transform:uppercase!important;transition:.2s!important;letter-spacing:.03em!important;-webkit-tap-highlight-color:transparent!important}
      .jv-tab.active{background:#fff!important;color:#050505!important;box-shadow:0 5px 15px rgba(255,255,255,.10)!important}
      .jv-demo{border-radius:18px!important;overflow:hidden!important;border:1px solid rgba(255,255,255,.09)!important;background:#0d0d0d!important}
      .jv-demo img{width:100%!important;height:440px!important;object-fit:cover!important;display:block!important}
      .jv-demo-caption{padding:15px!important}
      .jv-demo-caption h3{font-size:26px!important;font-weight:950!important;color:#fff!important;margin:0 0 5px!important;letter-spacing:-.03em!important}
      .jv-demo-caption p{font-size:13px!important;color:#9a9a9a!important;margin:0!important;line-height:1.5!important}

      /* ── FEATURES ── */
      .jv-features{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;margin-top:16px!important}
      .jv-feature{background:#fff!important;border-radius:16px!important;padding:15px!important}
      .jv-feature strong{display:block!important;font-size:13px!important;font-weight:950!important;margin-bottom:5px!important;color:#111!important}
      .jv-feature p{font-size:11px!important;color:#555!important;margin:0!important;line-height:1.45!important}

      /* ── COMPARATIVA ── */
      .jv-compare{background:#fff!important;border-radius:20px!important;padding:20px!important}
      .jv-compare .jv-kicker,.jv-compare .jv-title{color:#111!important}
      .jv-row{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;padding:11px 0!important;border-bottom:1px solid rgba(0,0,0,.09)!important;font-size:12px!important;align-items:center!important}
      .jv-row:first-child{font-size:10px!important;font-weight:950!important;color:#888!important;text-transform:uppercase!important;letter-spacing:.10em!important}
      .jv-no{color:#aaa!important;text-decoration:line-through!important}
      .jv-yes{color:#111!important;font-weight:950!important}
      .jv-yes::before{content:"✓ "!important}

      /* ── PACK ── */
      .jv-pack-final{background:linear-gradient(180deg,#141414,#0a0a0a)!important;border-radius:22px!important;padding:22px!important;text-align:center!important;border:1px solid rgba(255,255,255,.09)!important}
      .jv-pack-final .jv-kicker,.jv-pack-final .jv-title,.jv-pack-final .jv-text{color:#fff!important}
      .jv-pack-box{background:#111!important;border:1px solid rgba(255,255,255,.11)!important;border-radius:18px!important;padding:16px!important;margin:14px 0!important}
      .jv-pack-box h3{font-size:20px!important;font-weight:950!important;color:#fff!important;text-transform:uppercase!important;letter-spacing:-.03em!important;margin:0 0 5px!important}
      .jv-pack-box p{font-size:12px!important;color:#888!important;margin:0 0 12px!important}
      .jv-pack-includes{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:7px!important}
      .jv-pack-item{background:#1a1a1a!important;border:1px solid rgba(255,255,255,.09)!important;border-radius:13px!important;padding:12px 7px!important;text-align:center!important}
      .jv-pack-color{display:block!important;font-size:10px!important;color:#aaa!important;text-transform:uppercase!important;letter-spacing:.12em!important;font-weight:950!important;margin-bottom:6px!important}
      .jv-pack-item strong{display:block!important;font-size:24px!important;font-weight:950!important;color:#fff!important;margin-bottom:3px!important}
      .jv-pack-item small{font-size:9px!important;color:#777!important;text-transform:uppercase!important;letter-spacing:.06em!important;font-weight:800!important}

      /* ── CARRUSEL ── */
      .jv-carousel-shell{position:relative!important;margin-top:16px!important}
      .jv-carousel{display:flex!important;gap:10px!important;overflow-x:auto!important;scroll-snap-type:x mandatory!important;padding:4px 2px 14px!important;-webkit-overflow-scrolling:touch!important;scroll-behavior:smooth!important}
      .jv-carousel::-webkit-scrollbar{display:none!important}
      .jv-test{min-width:84%!important;scroll-snap-align:center!important;border-radius:16px!important;overflow:hidden!important;border:1px solid rgba(255,255,255,.09)!important;flex-shrink:0!important}
      .jv-test img{width:100%!important;height:400px!important;object-fit:cover!important;display:block!important}
      .jv-arrow{position:absolute!important;top:45%!important;transform:translateY(-50%)!important;width:34px!important;height:34px!important;border-radius:50%!important;border:1px solid rgba(255,255,255,.14)!important;background:#fff!important;color:#111!important;z-index:3!important;display:flex!important;align-items:center!important;justify-content:center!important;box-shadow:0 6px 18px rgba(0,0,0,.3)!important;cursor:pointer!important;font-size:20px!important;font-weight:900!important;line-height:1!important;outline:0!important;-webkit-tap-highlight-color:transparent!important}
      .jv-arrow.left{left:2px!important}.jv-arrow.right{right:2px!important}

      /* ── FAQ ── */
      .jv-faq details{border:1px solid rgba(255,255,255,.10)!important;border-radius:14px!important;margin-bottom:7px!important;background:#0e0e0e!important;overflow:hidden!important}
      .jv-faq summary{font-weight:900!important;cursor:pointer!important;color:#fff!important;padding:15px!important;display:flex!important;align-items:center!important;gap:9px!important;list-style:none!important;font-size:13px!important;-webkit-tap-highlight-color:transparent!important}
      .jv-faq summary::-webkit-details-marker{display:none!important}
      .jv-faq summary::before{content:"?"!important;width:22px!important;height:22px!important;border-radius:50%!important;background:#fff!important;color:#050505!important;display:flex!important;align-items:center!important;justify-content:center!important;font-weight:950!important;flex:0 0 22px!important;font-size:11px!important}
      .jv-faq summary::after{content:"+"!important;margin-left:auto!important;color:#fff!important;font-size:20px!important;font-weight:300!important}
      .jv-faq details[open] summary::after{content:"−"!important}
      .jv-faq p{font-size:13px!important;line-height:1.55!important;color:#9a9a9a!important;margin:0!important;padding:0 15px 15px 46px!important}

      /* ── STICKY ── */
      .jv-sticky{
        position:fixed!important;
        left:50%!important;transform:translateX(-50%)!important;
        bottom:8px!important;z-index:99999!important;
        background:#fff!important;border:1px solid #e0e0e0!important;border-radius:16px!important;
        box-shadow:0 8px 32px rgba(0,0,0,.22)!important;padding:9px!important;
        display:flex!important;align-items:center!important;gap:9px!important;
        width:calc(100vw - 24px)!important;max-width:450px!important;
      }
      .jv-sticky img{width:46px!important;height:46px!important;object-fit:cover!important;border-radius:9px!important;flex-shrink:0!important}
      .jv-sticky-info{flex:1!important;min-width:0!important}
      .jv-sticky-info strong{display:block!important;font-size:12px!important;color:#111!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
      .jv-sticky-info span{font-size:10px!important;color:#666!important}
      .jv-sticky .jv-btn{width:auto!important;font-size:11px!important;padding:12px 14px!important;flex-shrink:0!important;white-space:nowrap!important;border-radius:11px!important}

      .jv-auth{padding:26px 16px!important}
      .jv-auth-grid{display:grid!important;grid-template-columns:repeat(3,1fr)!important}
      .jv-auth-item{text-align:center!important;padding:0 8px!important;border-right:1px solid rgba(255,255,255,.14)!important}
      .jv-auth-item:last-child{border-right:0!important}
      .jv-auth-item strong{display:block!important;color:#fff!important;font-size:22px!important;font-weight:950!important;line-height:1!important;letter-spacing:-.03em!important}
      .jv-auth-item span{display:block!important;margin-top:6px!important;color:#8a8a8a!important;font-size:9px!important;line-height:1.3!important;letter-spacing:.08em!important;text-transform:uppercase!important}

      @media(min-width:820px){
        #jaavLanding .jv-hero{display:grid!important;grid-template-columns:1fr 1fr!important;gap:34px!important;align-items:center!important;padding:38px 24px 0!important}
        #jaavLanding .jv-hero-video{margin-top:0!important;grid-column:2!important;grid-row:span 6!important}
        #jaavLanding .jv-hero-video img{height:600px!important}
        #jaavLanding .jv-trust{grid-template-columns:repeat(4,1fr)!important;padding:22px 24px 0!important}
        #jaavLanding .jv-problems{grid-template-columns:repeat(4,1fr)!important}
        #jaavLanding .jv-features{grid-template-columns:repeat(4,1fr)!important}
        #jaavLanding .jv-section{padding:54px 24px!important}
        #jaavLanding .jv-title{font-size:42px!important}
        #jaavLanding .jv-text{max-width:640px!important}
        #jaavLanding .jv-demo img{height:520px!important}
        #jaavLanding .jv-test{min-width:31%!important}
        #jaavLanding .jv-auth-item strong{font-size:34px!important}
        #jaavLanding .jv-auth-item span{font-size:11px!important}
        #jaavLanding .jv-benefits-image{max-width:620px!important;margin-left:auto!important;margin-right:auto!important}
      }
    `;
    var st = document.createElement("style");
    st.id = "jaav-v3-css";
    st.textContent = css;
    document.head.appendChild(st);

    if(!document.getElementById("jaav-font")){
      var f = document.createElement("link");
      f.id = "jaav-font";
      f.rel = "stylesheet";
      f.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800;900&display=swap";
      document.head.appendChild(f);
    }
  }

  var ICONS = {
    truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h11v10H3z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
    card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.26-1.21a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92z"/></svg>'
  };

  function faq(q,a){
    return '<details><summary>'+q+'</summary><p>'+a+'</p></details>';
  }

  function buildHTML(){
    var tests = JAAV.testimonios.map(function(src,i){
      return '<div class="jv-test"><img loading="lazy" src="'+src+'" alt="Testimonio JAAV '+(i+1)+'"></div>';
    }).join("");

    return '<div id="jaavLanding">'+

      '<section class="jv-hero">'+
        '<p class="jv-kicker">Bóxer básico JAAV</p>'+
        '<h1 class="jv-title">Boxers que duran años, no meses.</h1>'+
        '<div class="jv-rating"><span class="jv-stars" style="color:#f6b800;letter-spacing:1px">★★★★★</span><strong style="font-size:13px;color:#e8e8e8">Calidad, comodidad y calce real</strong></div>'+
        '<p class="jv-text" style="text-align:left">Costuras reforzadas, algodón con lycra premium y una moldería pensada para que no se suban, no se enrollen y no pierdan forma con los lavados.</p>'+

        '<div class="jv-benefits-image">'+
          '<img loading="lazy" src="'+JAAV.benefitImage+'" alt="Beneficios JAAV">'+
        '</div>'+

        '<button type="button" class="jv-btn jv-cta">Comprar ahora</button>'+

        '<div class="jv-pills" style="margin-top:12px">'+
          '<span class="jv-pill">💳 3 cuotas sin interés</span>'+
          '<span class="jv-pill">🚚 Envíos a todo el país</span>'+
          '<span class="jv-pill jv-transfer">⚡ 15% OFF transferencia</span>'+
        '</div>'+

        '<div class="jv-hero-video">'+
          '<img loading="eager" src="'+JAAV.heroGif+'" alt="Bóxer JAAV en uso">'+
          '<div class="jv-video-label"><strong>Comodidad que se nota puesta</strong><span>Diseñado para acompañar tu día sin molestias.</span></div>'+
        '</div>'+
      '</section>'+

      '<div class="jv-trust">'+
        '<div class="jv-trust-item">'+ICONS.truck+'<span><strong>Envíos</strong>A todo el país</span></div>'+
        '<div class="jv-trust-item">'+ICONS.shield+'<span><strong>Compra segura</strong>Pago protegido</span></div>'+
        '<div class="jv-trust-item">'+ICONS.card+'<span><strong>3 cuotas</strong>Sin interés</span></div>'+
        '<div class="jv-trust-item">'+ICONS.phone+'<span><strong>Atención</strong>Personalizada</span></div>'+
      '</div>'+

      '<section class="jv-section jv-auth">'+
        '<div class="jv-auth-grid">'+
          '<div class="jv-auth-item"><strong>+150.000</strong><span>B&oacute;xers vendidos</span></div>'+
          '<div class="jv-auth-item"><strong>+150</strong><span>Negocios nos revenden</span></div>'+
          '<div class="jv-auth-item"><strong>10</strong><span>A&ntilde;os fabricando</span></div>'+
        '</div>'+
      '</section>'+

      '<section class="jv-section">'+
        '<p class="jv-kicker">El problema</p>'+
        '<h2 class="jv-title">¿Te pasó alguna de estas?</h2>'+
        '<p class="jv-text">No es normal tener que acomodarte el bóxer todo el día.</p>'+
        '<div class="jv-problems">'+
          '<div class="jv-problem"><span>✕</span><strong>Se rompió a los pocos meses</strong><p>La entrepierna se abre cuando la costura no está reforzada.</p></div>'+
          '<div class="jv-problem"><span>✕</span><strong>El elástico dejó de sostener</strong><p>Se vence, se afloja y deja de ajustar bien.</p></div>'+
          '<div class="jv-problem"><span>✕</span><strong>Perdió la forma</strong><p>Se deforma o queda incómodo después de lavarlo.</p></div>'+
          '<div class="jv-problem"><span>✕</span><strong>Se sube cada vez que caminás</strong><p>Cuando la moldería no acompaña el cuerpo, molesta todo el día.</p></div>'+
        '</div>'+
        '<div class="jv-alert">Un buen bóxer no debería molestarte. Debería acompañarte.</div>'+
      '</section>'+

      '<section class="jv-section">'+
        '<p class="jv-kicker">Boxers en acción</p>'+
        '<h2 class="jv-title">Así se sienten puestos.</h2>'+
        '<p class="jv-text">No alcanza con que se vean bien. Tienen que moverse bien con vos.</p>'+
        '<div class="jv-tabs">'+
          '<button type="button" class="jv-tab active" data-tab="posando">Posando</button>'+
          '<button type="button" class="jv-tab" data-tab="sentado">Sentado</button>'+
          '<button type="button" class="jv-tab" data-tab="caminando">Caminando</button>'+
        '</div>'+
        '<div class="jv-demo">'+
          '<img id="jvActionImg" loading="lazy" src="'+JAAV.tabs.posando.gif+'" alt="Bóxer JAAV posando">'+
          '<div class="jv-demo-caption">'+
            '<h3 id="jvActionTitle">'+JAAV.tabs.posando.titulo+'</h3>'+
            '<p id="jvActionText">'+JAAV.tabs.posando.texto+'</p>'+
          '</div>'+
        '</div>'+
      '</section>'+

      '<section class="jv-section">'+
        '<p class="jv-kicker">La solución</p>'+
        '<h2 class="jv-title">Diseñados para durar.</h2>'+
        '<p class="jv-text">Cada detalle está pensado para resolver los problemas típicos.</p>'+
        '<div class="jv-features">'+
          '<div class="jv-feature"><strong>Algodón con lycra premium</strong><p>Tela suave, fresca y adaptable. 90% algodón y 10% elastano.</p></div>'+
          '<div class="jv-feature"><strong>Costura reforzada</strong><p>Más puntadas en la entrepierna para reducir el riesgo de apertura.</p></div>'+
          '<div class="jv-feature"><strong>Elástico duradero</strong><p>Mantiene el rebote por más tiempo sin apretar de más.</p></div>'+
          '<div class="jv-feature"><strong>Moldería equilibrada</strong><p>Sigue las formas naturales del cuerpo para que no se suba.</p></div>'+
        '</div>'+
      '</section>'+

      '<section class="jv-section">'+
        '<div class="jv-compare">'+
          '<p class="jv-kicker" style="color:#777">Comparativa</p>'+
          '<h2 class="jv-title" style="color:#111">¿Por qué duran más?</h2>'+
          '<div class="jv-row"><b>Boxer común</b><b>JAAV</b></div>'+
          '<div class="jv-row"><span class="jv-no">Se vence el elástico</span><span class="jv-yes">Mantiene rebote</span></div>'+
          '<div class="jv-row"><span class="jv-no">Se abre la costura</span><span class="jv-yes">Refuerzo extra</span></div>'+
          '<div class="jv-row"><span class="jv-no">Hace pelotitas</span><span class="jv-yes">Tela premium</span></div>'+
          '<div class="jv-row"><span class="jv-no">Pierde color</span><span class="jv-yes">Mayor resistencia</span></div>'+
          '<div class="jv-row"><span class="jv-no">Dura meses</span><span class="jv-yes">Dura años</span></div>'+
        '</div>'+
      '</section>'+

      '<section class="jv-section">'+
        '<div class="jv-pack-final">'+
          '<p class="jv-kicker">Oferta final</p>'+
          '<h2 class="jv-title">Renová tus básicos de una vez.</h2>'+
          '<p class="jv-text">El pack semanal está pensado para renovar tus básicos de una vez.</p>'+
          '<div class="jv-pack-box">'+
            '<h3>Pack semanal x7 JAAV</h3>'+
            '<p>Combinación práctica de colores para toda la semana.</p>'+
            '<div class="jv-pack-includes">'+
              '<div class="jv-pack-item"><span class="jv-pack-color">Negro</span><strong>3</strong><small>Negros</small></div>'+
              '<div class="jv-pack-item"><span class="jv-pack-color">Marino</span><strong>2</strong><small>Marinos</small></div>'+
              '<div class="jv-pack-item"><span class="jv-pack-color">Melange</span><strong>2</strong><small>Melange</small></div>'+
            '</div>'+
          '</div>'+
          '<div class="jv-pills" style="justify-content:center">'+
            '<span class="jv-pill" style="background:#0a0a0a">🚚 Envío gratis</span>'+
            '<span class="jv-pill jv-transfer">⚡ 15% OFF transferencia</span>'+
          '</div>'+
          '<button type="button" class="jv-btn jv-cta" style="margin-top:16px">Quiero mis JAAV</button>'+
        '</div>'+
      '</section>'+

      '<section class="jv-section">'+
        '<p class="jv-kicker">Testimonios</p>'+
        '<h2 class="jv-title">Clientes que ya eligieron JAAV</h2>'+
        '<div class="jv-carousel-shell">'+
          '<button type="button" class="jv-arrow left" data-target="jvTests">‹</button>'+
          '<div class="jv-carousel" id="jvTests">'+tests+'</div>'+
          '<button type="button" class="jv-arrow right" data-target="jvTests">›</button>'+
        '</div>'+
      '</section>'+

      '<section class="jv-section jv-faq">'+
        '<p class="jv-kicker">Preguntas frecuentes</p>'+
        '<h2 class="jv-title">Antes de comprar</h2>'+
        faq("¿Qué talle me corresponde?","Usá la guía de talles del producto. Si estás entre dos talles, elegí el más grande para mayor comodidad.")+
        faq("¿Se pueden cambiar?","Sí, los cambios son simples siguiendo las condiciones de la tienda.")+
        faq("¿Cuánto duran?","Están diseñados para durar 2 años como mínimo con uso y lavado normal.")+
        faq("¿Hacen pelotitas?","No en condiciones normales de uso y lavado, gracias a la calidad de la tela.")+
        faq("¿Se suben o se enrollan?","La moldería está pensada para evitarlo. Acompaña las formas del cuerpo.")+
        faq("¿Cuándo llega mi pedido?","El tiempo depende de tu localidad y el método de envío elegido al comprar.")+
      '</section>'+

      '</div>'+

      '<div class="jv-sticky">'+
        '<img src="'+JAAV.heroGif+'" alt="JAAV">'+
        '<div class="jv-sticky-info"><strong>Bóxer básico JAAV</strong><span>Pack x7 · 3 colores</span></div>'+
        '<button type="button" class="jv-btn jv-cta">Comprar</button>'+
      '</div>';
  }

  /* ── TIENDANUBE NATIVE CART ── */
  function nativeButton(){
    var sels = [".js-prod-submit-form",".js-addtocart",".js-add-to-cart",".btn-add-to-cart","button[name='add']","input[type='submit'][data-store*='product-buy']","form[action*='/cart'] button[type='submit']"];
    for(var i=0;i<sels.length;i++){
      var els = document.querySelectorAll(sels[i]);
      for(var j=0;j<els.length;j++){
        if(!els[j].closest("#jaavLanding") && !els[j].disabled) return els[j];
      }
    }
    return null;
  }

  function addToCart(){
    setTimeout(function(){
      var btn = nativeButton();
      if(btn){ btn.click(); return; }
      var forms = document.querySelectorAll("form[action*='/cart']");
      for(var i=0;i<forms.length;i++){
        if(!forms[i].closest("#jaavLanding")){
          if(forms[i].requestSubmit) forms[i].requestSubmit();
          else forms[i].submit();
          return;
        }
      }
    },160);
  }

  function ocultarDescripcionVacia(){
    var cajas = document.querySelectorAll(".description.product-description, .product-description-desktop, .product-description-mobile");
    var i;
    for(i = 0; i < cajas.length; i++){
      if(!cajas[i].querySelector("#jaavLanding")){
        cajas[i].style.setProperty("display","none","important");
      }
    }
  }

  function vigilarSticky(){
    var todas = document.querySelectorAll(".jv-sticky");
    if(!todas.length) return;

    var hayModal = document.body.className.indexOf("overflow-none") > -1 || /modal/i.test(location.hash || "");

    var aviso = document.querySelector(".js-notification-cookie-banner");
    var alto = 0;
    if(aviso){
      var e = getComputedStyle(aviso);
      var r = aviso.getBoundingClientRect();
      if(e.display !== "none" && e.visibility !== "hidden" && r.height > 5){ alto = Math.round(r.height); }
    }

    var i;
    for(i = 0; i < todas.length; i++){
      if(hayModal){
        todas[i].style.setProperty("display","none","important");
      }else{
        todas[i].style.setProperty("display", i === 0 ? "flex" : "none", "important");
        todas[i].style.setProperty("bottom", (alto + 10) + "px", "important");
      }
    }
  }

  function limpiarDuplicados(){
    var i;
    var m = document.querySelectorAll("#jaavLandingMount");
    for(i = 1; i < m.length; i++){ m[i].remove(); }
    var st = document.querySelectorAll(".jv-sticky");
    for(i = 1; i < st.length; i++){ st[i].remove(); }
    var c = document.querySelectorAll("#jaav-v3-css");
    for(i = 1; i < c.length; i++){ c[i].remove(); }
    var l = document.querySelectorAll("#jaavLanding");
    for(i = 1; i < l.length; i++){
      var cont = l[i].closest("#jaavLandingMount");
      if(cont){ cont.remove(); } else { l[i].remove(); }
    }
  }

  function bind(){
    /* Pre-carga los 3 GIFs de tabs para que se vean al cambiar */
    Object.keys(JAAV.tabs).forEach(function(key){
      var preload = new Image();
      preload.src = JAAV.tabs[key].gif;
    });

    document.querySelectorAll(".jv-cta").forEach(function(b){
      b.addEventListener("click", addToCart);
    });

    document.querySelectorAll("#jaavLanding .jv-tab").forEach(function(tab){
      tab.addEventListener("click", function(){
        var key = tab.getAttribute("data-tab");
        var v = JAAV.tabs[key];
        if(!v) return;
        document.querySelectorAll("#jaavLanding .jv-tab").forEach(function(t){ t.classList.remove("active"); });
        tab.classList.add("active");
        var img = document.getElementById("jvActionImg");
        var title = document.getElementById("jvActionTitle");
        var text  = document.getElementById("jvActionText");
        if(img)   img.src = v.gif;
        if(title) title.textContent = v.titulo;
        if(text)  text.textContent  = v.texto;
      });
    });

    document.querySelectorAll(".jv-arrow").forEach(function(btn){
      btn.addEventListener("click", function(){
        var el = document.getElementById(btn.getAttribute("data-target"));
        if(!el) return;
        el.scrollBy({ left: btn.classList.contains("left") ? -el.clientWidth*.84 : el.clientWidth*.84, behavior:"smooth" });
      });
    });
    ocultarDescripcionVacia();
    vigilarSticky();

    window.addEventListener("resize", vigilarSticky);
    window.addEventListener("hashchange", vigilarSticky);
    setInterval(vigilarSticky, 700);
    setInterval(ocultarDescripcionVacia, 1500);
  }

  injectCSS();

  function placeMount(){
    var mount = document.getElementById("jaavLandingMount");
    if(!mount){
      mount = document.createElement("div");
      mount.id = "jaavLandingMount";
    }

    var outer = document.getElementById("single-product-container")
             || document.querySelector(".js-product-container");

    if(outer && outer.parentNode){
      if(mount.previousElementSibling !== outer){
        outer.parentNode.insertBefore(mount, outer.nextSibling);
      }
      return mount;
    }

    var social = document.querySelector(".social-widgets-mobile.visible-phone") || document.querySelector(".social-widgets-mobile");
    var form = document.querySelector("#product_form") || document.querySelector(".js-product-form");

    if(social && social.parentNode && mount.previousElementSibling !== social){
      social.parentNode.insertBefore(mount, social.nextSibling);
    } else if(form && form.parentNode && !social){
      form.parentNode.insertBefore(mount, form.nextSibling);
    }

    return mount;
  }

  function renderLanding(){
    limpiarDuplicados();
    var mount = placeMount();
    if(mount && !mount.innerHTML){
      mount.innerHTML = buildHTML();
      bind();
    }
    ocultarDescripcionVacia();
  }

  renderLanding();

  /* Retry por si Tiendanube arma el bloque de carrito/compartir después */
  document.addEventListener("DOMContentLoaded", renderLanding);
  setTimeout(renderLanding, 600);
  setTimeout(renderLanding, 1600);
  setTimeout(renderLanding, 3000);

})();
