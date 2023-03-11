import { transformMinutesToDays } from './js/partials/min-to-d';
import { transformDaysToMinute } from './js/partials/d-to-min';
import { calculateClientsInHotel } from './js/partials/while';

const main = document.querySelector('main');

const scriptsListClickHandler = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('min-to-d')) {
    const output = document.querySelector('.min-to-d__output');
    output.textContent = transformMinutesToDays();
  }

  if (e.target.classList.contains('d-to-min')) {
    const output = document.querySelector('.d-to-min__output');
    output.textContent = transformDaysToMinute();
  }

  if (e.target.classList.contains('while')) {
    const output = document.querySelector('.while__output');
    output.textContent = calculateClientsInHotel();
  }
};
main.addEventListener('click', scriptsListClickHandler);
