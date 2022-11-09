// случайное число из диапозона
function getRandomInt(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    return getRandomInt(max, min);
  }
  if (min === max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// проверка длины коментария
const compareLengths = (string, maxLength) => string.length <= maxLength;

// console.log(compareLengths('asdsad', 3));

//случайный элемент масива
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

// функции проверки нажатия кнопок
const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomArrayElement, getRandomInt, compareLengths, isEscapeKey, isEnterKey};
