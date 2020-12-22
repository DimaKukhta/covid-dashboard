/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import getFilterPosition from './js/utils/getFilterPosition';
import controlPanel from './js/controlPanel/controlPanel';
import Map from './js/map/Map.js';
import './style/style.css';
import Table from './js/table/Table';
import List from './js/list/List';
// eslint-disable-next-line import/no-named-as-default-member
import ChartCovid from './js/chart/Chart';

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
const countriesList = document.querySelector('.list-countries');

countriesList.addEventListener('click', function({ target }) {
  if (target === this) return;

  const needTarget = target.closest('.list-countries--elem');
  const isTotal = radioGroup.querySelector('#totalCases').checked;
  const isAbsolute = radioGroup.querySelector('#inAbsoluteNumbers').checked;
  table.updateTableInfo(needTarget.id, isTotal, isAbsolute);
});

filters.addEventListener('click', ({ target }) => {
  const isRadio = target.dataset.radio === 'true';
  const isFilter = target.classList.contains('button-active');

  // filters position
  const isTotal = radioGroup.querySelector('#totalCases').checked;
  const isAbsolute = radioGroup.querySelector('#inAbsoluteNumbers').checked;

  if (isFilter || isRadio) {
    const filterBtn = filters.querySelector('.button-active').id;

    list.updateList(getFilterPosition(filterBtn, isTotal, isAbsolute));

    if (isRadio) {
      // table update
      const country = document.querySelector('.table-info--country').textContent;
      table.updateTableInfo(country, isTotal, isAbsolute);
    }
  }
});
<<<<<<< HEAD
// List end

// Start Chart
const chart = new ChartCovid();
console.log('chart')
// End Chart

// Resize buttons
=======
// List and Table update END
>>>>>>> develop

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
