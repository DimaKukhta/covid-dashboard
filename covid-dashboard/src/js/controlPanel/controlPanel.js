import { getCountriesAndGlobalInfo } from '../api/getApiData';
import addSpaceDelimiter from '../utils/addSpaceDelimiter';
import disableBtnForMs from '../utils/disableBtnForMs';

function fillControlPanelData() {
  const totalAmount = document.querySelector('#totalAmount');
  const updatedDate = document.querySelector('#updatedDate');

  getCountriesAndGlobalInfo().then(({ Global }) => {
    const addZeroes = (n) => ((n < 10) ? `0${n}` : n);

    const date = new Date(Global.updated);
    const day = addZeroes(date.getDate());
    const month = addZeroes(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = addZeroes(date.getHours());
    const minutes = addZeroes(date.getMinutes());

    updatedDate.textContent = `${day}.${month}.${year} | ${hours}:${minutes}`;

    totalAmount.textContent = addSpaceDelimiter(Global.cases);
  });
}

function toggleLogic() {
  const filters = document.querySelector('.button-filters');

  function toggleFilter({ target }) {
    const isTargetActive = target.classList.contains('button-active');
    if (isTargetActive) return;
    if (target !== this) {
      const activeBtn = filters.querySelector('.button-active');
      activeBtn.classList.remove('button-active');
      target.classList.add('button-active');
    }
  }
  filters.addEventListener('click', () => {
    disableBtnForMs(Array.from(filters.children), 2700);
  });
  filters.addEventListener('click', toggleFilter);
}

export default {
  fillControlPanelData,
  toggleLogic,
};
