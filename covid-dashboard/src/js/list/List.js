/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import createElement from '../utils/createElement';
import { getCountriesAndGlobalInfo } from '../api/getApiData';

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

    this.input.addEventListener('input', this.searchCountry.bind(this));

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

  searchCountry() {
    const listArray = Array.from(this.list.children);
    listArray.forEach((elem) => {
      const isIncluded = elem.textContent.toLowerCase().includes(this.input.value.toLowerCase());
      // eslint-disable-next-line no-param-reassign
      elem.style.display = (isIncluded) ? 'flex' : 'none';
    });
  }

  renderIn(element) {
    element.append(this.list);
  }
}
