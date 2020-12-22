/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import controlPanel from './js/controlPanel/controlPanel';
import Map from './js/map/Map.js';
import './style/style.css';
import Table from './js/table/table';
import List from './js/list/List';

controlPanel.fillControlPanelData();
controlPanel.toggleLogic();

const list = new List();
const listBlock = document.querySelector('.list');
list.renderIn(listBlock);

// Map init
let map = new Map('cases_col', 'red', 'red');
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

// List start
const filters = document.querySelector('.button-filters');

filters.addEventListener('click', ({ target }) => {
  if (target.classList.contains('button-active')) {
    list.updateList(target.id);
  }
  // map
  if (target.id === 'cases') {
    map.removeCircles();
    map = new Map('cases_col', 'red', 'red');
  }
  if (target.id === 'deaths') {
    map.removeCircles();
    map = new Map('deaths_col', '#0000006b', 'red');
  }
  if (target.id === 'recovered') {
    map.removeCircles();
    map = new Map('recovered_col', ' #2b912b6b', '#70a800');
  }
});
// List end

// Resize buttons

function resizeBlock({ target }) {
  target.parentElement.classList.toggle('full-screen');
  target.classList.toggle('btn-active');
}

const arrayOfResizeBtns = Array.from(document.querySelectorAll('.resize-button'));

arrayOfResizeBtns.forEach((btn) => {
  btn.addEventListener('click', resizeBlock);
});
