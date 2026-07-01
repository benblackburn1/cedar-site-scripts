/* Cedar Creative — experience layer
 * v1.11.0 · built by Origin · loaded site-wide (footer)
 * Modules: loader (every page, waits for hero video) · lenis · work-grid hover video + expand-on-hover + yellow filter panel (Home; label reveal, black-backed clip, debounced hover, in-row reflow, faceted Project Type/Industry filter with FLIP reflow) · accordion (grid-rows + animated +/- icon)
 *          /work CMS template: situation+results modals · BTS slider · view-other slider (one-up) · inline gallery video
 *          line draw-in (site-wide hairline rules → stroked SVGs, draw on scroll-in)
 *          nav: masked logo+mark (ink follows the background) + hover blur-veil + scroll hide/show + dark/light ink probe · section reveals (fade+rise on scroll-in) · about "what defines us" cards cascade in from the right · partner-logo marquee
 *          about intro (/about only): yellow-field Lottie logo reveal → mark + "Cedar" fly out of the lockup and settle into the header layout (mark bottom-left, big "Cedar" bottom-right; "mark"/"Cedar" embed placeholders filled with the charcoal brand SVGs at the official lockup ratio); nav hidden through the header, animates in once scrolled past it
 * Scroll-in motion (lines + reveals) is gated behind the loader (cedar:ready) so it isn't spent off-screen.
 * Every module is page-aware and honors prefers-reduced-motion.
 */
(function () {
  'use strict';

  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TOUCH = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;
  var EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
  var CHARCOAL = '#29221b';
  var GREY = '#dddad7';
  var YELLOW = '#ffd900';

  /* ---------- shared stylesheet ---------- */
  var css = [
    /* loader */
    '#cedar-loader{position:fixed;inset:0;z-index:99999;background:' + GREY + ';display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:40px 20px;transition:opacity .6s ' + EASE + ';}',
    '#cedar-loader.is-done{opacity:0;pointer-events:none;}',
    '#cedar-loader .cl-top,#cedar-loader .cl-bottom{font-size:11px;letter-spacing:1.1px;color:' + CHARCOAL + ';text-transform:uppercase;text-align:center;line-height:1.6;min-height:36px;}',
    '#cedar-loader .cl-stage{flex:1;width:100%;max-width:560px;min-height:0;}',
    '#cedar-loader canvas{display:block;width:100%;height:100%;}',
    /* buttons — smooth eased hover lift (drifts back on hover-out); the bare "All Work" pill (.btn-pill, no .white/.dark) shows its fill only on hover */
    '.btn-pill{transition:transform .5s ' + EASE + ',background-color .35s ' + EASE + ';will-change:transform;}',
    '.btn-pill:hover{transform:translateY(-4px);}',
    '.btn-pill:not(.white):not(.dark){background-color:transparent;}',
    '.btn-pill:not(.white):not(.dark):hover{background-color:rgba(249,248,246,.2);}',
    /* work-grid hover */
    '.work-card{position:relative;overflow:hidden;}',
    '.cedar-card-video{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:cover;opacity:0;transition:opacity .6s ' + EASE + ';pointer-events:none;z-index:1;}',
    '.work-card.cedar-hover .cedar-card-video{opacity:1;}',
    /* hover clip layer: black fill backs a fixed, oversized, centered iframe (clipped by the card) so letterboxed / non-covering films get a clean black backdrop; never reflows while the card width animates */
    '.cedar-cardvid{position:absolute;inset:0;background:#000;opacity:0;transition:opacity .55s ' + EASE + ';pointer-events:none;overflow:hidden;}',
    '.cedar-cardvid iframe{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;border:0;background:#000;}',
    '.work-card.cedar-hover .cedar-cardvid{opacity:1;}',
    /* work-grid filter — yellow hover panel + chips (injected UI) */
    '.filter-pill{cursor:pointer;}',
    '.cedar-filter-panel{position:absolute;top:100%;left:0;margin-top:10px;background:' + YELLOW + ';border-radius:14px;padding:14px 16px 12px;min-width:236px;box-shadow:0 16px 40px rgba(41,34,27,.20);opacity:0;transform:translateY(-6px) scale(.98);transform-origin:top left;pointer-events:none;transition:opacity .32s ' + EASE + ',transform .32s ' + EASE + ';z-index:50;}',
    '.filter-controls.cfp-open .cedar-filter-panel{opacity:1;transform:none;pointer-events:auto;}',
    '.cedar-filter-panel .cfp-group{margin-bottom:12px;}',
    '.cedar-filter-panel .cfp-h{font-size:10px;letter-spacing:1.1px;text-transform:uppercase;color:' + CHARCOAL + ';opacity:.55;margin:0 0 7px;}',
    '.cedar-filter-panel .cfp-chips{display:flex;flex-wrap:wrap;gap:6px;}',
    '.cedar-filter-panel .cfp-chip{cursor:pointer;border:1px solid rgba(41,34,27,.35);background:transparent;color:' + CHARCOAL + ';border-radius:20px;padding:5px 11px;font-size:12px;line-height:1;transition:background-color .25s ' + EASE + ',color .25s ' + EASE + ',transform .18s ' + EASE + ',border-color .25s ' + EASE + ';}',
    '.cedar-filter-panel .cfp-chip:hover{transform:translateY(-1px);border-color:' + CHARCOAL + ';}',
    '.cedar-filter-panel .cfp-chip.is-on{background:' + CHARCOAL + ';color:' + YELLOW + ';border-color:' + CHARCOAL + ';}',
    '.cedar-filter-panel .cfp-clear{cursor:pointer;border:0;background:none;color:' + CHARCOAL + ';opacity:.55;font-size:11px;padding:2px 0;text-decoration:underline;transition:opacity .2s ' + EASE + ';}',
    '.cedar-filter-panel .cfp-clear:hover{opacity:1;}',
    '.filter-controls .filter-pill{column-gap:0;}',   /* drop the pill flex gap so the caption + collapsed x hug tight (scoped: not the /work .filter-pill) */
    '.filter-pill .cfp-x{display:none;align-items:center;justify-content:center;flex:0 0 auto;height:15px;margin-left:6px;border:0;background:none;padding:0;cursor:pointer;color:' + CHARCOAL + ';font-size:15px;line-height:1;opacity:.6;vertical-align:middle;}',   /* toggled via display in JS — no transition (a transition on this element sticks at 0 inside the pill); display:none = zero reserved space when inactive */
    '.filter-pill .cfp-x:hover{opacity:1;}',
    /* modal */
    '#cedar-modal-root{position:fixed;inset:0;z-index:99990;display:none;align-items:center;justify-content:center;padding:24px;}',
    '#cedar-modal-root.is-open{display:flex;}',
    '.cedar-modal-backdrop{position:absolute;inset:0;background:rgba(244,244,242,.45);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);opacity:0;transition:opacity .6s ' + EASE + ';}',
    '#cedar-modal-root.is-in .cedar-modal-backdrop{opacity:1;}',
    '.cedar-modal{position:relative;background:#fff;border-radius:14px;width:min(560px,92vw);max-height:86vh;overflow:auto;padding:28px 26px 26px;color:' + CHARCOAL + ';box-shadow:0 18px 60px rgba(41,34,27,.18);opacity:0;transform:translateY(14px) scale(.985);transition:opacity .6s ' + EASE + ',transform .6s ' + EASE + ';}',
    '#cedar-modal-root.is-in .cedar-modal{opacity:1;transform:none;}',
    '.cedar-modal h3{font-size:19px;font-weight:500;text-align:center;margin:0 0 18px;}',
    '.cedar-modal .cm-body{font-size:12.5px;line-height:1.55;text-align:center;margin:0 auto;max-width:300px;white-space:pre-line;}',
    '.cedar-modal .cm-rich{white-space:normal;text-align:left;font-size:13px;line-height:1.6;max-width:none;}',
    '.cedar-modal .cm-rich p{margin:0 0 12px;}',
    '.cedar-modal .cm-rich p:last-child{margin-bottom:0;}',
    '.cedar-modal .cm-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:24px 0 4px;}',
    '.cedar-modal .cm-grid img{width:100%;height:118px;object-fit:cover;border-radius:6px;display:block;}',
    '.cedar-modal .cm-close{position:absolute;top:14px;right:14px;width:26px;height:26px;cursor:pointer;background:none;border:0;padding:0;line-height:1;font-size:20px;color:' + CHARCOAL + ';opacity:.6;}',
    '.cedar-modal .cm-close:hover{opacity:1;}',
    'body.cedar-modal-open{overflow:hidden;}',
    /* inline gallery video */
    '.cedar-play{position:absolute;inset:0;margin:auto;width:54px;height:54px;border-radius:50%;background:rgba(244,244,242,.88);border:0;cursor:pointer;z-index:3;font-size:15px;color:' + CHARCOAL + ';display:flex;align-items:center;justify-content:center;transition:transform .3s ' + EASE + ';}',
    '.cedar-play:hover{transform:scale(1.08);}',
    /* BTS slider */
    '.cedar-bts-thumb{cursor:pointer;transition:opacity .3s ' + EASE + ';opacity:.5;}',
    '.cedar-bts-thumb.cedar-bts-sel,.cedar-bts-thumb:hover{opacity:1;}',
    '.cedar-bts-gallery-btn{cursor:pointer;display:inline-flex;align-items:center;border:1px solid rgba(41,34,27,.35);border-radius:14px;padding:6px 14px;font-size:13px;color:' + CHARCOAL + ';transition:background-color .3s ' + EASE + ';}',
    '.cedar-bts-gallery-btn:hover{background-color:rgba(41,34,27,.07);}',
    /* shared arrow controls + view-other slider */
    '.cedar-vo-arrows{display:inline-flex;gap:10px;margin-top:14px;align-items:center;}',
    '.cedar-vo-arrow{width:34px;height:34px;border:0;border-radius:10px;background:rgba(218,211,205,.5);cursor:pointer;color:' + CHARCOAL + ';font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;transition:transform .3s ' + EASE + ',background-color .3s ' + EASE + ';}',
    '.cedar-vo-arrow:hover{transform:translateY(-3px);background-color:rgba(218,211,205,.8);}',
    '.cedar-vo-track{display:flex;gap:16px;transition:transform .5s ' + EASE + ';will-change:transform;}',
    '.cedar-vo-track > .project-preview{flex:0 0 100%;min-width:0;box-sizing:border-box;}',
    '.cedar-vo-track .project-preview *{max-width:100%;min-width:0;}',   /* cap fixed-width inner card so it fits one-up */
    /* accordion — smooth grid-rows reveal + animated +/- icon (scoped to .cedar-acc-init so no-JS shows all open) */
    '.acc-head{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;}',
    '.acc-ico{position:relative;width:13px;height:13px;flex:0 0 auto;}',
    '.acc-ico::before,.acc-ico::after{content:"";position:absolute;background:currentColor;transition:transform .4s ' + EASE + ';}',
    '.acc-ico::before{top:50%;left:0;width:100%;height:1.5px;transform:translateY(-50%);}',
    '.acc-ico::after{left:50%;top:0;width:1.5px;height:100%;transform:translateX(-50%);}',
    '.cedar-acc-init .acc-item.cedar-open .acc-ico::after{transform:translateX(-50%) scaleY(0);}',  /* + -> - */
    '.cedar-acc-init .acc-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .55s ' + EASE + ';}',
    '.cedar-acc-init .acc-item.cedar-open .acc-body{grid-template-rows:1fr;}',
    '.cedar-acc-init .acc-body > .acc-inner{overflow:hidden;min-height:0;opacity:0;transition:opacity .45s ' + EASE + ';}',
    '.cedar-acc-init .acc-item.cedar-open .acc-body > .acc-inner{opacity:1;}',
    /* line draw-in: SVG overlay sits on the host edge, line strokes in */
    '.cedar-line-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:1;}',
    /* nav: transparent + blur veil on hover/focus; auto-hides on scroll-down, slides back on scroll-up; ink (links + masked logo/mark) flips by what's behind it — JS toggles cedar-nav-dark / cedar-nav-light per scroll position */
    '.navbar{transition:transform .55s ' + EASE + ',background-color .4s ' + EASE + ',backdrop-filter .4s ' + EASE + ';will-change:transform;}',
    '.navbar.cedar-nav-hidden{transform:translateY(-100%);}',
    '.navbar:hover,.navbar:focus-within{background-color:rgba(41,52,26,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);}',
    /* masked logo + mark: shape from the brand SVG, painted with currentColor so it rides the nav ink; width tracks the source aspect ratio (no squish) */
    '.cedar-logo-mask,.cedar-mark-mask{display:block;background-color:currentColor;color:#f4f4f2;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;transition:background-color .45s ' + EASE + ';}',
    '.nav-link{transition:color .45s ' + EASE + ';}',
    /* per-scroll ink — specificity (0,3,0) beats Webflow page-scoped ".page-wrap-* .nav-link" so the switch actually wins */
    '.navbar.cedar-nav-dark .nav-link{color:#f4f4f2;}',
    '.navbar.cedar-nav-light .nav-link{color:' + CHARCOAL + ';}',
    '.navbar.cedar-nav-dark .cedar-logo-mask,.navbar.cedar-nav-dark .cedar-mark-mask{color:#f4f4f2;}',
    '.navbar.cedar-nav-light .cedar-logo-mask,.navbar.cedar-nav-light .cedar-mark-mask{color:' + CHARCOAL + ';}',
    /* hover veil is dark green → force light ink regardless of section (placed after the section rules so it wins on equal specificity) */
    '.navbar:hover .nav-link,.navbar:focus-within .nav-link{color:#f4f4f2;}',
    '.navbar:hover .cedar-logo-mask,.navbar:hover .cedar-mark-mask,.navbar:focus-within .cedar-logo-mask,.navbar:focus-within .cedar-mark-mask{color:#f4f4f2;}',
    /* about page: "What defines us" cards start shifted down-right + hidden, ease up + left into place (JS staggers right→left) */
    '.cedar-about-card{opacity:0;transform:translate(52px,25px);will-change:opacity,transform;}',
    '.cedar-about-card.cedar-in{opacity:1;transform:none;transition:opacity .85s ' + EASE + ',transform .85s ' + EASE + ';}',
    /* section reveals — JS adds .cedar-reveal (so no-JS shows everything) */
    '.cedar-reveal{opacity:0;transform:translateY(44px);will-change:opacity,transform;}',
    '.cedar-reveal.cedar-in{opacity:1;transform:none;transition:opacity .8s ' + EASE + ',transform .8s ' + EASE + ';}',
    /* logo marquee */
    '.cedar-marquee{overflow:hidden;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);}',
    '.cedar-marquee-track{display:flex;width:max-content;align-items:center;animation:cedar-scroll 36s linear infinite;}',
    '.cedar-marquee:hover .cedar-marquee-track{animation-play-state:paused;}',
    '@keyframes cedar-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}',
    /* gallery (project pages) — consistent-height 16:9 boxes, JS sets each card w/h; the vimeo video fills the box, black shows behind any non-16:9 film */
    '.gallery-card.cedar-gal{overflow:hidden;position:relative;}',
    '.gallery-card.cedar-gal .gallery-video{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;}',
    '.gallery-card.cedar-gal .vimeo-container{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;background:#000!important;overflow:hidden!important;}',
    '.gallery-card.cedar-gal .vimeo-wrapper{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;padding:0!important;}',
    '.gallery-card.cedar-gal .vimeo-container iframe{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;transform:none!important;max-width:none!important;}',
    /* reduced motion: kill transitions + reveals + marquee */
    '@media (prefers-reduced-motion: reduce){#cedar-loader,.cedar-card-video,.cedar-card-meta,.cedar-modal,.cedar-modal-backdrop,.cedar-vo-track,.cedar-bts-thumb,.cedar-play,.cedar-acc-init .acc-body,.cedar-acc-init .acc-body > .acc-inner,.acc-ico::before,.acc-ico::after{transition:none!important;}.cedar-reveal{opacity:1!important;transform:none!important;}.cedar-marquee-track{animation:none!important;}}'
  ].join('');
  var styleEl = document.createElement('style');
  styleEl.id = 'cedar-experience-css';
  styleEl.textContent = css;
  (document.head || document.documentElement).appendChild(styleEl);

  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  /* run fn once the site loader has lifted, so above-the-fold motion isn't spent
     behind the overlay (IntersectionObserver counts viewport intersection, not
     visual occlusion). Fires immediately if the loader is already gone / never shows. */
  function afterLoader(fn) {
    if (window.__cedarReady) { fn(); return; }
    var ran = false, go = function () { if (ran) return; ran = true; fn(); };
    document.addEventListener('cedar:ready', go, { once: true });
    setTimeout(go, 8000); /* safety: loader hard-caps ~7s; never strand motion */
  }

  /* =========================================================
   * 1. SITE LOADER — once per session, skipped on reduced motion
   * ======================================================= */
  var LOADER_MIN = 1500, LOADER_MAX = 7000;
  var P_LOAD = location.pathname.replace(/\/$/, '') || '/';
  var showLoader = !RM && P_LOAD !== '/about';   /* /about runs its own logo-reveal intro (module 11) */
  if (showLoader) {
    var loader = el('div', null, '');
    loader.id = 'cedar-loader';
    var top = el('div', 'cl-top', 'CEDAR CREATIVE');
    var stage = el('div', 'cl-stage', '');
    var bottom = el('div', 'cl-bottom', '');
    loader.appendChild(top); loader.appendChild(stage); loader.appendChild(bottom);
    (document.body || document.documentElement).appendChild(loader);

    /* typewriter */
    var lines = ['NOW LOADING:', 'TRANSFORMATIVE FILMS & INSPIRING IDEAS'];
    var li = 0, ci = 0, l1 = el('div', null, ''), l2 = el('div', null, '');
    bottom.appendChild(l1); bottom.appendChild(l2);
    (function type() {
      if (li >= lines.length) return;
      var target = li === 0 ? l1 : l2;
      target.textContent = lines[li].slice(0, ++ci);
      if (ci >= lines[li].length) { li++; ci = 0; setTimeout(type, 260); }
      else setTimeout(type, 34);
    })();

    /* three.js wireframe chevron mark — waits for THREE (loaded deferred) */
    var spin = null;
    (function waitThree(tries) {
      if (!window.THREE) { if (tries > 0 && !loader.classList.contains('is-done')) setTimeout(function () { waitThree(tries - 1); }, 80); return; }
      try {
        var T = window.THREE;
        var w = stage.clientWidth || 480, h = stage.clientHeight || 420;
        var renderer = new T.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        stage.appendChild(renderer.domElement);
        var scene = new T.Scene();
        var cam = new T.PerspectiveCamera(28, w / h, 0.1, 200);
        cam.position.set(0, 0, 95);
        /* the Cedar mark: two chevrons, traced from the logo SVG (viewBox 45x34.8) */
        var pts = [
          [[0,17.37],[3.019,18.137],[22.504,10.447],[41.99,18.137],[45.009,17.37],[45.009,15.997],[22.504,0],[0,15.997]],
          [[0,34.048],[3.019,34.815],[22.504,27.125],[41.99,34.815],[45.009,34.048],[45.009,32.675],[22.504,16.678],[0,32.675]]
        ];
        var group = new T.Group();
        var mat = new T.LineBasicMaterial({ color: 0x29221b, transparent: true, opacity: 0.85 });
        pts.forEach(function (poly) {
          var shape = new T.Shape();
          poly.forEach(function (p, i) {
            var x = p[0] - 22.5, y = -(p[1] - 17.4); /* center + flip y */
            if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
          });
          shape.closePath();
          var geo = new T.ExtrudeGeometry(shape, { depth: 7, bevelEnabled: false });
          geo.translate(0, 0, -3.5);
          var edges = new T.EdgesGeometry(geo, 12);
          group.add(new T.LineSegments(edges, mat));
        });
        group.scale.setScalar(1.15);
        scene.add(group);
        (function frame() {
          if (loader.classList.contains('is-done')) return;
          group.rotation.y += 0.011;
          group.rotation.x = Math.sin(Date.now() / 2600) * 0.18;
          renderer.render(scene, cam);
          spin = requestAnimationFrame(frame);
        })();
      } catch (e) { /* wireframe is decorative — loader still works without it */ }
    })(40);

    var t0 = Date.now(), done = false;
    function finish() {
      if (done) return; done = true;
      var wait = Math.max(0, LOADER_MIN - (Date.now() - t0));
      setTimeout(function () {
        loader.classList.add('is-done');
        window.__cedarReady = true;                                   /* release gated scroll motion */
        document.dispatchEvent(new CustomEvent('cedar:ready'));
        setTimeout(function () { if (spin) cancelAnimationFrame(spin); loader.remove(); }, 700);
      }, wait);
    }
    /* hold the loader until the hero background video is actually playing (masks the
       buffer flash); fall back to full page load, then a hard cap */
    function waitForContent() {
      var hero = document.querySelector('.hero-band iframe, .photo-band iframe, #vimeo-bg');
      if (!hero) { finish(); return; }
      var played = false;
      function onMsg(e) {
        if ((e.origin || '').indexOf('vimeo') === -1) return;
        var d; try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (_) { return; }
        if (d && (d.event === 'play' || d.event === 'playing' || d.event === 'bufferend')) {
          played = true; window.removeEventListener('message', onMsg); finish();
        }
      }
      window.addEventListener('message', onMsg);
      function subscribe() { try { hero.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'play' }), '*'); } catch (_) {} }
      subscribe(); hero.addEventListener('load', subscribe);
      setTimeout(function () { if (!played) finish(); }, 4000); /* video never reported -> exit anyway */
    }
    if (document.readyState === 'complete') waitForContent();
    else window.addEventListener('load', waitForContent);
    setTimeout(finish, LOADER_MAX); /* hard cap */
  }
  if (!showLoader && !RM) {                    /* loader skipped (e.g. /about) — still release gated scroll motion so lines/reveals aren't stranded behind the 8s fallback */
    onReady(function () { window.__cedarReady = true; document.dispatchEvent(new CustomEvent('cedar:ready')); });
  }

  /* =========================================================
   * 2. LENIS SMOOTH SCROLL — desktop, motion-friendly only
   * ======================================================= */
  onReady(function () {
    if (RM || TOUCH || !window.Lenis) return;
    try {
      var lenis = new window.Lenis({ duration: 1.1, easing: function (t) { return 1 - Math.pow(1 - t, 3); } });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    } catch (e) {}
  });

  /* =========================================================
   * 3. WORK-GRID HOVER VIDEO + EXPAND (Home) — per-card Vimeo from
   *    data-vimeo-url (bound to Works `thumbnail-clip`). On hover the clip
   *    fades in and the card widens toward 16:9 while its row-mates shrink
   *    proportionally (floor: 50% of each card's own width). Smooth by
   *    design: the video iframe is a FIXED, oversized, centered layer the
   *    card clips (overflow hidden) so it never reflows while the width
   *    animates. Desktop + motion only; touch / reduced-motion keep the
   *    static thumbnail. No text styling here — typography is yours in Webflow.
   * ======================================================= */
  function vimeoEmbed(url) {
    if (!url) return null;
    var id = (url.match(/vimeo\.com\/(?:video\/)?(\d+)/i) || [])[1];
    if (!id) return null;
    var h = (url.match(/[?&]h=([0-9a-z]+)/i) || [])[1] ||
            (url.match(/vimeo\.com\/(?:video\/)?\d+\/([0-9a-z]+)/i) || [])[1] || '';
    return 'https://player.vimeo.com/video/' + id + '?' + (h ? 'h=' + h + '&' : '') +
           'background=1&autoplay=1&muted=1&loop=1&autopause=0';
  }
  onReady(function () {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path !== '/' || RM || TOUCH) return;          /* desktop + motion only */
    var cards = [].slice.call(document.querySelectorAll('.work-grid .work-card'));
    if (cards.length < 2) return;
    var TRANS = 'flex-basis .55s ' + EASE + ',opacity .8s ' + EASE + ',transform .8s ' + EASE;
    cards.forEach(function (c) {
      c.style.boxSizing = 'border-box'; c.style.minWidth = '0';   /* shrink to the basis so row-mates resize in place, never wrap */
      c._nat = c.getBoundingClientRect().width;        /* natural design width — the grow basis (so a filtered row still fills) */
      var lb = c.querySelector('.card-label');          /* reveal the CMS-bound title/situation on hover (your Webflow styling, just toggled) */
      if (lb) { lb.classList.remove('hidden'); lb.style.opacity = '0'; lb.style.pointerEvents = 'none'; lb.style.zIndex = '4'; lb.style.transition = 'opacity .5s ' + EASE; }
    });
    function visible() { return cards.filter(function (c) { return c.style.display !== 'none'; }); }
    function relock(enableTrans) {                     /* grow visible cards to fill their rows, then freeze as px so hover can animate flex-basis cleanly */
      var vis = visible();
      vis.forEach(function (c) { c.style.transition = 'none'; c.style.flex = '1 1 ' + Math.round(c._nat) + 'px'; });
      vis.forEach(function (c) { c._rw = c.getBoundingClientRect().width; });
      vis.forEach(function (c) { c.style.flex = '0 1 ' + c._rw + 'px'; });   /* shrink:1 + exact (unrounded) so a sub-pixel total never wraps a card to the next row */
      if (enableTrans !== false) requestAnimationFrame(function () { vis.forEach(function (c) { c.style.transition = TRANS; }); });
    }
    relock();
    function rowOf(card) { var top = card.getBoundingClientRect().top; return visible().filter(function (c) { return Math.abs(c.getBoundingClientRect().top - top) < 8; }); }
    function expand(card) {
      var row = rowOf(card); if (row.length < 2) return;
      var h = card.getBoundingClientRect().height, restW = card._rw;
      var total = row.reduce(function (s, c) { return s + c._rw; }, 0);
      var avail = total - 2;                                            /* tiny end-state margin so the row never sits exactly at the wrap boundary */
      var floors = row.reduce(function (s, c) { return s + (c === card ? 0 : c._rw * 0.5); }, 0);
      var target = Math.max(restW, Math.min(h * 16 / 9, avail - floors));
      var remain = avail - target, otherRest = (total - restW) || 1;   /* row-mates share the exact remainder, proportional to their own width */
      row.forEach(function (c) {
        var isH = c === card;
        /* row-mates start shrinking immediately; the hovered card grows 90ms later so it can never push them off the row (flex decides wrapping on basis BEFORE shrink) */
        c.style.transition = 'flex-basis .55s ' + EASE + (isH ? ' .09s' : '') + ',opacity .8s ' + EASE + ',transform .8s ' + EASE;
        c.style.flex = '0 1 ' + (isH ? target : remain * c._rw / otherRest) + 'px';
      });
    }
    function collapse() { visible().forEach(function (c) { c.style.transition = TRANS; c.style.flex = '0 1 ' + c._rw + 'px'; }); }
    function mountVideo(card) {
      if ('_cv' in card) return;
      var src = vimeoEmbed((card.getAttribute('data-vimeo-url') || '').trim());
      if (!src) { card._cv = null; return; }
      card._src = src;
      var h = card.getBoundingClientRect().height || 600;
      var wrap = document.createElement('div'); wrap.className = 'cedar-cardvid';
      var f = document.createElement('iframe'); f.allow = 'autoplay'; f.tabIndex = -1; f.setAttribute('aria-hidden', 'true');
      f.style.width = (Math.ceil(h * 16 / 9) + 4) + 'px'; f.style.height = h + 'px';   /* src set on hover (restarts each time) */
      wrap.appendChild(f);
      var anchor = card.querySelector('.card-label') || card.querySelector('.overlay');
      if (anchor) card.insertBefore(wrap, anchor); else card.appendChild(wrap);
      card._cv = wrap;
    }
    function playVid(c) { if (c && c._cv) { var f = c._cv.querySelector('iframe'); if (f && c._src) f.src = c._src; } }   /* (re)load → restarts from 0 */
    function stopVid(c) { if (c && c._cv) { var f = c._cv.querySelector('iframe'); if (f) f.src = 'about:blank'; } }        /* stop off-hover (no continuous loop) */
    function label(c, on) { var l = c && c.querySelector('.card-label'); if (l) l.style.opacity = on ? '1' : '0'; }
    /* single active card + debounced hover (intent-in, settle-out) so the moving edges can't ping-pong */
    var active = null, enterT, leaveT;
    function setActive(card) {
      if (active === card) return;
      if (active) { active.classList.remove('cedar-hover'); label(active, false); stopVid(active); }
      active = card;
      collapse();
      if (card) { mountVideo(card); card.classList.add('cedar-hover'); label(card, true); playVid(card); expand(card); }
    }
    cards.forEach(function (card) {
      card.addEventListener('mouseenter', function () { clearTimeout(leaveT); if (active === card) return; clearTimeout(enterT); enterT = setTimeout(function () { setActive(card); }, 80); });
      card.addEventListener('mouseleave', function () { clearTimeout(enterT); clearTimeout(leaveT); leaveT = setTimeout(function () { setActive(null); }, 130); });
    });
    var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { if (!active) relock(); }, 160); });

    /* ---------- FILTER: yellow hover panel, faceted (AND across groups, OR within), FLIP reflow ---------- */
    var controls = document.querySelector('.filter-controls'), pill = document.querySelector('.filter-pill');
    var caption = document.querySelector('.filter-pill .caption');   /* there are two .filter-pill; the caption lives in the second */
    if (controls && pill) {
      var GROUPS = [
        { key: 'Project Type', get: function (c) { return [].map.call(c.querySelectorAll('.pt-tag'), function (t) { return t.textContent.trim(); }).filter(Boolean); } },
        { key: 'Industry', get: function (c) { var v = (c.getAttribute('data-industry') || '').trim(); return v ? [v] : []; } }
      ];
      GROUPS.forEach(function (g) { var s = [], v = []; cards.forEach(function (c) { g.get(c).forEach(function (x) { if (s.indexOf(x) < 0) { s.push(x); v.push(x); } }); }); g.values = v.sort(); g.sel = {}; g.chips = {}; });
      controls.style.position = 'relative';
      var panel = el('div', 'cedar-filter-panel', '');
      GROUPS.forEach(function (g) {
        if (!g.values.length) return;
        var grp = el('div', 'cfp-group', ''); grp.appendChild(el('div', 'cfp-h', g.key));
        var chips = el('div', 'cfp-chips', '');
        g.values.forEach(function (v) {
          var chip = el('button', 'cfp-chip', ''); chip.type = 'button'; chip.textContent = v;
          chip.addEventListener('click', function () { if (g.sel[v]) { delete g.sel[v]; chip.classList.remove('is-on'); } else { g.sel[v] = 1; chip.classList.add('is-on'); } apply(); });
          g.chips[v] = chip; chips.appendChild(chip);
        });
        grp.appendChild(chips); panel.appendChild(grp);
      });
      function clearAll() { GROUPS.forEach(function (g) { g.sel = {}; g.values.forEach(function (v) { g.chips[v].classList.remove('is-on'); }); }); apply(); }
      var clr = el('button', 'cfp-clear', 'Clear'); clr.type = 'button';
      clr.addEventListener('click', clearAll);
      panel.appendChild(clr); controls.appendChild(panel);
      var pillEl = caption && caption.parentElement;   /* the .filter-pill that holds the caption */
      var xbtn = null;
      if (pillEl) { xbtn = el('button', 'cfp-x', '×'); xbtn.type = 'button'; xbtn.setAttribute('aria-label', 'Clear filters'); xbtn.addEventListener('click', function (e) { e.stopPropagation(); clearAll(); }); pillEl.appendChild(xbtn); }
      var closeT;
      controls.addEventListener('mouseenter', function () { clearTimeout(closeT); controls.classList.add('cfp-open'); });
      controls.addEventListener('mouseleave', function () { closeT = setTimeout(function () { controls.classList.remove('cfp-open'); }, 200); });
      function match(c) { return GROUPS.every(function (g) { var sel = Object.keys(g.sel); if (!sel.length) return true; return g.get(c).some(function (v) { return g.sel[v]; }); }); }
      function capUpd() { var picks = GROUPS.reduce(function (a, g) { return a.concat(Object.keys(g.sel)); }, []); if (caption) caption.textContent = 'Filter: ' + (picks.length ? picks.join(', ') : 'All'); if (xbtn) xbtn.style.display = picks.length ? 'inline-flex' : 'none'; }
      function apply() {
        var keep = cards.filter(match);
        if (!keep.length) { GROUPS.forEach(function (g) { g.sel = {}; g.values.forEach(function (v) { g.chips[v].classList.remove('is-on'); }); }); keep = cards.slice(); }  /* never empty the grid */
        var leaving = visible().filter(function (c) { return keep.indexOf(c) < 0; });
        var entering = cards.filter(function (c) { return keep.indexOf(c) > -1 && c.style.display === 'none'; });
        capUpd();
        leaving.forEach(function (c) { c.style.transition = 'opacity .3s ' + EASE + ',transform .3s ' + EASE; c.style.opacity = '0'; c.style.transform = 'scale(.96)'; });
        setTimeout(function () {
          var stay = visible().filter(function (c) { return keep.indexOf(c) > -1; });
          var first = stay.map(function (c) { return c.getBoundingClientRect(); });
          leaving.forEach(function (c) { c.style.display = 'none'; c.style.opacity = ''; c.style.transform = ''; c.style.transition = 'none'; });
          entering.forEach(function (c) { c.style.display = ''; });
          relock(false);                                /* re-fill + freeze widths for the new visible set */
          stay.forEach(function (c, i) { var l = c.getBoundingClientRect(); c.style.transition = 'none'; c.style.transform = 'translate(' + Math.round(first[i].left - l.left) + 'px,' + Math.round(first[i].top - l.top) + 'px)'; });
          entering.forEach(function (c) { c.style.transition = 'none'; c.style.opacity = '0'; c.style.transform = 'scale(.97)'; });
          requestAnimationFrame(function () {
            stay.forEach(function (c) { c.style.transition = 'transform .55s ' + EASE; c.style.transform = 'none'; });
            entering.forEach(function (c) { c.style.transition = 'opacity .5s ' + EASE + ',transform .5s ' + EASE; c.style.opacity = '1'; c.style.transform = 'none'; });
            setTimeout(function () { visible().forEach(function (c) { c.style.transition = TRANS; c.style.transform = 'none'; }); }, 620);
          });
        }, leaving.length ? 240 : 0);
      }
    }
  });

  /* =========================================================
   * 4. /WORK CMS TEMPLATE — modals · BTS slider · view-other · inline video
   *    (supersedes the old static-page modal + carousel modules; those
   *     /project-examples/* pages lose this JS until they are retired/redirected)
   * ======================================================= */
  function makeModal() {
    var root = el('div', null, '<div class="cedar-modal-backdrop"></div>');
    root.id = 'cedar-modal-root';
    document.body.appendChild(root);
    var current = null;
    function close() {
      root.classList.remove('is-in'); document.body.classList.remove('cedar-modal-open');
      setTimeout(function () { root.classList.remove('is-open'); if (current) { current.remove(); current = null; } }, RM ? 0 : 620);
    }
    function open(build) {
      if (current) current.remove();
      var m = el('div', 'cedar-modal', '');
      var x = el('button', 'cm-close', '×'); x.setAttribute('aria-label', 'Close'); m.appendChild(x);
      build(m);
      x.addEventListener('click', close);
      root.appendChild(m); current = m;
      root.classList.add('is-open'); document.body.classList.add('cedar-modal-open');
      requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-in'); }); });
    }
    root.firstChild.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('is-open')) close(); });
    return { open: open, close: close };
  }

  onReady(function () {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path.indexOf('/work/') !== 0) return;            /* CMS project detail pages only */
    var main = document.querySelector('.main-content');
    if (!main) return;
    var modal = makeModal();

    /* ---- W2: situation / results modals — content from hidden CMS blocks ---- */
    function richOf(id) { var n = document.getElementById(id); return (n && n.textContent.trim()) ? n.innerHTML : ''; }
    function pillByText(t) {
      var found = null;
      main.querySelectorAll('.filter-pill').forEach(function (p) { if (!found && (p.textContent || '').trim().toLowerCase() === t) found = p; });
      return found;
    }
    [['the situation', 'The Situation', 'cms-situation-modal'],
     ['the results', 'The Results', 'cms-results-modal']].forEach(function (cfg) {
      var pill = pillByText(cfg[0]); if (!pill) return;
      var html = richOf(cfg[2]);
      var section = pill.closest('section');
      if (!html) {                                       /* conditional visibility: no copy -> hide pill */
        pill.style.display = 'none';
        if (cfg[0] === 'the results' && section) {       /* hide whole results CTA if its heading is also empty */
          var hd = section.querySelector('.heading-2, h1, h2');
          if (!hd || !hd.textContent.trim()) section.style.display = 'none';
        }
        return;
      }
      pill.style.cursor = 'pointer';
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        modal.open(function (m) { m.appendChild(el('h3', null, cfg[1])); m.appendChild(el('div', 'cm-body cm-rich', html)); });
      });
    });

    /* ---- W5: inline gallery video — remove broken copied hero embeds, play on click ---- */
    document.querySelectorAll('.work-grid .video-card-item, .more-projects .video-card-item').forEach(function (e) { e.remove(); });
    document.querySelectorAll('.work-grid .work-card[data-vimeo-url]').forEach(function (card) {
      var url = (card.getAttribute('data-vimeo-url') || '').trim();
      if (!url) return;                                  /* empty = image-only gallery item */
      card.style.cursor = 'pointer';
      var play = el('button', 'cedar-play', '►'); play.setAttribute('aria-label', 'Play video'); card.appendChild(play);
      function start(e) {
        if (e) e.preventDefault();
        if (card.querySelector('iframe.cedar-card-video')) return;
        var ifr = document.createElement('iframe');
        ifr.className = 'cedar-card-video'; ifr.style.opacity = '1'; ifr.style.pointerEvents = 'auto';
        ifr.allow = 'autoplay; fullscreen; picture-in-picture'; ifr.setAttribute('allowfullscreen', '');
        ifr.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1&loop=0';
        card.appendChild(ifr); play.remove();
      }
      play.addEventListener('click', start); card.addEventListener('click', start);
    });

    /* ---- W3: BTS slider — feature swap + thumbnails + arrows + gallery modal ---- */
    (function () {
      var feature = document.querySelector('.bts-feature');
      var strip = document.querySelector('.bts-images');
      var btsSection = feature && feature.closest('section');
      var fItems = feature ? feature.querySelectorAll('.w-dyn-item') : [];
      var thumbs = strip ? strip.querySelectorAll('.w-dyn-item') : [];
      if (!fItems.length || !thumbs.length) { if (btsSection) btsSection.style.display = 'none'; return; }
      var active = -1;
      function setActive(i) {
        active = (i + fItems.length) % fItems.length;
        fItems.forEach(function (it, n) { it.style.display = n === active ? '' : 'none'; });
        thumbs.forEach(function (t, n) { t.classList.toggle('cedar-bts-sel', n === active); });
      }
      thumbs.forEach(function (t, n) { t.classList.add('cedar-bts-thumb'); t.addEventListener('click', function () { setActive(n); }); });
      var controls = document.querySelector('.bts-controls');
      if (controls) {
        var bar = el('div', 'cedar-vo-arrows', '<button class="cedar-vo-arrow" aria-label="Previous">‹</button><button class="cedar-vo-arrow" aria-label="Next">›</button>');
        var gal = el('a', 'cedar-bts-gallery-btn', 'View the gallery'); gal.setAttribute('role', 'button');
        bar.appendChild(gal); controls.appendChild(bar);
        bar.children[0].addEventListener('click', function () { setActive(active - 1); });
        bar.children[1].addEventListener('click', function () { setActive(active + 1); });
        gal.addEventListener('click', function () {
          modal.open(function (m) {
            m.appendChild(el('h3', null, 'Behind the scenes'));
            var g = el('div', 'cm-grid', '');
            thumbs.forEach(function (t) { var im = t.querySelector('img'); if (im) { var c = document.createElement('img'); c.src = im.currentSrc || im.src; c.alt = im.alt || ''; g.appendChild(c); } });
            m.appendChild(g);
          });
        });
      }
      setActive(0);
    })();

    /* ---- W4: view-other — whole card links via data-slug + arrow slider ---- */
    (function () {
      var wrap = document.querySelector('.more-projects'); if (!wrap) return;
      var cards = wrap.querySelectorAll('.project-preview');
      cards.forEach(function (card) {
        var sl = card.querySelector('[data-slug]'); var slug = sl && sl.getAttribute('data-slug');
        if (!slug) return;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () { window.location.href = '/work/' + slug; });
      });
      var track = wrap.querySelector('.w-dyn-items');
      var controls = wrap.querySelector('.slider-controls');
      if (!track || cards.length < 2) return;
      var viewport = track.parentElement;
      if (viewport) { viewport.style.overflow = 'hidden'; viewport.style.minWidth = '0'; viewport.style.maxWidth = '100%'; viewport.style.width = '100%'; }
      track.classList.add('cedar-vo-track');                  /* one full-width card per view — see CSS */
      var GAP = 16, idx = 0;
      function go(n) {
        idx = Math.max(0, Math.min(cards.length - 1, n));
        var w = cards[0].getBoundingClientRect().width + GAP;
        track.style.transform = 'translateX(' + (-idx * w) + 'px)';
      }
      if (controls) {
        var arrows = el('div', 'cedar-vo-arrows', '<button class="cedar-vo-arrow" aria-label="Previous project">‹</button><button class="cedar-vo-arrow" aria-label="Next project">›</button>');
        controls.appendChild(arrows);
        arrows.children[0].addEventListener('click', function () { go(idx - 1); });
        arrows.children[1].addEventListener('click', function () { go(idx + 1); });
      }
      window.addEventListener('resize', function () { go(idx); });
    })();
  });

  /* =========================================================
   * 5. ABOUT / SUITE-SPECS ACCORDION — smooth grid-rows open/close
   *    + animated +/- icon. JS sets .cedar-acc-init so that WITHOUT
   *    JS every panel stays open (no hidden content). Replaces the
   *    height-animated version that jittered against Lenis reflow.
   * ======================================================= */
  onReady(function () {
    var items = document.querySelectorAll('.acc-item');
    if (!items.length) return;
    document.documentElement.classList.add('cedar-acc-init');
    var open = null;
    items.forEach(function (it, i) {
      var head = it.querySelector('.acc-head');
      var body = it.querySelector('.acc-body');
      if (!head || !body) return;
      if (!body.querySelector('.acc-inner')) {          /* one collapsible child for the grid-rows transition */
        var inner = el('div', 'acc-inner', '');
        while (body.firstChild) inner.appendChild(body.firstChild);
        body.appendChild(inner);
      }
      if (!head.querySelector('.acc-ico')) head.appendChild(el('span', 'acc-ico', ''));
      if (i === 0) { it.classList.add('cedar-open'); open = it; } /* first panel open */
      head.addEventListener('click', function () {
        var isOpen = it.classList.contains('cedar-open');
        if (open && open !== it) open.classList.remove('cedar-open');
        if (isOpen) { it.classList.remove('cedar-open'); open = null; }
        else { it.classList.add('cedar-open'); open = it; }
      });
    });
  });

  /* =========================================================
   * 6. LINE DRAW-IN — site-wide hairline rules become stroked SVGs
   *    that draw on scroll-in: horizontal left→right, vertical top→down.
   *    Reads each rule's COMPUTED border (color/width auto-match), hides
   *    the CSS border (keeps its 1px for layout), overlays an inline SVG.
   *    Reduced-motion: no-ops — original borders stay static + visible.
   * ======================================================= */
  onReady(function () {
    if (RM) return;
    var SVGNS = 'http://www.w3.org/2000/svg';
    /* class → lined edge(s); orientation derives from the edge */
    var MAP = {
      'value-col': ['top'], 'acc-item': ['top'], 'fs-acc': ['bottom', 'left'],
      'flex-block': ['top'], 'service-item': ['bottom'],
      'fs-left': ['left', 'right'], 'gib-left': ['left', 'right'], 'gib-right': ['right'],
      'split-row': ['left'], 'more-projects': ['left'], 'bts-controls': ['left']
    };
    var seen = [], hosts = [];
    function addHost(elm, edges) {
      var i = seen.indexOf(elm);
      if (i === -1) { seen.push(elm); hosts.push({ el: elm, edges: edges.slice() }); }
      else { var h = hosts[i]; edges.forEach(function (e) { if (h.edges.indexOf(e) === -1) h.edges.push(e); }); }
    }
    Object.keys(MAP).forEach(function (cls) {
      document.querySelectorAll('.' + cls).forEach(function (elm) { addHost(elm, MAP[cls]); });
    });
    document.querySelectorAll('[data-line], .cedar-line').forEach(function (elm) {     /* future-proof opt-in */
      var v = (elm.getAttribute('data-line') || 'top').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      addHost(elm, v);
    });
    if (!hosts.length) return;

    function cap(e) { return e.charAt(0).toUpperCase() + e.slice(1); }
    function colorOf(cs, e) { return cs['border' + cap(e) + 'Color']; }
    function widthOf(cs, e) { return parseFloat(cs['border' + cap(e) + 'Width']) || 0; }
    function isTransparent(c) { return !c || c === 'transparent' || c === 'rgba(0, 0, 0, 0)'; }
    function isV(e) { return e === 'left' || e === 'right'; }

    var built = [];
    hosts.forEach(function (h) {
      var elm = h.el, cs = getComputedStyle(elm);
      var edges = h.edges.filter(function (e) { return widthOf(cs, e) > 0 && !isTransparent(colorOf(cs, e)); });
      if (!edges.length) return;                          /* no real line at this breakpoint */
      if (cs.position === 'static') elm.style.position = 'relative';
      var svg = document.createElementNS(SVGNS, 'svg');
      svg.setAttribute('class', 'cedar-line-svg');
      svg.setAttribute('preserveAspectRatio', 'none');
      var lines = [];
      edges.forEach(function (e) {
        var ln = document.createElementNS(SVGNS, 'line');
        ln.setAttribute('vector-effect', 'non-scaling-stroke');
        ln.setAttribute('stroke', colorOf(cs, e));
        ln.setAttribute('stroke-width', String(widthOf(cs, e)));
        svg.appendChild(ln); lines.push({ el: ln, edge: e });
        elm.style['border' + cap(e) + 'Color'] = 'transparent';   /* hide CSS line, keep 1px layout */
      });
      elm.appendChild(svg);
      var rec = { host: elm, svg: svg, lines: lines, drawn: false };
      built.push(rec); geom(rec);
    });
    if (!built.length) return;

    function geom(rec) {
      var w = rec.host.clientWidth, hgt = rec.host.clientHeight;
      rec.svg.setAttribute('viewBox', '0 0 ' + w + ' ' + hgt);
      rec.lines.forEach(function (L) {
        var x1, y1, x2, y2;
        if (L.edge === 'top') { x1 = 0; y1 = 0; x2 = w; y2 = 0; }
        else if (L.edge === 'bottom') { x1 = 0; y1 = hgt; x2 = w; y2 = hgt; }
        else if (L.edge === 'left') { x1 = 0; y1 = 0; x2 = 0; y2 = hgt; }   /* y1=0 → draws top→down */
        else { x1 = w; y1 = 0; x2 = w; y2 = hgt; }
        L.el.setAttribute('x1', x1); L.el.setAttribute('y1', y1);
        L.el.setAttribute('x2', x2); L.el.setAttribute('y2', y2);
        L.len = isV(L.edge) ? hgt : w;                    /* H: x1=0 → draws left→right */
        L.el.style.strokeDasharray = L.len;
        L.el.style.transition = 'none';
        L.el.style.strokeDashoffset = rec.drawn ? '0' : L.len;
      });
    }
    function draw(rec, delay) {
      if (rec.drawn) return; rec.drawn = true;
      rec.lines.forEach(function (L) {
        L.el.style.transition = 'stroke-dashoffset 1.1s ' + EASE + ' ' + delay + 'ms';
        requestAnimationFrame(function () { L.el.style.strokeDashoffset = '0'; });
      });
    }
    function recFor(node) { for (var i = 0; i < built.length; i++) if (built[i].host === node) return built[i]; return null; }

    afterLoader(function () {                              /* don't draw behind the loader overlay */
      built.forEach(geom);                                /* refresh lengths post-layout (heights settle after reveals) */
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          var k = 0;
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            var rec = recFor(en.target); if (!rec || rec.drawn) return;
            draw(rec, (k++) * 80);                        /* stagger rules revealing together */
            io.unobserve(en.target);
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        built.forEach(function (rec) { io.observe(rec.host); });
      } else {
        built.forEach(function (rec) { draw(rec, 0); });
      }
    });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { built.forEach(geom); }, 150);   /* lengths are layout-dependent */
    });
  });

  /* =========================================================
   * 7. SECTION REVEALS — fade + rise as elements enter view
   *    JS applies the pre-hidden class, so with no JS everything
   *    is visible. Above-the-fold reveals on load; the rest on
   *    scroll-in with a light stagger. Reduced motion: skipped.
   * ======================================================= */
  onReady(function () {
    if (RM) return;
    /* NB: never add a colour utility (e.g. .light-green) here — it's applied to
       captions, hairlines, buttons & accordion items across the site, so it
       over-matches and strands that content hidden at opacity:0. Target real
       section/block classes only. */
    var SEL = '.hero-statement,.heading-1,.heading-2,.display-title,.intro-lead,' +
              '.post-card,.work-card,.value-col,.photo-band,.gib-left,.gib-right,' +
              '.center-cta,.bts-feature,.project-preview,.ss-left,.ss-acc,.stack';
    var nodes = [].slice.call(document.querySelectorAll(SEL)).filter(function (n) {
      return !n.closest('.navbar,.site-footer,#cedar-loader,.cedar-marquee,.acc-inner'); /* never hide chrome/logos, or accordion body copy (it opens on click) */
    });
    if (!nodes.length) return;
    nodes.forEach(function (n) { n.classList.add('cedar-reveal'); });
    function show(n, d) {
      if (n.classList.contains('cedar-in')) return;
      n.style.transitionDelay = (d || 0) + 'ms';
      n.classList.add('cedar-in');
    }
    /* Scroll-position driven (not one-shot IO): an element reveals once its top crosses
       85% of the viewport — i.e. as it scrolls into view from the bottom. Anything already
       above that line (incl. scrolled-past on a fast flick) reveals too, so nothing is ever
       stranded hidden. No time sweep, so below-fold sections never animate before you reach them. */
    afterLoader(function () {
      var pending = nodes.slice(), ticking = false;
      function sweep() {
        ticking = false;
        var line = (window.innerHeight || document.documentElement.clientHeight) * 0.85;
        var batch = 0, any = false;
        for (var i = 0; i < pending.length; i++) {
          var n = pending[i]; if (!n) continue;
          if (n.getBoundingClientRect().top < line) { show(n, (batch++) * 90); pending[i] = null; any = true; }
        }
        if (any) pending = pending.filter(Boolean);
        if (!pending.length) { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); }
      }
      function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(sweep); } }
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      sweep();                                           /* reveal whatever is already in view on load */
    });
  });

  /* =========================================================
   * 8. LOGO MARQUEE — partner-logos auto-scroll, seamless loop
   *    Moves the slots into a flex track, clones the set once,
   *    CSS animates -50%. Pause on hover; reduced motion = static.
   * ======================================================= */
  onReady(function () {
    document.querySelectorAll('.partner-logos').forEach(function (row) {
      if (row.classList.contains('cedar-marquee')) return;
      var slots = [].slice.call(row.children);
      if (slots.length < 2) return;
      var track = el('div', 'cedar-marquee-track', '');
      var cs = getComputedStyle(row);
      track.style.gap = (cs.columnGap && cs.columnGap !== 'normal') ? cs.columnGap : '64px';
      slots.forEach(function (s) { track.appendChild(s); });
      var clone = track.cloneNode(true);                /* second identical set -> seamless -50% */
      [].slice.call(clone.children).forEach(function (c) { c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
      row.classList.add('cedar-marquee');
      row.appendChild(track);
    });
  });

  /* =========================================================
   * 9. NAV — masked logo+mark (ink follows the background),
   *    scroll hide/show, dark/light ink probe.
   *    The white img logo + mark are replaced by currentColor
   *    CSS-masks (originals just hidden → recoverable). A luminance
   *    probe at the nav band flips the ink white (over dark/video)
   *    or charcoal (over light) per scroll position, overriding
   *    Webflow's page-scoped link color. Nav slides up on
   *    scroll-down and back in on scroll-up (held open while hovered
   *    and near the top). Ink switches even under reduced motion
   *    (legibility); the hide/show motion is gated behind !RM.
   * ======================================================= */
  onReady(function () {
    var nav = document.querySelector('.navbar');
    if (!nav) return;

    /* the new brand mark, inlined as a data-URI mask (alpha = the chevrons; fill is irrelevant) */
    var MARK_URL = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374 283"><path fill-rule="evenodd" clip-rule="evenodd" d="M178.04 0L0 126.555V137.94L25.0235 144.296L178.04 83.6805H195.051L348.067 144.296L373.09 137.94V126.555L195.051 0H178.04Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M178.04 137.979L0 264.534V275.919L25.0235 282.276L178.04 221.66H195.051L348.067 282.276L373.09 275.919V264.534L195.051 137.979H178.04Z" fill="#fff"/></svg>');

    function maskFrom(sel, isMark, url, ratio, fallbackH) {
      var a = document.querySelector(sel); if (!a) return;
      if (a.querySelector('.cedar-logo-mask,.cedar-mark-mask')) return;
      var img = a.querySelector('img');
      var h = img ? Math.round(img.getBoundingClientRect().height) : 0;
      if (!h && img) h = Math.round(parseFloat(getComputedStyle(img).height)) || 0;
      if (!h) h = fallbackH;
      var span = el('span', isMark ? 'cedar-mark-mask' : 'cedar-logo-mask', '');
      span.style.height = h + 'px';
      span.style.width = Math.round(h * ratio) + 'px';   /* width from the source ratio → never squished */
      span.style.webkitMaskImage = 'url("' + url + '")';
      span.style.maskImage = 'url("' + url + '")';
      if (img) img.style.display = 'none';                /* keep the original for easy revert */
      a.appendChild(span);
    }
    var logoImg = document.querySelector('a.nav-logo img');
    var logoUrl = logoImg ? (logoImg.currentSrc || logoImg.src) : '';
    function buildMasks() {
      if (logoUrl) maskFrom('a.nav-logo', false, logoUrl, 641 / 70, 25);   /* wordmark reuses its own asset as the mask */
      maskFrom('a.nav-mark', true, MARK_URL, 374 / 283, 30);               /* mark swapped to the new brand chevrons */
    }
    if (logoImg && !(logoImg.complete && logoImg.naturalHeight)) {
      logoImg.addEventListener('load', buildMasks, { once: true });
      setTimeout(buildMasks, 1400);                       /* fallback if load never fires */
    } else buildMasks();

    /* dark/light probe: walk what's painted behind the nav band */
    function lumOf(rgb) { var m = (rgb || '').match(/[\d.]+/g); if (!m) return null; var a = m[3] != null ? +m[3] : 1; if (a === 0) return null; return 0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]; }
    function isDarkBehind() {
      var x = Math.round(window.innerWidth / 2), y = Math.round(nav.getBoundingClientRect().height / 2) || 37;
      var stack = document.elementsFromPoint(x, y) || [];
      for (var i = 0; i < stack.length; i++) {
        var node = stack[i];
        if (node === nav || nav.contains(node)) continue;
        if (node.id === 'cedar-loader' || (node.closest && node.closest('#cedar-loader'))) continue;
        if (node.tagName === 'IFRAME' || node.tagName === 'VIDEO') return true;   /* film = dark backdrop */
        var L = lumOf(getComputedStyle(node).backgroundColor);
        if (L != null) return L < 135;
      }
      return false;                                        /* nothing painted → assume light */
    }
    function updInk() {
      var dark = isDarkBehind();
      nav.classList.toggle('cedar-nav-dark', dark);
      nav.classList.toggle('cedar-nav-light', !dark);
    }

    var lastY = window.pageYOffset || 0, hidden = false, ticking = false;
    function onFrame() {
      ticking = false;
      var y = window.pageYOffset || 0;
      if (window.__cedarAboutIntro) { nav.classList.add('cedar-nav-hidden'); lastY = y; return; }   /* about intro (reveal phase) holds the nav hidden */
      if (window.__cedarNavFloor != null) {                                                          /* about: nav hidden while the header owns the viewport, animates in once scrolled past it */
        updInk();
        nav.classList.toggle('cedar-nav-hidden', y < window.__cedarNavFloor);
        lastY = y; return;
      }
      updInk();
      if (!RM) {
        if (y < 90 || nav.matches(':hover')) {
          if (hidden) { nav.classList.remove('cedar-nav-hidden'); hidden = false; }
        } else if (Math.abs(y - lastY) > 6) {
          if (y > lastY && !hidden) { nav.classList.add('cedar-nav-hidden'); hidden = true; }
          else if (y < lastY && hidden) { nav.classList.remove('cedar-nav-hidden'); hidden = false; }
        }
      }
      lastY = y;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(onFrame); } }
    updInk();                                              /* set correct ink before first paint */
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    afterLoader(updInk);                                   /* re-probe once the loader overlay lifts */
  });

  /* =========================================================
   * 10. ABOUT — "What defines us" cards cascade in from the right
   *     as the row scrolls into view. Stagger runs right→left
   *     (rightmost leads, wave sweeps left). Desktop + motion only;
   *     reduced motion leaves the cards in place.
   * ======================================================= */
  onReady(function () {
    if (RM) return;
    var cards = [].slice.call(document.querySelectorAll('.about-card'));
    if (!cards.length) return;
    cards.forEach(function (c) { c.classList.add('cedar-about-card'); });
    var n = cards.length;
    function reveal() {
      cards.forEach(function (c, i) {
        if (c.classList.contains('cedar-in')) return;
        c.style.transitionDelay = ((n - 1 - i) * 130) + 'ms';   /* right→left */
        c.classList.add('cedar-in');
      });
    }
    afterLoader(function () {
      var ticking = false;
      function sweep() {
        ticking = false;
        var line = (window.innerHeight || 800) * 0.82;
        if (cards[0].getBoundingClientRect().top < line) {
          reveal();
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
        }
      }
      function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(sweep); } }
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      sweep();
    });
  });

  /* =========================================================
   * 11. ABOUT INTRO — logo reveal that resolves into the header
   *   (/about only). The "mark" / "Cedar" placeholder embeds are
   *   filled with the charcoal brand SVGs. On desktop + motion a
   *   yellow field holds while the Lottie logo reveals; the mark and
   *   "Cedar" then fly out of the centered lockup and settle into
   *   their header positions (mark bottom-left, big "Cedar"
   *   bottom-right). The nav is held hidden through the header and
   *   animates in once the user scrolls past it (see the nav floor in
   *   module 9). Small screens / reduced motion / Lottie failure just
   *   show the finished header with the nav floor still in effect.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/about') return;
    var nav = document.querySelector('.navbar');
    var section = document.querySelector('.section-pad') || document.querySelector('section');

    /* charcoal brand SVGs for the placeholder embeds — width:100% so each fills its flex-basis (set below); height auto keeps aspect */
    var MARK_SVG = '<svg viewBox="0 0 374 283" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto"><path fill-rule="evenodd" clip-rule="evenodd" fill="#29221b" d="M178.04 0L0 126.555V137.94L25.0235 144.296L178.04 83.6805H195.051L348.067 144.296L373.09 137.94V126.555L195.051 0H178.04Z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#29221b" d="M178.04 137.979L0 264.534V275.919L25.0235 282.276L178.04 221.66H195.051L348.067 282.276L373.09 275.919V264.534L195.051 137.979H178.04Z"/></svg>';
    var CEDAR_SVG = '<svg viewBox="0 0 260 70" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto"><path fill="#29221b" d="M50.6083 46.5075H61.1401C58.2508 61.6061 46.4143 69.9942 31.3157 69.9942C11.557 69.9942 0 55.6412 0 34.8573C0 13.7938 12.489 0 31.9681 0C46.6007 0 57.9712 8.85413 60.7673 23.4867H50.2355C48.2783 14.9122 41.661 9.04053 31.5021 9.04053C20.0383 9.04053 11.091 18.0811 11.091 34.8573C11.091 51.3539 19.7587 60.9537 31.7817 60.9537C41.7542 60.9537 48.5579 55.548 50.6083 46.5075Z"/><path fill="#29221b" d="M92.1113 25.8168C85.6804 25.8168 79.2495 28.8924 77.7583 39.0514H105.812C105.253 31.2224 99.847 25.8168 92.1113 25.8168ZM105.626 53.9636H115.412C112.709 63.2837 104.227 69.9942 92.4841 69.9942C76.5467 69.9942 67.3198 58.9032 67.3198 43.7114C67.3198 27.8672 78.2243 17.7082 92.1113 17.7082C106.837 17.7082 116.064 29.2652 116.064 44.0842C116.064 44.923 116.064 45.6687 115.971 46.6007H77.6651C78.6903 57.5052 85.6804 61.6061 92.3909 61.6061C99.4742 61.6061 103.575 58.5304 105.626 53.9636Z"/><path fill="#29221b" d="M160.294 68.7826V61.4197C157.218 66.7321 151.626 69.9942 144.077 69.9942C132.334 69.9942 122.547 60.3945 122.547 43.8978C122.547 27.4012 132.334 17.7082 144.077 17.7082C151.626 17.7082 157.218 20.9703 160.294 26.376V1.21162H170.173V68.7826H160.294ZM146.873 61.7925C154.049 61.7925 160.76 56.48 160.76 43.8978C160.76 31.2224 154.049 25.91 146.873 25.91C138.671 25.91 133.079 32.4341 133.079 43.8978C133.079 55.2684 138.671 61.7925 146.873 61.7925Z"/><path fill="#29221b" d="M223.48 68.7826H213.601C213.135 66.2661 212.948 64.1225 212.948 62.0721C209.779 67.1982 204.374 69.9942 195.892 69.9942C186.479 69.9942 178.65 64.6817 178.65 55.4548C178.65 43.525 192.071 39.9834 212.482 37.8397V36.6281C212.482 28.24 207.729 25.2576 201.671 25.2576C195.054 25.2576 191.139 28.706 190.673 34.5777H180.794C181.633 24.0459 190.487 17.5219 201.671 17.5219C215.558 17.5219 222.175 24.0459 222.175 38.3057V49.6763C222.175 57.7848 222.641 64.1225 223.48 68.7826ZM213.041 47.8123V45.0162C198.595 46.5075 189.368 48.5579 189.368 55.082C189.368 59.5556 192.817 62.5381 198.502 62.5381C206.051 62.5381 213.041 59.0896 213.041 47.8123Z"/><path fill="#29221b" d="M232.916 68.7826V18.6403H242.516V27.5876C244.939 21.8091 249.879 18.5471 256.589 18.3607C257.428 18.3607 258.174 18.3607 259.012 18.4539V28.706C257.148 28.4264 255.843 28.3332 254.445 28.3332C246.71 28.3332 242.795 32.3409 242.795 42.6862V68.7826H232.916Z"/></svg>';

    var embeds = [].slice.call(document.querySelectorAll('.w-embed'));
    function findEmbed(txt) { for (var i = 0; i < embeds.length; i++) { var e = embeds[i]; if (!e.querySelector('svg') && (e.textContent || '').trim() === txt) return e; } return null; }
    var markE = findEmbed('mark'), cedarE = findEmbed('Cedar');
    if (markE) markE.innerHTML = MARK_SVG;
    if (cedarE) cedarE.innerHTML = CEDAR_SVG;
    /* full-width lockup: size the two by the official lockup's width proportions (mark 22.3% / gap 8.8% / Cedar 68.9%),
       so space-between pins mark to the left margin + Cedar to the right with the true lockup gap between them, keeping
       their size relationship. Center-aligned vertically to match the lockup (which is center-, not top-aligned). */
    if (markE) { markE.style.alignSelf = 'center'; markE.style.flex = '0 0 22.3%'; }
    if (cedarE) { cedarE.style.alignSelf = 'center'; cedarE.style.flex = '0 0 68.9%'; }

    /* nav floor — hidden while the header owns the viewport, animates in once scrolled past it (module 9 reads this) */
    function setFloor() { window.__cedarNavFloor = Math.max(200, Math.round((section ? section.getBoundingClientRect().height : window.innerHeight) - 100)); }
    setFloor();
    window.addEventListener('resize', setFloor);
    if (nav && (window.pageYOffset || 0) < window.__cedarNavFloor) nav.classList.add('cedar-nav-hidden');

    if (RM || window.innerWidth < 768 || !(markE || cedarE)) return;   /* no reveal: finished header + nav floor already in place */
    try { window.scrollTo(0, 0); } catch (e) {}
    window.__cedarAboutIntro = true;
    if (markE) markE.style.opacity = '0';
    if (cedarE) cedarE.style.opacity = '0';

    /* yellow field that holds during the reveal (matched to the page exactly) */
    var pw = document.querySelector('.page-wrap-yellow');
    var YEL = pw ? getComputedStyle(pw).backgroundColor : '#ffd900';
    var veil = el('div', null, ''); veil.id = 'cedar-about-veil';
    veil.style.cssText = 'position:fixed;inset:0;z-index:99996;background:' + YEL + ';transition:opacity .6s ' + EASE + ';';
    var REVEAL_W = Math.min(720, Math.round(window.innerWidth * 0.62));
    var REVEAL_H = Math.round(REVEAL_W * 1080 / 1920);
    var stage = el('div', null, '');
    stage.style.cssText = 'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:' + REVEAL_W + 'px;height:' + REVEAL_H + 'px;transition:opacity .45s ' + EASE + ';';
    veil.appendChild(stage); document.body.appendChild(veil);

    var FLY = 1000, done = false, safety = null;
    /* lottie mark + wordmark top-left + width in the 1920×1080 artboard (measured from the JSON) */
    var MA = { x: 482, y: 468, w: 218 }, WA = { x: 786, y: 459, w: 672 };
    function startXform(elm, A) {
      var sc = REVEAL_W / 1920, cLeft = (window.innerWidth - REVEAL_W) / 2, cTop = (window.innerHeight - REVEAL_H) / 2;
      var rx = cLeft + A.x * sc, ry = cTop + A.y * sc, rw = A.w * sc;   /* where this piece sits in the reveal lockup, on screen */
      var r = elm.getBoundingClientRect();                             /* its resting spot in the header */
      return 'translate(' + (rx - r.left) + 'px,' + (ry - r.top) + 'px) scale(' + (rw / r.width) + ')';
    }
    function fly(elm, A) {
      if (!elm) return;
      elm.style.transition = 'none';
      elm.style.transformOrigin = 'top left';
      elm.style.position = 'relative'; elm.style.zIndex = '99997';     /* ride above the veil during the fly */
      elm.style.transform = startXform(elm, A);
      elm.style.opacity = '1';
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        elm.style.transition = 'transform ' + FLY + 'ms ' + EASE + ',opacity .4s ' + EASE;
        elm.style.transform = 'none';                                  /* settle into the header layout */
      }); });
      setTimeout(function () { elm.style.position = ''; elm.style.zIndex = ''; elm.style.transition = ''; elm.style.transform = ''; elm.style.transformOrigin = ''; }, FLY + 160);
    }
    function handoff() {
      if (done) return; done = true;
      fly(markE, MA); fly(cedarE, WA);                                 /* lockup breaks apart into the header positions */
      if (stage) stage.style.opacity = '0';
      if (veil) { veil.style.opacity = '0'; setTimeout(function () { if (veil.parentNode) veil.remove(); }, 680); }
      setTimeout(function () { window.__cedarAboutIntro = false; }, FLY + 60);   /* hand nav control to the floor logic */
    }
    function abort() {                                                 /* failure → just show the finished header */
      if (done) return; done = true; window.__cedarAboutIntro = false; clearTimeout(safety);
      if (markE) markE.style.opacity = '1';
      if (cedarE) cedarE.style.opacity = '1';
      if (veil && veil.parentNode) veil.remove();
    }

    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
    s.onload = function () {
      try {
        var me = ([].slice.call(document.scripts).map(function (x) { return x.src; }).filter(function (x) { return /cedar-experience\.js/.test(x); })[0] || '').split('?')[0];
        var jsonUrl = me.replace(/[^/]+$/, 'cedar-logo-reveal-charcoal-transparent.json');
        var anim = window.lottie.loadAnimation({ container: stage, renderer: 'svg', loop: false, autoplay: true, path: jsonUrl });
        anim.addEventListener('complete', handoff);
        anim.addEventListener('data_failed', abort);
      } catch (e) { abort(); }
    };
    s.onerror = abort;
    document.body.appendChild(s);
    safety = setTimeout(function () { if (!done) handoff(); }, 6500);   /* never strand the veil if Lottie hangs */
  });

  /* =========================================================
   * 12. INFO-CARD COLORS (home) — "What makes Cedar different"
   *   cards carry a CMS color choice on data-color. Paint the
   *   card background + text from the brand palette:
   *     Cedar Green  → dark-green bg,  light-green text
   *     Cedar Yellow → yellow bg,      charcoal text
   *     Cedar Grey   → grey bg,        charcoal text
   *     (none / "-") → no background;  charcoal text, or white
   *                    if the card carries a full-bleed image.
   *   Text is repainted on every text descendant (skipping media)
   *   so it wins even where Webflow set explicit colours. Applies
   *   regardless of reduced-motion (it's colour, not motion).
   * ======================================================= */
  onReady(function () {
    var cards = [].slice.call(document.querySelectorAll('.info-card[data-color]'));
    if (!cards.length) return;
    var GREEN = '#29341a', LIGHT_GREEN = '#9fb18f', CGREY = '#dad3cd', OFFWHITE = '#f4f4f2';
    var MAP = {
      'cedar green':  { bg: GREEN,  text: LIGHT_GREEN },
      'cedar yellow': { bg: YELLOW, text: CHARCOAL },
      'cedar grey':   { bg: CGREY,  text: CHARCOAL },
      'light green':  { bg: LIGHT_GREEN, text: CHARCOAL }
    };
    var SKIP = /^(IMG|SVG|PICTURE|CANVAS|VIDEO|IFRAME|PATH|USE|SOURCE|LINE|RECT|CIRCLE|POLYGON|G)$/;
    function paintText(card, color) {
      card.style.setProperty('color', color, 'important');
      var els = card.querySelectorAll('*');
      for (var i = 0; i < els.length; i++) {
        if (SKIP.test(els[i].tagName)) continue;
        els[i].style.setProperty('color', color, 'important');
      }
    }
    function hasFullBleedImage(card) {
      var cr = card.getBoundingClientRect(), area = (cr.width * cr.height) || 1;
      if (/url\(/.test(getComputedStyle(card).backgroundImage)) return true;
      var els = card.querySelectorAll('*');
      for (var i = 0; i < els.length; i++) {
        var e = els[i], r = e.getBoundingClientRect();
        if ((r.width * r.height) < area * 0.55) continue;           /* only near-full-card layers count */
        if (/url\(/.test(getComputedStyle(e).backgroundImage)) return true;
        if (e.tagName === 'IMG' && e.naturalWidth > 0) return true;
      }
      return false;
    }
    cards.forEach(function (card) {
      var key = (card.getAttribute('data-color') || '').trim().toLowerCase();
      var m = MAP[key];
      if (m) {
        card.style.setProperty('background-color', m.bg, 'important');
        paintText(card, m.text);
      } else {                                                       /* none / "-" / unknown */
        card.style.setProperty('background-color', 'transparent', 'important');
        paintText(card, hasFullBleedImage(card) ? OFFWHITE : CHARCOAL);
      }
    });
  });

  /* =========================================================
   * 13. GALLERY (project pages) — justified, consistent-height
   *   16:9 grid. Cards are laid into rows that fill the row
   *   width; every card shares one height (16:9 box, width =
   *   height x 16/9), the last row is left ragged. The vimeo
   *   film fills each box (CSS above) with black behind. All
   *   Cedar gallery films are 16:9, so rows come out uniform;
   *   TARGET_H just biases how many land per row. Recomputes
   *   on resize. Scoped to .gallery-card so the home work grid
   *   (also .work-row) is untouched.
   * ======================================================= */
  onReady(function () {
    var cards = [].slice.call(document.querySelectorAll('.gallery-card'));
    if (!cards.length) return;
    var ASPECT = 16 / 9, TARGET_H = 460;                             /* bias for ~2-up at desktop; tune for bigger/smaller */
    cards.forEach(function (c) { c.classList.add('cedar-gal'); });
    var groups = [];
    cards.forEach(function (c) {
      var p = c.parentElement, g = null;
      for (var i = 0; i < groups.length; i++) if (groups[i].parent === p) g = groups[i];
      if (!g) { g = { parent: p, items: [] }; groups.push(g); }
      g.items.push(c);
    });
    function layout() {
      groups.forEach(function (g) {
        var p = g.parent, cs = getComputedStyle(p);
        var gap = parseFloat(cs.columnGap || cs.gap) || 14;
        var W = p.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
        if (W <= 0) return;
        p.style.setProperty('justify-content', 'flex-start', 'important');   /* left-align so the ragged last row doesn't spread */
        var N = Math.max(1, Math.round((W + gap) / (TARGET_H * ASPECT + gap)));
        var colW = (W - (N - 1) * gap) / N;
        var H = colW / ASPECT;
        g.items.forEach(function (c) {
          c.style.setProperty('flex', '0 0 auto', 'important');
          c.style.setProperty('width', Math.round(colW) + 'px', 'important');
          c.style.setProperty('height', Math.round(H) + 'px', 'important');
        });
      });
    }
    layout();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 150); });
  });
})();
