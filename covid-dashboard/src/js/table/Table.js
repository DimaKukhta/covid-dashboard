export class Table {
  render(currentCountry) {
    const table = document.getElementById('table');
    table.innerHTML = "";

    const fragment = document.createDocumentFragment();
    const currentCountryWrapper = document.createElement('div');
    currentCountryWrapper.append(`current country is: ${currentCountry}`);
    fragment.append(currentCountryWrapper);
    table.append(fragment);
  }
}
