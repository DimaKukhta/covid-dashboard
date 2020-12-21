/* eslint-disable consistent-return */
// filterBtn = 'cases' | 'deaths' | 'recovered'
export default function getFilterPosition(filterBtn, isTotal, isAbsolute) {
  if (isTotal === true && isAbsolute === true) {
    switch (filterBtn) {
      case 'cases':
        return 'cases';
      case 'deaths':
        return 'deaths';
      case 'recovered':
        return 'recovered';
      default:
    }
  }

  if (isTotal === false && isAbsolute === false) {
    switch (filterBtn) {
      case 'cases':
        return 'todayCasesPer100';
      case 'deaths':
        return 'todayDeathsPer100';
      case 'recovered':
        return 'todayRecoveredPer100';
      default:
    }
  }

  if (isTotal === true && isAbsolute === false) {
    switch (filterBtn) {
      case 'cases':
        return 'casesPer100';
      case 'deaths':
        return 'deathsPer100';
      case 'recovered':
        return 'recoveredPer100';
      default:
    }
  }

  if (isTotal === false && isAbsolute === true) {
    switch (filterBtn) {
      case 'cases':
        return 'todayCases';
      case 'deaths':
        return 'todayDeaths';
      case 'recovered':
        return 'todayRecovered';
      default:
    }
  }
}
