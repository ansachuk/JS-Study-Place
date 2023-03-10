export const transformMinutesToDays = () => {
  const enteredMinutes = Number(prompt('How many minutes you have?'));
  const minutes = enteredMinutes % 60;
  const fullHours = Math.floor(enteredMinutes / 60);
  const hoursFloor = fullHours % 24;
  const fullDays = Math.floor(fullHours / 24);

  return ` You have ${fullDays} days, ${hoursFloor} hours, ${minutes} minutes.`;
};

// console.log(transformMinutesToDays(enteredMinutes));
