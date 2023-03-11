export const transformDaysToMinute = function () {
  const days = Number(prompt('How many days?'));
  const hours = Number(prompt('How many hours?'));
  const minutes = Number(prompt('How many minutes?'));

  return `You have ${days * 1440 + hours * 60 + minutes} minutes!`;
};
