/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import createElement from '../utils/createElement';
import data from '../api/gettersInfo';

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

    this.recoveredText = createElement('td', 'table-info-recoveded--text', 'Recovered');
    this.recoveredValue = createElement('td', 'table-info-recoveded--value');
    this.recoveredRow = createElement('tr', 'table-info-recovered', [this.recoveredText, this.recoveredValue], this.tbody);
  }

  updateTableInfo(country = 'Global', isTotal = true, isAbsolute = true) {
    this.thead.textContent = country;

    if (isTotal === true && isAbsolute === true) {
      data.getDiseaseCount(country).then((result) => this.casesValue.textContent = result);
      data.getDeathCount(country).then((result) => this.deathsValue.textContent = result);
      data.getRecoveryCount(country).then((result) => this.recoveredValue.textContent = result);
    }

    if (isTotal === false && isAbsolute === false) {
      data.getDiseaseCount100LastDay(country).then((result) => this.casesValue.textContent = result);
      data.getDeathCount100LastDay(country).then((result) => this.deathsValue.textContent = result);
      data.getRecoveryCount100LastDay(country).then((result) => this.recoveredValue.textContent = result);
    }

    if (isTotal === true && isAbsolute === false) {
      data.getDiseaseCount100(country).then((result) => this.casesValue.textContent = result);
      data.getDeathCount100(country).then((result) => this.deathsValue.textContent = result);
      data.getRecoveryCount100(country).then((result) => this.recoveredValue.textContent = result);
    }

    if (isTotal === false && isAbsolute === true) {
      data.getDiseaseCountLastDay(country).then((result) => this.casesValue.textContent = result);
      data.getDeathCountLastDay(country).then((result) => this.deathsValue.textContent = result);
      data.getRecoveryCountLastDay(country).then((result) => this.recoveredValue.textContent = result);
    }
  }

  renderIn(element) {
    element.append(this.table);
  }
}
