// for table, list with flags
async function getCountriesAndGlobalInfo() {
  const urlCountries = 'https://disease.sh/v3/covid-19/countries';
  const urlGlobal = 'https://disease.sh/v3/covid-19/all';
  const responseCountries = await fetch(urlCountries);
  const responseGlobal = await fetch(urlGlobal);
  const countryList = await responseCountries.json();
  const global = await responseGlobal.json();
  const countriesInfo = countryList.reduce((accum, {
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
  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    updated,
  } = global;
  countriesInfo.Global = {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    updated,
  };
  console.log(JSON.stringify(countriesInfo, null, 2)); // just for control
  return countriesInfo;
}
getCountriesAndGlobalInfo();

// for chart. Daily info
async function getHistoricInfo(country) { // country or Global
  if (country === 'Global') {
    const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=1000';
    const response = await fetch(url);
    const countryStats = await response.json();
    console.log(JSON.stringify(countryStats, null, 2));// just for control
    return countryStats;
  }
  const url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=1000`;
  const response = await fetch(url);
  const countryStats = await response.json();
  const { cases, deaths, recovered } = countryStats.timeline;
  console.log(JSON.stringify({ cases, deaths, recovered }, null, 2)); // just for control
  return { cases, deaths, recovered };
}
// getHistoricInfo('Global');
// getHistoricInfo('Belarus');
export default {
  getCountriesAndGlobalInfo,
  getHistoricInfo,
};
