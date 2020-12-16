/* eslint-disable no-param-reassign */
import covidData from '../mocks/summary';
import flagsPopulation from '../mocks/flags&population';

function getWorldPopulation() {
  return flagsPopulation.reduce((accum, country) => accum + country.population, 0);
}

function getCountryIndex(country) {
  return flagsPopulation.findIndex((countryObj) => {
    switch (country) {
      case 'Cape Verde':
        return countryObj.name.includes('Cabo Verde');
      case 'Lao PDR':
        return countryObj.name.includes('Lao People');
      case 'Palestinian Territory':
        return countryObj.name.includes('Palestine');
      case 'Saint Vincent and Grenadines':
        return countryObj.name.includes('Saint Vincent and the Grenadines');
      case 'Congo (Brazzaville)':
        return countryObj.name === 'Congo';
      case 'Congo (Kinshasa)':
        return countryObj.name.includes('Congo (Democratic Republic');
      default:
        break;
    }
    return countryObj.name.includes(country);
  });
}

function getCountryFlag(country) {
  if (country === 'Planet') return 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg';

  const indexOfCountry = getCountryIndex(country);

  return flagsPopulation[indexOfCountry].flag;
}

function getCountryPopulation(country) {
  if (country === 'Planet') return getWorldPopulation();

  const indexOfCountry = getCountryIndex(country);

  return flagsPopulation[indexOfCountry].population;
}

function createDataObj() {
  const dataObj = JSON.parse(JSON.stringify(covidData));
  const globalData = dataObj.Global;
  globalData.Country = 'Planet';
  dataObj.Countries.unshift(globalData);

  delete dataObj.Global;
  delete dataObj.Message;

  // eslint-disable-next-line consistent-return
  dataObj.Countries.forEach((country) => {
    if (country.Country.includes('Congo')) return country.Country;
    country.Country = country.Country.replace(/,.+/, '').replace(/\s\(.+/, '');
  });

  dataObj.Countries.forEach((country) => {
    delete country.Premium;
    delete country.Date;
    delete country.Slug;
    delete country.CountryCode;

    country.Population = getCountryPopulation(country.Country);
    country.Flag = getCountryFlag(country.Country);
  });

  return dataObj;
}
const dataObj = createDataObj();

export default dataObj;
