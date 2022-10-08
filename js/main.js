// случайное  число из диапозона
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

// проверка длинны коментария
const compareLengths = (string, maxLength) => [...string].length <= maxLength;

getRandomInt(1, 2);
compareLengths('asdasdads', 12);
