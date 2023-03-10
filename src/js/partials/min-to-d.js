export const transformMinutesToDays = () => {
  const enteredMinutes = Number(prompt('How many minutes you have?'));
  const fullHours = Math.floor(enteredMinutes / 60);

  return ` You have ${Math.floor(fullHours / 24)} days, ${
    fullHours % 24
  } hours, ${enteredMinutes % 60} minutes.`;
};
