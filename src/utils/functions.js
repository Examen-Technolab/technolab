//сравнивает массивы с учетом порядка элементов
export const compareArrStrict = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//сравнивает массивы без учета порядка элементов
export const compareArr = (arr1, arr2) => {
  const sortFunc = (a, b) => a - b;
  arr1.sort(sortFunc);
  arr2.sort(sortFunc);
  return compareArrStrict(arr1, arr2);
}