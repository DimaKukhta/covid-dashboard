/* eslint-disable no-param-reassign */
export default function disableBtnForMs(arrOfBtns, ms) {
  arrOfBtns.forEach((btn) => {
    btn.disabled = true;
    setTimeout(() => { btn.disabled = false; }, ms);
  });
}
