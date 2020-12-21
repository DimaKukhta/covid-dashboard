import { getHistoricInfo } from '../api/getApiData';
import Chart from 'chart.js'

function getLabels() {
    getHistoricInfo('Global').then((result) => {
        const value = [];
        for (let key in result.cases) {
            value.push(result.cases[key]);
        }
        return value;
    });
}

function getData() {
    getHistoricInfo('Global').then((result) => {
        const value = [];
        for (let key in result.cases) {
            value.push(result.cases[key]);
        }
        console.log(value)
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
                labels: getLabels(),
                datasets: [{
                    label: 'Global',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: getData()
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
    }

}