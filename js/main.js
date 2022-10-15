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

compareLengths();

function getRandomArrayElement(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200
};

const PICTURES_COUNT = 25;

const ARRAY_PICTURE = [];

const descriptionArray = ['1descr', '2descr', '3descr'];

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptionArray),
  likes: getRandomInt(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomInt(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX)
});

function createPictures() {
  for (let index = 1; index <= PICTURES_COUNT; index++) {
    // createPicture (index);
    ARRAY_PICTURE.push(createPicture(index));
    // console.log(createPicture(index));
  }
}
createPictures();
// console.log(ARRAY_PICTURE);
