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

controlPanel.fillControlPanelData();
controlPanel.toggleLogic();
