export class List {
  constructor(handleListItemClick) {
    this.onListClick = handleListItemClick;
  }

  render(isLoading, countries) {
    const list = document.getElementById('list');
    list.innerHTML = "";

    if (isLoading) {
      list.append(this.renderLoadingState());
    }

    if (countries.length) {
      list.append(this.renderListWithData(countries));
    }
  }

  renderLoadingState() {
    const fragment = document.createDocumentFragment();
    const loadingWrapper = document.createElement('div');
    loadingWrapper.append('Loading...');
    fragment.append(loadingWrapper);

    return fragment;
  }

  renderListWithData(countries) {
    const fragment = document.createDocumentFragment();

    const countriesList = document.createElement('ul');
    countriesList.addEventListener('click', this.onListClick);

    countries.forEach(country => {
      const listItem = document.createElement('li');
      listItem.append(country);
      listItem.setAttribute('id', country);
      countriesList.append(listItem);
    });

    fragment.append(countriesList);

    return fragment;
  }
}
