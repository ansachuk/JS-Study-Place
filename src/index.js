import { transformMinutesToDays } from './js/partials/min-to-d';

const main = document.querySelector('main');

const scriptsListClickHandler = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('min-to-d')) {
    const output = document.querySelector('.min-to-d__par');
    output.textContent = transformMinutesToDays();
  }
};
main.addEventListener('click', scriptsListClickHandler);
