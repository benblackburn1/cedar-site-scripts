/* Cedar Creative — experience layer
 * v1.4.5 · built by Origin · loaded site-wide from the page <head>
 * Modules: loader (every page, waits for hero video) · lenis · work-grid hover video + expand-on-hover row reflow (Home, CMS-driven, cover-fill) · accordion (grid-rows + animated +/- icon)
 *          /work CMS template: situation+results modals · BTS slider · view-other slider (one-up) · inline gallery video
 *          line draw-in (site-wide hairline rules → stroked SVGs, draw on scroll-in)
 *          nav hover blur-veil · section reveals (fade+rise on scroll-in) · partner-logo marquee
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
    /* work-grid hover */
    '.work-card{position:relative;overflow:hidden;}',
    '.cedar-card-video{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:cover;opacity:0;transition:opacity .6s ' + EASE + ';pointer-events:none;z-index:1;}',
    '.cedar-card-meta{position:absolute;left:16px;bottom:16px;right:16px;z-index:2;opacity:0;transform:translateY(8px);transition:opacity .6s ' + EASE + ',transform .6s ' + EASE + ';pointer-events:none;color:#f4f4f2;text-shadow:0 1px 14px rgba(0,0,0,.35);}',
    '.cedar-card-meta .ccm-t{font-size:17px;font-weight:500;margin:0 0 4px;}',
    '.cedar-card-meta .ccm-d{font-size:12px;line-height:1.4;margin:0;max-width:340px;}',
    '.work-card.cedar-hover .cedar-card-video,.work-card.cedar-hover .cedar-card-meta{opacity:1;transform:none;}',
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
    '.cedar-vo-arrow{width:30px;height:30px;border:1px solid rgba(41,34,27,.35);border-radius:50%;background:none;cursor:pointer;color:' + CHARCOAL + ';font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;transition:transform .3s ' + EASE + ',background-color .3s ' + EASE + ';}',
    '.cedar-vo-arrow:hover{transform:translateY(-3px);background-color:rgba(41,34,27,.07);}',
    '.cedar-vo-track{display:flex;gap:16px;transition:transform .5s ' + EASE + ';will-change:transform;}',
    '.cedar-vo-track > .project-preview{flex:0 0 100%;min-width:0;box-sizing:border-box;}',
    '.cedar-vo-track .project-preview *{max-width:100%;min-width:0;}',   /* cap fixed-width inner card so it fits one-up */
    /* /post dark-green page (.cedar-bg) — lift body text off the green */
    '.cedar-bg .caption,.cedar-bg .body-sm{color:#f4f4f2;}',
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
    /* nav: transparent by default, blur veil fades in on hover/focus (links flip light) */
    '.navbar{transition:background-color .4s ' + EASE + ',backdrop-filter .4s ' + EASE + ';}',
    '.navbar:hover,.navbar:focus-within{background-color:rgba(41,52,26,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);}',
    '.navbar:hover .nav-link,.navbar:focus-within .nav-link{color:#f4f4f2;}',
    /* section reveals — JS adds .cedar-reveal (so no-JS shows everything) */
    '.cedar-reveal{opacity:0;transform:translateY(44px);will-change:opacity,transform;}',
    '.cedar-reveal.cedar-in{opacity:1;transform:none;transition:opacity .8s ' + EASE + ',transform .8s ' + EASE + ';}',
    /* logo marquee */
    '.cedar-marquee{overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent);mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent);}',
    '.cedar-marquee-track{display:flex;width:max-content;align-items:center;animation:cedar-scroll 36s linear infinite;}',
    '.cedar-marquee:hover .cedar-marquee-track{animation-play-state:paused;}',
    '@keyframes cedar-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}',
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
  var showLoader = !RM;                       /* every page (was once-per-session) */
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
   * 3. WORK-GRID HOVER VIDEO (Home) — CMS-driven (per-card data-vimeo-url + bound .card-label text)
   *    No hardcoded card list: clip comes from each card's data-vimeo-url (bind to the
   *    Works `thumbnail-clip` field in Designer); overlay title/desc come from the card's
   *    own CMS-bound .card-label. Add/remove/reorder Works items freely — it stays in sync.
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
    if (path !== '/') return;
    var cards = document.querySelectorAll('.work-grid .work-card');
    if (!cards.length || TOUCH) return; /* mobile: tap navigates, no preview */
    cards.forEach(function (card) {
      var src = vimeoEmbed((card.getAttribute('data-vimeo-url') || '').trim());
      var t = (card.getAttribute('data-title') || '').trim();   /* CMS via data-attr (preferred) ... */
      var d = (card.getAttribute('data-desc') || '').trim();
      if (!t || !d) {                                            /* ... or via bound .card-label captions */
        var labels = card.querySelectorAll('.card-label .caption');
        if (!t && labels[0]) t = labels[0].textContent.trim();
        if (!d && labels[1]) d = labels[1].textContent.trim();
      }
      if (!t && !src) return;                         /* nothing to overlay or play */
      var meta = el('div', 'cedar-card-meta', '');     /* CMS text → textContent (XSS-safe) */
      if (t) { var pt = el('p', 'ccm-t', ''); pt.textContent = t; meta.appendChild(pt); }
      if (d) { var pd = el('p', 'ccm-d', ''); pd.textContent = d; meta.appendChild(pd); }
      card.appendChild(meta);
      var iframe = null, leaveTimer = null;
      card.addEventListener('mouseenter', function () {
        clearTimeout(leaveTimer);
        if (RM || !src) { card.classList.add('cedar-hover'); return; } /* overlay only (or no clip yet) */
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.className = 'cedar-card-video';
          iframe.allow = 'autoplay';
          iframe.title = t + ' preview';
          iframe.src = src;
          var label = card.querySelector('.card-label');
          card.insertBefore(iframe, meta);
          if (label) label.style.zIndex = 3;
        }
        card.classList.add('cedar-hover');
      });
      card.addEventListener('mouseleave', function () {
        card.classList.remove('cedar-hover');
        leaveTimer = setTimeout(function () { if (iframe) { iframe.remove(); iframe = null; } }, 700);
      });
    });

    /* ---- expand-on-hover: hovered card grows to a crop-free 16:9; row peers shrink to a floor ---- */
    if (RM) return;                                            /* reduced motion: overlay only, no reflow */
    var EXP = [].slice.call(cards);
    var container = null, anc = EXP[0].parentElement;
    while (anc) {                                              /* nearest ancestor holding >=2 cards in separate cells */
      var hit = 0, kids = anc.children;
      for (var ci = 0; ci < kids.length; ci++) {
        if (kids[ci].classList && kids[ci].classList.contains('work-card')) hit++;
        else if (kids[ci].querySelector && kids[ci].querySelector('.work-card')) hit++;
      }
      if (hit >= 2) { container = anc; break; }
      anc = anc.parentElement;
    }
    if (!container) return;
    function cellOf(card) { var n = card; while (n && n.parentElement !== container) n = n.parentElement; return n; }
    var cells = [], seenCells = [];
    EXP.forEach(function (card) { var c = cellOf(card); if (c && seenCells.indexOf(c) === -1) { seenCells.push(c); cells.push({ cell: c, card: card }); } });
    if (cells.length < 2) return;
    var ccs = getComputedStyle(container);
    var gap = parseFloat(ccs.columnGap) || parseFloat(ccs.gap) || 0;
    var TW = 'flex-basis .55s ' + EASE;
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'stretch';
    cells.forEach(function (o) { if (o.cell !== o.card) o.card.style.width = '100%'; });   /* card fills its cell so the clip covers */
    var basis = '';
    function setBasis() {                                      /* derive column count from a neutral equal layout, then lock an exact N-up basis */
      var probe = Math.max(160, (cells[0].cell.getBoundingClientRect().width || 240) - 1);
      cells.forEach(function (o) { o.cell.style.transition = 'none'; o.cell.style.boxSizing = 'border-box'; o.cell.style.flex = '1 1 ' + probe + 'px'; });
      var top = cells[0].cell.getBoundingClientRect().top, N = 0;
      cells.forEach(function (o) { if (Math.abs(o.cell.getBoundingClientRect().top - top) < 6) N++; });
      N = Math.max(1, N);
      basis = 'calc((100% - ' + ((N - 1) * gap) + 'px) / ' + N + ')';
      cells.forEach(function (o) { o.cell.style.flex = '0 0 ' + basis; });
      requestAnimationFrame(function () { cells.forEach(function (o) { o.cell.style.transition = TW; }); });
    }
    setBasis();
    function peersOf(o) {
      var top = o.cell.getBoundingClientRect().top;
      return cells.filter(function (p) { return Math.abs(p.cell.getBoundingClientRect().top - top) < 6; });
    }
    function expand(o) {
      var peers = peersOf(o); if (peers.length < 2) return;     /* lone card on its row: leave it */
      var pad = (parseFloat(ccs.paddingLeft) || 0) + (parseFloat(ccs.paddingRight) || 0);
      var avail = container.clientWidth - pad - (peers.length - 1) * gap;
      var rest = o.cell.getBoundingClientRect().width;
      var h = (o.card || o.cell).getBoundingClientRect().height;
      var minW = Math.max(120, rest * 0.5);
      var target = Math.max(rest, Math.min(h * 16 / 9, avail - (peers.length - 1) * minW));
      var others = peers.filter(function (p) { return p !== o; });
      var nW = Math.max(minW, (avail - target) / others.length);
      o.cell.style.flexBasis = target + 'px';
      others.forEach(function (p) { p.cell.style.flexBasis = nW + 'px'; });
    }
    function collapse() { cells.forEach(function (o) { o.cell.style.flex = '0 0 ' + basis; }); }
    cells.forEach(function (o) {
      o.cell.addEventListener('mouseenter', function () { expand(o); });
      o.cell.addEventListener('mouseleave', collapse);
    });
    var rsz;
    window.addEventListener('resize', function () { clearTimeout(rsz); rsz = setTimeout(setBasis, 160); });
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
    var SEL = '.hero-statement,.heading-1,.heading-2,.display-title,.intro-lead,' +
              '.post-card,.work-card,.value-col,.photo-band,.gib-left,.gib-right,' +
              '.center-cta,.bts-feature,.project-preview,.ss-left,.ss-acc,.stack';
    var nodes = [].slice.call(document.querySelectorAll(SEL)).filter(function (n) {
      return !n.closest('.navbar,.site-footer,#cedar-loader,.cedar-marquee'); /* never hide chrome/logos */
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
})();
