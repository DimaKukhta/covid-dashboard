// for table, list with flags
const urlCovidBase = 'https://disease.sh/v3/covid-19';

async function fetchCountriesData() {
  const urlCountries = `${urlCovidBase}/countries`;
  return fetch(urlCountries).then((result) => result.json());
}

async function fetchGlobalData() {
  const urlGlobal = `${urlCovidBase}/all`;
  return fetch(urlGlobal).then((result) => result.json());
}

async function getCountriesData() {
  const responseCountries = await fetchCountriesData();

  return responseCountries.reduce((accum, {
    country,
    countryInfo,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    updated,
  }) => {
    // eslint-disable-next-line no-param-reassign
    accum[country] = {
      flag: countryInfo.flag,
      lat: countryInfo.lat,
      long: countryInfo.long,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      population,
      updated,
    };
    return accum;
  }, {});
}

async function getGlobalData() {
  const responseGlobal = await fetchGlobalData();

  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    updated,
  } = responseGlobal;

  return {
    Global: {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      population,
      updated,
    },
  };
}

async function getCountriesAndGlobalInfo() {
  const countriesData = await getCountriesData();
  const globalData = await getGlobalData();

  const summaryData = Object.assign(countriesData, globalData);
  // just for control
  console.log(JSON.stringify(summaryData, null, 2));
  return summaryData;
}

// for chart. Daily info

async function fetchHistoricCountryInfo(country) {
  const url = `${urlCovidBase}/historical/${country}?lastdays=1000`;
  return fetch(url).then((result) => result.json());
}

async function fetchHistoricGlobalInfo() {
  const url = `${urlCovidBase}/historical/all?lastdays=1000`;
  return fetch(url).then((result) => result.json());
}

async function getHistoricCountryInfo(country) {
  const response = await fetchHistoricCountryInfo(country);
  const { cases, deaths, recovered } = response.timeline;
  const countryHistoricInfo = { cases, deaths, recovered };
  // just for control
  console.log(JSON.stringify(countryHistoricInfo, null, 2));
  return countryHistoricInfo;
}

async function getHistoricGlobalInfo() {
  const response = await fetchHistoricGlobalInfo();
  const { cases, deaths, recovered } = response;
  const globalHistoricInfo = { cases, deaths, recovered };
  // just for control
  console.log(JSON.stringify(globalHistoricInfo, null, 2));
  return globalHistoricInfo;
}

async function getHistoricInfo(country) {
  if (country === 'Global') {
    return getHistoricGlobalInfo();
  }
  return getHistoricCountryInfo(country);
}

export default {
  getCountriesAndGlobalInfo,
  getHistoricInfo,
};
