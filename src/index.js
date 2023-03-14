import { transformMinutesToDays } from './js/partials/min-to-d';
import { transformDaysToMinute } from './js/partials/d-to-min';
import { calculateClientsInHotel } from './js/partials/while';
import { checkingPassword } from './js/partials/do-while';
import { sumOfAllNumbers } from './js/partials/for';
import { reversCase } from './js/partials/arr_methods';
import { sumOfArray, numbers } from './js/partials/for-of';
import { multiply1 } from './js/partials/functions';

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

  if (e.target.classList.contains('arrays-methods_1')) {
    const output = document.querySelector('.arrays-methods_1__output');
    output.textContent = reversCase();
  }

  if (e.target.classList.contains('for-of')) {
    const output = document.querySelector('.for-of__output');
    output.textContent = sumOfArray(numbers);
  }

  if (e.target.classList.contains('functions')) {
    const output = document.querySelector('.functions__output');
    output.textContent = multiply1(3, 7, 9);
  }
};
main.addEventListener('click', scriptsListClickHandler);
