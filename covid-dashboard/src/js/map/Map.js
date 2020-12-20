/* eslint-disable import/no-extraneous-dependencies */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import covidPopulationFlagMock from '../mocks/covidPopulationFlagMock';

export default class Map {
  constructor() {
    this.mapParser();
    this.circleParser();
  }

  mapParser() {
    this.mapPaint = () => {
      this.mymap = L.map('map').setView([51.505, -0.09], 1);
      // eslint-disable-next-line no-undef
      L.tileLayer('https://api.mapbox.com/styles/v1/artemosd/ckiqepyj912kl17oi3raexvbn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJ0ZW1vc2QiLCJhIjoiY2tpcTdieWdxMXRyazJ5cWo5OG0zenhzcCJ9.N-aBN7weDatXK0LtA_7Flw', {
        maxZoom: 11,
        minZoom: 2.5,
        id: 'mapbox/ckiqepyj912kl17oi3raexvbn',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXJ0ZW1vc2QiLCJhIjoiY2tpcTdieWdxMXRyazJ5cWo5OG0zenhzcCJ9.N-aBN7weDatXK0LtA_7Flw',
      }).addTo(this.mymap);
    };
    setTimeout(this.mapPaint, 250);
  }

  circleParser() {
    Object.entries(covidPopulationFlagMock).forEach(([, value]) => {
      const { lat } = value;
      const { long } = value;
      if (!lat || !long) {
        return;
      }

      this.circlePaint = () => {
        this.circle = L.circle([lat, long], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 500,
          bubblingMouseEvents: true,
        }).addTo(this.mymap);

        this.circle.bindPopup('I am a circle.');
      };
      setTimeout(this.circlePaint, 1200);
    });
  }
}

// eslint-disable-next-line no-new
new Map();
