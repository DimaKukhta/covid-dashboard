import Chart from 'chart.js';
import { getHistoricInfo } from '../api/getApiData';

const redBgColor = 'rgba(230, 0, 0, 0.5)';
const redBdColor = 'rgb(230, 0, 0)';
const greenBgColor = 'rgba(112, 168, 0, 0.5)';
const greenBdColor = 'rgba(112, 168, 0)';
const blueBgColor = 'rgba(36, 147, 242, 0.5)';
const blueBdColor = 'rgb(36, 147, 242)';

async function getLabels(country, context) {
  const result = await getHistoricInfo(country);
  return Object.keys(result[context]);
}

async function getData(country, context) {
  const result = await getHistoricInfo(country);
  return Object.values(result[context]);
}

export default class ChartCovid {
  constructor() {
    this.createChart();
  }

  async createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: await getLabels('Global', 'cases'),
        datasets: [{
          label: 'Global',
          backgroundColor: blueBgColor,
          borderColor: blueBdColor,
          data: await getData('Global', 'cases'),
        }],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        title: {
          display: true,
          fontSize: 16,
          text: 'Global',
          fontColor: '#ffffff',
        },
        scales: {
          xAxes: [{
            ticks: {
              callback() {
                return null;
              },
            },
          }],
        },
      },
    });
    this.chart = chart;
  }

  removeData() {
    this.chart.data.datasets[0].data = [];
    this.chart.data.labels = [];
    this.chart.update();
  }

  async addData(counrty, context) {
    if (context === 'recovered') {
      this.chart.data.datasets[0].backgroundColor = greenBgColor;
      this.chart.data.datasets[0].borderColor = greenBdColor;
    } else if (context === 'deaths') {
      this.chart.data.datasets[0].backgroundColor = redBgColor;
      this.chart.data.datasets[0].borderColor = redBdColor;
    } else {
      this.chart.data.datasets[0].backgroundColor = blueBgColor;
      this.chart.data.datasets[0].borderColor = blueBdColor;
    }
    this.chart.options.title.text = counrty;
    this.chart.data.labels = await getLabels(counrty, context);
    this.chart.data.datasets[0].data = await getData(counrty, context);
    this.chart.update();
  }
}
