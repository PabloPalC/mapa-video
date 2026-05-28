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
      desc: 'Estrecho cordón litoral de 22 km que separa el Mar Menor del Mediterráneo, con agua cálida a ambos lados y viento constante ideal para deportes náuticos.',
      type: 'Litoral · Laguna costera',
      tags: ['Mar Menor', 'Windsurf', 'Kitesurf', 'Aguas tranquilas', 'Deportes náuticos'],
      highlights: [
        '22 km de cordón litoral natural único en Europa',
        'Aguas del Mar Menor 5 °C más cálidas que el Mediterráneo',
        'Centro internacional de deportes náuticos y kitesurf'
      ],
      bookUrl: ''
    },
    {
      id: 'santiago-ribera',
      name: 'Santiago de la Ribera',
      meta: 'San Javier · Murcia',
      coords: [37.803, -0.832],
      videoId: 'jCSG6rH4RTs',
      desc: 'Localidad marinera del Mar Menor con un puerto deportivo de referencia y un paseo marítimo ideal para disfrutar del atardecer sobre las aguas tranquilas.',
      type: 'Puerto deportivo · Paseo marítimo',
      tags: ['Puerto', 'Paseo marítimo', 'Gastronomía', 'Mar Menor', 'Vela'],
      highlights: [
        'Puerto deportivo con más de 500 amarres',
        'Paseo marítimo de 2 km junto al Mar Menor',
        'Próximo al Aeropuerto Internacional de la Región de Murcia'
      ],
      bookUrl: ''
    },
    {
      id: 'cartagena',
      name: 'Cartagena',
      meta: 'Puerto histórico · Murcia',
      coords: [37.605, -0.990],
      videoId: 'AEtYiaMH_7M',
      desc: 'Ciudad milenaria con uno de los puertos naturales más importantes del Mediterráneo, rica en patrimonio romano, modernista y naval.',
      type: 'Ciudad histórica · Puerto',
      tags: ['Historia', 'Puerto', 'Museos', 'Arquitectura', 'Gastronomía', 'Romano'],
      highlights: [
        'Más de 3.000 años de historia continua habitada',
        'Teatro romano mejor conservado de España',
        'Base naval de la Armada Española con visitas guiadas'
      ],
      bookUrl: ''
    },
    {
      id: 'mazarron',
      name: 'Puerto de Mazarrón',
      meta: 'Costa Cálida · Murcia',
      coords: [37.573, -1.258],
      videoId: '09foz20hlhw',
      desc: 'Enclave costero con aguas de alta transparencia, calas recónditas y más de 300 días de sol al año. Ideal para buceo y snorkel.',
      type: 'Costa · Playas y calas',
      tags: ['Playas', 'Snorkel', 'Buceo', 'Aguas cristalinas', 'Pesca', 'Calas'],
      highlights: [
        'Visibilidad submarina de hasta 15 metros en verano',
        'Playas de cala sin masificación y acceso libre',
        'Más de 300 días de sol al año'
      ],
      bookUrl: ''
    },
    {
      id: 'aguilas',
      name: 'Águilas',
      meta: 'Costa Cálida · Murcia',
      coords: [37.405, -1.582],
      videoId: 'G-ToH0003qc',
      desc: 'El secreto mejor guardado del litoral murciano: 34 playas y calas en 26 km de costa con aguas de las más limpias del Mediterráneo.',
      type: 'Costa · Calas vírgenes',
      tags: ['Calas vírgenes', 'Snorkel', 'Buceo', 'Naturaleza', 'Gastronomía', 'Senderismo'],
      highlights: [
        '34 playas y calas distribuidas en 26 km de costa',
        'Reserva marina con ecosistema submarino excepcional',
        'Ciudad con el carnaval más antiguo de España'
      ],
      bookUrl: ''
    },
    {
      id: 'torrevieja',
      name: 'Torrevieja',
      meta: 'Costa Blanca Sur · Alicante',
      coords: [37.977, -0.684],
      videoId: 'U6U3942WZ0g',
      desc: 'Ciudad costera única por sus dos lagunas naturales de colores rosa y verde, las salinas más productivas de España y un litoral mediterráneo de gran calidad.',
      type: 'Lagunas · Salinas · Costa Blanca',
      tags: ['Lagunas rosas', 'Salinas', 'Flamencos', 'Costa Blanca', 'Deporte', 'Naturaleza'],
      highlights: [
        'Dos lagunas naturales con colores únicos en Europa',
        'Las salinas más productivas de España en activo',
        'Ruta de observación de flamencos y aves migratorias'
      ],
      bookUrl: ''
    },
    {
      id: 'guardamar',
      name: 'Guardamar del Segura',
      meta: 'Vega Baja · Alicante',
      coords: [38.093, -0.658],
      videoId: 'Zrp0cK0hXpA',
      desc: 'Paraíso natural donde las dunas móviles y 800 hectáreas de pinares limitan con playas de Bandera Azul y la desembocadura del río Segura.',
      type: 'Dunas · Pinar · Playa natural',
      tags: ['Dunas', 'Pinar', 'Playas vírgenes', 'Naturaleza', 'Ciclismo', 'Bandera Azul'],
      highlights: [
        'Parque natural con 800 ha de pinares sobre dunas activas',
        'Playas con Bandera Azul entre sistemas dunares',
        'Desembocadura del río Segura con aves singulares'
      ],
      bookUrl: ''
    },
    {
      id: 'santa-pola',
      name: 'Santa Pola',
      meta: 'Cap de Santa Pola · Alicante',
      coords: [38.187, -0.556],
      videoId: 'cx2hoHSeCcw',
      desc: 'Cabo y localidad pesquera con un parque natural de salinas donde habitan flamencos, las mejores puestas de sol del litoral alicantino y un puerto de gran actividad.',
      type: 'Cabo · Salinas · Puerto pesquero',
      tags: ['Salinas', 'Faro', 'Puesta de sol', 'Parque Natural', 'Navegación', 'Flamencos'],
      highlights: [
        'Parque Natural de Las Salinas con colonias de flamencos',
        'Las mejores puestas de sol del litoral alicantino',
        'Puerto pesquero activo con lonja de pescado fresco'
      ],
      bookUrl: ''
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

    // Update panel header
    document.getElementById('panel-name').textContent = loc.name;
    document.getElementById('panel-meta').textContent = loc.meta;

    // Update place info
    document.getElementById('place-type').textContent = loc.type || '';
    document.getElementById('place-desc').textContent = loc.desc || '';

    var tagsEl = document.getElementById('place-tags');
    tagsEl.innerHTML = '';
    (loc.tags || []).forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'place-tag';
      span.textContent = tag;
      tagsEl.appendChild(span);
    });

    var hlEl = document.getElementById('place-highlights');
    hlEl.innerHTML = '';
    (loc.highlights || []).forEach(function (hl) {
      var li = document.createElement('li');
      li.textContent = hl;
      hlEl.appendChild(li);
    });

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
