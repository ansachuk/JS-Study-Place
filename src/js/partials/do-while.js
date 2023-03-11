export const checkingPassword = () => {
  let password = '';

  do {
    password = prompt('Enter password more 4 litters', '');
  } while (password.length < 5);

  return `Your password:, ${password}`;
};
