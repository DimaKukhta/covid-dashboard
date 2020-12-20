import api from '../getApiData';

export class App {
  constructor(List, Table) {
    this.countries = [];
    this.currentCountry = 'Global';
    this.isLoading = true;
    
    this.handleListItemClick = this.handleListItemClick.bind(this);
    
    this.table = new Table();
    this.list = new List(this.handleListItemClick);

    this.fetchData();
  }

  render() {
    this.list.render(this.isLoading, this.countries);
    this.table.render(this.currentCountry);
  }

  handleListItemClick(e) {
    if (!e.target.id || this.currentCountry === e.target.id) {
      return;
    }

    this.currentCountry = e.target.id;
    this.table.render(this.currentCountry);
  };

  async fetchData() {
    try {
      const data = await api.getCountriesAndGlobalInfo();
      const countries = Object.keys(data);
      this.countries = countries;
      this.isLoading = false;
      this.list.render(this.isLoading, this.countries);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
};
