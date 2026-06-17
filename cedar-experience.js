/* Cedar Creative — experience layer
 * v1.1.2 · built by Origin · loaded site-wide from the page <head>
 * Modules: loader (every page, waits for hero video) · lenis · work-grid hover video (Home) · about accordion
 *          /work CMS template: situation+results modals · BTS slider · view-other slider (one-up) · inline gallery video
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
    '.work-card{position:relative;}',
    '.cedar-card-video{position:absolute;inset:0;width:100%;height:100%;border:0;opacity:0;transition:opacity .6s ' + EASE + ';pointer-events:none;z-index:1;}',
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
    /* accordion */
    '.acc-body{overflow:hidden;}',
    /* reduced motion: kill transitions */
    '@media (prefers-reduced-motion: reduce){#cedar-loader,.cedar-card-video,.cedar-card-meta,.cedar-modal,.cedar-modal-backdrop,.cedar-vo-track,.cedar-bts-thumb,.cedar-play{transition:none!important;}}'
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
   * 3. WORK-GRID HOVER VIDEO (Home) — config by card order
   * ======================================================= */
  var CARDS = [
    { t: 'Loss for Words', d: 'How do you put a place like Samford University into words? The university commissioned Cedar to explore that feeling.', v: '1119587661', h: 'c79197ce43' },
    { t: 'Little Light', d: 'A glimpse into the incredible work that takes place at Children’s Hospital of Alabama around the clock.', v: '1011036305', h: '' },
    { t: 'City Hardwoods', d: 'Follow the process of making a custom table while hearing the history of the maker, John Graves.', v: '687208192', h: '0ec4e2aea0' },
    { t: 'Apply Boldly', d: 'A campaign for Samford University that dares prospective students to take the leap.', v: '1010453013', h: 'd1c2726c7a' },
    { t: 'Shine Alabama', d: 'A piece to help Alabama communicate, remember, and memorialize the loss experienced across the state in 2020.', v: '687200430', h: 'b17b6873bf' },
    { t: 'Nelson Brothers', d: 'A brand anthem for Nelson Brothers, told through the people who build it every day.', v: '797411531', h: '02f843f906' }
  ];
  onReady(function () {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path !== '/') return;
    var cards = document.querySelectorAll('.work-grid .work-card');
    if (!cards.length || TOUCH) return; /* mobile: tap navigates, no preview */
    cards.forEach(function (card, i) {
      var cfg = CARDS[i];
      if (!cfg) return;
      var meta = el('div', 'cedar-card-meta', '<p class="ccm-t">' + cfg.t + '</p><p class="ccm-d">' + cfg.d + '</p>');
      card.appendChild(meta);
      var iframe = null, leaveTimer = null;
      card.addEventListener('mouseenter', function () {
        clearTimeout(leaveTimer);
        if (RM) { card.classList.add('cedar-hover'); return; } /* overlay only */
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.className = 'cedar-card-video';
          iframe.allow = 'autoplay';
          iframe.title = cfg.t + ' preview';
          iframe.src = 'https://player.vimeo.com/video/' + cfg.v + '?' + (cfg.h ? 'h=' + cfg.h + '&' : '') + 'background=1&autoplay=1&muted=1&loop=1&autopause=0';
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
   * 5. ABOUT ACCORDION — height-animated open/close
   * (supersedes the cedaraccordion inline script)
   * ======================================================= */
  onReady(function () {
    var items = document.querySelectorAll('.acc-item');
    if (!items.length) return;
    function setH(b, open, instant) {
      b.style.display = 'flex';
      var target = open ? b.scrollHeight : 0;
      if (instant || RM) {
        b.style.transition = 'none';
        b.style.height = open ? 'auto' : '0px';
        b.style.opacity = open ? '1' : '0';
        if (!open) b.style.display = 'none';
        return;
      }
      b.style.transition = 'height .6s ' + EASE + ', opacity .6s ' + EASE;
      b.style.height = b.style.height || '0px';
      requestAnimationFrame(function () {
        b.style.height = target + 'px';
        b.style.opacity = open ? '1' : '0';
      });
      b.addEventListener('transitionend', function te(e) {
        if (e.propertyName !== 'height') return;
        b.removeEventListener('transitionend', te);
        if (open) b.style.height = 'auto';
        else b.style.display = 'none';
      });
    }
    var openItem = items[0];
    items.forEach(function (it, i) {
      var b = it.querySelector('.acc-body');
      if (!b) return;
      b.style.rowGap = '';
      setH(b, i === 0, true);
      var h = it.querySelector('.acc-head');
      if (!h) return;
      h.addEventListener('click', function () {
        var isOpen = it === openItem;
        if (openItem) { var ob = openItem.querySelector('.acc-body'); if (ob) { ob.style.height = ob.scrollHeight + 'px'; ob.offsetHeight; setH(ob, false); } }
        if (!isOpen) { setH(b, true); openItem = it; } else { openItem = null; }
      });
    });
  });
})();
