import Chart from 'chart.js';
import { getHistoricInfo } from '../api/getApiData';
import historicInfo from '../mocks/chartMock';

function getLabelsTest() {
  const value = [];
  for (const key in historicInfo.cases) {
    value.push(historicInfo.cases[key]);
  }
  const newValue = value.map((element) => `${element}`);
  console.log(newValue);
  return newValue;
}
function getDataTest() {
  const value = [];
  for (const key in historicInfo.cases) {
    value.push(key);
  }
  return value;
}

async function getLabels() {
  const result = await getHistoricInfo('Global');
  const value = [];
  for (const key in result.cases) {
    value.push(result.cases[key]);
  }
  return value;
}

function getData() {
  getHistoricInfo('Global').then((result) => {
    const value = [];
    for (const key in result.cases) {
      value.push(result.cases[key]);
    }
    return value;
  });
}
export default class ChartCovid {
  constructor() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: getDataTest(),
        datasets: [{
          label: 'Global',
          backgroundColor: 'rgb(230, 0, 0)',
          borderColor: 'rgb(230, 0, 0)',
          data: getLabelsTest(),
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
    console.log('endfn');
  }
}
