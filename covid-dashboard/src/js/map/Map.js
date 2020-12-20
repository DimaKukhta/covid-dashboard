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
    const radiusCorrection = 10;
    Object.entries(covidPopulationFlagMock).forEach(([key, value]) => {
      const { lat } = value;
      const { long } = value;
      const { cases } = value;
      const { deaths } = value;
      const defaultCircleRadius = Math.floor(cases / radiusCorrection);

      if (!lat || !long) {
        return;
      }
      const correctLegendRadius = () => {
        // console.log(key, '--', defaultCircleRadius);
        let correctHandeleRad = defaultCircleRadius;
        if (cases < 1000000) {
          correctHandeleRad = 120000;
        }
        if (cases < 500000) {
          correctHandeleRad = 90000;
        }
        if (cases < 100000) {
          correctHandeleRad = 70000;
        }
        if (cases < 50000) {
          correctHandeleRad = 50000;
        }
        if (cases < 10000) {
          correctHandeleRad = 30000;
        }
        return correctHandeleRad;
      };

      this.circlePaint = () => {
        this.circle = L.circle([lat, long], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.4,
          opacity: 0.7,
          radius: 500,
          bubblingMouseEvents: true,
        }).setRadius(
          correctLegendRadius(),
        ).addTo(this.mymap);
        this.circle.bindPopup(`${key.toUpperCase().bold()} - Cases: ${cases}.  Deaths: ${deaths}.`);
      };
      setTimeout(this.circlePaint, 1200);
    });
  }
}

// eslint-disable-next-line no-new
new Map();
