import dataObj from './createDataObj';

// helpers
function getCountryIndex(country) {
  // eslint-disable-next-line arrow-body-style
  const indexOfCountry = dataObj.Countries.findIndex((countryElem) => {
    return countryElem.Country === country;
  });
  return indexOfCountry;
}

function getCountryPopulation(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].Population;
}

// getters dataObj
function getCountryFlag(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].Flag;
}

function getDiseaseCount(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].TotalConfirmed;
}

function getDeathCount(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].TotalDeaths;
}

function getRecoveryCount(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].TotalRecovered;
}

function getDiseaseCountLastDay(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].NewConfirmed;
}

function getDeathCountLastDay(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].NewDeaths;
}

function getRecoveryCountLastDay(country) {
  const countryIndex = getCountryIndex(country);
  return dataObj.Countries[countryIndex].NewRecovered;
}

function getDiseaseCount100(country) {
  const countryIndex = getCountryIndex(country);
  const countryPopulation = getCountryPopulation(country);
  const result = (dataObj.Countries[countryIndex].TotalConfirmed * 100000) / countryPopulation;
  return +result.toFixed(2);
}

function getDeathCount100(country) {
  const countryIndex = getCountryIndex(country);
  const countryPopulation = getCountryPopulation(country);
  const result = (dataObj.Countries[countryIndex].TotalDeaths * 100000) / countryPopulation;
  return +result.toFixed(2);
}

function getRecoveryCount100(country) {
  const countryIndex = getCountryIndex(country);
  const countryPopulation = getCountryPopulation(country);
  const result = (dataObj.Countries[countryIndex].TotalRecovered * 100000) / countryPopulation;
  return +result.toFixed(2);
}

function getDiseaseCount100LastDay(country) {
  const countryIndex = getCountryIndex(country);
  const countryPopulation = getCountryPopulation(country);
  const result = (dataObj.Countries[countryIndex].NewConfirmed * 100000) / countryPopulation;
  return +result.toFixed(2);
}

function getDeathCount100LastDay(country) {
  const countryIndex = getCountryIndex(country);
  const countryPopulation = getCountryPopulation(country);
  const result = (dataObj.Countries[countryIndex].NewDeaths * 100000) / countryPopulation;
  return +result.toFixed(2);
}

function getRecoveryCount100LastDay(country) {
  const countryIndex = getCountryIndex(country);
  const countryPopulation = getCountryPopulation(country);
  const result = (dataObj.Countries[countryIndex].NewRecovered * 100000) / countryPopulation;
  return +result.toFixed(2);
}

function getUpdateData() {
  return dataObj.Date;
}

export default {
  getDiseaseCount,
  getDeathCount,
  getRecoveryCount,
  getDiseaseCountLastDay,
  getDeathCountLastDay,
  getRecoveryCountLastDay,
  getDiseaseCount100,
  getDeathCount100,
  getRecoveryCount100,
  getDiseaseCount100LastDay,
  getDeathCount100LastDay,
  getRecoveryCount100LastDay,
  getCountryFlag,
  getCountryPopulation,
  getUpdateData,
};
