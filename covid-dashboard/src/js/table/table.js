/* eslint-disable no-unneeded-ternary */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import createElement from '../utils/createElement';
import getFilterPosition from '../utils/getFilterPosition';
import { getCountriesAndGlobalInfo } from '../api/getApiData';
import addSpaceDelimiter from '../utils/addSpaceDelimiter';

export default class Table {
  constructor() {
    this.createTable();
    this.updateTableInfo();
  }

  createTable() {
    this.table = createElement('table', 'table-info');
    this.tbody = createElement('tbody', null, null, this.table);
    this.thead = createElement('th', 'table-info--country', null, null, ['colspan', '2']);
    this.tableHead = createElement('tr', null, this.thead, this.tbody);

    this.casesText = createElement('td', 'table-info-cases--text', 'Cases');
    this.casesValue = createElement('td', 'table-info-cases--value');
    this.casesRow = createElement('tr', 'table-info-cases', [this.casesText, this.casesValue], this.tbody);

    this.deathText = createElement('td', 'table-info-deaths--text', 'Deaths');
    this.deathsValue = createElement('td', 'table-info-deaths--value');
    this.deathsRow = createElement('tr', 'table-info-deaths', [this.deathText, this.deathsValue], this.tbody);

    this.recoveredText = createElement('td', 'table-info-recovered--text', 'Recovered');
    this.recoveredValue = createElement('td', 'table-info-recovered--value');
    this.recoveredRow = createElement('tr', 'table-info-recovered', [this.recoveredText, this.recoveredValue], this.tbody);
  }

  updateTableInfo(country = 'Global', isTotal = true, isAbsolute = true) {
    this.thead.textContent = country;
    getCountriesAndGlobalInfo().then((result) => {
      const cases = result[country][getFilterPosition('cases', isTotal, isAbsolute)];
      const deaths = result[country][getFilterPosition('deaths', isTotal, isAbsolute)];
      const recovered = result[country][getFilterPosition('recovered', isTotal, isAbsolute)];
      this.casesValue.textContent = (cases) ? addSpaceDelimiter(cases) : 'no info';
      this.deathsValue.textContent = (deaths) ? addSpaceDelimiter(deaths) : 'no info';
      this.recoveredValue.textContent = (recovered) ? addSpaceDelimiter(recovered) : 'no info';
    });
  }

  renderIn(element) {
    element.append(this.table);
  }
}
