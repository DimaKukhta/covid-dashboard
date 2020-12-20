/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import Map from './js/map/Map.js';
import './style/style.css';
import Table from './js/table';

const table = new Table('Global');
table.renderIn(document.querySelector('#table'));
document.querySelector('button').addEventListener('click', () => {
  table.updateTableInfo('Belarus');
});
