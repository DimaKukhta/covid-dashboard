/* eslint-disable import/no-extraneous-dependencies */
/**
 * @param {String} classNames -circle: color(cases_col:red; deaths_col:lila; recovered_col:green)
 */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import covidPopulationFlagMock from '../mocks/covidPopulationFlagMock';

export default class Map {
  constructor(colorClass, fillColor, circleBorderColor) {
    this.circleBorderColor = circleBorderColor;
    this.fillColor = fillColor;
    this.color = colorClass;
    this.mapParser();
    this.circleParser();
    this.initLegend();
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

      this.legend = L.control({ position: 'topright' });

      this.legend.onAdd = (/* map */) => {
        const legendBlock = document.createElement('div');
        legendBlock.classList.add('legend');
        legendBlock.innerHTML += '<h3 class= lagend_head id= lagend_head__ID>Legend</h3>';
        legendBlock.innerHTML += '<span class= circle_legend__cases id= more_1000_k>Cases > 1.000.000<div class= circle_legend id=circle_more_1000_k></div></span><br>';
        legendBlock.innerHTML += '<span class= circle_legend__cases id= 1000_k>Cases < 1.000.000<div class= circle_legend id=circle_1000_k></div></span><br> ';
        legendBlock.innerHTML += '<span class= circle_legend__cases id= 500_k>Cases > 500.000<div class= circle_legend id=circle_500_k></div></span><br> ';
        legendBlock.innerHTML += '<span class= circle_legend__cases id= 100_k>Cases > 100.000<div class= circle_legend id=circle_100_k></div></span><br> ';
        legendBlock.innerHTML += '<span class= circle_legend__cases id= 10_k>Cases 1 - 10.000<div class= circle_legend id=circle_10_k></div></span><br> ';

        return legendBlock;
      };

      this.legend.addTo(this.mymap);
    };
    setTimeout(this.mapPaint, 250);
  }

  circleParser() {
    console.log('init-circleParser');

    const radiusCorrection = 10;

    Object.entries(covidPopulationFlagMock).forEach(([key, value]) => {
      const { lat } = value;
      const { long } = value;
      const { cases } = value;
      const { deaths } = value;
      const defaultCircleRadius = Math.floor(cases / radiusCorrection);

      if (!lat || !long) { return; }

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
          correctHandeleRad = 75000;
        }
        if (cases < 50000) {
          correctHandeleRad = 60000;
        }
        if (cases < 10000) {
          correctHandeleRad = 30000;
        }
        return correctHandeleRad;
      };

      this.circlePaint = () => {
        this.circle = L.circle([lat, long], {
          color: this.circleBorderColor,
          fillColor: this.fillColor,
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

  initLegend() {
    this.handlerInit = () => {
      console.log('init-Legend');
      this.legendHead = document.getElementById('lagend_head__ID');
      this.legendInnerCircle = document.querySelectorAll('.circle_legend');
      this.legendInnerCircle.forEach((el) => el.classList.add(this.color));
      this.legendHead.addEventListener('mouseover', (event) => {
        // console.log(event.target.id);
        if (event.target.id === 'lagend_head__ID') {
          this.legendInnerText = document.querySelectorAll('.circle_legend__cases').forEach((element) => {
            element.classList.add('show_tex');
          });
        }
      });
      this.legendHead.addEventListener('mouseleave', (event) => {
        if (event.target.id === 'lagend_head__ID') {
          this.legendInnerText = document.querySelectorAll('.circle_legend__cases').forEach((element) => {
            element.classList.remove('show_tex');
          });
        }
      });
    };
    setTimeout(this.handlerInit, 1250);
  }
}

// eslint-disable-next-line no-new
// new Map('deaths_col', '#0000006b', 'red');
// new Map('cases_col', 'red', 'red');
new Map('recovered_col', ' #2b912b6b', '#70a800');

