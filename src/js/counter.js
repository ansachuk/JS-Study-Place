function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const plus = document.querySelector('.plus');
const number = document.querySelector('.number');
const minus = document.querySelector('.minus');

const counter = {
  value: 0,

  inc() {
    this.value += 1;
  },

  dec() {
    this.value -= 1;
  },
};

minus.addEventListener('click', () => {
  if (counter.value) {
    counter.dec();

    const currentColor = getRandomHexColor();

    document.body.style.backgroundColor = currentColor;
    number.style.color = currentColor;
    number.textContent = counter.value;
  }
});

plus.addEventListener('click', () => {
  counter.inc();

  const currentColor = getRandomHexColor();

  document.body.style.backgroundColor = currentColor;
  number.style.color = currentColor;
  number.textContent = counter.value;
});
