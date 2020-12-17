export default class Map {
  constructor() {
    this.addHeadLinks();
    this.mapParser();
  }

  addHeadLinks() {
    this.styleMap = document.createElement('link');
    this.jsMap = document.createElement('script');
    this.fragment = document.createDocumentFragment();

    this.styleMap.rel = 'stylesheet';
    this.styleMap.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    this.styleMap.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    this.styleMap.crossOrigin = '';

    this.jsMap.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    this.jsMap.integrity = 'sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==';
    this.jsMap.crossOrigin = '';

    this.fragment.append(...[this.styleMap, this.jsMap]);
    document.head.prepend(this.fragment);
  }

  mapParser() {
    this.mapPaint = () => {
      // eslint-disable-next-line no-undef
      const mymap = L.map('map').setView([51.505, -0.09], 1);
      // eslint-disable-next-line no-undef
      L.tileLayer('https://api.mapbox.com/styles/v1/artemosd/ckiqepyj912kl17oi3raexvbn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJ0ZW1vc2QiLCJhIjoiY2tpcTdieWdxMXRyazJ5cWo5OG0zenhzcCJ9.N-aBN7weDatXK0LtA_7Flw', {
        maxZoom: 11,
        minZoom: 2.5,
        id: 'mapbox/ckiqepyj912kl17oi3raexvbn',

        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXJ0ZW1vc2QiLCJhIjoiY2tpcTdieWdxMXRyazJ5cWo5OG0zenhzcCJ9.N-aBN7weDatXK0LtA_7Flw',
      }).addTo(mymap);
    };
    setTimeout(this.mapPaint, 250);
  }
}

// eslint-disable-next-line no-new
new Map();
