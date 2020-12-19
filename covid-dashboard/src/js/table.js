import createElement from './utils/createElement';
import { getCountriesAndGlobalInfo } from './getApiData';

export default class Table {
  constructor(country) {
    this.createTable();
    this.updateTableInfo(country);
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

    this.recoveredText = createElement('td', 'table-info-recoveded--text', 'Recovered');
    this.recoveredValue = createElement('td', 'table-info-recoveded--value');
    this.recoveredRow = createElement('tr', 'table-info-recovered', [this.recoveredText, this.recoveredValue], this.tbody);
  }

  updateTableInfo(country) {
    getCountriesAndGlobalInfo().then((summary) => {
      this.thead.textContent = country;
      this.casesValue.textContent = summary[country].cases;
      this.deathsValue.textContent = summary[country].deaths;
      this.recoveredValue.textContent = summary[country].recovered;
    });
  }

  renderIn(element) {
    element.append(this.table);
  }
}
