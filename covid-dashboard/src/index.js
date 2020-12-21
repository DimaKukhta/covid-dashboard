/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import getFilterPosition from './js/utils/getFilterPosition';
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

// Table start
const tableBlock = document.querySelector('#table');
const radioGroup = document.querySelector('.container-for-radio');

const table = new Table();
table.renderIn(tableBlock);

// radioGroup.addEventListener('click', () => {
//   const isTotal = radioGroup.querySelector('#totalCases').checked;
//   const isAbsolute = radioGroup.querySelector('#inAbsoluteNumbers').checked;

//   // country will change when List will be implemented;
//   table.updateTableInfo('Global', isTotal, isAbsolute);
// });
// Table end

// List start
const filters = document.querySelector('.filters');

filters.addEventListener('click', ({ target }) => {
//  console.log(target.parentElement.tagName);
  const isFilter = target.classList.contains('button-active') || target.parentElement.tagName === 'P' || false;
  if (isFilter) {
    // filters position
    const isTotal = radioGroup.querySelector('#totalCases').checked;
    const isAbsolute = radioGroup.querySelector('#inAbsoluteNumbers').checked;
    const filterBtn = filters.querySelector('.button-active').id;

    // table update
    // country will change when List will be implemented;
    table.updateTableInfo('Global', isTotal, isAbsolute);

    list.updateList(getFilterPosition(filterBtn, isTotal, isAbsolute));
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
