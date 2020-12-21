/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import controlPanel from './js/controlPanel/controlPanel';
import Map from './js/map/Map.js';
import './style/style.css';
import Table from './js/table/table';
import List from './js/list/List';

const list = new List();
const listBlock = document.querySelector('.list');
list.renderIn(listBlock);

// Table start
const tableBlock = document.querySelector('#table');
const radioGroup = document.querySelector('.container-for-radio');

const table = new Table();
table.renderIn(tableBlock);

radioGroup.addEventListener('click', () => {
  const isTotal = radioGroup.querySelector('#totalCases').checked;
  const isAbsolute = radioGroup.querySelector('#inAbsoluteNumbers').checked;

  // country will change when List will be implemented;
  table.updateTableInfo('Global', isTotal, isAbsolute);
});
// Table end

// Resize buttons
const resizeMap = document.querySelector('#resize-map');
const resizeList = document.querySelector('#resize-list');
const resizeTable = document.querySelector('#resize-table');
const resizeChart = document.querySelector('#resize-chart');

function resizeMapBlock() {
  resizeMap.parentElement.classList.toggle('full-screen');
  resizeMap.classList.toggle('resize-button-active');
}

function resizeTableBlock() {
  resizeTable.parentElement.classList.toggle('full-screen');
  resizeTable.classList.toggle('resize-button-active');
}

function resizeListBlock() {
  resizeList.parentElement.classList.toggle('full-screen');
  resizeList.classList.toggle('resize-button-active');
}

function resizeChartBlock() {
  resizeChart.parentElement.classList.toggle('full-screen');
  resizeChart.classList.toggle('resize-button-active');
}

resizeMap.addEventListener('click', resizeMapBlock);
resizeTable.addEventListener('click', resizeTableBlock);
resizeList.addEventListener('click', resizeListBlock);
resizeChart.addEventListener('click', resizeChartBlock);

controlPanel.fillControlPanelData();
controlPanel.toggleLogic();
