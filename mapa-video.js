(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════
     LOCATIONS DATA — Real YouTube 4K videos
  ═══════════════════════════════════════════════════ */
  var LOCATIONS = [
    {
      id: 'la-manga',
      name: 'La Manga del Mar Menor',
      meta: 'Mar Menor · Murcia',
      coords: [37.676, -0.726],
      videoId: '1K2kHQ8shXs',
      desc: 'Estrecho cordón litoral entre el Mar Menor y el Mediterráneo'
    },
    {
      id: 'santiago-ribera',
      name: 'Santiago de la Ribera',
      meta: 'San Javier · Murcia',
      coords: [37.803, -0.832],
      videoId: 'jCSG6rH4RTs',
      desc: 'Puerto deportivo y paseo marítimo del Mar Menor'
    },
    {
      id: 'cartagena',
      name: 'Cartagena',
      meta: 'Puerto histórico · Murcia',
      coords: [37.605, -0.990],
      videoId: 'AEtYiaMH_7M',
      desc: 'Puerto milenario y ciudad histórica de la Costa Cálida'
    },
    {
      id: 'mazarron',
      name: 'Puerto de Mazarrón',
      meta: 'Costa Cálida · Murcia',
      coords: [37.573, -1.258],
      videoId: '09foz20hlhw',
      desc: 'Playas de Nares, La Pava y Bahía con aguas cristalinas'
    },
    {
      id: 'aguilas',
      name: 'Águilas',
      meta: 'Costa Cálida · Murcia',
      coords: [37.405, -1.582],
      videoId: 'G-ToH0003qc',
      desc: 'El secreto mejor guardado del litoral murciano'
    },
    {
      id: 'torrevieja',
      name: 'Torrevieja',
      meta: 'Costa Blanca Sur · Alicante',
      coords: [37.977, -0.684],
      videoId: 'U6U3942WZ0g',
      desc: 'Lagunas rosadas, sal y el Mediterráneo de la Costa Blanca'
    },
    {
      id: 'guardamar',
      name: 'Guardamar del Segura',
      meta: 'Vega Baja · Alicante',
      coords: [38.093, -0.658],
      videoId: 'Zrp0cK0hXpA',
      desc: 'Dunas, pinares y playas vírgenes del Bajo Segura'
    },
    {
      id: 'santa-pola',
      name: 'Santa Pola',
      meta: 'Cap de Santa Pola · Alicante',
      coords: [38.187, -0.556],
      videoId: 'cx2hoHSeCcw',
      desc: 'Salinas, faro y las mejores puestas de sol de la Costa Blanca'
    }
  ];

  /* ── STATE ────────────────────────────────────────── */
  var currentLoc = null;
  var markers = {};
  var hintEl = document.getElementById('map-hint');
  var splashEl = document.getElementById('splash');

  /* ── INIT MAP ─────────────────────────────────────── */
  var map = L.map('map', {
    center: [37.79, -0.95],
    zoom: 9,
    zoomControl: true,
    zoomAnimation: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  /* ── CREATE MARKER ICONS ──────────────────────────── */
  function makeIcon(locId) {
    return L.divIcon({
      className: '',
      html: '<div class="map-marker" id="marker-' + locId + '">' +
              '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
            '</div>',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  }

  /* ── PLACE MARKERS ────────────────────────────────── */
  LOCATIONS.forEach(function (loc) {
    var marker = L.marker(loc.coords, { icon: makeIcon(loc.id) }).addTo(map);
    marker.on('click', function () { openLocation(loc.id); });
    markers[loc.id] = marker;
  });

  document.getElementById('loc-count').textContent = LOCATIONS.length + ' ubicaciones';

  /* ── HELPERS ──────────────────────────────────────── */
  function hideSplashAndHint() {
    splashEl.classList.add('hidden');
    hintEl.style.opacity = '0';
    hintEl.style.pointerEvents = 'none';
  }

  function loadVideo(loc) {
    var wrap = document.getElementById('video-wrap');
    var existing = wrap.querySelector('iframe');
    if (existing) existing.remove();
    document.getElementById('video-placeholder').style.display = 'none';

    if (!loc.videoId || loc.videoId.startsWith('VIDEO_ID')) {
      document.getElementById('video-placeholder').style.display = 'flex';
      return;
    }

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + loc.videoId +
                 '?autoplay=1&rel=0&modestbranding=1&enablejsapi=1';
    iframe.allow = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = 'Vídeo de ' + loc.name;
    wrap.appendChild(iframe);
  }

  function renderRelated(activeId) {
    var list = document.getElementById('related-list');
    list.innerHTML = '';
    LOCATIONS.forEach(function (loc) {
      var div = document.createElement('div');
      div.className = 'loc-card' + (loc.id === activeId ? ' active' : '');
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-label', 'Ver vídeo de ' + loc.name);

      var thumbSrc = loc.videoId && !loc.videoId.startsWith('VIDEO_ID')
        ? 'https://img.youtube.com/vi/' + loc.videoId + '/mqdefault.jpg'
        : '';

      div.innerHTML =
        '<div class="loc-card-thumb">' +
          (thumbSrc ? '<img src="' + thumbSrc + '" alt="" loading="lazy">' : '') +
          '<div class="play-icon">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
          '</div>' +
        '</div>' +
        '<div class="loc-card-text">' +
          '<div class="loc-card-name">' + loc.name + '</div>' +
          '<div class="loc-card-sub">' + loc.meta + '</div>' +
        '</div>';

      div.addEventListener('click', function () { openLocation(loc.id); });
      div.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLocation(loc.id); }
      });
      list.appendChild(div);
    });
  }

  /* ── OPEN LOCATION ────────────────────────────────── */
  window.openLocation = function (id) {
    var loc = LOCATIONS.find(function (l) { return l.id === id; });
    if (!loc) return;

    // Deactivate previous
    if (currentLoc) {
      var prevEl = document.getElementById('marker-' + currentLoc.id);
      if (prevEl) prevEl.classList.remove('active');
    }

    currentLoc = loc;

    // Activate marker
    var el = document.getElementById('marker-' + id);
    if (el) el.classList.add('active');

    // Pan map
    map.flyTo(loc.coords, 12, { duration: 1.2 });

    // Update panel
    document.getElementById('panel-name').textContent = loc.name;
    document.getElementById('panel-meta').textContent = loc.meta;

    // Load video & related
    loadVideo(loc);
    renderRelated(id);

    // Open panel + hide splash
    hideSplashAndHint();
    document.getElementById('video-panel').classList.add('open');
    document.body.classList.add('panel-open');

    // Update URL
    var url = new URL(window.location.href);
    url.searchParams.set('loc', id);
    history.replaceState(null, '', url.toString());

    map.invalidateSize();
  };

  /* ── CLOSE PANEL ──────────────────────────────────── */
  window.closePanel = function () {
    document.getElementById('video-panel').classList.remove('open');
    document.body.classList.remove('panel-open');

    var iframe = document.getElementById('video-wrap').querySelector('iframe');
    if (iframe) iframe.remove();
    document.getElementById('video-placeholder').style.display = 'flex';

    if (currentLoc) {
      var el = document.getElementById('marker-' + currentLoc.id);
      if (el) el.classList.remove('active');
      currentLoc = null;
    }

    var url = new URL(window.location.href);
    url.searchParams.delete('loc');
    history.replaceState(null, '', url.toString());

    map.flyTo([37.79, -0.95], 9, { duration: 1.0 });
    setTimeout(function () { map.invalidateSize(); }, 350);
  };

  /* ── SHARE CURRENT LOCATION ───────────────────────── */
  window.shareCurrentLoc = function () {
    if (!currentLoc) return;
    var url = new URL(window.location.href);
    url.searchParams.set('loc', currentLoc.id);
    var shareUrl = url.toString();

    if (navigator.share) {
      navigator.share({ title: 'Vídeo: ' + currentLoc.name, url: shareUrl });
    } else {
      navigator.clipboard.writeText(shareUrl).then(function () {
        var toast = document.getElementById('share-toast');
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 2200);
      });
    }
  };

  /* ── DISMISS SPLASH ───────────────────────────────– */
  window.dismissSplash = function () {
    splashEl.classList.add('hidden');
  };

  /* ── EVENT LISTENERS ──────────────────────────────── */
  document.getElementById('btn-close').addEventListener('click', window.closePanel);
  document.getElementById('btn-share-loc').addEventListener('click', window.shareCurrentLoc);
  document.getElementById('splash-btn').addEventListener('click', window.dismissSplash);
  document.getElementById('logo-link').addEventListener('click', function (e) {
    e.preventDefault();
    if (currentLoc) window.closePanel();
  });

  // Map background click (desktop)
  map.on('click', function () {
    if (window.innerWidth >= 768 && currentLoc) window.closePanel();
  });

  /* ── DEEP LINK CHECK ──────────────────────────────── */
  (function checkDeepLink() {
    var params = new URLSearchParams(window.location.search);
    var locId = params.get('loc');
    if (locId) {
      var found = LOCATIONS.find(function (l) { return l.id === locId; });
      if (found) {
        hideSplashAndHint();
        setTimeout(function () { window.openLocation(locId); }, 600);
      }
    }
  })();

  /* ── RESIZE HANDLER ───────────────────────────────── */
  window.addEventListener('resize', function () {
    setTimeout(function () { map.invalidateSize(); }, 350);
  });

})();
