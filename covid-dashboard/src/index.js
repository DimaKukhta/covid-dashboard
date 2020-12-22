/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import getFilterPosition from './js/utils/getFilterPosition';
import controlPanel from './js/controlPanel/controlPanel';
import Map from './js/map/Map.js';
import './style/style.css';
import Table from './js/table/Table';
import List from './js/list/List';

// Control panel START
controlPanel.fillControlPanelData();
controlPanel.toggleLogic();
// Control panel END

const list = new List();
const listBlock = document.querySelector('.list');
list.renderIn(listBlock);

// Table
const tableBlock = document.querySelector('#table');
const radioGroup = document.querySelector('.container-for-radio');

const table = new Table();
table.renderIn(tableBlock);

// List and Table update START
const filters = document.querySelector('.filters');

filters.addEventListener('click', ({ target }) => {
  const isRadio = target.dataset.radio === 'true';
  const isFilter = target.classList.contains('button-active') || false;

  // filters position
  const isTotal = radioGroup.querySelector('#totalCases').checked;
  const isAbsolute = radioGroup.querySelector('#inAbsoluteNumbers').checked;

  if (isRadio) {
    // table update
    // country will change when List will be implemented;
    table.updateTableInfo('Global', isTotal, isAbsolute);
  }

  if (isFilter || isRadio) {
    const filterBtn = filters.querySelector('.button-active').id;

    list.updateList(getFilterPosition(filterBtn, isTotal, isAbsolute));
  }
});
// List and Table update END

// Resize buttons START
function resizeBlock({ target }) {
  target.parentElement.classList.toggle('full-screen');
  target.classList.toggle('btn-active');
}

const arrayOfResizeBtns = Array.from(document.querySelectorAll('.resize-button'));

arrayOfResizeBtns.forEach((btn) => {
  btn.addEventListener('click', resizeBlock);
});
// Resize buttons END
