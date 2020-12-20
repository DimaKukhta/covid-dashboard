/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import createElement from '../utils/createElement';
import data from '../gettersInfo';
import { getCountriesAndGlobalInfo } from '../getApiData';

function sortListBy(array, filter) {
  // [1] need to sort list by country object
  return array.sort((a, b) => b[1][filter] - a[1][filter]);
}

export default class List {
  constructor() {
    this.createList();
  }

  createList() {
    const parent = document.querySelector('.list');
    this.input = createElement('input', 'list-input', null, parent, ['type', 'text'], ['placeholder', 'Search country']);

    this.list = createElement('ul', 'list-countries');
    getCountriesAndGlobalInfo().then((summary) => {
      const sortedList = sortListBy(Object.entries(summary), 'cases');
      sortedList.map(([country]) => {
        const filter = summary[country].cases;
        const casesElem = createElement('span', 'list-countries--filter', `${filter}`);
        const countryElem = createElement('div', 'list-countries--country', country);
        const flagSrc = (country === 'Global')
          ? 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg'
          : summary[country].flag;
        const countryFlag = createElement('img', 'list-countries--flag', null, null, ['src', `${flagSrc}`]);
        this.listElem = createElement('li', 'list-countries--elem', [casesElem, countryElem, countryFlag], this.list, ['id', `${country}`]);
        return this.listElem;
      });
    });
  }

  updateList() {

  }

  renderIn(element) {
    element.append(this.list);
  }
}
