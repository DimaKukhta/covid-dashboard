/* eslint-disable import/no-extraneous-dependencies */
/**
 * @param {String} classNames -circle: color(cases_col:red; deaths_col:lila; recovered_col:green)
 */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import covidPopulationFlagMock from '../mocks/covidPopulationFlagMock';

export default class Map {
  constructor(colorClass, fillColor, circleBorderColor, keyMapCircleRadius) {
    this.keyMapCircleRadius = keyMapCircleRadius;
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

      const legend = L.control({ position: 'topright' });
      const filter = ['Cases', 'Deaths', 'Recovered'];
      let defaultLegendValue = ['1.000.000', '500.000', '100.000', '10.000'];
      // const deathsLegendValue = ['1.000.000', '500.000', '100.000', '10.000'];
      // const recoveredLegendValue = ['1.000.000', '100.000', '1.000', '1-1000'];

      let defaultLegendKey = filter[0];
      if (this.keyMapCircleRadius === 'cases') {
        [defaultLegendKey] = filter;
      }
      if (this.keyMapCircleRadius === 'deaths') {
        [, defaultLegendKey] = filter;
        defaultLegendValue = ['300.000', '100.000', '10.000', '1-1000'];
      }
      if (this.keyMapCircleRadius === 'recovered') {
        [, , defaultLegendKey] = filter;
        defaultLegendValue = ['10.000.000', '1.000.000', '100.000', '1-10000'];
      }
      legend.onAdd = (/* map */) => {
        const legendBlock = document.createElement('div');
        legendBlock.classList.add('legend');
        legendBlock.innerHTML += `<h3 class= lagend_head id= lagend_head__ID>Legend ${defaultLegendKey}</h3>`;
        legendBlock.innerHTML += `<span class= circle_legend__cases id= more_1000_k>${defaultLegendKey} > ${defaultLegendValue[0]}<div class= circle_legend id=circle_more_1000_k></div></span><br>`;
        legendBlock.innerHTML += `<span class= circle_legend__cases id= 1000_k>${defaultLegendKey} < ${defaultLegendValue[0]}<div class= circle_legend id=circle_1000_k></div></span><br> `;
        legendBlock.innerHTML += `<span class= circle_legend__cases id= 500_k>${defaultLegendKey} > ${defaultLegendValue[1]}<div class= circle_legend id=circle_500_k></div></span><br> `;
        legendBlock.innerHTML += `<span class= circle_legend__cases id= 100_k>${defaultLegendKey} > ${defaultLegendValue[2]}<div class= circle_legend id=circle_100_k></div></span><br> `;
        legendBlock.innerHTML += `<span class= circle_legend__cases id= 10_k>${defaultLegendKey} ${defaultLegendValue[3]}<div class= circle_legend id=circle_10_k></div></span><br> `;

        return legendBlock;
      };

      legend.addTo(this.mymap);
    };
    setTimeout(this.mapPaint, 250);
  }

  circleParser() {
    console.log('init-circleParser');

    const radiusCorrection = 11;
    const deathsRadiusCorrection = 55;
    const recoveredRadiusCorrection = 1.2;
    Object.entries(covidPopulationFlagMock).forEach(([key, value]) => {
      const { lat } = value;
      const { long } = value;
      const { cases } = value;
      const { deaths } = value;
      const { recovered } = value;
      let defaultCircleRadius = Math.floor(cases / radiusCorrection);

      if (this.keyMapCircleRadius === 'cases') {
        defaultCircleRadius = Math.floor(cases / radiusCorrection);
      }
      if (this.keyMapCircleRadius === 'deaths') {
        defaultCircleRadius = Math.floor(deaths / radiusCorrection) * deathsRadiusCorrection;
      }
      if (this.keyMapCircleRadius === 'recovered') {
        defaultCircleRadius = Math.floor(recovered / radiusCorrection) * recoveredRadiusCorrection;
      }

      if (!lat || !long) { return; }

      const correctLegendRadius = () => {
        // console.log(key, '--', defaultCircleRadius);
        let correctHandeleRad = defaultCircleRadius;
        if (defaultCircleRadius < 1000000) {
          correctHandeleRad = 120000;
        }
        if (defaultCircleRadius < 500000) {
          correctHandeleRad = 90000;
        }
        if (defaultCircleRadius < 100000) {
          correctHandeleRad = 75000;
        }
        if (defaultCircleRadius < 50000) {
          correctHandeleRad = 60000;
        }
        if (defaultCircleRadius < 10000) {
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
        this.circle.bindPopup(`${key.toUpperCase().bold()} - Cases: ${cases}.  Deaths: ${deaths}.\n<br> Recover: ${recovered}`);
      };
      setTimeout(this.circlePaint, 1200);
    });
  }

  removeCircles() {
    this.mymap.remove(this);
  }

  initLegend() {
    this.handlerInit = () => {
      console.log('init-Legend');
      this.legendHead = document.getElementById('lagend_head__ID');
      this.legendInnerCircle = document.querySelectorAll('.circle_legend');

      this.legendInnerCircle.forEach((el) => el.classList.add(this.color));

      this.legendHead.addEventListener('mouseover', (event) => {
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
    setTimeout(this.handlerInit, 250);
  }
}

// eslint-disable-next-line no-new
// new Map('deaths_col', '#0000006b', 'red');
// new Map('cases_col', 'red', 'red');
// new Map('recovered_col', ' #2b912b6b', '#70a800');
