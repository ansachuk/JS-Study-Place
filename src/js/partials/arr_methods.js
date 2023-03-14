export const reversCase = () => {
  const string = prompt('Enter your word:');
  switch (string) {
    case null:
      return 'Operation is cancelled!';

    case '':
      return 'You not enter a word!';

    default:
      let reversString = '';
      const letters = string.split('');

      for (const letter of letters) {
        reversString +=
          letter === letter.toUpperCase()
            ? letter.toLowerCase()
            : letter.toUpperCase();
      }

      return reversString;
  }
};
