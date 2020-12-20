import { List } from './js/list/List';
import { Table } from './js/table/Table';
import { App } from './js/app/App';
import './js/map/Map';
import './style/style.css';

const app = new App(List, Table);

app.render();
