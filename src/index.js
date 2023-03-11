import { transformMinutesToDays } from './js/partials/min-to-d';
import { transformDaysToMinute } from './js/partials/d-to-min';
import { calculateClientsInHotel } from './js/partials/while';
import { checkingPassword } from './js/partials/do-while';
import { sumOfAllNumbers } from './js/partials/for';

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

  if (e.target.classList.contains('do-while')) {
    const output = document.querySelector('.do-while__output');
    output.textContent = checkingPassword();
  }

  if (e.target.classList.contains('for')) {
    const output = document.querySelector('.for__output');
    output.textContent = sumOfAllNumbers();
  }
};
main.addEventListener('click', scriptsListClickHandler);
