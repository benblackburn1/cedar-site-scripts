/* Cedar Creative — experience layer
 * v1.87.0 · built by Origin · loaded site-wide (footer)
 * v1.87.0 (client edit batch, 2026-08): SIX CHANGES. (1) SMOOTH SCROLL RETURNS, GENTLY — scrolling gets a soft ease in and out again (the premium feel on the typography intros) but the "stick" — the brief stop-and-hold partway down a page — stays gone for good; those were always two separate systems. (2) WORKS SEARCH — a search button sits just left of the filter icon on the home + /work grids, the same size as the filter button; click it and it opens into a search bar (the buttons beside it slide over), and the grid filters live as you type — by project name, project type, or industry, and it composes with the tag filters. A search with no matches shows an empty grid (that's honest feedback), and Esc or clearing the field closes it. (3) /ABOUT NAV — behaves like every other page now: hides as you scroll down, returns the moment you scroll up. (4) /ABOUT ULTRAWIDE — on very wide / curved monitors the big Cedar mark in the opening header no longer clips at the bottom; the lockup now caps its size against the screen's height and centers itself (normal monitors unchanged). (5) FILM ROWS CAN SCROLL SIDEWAYS — the Penske / Unless U ask: set the CMS field bound to data-cedar-layout to the word "scroll" on any gallery item of a project, and that project's film rows (Trailer / Films / Edits, 3+ films) become a horizontal drag-to-scroll row with the "Click and drag" pill — same feel as the team row. The tag existed on Penske but nothing read it yet; now it does. Stills keep their grid. (6) YOUTUBE WORKS IN THE SAME VIDEO FIELD — paste a YouTube link (watch, youtu.be, or Shorts) in the same CMS field you use for Vimeo on gallery items: the card shows its still with the "Watch with sound" pill and opens the film in the same full-screen player. (Only Vimeo films play the muted hover preview — YouTube's embeds are heavier and carry their branding.)
 * v1.86.0 (client): the hero "Play with sound" button now matches the "About Cedar" button's size exactly — same height and padding — so the two pills in the hero read as a matched pair. (Only the standalone play pills change; the little "Watch with sound" pills on the gallery cards keep their own size.)
 * v1.85.0 (client): TWO /ABOUT FIXES. (1) THE TOOLBAR NOW ACTUALLY APPEARS. v1.84 was meant to keep the white toolbar on screen for the whole About page, but it never came in — the script was asking "is the toolbar currently hidden?" using its own internal note rather than looking at the page, and that note was out of date, so it never lifted the toolbar back down. It now simply shows the toolbar outright, no question asked. It arrives as the opening animation ends and stays put all the way down the page. (2) THE TEAM CARDS ARE THE RIGHT SIZE AGAIN. The team photos had collapsed into thin slivers. The script was still sizing them for the old side-scrolling row — forcing a width on every card — while the row itself had been rebuilt in the Designer as a proper wrapping grid, so the two were fighting and the forced width won. The script now checks how the row is actually laid out: if it's the grid you built, it keeps its hands off entirely and your layout decides the size; only a genuine side-scrolling row gets the old sizing. The team now reads as a clean grid of full-size cards, and the drag-to-scroll and the little prev/next arrows switch themselves off automatically because there's nothing to scroll.
 * v1.84.0 (client edit batch): FOUR CHANGES. (1) STANDARD SCROLL — the smooth "glide" is switched off site-wide; the site now scrolls natively, exactly as the browser does out of the box. (Easily reversible if you change your minds later.) (2) ABOUT NAV — on /about the white toolbar now stays visible for the entire page instead of hiding as you scroll down, so nobody loses their way; it comes in as soon as the opening animation finishes and never leaves. (3) FASTER FILM GRIDS — the preview clips on the home page and the /work grid now stream at a capped 540p, plenty for a card-sized loop, so scrolling those pages costs far less bandwidth and the lag should ease; project pages and the full-screen player keep the full-quality files. (4) PROJECT HEADINGS — the situation/results headings keep their rise-in animation, but their size and alignment now come from the Designer instead of the script (the script no longer centers them, and no longer sets the description size on very large monitors — set those in Webflow).
 * v1.83.0 (client): BOTH DRAG-GALLERIES — "Behind the scenes" and "View gallery" — the outer photos no longer look like they sit ON TOP of the ones nearer the middle. They were never actually layered wrong; the problem was that the side photos faded out to become SEE-THROUGH as they moved away from centre, so the photo further out showed THROUGH the one in front of it, which read as the wrong thing being on top. The side photos now stay solid and recede by getting gradually darker instead, and the behind-the-scenes cards picked up the same soft drop shadow the gallery cards already had. Nothing overlaps see-through any more, so both stacks read front-to-back the way they should. Photos still fade out, but only right at the edge as they leave the view.
 * v1.82.0 (client): PROJECT PAGE NAV IS WHITE THE INSTANT THE PAGE LOADS. v1.81 improved this but still worked by CHECKING what was painted behind the nav and reacting to it, so the wordmark and links could still flash dark for a moment while the hero film loaded — and if that check ever fell through (an empty video URL, a slow embed) they stayed dark. Now the page simply knows: whenever the nav sits over a project's hero band, the "Cedar Creative" wordmark, the menu links and the mark are WHITE. Decided before anything renders, so there is no flash and no dependence on how fast the film loads.
 * v1.81.0 (client): TWO NAV FIXES, both in the detector that decides whether the logo and menu links should be dark or light. (1) SCROLL FEEL — scrolling could intermittently "catch" or feel sticky on any page, because that detector was re-checking the page on every single scroll frame and the check is expensive. It now checks at most ~8x per second (and instantly after a big jump), which is invisible to the eye — the colour fade is slower than that anyway — but frees up the scroll. Site-wide smoothness improvement, most noticeable on media-heavy pages. (2) PROJECT PAGE LOAD — on a project page the "Cedar Creative" logo and menu started DARK over the dark hero film and only flipped to white after a small scroll. The detector reads what is painted behind the nav, but the hero film loads a moment after the page does, so the first check happened while that area was still empty. It now re-checks the moment the film appears, so the nav is white from the start.
 * v1.80.0 (client): (1) the /contact outline mark now aligns the bottom of the DRAWN chevrons (not the artwork's invisible padding) to the bottom of the vertical lines beside it. (2) on windows wider than 2200px, the work cards, home cards, and gallery rows are 50vh tall — they scale with the screen instead of fixed heights.
 * v1.79.0 (client): FIX the gallery view showing square, weirdly-cropped cards. The card shapes were read from the page's images at load time, but those are lazy-loaded and often reported no size yet — stills fell back to a SQUARE, and films took the shape of their poster image instead of the video. Now: film cards are always 16:9 (the video's real shape), and still cards re-measure from the actual file as soon as it loads, so every card matches its asset exactly — nothing crops.
 * v1.78.0 (client): (1) the /contact outline mark now keeps its FULL size — 20px from the line on either side — and is bottom-aligned to the lines: shifted vertically so its bottom edge sits exactly on the section's bottom, on any screen (replaces v1.77's shrink-to-fit). (2) the work-card loading wireframe is BACK (removed earlier by request, wanted again) — and smarter: it only disappears once the clip's frames are genuinely rendering, so it never sits over a playing video; the grid clips are muted loops, so nothing is ever missed.
 * v1.77.0 (client): the /contact outline mark sized to fit above the section bottom (superseded by v1.78's bottom-align).
 * v1.76.0 (client): the "What defines us" value cards no longer balloon on big monitors — the card (3:4 aspect) grew to ~834px tall on a 2560 screen around a fixed 200px icon. At 1920+ the card is capped at 680px and the icon scales up to 300px, so the proportions match the laptop feel.
 * v1.75.0 (client): the filter tag-icon square now sizes itself to the text pill's MEASURED height on every machine, instead of a hardcoded 27px. Mac and Windows render the pill's text height differently (Ben's Thunderbolt display showed a ~34px pill next to the 27px icon), so the icon now always matches exactly — any platform, any monitor. The funnel glyph scales with it.
 * v1.74.0 (client): (1) FILM PLAYER LOADER FIXED PROPERLY — the film now opens MUTED under the loader (so you never hear it before you see it); the moment frames are actually rendering it rewinds to the start, turns the sound on, and drops the loader together. You see and hear the film from second zero. (2) LARGE-MONITOR CONSISTENCY SWEEP — the Webflow headings grow at the 1920 breakpoint but the paired text was stranded small: at 1920+ the work-card hover title/description, the project description, gallery section labels, film-card captions, coverflow captions, watch pills, hero tag, and slider arrows all scale up ~1.2x to keep the laptop proportions; grid rows get proportionally taller (work/home cards 480, gallery rows 700), coverflow cards larger (860 cap), and the film player wider (1900 cap). Filter pills untouched — they already match at every width (the mismatch seen on the monitor was a stale cache; hard-refresh there).
 * v1.73.0 (client): three touches. (1) the /about team slider now shows 4.5 people by default (a half card peeks to signal there are more). (2) the poster card in the stills grid drops its 10px padding — the poster fills the portrait card edge-to-edge, still uncropped. (3) in the "View gallery" coverflow, a portrait poster's card now hugs the poster's shape instead of sitting in a wide white card with empty space on the sides.
 * v1.72.0 (client): poster fit card fixes — the poster image now loads eagerly and fits (contain) reliably (it was still cover-cropping), and the card defaults to a portrait shape until the image's real proportions are known, so it never briefly appears as a wide landscape card.
 * v1.71.0 (client): the "Poster / Full Image" category now shows the poster INSIDE the stills grid as a portrait card — scaled to fit the fixed row height with 10px padding, uncropped, on a transparent background — instead of a full-width block. Its row-mate fills the rest of the row. Great for a portrait poster (e.g. Breakneck) that shouldn't be cropped. (Works whether the category is named "Poster / Full Image" or shortened to "Poster".)
 * v1.70.0 (client): the /about team scroller arrows no longer clip at the top when they lift on hover (added top room), and clicking one no longer leaves a blue focus ring (keyboard focus still shows one for accessibility).
 * v1.69.0 (client): the outtake rollover now respects the scale you set on the bio-outtake image in the Designer (e.g. 120%/130% to crop out the circular crop in the source photo) — the code no longer forces it to 100%. It's centered and the card crops the overflow.
 * v1.68.0 (client): two /about team touches. (1) the blooper/outtake rollover is now live — on hover a person's card cross-fades from their headshot to their outtake photo (the img.bio-outtake you bound); touch keeps the headshot. (2) the team scroller arrows use a light charcoal background instead of the warm grey that read green over the section.
 * v1.67.0 (client): clicking "Watch with sound" on a gallery film card now opens the film DIRECTLY in the sound player — no stop at the gallery view first. Clicking anywhere else on the card still opens the gallery view at that item, and the gallery view's own play flow is unchanged.
 * v1.66.0 (client): NEW module 12.6 — HERO FEATURE LABEL. The autoplaying hero film on a project page now shows a small glass tag bottom-left naming what it is (e.g. "Trailer"), read from the Works "Feature Label" CMS field. Needs a one-time Designer bind: custom attribute data-cedar-feature-label on the hero band, bound to Feature Label (same as data-cedar-crop). Blank field = no tag.
 * v1.65.0 (client): FUTURE-PROOF CATEGORIES — Cedar can now add new options to the Gallery Items "Category" dropdown in the CMS and they just work: any category the script doesn't already know gets its own labeled section automatically (named exactly like the option), placed after Trailer/Films/Edits/Poster and above Stills. "Still" always means the grid; "Poster / Full Image" keeps its full-width uncropped treatment.
 * v1.64.0 (client): the stills grid now gets its own "Stills" section header when labeled film sections sit above it (a headerless grid under labeled sections read as unfinished). Pages with no categorized items are unchanged — no header appears.
 * v1.63.0 (client): film-card description capped at 50% of the card width so it never runs under the "Watch with sound" pill bottom-right.
 * v1.62.0 (client): NEW module 12.5 — FILM SECTIONS on project pages, driven by the Gallery Items "Category" field (bind data-cedar-category on the gallery card, done 2026-07-23). Cards tagged Trailer / Film / Edit are pulled out of the stills grid into their own labeled sections above it (order: Trailer, Films, Edits, Poster, then the stills), laid out in the same gallery style; each film card shows its Title + Description on hover (always visible on touch). "Poster / Full Image" renders as a full-width uncropped image. Untagged or Still items are unchanged, and projects with no tagged items are untouched.
 * v1.61.0 (client): the /about value icons (Quality/Vision/Sustainability) now animate BACKWARDS first on hover — instead of the finished icon jumping to blank and re-drawing, it reverse-builds (un-draws) from the full icon, then rebuilds, and keeps looping while you hover. Smoother entry, no jarring jump to nothing.
 * v1.60.0 (client): NEW module 37 — the "Our Team" bios on /about sit in a horizontal scroller that runs off the right edge, so it wasn't obvious there were more people. Added prev/next arrows (same buttons as the View Similar Projects slider) above the row on the right; each click scrolls one card. They dim at each end and hide entirely if everyone already fits.
 * v1.59.0 (client): two fixes to the full-screen film player (lightbox). (1) you no longer hear the film before you can see it — the loading mark now stays up until the video is genuinely PLAYING (first frame rendered), so the picture and the sound arrive together instead of the audio starting 2-3 seconds before the frame appears. (2) the player opens LARGER by default (wider cap + taller, less letterbox margin around it) so films are watched as big as possible without needing fullscreen.
 * v1.58.0 (client): three gallery/listing fixes. (1) the homepage projects gallery now shows 2-3 projects per row at "work page scale" (asymmetric 3-up on a wide window, 2-up on a narrow one), instead of the old rhythm that left most cards full-width one-per-row. (2) the filter "tag" icon square is shrunk to match the height of the text filter pill next to it (was a taller 32x33 square). (3) the individual project thumbnails no longer show the spinning wireframe loading mark while their clip buffers — that mark now lives only in the full-screen video player.
 * v1.57.0 (client): the "View gallery" coverflow gets left/right arrows (bottom centre, same buttons as the View Similar Projects slider) that step one card at a time; dragging still works and cancels the arrow glide.
 * v1.56.0 (client): fix the gallery card description getting cut off — the 10px bottom space is now a margin, not padding (padding sat inside the 5-line clamp box and let a clipped sixth line peek through). The description clamps cleanly at five lines with an ellipsis.
 * v1.55.0 (client): clicking a gallery item (photo or film) now opens the "View gallery" coverflow ON that item, so you see its card + title/description straight away. From there the play button opens the film with sound (the direct click no longer jumps straight to the video player). The hero "Watch with sound" pills are unchanged.
 * v1.54.0 (client): gallery card description tightened to 1.1 line-height with 10px of padding below it.
 * v1.53.0 (client): (1) the /post partner cards ("We partner with organizations that refuse to settle.") now swipe horizontally on a phone (native touch scroll, one card at a time with a peek of the next); scoped to that row so the other stacked mobile rows are untouched. (2) work-grid cards now play their muted clip on mobile when they scroll into view and stop when they scroll away (no hover on touch) — about one or two streams live at a time. (3) FIX the "View gallery" caption not showing — the Title/Description are now read from a class OR a custom attribute (gallery-title / gallery-description), whichever the Designer bound, and Webflow's default placeholder text is ignored.
 * v1.52.0 (client): refine the "View gallery" card to the approved look — the asset now sits on a white MAT (even white border/padding inside the card, rounded asset corners), with the title + description below. An item with no title/description is simply the matted asset (a clean white-bordered card), which is fine.
 * v1.51.0 (client): the "View gallery" coverflow (module 36) now shows each item as a WHITE CARD — the asset on top, with the CMS Title and Description below it. Cards are fixed width with the centred one large and the side cards smaller (unchanged feel); the media height follows each asset's natural aspect so nothing crops. The caption reads .gallery-title / .gallery-description, so bind those two CMS fields into the gallery card in the Designer (give them those classes) for the text to appear — no caption until then.
 * v1.50.0 (client): two mobile fixes. (1) removed the gap above the mobile nav — the navbar carried a 10px top margin on a fixed element, so a strip showed above it; it now sits flush to the top on phones. (2) the "View gallery" coverflow side assets recede more — the left/right cards were only scaled to ~0.82 (barely smaller than the centre); the falloff is now steeper so they read clearly smaller and the centred asset stands out.
 * v1.49.0 (client): MOBILE gallery grid no longer crops. On phones each gallery card was forced to full-width x 50vh with the media cover-cropped, so a wide still (e.g. the "Unless U got Talent" graphic) lost its sides. Now mobile cards keep full width but take AUTO height following the media's own aspect — films stay 16:9, stills use their natural ratio (re-laid-out once a slow image decodes) — so nothing is cropped. Desktop grid unchanged.
 * v1.48.0 (client): NEW module 36 — a fixed "View gallery" button on project pages. It fades in whenever the project's gallery section is on screen (top-right on desktop, bottom-right on mobile) and opens the gallery assets in a drag-coverflow with the same feel as the BTS gallery. The assets show UNCROPPED — full frames, ignoring the CMS Crop: images are rebuilt from source and every card is sized to its media's own aspect, so nothing is cropped or letterboxed. Video cards show their poster with a play glyph; a tap on the centered video opens the full-controls lightbox (module 14) with sound. Complements the BTS "View the gallery" and the per-video "Watch with sound" — there was no gallery-section view before. No-op on any page without a .gallery-card.
 * v1.47.0 (client): FIX the project-hero crop shoving the film into a corner (v1.46 regression). The hero embed nests the iframe in aspect-boxed wrappers that anchor it off-centre, so v1.46's "zoom in place" pivoted off-centre. Module 34 now collapses every wrapper between the iframe and the band (same technique the mobile hero uses), then sizes the iframe to cover the band × the crop factor, centred — so the zoom is symmetric and the film fills the band. Grid/gallery/mobile crop unchanged.
 * v1.46.0 (client): crop refinements. (1) the click-to-play LIGHTBOX is no longer cropped — it's the full-frame "watch it properly" view, and cropping zoomed the Vimeo player controls. (2) the project-page HERO crop is hardened for the nested embed (video-card-item → wrapper → container → iframe): it now zooms the film IN PLACE via a transform (no re-centering against the wrong container), the band clips the overflow, and the mobile hero picks up the same crop through module 25. Tag the hero's band or its embed with data-cedar-crop.
 * v1.45.0 (client): CMS-DRIVEN CROP — replaces v1.44's hardcoded data-cedar-fill with a per-item "Crop" dropdown (None/5/10/15/20%) that follows a film/still EVERYWHERE it renders. Add a Crop option field to Works (fixes its grid thumbnail + hero at once) and Gallery Items (fixes the gallery), bind data-cedar-crop to it on the item container, and dial each asset until its black bars vanish. The % is trimmed off each edge via a uniform zoom (no stretching); applied to the grid hover clips (module 3), gallery films (13), the project hero band (34), the lightbox (14), and stills (module 35, .img-cover). NO-OP until a Crop value is set — nothing changes on untagged items.
 * v1.44.0 (client): NEW module 34 — letterbox crop for cinemascope films. A film wider than 16:9 (e.g. the Breakneck hero) is letterboxed by Vimeo inside its 16:9 player, showing black bars top + bottom of the card. Tag the video's band with a data-cedar-fill custom attribute (value = the film's aspect ratio, e.g. 2.4; blank defaults to 2.4) and the script cover-fills the film to the band's height so the picture fills the frame and the bars overflow — the card keeps its own shape. Tune the number in Webflow until the bars vanish, no redeploy. NO-OP until a band is tagged.
 * v1.43.0 (client): dragging the /about team cards to scroll no longer grabs the photo as a native browser drag ghost — the bio-image (and every image inside a drag-scroll row) is now non-draggable (-webkit-user-drag:none + user-select:none), with a dragstart preventDefault on the team row for Firefox.
 * v1.42.0 (client): removed the bare "All Work" pill's hover fill — the transparent-at-rest pill no longer fills on hover (it stays at its rest state). The script now applies no hover effect at all to .btn-pill (the lift is Ben's own Webflow interaction).
 * v1.41.0 (client): two fixes. (1) /about "Our Team" cards were squishing to fit the viewport instead of holding their width and scrolling — the Webflow .bio-card is flex-basis:25% but its flex-shrink was left at the default 1, so 7 cards crammed into the 100vw row; pinned flex-shrink:0 (desktop) so they keep their width, the row overflows, and module 33's drag-to-scroll + "Click and drag" pill finally arms (it only engages when the row actually overflows). (2) The "Play with sound" pill + lightbox is now extensible: tag ANY video container with a data-cedar-watch custom attribute (e.g. the /post Cedar Suite film) and it gets the same glass pill and click-to-open player as the hero — value can be a Vimeo URL/id or left blank to read the container's own embed; add data-cedar-watch-click to make the whole film clickable.
 * v1.40.0 (client): STALL WATCHDOG on the work-grid hover clips — rarely a preloaded clip loads to a dead/black frame and never starts (a transient Vimeo load failure on one clip in the batch). Module 3 now watches each clip once it begins loading: if the Vimeo player never reports coming up within ~6.5s (no 'ready'/'play'), or Vimeo posts an 'error', the clip is reloaded cache-busted, up to twice. A clip that DID initialize but is only slow to buffer gets one extra window before any reload, and reloads are jittered, so good-but-slow connections aren't churned and a coincidental batch can't re-storm Vimeo. Silent and self-healing — no visual change when clips load fine.
 * v1.39.0 (client): the white wireframe LOADING MARK (lightbox) now also shows on the work-grid HOVER clips — module 3 gained one shared spinner (same chevron, WebGL + SVG fallback) that moves into the hovered card's black .cedar-cardvid and shows until that clip reports playing; since the grid PRELOADS most clips, it only appears when a card is genuinely still buffering. Card iframes subscribe to Vimeo 'play'; stopVid resets the flag so a re-buffered clip shows it again.
 * v1.38.0 (client): the hero/gallery "Play/Watch with sound" pill's play icon was the U+25B6 glyph (&#9654;), which iOS/mobile rendered as the colour emoji ▶️ — swapped for an inline SVG triangle in currentColor (.cedar-play-ico), so it's a clean white play icon on every browser
 * v1.37.0 (client): NEW module 33 — the /about "Our Team" horizontal .bio-row gets the drag-to-scroll + "Click and drag" cursor pill (same treatment as the post-partners row, module 24); arms only when the team cards overflow the row, hides the scrollbar, suppresses the click at drag-release; touch keeps native swipe. Coexists with the module-32 hover reveal.
 * v1.36.0 (client): HOME work-grid filters from ALL works — module 3 gains a HOME cap: when the homepage Works Collection List is opened past 6 items (Ben sets Show=all, sorted by Homepage Feature Order; filter removed), the grid shows only the first 6 at rest and the first 6 MATCHING on filter (so "Brand Film" now returns 6 brand films, not just the 1 that was in the featured 6), with all filter chips built from the full set. Each shown card takes one of the 6 design SLOT widths by position so the 2-up rhythm holds whichever 6 show; cross-fade on filter. NO-OP while the list is still limited to 6 (safe to ship before Ben opens it).
 * v1.35.0 (client): footer CTA copy above the "Say hello" pill → "Let's make something that lasts." (was the Webflow tagline)
 * v1.34.0 (client edit batch): scroll STATIONS turned OFF site-wide (module 27 early-returns) — only Lenis's subtle smooth scroll remains · revealed-after-scroll NAV gets a solid WHITE background + charcoal ink (module 9 toggles .cedar-nav-solid once y>90 and the nav is shown; transparent over the hero at the very top) · LOADER now holds until the text finishes typing + .2s (finish() polls typedAt+200ms & LOADER_MIN, with a ceiling so a stalled typewriter can't wedge it) · LOADER line 2 is now a RANDOM saying — reads .loader-saying / [data-loader-saying] elements (Ben binds a hidden "Loading Screen Sayings" Collection List) and picks one per page load; falls back to "Transformative films & inspiring ideas" until the list exists · NEW module 32: /about "Our Team" bio cards hide the name+bio at rest and fade them in on hover, with a dark bottom gradient rising on the image (person cards only; touch/RM keep the info visible)
 * v1.33.0 (client): marquee logos halved (height 100→50px) after the trim/normalize pass made them consistent; the gap only drops 20% (100→80px, module 8) so the smaller logos read more spaced out
 * v1.32.0 (client edit batch): filter pills keep their YELLOW on hover (Ben's Webflow :hover tinted them light-green, read as "no background") · the nav MARK stays CHARCOAL on /about (module 11 tags the navbar .cedar-on-about; the light-green-over-light rule is scoped around it) · post photo COVER slider: a drag now snaps you ONTO the next photo (round scrollLeft to the nearest band-width on pointerup — no more stuck between two) · post horizontal hairlines + accordion separators forced to FULL opacity to match the vertical lines (were #9fb18f80 / 50%); footer vertical divider full opacity too (was 32%) · /work drops the scroll STATIONS (it is one big work grid — the stations kept yanking back up to the title); Lenis smooth scroll stays on there, only the section-braking is off · "Grown in Birmingham" (/about) reveals as soon as its column top enters the viewport instead of off its own top (was landing after you had scrolled past) · NEW video-loading mark: the click-to-play lightbox shows a small white-on-black rotating 3D wireframe chevron (the loader's brand mark, one reused WebGL context; CSS-3D SVG fallback) over the black stage until Vimeo reports the film is playing
 * v1.31.0 (client feel note on the stations): the catch could fire AFTER the glide had carried past a section top and pull the user BACK — root cause was choosing the station nearest a projected rest with a backward-nudge allowance. Reworked: (1) Lenis itself is slower and heavier (duration 1.1→1.55, easeOutCubic→easeOutExpo's long tail, wheelMultiplier 0.9) so a gesture has the runway to slow into a section rather than overshoot it; (2) module 27 reads Lenis's true destination (targetScroll, no projection guesswork) the moment wheel input idles and takes over EARLY — while still short of the platform — braking into the furthest station the glide would pass, or easing forward into the next one within FORWARD_PULL (1vh); a station behind the current position is never a target (the train does not reverse — backward grabs eliminated); at speed the brake duration shortens so the velocity-matched entry stays monotonic (firm brake), at a crawl it stretches (long settle)
 * v1.30.0 (client edits, round 2): SCROLL STATIONS — module 27 reworked from fling-assist to the model (client: "train coming to a stop at a station", site-wide): every gesture, once the hand leaves the wheel, brakes into the best section top in the direction of travel via the velocity-matched Hermite (free glide while input is live; work grids/galleries still never stations; tall sections rest free past MAX_PULL; document end = the footer stop; a wheel tick mid-brake hands control straight back) · /post photo band above "Suite Specs" now runs the full CEDAR_POST_PHOTOS set as a full-screen slider — module 29 grew a COVER mode (one full-bleed photo at a time, band-width slides, roomier 4.6s/0.95s beat, no hover-pause, touch scroll-snap) and feeds the band itself from the already-uploaded site assets (responsive srcset; photo-1 stays slide 1; strip the data-cedar-slider tag to revert) · about intro hand-off at Lottie f85 instead of comp end — the baked tail held the finished lockup ~0.9s real (motion ends f70 of 104), client wanted ~0.5s of that gone; a ~0.4s beat remains (CUT tunable)
 * v1.29.1 (Ben's live review of v1.29.0): marquee overlap fixed — the logo SLOTS kept Webflow's fixed widths so resized images piled up; slots now hug their image, and logos come down 160→100px (160 read oversized on the band) · value icons no longer depend on the card copy naming them — match order is data-icon/class tokens on the embed or card → card text → leftover cards get the unused icons in order (the homepage cards only say "Vision") · work-grid hover clips RE-COVER on every width change (relock / expand / collapse) — a filtered-down row grows one card far past 16:9 and the mount-time size left side bars
 * v1.29.0 (client edit batch): buttons un-glitched — reveal modules (7/10) now STRIP their classes once landed (the lingering transform transition rubber-banded Ben's native GSAP hovers; footer CTA's transform transition dropped too) · project modal rebound to the renamed "Read More" pill (old labels still match) · modals wheel-scroll under Lenis (data-lenis-prevent; max-height 86vh was already there but Lenis ate the wheel) · settle-assist retuned for the Lenis feel — the catch now arms ONLY on a decaying fling after wheel input stops (the old any-slow-frame trigger hijacked deliberate slow scrolls, the "jerky scrolling up" complaint) and hands off through a velocity-matched ease (no kink at takeover) · sections holding work grids/galleries excluded from snap targets · /about nav now hides on scroll-down past the intro header (floor logic pinned it open) · sticky filter row drops 10px below the nav whenever the nav is shown · nav MARK light green (#9fb18f) over light backgrounds (wordmark/links stay charcoal) · hover/gallery video iframes sized to true 16:9 width-first cover (incl. the legacy embed path — no more pillarboxed cards) · marquee logos standardized 160px + 100px gap + constant slow px/s speed · about intro ~0.5s faster (lottie 1.25x) · "Reply within 24 hours" light green · NEW module 29: shared photo slider (.photo-slider / [data-cedar-slider] container → drag + auto-advance filmstrip, about + post; dormant until Ben places the photos)
 * v1.28.0: scroll settle-assist reworked — catches the dying Lenis glide mid-motion (momentum projection + SOFT_V handoff) instead of tweening after full rest; capture radius .6→.26 viewport; never pulls backward beyond a .1vh nudge; distance-scaled ease-out duration (constant 0.95s was the mechanical feel)
 * v1.27.0: contact form survives submission (form stays visible + resets; success/"try again" notices sit BELOW it, site-styled hairline cards, not Webflow's floating grey box) · home hero gets a "Play with sound" glass pill (bottom-right, opens the reel in the module-14 lightbox; pill-only — the hero overlay keeps its own About CTA click)
 * v1.26.0: about icons clip KILLED at the source (svg overflow:visible + lottie's baked artboard clip-path stripped — scale alone shrank the clip with the art) · first project modal rebound to Ben's "More Information" label (heading mirrors the pill) and now lists the project's Awards (from the hidden on-page collection list; items render once the Name field is bound inside the Designer's collection item)
 * v1.25.1: page-wrap overflow-x:clip (its hidden/auto overflow was silently killing position:sticky for every descendant — the filter row now actually sticks)
 * v1.25.0: post partners phantom space fixed (.post-card's 3/4 aspect-ratio neutralized on the full-width container) · filter row sticky at top+20px · hero band + gallery video cards click-to-lightbox with "watch" pills · View Other: excludes the current project, filters by industry once Ben binds it, and rotates per-project so it never always leads with the same film
 * v1.24.1: icon loop gets a clean blank beat before each redraw · closed accordion items drop the body's orphaned padding · snap on all pages, stronger hold (range .38→.6, section filter 45vh→30vh)
 * v1.24.0 (client review batch B — FEEL EXPERIMENTS): scroll snap-on-settle via Lenis (opt-in pages: / and /contact; SNAP_RANGE/DUR tunable) · work-grid clips preload + play muted as cards near the viewport, hover just fades them in (zero start-up gap; streams stop 1.5 screens away)
 * v1.23.0 (client review batch A): expand animation lands together (delay removed — equal-curve transitions keep the row sum constant) · /work grid 3-wide at 420px (home stays 2-up) · hero "Watch with sound" button opens the lightbox w/ controls · work-card hover title more prominent · about icons pulled in 8% so edge strokes never clip
 * v1.22.2: drag-scroll rows (info-cards / post partners) are desktop-only — mobile keeps the native stacked layout
 * v1.22.1: loader 3D mark rebuilt from the real brand path — the chamfered corners at each chevron's top and inner peak now render (the old trace had pointed apexes)
 * v1.22.0: mobile work-grid fix (desktop first/last/nth width-pattern rules leak into the column layout as HEIGHT rules and crush cards — neutralized, uniform full-width cards at Ben's breakpoint heights) · suite modal → Cedar Green field w/ light-green type + real side padding + wider · footer links ease 5px right on hover
 * v1.21.2: footer — Say hello radius matches site pills (12px); copyright moves below the lockup (bottom-left) with "Built by Origin" bottom-right → originbrand.io, 20px below the logo
 * v1.21.1: band fix — the embed wrappers anchored the iframe low in the band (charcoal gap above the video); every ancestor between iframe and band now fills the 50vh box before the iframe centers · info-card icon = full content width at its natural aspect
 * v1.21.0: mobile hero band video hard-sized to 50vh (JS, beats the embed's own styles) · ALL project-page type heads centered (results too) · home info-card icons repainted via currentColor mask (pull the card text color, e.g. light green on Cedar Green)
 * v1.20.1: logo marquee is CMS-aware — a Collection List (Client Logos) dropped inside .partner-logos supersedes the static images; its items become the marquee slots
 * v1.20.0: mobile pass + post/footer refinements — mobile card labels title-only · /work grid cycles the 3 variable rows past row 2 · filter works on touch (tap to open, simple reflow) · project mobile: 50vh hero band cover + 50vh full-width gallery cards + 1.5x coverflow center · situation heads: line-by-line on desktop (chars on mobile), opening centered · suite modal yellow/charcoal, centered, no scrollbars · Book pills keep their fill at rest · nav/footer logos → home · footer v2 (tagline + Say hello pill left, links aligned to the C of Creative) · Quality/Sustainability icons -10% on mobile · post partners row drag-scrolls with the pill when it overflows
 * v1.19.x: /post suite booking modals (moves the hidden contact form in, prefills Suite + Interest) · about icon lotties resequenced per piece w/ clean full-draw segments · contact cascade word-spacing fix + ~2s · home info-cards >4 → drag-scroll pill
 * Modules: loader (every page, waits for hero video) · lenis · work-grid hover video + expand-on-hover + yellow filter panel (Home + /work; label reveal, black-backed clip, debounced hover, in-row reflow, faceted Project Type/Industry filter with FLIP reflow) · accordion (grid-rows + animated +/- icon)
 *          /work CMS template: situation+results modals · BTS auto-cycle (next thumb slides left into the feature, infinite, no scrollbar) + drag-coverflow gallery modal w/ "click and drag" cursor pill · view-other slider (one-up) · inline gallery video
 *          mobile menu (≤767px): mark left + "Menu" right; warm-grey overlay fills in, pages 36px bottom-left · footer rebuilt to the brand-guidelines cover layout (Cedar Green field, hairline columns, giant light-green lockup)
 *          line draw-in (site-wide hairline rules → stroked SVGs, draw on scroll-in)
 *          nav: masked logo+mark (ink follows the background) + hover blur-veil + scroll hide/show + dark/light ink probe · section reveals (fade+rise on scroll-in) · about "what defines us" cards cascade in from the right · partner-logo marquee
 *          about intro (/about only): yellow-field Lottie logo reveal → mark + "Cedar" fly out of the lockup and settle into the header layout (mark bottom-left, big "Cedar" bottom-right; "mark"/"Cedar" embed placeholders filled with the charcoal brand SVGs at the official lockup ratio); nav hidden through the header, animates in once scrolled past it
 *          gallery (project /work pages): cards laid 2-up at a fixed height, cycling the home grid's 3 asymmetric width patterns; data-vimeo-url background video (home-grid parity, legacy embed fallback); click a video card → 16:9 lightbox modal (full controls, close via X/backdrop/Esc); fixed "View gallery" button (module 36) fades in over the gallery section and opens the assets uncropped in a drag-coverflow
 *          contact (/contact): outline-mark Lottie (full container width) traces in once on scroll and holds · "Tell us about your project." heading cascades in per-character · about value icons (/about): Quality/Vision/Sustainability Lotties (200px, centered) — hover = instant draw-in, hold 1s, undraw, loop; hover-out settles on the finished icon
 *          /work heading ("Work / that / endures.") converges onto one shared baseline as you scroll — scrubbed, damped, finishes within the first ~320px of scroll
 * Scroll-in motion (lines + reveals) is gated behind the loader (cedar:ready) so it isn't spent off-screen.
 * Every module is page-aware and honors prefers-reduced-motion.
 */
(function () {
  'use strict';

  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TOUCH = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;
  var EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
  /* CROP (client): a "Crop" CMS dropdown (None/5/10/15/20%) bound to a data-cedar-crop attribute lets a
     film or still be zoom-cropped to hide letterbox/pillarbox bars. The value is a % trimmed off EACH edge;
     since cropping a video without stretching means a uniform zoom, Z = 1/(1 - 2·n/100). Returns 1 (no-op)
     when unset — so every hook below leaves the element untouched unless a tagged ancestor opts in. */
  function cropZoom(host) { var n = host ? (parseFloat(host.getAttribute('data-cedar-crop')) || 0) : 0; if (n > 45) n = 45; return n > 0 ? 1 / (1 - 2 * n / 100) : 1; }
  function cropZoomNear(el) { return cropZoom(el && el.closest ? el.closest('[data-cedar-crop]') : null); }
  var CHARCOAL = '#29221b';
  var GREY = '#dddad7';
  var YELLOW = '#ffd900';
  /* play triangle as an SVG (currentColor) — the old &#9654; glyph rendered as the colour emoji ▶️ on iOS/mobile */
  var PLAY_SVG = '<svg class="cedar-play-ico" viewBox="0 0 10 12" aria-hidden="true"><path fill="currentColor" d="M0 0L10 6L0 12Z"/></svg>';

  /* ---------- shared stylesheet ---------- */
  var css = [
    /* loader */
    '#cedar-loader{position:fixed;inset:0;z-index:99999;background:' + GREY + ';display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:40px 20px;transition:opacity .6s ' + EASE + ';}',
    '#cedar-loader.is-done{opacity:0;pointer-events:none;}',
    '#cedar-loader .cl-top,#cedar-loader .cl-bottom{font-size:11px;letter-spacing:1.1px;color:' + CHARCOAL + ';text-transform:uppercase;text-align:center;line-height:1.6;min-height:36px;}',
    '#cedar-loader .cl-stage{flex:1;width:100%;max-width:560px;min-height:0;}',
    '#cedar-loader canvas{display:block;width:100%;height:100%;}',
    /* buttons — hover LIFT is now Ben's native Webflow interaction (GSAP inline transforms); our CSS transition on
       transform fought it (down-up-down rubber-band), so we only transition background-color here. The bare
       "All Work" pill (.btn-pill, no .white/.dark) is transparent at rest with NO hover fill (client 2026-07-14). */
    '.btn-pill{transition:background-color .35s ' + EASE + ';}',
    '.btn-pill:not(.white):not(.dark):not(.light-green){background-color:transparent;}',   /* .light-green pills (post "Book …") keep their own fill at rest */
    /* work-grid hover */
    '.work-card{position:relative;overflow:hidden;}',
    '.cedar-card-video{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:cover;opacity:0;transition:opacity .6s ' + EASE + ';pointer-events:none;z-index:1;}',
    '.work-card.cedar-hover .cedar-card-video{opacity:1;}',
    /* hover clip layer: black fill backs a fixed, oversized, centered iframe (clipped by the card) so letterboxed / non-covering films get a clean black backdrop; never reflows while the card width animates */
    '.cedar-cardvid{position:absolute;inset:0;background:#000;opacity:0;transition:opacity .55s ' + EASE + ';pointer-events:none;overflow:hidden;}',
    '.cedar-cardvid iframe{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;border:0;background:#000;}',
    '.work-card.cedar-hover .cedar-cardvid{opacity:1;}',
    '.work-card.cedar-playing .cedar-cardvid{opacity:1;}',   /* mobile: the clip plays when the card scrolls into view (module 3 touch path) */
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
    '.filter-pill.icon{width:27px!important;height:27px!important;min-height:0!important;padding:0!important;display:inline-flex!important;align-items:center;justify-content:center;}',   /* client (v1.58): shrink the tag-icon square to match the text pill height (was 32x33) */
    '.filter-pill.icon svg{width:14px!important;height:14px!important;}',
    /* works SEARCH (v1.87, client) — a square icon button LEFT of the filter icon (same measured size, via
       syncIcon) that expands in place into a live search bar; the pills after it shift over as it grows */
    '.cedar-search{overflow:hidden;cursor:pointer;gap:0;transition:width .5s ' + EASE + ';}',
    '.cedar-search input{flex:1 1 auto;min-width:0;width:0;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;font-family:inherit;font-size:12px;color:inherit;opacity:0;padding:0;margin:0;transition:opacity .25s ' + EASE + ';}',
    '.cedar-search.is-open{justify-content:flex-start!important;padding:0 12px!important;cursor:text;}',
    '.cedar-search.is-open svg{margin-right:8px;}',
    '.cedar-search.is-open input{opacity:1;width:auto;}',
    '.cedar-search input::placeholder{color:currentColor;opacity:.45;}',
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
    /* awards list inside the first project modal (source: the hidden on-page awards collection list) */
    '.cedar-modal .cm-awards-label{font-size:10.5px;letter-spacing:1.2px;text-transform:uppercase;opacity:.55;margin:22px 0 8px;text-align:left;}',
    '.cedar-modal ul.cm-awards{list-style:none;margin:0;padding:0;text-align:left;}',
    '.cedar-modal ul.cm-awards li{display:flex;align-items:center;gap:10px;font-size:13px;line-height:1.45;padding:9px 0;border-top:1px solid rgba(41,34,27,.12);}',
    '.cedar-modal ul.cm-awards li:last-child{border-bottom:1px solid rgba(41,34,27,.12);}',
    '.cedar-modal ul.cm-awards img{width:30px;height:30px;object-fit:contain;flex:0 0 auto;}',
    /* the on-page awards collection list is modal fodder — never shown in the page flow */
    '.work-situation .w-dyn-list{display:none!important;}',
    /* contact form notices (module 28): success / fail sit under the still-visible form, site-styled
       (replaces Webflow\'s grey centered box) */
    '.form-wrap .cedar-form-note{background:transparent!important;border:1px solid rgba(41,34,27,.28);border-radius:12px;padding:14px 18px;margin-top:18px;text-align:left!important;font-size:13px;line-height:1.5;color:inherit;}',
    '.cedar-modal .cm-close{position:absolute;top:14px;right:14px;width:26px;height:26px;cursor:pointer;background:none;border:0;padding:0;line-height:1;font-size:20px;color:' + CHARCOAL + ';opacity:.6;}',
    '.cedar-modal .cm-close:hover{opacity:1;}',
    'body.cedar-modal-open{overflow:hidden;}',
    /* inline gallery video */
    '.cedar-play{position:absolute;inset:0;margin:auto;width:54px;height:54px;border-radius:50%;background:rgba(244,244,242,.88);border:0;cursor:pointer;z-index:3;font-size:15px;color:' + CHARCOAL + ';display:flex;align-items:center;justify-content:center;transition:transform .3s ' + EASE + ';}',
    '.cedar-play:hover{transform:scale(1.08);}',
    /* BTS auto-cycle — strip clips (no scrollbar), row slides via transform, thumbs quiet until hover */
    '.cedar-bts-thumb{cursor:pointer;transition:opacity .3s ' + EASE + ';opacity:.85;}',
    '.cedar-bts-thumb:hover{opacity:1;}',
    '.bts-images .w-dyn-list{overflow:hidden;width:100%;}',
    '.bts-images .w-dyn-items{overflow:visible!important;flex-wrap:nowrap!important;scrollbar-width:none;-ms-overflow-style:none;will-change:transform;}',
    '.bts-images .w-dyn-items::-webkit-scrollbar{display:none;}',
    /* BTS gallery — infinite drag coverflow: center card large, neighbours shrink + fade; cursor morphs into a "click and drag" pill */
    '.cedar-cf{position:fixed;inset:0;z-index:100000;background:rgba(20,15,10,.78);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);opacity:0;pointer-events:none;transition:opacity .35s ' + EASE + ';}',
    '.cedar-cf.is-open{opacity:1;pointer-events:auto;}',
    '.cedar-cf-stage{position:absolute;inset:0;overflow:hidden;cursor:none;touch-action:pan-y;}',
    '.cedar-cf-card{position:absolute;left:50%;top:50%;width:min(46vw,720px);aspect-ratio:105/100;border-radius:12px;overflow:hidden;will-change:transform,opacity;user-select:none;-webkit-user-select:none;background:#000;box-shadow:0 24px 60px rgba(0,0,0,.45);}',
    '.cedar-cf-card img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;}',
    /* v1.83: depth scrim. The side cards used to recede by going TRANSPARENT, which let the card
       further out show through the one in front of it — reading as though the outermost images sat
       on top. They now stay opaque and recede by being DIMMED instead; --cf-dim is set per card in
       cfRender() from its distance off centre. */
    '.cedar-cf-card::after{content:"";position:absolute;inset:0;border-radius:inherit;background:#0d0a07;opacity:var(--cf-dim,0);pointer-events:none;}',
    '.cedar-cf .cedar-lb-close{z-index:100002;cursor:pointer;}',
    '.cedar-cf-pill{position:fixed;z-index:100001;left:-200px;top:-200px;pointer-events:none;background:#f4f4f2;color:' + CHARCOAL + ';border-radius:999px;padding:12px 18px;font-size:12px;letter-spacing:.9px;text-transform:uppercase;white-space:nowrap;transform:translate(-50%,-50%) scale(.35);opacity:0;transition:opacity .25s ' + EASE + ',transform .3s ' + EASE + ';}',
    '.cedar-cf-pill.is-on{opacity:1;transform:translate(-50%,-50%) scale(1);}',
    '.cedar-cf-pill.is-on.is-down{transform:translate(-50%,-50%) scale(.88);}',
    /* gallery view (module 36): a fixed "View gallery" button that fades in over the gallery section on /work/*,
       opening the gallery assets UNCROPPED in a drag-coverflow (its own namespace so the BTS .cedar-cf cover-crop
       CSS never touches it; each card is sized to its media's aspect so cover == no crop) */
    '.cedar-gv-btn{position:fixed;top:calc(var(--cedar-nav-h,74px) + 18px);right:24px;z-index:9000;display:inline-flex;align-items:center;gap:8px;border:0;cursor:pointer;border-radius:12px;padding:12px 18px;font-size:12px;letter-spacing:.8px;text-transform:uppercase;color:#f4f4f2;background:rgba(20,15,10,.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .4s ' + EASE + ',transform .4s ' + EASE + ',background-color .25s ' + EASE + ';}',
    '.cedar-gv-btn.is-on{opacity:1;transform:none;pointer-events:auto;}',
    '.cedar-gv-btn:hover{background:rgba(20,15,10,.72);}',
    '@media (max-width:767px){.cedar-gv-btn{top:auto;bottom:20px;right:16px;padding:10px 15px;font-size:10px;}}',
    '.cedar-gv{position:fixed;inset:0;z-index:99999;background:rgba(20,15,10,.82);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);opacity:0;pointer-events:none;transition:opacity .35s ' + EASE + ';}',
    '.cedar-gv.is-open{opacity:1;pointer-events:auto;}',
    '.cedar-gv-stage{position:absolute;inset:0;overflow:hidden;cursor:none;touch-action:pan-y;}',
    '.cedar-gv-card{position:absolute;left:50%;top:50%;box-sizing:border-box;padding:14px;border-radius:16px;overflow:hidden;will-change:transform,opacity;user-select:none;-webkit-user-select:none;background:#fff;box-shadow:0 24px 60px rgba(0,0,0,.34);}',   /* padding = the white mat around the asset; a captionless item is just the matted asset */
    /* v1.83: depth scrim, same treatment as the BTS coverflow — the side cards recede by being
       DIMMED rather than going transparent, so the card further out can never show through the one
       in front of it. --gv-dim is set per card in render() from its distance off centre. */
    '.cedar-gv-card::after{content:"";position:absolute;inset:0;border-radius:inherit;background:#0d0a07;opacity:var(--gv-dim,0);pointer-events:none;}',
    '.cedar-gv-media{position:relative;width:100%;overflow:hidden;border-radius:9px;background:#f4f4f2;}',
    '.cedar-gv-media img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;}',   /* media box == asset aspect, so cover crops nothing */
    '.cedar-gv-media.cedar-gv-contain img{object-fit:contain;}',   /* rare tall asset: show it whole, letterbox on the card, never crop */
    '.cedar-gv-cap{padding:13px 2px 3px;color:' + CHARCOAL + ';}',   /* title + description below the asset (client-styled type; charcoal on white for legibility) */
    '.cedar-gv-title{font-size:15px;font-weight:600;line-height:1.3;}',
    '.cedar-gv-desc{margin-top:5px;margin-bottom:10px;font-size:13px;line-height:1.1;color:' + CHARCOAL + ';opacity:.72;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;}',   /* bottom space is MARGIN not padding — padding inside the line-clamp box let a clipped 6th line peek through */
    '.cedar-gv-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:66px;height:66px;border-radius:50%;background:rgba(20,15,10,.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;pointer-events:none;color:#f4f4f2;}',
    '.cedar-gv-play .cedar-play-ico{width:20px;height:24px;margin-left:3px;}',
    '.cedar-gv-arrows{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:100002;display:inline-flex;gap:12px;}',   /* prev/next — same buttons as the View Similar Projects slider */
    '.cedar-gv .cedar-lb-close{z-index:100002;cursor:pointer;}',
    '@media (prefers-reduced-motion: reduce){.cedar-gv{transition:none!important;}}',
    /* mobile menu (≤767px): mark pinned left, "Menu" pinned right, warm-grey overlay fills top-down, pages 36px bottom-left */
    '.cedar-mmenu-btn{display:none;position:absolute;right:20px;top:50%;transform:translateY(-50%);background:none;border:0;padding:6px 2px;cursor:pointer;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:inherit;transition:color .45s ' + EASE + ';}',
    '.navbar.cedar-nav-dark .cedar-mmenu-btn{color:#f4f4f2;}',
    '.navbar.cedar-nav-light .cedar-mmenu-btn{color:' + CHARCOAL + ';}',
    '@media (max-width:767px){.navbar{margin-top:0!important;}.navbar a.nav-logo{display:none!important;}.navbar .nav-links{display:none!important;}.navbar a.nav-mark{display:flex!important;position:absolute;left:20px;top:50%;transform:translateY(-50%);}.cedar-mmenu-btn{display:inline-block;}}',   /* client: mobile navbar had a 10px top margin on a fixed element → a strip of gap above it; sit it flush */
    /* mobile: no hover exists, so the work-card label is always visible — TITLE ONLY, pinned bottom-left (desktop keeps the full hover reveal from module 3) */
    '@media (max-width:767px){.work-card .card-label{display:flex!important;opacity:1!important;pointer-events:none;z-index:4;top:auto!important;bottom:16px!important;left:16px!important;right:auto!important;}.work-card .card-label p.caption:nth-of-type(2){display:none!important;}}',
    /* mobile work grid: the desktop width-pattern rules (first-child 35%, last-child aspect 1/1, nth-child basis 40%)
       leak into the stacked COLUMN layout as height rules and crush cards — neutralize them; every card is
       full-width at the breakpoint\'s design height */
    '@media (min-width:480px) and (max-width:767px){.work-grid .work-card,.work-grid .work-card:first-child,.work-grid .work-card:last-child{flex:0 0 auto!important;width:100%!important;height:240px!important;aspect-ratio:auto!important;}}',
    '@media (max-width:479px){.work-grid .work-card,.work-grid .work-card:first-child,.work-grid .work-card:last-child{flex:0 0 auto!important;width:100%!important;height:40vh!important;aspect-ratio:auto!important;}}',
    /* project mobile: Ben set the top photo/video band to 50vh — cover-size the vimeo iframe to that box */
    '@media (max-width:767px){.hero-band,.photo-band{overflow:hidden;position:relative;}.hero-band .vimeo-container iframe,.photo-band .vimeo-container iframe{width:max(100vw,88.9vh)!important;height:max(50vh,56.25vw)!important;min-width:0!important;min-height:0!important;max-width:none!important;position:absolute!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;}}',
    /* v1.84: .cedar-center rule DROPPED — the situation/results heads take their alignment from the Designer now (the reveal animation is separate and unaffected) */
    /* about icons: the artwork draws right to (and its stroke halfway PAST) the artboard edge. Two clips
       are in play and scale(.92) beats neither — it shrinks the svg AND its clip together. Kill both:
       the svg viewport (overflow) and lottie\'s own baked artboard clip-path on the root group. */
    '.cedar-value-icon svg{transform:scale(.92);transform-origin:center center;overflow:visible!important;}',
    '.cedar-value-icon svg g[clip-path]{clip-path:none!important;}',
    /* work-card hover label: the film TITLE reads stronger than the situation line (client note) */
    '.card-label p.caption:first-of-type{font-size:17px;font-weight:500;line-height:1.25;}',
    /* project hero: glass "watch with sound" pill (opens the lightbox with full controls + audio) */
    '.cedar-hero-watch{position:absolute;bottom:22px;right:22px;z-index:6;display:inline-flex;align-items:center;gap:8px;border:0;cursor:pointer;border-radius:12px;padding:6px 12px;font-size:12px;letter-spacing:.7px;text-transform:uppercase;color:#f4f4f2;background:rgba(20,15,10,.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:background-color .25s ' + EASE + ';}',   /* v1.86: padding + letter-spacing matched to the Webflow .btn-pill.white ("About Cedar") so the hero "Play with sound" pill is the same height (32px). Gallery-card pills keep their own size via .cedar-card-watch below. */
    '.cedar-hero-watch:hover{background:rgba(20,15,10,.68);}',
    '.cedar-card-watch{padding:9px 14px;font-size:10px;bottom:14px;right:14px;z-index:3;pointer-events:auto;cursor:pointer;}',   /* v1.67: the pill is a DIRECT door to the sound player (module 14 delegate); the rest of the card still opens the coverflow */
    /* film sections (module 12.5) — labeled category rows above the stills grid */
    '.cedar-fs{margin:44px 0 8px;}',
    '.cedar-fs-head{display:flex;align-items:center;gap:16px;margin:0 0 16px;}',
    '.cedar-fs-label{font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}',
    '.cedar-fs-line{flex:1 1 auto;height:1px;background:currentColor;opacity:.16;}',
    '.cedar-fs-cap{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:44px 18px 16px;background:linear-gradient(0deg,rgba(0,0,0,.55),rgba(0,0,0,0));color:#f4f4f2;opacity:0;transition:opacity .45s ' + EASE + ';pointer-events:none;}',
    '.gallery-card:hover .cedar-fs-cap{opacity:1;}',
    '@media (hover:none){.cedar-fs-cap{opacity:1;}}',   /* touch has no hover — captions stay visible */
    '.cedar-fs-title{font-size:15px;font-weight:600;}',
    '.cedar-fs-desc{font-size:13px;opacity:.85;margin-top:4px;max-width:50%;}',   /* client (v1.63): stay clear of the "Watch with sound" pill bottom-right */
    /* film-section HORIZONTAL scroll rows (v1.87) — armed by data-cedar-layout="scroll" (module 12.5); scrollbar hidden, drag-to-scroll on desktop, native swipe on touch */
    '.cedar-fs-row.cedar-fs-scroll{flex-wrap:nowrap!important;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;-ms-overflow-style:none;}',
    '.cedar-fs-row.cedar-fs-scroll::-webkit-scrollbar{display:none;}',
    /* poster fit card (v1.71) — a poster/graphic stays in the stills grid but flips to a portrait card, image contained with 10px padding, transparent behind, uncropped */
    '.cedar-gal-fit{background:transparent!important;}',
    '.cedar-gal-fit img,.cedar-gal-fit .img-cover{width:100%!important;height:100%!important;object-fit:contain!important;padding:0!important;box-sizing:border-box!important;background:transparent!important;}',   /* v1.73: no padding — the card is sized to the poster aspect so it fills edge-to-edge, uncropped */
    /* LARGE-SCREEN SWEEP (v1.74): the Webflow headings scale up at the 1920 breakpoint (project h1 36->50, /work heading vw-scales to ~115) but every paired/injected text is fixed px and gets stranded small. Scale the stranded text ~1.2x at >=1920 so big monitors keep the laptop proportions. Filter pills deliberately untouched (they match at every width). */
    '@media (min-width:1920px){',
    '.work-card .card-label p:first-child{font-size:21px;}',            /* work-card hover title (17 at laptop) */
    '.work-card .card-label p:nth-child(2){font-size:15px;}',           /* work-card hover description (12) */
    /* v1.84: .work-situation 1920px size DROPPED — situation text size/alignment is the Designer's now (set the >=1920 size in Webflow or it falls back to the breakpoint default) */
    '.cedar-fs-label{font-size:14px;}',
    '.cedar-fs-title{font-size:18px;}',
    '.cedar-fs-desc{font-size:15px;}',
    '.cedar-gv-title{font-size:18px;}',
    '.cedar-gv-desc{font-size:15px;}',
    '.cedar-hero-watch{font-size:13px;}',
    '.cedar-card-watch{font-size:11px;}',
    '.cedar-hero-tag{font-size:11px;}',
    '.cedar-vo-arrow{width:38px;height:38px;font-size:16px;}',
    '.cedar-lb-stage{width:min(1900px,94vw);}',
    '.about-card{max-height:680px;}',                                   /* v1.76: the card is aspect-ratio 3/4, so on a 2560 screen it balloons to ~834px around a fixed 200px icon — cap it */
    '.cedar-value-icon{width:300px!important;height:300px!important;}', /* and scale the value icon up to fill the card (beats the inline 200px baseline) */
    '}',
    /* hero feature label (module 12.6) — small glass tag naming what the autoplaying hero is (e.g. "Trailer") */
    '.cedar-hero-tag{position:absolute;left:18px;bottom:18px;z-index:3;padding:9px 14px;border-radius:999px;background:rgba(20,15,10,.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#f4f4f2;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;pointer-events:none;}',
    '.cedar-play-ico{width:10px;height:12px;flex:0 0 auto;display:block;}',   /* clean white play triangle (replaces the ▶️ emoji glyph) */
    /* hover-clip loading mark (module 3) — white wireframe chevron over the black card clip while it buffers */
    '.cedar-grid-spin{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0;transition:opacity .3s ' + EASE + ';}',
    '.cedar-grid-spin.is-on{opacity:1;}',
    '.cedar-grid-spin-stage{width:52px;height:52px;perspective:520px;}',
    '.cedar-grid-spin canvas{display:block;width:100%;height:100%;}',
    /* post partners: the .post-card class carries aspect-ratio 3/4 (right for the small cards) — on the
       full-width container it fabricates ~2000px of height and space-between stretches the gap. Neutralize
       ONLY on the container that holds the partners row. */
    '.container.post-card:has(.post-partner-row){aspect-ratio:auto!important;height:auto!important;justify-content:flex-start!important;row-gap:28px;}',
    /* filter row rides along the grid (client: less scroll-scroll-scroll to refilter).
       .page-wrap carries overflow hidden/auto, which silently kills sticky for every descendant —
       overflow-x:clip clips the same horizontal overflow WITHOUT creating a scroll container. */
    '.page-wrap{overflow-x:clip!important;overflow-y:visible!important;}',
    /* the sticky offset FOLLOWS the nav: nav shown (scroll-up / near top) → 10px below it; nav hidden
       (scroll-down) → back to the resting 20px. Module 9 owns body.cedar-nav-in + --cedar-nav-h. */
    '.work-filter-row{position:sticky;top:20px;z-index:70;transition:top .55s ' + EASE + ';}',
    'body.cedar-nav-in .work-filter-row{top:calc(var(--cedar-nav-h,74px) + 10px);}',
    /* home info-card icon: the CMS icon is an <img> pointing at an SVG, so it can\'t take a text color —
       module 12 swaps it for a mask span painted with the card\'s text color */
    '.cedar-icon-mask{display:block;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:left center;mask-position:left center;-webkit-mask-size:contain;mask-size:contain;aspect-ratio:1/1;}',
    /* suite booking modal: Cedar Green field, light-green type + lines, centered header, no scrollbars.
       The form block was designed for a wider column — cap it to the modal content box so the 20px side
       padding actually shows (width/min-width overrides), and give the modal more room. */
    '.cedar-modal.cedar-suite{background:#29341a;color:#9fb18f;scrollbar-width:none;-ms-overflow-style:none;width:min(640px,94vw);padding:36px 34px 30px;}',
    '.cedar-modal.cedar-suite::-webkit-scrollbar{display:none;}',
    '.cedar-modal.cedar-suite h3{color:#9fb18f;text-align:center!important;}',
    '.cedar-modal.cedar-suite .cm-body{color:#9fb18f;text-align:center!important;margin-left:auto;margin-right:auto;}',
    '.cedar-modal.cedar-suite .cm-close{color:#9fb18f;opacity:.75;}',
    '.cedar-modal.cedar-suite .cedar-suite-form{padding:20px;}',
    '.cedar-modal.cedar-suite .cedar-suite-form .w-form,.cedar-modal.cedar-suite .cedar-suite-form form{width:100%!important;max-width:100%!important;min-width:0!important;margin:0!important;box-sizing:border-box;}',
    '.cedar-modal.cedar-suite .cedar-suite-form label{color:#9fb18f;}',
    '.cedar-modal.cedar-suite .cedar-suite-form div{color:#9fb18f;}',
    '.cedar-modal.cedar-suite .cedar-suite-form input[type="text"],.cedar-modal.cedar-suite .cedar-suite-form input[type="email"],.cedar-modal.cedar-suite .cedar-suite-form textarea,.cedar-modal.cedar-suite .cedar-suite-form select{width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important;background:rgba(159,177,143,.07)!important;border:1px solid rgba(159,177,143,.45)!important;color:#9fb18f!important;}',
    '.cedar-modal.cedar-suite .cedar-suite-form ::placeholder{color:rgba(159,177,143,.5)!important;opacity:1;}',
    '.cedar-modal.cedar-suite .cedar-suite-form input[type="submit"]{width:auto!important;background:#9fb18f!important;color:#29341a!important;border:0!important;cursor:pointer;}',
    '.cedar-mmenu{position:fixed;inset:0;z-index:99990;background:#dad3cd;clip-path:inset(0 0 100% 0);pointer-events:none;transition:clip-path .55s ' + EASE + ';}',
    '.cedar-mmenu.is-open{clip-path:inset(0 0 0% 0);pointer-events:auto;}',
    '.cedar-mmenu nav{position:absolute;left:20px;bottom:32px;display:flex;flex-direction:column;align-items:flex-start;gap:14px;}',
    '.cedar-mmenu nav a{font-size:36px;line-height:1.15;color:' + CHARCOAL + ';text-decoration:none;opacity:0;transform:translateY(22px);transition:opacity .5s ' + EASE + ',transform .5s ' + EASE + ';}',
    '.cedar-mmenu.is-open nav a{opacity:1;transform:none;}',
    '.navbar.cedar-mmenu-on{z-index:99991!important;}',
    '.navbar.cedar-mmenu-on .cedar-mmenu-btn,.navbar.cedar-mmenu-on .cedar-mark-mask,.navbar.cedar-mmenu-on .cedar-logo-mask{color:' + CHARCOAL + '!important;}',
    /* footer v2 — Cedar Green field, light-green type. Left: tagline + "Say hello" pill (+ copyright pinned
       to the bottom). Right: the page links behind a hairline whose x lands exactly on the C of "Creative"
       in the lockup below (wordmark left = 20.5% of the row, C of Creative at 43.8% into the wordmark →
       hairline at 55.3% — pure percentages, so it holds at any width). Lockup links home. */
    '.site-footer{background:#29341a!important;color:#9fb18f!important;}',
    '.cedar-foot{padding:20px;}',
    '.cedar-foot-cols{display:flex;min-height:250px;}',
    '.cedar-foot-col.c1{flex:0 0 55.3%;display:flex;flex-direction:column;align-items:flex-start;padding:6px 28px 0 0;}',
    '.cedar-foot-col.c2{flex:1 1 auto;border-left:1px solid #9fb18f;padding:6px 0 0 28px;}',   /* client: footer divider full opacity (was 32%) */
    '.cedar-foot .cf-tag{font-size:21px;line-height:1.3;color:#9fb18f;margin:0 0 18px;max-width:28ch;}',
    '.cedar-foot .cf-cta{display:inline-block;background:#9fb18f;color:#29341a;border-radius:12px;padding:12px 22px;font-size:14px;line-height:1;text-decoration:none;transition:opacity .25s ' + EASE + ';}',   /* radius matches the site .btn-pill; NO transform transition — Ben's native GSAP hover owns any lift, and a CSS transition on transform rubber-bands it */
    '.cedar-foot .cf-cta:hover{opacity:.88;}',
    '.cedar-foot .cf-copy{font-size:12px;opacity:.5;color:#9fb18f;}',
    '.cedar-foot-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:20px;}',   /* 20px below the big lockup */
    '.cedar-foot-bottom .cf-built{font-size:12px;opacity:.5;color:#9fb18f;text-decoration:none;transition:opacity .25s ' + EASE + ';}',
    '.cedar-foot-bottom .cf-built:hover{opacity:1;}',
    '.cedar-foot .cf-links{display:flex;flex-direction:column;gap:9px;align-items:flex-start;}',
    '.cedar-foot .cf-links a{color:#9fb18f;text-decoration:none;font-size:16px;letter-spacing:.3px;opacity:.85;transition:opacity .25s ' + EASE + ',transform .35s ' + EASE + ';will-change:transform;}',
    '.cedar-foot .cf-links a:hover{opacity:1;transform:translateX(5px);}',
    'a.cedar-foot-lockup{display:flex;align-items:center;justify-content:space-between;margin-top:56px;text-decoration:none;}',
    '.cedar-foot-mark,.cedar-foot-word{display:block;background-color:#9fb18f;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;}',
    '.cedar-foot-mark{flex:0 0 11.5%;aspect-ratio:374/283;}',
    '.cedar-foot-word{flex:0 0 79.5%;aspect-ratio:641/70;}',
    '@media (max-width:767px){.site-footer{padding:0!important;}.cedar-foot{padding:10px!important;}.cedar-foot-cols{flex-direction:column;min-height:0;}.cedar-foot-col.c1{flex:0 0 auto;padding:12px 0 0;}.cedar-foot-col.c2{border-left:0;padding:24px 0 0;}.cedar-foot .cf-copy{padding-top:20px;}a.cedar-foot-lockup{margin-top:36px;}}',
    /* BTS slider (legacy bits still used by the gallery button) */
    '.cedar-bts-gallery-btn{cursor:pointer;display:inline-flex;align-items:center;border:1px solid rgba(41,34,27,.35);border-radius:14px;padding:6px 14px;font-size:13px;color:' + CHARCOAL + ';transition:background-color .3s ' + EASE + ';}',
    '.cedar-bts-gallery-btn:hover{background-color:rgba(41,34,27,.07);}',
    /* shared arrow controls + view-other slider */
    '.cedar-vo-arrows{display:inline-flex;gap:10px;margin-top:14px;align-items:center;}',
    '.cedar-vo-arrow{width:34px;height:34px;border:0;border-radius:10px;background:rgba(218,211,205,.5);cursor:pointer;color:' + CHARCOAL + ';font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;transition:transform .3s ' + EASE + ',background-color .3s ' + EASE + ';}',
    '.cedar-vo-arrow:hover{transform:translateY(-3px);background-color:rgba(218,211,205,.8);}',
    '.cedar-team-arrows{display:flex;justify-content:flex-end;gap:10px;padding:10px 20px 16px;}',   /* module 37: prev/next above the /about team scroller, right-aligned (v1.70: top padding so the hover-lift + focus ring aren\'t clipped) */
    '.cedar-team-arrows .cedar-vo-arrow:focus:not(:focus-visible){outline:none;}',   /* v1.70: no lingering blue ring after a mouse click (keyboard focus still shows a ring) */
    '.cedar-team-arrows .cedar-vo-arrow{background:rgba(41,34,27,.10);}',   /* client (v1.68): light charcoal, not the warm grey that read green over the section */
    '.cedar-team-arrows .cedar-vo-arrow:hover{background:rgba(41,34,27,.18);}',
    '.cedar-vo-arrow.is-dim{opacity:.32;pointer-events:none;}',
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
    '.cedar-acc-init .acc-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .55s ' + EASE + ',padding .55s ' + EASE + ';}',
    '.cedar-acc-init .acc-item.cedar-open .acc-body{grid-template-rows:1fr;}',
    '.cedar-acc-init .acc-item:not(.cedar-open) .acc-body{padding-top:0;padding-bottom:0;}',   /* the body\'s own padding survives the 0fr collapse — drop it when closed */
    '.cedar-acc-init .acc-body > .acc-inner{overflow:hidden;min-height:0;opacity:0;transition:opacity .45s ' + EASE + ';}',
    '.cedar-acc-init .acc-item.cedar-open .acc-body > .acc-inner{opacity:1;}',
    /* line draw-in: SVG overlay sits on the host edge, line strokes in */
    '.cedar-line-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:1;}',
    /* nav: transparent + blur veil on hover/focus; auto-hides on scroll-down, slides back on scroll-up; ink (links + masked logo/mark) flips by what's behind it — JS toggles cedar-nav-dark / cedar-nav-light per scroll position */
    '.navbar{transition:transform .55s ' + EASE + ',background-color .35s ' + EASE + ';will-change:transform;}',
    '.navbar.cedar-nav-hidden{transform:translateY(-100%);}',
    /* client: revealed-after-scroll nav = solid white field + charcoal ink everywhere (legible on any section) */
    '.navbar.cedar-nav-solid{background-color:#fff;box-shadow:0 1px 0 rgba(41,34,27,.07);}',
    '.navbar.cedar-nav-solid .nav-link,.navbar.cedar-nav-solid .cedar-logo-mask,.navbar.cedar-nav-solid .cedar-mark-mask{color:' + CHARCOAL + '!important;}',
    /* masked logo + mark: shape from the brand SVG, painted with currentColor so it rides the nav ink; width tracks the source aspect ratio (no squish) */
    '.cedar-logo-mask,.cedar-mark-mask{display:block;background-color:currentColor;color:#f4f4f2;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;transition:background-color .45s ' + EASE + ';}',
    '.nav-link{transition:color .45s ' + EASE + ';}',
    /* per-scroll ink — specificity (0,3,0) beats Webflow page-scoped ".page-wrap-* .nav-link" so the switch actually wins */
    '.navbar.cedar-nav-dark .nav-link{color:#f4f4f2;}',
    '.navbar.cedar-nav-light .nav-link{color:' + CHARCOAL + ';}',
    '.navbar.cedar-nav-dark .cedar-logo-mask,.navbar.cedar-nav-dark .cedar-mark-mask{color:#f4f4f2;}',
    '.navbar.cedar-nav-light .cedar-logo-mask{color:' + CHARCOAL + ';}',
    '.navbar.cedar-nav-light .cedar-mark-mask{color:#9fb18f;}',   /* client: the MARK goes light green over light backgrounds; wordmark + links stay charcoal */
    /* (the dark-green hover veil + its forced light ink were removed per Ben — ink always follows the probe) */
    /* about page: "What defines us" cards start shifted down-right + hidden, ease up + left into place (JS staggers right→left) */
    '.cedar-about-card{opacity:0;transform:translate(52px,25px);will-change:opacity,transform;}',
    '.cedar-about-card.cedar-in{opacity:1;transform:none;transition:opacity .85s ' + EASE + ',transform .85s ' + EASE + ';}',
    /* section reveals — JS adds .cedar-reveal (so no-JS shows everything) */
    '.cedar-reveal{opacity:0;transform:translateY(44px);will-change:opacity,transform;}',
    '.cedar-reveal.cedar-in{opacity:1;transform:none;transition:opacity .8s ' + EASE + ',transform .8s ' + EASE + ';}',
    /* logo marquee */
    '.cedar-marquee{overflow:hidden;position:relative;left:50%;transform:translateX(-50%);width:100vw;max-width:100vw;}',   /* full-bleed centred on the viewport (parent .container is centred); track repeats to fill so the -50% loop stays seamless */
    '.cedar-marquee-track{display:flex;width:max-content;align-items:center;animation:cedar-scroll 60s linear infinite;}',   /* duration is recomputed per-width in JS for a constant px/s crawl; 60s is only the pre-measure fallback */
    '.cedar-marquee:hover .cedar-marquee-track{animation-play-state:paused;}',
    /* client: logos standardized — every logo one shared height at its natural width. The SLOTS must hug
       their image too: Webflow's wrappers keep fixed widths, so a resized image overflows its slot and the
       logos pile onto each other (the v1.29.0 overlap). 160px read way too big on the yellow band → 100px. */
    '.cedar-marquee-track > *,.cedar-marquee-track .w-dyn-item{flex:0 0 auto;width:auto!important;max-width:none!important;min-width:0!important;height:auto!important;}',
    '.cedar-marquee-track img{height:50px!important;width:auto!important;max-width:none!important;max-height:none!important;object-fit:contain;display:block;}',   /* client: logos half size (100→50px); gap only drops 20% (module 8) so they read more spaced out */
    '@keyframes cedar-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}',
    /* gallery (project pages) — HOME-GRID RHYTHM: JS lays cards 2-per-row at a fixed height, cycling the home work grid's 3 asymmetric width patterns. Media covers the box (image object-fit:cover; video fills, black behind any non-16:9 film) */
    '.gallery-card.cedar-gal{overflow:hidden;position:relative;}',
    '.gallery-card.cedar-gal img.img-cover{width:100%!important;height:100%!important;object-fit:cover!important;display:block;}',
    '.gallery-card.cedar-gal .gallery-video{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;}',
    '.gallery-card.cedar-gal .vimeo-container{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;background:#000!important;overflow:hidden!important;}',
    '.gallery-card.cedar-gal .vimeo-wrapper{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;padding:0!important;}',
    '.gallery-card.cedar-gal .vimeo-container iframe{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;transform:none!important;}',   /* min-width:100vw on the vimeo bg embed forces cover-crop; zero the mins so the full 16:9 frame fills the box */
    /* our own always-on background video (data-vimeo-url path): oversized centered iframe the card clips → cover, no letterbox */
    '.gallery-card.cedar-gal .cedar-galvid{position:absolute;inset:0;overflow:hidden;z-index:1;pointer-events:none;}',
    '.gallery-card.cedar-gal .cedar-galvid iframe{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:none;border:0;background:#000;}',
    '.gallery-card.cedar-gal[data-cedar-vimeo]{cursor:pointer;}',
    /* video lightbox (module 14) */
    '.cedar-lb{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:3vh 3vw;background:rgba(20,15,10,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);opacity:0;pointer-events:none;transition:opacity .3s ' + EASE + ';}',   /* client (v1.59): tighter margin so the player can be bigger */
    '.cedar-lb.is-open{opacity:1;pointer-events:auto;}',
    '.cedar-lb-stage{position:relative;width:min(1600px,94vw);aspect-ratio:16/9;max-height:92vh;border-radius:14px;overflow:hidden;background:#000;box-shadow:0 30px 80px rgba(0,0,0,.5);transform:translateY(12px);transition:transform .4s ' + EASE + ';}',   /* client (v1.59): larger default player (was min(1100px,92vw)/90vh) */
    '.cedar-lb.is-open .cedar-lb-stage{transform:none;}',
    '.cedar-lb-frame{position:absolute;inset:0;width:100%;height:100%;border:0;}',
    '.cedar-lb-close{position:absolute;top:22px;right:26px;width:44px;height:44px;border-radius:50%;border:0;cursor:pointer;font-size:26px;line-height:1;color:#f4f4f2;background:rgba(255,255,255,.14);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transition:background-color .25s ' + EASE + ';display:flex;align-items:center;justify-content:center;}',
    '.cedar-lb-close:hover{background:rgba(255,255,255,.28);}',
    /* video-loading mark (module 14): white-on-black rotating wireframe chevron over the black stage until the film plays */
    '.cedar-lb-spin{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;background:#000;opacity:1;transition:opacity .55s ' + EASE + ';}',
    '.cedar-lb-spin.is-off{opacity:0;pointer-events:none;}',
    '.cedar-lb-spin-stage{width:74px;height:74px;perspective:520px;}',
    '.cedar-lb-spin canvas{display:block;width:100%;height:100%;}',
    '.cedar-lb-spin-svg{width:100%;height:100%;transform-style:preserve-3d;animation:cedar-vspin 1.6s linear infinite;}',
    '.cedar-lb-spin-svg path{fill:none;stroke:#f4f4f2;stroke-width:12;stroke-linejoin:round;}',
    '@keyframes cedar-vspin{to{transform:rotateY(360deg);}}',
    /* contact outline mark: force a crisp 1px stroke-only outline (the lottie paths default to a solid black SVG fill; fill:none + a non-scaling 1px stroke = clean thin outline at any size) */
    '.cedar-lottie-mark svg path{fill:none!important;stroke-width:1px!important;vector-effect:non-scaling-stroke!important;}',
    /* /work heading intro — module 17 owns the transform (scroll scrub), so only opacity lives here */
    '.work-heading.cedar-wh{opacity:0;transition:opacity .9s ' + EASE + ';}',
    '.work-heading.cedar-wh.cedar-wh-in{opacity:1;}',
    /* contact heading per-character cascade (module 20): words stay unbreakable, chars rise + fade in.
       The H1 is display:flex, which DROPS whitespace-only text nodes — word gaps come from margins, not spaces. */
    '.contact-head{flex-wrap:wrap;}',
    '.contact-head .cedar-word:not(:last-child){margin-right:.28em;}',
    '.cedar-word{display:inline-block;white-space:nowrap;}',
    '.cedar-chr{display:inline-block;opacity:0;transform:translateY(.55em);}',
    '.cedar-chr.cedar-in{opacity:1;transform:none;transition:opacity 1.2s ' + EASE + ',transform 1.2s ' + EASE + ';}',
    /* /post suite booking modal — the page's own (hidden) Webflow form is moved in, so native submission keeps working */
    '.cedar-modal .cedar-suite-form{margin-top:6px;text-align:left;}',
    '.cedar-modal .cedar-suite-form .w-form{margin:0;}',
    '.cedar-modal .cedar-suite-form input,.cedar-modal .cedar-suite-form textarea,.cedar-modal .cedar-suite-form select{max-width:100%;}',
    /* horizontal drag-scroll rows (home info-cards >4, post partners on overflow): scrollbar hidden, pill cursor.
       DESKTOP-ONLY — on mobile these rules would force nowrap over the stacked layout, so they live behind
       a min-width query and phones keep the native Webflow layout. */
    '@media (min-width:768px){.cedar-hscroll{overflow-x:auto!important;flex-wrap:nowrap!important;scrollbar-width:none;-ms-overflow-style:none;}.cedar-hscroll::-webkit-scrollbar{display:none;}.cedar-hscroll.cedar-nocursor{cursor:none;}.cedar-hscroll .info-card,.cedar-hscroll .post-partner-card{flex:0 0 auto;}}',
    /* mobile: the /post partner cards swipe horizontally (native touch scroll; scoped to this row only so the other stacked rows are untouched) */
    '@media (max-width:767px){.post-partner-row{flex-wrap:nowrap!important;overflow-x:auto!important;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none;-ms-overflow-style:none;}.post-partner-row::-webkit-scrollbar{display:none;}.post-partner-row .post-partner-card{flex:0 0 auto!important;width:80vw!important;max-width:340px;scroll-snap-align:start;}}',
    /* "Reply within 24 hours" reads light green (client; module 30 tags the node) */
    '.cedar-reply-24{color:#9fb18f!important;}',
    /* photo slider (module 29) — filmstrip: photos at their natural aspect, one shared height, drag +
       auto-advance. The viewport IS the scroller (scrollbar hidden) so touch keeps native swipe. */
    '.cedar-ps{position:relative;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none;width:100%;}',
    '.cedar-ps::-webkit-scrollbar{display:none;}',
    '.cedar-ps.cedar-nocursor{cursor:none;}',
    '.cedar-ps-track{display:flex;gap:14px;width:max-content;align-items:stretch;}',
    '.cedar-ps-slide{flex:0 0 auto;overflow:hidden;border-radius:12px;}',
    '.cedar-ps-slide img{display:block;height:100%;width:auto;max-width:none;object-fit:cover;pointer-events:none;user-select:none;-webkit-user-select:none;}',
    /* cover mode (module 29) — full-bleed one-photo-at-a-time: the viewport fills the host (the /post
       photo band), slides are exactly one band wide (JS keeps their px width in sync), photos cover */
    '.cedar-ps.cedar-ps-cover{position:absolute;inset:0;height:100%;}',
    '.cedar-ps-cover .cedar-ps-track{gap:0;height:100%;}',
    '.cedar-ps-cover .cedar-ps-slide{border-radius:0;height:100%;position:relative;}',
    '.cedar-ps-cover .cedar-ps-slide img{width:100%;height:100%;object-fit:cover;position:static;}',
    /* client overrides (v1.32) */
    '.filter-pill:hover{background-color:var(--cedar-yellow)!important;}',   /* keep the yellow on hover (Ben: the light-green tint read as "no background") */
    '.horizontal-line.light-green{color:#9fb18f!important;}',                /* post hairlines to full opacity — match the vertical lines (were 50%) */
    '.acc-item.light-green{border-top-color:#9fb18f!important;}',           /* accordion separators (drawn by module 6) to full opacity too */
    '.navbar.cedar-on-about.cedar-nav-light .cedar-mark-mask{color:' + CHARCOAL + '!important;}',   /* on /about the MARK stays charcoal, not light green */
    /* team bio cards (module 32): name + bio fade in only on hover; a dark gradient rises over the image bottom */
    '.cedar-bio{position:relative;overflow:hidden;}',
    '.cedar-bio .bio-card-info{opacity:0;transition:opacity .45s ' + EASE + ';}',
    '.cedar-bio:hover .bio-card-info,.cedar-bio:focus-within .bio-card-info{opacity:1;}',
    '.cedar-bio::after{content:"";position:absolute;left:0;right:0;bottom:0;height:62%;background:linear-gradient(to top,rgba(0,0,0,.82),rgba(0,0,0,0));z-index:2;opacity:0;transition:opacity .45s ' + EASE + ';pointer-events:none;}',
    '.cedar-bio:hover::after,.cedar-bio:focus-within::after{opacity:1;}',
    /* outtake/blooper rollover (v1.68): the img.bio-outtake covers the card, hidden at rest, fades in on hover over the headshot */
    '.bio-card .bio-outtake{position:absolute!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;object-fit:cover;opacity:0;z-index:1;transition:opacity .5s ' + EASE + ';pointer-events:none;-webkit-user-drag:none;}',   /* v1.69: honor the Designer scale (120%/130%, set on the class to crop the circle) — centered so .cedar-bio overflow:hidden crops it; do NOT force 100% */
    '.bio-card .bio-image{z-index:0;}',
    '.cedar-bio:hover .bio-outtake,.cedar-bio:focus-within .bio-outtake{opacity:1;}',
    /* team bio cards were squishing to fit 100vw instead of holding their 25% basis + overflowing: the Webflow
       .bio-card is flex-grow:0/flex-basis:25% but flex-shrink defaults to 1, so 7 cards crammed into the row.
       Pin shrink:0 (desktop) so the cards keep their width and the row overflows — which also lets module 33's
       overflow check finally arm the drag-scroll + "Click and drag" pill (chicken-and-egg: no overflow, no arm).
       v1.85: SCOPED to .cedar-bio-scroller. Ben rebuilt .bio-row as CSS GRID in the Designer; this rule was
       unconditional, so `width:…!important` fought the grid track and squeezed every card to ~86px inside a
       446px column. Module 33's classifier now adds .cedar-bio-scroller ONLY when the row is genuinely a
       non-wrapping flex scroller, so a grid/wrap row keeps whatever the Designer set. */
    '@media (min-width:768px){.bio-row.cedar-bio-scroller .bio-card{flex:0 0 calc((100% - 56px) / 4.5)!important;width:calc((100% - 56px) / 4.5)!important;}}',   /* v1.73: size cards so 4.5 show by default (a half card peeks to signal more) */
    /* dragging a card to scroll must NOT grab the image as a native HTML5 drag ghost (client: it tried to
       drag the photo off the page). Non-draggable + non-selectable across the drag-scroll rows. */
    '.cedar-hscroll img,.bio-row img{-webkit-user-drag:none;user-select:none;-webkit-user-select:none;}',
    /* reduced motion: kill transitions + reveals + marquee */
    '@media (prefers-reduced-motion: reduce){#cedar-loader,.cedar-card-video,.cedar-card-meta,.cedar-modal,.cedar-modal-backdrop,.cedar-vo-track,.cedar-bts-thumb,.cedar-play,.cedar-acc-init .acc-body,.cedar-acc-init .acc-body > .acc-inner,.acc-ico::before,.acc-ico::after,.cedar-mmenu,.cedar-mmenu nav a,.cedar-cf,.cedar-chr{transition:none!important;}.cedar-reveal,.cedar-chr{opacity:1!important;transform:none!important;}.cedar-marquee-track{animation:none!important;}}'
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

  /* ---- shared Lottie loader (modules 15/16; module 11 keeps its own inline loader) ----
     JSON files ship in the same repo/commit as this script, so derive their URL from our
     own <script src> (strip the query, swap the filename). lottie-web is pulled once from
     cdnjs and reused; concurrent callers queue behind a single in-flight load. */
  function cedarSelfURL() {
    return ([].slice.call(document.scripts).map(function (x) { return x.src; })
      .filter(function (x) { return /cedar-experience\.js/.test(x); })[0] || '').split('?')[0];
  }
  function lottieJSON(name) { return cedarSelfURL().replace(/[^/]+$/, name); }
  function ensureLottie(cb) {
    if (window.lottie) { cb(window.lottie); return; }
    if (window.__cedarLottieCbs) { window.__cedarLottieCbs.push(cb); return; }
    window.__cedarLottieCbs = [cb];
    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
    s.onload = function () { var q = window.__cedarLottieCbs || []; window.__cedarLottieCbs = null; q.forEach(function (f) { try { f(window.lottie); } catch (e) {} }); };
    s.onerror = function () { window.__cedarLottieCbs = null; };
    document.body.appendChild(s);
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

    /* typewriter — line 2 is a random "Loading Screen Saying". Ben binds a hidden Collection List
       (each item's text in a .loader-saying element); we read those and pick one per page load, so
       each visit says something different. Falls back to the default line until the CMS list exists.
       (.cl-bottom is uppercased in CSS, so sayings can be entered in normal case.) */
    var SAYINGS = [].slice.call(document.querySelectorAll('.loader-saying,[data-loader-saying]'))
      .map(function (e) { return (e.textContent || '').trim(); }).filter(Boolean);
    if (!SAYINGS.length) SAYINGS = ['Transformative films & inspiring ideas'];
    var lines = ['NOW LOADING:', SAYINGS[Math.floor(Math.random() * SAYINGS.length)]];
    var li = 0, ci = 0, l1 = el('div', null, ''), l2 = el('div', null, '');
    bottom.appendChild(l1); bottom.appendChild(l2);
    var typedAt = 0;                                   /* stamped when the last character lands — the loader holds .2s past this */
    (function type() {
      if (li >= lines.length) { typedAt = Date.now(); return; }
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
        /* the Cedar mark: two chevrons, derived from the REAL brand path (viewBox 374x283, scaled into the
           legacy 45-unit space) — includes the flat CHAMFERS at each chevron's top + inner peak */
        var RAWCHEV = [[178.04,0],[0,126.555],[0,137.94],[25.0235,144.296],[178.04,83.6805],[195.051,83.6805],[348.067,144.296],[373.09,137.94],[373.09,126.555],[195.051,0]];
        var MK = 45.009 / 373.09, MOFF = 137.979;
        var pts = [
          RAWCHEV.map(function (p) { return [p[0] * MK, p[1] * MK]; }),
          RAWCHEV.map(function (p) { return [p[0] * MK, (p[1] + MOFF) * MK]; })
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
        group.scale.setScalar(0.46);   /* 40% of the old 1.15 — the mark was clipping at the stage edges */
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
      (function close() {
        var elapsed = Date.now() - t0;
        var typedHeld = typedAt && (Date.now() - typedAt) >= 200;      /* client: let the text finish typing, then hold .2s */
        if ((typedHeld && elapsed >= LOADER_MIN) || elapsed >= LOADER_MAX + 1500) {   /* ceiling so a stalled typewriter never wedges the loader */
          loader.classList.add('is-done');
          window.__cedarReady = true;                                 /* release gated scroll motion */
          document.dispatchEvent(new CustomEvent('cedar:ready'));
          setTimeout(function () { if (spin) cancelAnimationFrame(spin); loader.remove(); }, 700);
        } else {
          setTimeout(close, 60);
        }
      })();
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
   *    v1.84: OFF — client landed on standard scroll for now.
   *    Flip SMOOTH_SCROLL to true to bring the glide back
   *    (the stations, module 27, are separately off since v1.34).
   * ======================================================= */
  var SMOOTH_SCROLL = true;   /* v1.87: back ON (client) — the "stick" they disliked was the stations (module 27, still off); this is just the smoothing */
  onReady(function () {
    if (!SMOOTH_SCROLL || RM || TOUCH || !window.Lenis) return;
    try {
      /* v1.87 tune (client: "simple smooth scrolling with a bit of easing but not too strong"):
         shorter glide + easeOutCubic's gentle tail — noticeably softer than native, well short of
         the v1.31 "train ride" (1.55/expo) that needed the stations. Tunables: duration, wheelMultiplier. */
      var lenis = new window.Lenis({
        duration: 1.0,
        easing: function (t) { return 1 - Math.pow(1 - t, 3); },
        wheelMultiplier: 1
      });
      window.__cedarLenis = lenis;                       /* module 27 (scroll snap) rides the same instance */
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
  function vimeoEmbed(url, quality) {
    if (!url) return null;
    var id = (url.match(/vimeo\.com\/(?:video\/)?(\d+)/i) || [])[1];
    if (!id) return null;
    var h = (url.match(/[?&]h=([0-9a-z]+)/i) || [])[1] ||
            (url.match(/vimeo\.com\/(?:video\/)?\d+\/([0-9a-z]+)/i) || [])[1] || '';
    return 'https://player.vimeo.com/video/' + id + '?' + (h ? 'h=' + h + '&' : '') +
           'background=1&autoplay=1&muted=1&loop=1&autopause=0' +
           (quality ? '&quality=' + quality : '');       /* v1.84: optional stream cap — the grids pass 540p, everything else stays adaptive full quality */
  }
  onReady(function () {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path !== '/' && path !== '/work') return;      /* home + /work listing share the same grid/filter */
    var cards = [].slice.call(document.querySelectorAll('.work-grid .work-card'));
    if (cards.length < 2) return;
    var DESK = !RM && !TOUCH;                          /* hover video/expand + FLIP reflow are desktop-only; the FILTER runs everywhere */
    var TRANS = 'flex-basis .85s ' + EASE + ',opacity .8s ' + EASE + ',transform .8s ' + EASE;   /* width expand slowed .55->.85 per Ben */
    /* /work: the Designer only styles the first grid rows, so deeper cards go full-width — lay the whole
       list in repeating asymmetric THREE-UP rows at a shorter height (client: faster to scan). Home keeps
       its own 2-up design untouched. */
    var PATTERNS3 = [[0.26, 0.44, 0.30], [0.333, 0.334, 0.333], [0.44, 0.30, 0.26]];
    var PATTERNS2 = [[0.42, 0.58], [0.58, 0.42]];        /* home 2-up asymmetric rhythm (narrow desktop window) */
    function workH() { return window.innerWidth > 2200 ? Math.round(window.innerHeight * 0.5) : (window.innerWidth >= 1920 ? 480 : 420); }   /* /work card height; 50vh on ultra-wide (v1.80), taller on big monitors (v1.74) */
    function assignPattern() {
      if (path !== '/work') return;
      if (window.innerWidth < 768) {                   /* mobile: our ≤767 CSS owns the layout — strip stale inline sizing */
        cards.forEach(function (c) { c.style.removeProperty('height'); });
        return;
      }
      var p = cards[0].parentElement, cs = getComputedStyle(p);
      var gap = parseFloat(cs.columnGap || cs.gap) || 14;
      var W = p.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
      if (W <= 0) return;
      var avail = W - gap * 2;                         /* three cards + two gaps span the row */
      for (var i = 0; i < cards.length; i += 3) {
        var pat = PATTERNS3[(i / 3) % PATTERNS3.length];
        var a = cards[i], b = cards[i + 1], c3 = cards[i + 2];
        if (c3) {
          a._nat = Math.round(avail * pat[0]);
          b._nat = Math.round(avail * pat[1]);
          c3._nat = avail - a._nat - b._nat;
        } else if (b) {
          var av2 = W - gap;
          a._nat = Math.round(av2 * 0.5); b._nat = av2 - a._nat;
        } else { a._nat = W; }
      }
      cards.forEach(function (c) {
        if (!c._nat) return;
        c.style.transition = 'none';
        c.style.flex = '0 1 ' + c._nat + 'px';
        c.style.setProperty('height', workH() + 'px', 'important');
      });
    }
    cards.forEach(function (c) {
      c.style.boxSizing = 'border-box'; c.style.minWidth = '0';   /* shrink to the basis so row-mates resize in place, never wrap */
      c._nat = c.getBoundingClientRect().width;        /* natural design width — the grow basis (so a filtered row still fills) */
      var lb = c.querySelector('.card-label');          /* reveal the CMS-bound title/situation on hover (your Webflow styling, just toggled) */
      if (lb && DESK) { lb.classList.remove('hidden'); lb.style.opacity = '0'; lb.style.pointerEvents = 'none'; lb.style.zIndex = '4'; lb.style.transition = 'opacity .5s ' + EASE; }
      else if (lb) { lb.classList.remove('hidden'); }   /* mobile: CSS pins the title-only label visible */
    });
    /* HOME cap+filter-from-all (client): when Ben opens the homepage Works list past 6 (Show=all, sorted by
       Homepage Feature Order), show only the first 6 at rest and 6 MATCHING on filter — so the filter pulls
       from ALL works but the grid stays 6-up. Each shown card is given one of the 6 design SLOT widths by
       position, so the 2-up asymmetric rhythm holds whichever 6 show. No-op while the list is still 6. */
    var HOME = path === '/', HOME_CAP = 6;
    function HOME_H() { return window.innerWidth > 2200 ? Math.round(window.innerHeight * 0.5) : (window.innerWidth >= 1920 ? 480 : 420); }   /* home card height; 50vh on ultra-wide (v1.80), taller on big monitors (v1.74) */   /* client (v1.58): home projects lay out at "work page scale" — 2-3 per row, not the old full-width Designer rhythm */
    /* the 6 home card widths as asymmetric multi-up rows: 3-up on a wide window, 2-up on a narrow desktop
       (mobile <=767 keeps the Webflow full-width CSS). Mirrors the /work PATTERNS so home reads at that scale. */
    function homeSlotWidths() {
      var p = cards[0].parentElement, cs = getComputedStyle(p);
      var gap = parseFloat(cs.columnGap || cs.gap) || 14;
      var W = p.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
      if (W <= 0 || window.innerWidth < 768) return null;
      var cols = window.innerWidth < 1100 ? 2 : 3, out = [];
      for (var i = 0; i < HOME_CAP; i += cols) {
        if (cols === 3) {
          var avail = W - gap * 2, pat = PATTERNS3[(i / 3) % PATTERNS3.length];
          var a = Math.round(avail * pat[0]), b = Math.round(avail * pat[1]);
          out.push(a, b, avail - a - b);
        } else {
          var av2 = W - gap, p2 = PATTERNS2[(i / 2) % PATTERNS2.length], a2 = Math.round(av2 * p2[0]);
          out.push(a2, av2 - a2);
        }
      }
      return out;
    }
    var SLOTS = HOME ? (homeSlotWidths() || cards.slice(0, HOME_CAP).map(function (c) { return c._nat; })) : null;
    var HOME_MODE = HOME && cards.length > HOME_CAP;
    function homeShow(list) {
      var show = list.slice(0, HOME_CAP);
      cards.forEach(function (c) { c.style.display = show.indexOf(c) > -1 ? '' : 'none'; });
      show.forEach(function (c, i) {
        c._nat = SLOTS[i % SLOTS.length] || c._nat;
        if (window.innerWidth >= 768) c.style.setProperty('height', HOME_H() + 'px', 'important');   /* mobile keeps the Webflow full-width CSS height */
        else c.style.removeProperty('height');
      });
    }
    if (HOME_MODE) homeShow(cards.slice(0, HOME_CAP));
    assignPattern();
    function visible() { return cards.filter(function (c) { return c.style.display !== 'none'; }); }
    function relock(enableTrans) {                     /* grow visible cards to fill their rows, then freeze as px so hover can animate flex-basis cleanly */
      var vis = visible();
      vis.forEach(function (c) { c.style.transition = 'none'; c.style.flex = '1 1 ' + Math.round(c._nat) + 'px'; });
      vis.forEach(function (c) { c._rw = c.getBoundingClientRect().width; });
      vis.forEach(function (c) { c.style.flex = '0 1 ' + c._rw + 'px'; coverCV(c, c._rw); });   /* shrink:1 + exact (unrounded) so a sub-pixel total never wraps a card to the next row; clips re-cover the new width (a filtered-down row can grow a card well past 16:9) */
      if (enableTrans !== false) requestAnimationFrame(function () { vis.forEach(function (c) { c.style.transition = TRANS; }); });
    }
    if (DESK) relock();
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
        /* identical duration + curve on grower and shrinkers keeps the row's basis SUM constant at every
           frame (progress fractions cancel), so nothing can wrap — and both cards land together (the old
           90ms grow-delay read as a stutter) */
        c.style.transition = TRANS;
        c.style.flex = '0 1 ' + (isH ? target : remain * c._rw / otherRest) + 'px';
      });
      coverCV(card, target);                                            /* clip covers the width it's growing to */
    }
    function collapse() { visible().forEach(function (c) { c.style.transition = TRANS; c.style.flex = '0 1 ' + c._rw + 'px'; coverCV(c, c._rw); }); }
    /* width-first 16:9 COVER that FOLLOWS the card's width: the clip fills the card's width even when the
       card is wider than 16:9 (crop top/bottom). The card's width is a moving target — filter can leave one
       card to grow across the whole row, hover-expand widens it — so this is re-applied on relock, expand
       and collapse, sized to the width the card is heading to (w argument), never just its mount width. */
    function coverCV(card, w) {
      if (!card || !card._cv) return;
      var f = card._cv.querySelector('iframe'); if (!f) return;
      var h = card.getBoundingClientRect().height || 600;
      var iw = Math.ceil(Math.max(w || card.getBoundingClientRect().width, h * 16 / 9)) + 4;
      f.style.width = iw + 'px'; f.style.height = Math.ceil(iw * 9 / 16) + 'px';
      var z = cropZoomNear(card); if (z !== 1) f.style.transform = 'translate(-50%,-50%) scale(' + z + ')';   /* CMS Crop: zoom the hover clip to hide letterbox bars */
    }
    function mountVideo(card) {
      if ('_cv' in card) return;
      var src = vimeoEmbed((card.getAttribute('data-vimeo-url') || '').trim(), '540p');   /* v1.84: card-sized loops don't need the full-res stream (client: grid scroll lag); project pages + lightbox keep full quality */
      if (!src) { card._cv = null; return; }
      card._src = src;
      var wrap = document.createElement('div'); wrap.className = 'cedar-cardvid';
      var f = document.createElement('iframe'); f.allow = 'autoplay'; f.tabIndex = -1; f.setAttribute('aria-hidden', 'true');
      f.addEventListener('load', function () { try { ['play', 'playing', 'bufferend', 'timeupdate'].forEach(function (ev) { f.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: ev }), '*'); }); } catch (_) {} });   /* v1.78: subscribe to the frames-rendering events too, so the loading mark drops only when the clip is genuinely visible */
      wrap.appendChild(f);
      var anchor = card.querySelector('.card-label') || card.querySelector('.overlay');
      if (anchor) card.insertBefore(wrap, anchor); else card.appendChild(wrap);
      card._cv = wrap;
      coverCV(card, card._rw);   /* src set on hover (restarts each time) */
    }
    /* STALL WATCHDOG (client: rare — some preloaded clips load to a dead/black frame and never start,
       a transient Vimeo load failure on one clip in the batch). When a clip begins loading we watch it;
       if the player never even comes up (no 'ready'/'play' message from Vimeo within WATCH_MS) we reload
       it, cache-busted so it's a genuinely fresh request, up to MAX_RELOAD times. A clip that DID init but
       is only slow to buffer (any message = _alive) is granted one extra window before any reload, so a
       good-but-slow connection isn't churned; the reload is jittered so a coincidental batch can't re-storm
       Vimeo. Gives up quietly after MAX_RELOAD (a scroll-away-and-back re-arms it via the preload observer). */
    var WATCH_MS = 6500, MAX_RELOAD = 2;
    function clearWatch(c) { if (c && c._watch) { clearTimeout(c._watch); c._watch = null; } }
    function reloadVid(c) {
      if (!c || !c._cv || !c._src) return;
      c._reloads = (c._reloads || 0) + 1; c._alive = false; c._playing = false;
      var f = c._cv.querySelector('iframe'); if (f) f.src = 'about:blank';
      setTimeout(function () {
        if (!c._cv) return; var g = c._cv.querySelector('iframe'); if (!g || g.src !== 'about:blank') return;
        g.src = c._src + (c._src.indexOf('?') > -1 ? '&' : '?') + '_r=' + c._reloads;   /* cache-bust → fresh load, not a cached 429/error */
      }, 80 + Math.random() * 700);                                                     /* jitter desyncs any coincidental batch */
    }
    function armWatch(c) {
      clearWatch(c);
      c._watch = setTimeout(function () {
        if (!c || !c._cv || c._playing) return;                       /* healthy (or the watch was cleared on play) */
        var f = c._cv.querySelector('iframe');
        if (!f || !f.src || f.src === 'about:blank') return;          /* released by stopVid — not a failure */
        if ((c._reloads || 0) >= MAX_RELOAD) return;                  /* gave up quietly, no hammering */
        if (c._alive && !c._extended) { c._extended = true; armWatch(c); return; }   /* player is up, just buffering — one more window */
        reloadVid(c); armWatch(c);                                    /* never came up (or still dead) → reload and keep watching */
      }, WATCH_MS + Math.random() * 1200);
    }
    function playVid(c) {
      if (c && c._cv) {
        var f = c._cv.querySelector('iframe');
        if (f && c._src && (!f.src || f.src === 'about:blank')) {
          c._reloads = 0; c._extended = false; c._alive = false; c._playing = false;
          f.src = c._src; armWatch(c);   /* idempotent: starts the muted loop only if not already streaming, then watches the load */
        }
      }
    }
    function stopVid(c) { if (c && c._cv) { var f = c._cv.querySelector('iframe'); if (f) f.src = 'about:blank'; c._playing = false; clearWatch(c); } }        /* reclaim bandwidth once far off-screen; next hover re-buffers -> mark shows again */
    function label(c, on) { var l = c && c.querySelector('.card-label'); if (l) l.style.opacity = on ? '1' : '0'; }
    /* hover-clip LOADING MARK (client: same white wireframe chevron as the lightbox, now on the grid).
       ONE shared spinner moved into the hovered card's black .cedar-cardvid, shown until that clip reports
       playing — so it only appears when the clip is genuinely still buffering (most are preloaded). */
    var gSpin = null, gR = null, gS = null, gC = null, gG = null, gRaf = null, gBuilt = false;
    function buildGridSpin() {
      gSpin = el('div', 'cedar-grid-spin', '');
      var st = el('div', 'cedar-grid-spin-stage', ''); gSpin.appendChild(st);
      function svg() { if (gBuilt) return; st.innerHTML = '<svg class="cedar-lb-spin-svg" viewBox="0 0 374 283"><path d="M178.04 0L0 126.555V137.94L25.0235 144.296L178.04 83.6805H195.051L348.067 144.296L373.09 137.94V126.555L195.051 0H178.04Z"/><path d="M178.04 137.979L0 264.534V275.919L25.0235 282.276L178.04 221.66H195.051L348.067 282.276L373.09 275.919V264.534L195.051 137.979H178.04Z"/></svg>'; }
      (function wait(t) {
        if (gBuilt) return;
        if (!window.THREE) { if (t > 0) setTimeout(function () { wait(t - 1); }, 80); else svg(); return; }
        try {
          var T = window.THREE;
          gR = new T.WebGLRenderer({ alpha: true, antialias: true }); gR.setSize(52, 52); gR.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); st.appendChild(gR.domElement);
          gS = new T.Scene(); gC = new T.PerspectiveCamera(28, 1, 0.1, 200); gC.position.set(0, 0, 95);
          var RAW = [[178.04,0],[0,126.555],[0,137.94],[25.0235,144.296],[178.04,83.6805],[195.051,83.6805],[348.067,144.296],[373.09,137.94],[373.09,126.555],[195.051,0]];
          var MK = 45.009 / 373.09, MOFF = 137.979; gG = new T.Group();
          var mat = new T.LineBasicMaterial({ color: 0xf4f4f2, transparent: true, opacity: 0.96 });
          [RAW.map(function (p) { return [p[0]*MK, p[1]*MK]; }), RAW.map(function (p) { return [p[0]*MK, (p[1]+MOFF)*MK]; })].forEach(function (poly) {
            var s = new T.Shape(); poly.forEach(function (p, i) { var x = p[0]-22.5, y = -(p[1]-17.4); if (i) s.lineTo(x, y); else s.moveTo(x, y); }); s.closePath();
            var geo = new T.ExtrudeGeometry(s, { depth: 7, bevelEnabled: false }); geo.translate(0, 0, -3.5);
            gG.add(new T.LineSegments(new T.EdgesGeometry(geo, 12), mat));
          });
          gG.scale.setScalar(0.46); gS.add(gG); gBuilt = true;
        } catch (e) { svg(); }
      })(30);
    }
    function gridSpinLoop() {
      if (!gSpin || !gSpin.classList.contains('is-on')) { gRaf = null; return; }
      if (gR && gG) { gG.rotation.y += 0.02; gG.rotation.x = Math.sin(Date.now() / 2200) * 0.16; gR.render(gS, gC); }
      gRaf = requestAnimationFrame(gridSpinLoop);
    }
    function hideGridSpin() { if (gSpin) gSpin.classList.remove('is-on'); }
    function showGridSpin(card) {                      /* client (v1.78): RESTORED (removed v1.58, wanted back) — shows while a hover clip buffers, dropped only once frames genuinely render */
      if (RM || TOUCH) return;
      if (card && card._cv && !card._playing) {
        if (!gSpin) buildGridSpin();
        card._cv.appendChild(gSpin); gSpin.classList.add('is-on');
        if (!gRaf) gRaf = requestAnimationFrame(gridSpinLoop);
      } else hideGridSpin();
    }
    window.addEventListener('message', function (e) {   /* a clip reports in -> mark it live, drop the loading mark, feed the stall watchdog */
      if ((e.origin || '').indexOf('vimeo') === -1) return;
      var d; try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (_) { return; }
      if (!d) return;
      var c = null;
      for (var i = 0; i < cards.length; i++) {
        var cv = cards[i]._cv; if (!cv) continue;
        var f = cv.querySelector('iframe');
        if (f && f.contentWindow === e.source) { c = cards[i]; break; }
      }
      if (!c) return;
      c._alive = true;                                   /* ANY message means the Vimeo player initialized (not a dead load) */
      if (d.event === 'error') { clearWatch(c); if ((c._reloads || 0) < MAX_RELOAD) { reloadVid(c); armWatch(c); } return; }
      if (d.event === 'play') clearWatch(c);            /* playback requested = healthy load, stop the watchdog — but frames may not be up yet, so the mark stays */
      if (d.event === 'playing' || d.event === 'bufferend' || (d.event === 'timeupdate' && d.data && d.data.seconds > 0)) {
        c._playing = true; clearWatch(c);               /* frames genuinely rendering -> drop the mark (v1.78: 'play' alone fires while still black) */
        if (c === active) hideGridSpin();
      }
    });
    /* single active card + debounced hover (intent-in, settle-out) so the moving edges can't ping-pong */
    var active = null, enterT, leaveT;
    function setActive(card) {
      if (active === card) return;
      if (active) { active.classList.remove('cedar-hover'); label(active, false); }   /* clip keeps looping muted underneath — hover-out is just a fade */
      hideGridSpin();
      active = card;
      collapse();
      if (card) { mountVideo(card); card.classList.add('cedar-hover'); label(card, true); playVid(card); expand(card); showGridSpin(card); }
    }
    /* PRELOAD (client: kill the black gap between hover and playback): clips mount + start their muted
       loop as the card NEARS the viewport, so hover only fades in an already-playing stream. Streams are
       released once the card is ~1.5 screens away. Desktop only. */
    if (DESK) afterLoader(function () {
      if (!('IntersectionObserver' in window)) return;   /* fallback = old on-hover load */
      var vio = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          var c = en.target;
          if (en.isIntersecting) { mountVideo(c); playVid(c); }
          else if (Math.abs(en.boundingClientRect.top) > window.innerHeight * 1.5) { if (c !== active) stopVid(c); }
        });
      }, { rootMargin: '60% 0px 60% 0px' });
      cards.forEach(function (c) { vio.observe(c); });
    });
    /* MOBILE (client): no hover, so a card plays its muted clip while it's in view and stops when it
       scrolls away — keeps ~1-2 streams live at a time (fires at the 50% crossing). Touch + motion only. */
    if (TOUCH && !RM && 'IntersectionObserver' in window) afterLoader(function () {
      var mio = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          var c = en.target;
          if (en.intersectionRatio >= 0.5) { mountVideo(c); playVid(c); c.classList.add('cedar-playing'); }
          else { stopVid(c); c.classList.remove('cedar-playing'); }
        });
      }, { threshold: [0, 0.5, 1] });
      cards.forEach(function (c) { mio.observe(c); });
    });
    if (DESK) cards.forEach(function (card) {
      card.addEventListener('mouseenter', function () { clearTimeout(leaveT); if (active === card) return; clearTimeout(enterT); enterT = setTimeout(function () { setActive(card); }, 80); });
      card.addEventListener('mouseleave', function () { clearTimeout(enterT); clearTimeout(leaveT); leaveT = setTimeout(function () { setActive(null); }, 130); });
    });
    var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () {
      if (active) return;
      if (HOME_MODE) {                                   /* re-slot the shown home cards for the new width (3-up <-> 2-up) */
        var ns = homeSlotWidths();
        if (ns) { SLOTS = ns; visible().forEach(function (c, i) { c._nat = ns[i % ns.length] || c._nat; c.style.setProperty('height', HOME_H() + 'px', 'important'); }); }
        else visible().forEach(function (c) { c.style.removeProperty('height'); });
      } else assignPattern();
      if (DESK) relock();
    }, 160); });

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
      /* ---- v1.87 SEARCH (client): square icon button LEFT of the filter icon, same measured size; a click
         expands it in place into a live search bar (the buttons after it shift over) that filters the grid
         as you type — composing with the tag filters (AND). Esc or emptying + blur collapses it. ---- */
      var Q = '', searchBtn = null, searchInput = null, searchH = 0;
      var icoPill = document.querySelector('.filter-pill.icon');
      if (icoPill && icoPill.parentElement) {
        searchBtn = el('div', 'filter-pill icon cedar-search', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="7"/><path d="M21 21l-4.8-4.8"/></svg>');
        searchBtn.setAttribute('role', 'search');
        searchInput = document.createElement('input');
        searchInput.type = 'text'; searchInput.placeholder = 'Search projects'; searchInput.setAttribute('aria-label', 'Search projects');
        searchBtn.appendChild(searchInput);
        icoPill.parentElement.insertBefore(searchBtn, icoPill);
        searchBtn.addEventListener('click', function (e) {
          e.stopPropagation();                                   /* don't toggle the filter panel (search shares the .filter-pill class for its look) */
          if (!searchBtn.classList.contains('is-open')) { searchBtn.classList.add('is-open'); sizeSearch(); setTimeout(function () { searchInput.focus(); }, 160); }
        });
        searchInput.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') { searchInput.value = ''; qUpd(''); searchBtn.classList.remove('is-open'); sizeSearch(); searchInput.blur(); e.stopPropagation(); }
        });
        searchInput.addEventListener('blur', function () { setTimeout(function () { if (!Q) { searchBtn.classList.remove('is-open'); sizeSearch(); } }, 150); });   /* stays open while a term is active */
        var qT; searchInput.addEventListener('input', function () { clearTimeout(qT); qT = setTimeout(function () { qUpd(searchInput.value); }, 140); });
      }
      function sizeSearch(h) {
        if (!searchBtn) return;
        if (h) searchH = h;
        if (!searchH) return;
        var open = searchBtn.classList.contains('is-open');
        searchBtn.style.setProperty('height', searchH + 'px', 'important');
        searchBtn.style.setProperty('width', (open ? Math.min(300, Math.round(window.innerWidth * 0.4)) : searchH) + 'px', 'important');
        var s = searchBtn.querySelector('svg');
        if (s) { var g = Math.round(searchH * 0.5); s.style.setProperty('width', g + 'px', 'important'); s.style.setProperty('height', g + 'px', 'important'); }
      }
      function qUpd(v) { Q = (v || '').trim().toLowerCase(); apply(); }
      function searchText(c) { if (c._sTxt == null) c._sTxt = ((c.textContent || '') + ' ' + (c.getAttribute('data-industry') || '')).toLowerCase(); return c._sTxt; }
      /* v1.75: size the tag-icon square to the MEASURED text-pill height (mac and windows compute the
         pill's line-height differently, so any hardcoded px matches one platform and not the other —
         Ben's Thunderbolt screenshot showed a ~34px pill against the 27px icon) */
      function syncIcon() {
        if (!pillEl) return;
        var ico = document.querySelector('.filter-pill.icon');
        if (!ico) return;
        var h = Math.round(pillEl.getBoundingClientRect().height);
        if (h < 14) return;
        ico.style.setProperty('width', h + 'px', 'important');
        ico.style.setProperty('height', h + 'px', 'important');
        var s = ico.querySelector('svg');
        if (s) { var g = Math.round(h * 0.52); s.style.setProperty('width', g + 'px', 'important'); s.style.setProperty('height', g + 'px', 'important'); }
        sizeSearch(h);                                 /* v1.87: the search square rides the same measured size */
      }
      syncIcon();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(syncIcon, 60); });   /* re-measure once the webfont (and its real metrics) is in */
      window.addEventListener('resize', function () { setTimeout(syncIcon, 120); });
      var closeT;
      if (!TOUCH) {
        controls.addEventListener('mouseenter', function () { if (searchBtn && searchBtn.classList.contains('is-open')) return; clearTimeout(closeT); controls.classList.add('cfp-open'); });   /* v1.87: an expanded search bar owns the row — no panel fly-open under the typing hand */
        controls.addEventListener('mouseleave', function () { closeT = setTimeout(function () { controls.classList.remove('cfp-open'); }, 200); });
      } else {                                          /* touch: tap the pill to toggle, tap outside to close */
        controls.addEventListener('click', function (e) { if (e.target.closest('.filter-pill')) { e.preventDefault(); controls.classList.toggle('cfp-open'); } });
        document.addEventListener('click', function (e) { if (!controls.contains(e.target)) controls.classList.remove('cfp-open'); });
      }
      function match(c) { return (!Q || searchText(c).indexOf(Q) > -1) && GROUPS.every(function (g) { var sel = Object.keys(g.sel); if (!sel.length) return true; return g.get(c).some(function (v) { return g.sel[v]; }); }); }   /* v1.87: search term ANDs with the tag filters */
      function capUpd() { var picks = GROUPS.reduce(function (a, g) { return a.concat(Object.keys(g.sel)); }, []); if (caption) caption.textContent = 'Filter: ' + (picks.length ? picks.join(', ') : 'All'); if (xbtn) xbtn.style.display = picks.length ? 'inline-flex' : 'none'; }
      function apply() {
        if (HOME_MODE) {                                /* home: pick the first 6 MATCHING across all works, cross-fade the grid */
          var kept = cards.filter(match).slice(0, HOME_CAP);
          if (!kept.length && !Q) { GROUPS.forEach(function (g) { g.sel = {}; g.values.forEach(function (v) { g.chips[v].classList.remove('is-on'); }); }); kept = cards.slice(0, HOME_CAP); }   /* v1.87: an unmatched SEARCH is allowed to read empty (honest feedback while typing); only the tag filters auto-reset */
          capUpd();
          if (!DESK) { homeShow(kept); return; }
          var cur = visible();
          cur.forEach(function (c) { c.style.transition = 'opacity .3s ' + EASE; c.style.opacity = '0'; });
          setTimeout(function () {
            homeShow(kept); relock(false);
            visible().forEach(function (c) { c.style.transition = 'none'; c.style.opacity = '0'; });
            requestAnimationFrame(function () {
              visible().forEach(function (c) { c.style.transition = 'opacity .5s ' + EASE; c.style.opacity = '1'; });
              setTimeout(function () { visible().forEach(function (c) { c.style.transition = TRANS; c.style.opacity = ''; }); }, 520);
            });
          }, 220);
          return;
        }
        var keep = cards.filter(match);
        if (!keep.length && !Q) { GROUPS.forEach(function (g) { g.sel = {}; g.values.forEach(function (v) { g.chips[v].classList.remove('is-on'); }); }); keep = cards.slice(); }  /* never empty the grid — unless a SEARCH term is live (v1.87): an unmatched search honestly reads empty */
        if (!DESK) {                                    /* touch / reduced motion: simple show-hide, no FLIP reflow */
          cards.forEach(function (c) { c.style.display = keep.indexOf(c) > -1 ? '' : 'none'; });
          capUpd();
          return;
        }
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
      m.setAttribute('data-lenis-prevent', '');   /* Lenis preventDefaults the wheel site-wide — without this the modal's overflow:auto can never wheel-scroll (long rich text was stuck) */
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

    /* ---- W2: situation / results modals — content from hidden CMS blocks.
       The first pill's LABEL is Ben's copy (was "the situation", renamed "More Information") — match any
       known label and let the modal heading mirror whatever the pill says. The situation block also holds
       the project's AWARDS collection list (hidden on-page by our CSS); its items are listed in the first
       modal under an Awards label. Items read as empty until the Name field is bound INSIDE the collection
       item in the Designer — only items that actually carry text (or an image) are rendered. ---- */
    function richOf(id) { var n = document.getElementById(id); return (n && n.textContent.trim()) ? n.innerHTML : ''; }
    function pillByText(labels) {
      var found = null;
      main.querySelectorAll('.filter-pill').forEach(function (p) { if (!found && labels.indexOf((p.textContent || '').trim().toLowerCase()) > -1) found = p; });
      return found;
    }
    function awardRows() {
      var rows = [];
      document.querySelectorAll('.work-situation .w-dyn-list .w-dyn-item').forEach(function (it) {
        var txt = (it.textContent || '').trim();
        var img = it.querySelector('img:not(.w-dyn-bind-empty)');
        if (!txt && !img) return;                        /* nothing bound inside the item yet */
        rows.push({ txt: txt, src: img ? (img.currentSrc || img.src || '') : '' });
      });
      return rows;
    }
    [[['the situation', 'more information', 'read more'], 'cms-situation-modal', true],
     [['the results'], 'cms-results-modal', false]].forEach(function (cfg) {
      var pill = pillByText(cfg[0]); if (!pill) return;
      var html = richOf(cfg[1]);
      var awards = cfg[2] ? awardRows() : [];
      var section = pill.closest('section');
      if (!html && !awards.length) {                     /* conditional visibility: nothing to show -> hide pill */
        pill.style.display = 'none';
        if (!cfg[2] && section) {                        /* hide whole results CTA if its heading is also empty */
          var hd = section.querySelector('.heading-2, h1, h2');
          if (!hd || !hd.textContent.trim()) section.style.display = 'none';
        }
        return;
      }
      var title = (pill.textContent || '').trim();       /* heading = the pill's own label (Ben's copy) */
      pill.style.cursor = 'pointer';
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        modal.open(function (m) {
          m.appendChild(el('h3', null, title));
          if (html) m.appendChild(el('div', 'cm-body cm-rich', html));
          if (awards.length) {
            m.appendChild(el('div', 'cm-awards-label', 'Awards'));
            var ul = el('ul', 'cm-awards', '');
            awards.forEach(function (a) {
              var li = el('li', null, '');
              if (a.src) { var im = document.createElement('img'); im.src = a.src; im.alt = ''; li.appendChild(im); }
              li.appendChild(document.createTextNode(a.txt));
              ul.appendChild(li);
            });
            m.appendChild(ul);
          }
        });
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

    /* ---- W3: BTS — auto-cycling feature + strip. The leftmost strip thumb is always the NEXT
       photo; on each beat it slides left "into" the feature (which crossfades to it, arriving
       with a slight drift from the right), the row rotates in the DOM, and the loop is infinite
       in both directions. No scrollbar (the strip clips). Thumb click features that photo;
       arrows step either way; everything pauses while hovered / hidden / a modal is open.
       "View the gallery" opens the drag-coverflow (built below). Reduced motion: instant swaps,
       no auto-advance. ---- */
    (function () {
      var feature = document.querySelector('.bts-feature');
      var strip = document.querySelector('.bts-images');
      var btsSection = feature && feature.closest('section');
      var fItems = feature ? [].slice.call(feature.querySelectorAll('.w-dyn-item')) : [];
      var row = strip ? strip.querySelector('.w-dyn-items') : null;
      var thumbs = row ? [].slice.call(row.children) : [];
      if (!fItems.length || !thumbs.length || !row) { if (btsSection) btsSection.style.display = 'none'; return; }
      var n = fItems.length;
      var AUTO_MS = 3400, SLIDE_MS = 700;                     /* beat + slide length; tunable */

      /* feature: absolute stack + crossfade (container height locked to the photo ratio) */
      var fWrap = fItems[0].parentElement;
      fWrap.style.position = 'relative';
      function lockH() {
        var img = fItems[0].querySelector('img');
        var w = fWrap.clientWidth || fWrap.parentElement.clientWidth || 1;
        var ar = (img && img.naturalWidth) ? img.naturalHeight / img.naturalWidth : 686 / 721;
        fWrap.style.height = Math.round(w * ar) + 'px';
      }
      fItems.forEach(function (it, i) {
        it.style.position = 'absolute'; it.style.inset = '0';
        it.style.opacity = i === 0 ? '1' : '0';
        if (!RM) it.style.transition = 'opacity .75s ' + EASE + ',transform .75s ' + EASE;
        var im = it.querySelector('img'); if (im) { im.style.width = '100%'; im.style.height = '100%'; im.style.objectFit = 'cover'; }
      });
      var fImg0 = fItems[0].querySelector('img');
      if (fImg0 && !fImg0.complete) fImg0.addEventListener('load', lockH);
      lockH();
      window.addEventListener('resize', lockH);
      var active = 0;
      function showFeature(i, drift) {
        i = ((i % n) + n) % n;
        if (i === active) return;
        var oldIt = fItems[active], newIt = fItems[i];
        if (!RM && drift) {                                    /* arrive from the right — "the next one moving over" */
          newIt.style.transition = 'none'; newIt.style.transform = 'translateX(36px)';
          void newIt.offsetWidth;
          newIt.style.transition = 'opacity .75s ' + EASE + ',transform .75s ' + EASE;
        }
        oldIt.style.opacity = '0'; newIt.style.opacity = '1'; newIt.style.transform = 'translateX(0)';
        active = i;
      }

      /* strip: rotate so it always starts at "next" (feature 0 → row starts at 1) */
      thumbs.forEach(function (t, i) { t._idx = i; t.classList.add('cedar-bts-thumb'); });
      row.appendChild(row.children[0]);
      var gap = parseFloat(getComputedStyle(row).columnGap || getComputedStyle(row).gap) || 20;
      var animating = false;
      function advance() {
        if (animating) return; animating = true;
        var first = row.children[0];
        var w = first.getBoundingClientRect().width + gap;
        showFeature(first._idx, true);
        if (RM || w < 12) { row.appendChild(first); animating = false; return; }
        row.style.transition = 'transform ' + SLIDE_MS + 'ms ' + EASE;
        row.style.transform = 'translateX(-' + w + 'px)';
        setTimeout(function () {
          row.style.transition = 'none';
          row.appendChild(first);
          row.style.transform = 'translateX(0)';
          void row.offsetWidth;
          animating = false;
        }, SLIDE_MS + 40);
      }
      function retreat() {
        if (animating) return; animating = true;
        var last = row.children[row.children.length - 1];
        var w = last.getBoundingClientRect().width + gap;
        showFeature(active - 1, false);
        if (RM || w < 12) { row.insertBefore(last, row.children[0]); animating = false; return; }
        row.style.transition = 'none';
        row.insertBefore(last, row.children[0]);
        row.style.transform = 'translateX(-' + w + 'px)';
        void row.offsetWidth;
        row.style.transition = 'transform ' + SLIDE_MS + 'ms ' + EASE;
        row.style.transform = 'translateX(0)';
        setTimeout(function () { animating = false; }, SLIDE_MS + 40);
      }
      row.addEventListener('click', function (e) {            /* thumb click: feature it, queue restarts after it */
        var t = e.target.closest('.cedar-bts-thumb'); if (!t || animating) return;
        showFeature(t._idx, true);
        var guard = 0;
        while (row.children[0]._idx !== ((t._idx + 1) % n) && guard++ < n) row.appendChild(row.children[0]);
        schedule();
      });

      /* auto-advance: paused while hovered, tab hidden, section off-screen, or a modal is open */
      var hoverPause = false;
      var split = feature.closest('.split-row') || btsSection;
      if (split) { split.addEventListener('mouseenter', function () { hoverPause = true; }); split.addEventListener('mouseleave', function () { hoverPause = false; }); }
      function inView() { var r = (btsSection || fWrap).getBoundingClientRect(); return r.bottom > 0 && r.top < (window.innerHeight || 800); }
      function paused() { return document.hidden || hoverPause || document.querySelector('.cedar-cf.is-open,.cedar-lb.is-open,#cedar-modal-root.is-open') || !inView(); }
      var timer = null;
      function schedule() {
        clearTimeout(timer);
        if (RM) return;                                        /* reduced motion: no auto-cycle */
        timer = setTimeout(function () { if (!paused()) advance(); schedule(); }, AUTO_MS);
      }
      afterLoader(schedule);

      /* ---- drag-coverflow gallery modal: infinite, center-large, sides shrink + fade,
         cursor morphs into a "click and drag" pill that follows the pointer ---- */
      var cf = null, cfCards = [], cfPos = 0, cfVel = 0, cfSp = 380, cfRaf = null, cfDrag = false;
      var pill, mx = 0, my = 0, px = -200, py = -200;
      function cfRender() {
        var m = cfCards.length;
        cfSp = Math.min(420, window.innerWidth * 0.27);
        for (var i = 0; i < m; i++) {
          var off = (((i - cfPos) % m) + m) % m;
          if (off > m / 2) off -= m;
          var a = Math.abs(off);
          var c = cfCards[i];
          if (a > 3.2) { c.style.display = 'none'; continue; }
          c.style.display = '';
          /* mobile: the CENTER card reads 1.5x while the neighbours keep their desktop sizes (blend back by a=1) */
          var CS = window.innerWidth < 768 ? 1.5 : 1;
          var sc = a < 1 ? (CS + (0.82 - CS) * a) : Math.max(0.4, 1 - 0.18 * a);
          c.style.transform = 'translate(calc(-50% + ' + (off * cfSp).toFixed(1) + 'px),-50%) scale(' + sc.toFixed(3) + ')';
          /* v1.83: stay fully opaque out to a=2.2, then fade to nothing by the a=3.2 cull line, so a
             card only turns transparent as it leaves the stage entirely — never while another card is
             still behind it. Depth is carried by scale + the ::after scrim instead. */
          c.style.opacity = (a <= 2.2 ? 1 : Math.max(0, 1 - (a - 2.2))).toFixed(3);
          c.style.setProperty('--cf-dim', Math.min(0.55, 0.26 * a).toFixed(3));
          c.style.zIndex = String(200 - Math.round(a * 10));
        }
      }
      function cfLoop() {
        if (!cf || !cf.classList.contains('is-open')) { cfRaf = null; return; }
        if (!cfDrag) {
          if (!RM && Math.abs(cfVel) > 0.0012) { cfPos += cfVel; cfVel *= 0.92; }
          else { var t = Math.round(cfPos); cfPos += (t - cfPos) * 0.14; }
        }
        cfRender();
        px += (mx - px) * 0.22; py += (my - py) * 0.22;
        pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px';
        cfRaf = requestAnimationFrame(cfLoop);
      }
      function cfKick() { if (!cfRaf) cfRaf = requestAnimationFrame(cfLoop); }
      function buildCF() {
        cf = el('div', 'cedar-cf', '');
        var stage = el('div', 'cedar-cf-stage', '');
        fItems.forEach(function (it) {
          var im = it.querySelector('img'); if (!im) return;
          var card = el('div', 'cedar-cf-card', '');
          var c = document.createElement('img'); c.src = im.currentSrc || im.src; c.alt = im.alt || ''; c.draggable = false;
          card.appendChild(c); stage.appendChild(card); cfCards.push(card);
        });
        var close = el('button', 'cedar-lb-close', '&times;'); close.setAttribute('aria-label', 'Close gallery');
        pill = el('div', 'cedar-cf-pill', 'Click and drag');
        cf.appendChild(stage); cf.appendChild(close); cf.appendChild(pill);
        document.body.appendChild(cf);
        close.addEventListener('click', cfClose);
        var lastX = 0;
        stage.addEventListener('pointerdown', function (e) {
          cfDrag = true; cfVel = 0; lastX = e.clientX;
          try { stage.setPointerCapture(e.pointerId); } catch (_) {}
          pill.classList.add('is-down');
        });
        stage.addEventListener('pointermove', function (e) {
          mx = e.clientX; my = e.clientY; pill.classList.add('is-on');
          if (cfDrag) {
            var d = (e.clientX - lastX) / cfSp;
            cfPos -= d; cfVel = cfVel * 0.75 + (-d) * 0.55;    /* smoothed release velocity */
            lastX = e.clientX;
          }
        });
        function up() { cfDrag = false; pill.classList.remove('is-down'); }
        stage.addEventListener('pointerup', up);
        stage.addEventListener('pointercancel', up);
        stage.addEventListener('pointerleave', function () { pill.classList.remove('is-on'); });
        document.addEventListener('keydown', function (e) { if ((e.key === 'Escape' || e.keyCode === 27) && cf.classList.contains('is-open')) cfClose(); });
      }
      function cfOpen() {
        if (!cf) buildCF();
        if (!cfCards.length) return;
        cfPos = active; cfVel = 0; px = mx = window.innerWidth / 2; py = my = window.innerHeight / 2;
        cfRender();
        document.documentElement.style.overflow = 'hidden';
        requestAnimationFrame(function () { cf.classList.add('is-open'); cfKick(); });
      }
      function cfClose() {
        cf.classList.remove('is-open');
        pill.classList.remove('is-on');
        document.documentElement.style.overflow = '';
        showFeature(((Math.round(cfPos) % n) + n) % n, false);  /* land the feature where the browse ended */
        var guard = 0;
        while (row.children[0]._idx !== ((active + 1) % n) && guard++ < n) row.appendChild(row.children[0]);
      }

      var controls = document.querySelector('.bts-controls');
      if (controls) {
        var bar = el('div', 'cedar-vo-arrows', '<button class="cedar-vo-arrow" aria-label="Previous">‹</button><button class="cedar-vo-arrow" aria-label="Next">›</button>');
        var gal = el('a', 'cedar-bts-gallery-btn', 'View the gallery'); gal.setAttribute('role', 'button');
        bar.appendChild(gal); controls.appendChild(bar);
        bar.children[0].addEventListener('click', function () { retreat(); schedule(); });
        bar.children[1].addEventListener('click', function () { advance(); schedule(); });
        gal.addEventListener('click', cfOpen);
      }
    })();

    /* ---- W4: view-other — whole card links via data-slug + arrow slider. Curation rules (client):
       never show THIS project; prefer projects sharing this project's Industry (activates once the
       Designer binds data-industry on the preview cards + data-current-industry somewhere on the page);
       and rotate the deck per-project so every page leads with a different suggestion. ---- */
    (function () {
      var wrap = document.querySelector('.more-projects'); if (!wrap) return;
      var all = [].slice.call(wrap.querySelectorAll('.project-preview'));
      var track = wrap.querySelector('.w-dyn-items');
      function slugOf(c) { var s = c.querySelector('[data-slug]'); return s ? s.getAttribute('data-slug') : null; }
      function indOf(c) { if (c.hasAttribute('data-industry')) return c.getAttribute('data-industry'); var n = c.querySelector('[data-industry]'); return n ? n.getAttribute('data-industry') : null; }
      var curSlug = (location.pathname.match(/\/work\/([^/]+)/) || [])[1] || '';
      var curIndEl = document.querySelector('[data-current-industry]');
      var curInd = curIndEl ? (curIndEl.getAttribute('data-current-industry') || '').trim() : '';
      var keep = all.filter(function (c) { return slugOf(c) !== curSlug; });
      if (curInd) {
        var match = keep.filter(function (c) { return (indOf(c) || '').trim() === curInd; });
        if (match.length >= 2) keep = match;
      }
      if (keep.length > 1) {                              /* deterministic per-project rotation — no page always leads with work #1 */
        var hash = 0; for (var i = 0; i < curSlug.length; i++) hash = (hash * 31 + curSlug.charCodeAt(i)) >>> 0;
        var selfIdx = all.map(slugOf).indexOf(curSlug);
        var rot = (selfIdx >= 0 ? selfIdx : hash) % keep.length;
        keep = keep.slice(rot).concat(keep.slice(0, rot));
      }
      if (track) { all.forEach(function (c) { c.style.display = 'none'; }); keep.forEach(function (c) { c.style.display = ''; track.appendChild(c); }); }
      var cards = keep.length ? keep : all;
      cards.forEach(function (card) {
        var slug = slugOf(card);
        if (!slug) return;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () { window.location.href = '/work/' + slug; });
      });
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
      if (n.classList.contains('work-heading') || n.classList.contains('contact-head')) return false; /* these two get their own intro modules (17 / 20) — a shared transform would fight the scrub/cascade */
      return !n.closest('.navbar,.site-footer,#cedar-loader,.cedar-marquee,.acc-inner'); /* never hide chrome/logos, or accordion body copy (it opens on click) */
    });
    if (!nodes.length) return;
    nodes.forEach(function (n) {
      n.classList.add('cedar-reveal');
      /* client: "Grown in Birmingham" (/about) landed too late — the tall gib column revealed off its own top.
         Trigger the gib column + everything inside it as soon as the column's top enters the viewport. */
      if (n.classList.contains('gib-left') || n.classList.contains('gib-right') || (n.closest && n.closest('.gib-left,.gib-right'))) n._cedarEarly = 1;
    });
    function show(n, d) {
      if (n.classList.contains('cedar-in')) return;
      n.style.transitionDelay = (d || 0) + 'ms';
      n.classList.add('cedar-in');
      /* once landed, strip our classes entirely — .cedar-in's transform/opacity transition would otherwise
         sit on the element FOREVER and rubber-band any native Webflow hover (GSAP inline transforms)
         that touches it or renders through it (buttons in CTAs, the about cards now on the homepage) */
      setTimeout(function () { n.classList.remove('cedar-reveal', 'cedar-in'); n.style.transitionDelay = ''; }, (d || 0) + 900);
    }
    /* Scroll-position driven (not one-shot IO): an element reveals once its top crosses
       85% of the viewport — i.e. as it scrolls into view from the bottom. Anything already
       above that line (incl. scrolled-past on a fast flick) reveals too, so nothing is ever
       stranded hidden. No time sweep, so below-fold sections never animate before you reach them. */
    afterLoader(function () {
      var pending = nodes.slice(), ticking = false;
      function sweep() {
        ticking = false;
        var vh = (window.innerHeight || document.documentElement.clientHeight);
        var line = vh * 0.85;
        var batch = 0, any = false;
        for (var i = 0; i < pending.length; i++) {
          var n = pending[i]; if (!n) continue;
          var trigger = n._cedarEarly ? vh : line;         /* gib reveals the instant its top enters the viewport (earlier) */
          if (n.getBoundingClientRect().top < trigger) { show(n, (batch++) * 90); pending[i] = null; any = true; }
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
      /* CMS-aware: a Collection List inside the row (bound to Client Logos) supersedes the static images —
         its items become the marquee slots and the old static logos are retired (hidden, recoverable) */
      var dyn = row.querySelector('.w-dyn-list');
      var slots;
      if (dyn && dyn.querySelectorAll('.w-dyn-item').length > 1) {
        slots = [].slice.call(dyn.querySelectorAll('.w-dyn-item'));
        [].slice.call(row.children).forEach(function (c) { if (c !== dyn) c.style.display = 'none'; });
      } else {
        slots = [].slice.call(row.children);
      }
      if (slots.length < 2) return;
      var track = el('div', 'cedar-marquee-track', '');
      track.style.gap = '80px';   /* client: gap 100→80px (−20%) while logos halved (50px) → more spaced out */
      slots.forEach(function (s) { track.appendChild(s); });   /* one logo set = the repeating unit */
      if (dyn) dyn.style.display = 'none';                     /* emptied wrapper (items moved into the track) */
      row.classList.add('cedar-marquee');
      row.appendChild(track);
      var unit = [].slice.call(track.children);                /* keep the original nodes as templates */
      function build() {
        track.innerHTML = '';
        unit.forEach(function (n) { track.appendChild(n); });
        /* repeat the unit until one "half" spans the (full-bleed) row, so the -50% wrap never shows a gap */
        var guard = 0;
        while (track.scrollWidth < row.clientWidth && guard < 40) {
          unit.forEach(function (n) { track.appendChild(n.cloneNode(true)); });
          guard++;
        }
        /* duplicate the whole half once -> two identical halves -> seamless translateX(-50%) */
        [].slice.call(track.children).forEach(function (c) { var cl = c.cloneNode(true); cl.setAttribute('aria-hidden', 'true'); track.appendChild(cl); });
        /* constant crawl: duration follows the loop width so the speed never changes with logo count
           or viewport (a fixed duration made wide tracks race and narrow ones crawl). 35px/s = slow. */
        track.style.animationDuration = Math.max(20, (track.scrollWidth / 2) / 35).toFixed(1) + 's';
      }
      build();
      var rt;
      window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(build, 200); });
      window.addEventListener('load', build);                  /* re-measure once logos have their final widths */
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
    /* v1.84: /about keeps the nav on screen, solid white, for the whole page — client: less
       tech-savvy visitors got lost when it hid. The intro (module 11) still holds it back
       during the logo reveal; the moment that releases, the nav is in and never leaves. */
    var PIN_ABOUT = false;   /* v1.87 (client): /about nav behaves like every other page — hide on scroll-down, return on scroll-up. (v1.84 pinned it solid; that read was a misunderstanding of the note. The about floor below still holds it back during the intro header.) */

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
    /* both nav logos always link home (the mark shipped with href="#") */
    ['a.nav-logo', 'a.nav-mark'].forEach(function (s) { var a = document.querySelector(s); if (a && (a.getAttribute('href') || '#') === '#') a.setAttribute('href', '/'); });
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
    /* v1.82: PROJECT-PAGE HERO = ALWAYS WHITE INK, no probing. The hero band is a film on a black
       backdrop, so the answer is known before the page even renders — v1.81's re-probe still let the
       nav paint dark for a frame or two while the Vimeo iframe mounted, and if the probe ever fell
       through (empty video URL, slow embed) it stayed wrong. Structural rule instead: while the nav
       band overlaps the hero band, ink is WHITE, full stop — correct from the very first paint. Any
       other position still falls through to the probe below. */
    var heroBand = null, heroLooked = false;
    function overHero() {
      if (!heroLooked) { heroLooked = true; heroBand = document.querySelector('.photo-band.hero-band, .hero-band'); }
      if (!heroBand) return false;
      var y = Math.round(nav.getBoundingClientRect().height / 2) || 37;
      var r = heroBand.getBoundingClientRect();
      return r.top <= y && r.bottom > y;
    }
    function updInk() {
      var dark = overHero() || isDarkBehind();
      nav.classList.toggle('cedar-nav-dark', dark);
      nav.classList.toggle('cedar-nav-light', !dark);
    }
    /* v1.81: the probe (elementsFromPoint + a getComputedStyle loop) ran on EVERY scroll frame and was
       the main scroll-jank cost site-wide — clients felt it as scrolling that "catches". Throttle it:
       re-probe at most every 120ms, or immediately after a half-viewport jump. The nav ink transition
       is .35s anyway, so a ≤120ms-late flip is invisible. Init / loader-lift / resize paths still call
       updInk() directly. */
    var inkAt = 0, inkY = -1;
    function updInkLazy(y) {
      var now = Date.now();
      if (now - inkAt < 120 && Math.abs(y - inkY) < window.innerHeight * 0.5) return;
      inkAt = now; inkY = y; updInk();
    }

    var lastY = window.pageYOffset || 0, hidden = false, ticking = false;
    /* the sticky filter row (and anything else that wants to sit under the nav) reads this state:
       body.cedar-nav-in = the nav is on screen; --cedar-nav-h = its measured height */
    function setNavH() { document.documentElement.style.setProperty('--cedar-nav-h', Math.round(nav.getBoundingClientRect().height || 74) + 'px'); }
    function setShown(on) { if (document.body) document.body.classList.toggle('cedar-nav-in', on); }
    function onFrame() {
      ticking = false;
      var y = window.pageYOffset || 0;
      if (window.__cedarMenuOpen) { nav.classList.remove('cedar-nav-hidden'); hidden = false; setShown(true); lastY = y; return; }   /* mobile menu open → nav stays put */
      if (window.__cedarAboutIntro) { nav.classList.add('cedar-nav-hidden'); hidden = true; setShown(false); lastY = y; return; }   /* about intro (reveal phase) holds the nav hidden */
      if (PIN_ABOUT) {                                   /* v1.84: shown + solid white at every scroll position; .cedar-nav-solid forces charcoal ink in CSS, so the luminance probe is skipped (it was the jank cost) */
        /* v1.85 FIX: clear the class UNCONDITIONALLY — do not gate on the `hidden` mirror. Module 11 adds
           .cedar-nav-hidden to the element DIRECTLY (the about nav floor, ~line 1994) without telling this
           closure, so on a page the visitor never scrolls, `hidden` was still false when the pin poll fired
           the first onFrame → the guard skipped the remove and the nav stayed parked at translateY(-74px)
           while body.cedar-nav-in claimed it was shown. Verified live on staging before/after. */
        nav.classList.remove('cedar-nav-hidden'); hidden = false;
        setShown(true); nav.classList.add('cedar-nav-solid');
        lastY = y; return;
      }
      updInkLazy(y);
      var floored = window.__cedarNavFloor != null;
      if (floored && y < window.__cedarNavFloor) {         /* about: nav stays hidden while the header owns the viewport */
        nav.classList.add('cedar-nav-hidden'); hidden = true; setShown(false); lastY = y; return;
      }
      /* past any floor: the SAME hide-on-scroll-down / show-on-scroll-up as every other page (the old
         floor branch pinned the nav permanently open once past the about header — client flagged it) */
      if (RM) {
        if (hidden) { nav.classList.remove('cedar-nav-hidden'); hidden = false; }   /* reduced motion: no hide/show, but never strand it hidden after the floor */
      } else {
        if ((!floored && y < 90) || nav.matches(':hover')) {   /* the near-top always-show band would fight the about floor — skip it there */
          if (hidden) { nav.classList.remove('cedar-nav-hidden'); hidden = false; }
        } else if (Math.abs(y - lastY) > 6) {
          if (y > lastY && !hidden) { nav.classList.add('cedar-nav-hidden'); hidden = true; }
          else if (y < lastY && hidden) { nav.classList.remove('cedar-nav-hidden'); hidden = false; }
        }
      }
      setShown(!hidden);
      /* client: once scrolled down from the top, a revealed nav gets a solid WHITE background (charcoal
         ink, forced in CSS) so the links read on any section; at the very top it stays transparent over
         the hero. */
      nav.classList.toggle('cedar-nav-solid', !hidden && y > 90 && !window.__cedarAboutIntro);
      lastY = y;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(onFrame); } }
    updInk();                                              /* set correct ink before first paint */
    setNavH(); setShown(!nav.classList.contains('cedar-nav-hidden'));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { setNavH(); onScroll(); });
    afterLoader(function () { updInk(); setNavH(); });     /* re-probe once the loader overlay lifts */
    if (PIN_ABOUT) {                                       /* v1.84: onFrame only runs on scroll — poll the intro flag so the nav comes in the moment the reveal releases it, before any scroll happens */
      var pinPoll = setInterval(function () { if (!window.__cedarAboutIntro) { clearInterval(pinPoll); onScroll(); } }, 200);
    }
    /* v1.81: PROJECT-PAGE NAV INK ON LOAD. isDarkBehind() treats an IFRAME/VIDEO behind the nav as a dark
       backdrop, but the hero film's iframe is built ASYNCHRONOUSLY — both probes above (pre-paint and
       loader-lift) run while that band is still empty, so the probe falls through to the light page
       background and paints DARK ink over a dark hero. The first scroll re-probed, found the iframe and
       flipped to white — which read as the nav "correcting itself". Re-probe when a film actually mounts.
       These call updInk() directly, so they bypass the scroll throttle (they never touch inkAt/inkY). */
    if ('MutationObserver' in window && document.body) {
      var inkHits = 0;
      var inkMO = new MutationObserver(function (recs) {
        for (var i = 0; i < recs.length; i++) {
          var added = recs[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            var n = added[j];
            if (n.nodeType !== 1) continue;
            if (n.tagName === 'IFRAME' || n.tagName === 'VIDEO' || (n.querySelector && n.querySelector('iframe,video'))) {
              updInk();
              if (++inkHits >= 12) { inkMO.disconnect(); return; }   /* gallery pages mount many films; a dozen re-probes is plenty */
              return;
            }
          }
        }
      });
      inkMO.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { inkMO.disconnect(); }, 8000);         /* the hero is long settled by then */
    }
    /* backstop for a hero inserted before the observer attached, or swapped in without a node insertion */
    [400, 1200, 2500].forEach(function (t) { setTimeout(updInk, t); });
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
        var d = (n - 1 - i) * 130;
        c.style.transitionDelay = d + 'ms';                     /* right→left */
        c.classList.add('cedar-in');
        /* strip our classes once landed — the lingering transform transition rubber-bands any native
           Webflow hover on the card or its buttons (these cards now live on the homepage too) */
        setTimeout(function () { c.classList.remove('cedar-about-card', 'cedar-in'); c.style.transitionDelay = ''; }, d + 950);
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
    if (nav) nav.classList.add('cedar-on-about');   /* client: mark stays charcoal on /about (CSS override) */
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
    /* v1.87 ULTRAWIDE CLAMP (client): the lockup is sized by ROW WIDTH (22.3% / 68.9%), so on very wide /
       curved monitors the mark grew taller than the header section and its bottom clipped. Cap the row's
       width so the mark's height (28.3/37.4 of 22.3% of the row) never passes ~46vh; the row centers when
       the cap binds (only kicks in past ~2.7× the viewport height — normal monitors are untouched). */
    var lockRow = (markE || cedarE) && (markE || cedarE).parentElement;
    if (lockRow) {
      var clampRow = function () {
        lockRow.style.maxWidth = Math.round(window.innerHeight * 0.46 / (0.223 * 283 / 374)) + 'px';
        lockRow.style.marginLeft = 'auto'; lockRow.style.marginRight = 'auto';
      };
      clampRow(); window.addEventListener('resize', clampRow);
    }

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
        anim.setSpeed(1.25);                                            /* client: intro ~0.5s faster — trims the reveal without changing its shape */
        var CUT = 85;                                                   /* client: the finished lockup held ~0.5s too long — real motion ends f70 of the 104f comp (a 0.9s-real baked tail at 1.25x); handing off at f85 keeps a ~0.4s beat on the lockup */
        anim.addEventListener('enterFrame', function () { if (anim.currentFrame >= CUT) handoff(); });
        anim.addEventListener('complete', handoff);                     /* fallback if enterFrame never crosses CUT */
        anim.addEventListener('data_failed', abort);
      } catch (e) { abort(); }
    };
    s.onerror = abort;
    document.body.appendChild(s);
    safety = setTimeout(function () { if (!done) handoff(); }, 6000);   /* never strand the veil if Lottie hangs */
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
    function paintText(card, color) {                                /* colour the text AND the subhead top-rule (border) to match the type */
      card.style.setProperty('color', color, 'important');
      card.style.setProperty('border-color', color, 'important');
      var els = card.querySelectorAll('*');
      for (var i = 0; i < els.length; i++) {
        if (SKIP.test(els[i].tagName)) continue;
        els[i].style.setProperty('color', color, 'important');
        els[i].style.setProperty('border-color', color, 'important');
      }
    }
    /* Webflow flags an empty CMS image with .w-dyn-bind-empty, so a real bg image = .card-bg-img without it */
    function hasBgImage(card) {
      var img = card.querySelector('img.card-bg-img:not(.w-dyn-bind-empty)');
      return !!img && getComputedStyle(img).display !== 'none';
    }
    /* the CMS icon is an <img> (SVG file) — it renders in its baked-in color, so swap it for a
       currentColor mask span painted with the card's text color. Keeps the img's own classes so
       Webflow sizing still applies; falls back to 44px if the class carries no size. */
    function paintIcon(card, color) {
      [].slice.call(card.querySelectorAll('img.info-icon:not(.w-dyn-bind-empty)')).forEach(function (im) {
        if (im._cedarMasked) return;
        im._cedarMasked = true;
        function make() {
          var src = im.currentSrc || im.src; if (!src) return;
          var span = el('span', im.className + ' cedar-icon-mask');
          span.classList.remove('w-dyn-bind-empty');
          span.style.webkitMaskImage = 'url("' + src + '")'; span.style.maskImage = 'url("' + src + '")';
          span.style.setProperty('background-color', color, 'important');
          im.style.display = 'none';
          im.parentElement.insertBefore(span, im);
          span.style.setProperty('width', '100%', 'important');      /* full content width of the card (inside its padding), per Ben */
          var pr = new Image();
          pr.onload = function () { if (pr.naturalWidth && pr.naturalHeight) span.style.aspectRatio = (pr.naturalWidth / pr.naturalHeight).toFixed(4); };
          pr.src = src;
        }
        if (im.complete || (im.currentSrc || im.src)) make();
        else im.addEventListener('load', make, { once: true });
      });
    }
    cards.forEach(function (card) {
      var key = (card.getAttribute('data-color') || '').trim().toLowerCase();
      var m = MAP[key];
      if (hasBgImage(card)) {                                        /* photo card -> white type over the image, no colour fill */
        card.style.setProperty('background-color', 'transparent', 'important');
        paintText(card, OFFWHITE);
        paintIcon(card, OFFWHITE);
      } else if (m) {
        card.style.setProperty('background-color', m.bg, 'important');
        paintText(card, m.text);
        paintIcon(card, m.text);
      } else {                                                       /* none / "-" -> no fill, charcoal type */
        card.style.setProperty('background-color', 'transparent', 'important');
        paintText(card, CHARCOAL);
        paintIcon(card, CHARCOAL);
      }
    });
  });

  /* =========================================================
   * 12.5 FILM SECTIONS (project pages) — CMS-driven gallery
   *   partition. Each Gallery Item carries a Category option, exposed
   *   on the card as data-cedar-category (bound in the Designer like
   *   data-cedar-crop). Still (default/unset) stays in the module-13
   *   grid; Trailer / Film / Edit cards are pulled up into their own
   *   labeled sections ABOVE the stills (order: Trailer → Films →
   *   Edits → Poster → Stills, per Ben); module 13 then lays each
   *   section's row in the same gallery language (video mounts, watch
   *   pill, lone card spans the row) because the rows reuse the
   *   original row's classes and the cards keep .gallery-card — so
   *   they also stay in the module-36 coverflow and its click-to-open
   *   flow. Film cards get a hover caption (Title/Description,
   *   offwhite over a bottom scrim, homepage-card spirit; always
   *   visible on touch). "Poster / Full Image" leaves the grid
   *   entirely and renders as a full-width UNCROPPED natural-aspect
   *   image block. Registered BEFORE module 13 (onReady runs in file
   *   order) so the partition happens before any layout. NO-OP unless
   *   a card carries a non-Still category — untagged projects are
   *   byte-for-byte unchanged.
   * ======================================================= */
  onReady(function () {
    if (location.pathname.indexOf('/work/') !== 0) return;
    var all = [].slice.call(document.querySelectorAll('.gallery-card'));
    if (!all.length) return;
    /* v1.87 (client, Penske/Unless U): data-cedar-layout="scroll" — Ben bound data-cedar-layout on the
       gallery cards (2026-08); when the CMS field holds "scroll" on ANY card of the project, the film
       category rows (Trailer/Films/Edits — not the stills grid) lay as a HORIZONTAL drag-scroll row
       instead of stacking. Empty/other values = stacked as before. The attribute existed on the page
       but nothing read it — that's why tagging alone did nothing. */
    var SCROLL_ROWS = [].slice.call(document.querySelectorAll('[data-cedar-layout]'))
      .some(function (n) { return /scroll/i.test(n.getAttribute('data-cedar-layout') || ''); });
    function armFsScroll(row) {                        /* drag-to-scroll + "Click and drag" pill (module 33's treatment); touch keeps native swipe */
      if (TOUCH) return;
      row.addEventListener('dragstart', function (e) { e.preventDefault(); });
      var pill = el('div', 'cedar-cf-pill', 'Click and drag');
      document.body.appendChild(pill);
      var mx = 0, my = 0, px = -200, py = -200, raf = null, over = false;
      function loop() { if (!over) { raf = null; return; } px += (mx - px) * 0.22; py += (my - py) * 0.22; pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px'; raf = requestAnimationFrame(loop); }
      row.addEventListener('pointerenter', function (e) { over = true; px = mx = e.clientX; py = my = e.clientY; pill.classList.add('is-on'); if (!raf) raf = requestAnimationFrame(loop); });
      row.addEventListener('pointerleave', function () { over = false; pill.classList.remove('is-on'); });
      var down = false, moved = false, sx = 0, sl = 0;
      row.addEventListener('pointerdown', function (e) { down = true; moved = false; sx = e.clientX; sl = row.scrollLeft; try { row.setPointerCapture(e.pointerId); } catch (_) {} pill.classList.add('is-down'); });
      row.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 5) moved = true; row.scrollLeft = sl - dx; });
      function up() { down = false; pill.classList.remove('is-down'); }
      row.addEventListener('pointerup', up); row.addEventListener('pointercancel', up);
      row.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
      row.classList.add('cedar-nocursor');
    }
    var SECTIONS = [
      { key: 'Trailer', label: 'Trailer' },
      { key: 'Film', label: 'Films' },
      { key: 'Edit', label: 'Edits' }
    ];
    var buckets = {}, found = false, extras = [];
    all.forEach(function (c) {
      var cat = (c.getAttribute('data-cedar-category') || '').trim();
      if (/poster/i.test(cat)) {                          /* v1.71: poster stays IN the stills grid; module 13 renders it fit-to-portrait (contain + 10px pad, uncropped) at the fixed row height. Matches "Poster / Full Image" or a shortened "Poster". */
        c.classList.add('cedar-gal-fit');
        var pim = c.querySelector('img');
        if (pim) { pim.setAttribute('loading', 'eager'); pim.style.setProperty('object-fit', 'contain', 'important'); }   /* v1.72: eager so its aspect is known for the fit-width calc; inline object-fit beats the .img-cover cover rule */
        return;
      }
      if (!cat || cat === 'Still') return;             /* Still / unset -> stays in the grid */
      if (!buckets[cat]) {
        buckets[cat] = [];
        var known = false;
        for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].key === cat) known = true;
        if (!known) extras.push({ key: cat, label: cat });   /* v1.65: a category Cedar adds to the CMS dropdown later gets its own section automatically, labeled by its option name, ordered after the known ones */
      }
      buckets[cat].push(c); found = true;
    });
    if (!found) return;
    var origRow = all[0].parentElement;
    var wrapper = origRow.closest('.w-dyn-list') || origRow;
    var host = wrapper.parentElement;
    var rcs = getComputedStyle(origRow);
    var PLACEHOLDER = 'This is some text inside of a div block.';
    function textOf(card, sel) {
      var n = card.querySelector(sel);
      var t = n ? (n.textContent || '').trim() : '';
      return t === PLACEHOLDER ? '' : t;
    }
    SECTIONS.concat(extras).forEach(function (s) {
      var list = buckets[s.key];
      if (!list || !list.length) return;
      var sec = el('div', 'cedar-fs', '');
      var head = el('div', 'cedar-fs-head', '<span class="cedar-fs-label"></span><span class="cedar-fs-line"></span>');
      head.querySelector('.cedar-fs-label').textContent = s.label;
      head.style.paddingLeft = rcs.paddingLeft; head.style.paddingRight = rcs.paddingRight;   /* align the label with the row's own side padding */
      sec.appendChild(head);
      var row = el('div', '', '');
      row.className = origRow.className + ' cedar-fs-row';   /* reuse the gallery row's classes so flex/gap/padding match exactly */
      list.forEach(function (c) {
        var title = textOf(c, '.gallery-title, [gallery-title]');
        var desc = textOf(c, '.gallery-description, [gallery-description]');
        if (title || desc) {
          var cap = el('div', 'cedar-fs-cap', '<div class="cedar-fs-title"></div><div class="cedar-fs-desc"></div>');
          cap.querySelector('.cedar-fs-title').textContent = title;
          cap.querySelector('.cedar-fs-desc').textContent = desc;
          if (!title) cap.querySelector('.cedar-fs-title').remove();
          if (!desc) cap.querySelector('.cedar-fs-desc').remove();
          c.appendChild(cap);
        }
        row.appendChild(c);
      });
      sec.appendChild(row);
      if (SCROLL_ROWS && list.length > 2) { row.classList.add('cedar-fs-scroll'); armFsScroll(row); }   /* v1.87: 3+ films + the scroll tag → horizontal row (1-2 films pair up fine stacked) */
      host.insertBefore(sec, wrapper);                 /* sections stack above the stills grid, in SECTIONS order */
    });
    if (origRow.querySelector('.gallery-card')) {      /* v1.64: stills remain below the labeled sections — label them too */
      var sh = el('div', 'cedar-fs cedar-fs-stills', '');
      var shHead = el('div', 'cedar-fs-head', '<span class="cedar-fs-label"></span><span class="cedar-fs-line"></span>');
      shHead.querySelector('.cedar-fs-label').textContent = 'Stills';
      shHead.style.paddingLeft = rcs.paddingLeft; shHead.style.paddingRight = rcs.paddingRight;
      sh.appendChild(shHead);
      host.insertBefore(sh, wrapper);
    }
  });

  /* =========================================================
   * 12.6 HERO FEATURE LABEL (project pages) — the autoplaying hero
   *   film isn't denoted as what it is (e.g. Breakneck's hero is
   *   really the trailer). The Works CMS carries a "Feature Label"
   *   text field; bind it in the Designer as a custom attribute
   *   data-cedar-feature-label on the hero band (same pattern as
   *   data-cedar-crop / data-cedar-category) and this renders a small
   *   glass tag bottom-left of the band (opposite the "Watch with
   *   sound" pill). Empty/unbound = no tag, page unchanged.
   * ======================================================= */
  onReady(function () {
    if (location.pathname.indexOf('/work/') !== 0) return;
    [].slice.call(document.querySelectorAll('[data-cedar-feature-label]')).forEach(function (hostEl) {
      if (hostEl._cedarTag) return;
      var val = (hostEl.getAttribute('data-cedar-feature-label') || '').trim();
      if (!val) return;
      hostEl._cedarTag = true;
      if (getComputedStyle(hostEl).position === 'static') hostEl.style.position = 'relative';
      var tag = el('div', 'cedar-hero-tag', '');
      tag.textContent = val;
      hostEl.appendChild(tag);
    });
  });

  /* =========================================================
   * 13. GALLERY (project pages) — HOME-GRID RHYTHM. Cards are
   *   laid two-per-row at a FIXED height (ROW_H), cycling the
   *   home work grid's 3 asymmetric width patterns so the two
   *   grids share one visual language:
   *     row A  0.353 / 0.647   (narrow | wide)
   *     row B  0.500 / 0.500   (even)
   *     row C  0.626 / 0.374   (wide | narrow)
   *   Media covers its box (image object-fit:cover; video oversized
   *   to cover, card clips). A lone trailing card spans the full row.
   *   Widths are container-driven → recompute on resize. Scoped
   *   strictly to .gallery-card: the parent (.work-row.w-dyn-items)
   *   is SHARED with the home grid, so only gallery cards + their
   *   parents are touched. VIDEO source, PRIMARY: a data-vimeo-url
   *   on the card (bound to a plain CMS text field, mirroring the
   *   home work grid) — we build our own always-on background iframe
   *   and retire the flaky Webflow Video embed. FALLBACK (legacy,
   *   unmigrated items): scrape the id from the .gallery-video
   *   embed's inline <script> and lazy-load it. Image sits behind
   *   the video as a natural poster/fallback.
   * ======================================================= */
  onReady(function () {
    var cards = [].slice.call(document.querySelectorAll('.gallery-card'));
    if (!cards.length) return;
    var ROW_H = 600;                                              /* desktop: match the home work grid; tunable */
    function rowH() { if (window.innerWidth < 768 || window.innerWidth > 2200) return Math.round(window.innerHeight * 0.5); return window.innerWidth >= 1920 ? 700 : ROW_H; }   /* 50vh on mobile AND ultra-wide (v1.80); taller on big monitors (v1.74) */   /* mobile: 50vh full-width cards */
    var PATTERNS = [[0.353, 0.647], [0.5, 0.5], [0.626, 0.374]];  /* home grid's 3 repeating rows */

    /* PRIMARY path — build an always-on background iframe from a data-vimeo-url (shared home-grid parser + builder). */
    function parseVimeo(url) {
      if (!url) return null;
      var id = (url.match(/vimeo\.com\/(?:video\/)?(\d+)/i) || [])[1];
      if (!id) return null;
      var h = (url.match(/[?&]h=([0-9a-z]+)/i) || [])[1] || (url.match(/vimeo\.com\/(?:video\/)?\d+\/([0-9a-z]+)/i) || [])[1] || '';
      return { id: id, hash: h };
    }
    /* v1.87 (client): the SAME CMS video field accepts a YOUTUBE link — watch / youtu.be / shorts / embed /
       live. YouTube cards show their still (CMS image, or the YouTube poster if none) with the "Watch with
       sound" pill; clicking opens the film in the module-14 lightbox (youtube-nocookie). No muted hover
       preview — YouTube embeds are heavy and carry branding; Vimeo keeps the background-loop treatment. */
    function parseTube(url) {
      if (!url) return null;
      var m = String(url).match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?[^#]*v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{6,20})/i);
      return m ? m[1] : null;
    }
    function mountBgVideo(c, url) {
      var parts = parseVimeo(url);
      if (!parts) {
        var tid = parseTube(url);
        if (!tid) return false;
        c.setAttribute('data-cedar-tube', tid);
        var oldT = c.querySelector('.gallery-video'); if (oldT) oldT.style.display = 'none';   /* retire the Webflow embed here too */
        if (!c.querySelector('img')) {                               /* no CMS still bound → fall back to YouTube's own poster */
          var po = document.createElement('img'); po.className = 'cedar-tube-poster'; po.alt = '';
          po.src = 'https://i.ytimg.com/vi/' + tid + '/hqdefault.jpg';
          po.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;';
          c.insertBefore(po, c.firstChild);
        }
        if (!c.querySelector('.cedar-card-watch')) {
          var wpt = el('div', 'cedar-hero-watch cedar-card-watch', PLAY_SVG + 'Watch with sound');
          wpt.setAttribute('data-cedar-tube', tid);
          c.appendChild(wpt);
        }
        return true;
      }
      c.setAttribute('data-cedar-vimeo', parts.id);                       /* stash for the lightbox (module 14, TODO) */
      if (parts.hash) c.setAttribute('data-cedar-vimeo-h', parts.hash);
      var oldEmbed = c.querySelector('.gallery-video'); if (oldEmbed) oldEmbed.style.display = 'none';   /* retire the flaky Webflow Video embed */
      if (c.querySelector('.cedar-galvid')) return true;
      var wrap = document.createElement('div'); wrap.className = 'cedar-galvid';
      var f = document.createElement('iframe'); f.allow = 'autoplay; fullscreen; picture-in-picture'; f.tabIndex = -1; f.setAttribute('aria-hidden', 'true');
      f.src = vimeoEmbed(url);                                            /* shared builder: background/autoplay/muted/loop */
      wrap.appendChild(f); c.appendChild(wrap);                           /* sits above the CMS image → image is a natural fallback */
      var wp = el('div', 'cedar-hero-watch cedar-card-watch', PLAY_SVG + 'Watch with sound');   /* v1.67: pill carries the film id so module 14's delegate opens the player DIRECTLY on click (no coverflow stop) */
      wp.setAttribute('data-cedar-vimeo', parts.id);
      if (parts.hash) wp.setAttribute('data-cedar-vimeo-h', parts.hash);
      c.appendChild(wp);
      return true;
    }
    /* FALLBACK path — lazy-load the legacy .gallery-video embed's own iframe (it builds only when scrolled in). */
    function loadVideo(c, vid, id, hash) {
      c.setAttribute('data-cedar-vimeo', id);
      if (hash) c.setAttribute('data-cedar-vimeo-h', hash);
      function apply() {
        var ifr = vid.querySelector('iframe');
        if (!ifr) return false;
        if (ifr.src.indexOf('player.vimeo.com/video/' + id) === -1) {
          ifr.allow = 'autoplay; fullscreen; picture-in-picture';
          ifr.src = 'https://player.vimeo.com/video/' + id + '?background=1&autoplay=1&muted=1&loop=1&dnt=1' + (hash ? '&h=' + hash : '');
        }
        return true;
      }
      if (apply()) return;
      var mo = new MutationObserver(function () { if (apply()) { mo.disconnect(); layout(); } });   /* the late-built iframe missed the layout pass — re-cover it */
      mo.observe(vid, { childList: true, subtree: true });
    }

    var groups = [];
    cards.forEach(function (c) {
      c.classList.add('cedar-gal');
      var p = c.parentElement, g = null;
      for (var i = 0; i < groups.length; i++) if (groups[i].parent === p) g = groups[i];
      if (!g) { g = { parent: p, items: [] }; groups.push(g); }
      g.items.push(c);
      /* PRIMARY: data-vimeo-url on the card (or a descendant) */
      var urlEl = c.hasAttribute('data-vimeo-url') ? c : c.querySelector('[data-vimeo-url]');
      var url = urlEl ? (urlEl.getAttribute('data-vimeo-url') || '').trim() : '';
      if (url && mountBgVideo(c, url)) return;
      /* FALLBACK: legacy .gallery-video embed */
      var vid = c.querySelector('.gallery-video');
      var vsc = vid && vid.querySelector('script');
      var vtxt = (vsc && vsc.textContent) || '';
      var id = (vtxt.match(/vimeo\.com\/(?:video\/)?(\d{6,})/) || [])[1];
      if (id) {
        var hash = (vtxt.match(/[?&]h=([0-9a-z]+)/i) || vtxt.match(/vimeo\.com\/(?:video\/)?\d{6,}\/([0-9a-z]+)/i) || [])[1];
        loadVideo(c, vid, id, hash);
      }
    });

    function coverIframe(c, w, boxH) {
      var h = boxH || rowH();
      var iw = Math.ceil(Math.max(w, h * 16 / 9)) + 4, ih = Math.ceil(iw * 9 / 16) + 4;   /* width-first 16:9 cover: always spans the card's width; crop top/bottom when the card is wider than 16:9 */
      var z = cropZoomNear(c);   /* CMS Crop: zoom the gallery film to hide letterbox bars */
      var tf = z !== 1 ? 'translate(-50%,-50%) scale(' + z + ')' : 'translate(-50%,-50%)';
      var f = c.querySelector('.cedar-galvid iframe');
      if (f) { f.style.width = iw + 'px'; f.style.height = ih + 'px'; if (z !== 1) f.style.transform = tf; return; }
      /* legacy fallback embeds: the base stylesheet stretches them to the card box (non-16:9 box → Vimeo
         letterboxes INSIDE the frame, side bars on wide cards) — override with the same cover math */
      f = c.querySelector('.vimeo-container iframe');
      if (!f) return;
      f.style.setProperty('width', iw + 'px', 'important');
      f.style.setProperty('height', ih + 'px', 'important');
      f.style.setProperty('top', '50%', 'important');
      f.style.setProperty('left', '50%', 'important');
      f.style.setProperty('transform', tf, 'important');
    }
    function set(c, w) {
      c.style.setProperty('flex', '0 0 auto', 'important');
      c.style.setProperty('width', w + 'px', 'important');
      c.style.setProperty('height', rowH() + 'px', 'important');
      coverIframe(c, w, rowH());
    }
    /* mobile: fixed (full) width, AUTO height following the media's own aspect — nothing crops.
       Films are 16:9; stills take their natural aspect (read from the loaded on-page image). */
    function mediaAR(c) {
      if (c.getAttribute('data-cedar-vimeo') || c.getAttribute('data-cedar-tube')) return 16 / 9;   /* films are 16:9 (v1.87: YouTube too) */
      var im = c.querySelector('img');
      return (im && im.naturalWidth) ? im.naturalWidth / im.naturalHeight : 16 / 9;
    }
    function setMobile(c, w) {
      var h = Math.round(w / mediaAR(c));
      c.style.setProperty('flex', '0 0 auto', 'important');
      c.style.setProperty('width', w + 'px', 'important');
      c.style.setProperty('height', h + 'px', 'important');
      coverIframe(c, w, h);
    }
    function layout() {
      groups.forEach(function (g) {
        var p = g.parent, cs = getComputedStyle(p);
        var gap = parseFloat(cs.columnGap || cs.gap) || 14;
        var W = p.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
        if (W <= 0) return;
        if (p.classList.contains('cedar-fs-scroll')) {            /* v1.87: horizontal film row — uniform fixed-width 16:9 cards, no pattern pairing; the row scrolls */
          p.style.setProperty('flex-wrap', 'nowrap', 'important');
          p.style.setProperty('justify-content', 'flex-start', 'important');
          p.style.setProperty('align-items', 'flex-start', 'important');
          if (window.innerWidth < 768) { g.items.forEach(function (c) { setMobile(c, Math.round(W * 0.86)); }); return; }   /* mobile: near-full-width cards, native swipe */
          var sw = Math.min(Math.round((W - (parseFloat(cs.columnGap || cs.gap) || 14)) * 0.46), Math.round(rowH() * 16 / 9));   /* ~2.2 cards visible, never wider than the film's 16:9 at row height */
          g.items.forEach(function (c) { set(c, sw); });
          return;
        }
        p.style.setProperty('flex-wrap', 'wrap', 'important');
        p.style.setProperty('justify-content', 'flex-start', 'important');
        p.style.setProperty('align-items', 'flex-start', 'important');
        var items = g.items;
        if (window.innerWidth < 768) {                            /* mobile: full-width cards, height follows the media aspect so nothing crops */
          items.forEach(function (c) { setMobile(c, W); });
          return;
        }
        var avail = W - gap;                                      /* two cards + one gap span the row */
        var row = 0;
        function isFit(c) { return c.classList.contains('cedar-gal-fit'); }
        function fitAR(c) { var im = c.querySelector('img'); return (im && im.naturalWidth) ? im.naturalWidth / im.naturalHeight : 0.667; }   /* v1.72: portrait default (2:3) until the poster image loads — mediaAR would guess 16/9 landscape */
        function fitW(c) { return Math.min(Math.round(rowH() * fitAR(c)), Math.round(avail * 0.62)); }   /* portrait poster width at the fixed row height, capped so it never dominates the row */
        for (var i = 0; i < items.length; i += 2) {
          var a = items[i], b = items[i + 1];
          if (b) {
            var af = isFit(a), bf = isFit(b);
            if (af && bf) { set(a, fitW(a)); set(b, fitW(b)); }              /* two posters side by side (rare) */
            else if (af) { var wf = fitW(a); set(a, wf); set(b, avail - wf); }
            else if (bf) { var wg = fitW(b); set(b, wg); set(a, avail - wg); }
            else { var pat = PATTERNS[row % PATTERNS.length]; row++; var wa = Math.round(avail * pat[0]); set(a, wa); set(b, avail - wa); }   /* only plain still pairs advance the asymmetric pattern */
          } else {
            set(a, isFit(a) ? fitW(a) : W);                                  /* lone poster = portrait width; lone still = full row */
          }
        }
      });
    }
    layout();
    var rt;
    /* a still not yet decoded reports naturalWidth 0 → mobile height would fall back to 16:9; re-lay-out on load */
    cards.forEach(function (c) { var im = c.querySelector('img'); if (im && !im.complete) im.addEventListener('load', function () { clearTimeout(rt); rt = setTimeout(layout, 60); }, { once: true }); });
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 150); });
  });

  /* =========================================================
   * 14. VIDEO LIGHTBOX (project gallery) — click a gallery video
   *   card (any .gallery-card carrying data-cedar-vimeo, stamped by
   *   module 13) to open a centered 16:9 Vimeo player in a dark,
   *   blurred modal, with full controls + sound (the grid clips
   *   themselves stay muted background loops). Close via the X, a
   *   backdrop click, or Esc; the iframe is torn down on close so
   *   playback stops. Built lazily on first open; delegated click
   *   so it works no matter when module 13 stamps the ids. Image
   *   cards (no data-cedar-vimeo) are ignored.
   * ======================================================= */
  onReady(function () {
    var overlay = null, frame = null, spin = null, spinRaf = null, spinFallback = null, _R = null, _S = null, _C = null, _G = null;
    /* white-on-black rotating wireframe chevron shown over the black stage while the film buffers
       (client: signal loading). Reuses the loader's brand geometry; one WebGL context, reused across
       opens; CSS-3D-spun SVG fallback if THREE isn't up. Dismissed on Vimeo 'play' or a 5s cap. */
    function buildSpin(stage) {
      spin = el('div', 'cedar-lb-spin', '');
      var ss = el('div', 'cedar-lb-spin-stage', '');
      spin.appendChild(ss); stage.appendChild(spin);
      var built = false;
      function svg() { if (built) return; ss.innerHTML = '<svg class="cedar-lb-spin-svg" viewBox="0 0 374 283"><path d="M178.04 0L0 126.555V137.94L25.0235 144.296L178.04 83.6805H195.051L348.067 144.296L373.09 137.94V126.555L195.051 0H178.04Z"/><path d="M178.04 137.979L0 264.534V275.919L25.0235 282.276L178.04 221.66H195.051L348.067 282.276L373.09 275.919V264.534L195.051 137.979H178.04Z"/></svg>'; }
      (function wait(t) {
        if (built) return;
        if (!window.THREE) { if (t > 0) setTimeout(function () { wait(t - 1); }, 80); else svg(); return; }
        try {
          var T = window.THREE;
          _R = new T.WebGLRenderer({ alpha: true, antialias: true });
          _R.setSize(74, 74); _R.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); ss.appendChild(_R.domElement);
          _S = new T.Scene(); _C = new T.PerspectiveCamera(28, 1, 0.1, 200); _C.position.set(0, 0, 95);
          var RAW = [[178.04,0],[0,126.555],[0,137.94],[25.0235,144.296],[178.04,83.6805],[195.051,83.6805],[348.067,144.296],[373.09,137.94],[373.09,126.555],[195.051,0]];
          var MK = 45.009 / 373.09, MOFF = 137.979; _G = new T.Group();
          var mat = new T.LineBasicMaterial({ color: 0xf4f4f2, transparent: true, opacity: 0.96 });
          [RAW.map(function (p) { return [p[0]*MK, p[1]*MK]; }), RAW.map(function (p) { return [p[0]*MK, (p[1]+MOFF)*MK]; })].forEach(function (poly) {
            var s = new T.Shape(); poly.forEach(function (p, i) { var x = p[0]-22.5, y = -(p[1]-17.4); if (i) s.lineTo(x, y); else s.moveTo(x, y); }); s.closePath();
            var geo = new T.ExtrudeGeometry(s, { depth: 7, bevelEnabled: false }); geo.translate(0, 0, -3.5);
            _G.add(new T.LineSegments(new T.EdgesGeometry(geo, 12), mat));
          });
          _G.scale.setScalar(0.46); _S.add(_G); built = true;
        } catch (e) { svg(); }
      })(30);
    }
    function spinLoop() {
      if (!overlay || !overlay.classList.contains('is-open')) { spinRaf = null; return; }   /* idle when closed */
      if (_R && _G && spin && !spin.classList.contains('is-off')) {
        _G.rotation.y += 0.02; _G.rotation.x = Math.sin(Date.now() / 2200) * 0.16; _R.render(_S, _C);
      }
      spinRaf = requestAnimationFrame(spinLoop);
    }
    function build() {
      overlay = el('div', 'cedar-lb');
      var stage = el('div', 'cedar-lb-stage');
      frame = el('iframe', 'cedar-lb-frame');
      frame.allow = 'autoplay; fullscreen; picture-in-picture';
      frame.setAttribute('allowfullscreen', '');
      var close = el('button', 'cedar-lb-close', '&times;');
      close.setAttribute('aria-label', 'Close video');
      stage.appendChild(frame);
      buildSpin(stage);                                        /* spinner sits above the iframe on the black stage */
      overlay.appendChild(stage);
      overlay.appendChild(close);
      document.body.appendChild(overlay);
      close.addEventListener('click', hide);
      overlay.addEventListener('click', function (e) { if (e.target === overlay) hide(); });
      frame.addEventListener('load', function () {            /* subscribe to the events that mean "frames are actually rendering", not just "playback was requested" */
        try { ['playing', 'timeupdate', 'bufferend', 'play'].forEach(function (ev) { frame.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: ev }), '*'); }); } catch (_) {}
      });
      window.addEventListener('message', function (e) {        /* v1.74: the film opens MUTED (silent under the loader — no audio-before-video); once frames genuinely render we seek back to 0, unmute, and drop the loader together, so the film is seen AND heard from the very top */
        if (!spin || (e.origin || '').indexOf('vimeo') === -1) return;
        var d; try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (_) { return; }
        if (!d) return;
        if (d.event === 'bufferend' || d.event === 'playing' || (d.event === 'timeupdate' && d.data && d.data.seconds > 0)) reveal();
      });
    }
    function reveal() {                                        /* rewind to 0 + sound on + loader off, exactly once per open */
      if (revealed || !frame) return;
      revealed = true;
      try {
        frame.contentWindow.postMessage(JSON.stringify({ method: 'setCurrentTime', value: 0 }), '*');
        frame.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*');
        frame.contentWindow.postMessage(JSON.stringify({ method: 'setMuted', value: false }), '*');
      } catch (_) {}
      if (spin) spin.classList.add('is-off');
    }
    var revealed = false;
    function show(id, hash, tube) {
      if (!id) return;
      if (!overlay) build();
      revealed = false;
      if (spin) spin.classList.remove('is-off');               /* fresh loading state each open */
      clearTimeout(spinFallback); spinFallback = setTimeout(reveal, tube ? 1200 : 5000);   /* never strand the mark (or the mute) if the player never reports (v1.87: YouTube has no postMessage hookup — drop the mark quickly) */
      frame.src = tube
        ? 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1'   /* v1.87: YouTube films open in the same lightbox */
        : 'https://player.vimeo.com/video/' + id + '?autoplay=1&muted=1&title=0&byline=0&portrait=0&dnt=1' + (hash ? '&h=' + hash : '');
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(function () { overlay.classList.add('is-open'); });
      if (!spinRaf) spinRaf = requestAnimationFrame(spinLoop);
      document.addEventListener('keydown', onKey);
    }
    function hide() {
      if (!overlay) return;
      overlay.classList.remove('is-open');
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      clearTimeout(spinFallback);
      setTimeout(function () { if (frame) frame.src = 'about:blank'; }, 320);   /* stop playback after the fade */
    }
    function onKey(e) { if (e.key === 'Escape' || e.keyCode === 27) hide(); }
    document.addEventListener('click', function (e) {
      var card = e.target.closest && e.target.closest('.cedar-hero-watch[data-cedar-vimeo],.cedar-hero-watch[data-cedar-tube]');   /* a direct gallery-card click now opens the coverflow (module 36); the lightbox opens from the coverflow's play button + the hero "watch" pills */
      if (!card) return;
      e.preventDefault();
      var tube = card.getAttribute('data-cedar-tube');                                        /* v1.87: YouTube pills open the same lightbox */
      if (tube) show(tube, null, true);
      else show(card.getAttribute('data-cedar-vimeo'), card.getAttribute('data-cedar-vimeo-h'));   /* lightbox is NOT cropped — it's the full-frame "watch it properly" view (cropping would zoom the player controls) */
    });
  });

  /* =========================================================
   * 26. HERO "WATCH/PLAY WITH SOUND" — the hero band is a muted
   *   background loop; this adds a glass pill (bottom-right of
   *   the band) that opens the SAME film in the module-14
   *   lightbox with full controls, seeking, and audio. The film
   *   id is parsed from the band's own embed iframe (waits for
   *   the lazy embed via MutationObserver). /work/* templates
   *   (.hero-band, click-anywhere) + the HOME hero (.hero-media,
   *   pill only — the overlay owns its own About CTA, so the
   *   band click stays native there).
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    var isWork = P.indexOf('/work/') === 0;
    function idFrom(s) { return (s.match(/player\.vimeo\.com\/video\/(\d+)/) || s.match(/vimeo\.com\/(?:video\/)?(\d+)/) || [])[1]; }
    function hashFrom(s) { return (s.match(/[?&]h=([0-9a-z]+)/i) || s.match(/vimeo\.com\/(?:video\/)?\d+\/([0-9a-z]+)/i) || [])[1]; }
    /* attach the glass pill to any "band" (a container holding a muted Vimeo bg loop). forcedSrc lets a
       marked video carry its own URL/id; otherwise the film id is parsed from the band's own iframe, waiting
       for a lazy embed (e.g. #vimeo-bg, whose src Webflow fills at runtime) via a MutationObserver. */
    function mountWatch(band, labelTxt, clickAnywhere, forcedSrc) {
      if (!band || band._cedarWatch) return;
      var done = false;
      function tryBtn() {
        if (done) return true;
        var src = forcedSrc || '';
        if (!src) { var f = band.querySelector('iframe'); if (!f || !f.src) return false; src = f.src; }
        var id = idFrom(src); if (!id) return false;
        done = true; band._cedarWatch = true;
        if (getComputedStyle(band).position === 'static') band.style.position = 'relative';
        var b = el('button', 'cedar-hero-watch', PLAY_SVG + labelTxt);
        b.type = 'button';
        b.setAttribute('data-cedar-vimeo', id);
        var h = hashFrom(src);
        if (h) b.setAttribute('data-cedar-vimeo-h', h);
        band.appendChild(b);
        if (clickAnywhere) {                                /* clicking anywhere on the film opens it with sound */
          band.style.cursor = 'pointer';
          band.addEventListener('click', function (e) { if (!e.target.closest('.cedar-hero-watch')) b.click(); });
        }
        return true;
      }
      if (tryBtn()) return;
      var mo = new MutationObserver(function () { if (tryBtn()) mo.disconnect(); });
      mo.observe(band, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
      setTimeout(function () { tryBtn(); try { mo.disconnect(); } catch (_) {} }, 12000);
    }
    /* the page hero (existing behavior): /work/* = click-anywhere, home hero = pill only (its overlay owns the About CTA) */
    var band = isWork ? document.querySelector('.hero-band, .photo-band')
                      : (P === '/' ? document.querySelector('.hero-media') : null);
    if (band) mountWatch(band, isWork ? 'Watch with sound' : 'Play with sound', isWork, null);
    /* client: tag ANY video container with data-cedar-watch to give it the same pill + lightbox (e.g. the /post
       Cedar Suite film). Value can be a Vimeo URL/id, or left blank/"true" to read the container's own embed.
       Add data-cedar-watch-click to also make the whole film clickable. */
    [].slice.call(document.querySelectorAll('[data-cedar-watch]')).forEach(function (m) {
      var v = (m.getAttribute('data-cedar-watch') || '').trim();
      var forced = /\d/.test(v) ? (/^\d+$/.test(v) ? 'https://vimeo.com/' + v : (/vimeo/i.test(v) ? v : null)) : null;
      mountWatch(m, 'Play with sound', m.hasAttribute('data-cedar-watch-click'), forced);
    });
  });

  /* =========================================================
   * 27. SCROLL STATIONS (v1.31 rework — brake BEFORE the platform,
   *   never pull back past it. v1.30 chose the station nearest the
   *   projected rest, so a gesture that had already carried past a
   *   section top got GRABBED backward — the client's exact
   *   complaint. Now: once wheel input stops, read where Lenis is
   *   actually headed (targetScroll — the true natural rest, no
   *   projection guesswork) and take over IMMEDIATELY, while still
   *   short of the station: if the glide would reach or pass any
   *   stations, brake into the FURTHEST one it passes; if it falls
   *   short, ease forward into the next one when it's within
   *   FORWARD_PULL. A station already behind the current position
   *   is never a target — the train does not reverse. The brake is
   *   the same velocity-matched Hermite; at speed the duration
   *   shortens so the entry slope stays monotonic (firm brake),
   *   at a crawl it stretches (long settle). Paired with the
   *   slower, heavier Lenis tune in module 2 — the glide now has
   *   the runway to slow and stop AT the section. Stations are
   *   section tops (+ full-bleed photo bands, page top, document
   *   end = the footer stop); work-grid / gallery sections are
   *   never stations. A wheel tick during the brake hands control
   *   straight back. All pages, no modals, desktop + motion only.
   *   Tunables: FORWARD_PULL, INPUT_IDLE, SETTLE_MS, MAX_SLOPE,
   *   glideDur().
   * ======================================================= */
  onReady(function () {
    return;   /* client 2026-07-13: scroll STATIONS turned OFF site-wide — keep only Lenis's subtle smooth scroll (module 2). The section-braking was too controlling; remove this one line to bring the stations back. */
    if (RM || TOUCH) return;
    var P27 = location.pathname.replace(/\/$/, '') || '/';
    if (P27 === '/work') return;   /* client: /work is one big work grid — the stations kept pulling back up to the title. Lenis smooth scroll (module 2) stays on; only the station braking is off here. */
    var FORWARD_PULL = 1.0;   /* if the glide dies short of the next station, pull forward into it when it's within this many viewports — further = rest free (mid-read in a tall section) */
    var INPUT_IDLE = 140;     /* ms since the last wheel tick before takeover — never fight a hand that's still on the wheel */
    var SETTLE_MS = 120;      /* scrolls that die on their own get one at-rest station check */
    var MAX_SLOPE = 2.8;      /* cap on the matched ease's initial slope (≤3 keeps the Hermite monotonic — no overshoot); at speed the duration shortens to honor it */
    var targets = [];
    function collect() {
      targets = [];
      document.querySelectorAll('section, .section-pad, .photo-band').forEach(function (s) {
        if (s.querySelector('.work-grid,.gallery-card,.work-row')) return;   /* client: work grids + galleries scroll freely — never snap them */
        var r = s.getBoundingClientRect();
        if (r.height > window.innerHeight * 0.3) {    /* only substantial sections make stations (contact's form section is shortish) */
          var t = Math.round(r.top + window.pageYOffset);
          if (targets.indexOf(t) === -1) targets.push(t);
        }
      });
      targets.push(0);
      var end = Math.round(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight);
      if (end > 0 && targets.indexOf(end) === -1) targets.push(end);   /* the footer stop — the last station on the line */
      targets.sort(function (a, b) { return a - b; });
    }
    function glideDur(d) {    /* short hops settle quickly, longer brakes take proportionally longer — constant duration is what felt mechanical */
      var f = d / window.innerHeight;
      return Math.min(1.4, Math.max(0.55, 0.55 + f * 1.5));
    }
    function velEase(s0) {    /* Hermite ease: leaves at slope s0 (the glide's own speed), lands at slope 0 — the takeover is invisible */
      s0 = Math.max(0, Math.min(MAX_SLOPE, s0));
      return function (t) { return s0 * t + (3 - 2 * s0) * t * t + (s0 - 2) * t * t * t; };
    }
    afterLoader(function () {
      var lenis = window.__cedarLenis;
      if (!lenis) return;
      collect();
      window.addEventListener('load', collect);
      var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(collect, 250); });
      var settleT = null, snapping = false;
      var lastWheel = 0, lastDir = 0;
      window.addEventListener('wheel', function () {
        lastWheel = Date.now();
        snapping = false;                             /* a hand on the wheel outranks the brake — Lenis interrupts the tween, we re-arm */
      }, { passive: true });
      /* own velocity in px/ms — Lenis's e.velocity is px/frame (refresh-rate dependent): fine for
         thresholds, wrong for slope matching */
      var lvY = window.pageYOffset || 0, lvT = 0, lvV = 0;
      function maybeGlide(v, vpms) {
        if (snapping) return;
        if (Date.now() - lastWheel < INPUT_IDLE) return;
        if (document.querySelector('.cedar-lb.is-open,.cedar-cf.is-open,#cedar-modal-root.is-open,.cedar-mmenu.is-open')) return;
        var y = window.pageYOffset || 0;
        var vh = window.innerHeight;
        var rest = Math.max(0, Math.min(lenis.limit || 1e9, lenis.targetScroll != null ? lenis.targetScroll : y));   /* where this glide actually ends — Lenis's own destination, not a projection */
        var dir = v > 0.05 ? 1 : v < -0.05 ? -1 : (lastDir || 1);        /* at-rest fallback keeps the last direction of travel */
        /* forward-only pick: the furthest station the glide reaches/passes (brake into it while
           still short of it), else the next one ahead of the rest point when it's close enough
           to arrive at. Anything behind the CURRENT position is off the table — no reversing. */
        var passed = null, next = null, nd = 1e9;
        for (var i = 0; i < targets.length; i++) {
          var t = targets[i];
          var ahead = (t - y) * dir;
          if (ahead < 6) continue;                    /* behind us (or where we already stand) — never a target */
          var beyond = (t - rest) * dir;              /* negative = the glide passes it, positive = it dies short */
          if (beyond <= 0) { if (passed == null || (t - passed) * dir > 0) passed = t; }
          else if (beyond < nd) { nd = beyond; next = t; }
        }
        var best = passed != null ? passed : (next != null && nd <= vh * FORWARD_PULL ? next : null);
        if (best == null) return;
        var dy = best - y;
        if (Math.abs(dy) < 6) return;                 /* already at the platform */
        snapping = true;
        var dur = glideDur(Math.abs(dy));
        var vp = (vpms || 0);
        if (vp * dy > 0) dur = Math.min(dur, MAX_SLOPE * Math.abs(dy) / (Math.abs(vp) * 1000) || dur);   /* fast entry → shorter, firmer brake so the matched slope stays ≤ MAX_SLOPE (no kink) */
        dur = Math.max(0.35, dur);
        var s0 = vp * dur * 1000 / dy;                /* normalized initial slope; a sign mismatch clamps to 0 = smoothstep start */
        lenis.scrollTo(best, { duration: dur, easing: velEase(s0), onComplete: function () { setTimeout(function () { snapping = false; }, 90); } });
        setTimeout(function () { snapping = false; }, (dur * 1000) + 400);   /* safety: never wedge the flag */
      }
      lenis.on('scroll', function (e) {
        var now = performance.now();
        var y = window.pageYOffset || 0;
        var dt = now - lvT;
        lvV = (dt > 0 && dt < 200) ? (y - lvY) / dt : 0;
        lvY = y; lvT = now;
        if (snapping) return;
        var v = e.velocity || 0;
        if (v > 0.05) lastDir = 1; else if (v < -0.05) lastDir = -1;
        if (Math.abs(v) > 0.05) maybeGlide(v, lvV);   /* input idle (checked inside) → take over NOW, while still short of the station — braking early is the whole point */
        clearTimeout(settleT);
        settleT = setTimeout(function () { maybeGlide(0, 0); }, SETTLE_MS);   /* scrolls that die on their own get the at-rest check */
      });
    });
  });

  /* =========================================================
   * 15. CONTACT LOTTIE (outline mark) — /contact. Fills the
   *   "outline mark lottie" placeholder embed below the
   *   "Tell us about your project." heading. Scales to 100% of the
   *   host's content width (the embed carries its own 20px side
   *   padding in Webflow); square artboard → aspect-ratio 1/1.
   *   Plays the mark trace ONCE on scroll-in (real motion ends
   *   ~frame 180 of a padded 6600-frame comp, so we cap the
   *   segment) and holds the final state until reload. Under
   *   reduced motion it just shows the finished mark.
   * ======================================================= */
  onReady(function () {
    var host = [].slice.call(document.querySelectorAll('.w-embed')).filter(function (e) {
      return /outline\s*mark\s*lottie/i.test((e.textContent || '').trim());
    })[0];
    if (!host) return;
    var END = 180;                                   /* last real motion frame (comp op is padded to 6600) */
    host.textContent = '';
    host.style.display = 'block';
    var box = el('div', 'cedar-lottie-mark');
    box.style.cssText = 'width:100%;aspect-ratio:1/1;margin:0 auto;';   /* full container width (host padding = the 20px gutters) */
    host.appendChild(box);
    /* v1.80 (client): full width (= 20px from the side rules via the host's own padding), and the
       DRAWN CHEVRONS' bottom edge — not the artboard's, which carries blank padding — aligns to the
       bottom of the flanking VERTICAL LINES. Pure translate; flow, column, and lines untouched. */
    function markBottom() {
      var svg = box.querySelector('svg');
      if (svg) {
        var mx = 0, ps = svg.querySelectorAll('path');
        for (var i = 0; i < ps.length; i++) { var r = ps[i].getBoundingClientRect(); if (r.height > 2 && r.bottom > mx) mx = r.bottom; }
        if (mx > 0) return mx;                          /* visual bottom of the drawn mark */
      }
      return box.getBoundingClientRect().bottom;        /* pre-lottie fallback: the artboard box */
    }
    function fitMark() {
      box.style.transform = '';
      var b = box.getBoundingClientRect(), cx = (b.left + b.right) / 2, target = null;
      var lines = [].slice.call(document.querySelectorAll('.vertical-line'))
        .map(function (e) { return e.getBoundingClientRect(); })
        .filter(function (r) { return r.height > 100; });   /* the tall side rules, not stray hairlines */
      if (lines.length) {
        lines.sort(function (a, c) {                    /* the rule nearest the mark's column */
          function dst(r) { return Math.min(Math.abs(r.left - cx), Math.abs(r.right - cx)); }
          return dst(a) - dst(c);
        });
        target = lines[0].bottom;
      }
      if (target === null) { var sec = host.closest('section') || host.parentElement; target = sec.getBoundingClientRect().bottom; }
      var d = Math.round(target - markBottom());
      if (Math.abs(d) > 1) box.style.transform = 'translateY(' + d + 'px)';
    }
    fitMark();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(fitMark, 60); });   /* the heading above reflows once the webfont lands */
    var fmT; window.addEventListener('resize', function () { clearTimeout(fmT); fmT = setTimeout(fitMark, 150); });
    ensureLottie(function (lottie) {
      var anim = lottie.loadAnimation({ container: box, renderer: 'svg', loop: false, autoplay: false, path: lottieJSON('OutlineMark_Trace.json') });
      var played = false;
      function play() {
        if (played) return; played = true;
        if (RM) { anim.goToAndStop(END, true); return; }
        anim.playSegments([0, END], true);           /* play the trace once, then hold the last frame */
      }
      if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (ents) {
          ents.forEach(function (en) { if (en.isIntersecting) { play(); io.disconnect(); } });
        }, { threshold: 0.25 });
        anim.addEventListener('DOMLoaded', function () { io.observe(box); fitMark(); });   /* v1.80: re-align once the svg paths exist (chevron bounds now measurable) */
      } else {
        anim.addEventListener('DOMLoaded', function () { play(); fitMark(); });
      }
    });
  });

  /* =========================================================
   * 16. ABOUT VALUE ICONS (Quality / Vision / Sustainability)
   *   — /about. Each value card holds a ".value-icon" placeholder
   *   embed (literal text "icon"); fill it with the matching
   *   Lottie, keyed off the card heading. The files are BLANK until
   *   the draw starts (~frame 92/104 — sampled empirically) and are
   *   fully drawn by ~frame 174, so the visible segment is
   *   [seg0, DRAWN]. REST parks on DRAWN (finished icon). Hover:
   *   draw-in starts IMMEDIATELY (no blank lead-in), then the loop
   *   is draw → hold 1s → undraw (reverse) → draw again, while
   *   hovered. Hover-out: whatever phase it's in, it settles forward
   *   onto the finished icon. Reduced motion → static finished icon.
   *   ICON_BOX / HOLD_MS / DRAWN tunable.
   * ======================================================= */
  onReady(function () {
    var icons = [].slice.call(document.querySelectorAll('.value-icon.w-embed'));
    if (!icons.length) return;
    var ICON_BOX = 200;                            /* px square; tunable */
    var HOLD_MS = 1000;                            /* pause at fully-drawn before the reverse */
    /* per-file segments (the JSONs were resequenced 2026-07-02: per-piece trims; draw runs 12 → last end,
       so seg0=4 is truly blank and drawn = last trim end + pad → no partially-drawn lines at either end) */
    var FILES = [
      { re: /quality/i,        json: 'Quality.json',        seg0: 4, drawn: 100 },
      { re: /vision/i,         json: 'Vision.json',         seg0: 4, drawn: 122 },
      { re: /sustainab/i,      json: 'Sustainability.json', seg0: 4, drawn: 116 }
    ];
    ensureLottie(function (lottie) {
      /* match order: explicit data-icon / class tokens on the embed or its card (Ben's homepage cards carry
         a class and their copy never says the keyword) → card text → leftovers get the unused icons in
         FILES order (home reads Vision / craft / long-term but only card 1 says "Vision") */
      var used = {}, jobs = [], leftovers = [];
      icons.forEach(function (host) {
        var card = host.closest('.about-card') || host.parentElement;
        var keys = [host.getAttribute('data-icon'), card && card.getAttribute('data-icon'), host.className, card ? card.className : ''].join(' ');
        var pick = FILES.filter(function (f) { return f.re.test(keys); })[0] ||
                   FILES.filter(function (f) { return f.re.test((card ? card.textContent : '') || ''); })[0];
        if (pick && !used[pick.json]) { used[pick.json] = 1; jobs.push([host, card, pick]); }
        else leftovers.push([host, card]);
      });
      leftovers.forEach(function (lo) {
        var pick = FILES.filter(function (f) { return !used[f.json]; })[0];
        if (!pick) return;                          /* more hosts than icons → leave placeholder */
        used[pick.json] = 1; jobs.push([lo[0], lo[1], pick]);
      });
      jobs.forEach(function (job) {
        var host = job[0], card = job[1], pick = job[2];
        var DRAWN = pick.drawn;
        host.textContent = '';
        host.style.display = 'block'; host.style.width = '100%'; host.style.textAlign = 'center';   /* span the card so the icon can center */
        var box = el('div', 'cedar-value-icon');
        box.setAttribute('data-icon', pick.json);       /* lets CSS scale Quality/Sustainability down 10% on mobile (they draw to the artboard edge) */
        box.style.cssText = 'width:' + ICON_BOX + 'px;height:' + ICON_BOX + 'px;max-width:100%;margin:0 auto;';   /* horizontally centered in the card */
        host.appendChild(box);
        var anim = lottie.loadAnimation({ container: box, renderer: 'svg', loop: false, autoplay: false, path: lottieJSON(pick.json) });
        anim.addEventListener('DOMLoaded', function () { anim.goToAndStop(DRAWN, true); });  /* rest = finished icon (early frames are blank) */
        if (RM) return;                             /* no hover motion under reduced motion */
        var hovering = false, phase = 'rest', holdT = null;   /* phase: rest | draw | hold | undraw */
        function absFrame() { return (anim.firstFrame || 0) + (anim.currentFrame || 0); }   /* currentFrame is segment-relative */
        function drawIn(from) { phase = 'draw'; anim.playSegments([Math.max(pick.seg0, Math.min(from != null ? from : pick.seg0, DRAWN)), DRAWN], true); }
        function undraw()     { phase = 'undraw'; anim.playSegments([DRAWN, pick.seg0], true); }
        anim.addEventListener('complete', function () {
          if (phase === 'draw') {
            if (!hovering) { phase = 'rest'; return; }        /* left mid-draw → we're on the finished icon, stop */
            phase = 'hold';
            holdT = setTimeout(function () { if (hovering) undraw(); else phase = 'rest'; }, HOLD_MS);
          } else if (phase === 'undraw') {
            if (hovering) {                                   /* loop: rest BLANK for a beat, then re-draw — a clean start the eye can read */
              phase = 'blank';
              holdT = setTimeout(function () { if (hovering) drawIn(); else { phase = 'rest'; anim.goToAndStop(DRAWN, true); } }, 320);
            }
            else drawIn(absFrame());                          /* left mid-cycle → settle forward to drawn */
          }
        });
        var hoverEl = card || host;
        hoverEl.addEventListener('mouseenter', function () {
          hovering = true; clearTimeout(holdT);
          if (phase === 'rest' || phase === 'hold') undraw();  /* client v1.61: start BACKWARDS — reverse-build from the finished icon instead of jumping full->blank->draw; the complete handler then rebuilds and keeps looping while hovered */
          /* mid-draw/mid-undraw: let the running segment finish; the complete handler continues the loop */
        });
        hoverEl.addEventListener('mouseleave', function () {
          hovering = false; clearTimeout(holdT);
          if (phase === 'undraw') { drawIn(absFrame()); }     /* reverse in flight → play forward from here to drawn */
          else if (phase === 'hold' || phase === 'rest' || phase === 'blank') { phase = 'rest'; anim.goToAndStop(DRAWN, true); }
          /* mid-draw: it finishes to DRAWN on its own and the complete handler parks it */
        });
      });
    });
  });

  /* =========================================================
   * 17. /WORK HEADING CONVERGENCE — "Work / that / endures." start
   *   on three staggered lines; as you scroll, "endures." eases
   *   DOWN 10px and the other two travel to meet it, so all three
   *   settle onto one shared baseline. Scrubbed against scrollY
   *   over the first RANGE px (finishes quickly), damped every
   *   frame so it never feels jerky, and fully reversible on the
   *   way back up. Opacity intro is ours too (module 7 excludes
   *   .work-heading so nothing else touches these transforms).
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/work') return;
    var parts = { w: document.querySelector('.work-heading._1'), t: document.querySelector('.work-heading._2'), e: document.querySelector('.work-heading._3') };
    if (!parts.w || !parts.t || !parts.e) return;
    var all = [parts.w, parts.t, parts.e];
    /* fade-in intro (transform stays ours) */
    all.forEach(function (n, i) { n.classList.add('cedar-wh'); });
    afterLoader(function () { all.forEach(function (n, i) { n.style.transitionDelay = (i * 110) + 'ms'; n.classList.add('cedar-wh-in'); }); });
    if (RM) return;                                   /* reduced motion: static designed layout */
    var RANGE = 320;                                  /* scroll px over which the convergence completes */
    var DROP = 10;                                    /* how far "endures." drifts down */
    var deltas = null;
    function measure() {                              /* natural tops, independent of any applied scrub transform */
      var tops = {};
      all.forEach(function (n) {
        var m = (getComputedStyle(n).transform.match(/matrix\(([^)]+)\)/) || [])[1];
        var ty = m ? parseFloat(m.split(',')[5]) || 0 : 0;
        tops[n === parts.w ? 'w' : n === parts.t ? 't' : 'e'] = n.getBoundingClientRect().top + window.pageYOffset - ty;
      });
      var target = tops.e + DROP;                     /* shared baseline = endures' natural line, 10px lower */
      deltas = { w: target - tops.w, t: target - tops.t, e: DROP };
    }
    var cur = 0, ticking = false, raf = null;
    function ease(x) { return 1 - Math.pow(1 - x, 3); }   /* easeOutCubic on the scrub */
    function frame() {
      raf = null;
      var p = Math.max(0, Math.min(1, (window.pageYOffset || 0) / RANGE));
      var goal = ease(p);
      cur += (goal - cur) * 0.16;                     /* damping — smooth, never snappy */
      if (Math.abs(goal - cur) < 0.0015) cur = goal;
      parts.w.style.transform = 'translateY(' + (deltas.w * cur).toFixed(2) + 'px)';
      parts.t.style.transform = 'translateY(' + (deltas.t * cur).toFixed(2) + 'px)';
      parts.e.style.transform = 'translateY(' + (deltas.e * cur).toFixed(2) + 'px)';
      if (cur !== goal) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }
    afterLoader(function () {
      measure(); kick();
      window.addEventListener('scroll', kick, { passive: true });
      var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { measure(); kick(); }, 150); });
    });
  });

  /* =========================================================
   * 20. TYPE CASCADE (.contact-head) — every .contact-head on the
   *   site (the /contact H1, and the situation/results heads Ben
   *   tagged on the project pages) gets a rise+fade type-on.
   *   Project pages on DESKTOP animate LINE BY LINE (words are
   *   grouped by their rendered line; each line rises as one);
   *   mobile — and the contact page — keep the character cascade.
   *   Size + alignment come from the Designer (v1.84 — the
   *   script used to center the project-page heads; no more).
   *   Triggered per-element on scroll-in, after the loader.
   *   Reduced motion: headings just stay put.
   * ======================================================= */
  onReady(function () {
    if (RM) return;
    var P = location.pathname.replace(/\/$/, '') || '/';
    var isWork = P.indexOf('/work/') === 0;
    var heads = [].slice.call(document.querySelectorAll('.contact-head'));
    if (!heads.length) return;
    heads.forEach(function (h, hi) {
      if (h.children.length) return;                  /* plain text only — don't double-split */
      var words = (h.textContent || '').split(/\s+/).filter(Boolean);
      if (!words.length) return;
      h.textContent = '';
      var chars = [], wordEls = [];
      words.forEach(function (wd, wi) {
        var w = el('span', 'cedar-word');
        for (var i = 0; i < wd.length; i++) {
          var c = el('span', 'cedar-chr'); c.textContent = wd.charAt(i);
          w.appendChild(c); chars.push(c);
        }
        h.appendChild(w); wordEls.push(w);
        if (wi < words.length - 1) h.appendChild(document.createTextNode(' '));
      });
      /* v1.84: no more cedar-center — alignment (and size) come from the Designer; the split + rise-in below is all this module does to the head now */
      var lineMode = isWork && window.innerWidth >= 768;
      var fired = false;
      function fire() {
        if (fired) return; fired = true;
        if (lineMode) {                               /* group words by rendered line; a line's chars move together */
          var lineIdx = {}, count = 0;
          wordEls.forEach(function (w) {
            var key = Math.round(w.offsetTop / 10);
            if (!(key in lineIdx)) lineIdx[key] = count++;
            var d = (lineIdx[key] * 220) + 'ms';
            [].slice.call(w.children).forEach(function (c) { c.style.transitionDelay = d; c.classList.add('cedar-in'); });
          });
        } else {
          chars.forEach(function (c, i) { c.style.transitionDelay = (i * 36) + 'ms'; c.classList.add('cedar-in'); });   /* 36ms stagger + 1.2s chars ≈ 2s total */
        }
      }
      afterLoader(function () {
        if (!('IntersectionObserver' in window)) { setTimeout(fire, 180); return; }
        var io = new IntersectionObserver(function (ents) {
          ents.forEach(function (en) { if (en.isIntersecting) { setTimeout(fire, 120); io.disconnect(); } });
        }, { threshold: 0.3 });
        io.observe(h);
      });
    });
  });

  /* =========================================================
   * 22. SUITE BOOKING MODALS (/post) — the four "Book Color /
   *   Amenities / Sound / Dailies" pills (and the hero "Book
   *   Color") open a modal instead of jumping to /contact. The
   *   page's own HIDDEN contact form (.form-wrap-post, in the
   *   suite-specs flex block) is MOVED into the modal — not cloned
   *   — so Webflow's native submit binding, success and error
   *   states keep working. Each open stamps a hidden "Suite" field
   *   with the suite name and pre-selects the "Suite Rental"
   *   interest option; close returns the form to its hidden home.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/post') return;
    var wrap = document.querySelector('.form-wrap-post');
    if (!wrap) return;
    var home = wrap.parentElement;
    var root = el('div', null, '<div class="cedar-modal-backdrop"></div>');
    root.id = 'cedar-modal-root';
    document.body.appendChild(root);
    var current = null;
    function goHome() { if (wrap.parentElement !== home) { wrap.style.display = ''; home.appendChild(wrap); } }
    function close() {
      root.classList.remove('is-in'); document.body.classList.remove('cedar-modal-open');
      setTimeout(function () { goHome(); root.classList.remove('is-open'); if (current) { current.remove(); current = null; } }, RM ? 0 : 620);
    }
    root.firstChild.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('is-open')) close(); });
    function open(suite) {
      if (current) { goHome(); current.remove(); }
      var m = el('div', 'cedar-modal cedar-suite', '');
      m.setAttribute('data-lenis-prevent', '');   /* let the modal wheel-scroll under Lenis */
      var x = el('button', 'cm-close', '×'); x.setAttribute('aria-label', 'Close'); x.addEventListener('click', close); m.appendChild(x);
      m.appendChild(el('h3', null, 'Book ' + suite));
      var lead = el('div', 'cm-body', 'Book ' + suite + ', tell us about your session.');
      lead.style.marginBottom = '18px';
      m.appendChild(lead);
      var holder = el('div', 'cedar-suite-form', '');
      m.appendChild(holder);
      holder.appendChild(wrap);
      wrap.style.display = 'block';
      var form = wrap.querySelector('form');
      if (form) {
        var hid = form.querySelector('input[name="Suite"]');
        if (!hid) { hid = document.createElement('input'); hid.type = 'hidden'; hid.name = 'Suite'; form.appendChild(hid); }
        hid.value = suite;
        var sel = form.querySelector('select');
        if (sel) { for (var i = 0; i < sel.options.length; i++) { if (/suite/i.test(sel.options[i].text)) { sel.selectedIndex = i; break; } } }
      }
      root.appendChild(m); current = m;
      root.classList.add('is-open'); document.body.classList.add('cedar-modal-open');
      requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('is-in'); }); });
      var first = form && form.querySelector('input[type="text"],input[type="email"]');
      if (first) setTimeout(function () { try { first.focus(); } catch (_) {} }, 380);
    }
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a.btn-pill');
      if (!a) return;
      var t = (a.textContent || '').trim();
      if (!/^book\s+/i.test(t)) return;
      e.preventDefault();
      open(t.replace(/^book\s+/i, ''));
    });
  });

  /* =========================================================
   * 23. HOME INFO-CARDS DRAG-SCROLL — "What makes Cedar
   *   different" row. Activates ONLY when the CMS holds more than
   *   4 cards: the row becomes a horizontal scroller (scrollbar
   *   hidden), desktop gets click-drag scrubbing with the cursor
   *   replaced by a "Drag to scroll" pill (touch keeps native
   *   swipe). A drag suppresses the accidental click at release.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/') return;
    var row = document.querySelector('.info-row.w-dyn-items');
    if (!row || row.querySelectorAll('.info-card').length <= 4) return;
    row.classList.add('cedar-hscroll');
    if (TOUCH) return;                              /* touch: native swipe, no pill */
    row.classList.add('cedar-nocursor');
    var pill = el('div', 'cedar-cf-pill', 'Drag to scroll');
    document.body.appendChild(pill);
    var mx = 0, my = 0, px = -200, py = -200, raf = null, over = false;
    function loop() {
      if (!over) { raf = null; return; }
      px += (mx - px) * 0.22; py += (my - py) * 0.22;
      pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px';
      raf = requestAnimationFrame(loop);
    }
    row.addEventListener('pointerenter', function (e) { over = true; px = mx = e.clientX; py = my = e.clientY; pill.classList.add('is-on'); if (!raf) raf = requestAnimationFrame(loop); });
    row.addEventListener('pointerleave', function () { over = false; pill.classList.remove('is-on'); });
    var down = false, moved = false, sx = 0, sl = 0;
    row.addEventListener('pointerdown', function (e) {
      down = true; moved = false; sx = e.clientX; sl = row.scrollLeft;
      try { row.setPointerCapture(e.pointerId); } catch (_) {}
      pill.classList.add('is-down');
    });
    row.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!down) return;
      var dx = e.clientX - sx;
      if (Math.abs(dx) > 5) moved = true;
      row.scrollLeft = sl - dx;
    });
    function up() { down = false; pill.classList.remove('is-down'); }
    row.addEventListener('pointerup', up);
    row.addEventListener('pointercancel', up);
    row.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  });

  /* =========================================================
   * 19. MOBILE MENU (≤767px) — the bar becomes just the mark
   *   (left corner) and a "Menu" text button (right corner; the
   *   wordmark + inline links are hidden by CSS). Tapping Menu
   *   fills the screen with Cedar's warm grey (#dad3cd), the pages
   *   listed vertically at 36px, left-aligned and pinned to the
   *   bottom-left. Button toggles to "Close"; scroll locks while
   *   open; module 9 holds the nav visible (__cedarMenuOpen).
   *   Built on every viewport (CSS media query decides visibility)
   *   so rotation / resize just works.
   * ======================================================= */
  onReady(function () {
    var nav = document.querySelector('.navbar');
    if (!nav) return;
    var links = [].slice.call(document.querySelectorAll('.navbar .nav-link'));
    if (!links.length) return;
    var btn = el('button', 'cedar-mmenu-btn', 'Menu'); btn.type = 'button'; btn.setAttribute('aria-label', 'Open menu');
    nav.appendChild(btn);
    var menu = el('div', 'cedar-mmenu', '');
    var list = document.createElement('nav');
    var items = links.map(function (a) { return { txt: (a.textContent || '').trim(), href: a.getAttribute('href') || '#' }; });
    if (!items.some(function (it) { return it.href === '/'; })) items.unshift({ txt: 'Home', href: '/' });
    items.forEach(function (it, i) {
      var a = document.createElement('a'); a.textContent = it.txt; a.href = it.href;
      a.style.transitionDelay = (120 + i * 55) + 'ms';
      list.appendChild(a);
    });
    menu.appendChild(list); document.body.appendChild(menu);
    var open = false;
    function set(o) {
      open = o; window.__cedarMenuOpen = o;
      menu.classList.toggle('is-open', o);
      nav.classList.toggle('cedar-mmenu-on', o);
      nav.classList.remove('cedar-nav-hidden');
      btn.textContent = o ? 'Close' : 'Menu';
      document.documentElement.style.overflow = o ? 'hidden' : '';
      if (!o) [].slice.call(list.children).forEach(function (a) { a.style.transitionDelay = '0ms'; });   /* links fade out together */
      else [].slice.call(list.children).forEach(function (a, i) { a.style.transitionDelay = (120 + i * 55) + 'ms'; });
    }
    btn.addEventListener('click', function () { set(!open); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
    window.addEventListener('resize', function () { if (open && window.innerWidth > 767) set(false); });
  });

  /* =========================================================
   * 21. FOOTER — rebuilt to the brand-guidelines cover layout:
   *   Cedar Green field, light-green type, hairline-separated
   *   columns up top (studio label + line · pages · tagline +
   *   copyright), and the giant light-green mark + "Cedar Creative"
   *   lockup spanning the full width at the bottom. Content is
   *   pulled from the existing footer nodes (tagline, links,
   *   copyright — originals just hidden, recoverable); the lockup
   *   reuses the nav wordmark asset + brand mark as currentless
   *   CSS masks painted light green.
   * ======================================================= */
  onReady(function () {
    var f = document.querySelector('.site-footer');
    if (!f || f.querySelector('.cedar-foot')) return;
    var tagN = f.querySelector('.footer-tagline'), copN = f.querySelector('.footer-copyright');
    var tag = (tagN && tagN.textContent.trim()) || 'Partner with a team that makes the most of every opportunity.';
    var cop = (copN && copN.textContent.trim()) || 'Copyright Cedar Creative';
    var links = [].slice.call(f.querySelectorAll('.footer-link'));
    var logoImg = document.querySelector('a.nav-logo img');
    var logoUrl = logoImg ? (logoImg.currentSrc || logoImg.src) : '';
    var MARK_URL = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374 283"><path fill-rule="evenodd" clip-rule="evenodd" d="M178.04 0L0 126.555V137.94L25.0235 144.296L178.04 83.6805H195.051L348.067 144.296L373.09 137.94V126.555L195.051 0H178.04Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M178.04 137.979L0 264.534V275.919L25.0235 282.276L178.04 221.66H195.051L348.067 282.276L373.09 275.919V264.534L195.051 137.979H178.04Z" fill="#fff"/></svg>');
    [].slice.call(f.children).forEach(function (c) { c.style.display = 'none'; });   /* originals hidden, not removed */
    var root = el('div', 'cedar-foot', '');
    var cols = el('div', 'cedar-foot-cols', '');
    var c1 = el('div', 'cedar-foot-col c1', '');
    c1.appendChild(el('p', 'cf-tag', "Let's make something that lasts."));      /* client copy (was the Webflow tagline); "Say hello" is the pill below */
    var cta = el('a', 'cf-cta', 'Say hello'); cta.href = '/contact';
    c1.appendChild(cta);
    var c2 = el('div', 'cedar-foot-col c2', '');
    var lwrap = el('nav', 'cf-links', '');
    links.forEach(function (a) {
      var na = document.createElement('a'); na.textContent = (a.textContent || '').trim(); na.href = a.getAttribute('href') || '#';
      lwrap.appendChild(na);
    });
    c2.appendChild(lwrap);
    cols.appendChild(c1); cols.appendChild(c2);
    var lockup = el('a', 'cedar-foot-lockup', '');
    lockup.href = '/'; lockup.setAttribute('aria-label', 'Cedar Creative home');
    var mk = el('span', 'cedar-foot-mark', '');
    mk.style.webkitMaskImage = 'url("' + MARK_URL + '")'; mk.style.maskImage = 'url("' + MARK_URL + '")';
    lockup.appendChild(mk);
    if (logoUrl) {
      var wd = el('span', 'cedar-foot-word', '');
      wd.style.webkitMaskImage = 'url("' + logoUrl + '")'; wd.style.maskImage = 'url("' + logoUrl + '")';
      lockup.appendChild(wd);
    }
    root.appendChild(cols); root.appendChild(lockup);
    var bottom = el('div', 'cedar-foot-bottom', '');
    bottom.appendChild(el('div', 'cf-copy', cop));
    var built = el('a', 'cf-built', 'Built by Origin');
    built.href = 'https://originbrand.io'; built.target = '_blank'; built.rel = 'noopener';
    bottom.appendChild(built);
    root.appendChild(bottom);
    f.appendChild(root);
  });

  /* =========================================================
   * 24. POST PARTNERS DRAG-SCROLL (/post) — the Post Partners CMS
   *   row Ben laid out in place of the second marquee. When the
   *   cards overflow the row, it becomes a horizontal drag-scroller
   *   with a "Click and drag" cursor pill (same treatment as the
   *   home info-cards). Rechecks on resize; touch keeps native
   *   swipe; a drag suppresses the accidental click at release.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/post') return;
    var row = document.querySelector('.post-partner-row.w-dyn-items');
    if (!row) return;
    var armed = false;
    function check() {
      var need = row.scrollWidth > row.clientWidth + 8;
      row.classList.toggle('cedar-hscroll', need);
      if (!TOUCH) row.classList.toggle('cedar-nocursor', need);
      if (need && !armed && !TOUCH) arm();
    }
    function arm() {
      armed = true;
      var pill = el('div', 'cedar-cf-pill', 'Click and drag');
      document.body.appendChild(pill);
      var mx = 0, my = 0, px = -200, py = -200, raf = null, over = false;
      function loop() {
        if (!over) { raf = null; return; }
        px += (mx - px) * 0.22; py += (my - py) * 0.22;
        pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px';
        raf = requestAnimationFrame(loop);
      }
      row.addEventListener('pointerenter', function (e) { if (!row.classList.contains('cedar-hscroll')) return; over = true; px = mx = e.clientX; py = my = e.clientY; pill.classList.add('is-on'); if (!raf) raf = requestAnimationFrame(loop); });
      row.addEventListener('pointerleave', function () { over = false; pill.classList.remove('is-on'); });
      var down = false, moved = false, sx = 0, sl = 0;
      row.addEventListener('pointerdown', function (e) {
        if (!row.classList.contains('cedar-hscroll')) return;
        down = true; moved = false; sx = e.clientX; sl = row.scrollLeft;
        try { row.setPointerCapture(e.pointerId); } catch (_) {}
        pill.classList.add('is-down');
      });
      row.addEventListener('pointermove', function (e) {
        mx = e.clientX; my = e.clientY;
        if (!down) return;
        var dx = e.clientX - sx;
        if (Math.abs(dx) > 5) moved = true;
        row.scrollLeft = sl - dx;
      });
      function up() { down = false; pill.classList.remove('is-down'); }
      row.addEventListener('pointerup', up);
      row.addEventListener('pointercancel', up);
      row.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    }
    check();
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(check, 160); });
    window.addEventListener('load', check);
  });

  /* =========================================================
   * 25. MOBILE HERO BAND SIZER (/work/* templates) — Ben set the
   *   top photo/video band to 50vh on mobile; the Vimeo embed's own
   *   CSS still sized the iframe to the full-width 16:9, cropping
   *   most of the frame. Hard-size the iframe INLINE (beats any
   *   stylesheet or embed styling): height = 50vh, width = 16:9 of
   *   that (some side crop is expected), centered in the clipped
   *   band. Re-applies on resize and when the lazy embed builds its
   *   iframe late; desktop gets untouched styles back.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P.indexOf('/work/') !== 0) return;
    var band = document.querySelector('.hero-band, .photo-band');
    if (!band) return;
    var PROPS = ['width', 'height', 'min-width', 'min-height', 'max-width', 'max-height', 'position', 'top', 'left', 'transform'];
    var FILL = ['position', 'top', 'left', 'width', 'height', 'padding'];
    var filled = [];
    function size() {
      var f = band.querySelector('iframe');
      if (!f) return;
      if (window.innerWidth >= 768) {
        if (f._cedarBandSized) { PROPS.forEach(function (p) { f.style.removeProperty(p); }); f._cedarBandSized = false; }
        filled.forEach(function (n) { FILL.forEach(function (p) { n.style.removeProperty(p); }); });
        filled = [];
        return;
      }
      /* the embed's wrappers (.vimeo-wrapper/.vimeo-container) carry their own aspect heights and anchor
         the iframe low in the band — make every ancestor between the iframe and the band FILL the band,
         so the centered iframe positions against the 50vh box itself (no charcoal gap above the video) */
      var p = f.parentElement;
      while (p && p !== band && p !== document.body) {
        p.style.setProperty('position', 'absolute', 'important');
        p.style.setProperty('top', '0', 'important');
        p.style.setProperty('left', '0', 'important');
        p.style.setProperty('width', '100%', 'important');
        p.style.setProperty('height', '100%', 'important');
        p.style.setProperty('padding', '0', 'important');
        if (filled.indexOf(p) === -1) filled.push(p);
        p = p.parentElement;
      }
      var h = Math.round(window.innerHeight * 0.5), w = Math.round(h * 16 / 9);
      band.style.overflow = 'hidden';
      band.style.setProperty('height', h + 'px', 'important');       /* the band IS the 50vh box */
      if (getComputedStyle(band).position === 'static') band.style.position = 'relative';
      f.style.setProperty('width', w + 'px', 'important');
      f.style.setProperty('height', h + 'px', 'important');
      f.style.setProperty('min-width', '0', 'important');
      f.style.setProperty('min-height', '0', 'important');
      f.style.setProperty('max-width', 'none', 'important');
      f.style.setProperty('max-height', 'none', 'important');
      f.style.setProperty('position', 'absolute', 'important');
      f.style.setProperty('top', '50%', 'important');
      f.style.setProperty('left', '50%', 'important');
      var ch = band.hasAttribute('data-cedar-crop') ? band : band.querySelector('[data-cedar-crop]');   /* CMS Crop tagged on the band or its embed */
      var cz = ch ? cropZoom(ch) : 1;
      f.style.setProperty('transform', 'translate(-50%,-50%)' + (cz !== 1 ? ' scale(' + cz + ')' : ''), 'important');
      f._cedarBandSized = true;
    }
    size();
    var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(size, 150); });
    var mo = new MutationObserver(size); mo.observe(band, { childList: true, subtree: true });   /* lazy embed builds its iframe late */
  });

  /* =========================================================
   * 28. CONTACT FORM STAYS PUT (/contact) — Webflow's default
   *   success state HIDES the whole form and shows the done box
   *   (which floats loose in the side column). Instead: the form
   *   stays visible (fields reset), and the success / "try again"
   *   fail notices sit directly BELOW the form, restyled to the
   *   site. The /post suite-modal form is untouched (module 22
   *   owns it and its native states read correctly inside the
   *   modal). We only re-show the form — Webflow keeps owning
   *   submission, validation, and which notice displays.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/contact') return;
    var wrap = document.querySelector('.form-wrap.w-form');
    var form = wrap && wrap.querySelector('form');
    var done = wrap && wrap.querySelector('.w-form-done');
    var fail = wrap && wrap.querySelector('.w-form-fail');
    if (!form || !done) return;
    form.insertAdjacentElement('afterend', done);          /* notices live right under the form (still inside .w-form, so Webflow finds them) */
    if (fail) done.insertAdjacentElement('afterend', fail);
    done.classList.add('cedar-form-note');
    if (fail) fail.classList.add('cedar-form-note');
    new MutationObserver(function () {                     /* Webflow hides the form on success — put it straight back, cleared */
      if (form.style.display === 'none') { form.style.display = ''; form.reset(); }
    }).observe(form, { attributes: true, attributeFilter: ['style'] });
  });

  /* =========================================================
   * 29. PHOTO SLIDER (shared) — about full-width photo section +
   *   post mid-page photo section. Ben places the photos in the
   *   Designer (a div or Collection List of images with class
   *   "photo-slider", or any element carrying data-cedar-slider);
   *   this turns the container into a filmstrip: photos share one
   *   height at their natural aspect, auto-advance one photo at a
   *   time on the BTS beat, drag to scrub (desktop gets the
   *   "Drag" cursor pill; touch keeps native swipe), seamless
   *   wrap. Auto-advance pauses while hovered, dragging,
   *   off-screen, or the tab is hidden. Reduced motion: a plain
   *   scrollable row (or the untouched band in cover mode).
   *   COVER MODE (v1.30): data-cedar-slider="cover" → one photo
   *   at a time, full-bleed (object-fit cover, no gap, no radius),
   *   filling the container — used by the /post photo band, which
   *   this module now feeds itself: the band above "Suite Specs"
   *   gets the full CEDAR_POST_PHOTOS set (already site assets,
   *   responsive variants included) with the band's own photo-1
   *   staying slide 1. Slower, roomier beat than the filmstrip.
   *   Tunables: PS_AUTO_MS, PS_SLIDE_MS (filmstrip), CV_AUTO_MS,
   *   CV_SLIDE_MS (cover), PS_H().
   * ======================================================= */
  onReady(function () {
    /* /post band feed — client: the photo band above "Suite Specs" runs the whole set as a
       full-screen slider. Photos are already Webflow assets; feed them in (hidden) and tag
       the band as a cover slider. Removing the tag/imgs reverts to the static band. */
    (function () {
      var P = location.pathname.replace(/\/$/, '') || '/';
      if (P !== '/post') return;
      var band = document.querySelector('.photo-band:not(.hero-band)');
      if (!band || band.hasAttribute('data-cedar-slider')) return;
      var CDN = 'https://cdn.prod.website-files.com/6a2027613280b41b9b3c3276/';
      var SET = [   /* CEDAR_POST_PHOTOS 3..31 (photo-1 already lives in the band) */
        '6a285a90100213d9c6d6502c_CEDAR_POST_PHOTOS-3_52819346',
        '6a285a90a85c76cdc86b821f_CEDAR_POST_PHOTOS-5_8181be99',
        '6a285a9054408ff7b931a0b3_CEDAR_POST_PHOTOS-7_f8bd801a',
        '6a285a90c9f0ef1c6536ae7f_CEDAR_POST_PHOTOS-9_e88b15af',
        '6a285a8a7d392b65d4c2a5df_CEDAR_POST_PHOTOS-11_1a11d857',
        '6a285a8aa85c76cdc86b7ee8_CEDAR_POST_PHOTOS-15_054c0a6f',
        '6a285a8a948a06b79eb3e674_CEDAR_POST_PHOTOS-17_d410bf8a',
        '6a285a8b84f943749bfd19a0_CEDAR_POST_PHOTOS-19_3a657d38',
        '6a285a890e652dd4fdf412be_CEDAR_POST_PHOTOS-21_94c8fcdf',
        '6a285a8af11201fbeb28374f_CEDAR_POST_PHOTOS-23_f397a161',
        '6a285a8a6eac0e2b17cbbbeb_CEDAR_POST_PHOTOS-25_076b0bb9',
        '6a285a8a21191a0e075f7009_CEDAR_POST_PHOTOS-27_61e8e7aa',
        '6a285a8ab71787ddf0ef8cac_CEDAR_POST_PHOTOS-29_90605c31',
        '6a285a8a8d6fa658ea15f353_CEDAR_POST_PHOTOS-31_59e80d96'
      ];
      var feed = el('div', 'cedar-ps-feed', '');
      feed.style.display = 'none';
      SET.forEach(function (f) {
        var im = document.createElement('img');
        im.src = CDN + f + '.jpg';
        im.setAttribute('srcset', CDN + f + '-p-1080.jpg 1080w, ' + CDN + f + '-p-1600.jpg 1600w, ' + CDN + f + '-p-2000.jpg 2000w, ' + CDN + f + '.jpg 2500w');
        im.setAttribute('sizes', '100vw');
        im.alt = 'Inside The Post at Cedar';
        feed.appendChild(im);
      });
      band.appendChild(feed);
      band.setAttribute('data-cedar-slider', 'cover');
    })();
    var hosts = [].slice.call(document.querySelectorAll('.photo-slider,[data-cedar-slider]'));
    if (!hosts.length) return;
    var PS_AUTO_MS = 3400, PS_SLIDE_MS = 700;             /* filmstrip: matches the BTS auto-cycle beat */
    var CV_AUTO_MS = 4600, CV_SLIDE_MS = 950;             /* cover: full-bleed photos want a roomier dwell + a longer glide */
    function PS_H(host) {
      var h = host.getBoundingClientRect().height;
      if (h > 60) return Math.round(h);                   /* Ben sized the container — honor it */
      return window.innerWidth < 768 ? Math.round(window.innerHeight * 0.4) : 520;
    }
    hosts.forEach(function (host) {
      if (host.classList.contains('cedar-ps-init')) return;
      var COVER = host.getAttribute('data-cedar-slider') === 'cover';
      if (COVER && RM) return;                            /* cover mode under reduced motion: leave the static band untouched */
      var imgs = [].slice.call(host.querySelectorAll('img')).filter(function (im) { return !im.classList.contains('w-dyn-bind-empty'); });
      if (imgs.length < 2) return;                        /* one photo is not a slider — leave the layout alone */
      host.classList.add('cedar-ps-init');
      var GAP = COVER ? 0 : 14;
      var AUTO_MS = COVER ? CV_AUTO_MS : PS_AUTO_MS, SLIDE_MS = COVER ? CV_SLIDE_MS : PS_SLIDE_MS;
      var H = PS_H(host);
      var vp = el('div', 'cedar-ps' + (COVER ? ' cedar-ps-cover' : ''), '');
      var track = el('div', 'cedar-ps-track', '');
      if (!COVER) { vp.style.height = H + 'px'; track.style.height = H + 'px'; }   /* cover fills the host via CSS (100%) so breakpoint height changes just work */
      function slideOf(im) {
        var s = el('div', 'cedar-ps-slide', '');
        if (!COVER) s.style.height = H + 'px';
        var c = im.cloneNode(true);
        if (COVER) { c.setAttribute('sizes', '100vw'); c.style.display = ''; }   /* full-bleed slides: the responsive srcset is correct at 100vw */
        else { c.removeAttribute('sizes'); c.removeAttribute('srcset'); }        /* the CMS srcset picks a tiny variant for the clone's unknown width — pin to the full src */
        c.loading = 'lazy';
        s.appendChild(c);
        return s;
      }
      imgs.forEach(function (im) { track.appendChild(slideOf(im)); });
      [].slice.call(host.children).forEach(function (c) { c.style.display = 'none'; });   /* originals just hidden → recoverable */
      vp.appendChild(track); host.appendChild(vp);
      /* one clone set after the originals = seamless wrap window */
      var setEnd = 0;
      function measure() {
        if (COVER) {                                      /* cover slides are exactly one viewport of the band wide */
          var w = vp.clientWidth;
          [].slice.call(track.children).forEach(function (s) { s.style.width = w + 'px'; });
        }
        setEnd = 0; for (var i = 0; i < imgs.length; i++) setEnd += track.children[i].getBoundingClientRect().width + GAP;
      }
      imgs.forEach(function (im) { track.appendChild(slideOf(im)); });
      window.addEventListener('load', measure); measure();
      if (RM) return;                                     /* reduced motion: static scrollable row, no auto-advance, no takeover */
      function wrap() {
        if (!setEnd) measure();
        if (setEnd && vp.scrollLeft >= setEnd) vp.scrollLeft -= setEnd;   /* identical halves — the jump is invisible */
      }
      /* auto-advance: tween scrollLeft to the next slide's left edge */
      var timer = null, tweenRaf = null, dragging = false, hover = false, onScreen = true;
      function tweenTo(x) {
        if (tweenRaf) cancelAnimationFrame(tweenRaf);
        var from = vp.scrollLeft, d = x - from, t0 = performance.now();
        (function step(now) {
          var p = Math.min(1, (now - t0) / SLIDE_MS);
          vp.scrollLeft = from + d * (1 - Math.pow(1 - p, 3));
          if (p < 1 && !dragging) tweenRaf = requestAnimationFrame(step); else { tweenRaf = null; wrap(); }
        })(t0);
      }
      function nextEdge() {
        var x = vp.scrollLeft + 4, acc = 0;
        for (var i = 0; i < track.children.length; i++) {
          var w = track.children[i].getBoundingClientRect().width + GAP;
          if (acc > x) return acc;
          acc += w;
        }
        return acc;
      }
      function paused() { return dragging || (hover && !COVER) || document.hidden || !onScreen || document.querySelector('#cedar-modal-root.is-open,.cedar-lb.is-open,.cedar-cf.is-open'); }   /* a full-screen band is hovered almost constantly — cover only pauses for a drag */
      function schedule() { clearTimeout(timer); timer = setTimeout(function () { if (!paused()) { wrap(); tweenTo(nextEdge()); } schedule(); }, AUTO_MS); }
      if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { onScreen = !!(en[0] && en[0].isIntersecting); }).observe(host);
      vp.addEventListener('mouseenter', function () { hover = true; });
      vp.addEventListener('mouseleave', function () { hover = false; });
      schedule();
      if (TOUCH) {                                        /* touch: native swipe on the hidden-scrollbar viewport; cover slides snap to their edges */
        if (COVER) { vp.style.scrollSnapType = 'x mandatory'; [].slice.call(track.children).forEach(function (s) { s.style.scrollSnapAlign = 'start'; }); }
        return;
      }
      /* desktop drag-scrub with the shared cursor pill */
      vp.classList.add('cedar-nocursor');
      var pill = el('div', 'cedar-cf-pill', 'Drag');
      document.body.appendChild(pill);
      var mx = 0, my = 0, px = -200, py = -200, raf = null, over = false;
      (function pillLoop() {
        function loop() {
          if (!over) { raf = null; return; }
          px += (mx - px) * 0.22; py += (my - py) * 0.22;
          pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px';
          raf = requestAnimationFrame(loop);
        }
        vp.addEventListener('pointerenter', function (e) { over = true; px = mx = e.clientX; py = my = e.clientY; pill.classList.add('is-on'); if (!raf) raf = requestAnimationFrame(loop); });
        vp.addEventListener('pointerleave', function () { over = false; pill.classList.remove('is-on'); });
      })();
      var sx = 0, sl = 0;
      vp.addEventListener('pointerdown', function (e) {
        dragging = true; sx = e.clientX; sl = vp.scrollLeft;
        if (tweenRaf) { cancelAnimationFrame(tweenRaf); tweenRaf = null; }
        try { vp.setPointerCapture(e.pointerId); } catch (_) {}
        pill.classList.add('is-down');
      });
      vp.addEventListener('pointermove', function (e) {
        mx = e.clientX; my = e.clientY;
        if (!dragging) return;
        vp.scrollLeft = sl - (e.clientX - sx);
        if (setEnd) { if (vp.scrollLeft >= setEnd) { vp.scrollLeft -= setEnd; sl -= setEnd; } else if (vp.scrollLeft <= 0 && sl > setEnd / 2) { vp.scrollLeft += setEnd; sl += setEnd; } }
      });
      function up() {
        if (!dragging) return; dragging = false; pill.classList.remove('is-down');
        if (COVER) { var w = vp.clientWidth || 1; wrap(); tweenTo(Math.round(vp.scrollLeft / w) * w); }   /* client: a drag lands you ON the next photo, never stuck between two */
        else wrap();
        schedule();
      }
      vp.addEventListener('pointerup', up);
      vp.addEventListener('pointercancel', up);
      var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(measure, 200); });
    });
  });

  /* =========================================================
   * 30. "REPLY WITHIN 24 HOURS" TINT — the client wants that one
   *   line light green wherever it appears (contact form aside,
   *   suite modals). CSS can't match text, so tag the exact node.
   * ======================================================= */
  onReady(function () {
    var RX = /reply within 24 hours/i;
    [].slice.call(document.querySelectorAll('p,div,span,em,strong,.caption')).forEach(function (n) {
      if (!n.children.length && RX.test(n.textContent || '')) n.classList.add('cedar-reply-24');
    });
  });

  /* =========================================================
   * 32. TEAM BIO CARDS (/about "Our Team") — name + bio hidden at
   *   rest, fade in on hover; a dark bottom gradient rises on the
   *   image at the same time (CSS on .cedar-bio does the reveal).
   *   Only person cards (image + info) opt in — the CTA "no-outline"
   *   card is left alone. Touch / reduced motion keep the info
   *   visible (no hover to trigger it).
   * ======================================================= */
  onReady(function () {
    if (TOUCH || RM) return;                            /* no hover on touch, and RM users keep names visible */
    [].slice.call(document.querySelectorAll('.bio-card')).forEach(function (c) {
      if (c.querySelector('img.bio-image') && c.querySelector('.bio-card-info')) c.classList.add('cedar-bio');
    });
  });

  /* =========================================================
   * 33a. TEAM ROW LAYOUT MODE (v1.85) — decide, at runtime, whether
   *   .bio-row is the horizontal SCROLLER this script sizes cards for
   *   or a layout the Designer owns (CSS grid / wrapping flex). Only a
   *   non-wrapping flex row gets .cedar-bio-scroller, which is what the
   *   4.5-cards-wide sizing rule is scoped to. Ben rebuilt the row as
   *   grid; the old unconditional rule's width:!important fought the
   *   grid track and squeezed every card to ~86px. Re-checked on resize
   *   and load, since the Designer can switch layout per breakpoint.
   * ======================================================= */
  onReady(function () {
    var rows = [].slice.call(document.querySelectorAll('.bio-row'));
    if (!rows.length) return;
    function classify() {
      rows.forEach(function (r) {
        var cs = getComputedStyle(r);
        /* flex + nowrap = the scroller. grid, inline-grid, block, or any wrap value = Designer's layout, hands off.
           (.cedar-hscroll pins flex-wrap:nowrap, but module 33 only adds it once the row already overflows, which
           only the scroller sizing produces — so this stays stable rather than latching itself on.) */
        r.classList.toggle('cedar-bio-scroller', cs.display.indexOf('flex') > -1 && cs.flexWrap === 'nowrap');
      });
    }
    classify();
    var lt; window.addEventListener('resize', function () { clearTimeout(lt); lt = setTimeout(classify, 160); });
    window.addEventListener('load', classify);
  });

  /* =========================================================
   * 33. TEAM ROW DRAG-SCROLL (/about "Our Team") — the horizontal
   *   .bio-row Ben set to scroll gets the same drag-to-scroll +
   *   "Click and drag" cursor pill as the post-partners row (module
   *   24). Arms only when the cards overflow the row; scrollbar
   *   hidden; a drag suppresses the click at release so cards don't
   *   fire mid-drag. Touch keeps native swipe; rechecks on resize.
   *   Self-disarms on a grid/wrap row (nothing overflows) — as does
   *   the arrow bar in module 37. No change needed there.
   * ======================================================= */
  onReady(function () {
    var P = location.pathname.replace(/\/$/, '') || '/';
    if (P !== '/about') return;
    var row = document.querySelector('.bio-row.w-dyn-items') || document.querySelector('.bio-row');
    if (!row) return;
    row.addEventListener('dragstart', function (e) { e.preventDefault(); });   /* stop the native image-drag ghost when dragging to scroll (Firefox needs this; CSS handles WebKit) */
    var armed = false;
    function check() {
      var need = row.scrollWidth > row.clientWidth + 8;
      row.classList.toggle('cedar-hscroll', need);
      if (!TOUCH) row.classList.toggle('cedar-nocursor', need);
      if (need && !armed && !TOUCH) arm();
    }
    function arm() {
      armed = true;
      var pill = el('div', 'cedar-cf-pill', 'Click and drag');
      document.body.appendChild(pill);
      var mx = 0, my = 0, px = -200, py = -200, raf = null, over = false;
      function loop() {
        if (!over) { raf = null; return; }
        px += (mx - px) * 0.22; py += (my - py) * 0.22;
        pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px';
        raf = requestAnimationFrame(loop);
      }
      row.addEventListener('pointerenter', function (e) { if (!row.classList.contains('cedar-hscroll')) return; over = true; px = mx = e.clientX; py = my = e.clientY; pill.classList.add('is-on'); if (!raf) raf = requestAnimationFrame(loop); });
      row.addEventListener('pointerleave', function () { over = false; pill.classList.remove('is-on'); });
      var down = false, moved = false, sx = 0, sl = 0;
      row.addEventListener('pointerdown', function (e) {
        if (!row.classList.contains('cedar-hscroll')) return;
        down = true; moved = false; sx = e.clientX; sl = row.scrollLeft;
        try { row.setPointerCapture(e.pointerId); } catch (_) {}
        pill.classList.add('is-down');
      });
      row.addEventListener('pointermove', function (e) {
        mx = e.clientX; my = e.clientY;
        if (!down) return;
        var dx = e.clientX - sx;
        if (Math.abs(dx) > 5) moved = true;
        row.scrollLeft = sl - dx;
      });
      function up() { down = false; pill.classList.remove('is-down'); }
      row.addEventListener('pointerup', up);
      row.addEventListener('pointercancel', up);
      row.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    }
    check();
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(check, 160); });
    window.addEventListener('load', check);
  });

  /* =========================================================
   * 34. VIDEO CROP — background films outside the work grid / gallery
   *   (i.e. the project-page HERO band's #vimeo-bg). A film wider than 16:9
   *   (cinemascope) is letterboxed by Vimeo inside its 16:9 player → black
   *   bars top + bottom. The CMS "Crop" dropdown, bound to data-cedar-crop on
   *   the band, zooms the film to hide the bars (see cropZoom). Grid + gallery
   *   films are cropped in their own modules (3 & 13); the lightbox in 14. NO-OP
   *   until a band is tagged. Waits for the lazy embed; re-fits on resize.
   * ======================================================= */
  onReady(function () {
    var hosts = [].slice.call(document.querySelectorAll('[data-cedar-crop]'));
    if (!hosts.length) return;
    hosts.forEach(function (host) {
      if (host.closest('.work-grid') || host.closest('.gallery-card')) return;   /* grid + gallery films are cropped in modules 3 & 13 */
      var z = cropZoom(host); if (z === 1) return;
      var band = host.closest('.hero-band, .photo-band') || host;   /* size the film against its band */
      var isBand = band.matches('.hero-band, .photo-band');
      band.style.overflow = 'hidden';
      if (getComputedStyle(band).position === 'static') band.style.position = 'relative';
      var filled = [];
      function fit() {
        if (isBand && window.innerWidth < 768) return true;   /* mobile hero band is sized + cropped by module 25 */
        var f = band.querySelector('iframe'); if (!f) return false;
        var r = band.getBoundingClientRect(); if (r.height < 2) return false;
        /* collapse every ancestor between the iframe and the band (the embed's aspect-boxed .vimeo-wrapper /
           .vimeo-container anchor the film off-centre) so the iframe positions against the BAND box — else the
           zoom pivots off-centre and shoves the film into a corner (v1.46 bug) */
        var p = f.parentElement;
        while (p && p !== band && p !== document.body) {
          p.style.setProperty('position', 'absolute', 'important');
          p.style.setProperty('top', '0', 'important');
          p.style.setProperty('left', '0', 'important');
          p.style.setProperty('width', '100%', 'important');
          p.style.setProperty('height', '100%', 'important');
          p.style.setProperty('padding', '0', 'important');
          if (filled.indexOf(p) === -1) filled.push(p);
          p = p.parentElement;
        }
        var w = Math.ceil(Math.max(r.width, r.height * 16 / 9) * z) + 2;   /* cover the band, then zoom by the crop factor */
        f.style.setProperty('position', 'absolute', 'important');
        f.style.setProperty('top', '50%', 'important');
        f.style.setProperty('left', '50%', 'important');
        f.style.setProperty('transform', 'translate(-50%,-50%)', 'important');
        f.style.setProperty('width', w + 'px', 'important');
        f.style.setProperty('height', Math.ceil(w * 9 / 16) + 'px', 'important');
        f.style.setProperty('min-width', '0', 'important');
        f.style.setProperty('min-height', '0', 'important');
        f.style.setProperty('max-width', 'none', 'important');
        f.style.setProperty('max-height', 'none', 'important');
        return true;
      }
      if (!fit()) {                                            /* the #vimeo-bg embed builds its iframe / sets src late (an image-only host just times out harmlessly) */
        var mo = new MutationObserver(function () { fit(); });
        mo.observe(band, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
        setTimeout(function () { try { mo.disconnect(); } catch (_) {} }, 12000);
      }
      var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(fit, 200); });
    });
  });

  /* =========================================================
   * 35. IMAGE CROP — the same CMS "Crop" dropdown applied to stills. Any
   *   .img-cover inside a data-cedar-crop host (grid thumbnail, gallery still)
   *   is zoom-scaled to match its film's crop, so a project's thumbnail and its
   *   film stay consistent. NO-OP until a host is tagged.
   * ======================================================= */
  onReady(function () {
    [].slice.call(document.querySelectorAll('[data-cedar-crop]')).forEach(function (host) {
      var z = cropZoom(host); if (z === 1) return;
      var imgs = [].slice.call(host.querySelectorAll('.img-cover'));
      if (host.classList && host.classList.contains('img-cover')) imgs.push(host);
      imgs.forEach(function (im) {
        im.style.transform = 'scale(' + z + ')';
        im.style.transformOrigin = 'center';
        var par = im.parentElement;                                       /* make sure the zoomed still is clipped */
        if (par && getComputedStyle(par).overflow === 'visible') par.style.overflow = 'hidden';
      });
    });
  });

  /* =========================================================
   * 36. GALLERY VIEW (project pages) — a fixed "View gallery"
   *   button, top-right, that fades in whenever the gallery
   *   section is on screen and opens the gallery assets in a
   *   drag-coverflow (same feel as the BTS gallery, module 4):
   *   the centred card is large, the side cards recede.
   *   Each item is a WHITE CARD — the asset on top (UNCROPPED:
   *   fixed card width, media height follows the asset's natural
   *   aspect, a rare tall asset letterboxes rather than crops)
   *   with the CMS Title + Description below it. The caption text
   *   is read from a class OR custom attribute (gallery-title /
   *   gallery-description), which the Designer binds into the card
   *   (no caption until then).
   *   Video cards show their poster with a play glyph; a tap (not
   *   a drag) on the centred video opens the module-14 lightbox
   *   with full controls + sound (reused via a hidden
   *   .cedar-hero-watch bridge). /work/* only; no-op with no
   *   .gallery-card.
   * ======================================================= */
  onReady(function () {
    if ((location.pathname.replace(/\/$/, '') || '/').indexOf('/work/') !== 0) return;
    var cards = [].slice.call(document.querySelectorAll('.gallery-card'));
    if (!cards.length) return;

    /* collect assets in DOM order; natural aspect comes from the on-page (already loaded) image.
       Title + Description come from .gallery-title / .gallery-description if the Designer has bound
       those CMS fields into the card (no-op caption until then). */
    var assets = [];
    cards.forEach(function (c) {
      var vid = c.getAttribute('data-cedar-vimeo');
      var img = c.querySelector('img');
      var src = img ? (img.currentSrc || img.getAttribute('src') || '') : '';
      /* v1.79: videos are ALWAYS 16:9 (the embed's shape — the poster image may be any crop and must not
         drive the card); images: the on-page img is lazy and often unloaded here (naturalWidth 0 -> the old
         ar=1 fallback made SQUARE cards) — leave 0 and re-measure from the coverflow's own img on load. */
      var ar = vid ? (16 / 9) : ((img && img.naturalWidth) ? img.naturalWidth / img.naturalHeight : 0);
      var tEl = c.querySelector('.gallery-title, [gallery-title]'), dEl = c.querySelector('.gallery-description, [gallery-description]');   /* accept a class OR a custom attribute */
      var PLACE = 'This is some text inside of a div block.';       /* Webflow's default text on an unbound element — don't show it */
      var title = tEl ? (tEl.textContent || '').trim() : '';
      var desc = dEl ? (dEl.textContent || '').trim() : '';
      if (title === PLACE) title = ''; if (desc === PLACE) desc = '';
      var gi = -1;
      if (vid) { gi = assets.length; assets.push({ type: 'video', id: vid, hash: c.getAttribute('data-cedar-vimeo-h') || '', src: src, ar: ar, title: title, desc: desc }); }
      else if (src) { gi = assets.length; assets.push({ type: 'image', src: src, ar: ar, title: title, desc: desc }); }
      if (gi > -1) {                                             /* click a gallery item to open the coverflow ON that item (its card + info) */
        c._gvIdx = gi;
        c.style.cursor = 'pointer';
        c.addEventListener('click', function (e) { if (e.target.closest('a,button,.cedar-card-watch')) return; e.preventDefault(); show(c._gvIdx); });   /* v1.67: the watch pill opens the sound player directly (module 14) — don't ALSO open the coverflow */
      }
    });
    if (!assets.length) return;

    var GRID_SVG = '<svg viewBox="0 0 14 14" width="13" height="13" aria-hidden="true"><g fill="currentColor"><rect x="0" y="0" width="6" height="6" rx="1"/><rect x="8" y="0" width="6" height="6" rx="1"/><rect x="0" y="8" width="6" height="6" rx="1"/><rect x="8" y="8" width="6" height="6" rx="1"/></g></svg>';
    var btn = el('button', 'cedar-gv-btn', GRID_SVG + 'View gallery');
    btn.type = 'button';
    document.body.appendChild(btn);

    /* fade the button in whenever any gallery card is on screen (covers multiple gallery groups) */
    var visible = 0, gv = null;
    function syncBtn() { btn.classList.toggle('is-on', visible > 0 && !(gv && gv.classList.contains('is-open')) && !window.__cedarMenuOpen); }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) { visible += en.isIntersecting ? 1 : -1; });
        if (visible < 0) visible = 0;
        syncBtn();
      }, { rootMargin: '-8% 0px -8% 0px', threshold: 0.01 });
      cards.forEach(function (c) { io.observe(c); });
    } else { visible = 1; syncBtn(); }

    /* ---- drag-coverflow (mirrors the BTS coverflow feel; cards sized to media aspect = uncropped) ---- */
    var gvCards = [], pos = 0, vel = 0, goal = null, sp = 380, raf = null, drag = false, moved = false;
    var pill, mx = 0, my = 0, px = -200, py = -200, downX = 0;

    /* fixed card WIDTH (the falloff scales the side cards down); the media height follows the
       asset's natural aspect so nothing crops, capped so the card + caption still fit the viewport
       (a rare very-tall asset letterboxes on the card rather than cropping). */
    function sizeCard(card, as) {
      var PAD = 14;                                                  /* matches the .cedar-gv-card mat padding */
      var ar = as.ar || (16 / 9);
      var maxW = Math.round(Math.min(window.innerWidth * (window.innerWidth < 768 ? 0.82 : 0.6), window.innerWidth >= 1920 ? 860 : 680));   /* bigger coverflow cards on big monitors (v1.74) */
      var maxMediaH = window.innerHeight * 0.5;
      var contentW = maxW - PAD * 2;
      var mh = contentW / ar;
      if (mh > maxMediaH) {                                          /* tall asset (e.g. a portrait poster): cap the height AND shrink the card width to the media's aspect so there's no white side letterbox — the card hugs the asset (v1.73) */
        mh = maxMediaH;
        contentW = Math.round(mh * ar);
      }
      card.style.width = (contentW + PAD * 2) + 'px';
      var media = card._media;
      if (media) {                                                   /* media box now always matches the asset aspect → cover crops nothing, no contain letterbox */
        media.style.height = Math.round(mh) + 'px';
        media.classList.remove('cedar-gv-contain');
      }
    }
    function render() {
      var m = gvCards.length;
      sp = Math.min(440, window.innerWidth * 0.30);
      for (var i = 0; i < m; i++) {
        var off = (((i - pos) % m) + m) % m;
        if (off > m / 2) off -= m;
        var a = Math.abs(off), c = gvCards[i];
        if (a > 3.2) { c.style.display = 'none'; continue; }
        c.style.display = '';
        var sc = Math.max(0.34, 1 - 0.38 * a);              /* steeper falloff — the side assets recede clearly (client) */
        c.style.transform = 'translate(calc(-50% + ' + (off * sp).toFixed(1) + 'px),-50%) scale(' + sc.toFixed(3) + ')';
        /* v1.83: opaque out to a=2.2, then fade to nothing by the a=3.2 cull line — a card only turns
           transparent as it leaves the stage, never while another is still behind it. The white mat
           made the old 1-0.4a falloff especially obvious: at a=1 it sat at 0.6 and the card behind
           read straight through the mat. */
        c.style.opacity = (a <= 2.2 ? 1 : Math.max(0, 1 - (a - 2.2))).toFixed(3);
        c.style.setProperty('--gv-dim', Math.min(0.55, 0.26 * a).toFixed(3));
        c.style.zIndex = String(200 - Math.round(a * 10));
      }
    }
    function loop() {
      if (!gv || !gv.classList.contains('is-open')) { raf = null; return; }
      document.documentElement.style.overflow = 'hidden';   /* re-assert the lock (a nested lightbox close resets it) */
      if (!drag) {
        if (!RM && Math.abs(vel) > 0.0012) { pos += vel; vel *= 0.92; goal = null; }
        else { var t = (goal !== null) ? goal : Math.round(pos); pos += (t - pos) * 0.14; if (goal !== null && Math.abs(goal - pos) < 0.002) { pos = goal; goal = null; } }
      }
      render();
      px += (mx - px) * 0.22; py += (my - py) * 0.22;
      pill.style.left = px.toFixed(1) + 'px'; pill.style.top = py.toFixed(1) + 'px';
      raf = requestAnimationFrame(loop);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    function step(dir) { vel = 0; goal = Math.round(goal !== null ? goal : pos) + dir; kick(); }   /* prev/next arrows glide one card over */

    function playCentered() {   /* tap on the centered card: if it's a video, open the module-14 lightbox */
      var idx = ((Math.round(pos) % assets.length) + assets.length) % assets.length;
      var as = assets[idx];
      if (!as || as.type !== 'video') return;
      var bridge = el('button', 'cedar-hero-watch', '');   /* module 14 delegates on .cedar-hero-watch[data-cedar-vimeo] */
      bridge.style.display = 'none';
      bridge.setAttribute('data-cedar-vimeo', as.id);
      if (as.hash) bridge.setAttribute('data-cedar-vimeo-h', as.hash);
      document.body.appendChild(bridge);
      bridge.click();
      setTimeout(function () { bridge.remove(); }, 0);
    }

    function build() {
      gv = el('div', 'cedar-gv', '');
      var stage = el('div', 'cedar-gv-stage', '');
      assets.forEach(function (as) {
        var card = el('div', 'cedar-gv-card', '');
        var media = el('div', 'cedar-gv-media', '');
        if (as.src) {
          var im = document.createElement('img'); im.src = as.src; im.alt = ''; im.draggable = false; media.appendChild(im);
          if (as.type === 'image') {                                /* v1.79: true aspect once the coverflow's own (eager) img decodes — the on-page one was lazy/unloaded at collect time */
            var sync = function () {
              if (!im.naturalWidth) return;
              var n = im.naturalWidth / im.naturalHeight;
              if (Math.abs(n - (as.ar || 0)) > 0.01) { as.ar = n; sizeCard(card, as); if (gv && gv.classList.contains('is-open')) render(); }
            };
            if (im.complete) sync(); else im.addEventListener('load', sync, { once: true });
          }
        }
        if (as.type === 'video') media.appendChild(el('div', 'cedar-gv-play', PLAY_SVG));
        card.appendChild(media); card._media = media;
        if (as.title || as.desc) {                                  /* white caption below the asset */
          var cap = el('div', 'cedar-gv-cap', '');
          if (as.title) { var t = el('div', 'cedar-gv-title'); t.textContent = as.title; cap.appendChild(t); }
          if (as.desc) { var d = el('div', 'cedar-gv-desc'); d.textContent = as.desc; cap.appendChild(d); }
          card.appendChild(cap);
        }
        sizeCard(card, as);
        stage.appendChild(card); gvCards.push(card);
      });
      var close = el('button', 'cedar-lb-close', '&times;'); close.setAttribute('aria-label', 'Close gallery');
      pill = el('div', 'cedar-cf-pill', 'Drag to browse');
      var arrows = el('div', 'cedar-gv-arrows', '<button class="cedar-vo-arrow" aria-label="Previous">‹</button><button class="cedar-vo-arrow" aria-label="Next">›</button>');
      gv.appendChild(stage); gv.appendChild(close); gv.appendChild(pill); gv.appendChild(arrows);
      document.body.appendChild(gv);
      close.addEventListener('click', hide);
      arrows.children[0].addEventListener('click', function () { step(-1); });
      arrows.children[1].addEventListener('click', function () { step(1); });
      var lastX = 0;
      stage.addEventListener('pointerdown', function (e) {
        drag = true; moved = false; vel = 0; goal = null; lastX = e.clientX; downX = e.clientX;
        try { stage.setPointerCapture(e.pointerId); } catch (_) {}
        pill.classList.add('is-down');
      });
      stage.addEventListener('pointermove', function (e) {
        mx = e.clientX; my = e.clientY; pill.classList.add('is-on');
        if (drag) {
          if (Math.abs(e.clientX - downX) > 4) moved = true;
          var d = (e.clientX - lastX) / sp;
          pos -= d; vel = vel * 0.75 + (-d) * 0.55;
          lastX = e.clientX;
        }
      });
      function up() { if (drag && !moved) playCentered(); drag = false; pill.classList.remove('is-down'); }
      stage.addEventListener('pointerup', up);
      stage.addEventListener('pointercancel', function () { drag = false; pill.classList.remove('is-down'); });
      stage.addEventListener('pointerleave', function () { pill.classList.remove('is-on'); });
      document.addEventListener('keydown', function (e) { if ((e.key === 'Escape' || e.keyCode === 27) && gv.classList.contains('is-open')) hide(); });
      window.addEventListener('resize', function () {
        if (!gv.classList.contains('is-open')) return;
        gvCards.forEach(function (c, i) { sizeCard(c, assets[i]); });
        render();
      });
    }
    function show(startIdx) {
      if (!gv) build();
      if (!gvCards.length) return;
      pos = (typeof startIdx === 'number' && startIdx >= 0) ? startIdx : 0; vel = 0; px = mx = window.innerWidth / 2; py = my = window.innerHeight / 2;
      render();
      document.documentElement.style.overflow = 'hidden';
      syncBtn();
      requestAnimationFrame(function () { gv.classList.add('is-open'); kick(); });
    }
    function hide() {
      gv.classList.remove('is-open');
      pill.classList.remove('is-on');
      document.documentElement.style.overflow = '';
      syncBtn();
    }
    btn.addEventListener('click', function () { show(0); });
  });

  /* =========================================================
   * 37. /about TEAM SCROLLER ARROWS — the "Our Team" bios sit in a
   *   horizontal drag-scroller (.bio-row, native overflow-x) that runs
   *   off the right edge, so it wasn't obvious there were more people.
   *   Adds prev/next arrows (same buttons as View Similar Projects)
   *   above the row, right-aligned; each click scrolls one card. Arrows
   *   dim at each end and the bar hides if everyone already fits. All
   *   devices — touch users can't hover/drag-hint, so they need this.
   * ======================================================= */
  onReady(function () {
    if ((location.pathname.replace(/\/$/, '') || '/') !== '/about') return;
    var row = document.querySelector('.bio-row');
    if (!row || row._cedarArrows) return;
    row._cedarArrows = true;
    var host = row.closest('.collection-list-wrapper-horizontal') || row;
    var bar = el('div', 'cedar-team-arrows', '<button class="cedar-vo-arrow cedar-ta-prev" type="button" aria-label="Previous team members">‹</button><button class="cedar-vo-arrow cedar-ta-next" type="button" aria-label="More team members">›</button>');
    host.insertBefore(bar, host.firstChild);           /* above the row, inside the (block) list wrapper — no flex-row risk */
    var prev = bar.querySelector('.cedar-ta-prev'), next = bar.querySelector('.cedar-ta-next');
    function step() { var c = row.querySelector('.bio-card'); return c ? Math.round(c.getBoundingClientRect().width + 14) : Math.round(row.clientWidth * 0.6); }
    function fits() { return row.scrollWidth <= row.clientWidth + 5; }
    function upd() {
      if (fits()) { bar.style.display = 'none'; return; }
      bar.style.display = '';
      var max = row.scrollWidth - row.clientWidth - 2;
      prev.classList.toggle('is-dim', row.scrollLeft <= 2);
      next.classList.toggle('is-dim', row.scrollLeft >= max);
    }
    prev.addEventListener('click', function () { row.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { row.scrollBy({ left: step(), behavior: 'smooth' }); });
    row.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
    upd();
  });
})();
