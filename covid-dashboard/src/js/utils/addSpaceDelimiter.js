/* eslint-disable prefer-const */
export default function addSpaceDelimiter(num) {
  if (Number.isFinite(num)) {
    let [integerStr, numRestStr] = `${num}`.split('.');

    if (integerStr.length <= 3) return `${num}`;

    for (let i = integerStr.length - 3; i >= 0; i -= 3) {
      integerStr = `${integerStr.slice(0, i)} ${integerStr.slice(i)}`;
    }

    integerStr = (numRestStr) ? `${numRestStr}` : integerStr;
    return integerStr;
  }
}
