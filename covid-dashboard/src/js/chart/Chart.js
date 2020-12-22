import Chart from 'chart.js'
import { getHistoricInfo } from '../api/getApiData';
import historicInfo from '../mocks/chartMock';

function getLabelsTest() {
    const value = [];
    for (let key in historicInfo.cases) {
        value.push(historicInfo.cases[key]);
    }
    const newValue = value.map((element) => `${element}`);
    console.log(newValue);
    return newValue;
}

async function getLabels() {
    const result = await getHistoricInfo('Global');
    const value = [];
    for (let key in result.cases) {
        value.push(result.cases[key]);
    }
    return value;
}

function getData() {
    getHistoricInfo('Global').then((result) => {
        const value = [];
        for (let key in result.cases) {
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
        console.log('start fun')
        getHistoricInfo('Global').then(({ filter }) => {
            const [arrayOfLabels, arrayOfData] = Object.entries(filter);
            console.log('массив лейблов: ', arrayOfLabels, 'массив значений: ', arrayOfData);
        });
        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
                labels: getLabels(), 
                datasets: [{
                    label: 'Global',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: getLabelsTest(), 
                }]
            },

            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback(value, index, values) {
                                return null
                            }
                        }
                    }]
                }
            }
        });
        console.log('endfn')
    }
}