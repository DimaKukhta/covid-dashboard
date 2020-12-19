import createElement from './utils/createElement';

export default class Table {
  constructor() {
    this.createTable();
  }

  createTable() {
    this.table = createElement('table', 'table-info');
    this.tbody = createElement('tbody', null, null, this.table);
    this.thead = createElement('th', 'table-info--country', 'Global', null, ['colspan', '2']);
    this.tableHead = createElement('tr', null, this.thead, this.tbody);
    this.casesText = createElement('td', 'table-info-cases--text', 'Cases');
    this.casesValue = createElement('td', 'table-info-cases--value', 'aaaaaaaa');
    this.casesRow = createElement('tr', 'table-info-cases', [this.casesText, this.casesValue], this.tbody);
    this.deathText = createElement('td', 'table-info-deaths--text', 'Deaths');
    this.deathValue = createElement('td', 'table-info-deaths--value', 'aaaassssssssaaaa');
    this.deathsRow = createElement('tr', 'table-info-deaths', [this.deathText, this.deathValue], this.tbody);
    this.recoveredText = createElement('td', 'table-info-recoveded--text', 'Recovered');
    this.recoveredValue = createElement('td', 'table-info-recoveded--value', 'aaaassssssssaaaa');
    this.recoveredRow = createElement('tr', 'table-info-recovered', [this.recoveredText, this.recoveredValue], this.tbody);
  }

  updateTableInfo({ country, cases, deaths, recovered }) {
    this.thead.textContent = country;
    this.casesValue.textContent = cases;
    this.deathsValue.textContent = deaths;
    this.recoveredValue.textContent = recovered;
  }

  renderIn(element) {
    element.append(this.table);
  }
}
