import { getCountriesAndGlobalInfo } from './getApiData';

// getters dataObj

function getCountryFlag(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].flag);
}

function getDiseaseCount(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].cases);
}

function getDeathCount(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].deaths);
}

function getRecoveryCount(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].recovered);
}

function getDiseaseCountLastDay(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].todayCases);
}

function getDeathCountLastDay(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].todayDeaths);
}

function getRecoveryCountLastDay(country) {
  return getCountriesAndGlobalInfo().then((summary) => summary[country].todayRecovered);
}

function getDiseaseCount100(country) {
  return getCountriesAndGlobalInfo().then((summary) => {
    const { population } = summary[country];
    const result = (summary[country].cases * 100000) / population;
    return +result.toFixed(2);
  });
}

function getDeathCount100(country) {
  return getCountriesAndGlobalInfo().then((summary) => {
    const { population } = summary[country];
    const result = (summary[country].deaths * 100000) / population;
    return +result.toFixed(2);
  });
}

function getRecoveryCount100(country) {
  return getCountriesAndGlobalInfo().then((summary) => {
    const { population } = summary[country];
    const result = (summary[country].recovered * 100000) / population;
    return +result.toFixed(2);
  });
}

function getDiseaseCount100LastDay(country) {
  return getCountriesAndGlobalInfo().then((summary) => {
    const { population } = summary[country];
    const result = (summary[country].todayCases * 100000) / population;
    return +result.toFixed(2);
  });
}

function getDeathCount100LastDay(country) {
  return getCountriesAndGlobalInfo().then((summary) => {
    const { population } = summary[country];
    const result = (summary[country].todayDeaths * 100000) / population;
    return +result.toFixed(2);
  });
}

function getRecoveryCount100LastDay(country) {
  return getCountriesAndGlobalInfo().then((summary) => {
    const { population } = summary[country];
    const result = (summary[country].todayRecovered * 100000) / population;
    return +result.toFixed(2);
  });
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
};
