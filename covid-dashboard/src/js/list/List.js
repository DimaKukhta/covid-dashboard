/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import createElement from '../utils/createElement';
import data from '../gettersInfo';
import { getCountriesAndGlobalInfo } from '../getApiData';

export default class List {
  constructor() {
    this.createList();
  }

  createList() {
    const parent = document.querySelector('.list');
    this.input = createElement('input', 'list-input', null, parent, ['type', 'text'], ['placeholder', 'Search country']);

    this.list = createElement('ul', 'list-countries');
    getCountriesAndGlobalInfo().then((summary) => {
      const countryList = Object.keys(summary);
      console.log(countryList.length)
      countryList.forEach((country) => {
        this.listElem = createElement('li', 'list-countries--elem', country, this.list);
      });
    });
  }

  renderIn(element) {
    element.append(this.list);
  }
}
