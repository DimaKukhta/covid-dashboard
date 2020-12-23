import Chart from 'chart.js';
import { getHistoricInfo } from '../api/getApiData';
import historicInfo from '../mocks/chartMock';

function getLabelsTest(context) {
  const value = [];
  for (const key in historicInfo[context]) {
    value.push(historicInfo[context][key]);
  }
  const newValue = value.map((element) => `${element}`);
  console.log(newValue);
  return newValue;
}
function getDataTest(context) {
  const value = [];
  for (const key in historicInfo[context]) {
    value.push(key);
  }
  return value;
}
async function getLabels(country, context) {
  const result = await getHistoricInfo(country);
  const value = [];
  for (let key in result[context]) {
    value.push(key);
  }
  return value;
}
async function getData(country, context) {
  const result = await getHistoricInfo(country);
  const value = [];
  for (let key in result[context]) {
    value.push(result[context][key]);
  }
  return value;
}
/*
function getData() {
  getHistoricInfo('Global').then((result) => {
    const value = [];
    for (const key in result.cases) {
      value.push(result.cases[key]);
    }
    return value;
  });
}
*/
export default class ChartCovid {
  constructor() {
    this.createChart();
  }

  async createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: await getLabels('Global', 'cases'),
        datasets: [{
          label: 'Global',
          backgroundColor: 'rgba(230, 0, 0, 0.5)',
          borderColor: 'rgb(230, 0, 0)',
          data: await getData('Global', 'cases'),
        }],
      },

      // Configuration options go here
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              // Include a dollar sign in the ticks
              callback(value, index, values) {
                return null;
              },
            },
          }],
        },
      },
    });
    this.chart = chart;
  };
  removeData() {
    this.chart.data.datasets[0].data = [];
    this.chart.data.labels = [];
    this.chart.update();
  };
  async addData(counrty, context) {
    this.chart.data.labels = await getLabels(counrty, context);
    this.chart.data.datasets[0].data = await getData(counrty, context)
    this.chart.update()
  }
}
