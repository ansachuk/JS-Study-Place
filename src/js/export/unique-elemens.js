export const findUniqueElements = array =>
  array.filter((elem, index, arr) => index === arr.indexOf(elem));
