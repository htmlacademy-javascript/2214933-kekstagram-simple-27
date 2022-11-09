import {getRandomArrayElement, getRandomInt} from './util.js';

const MINDESCRIPTIONLENGT = 20;
const MAXDESCRIPTIONLENGT = 140;


const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200
};

const PICTURES_COUNT = 25;

const DESCRIPTIONARRAY = ['1descr', '2descr', '3descr'];


const createPicture = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONARRAY),
  likes: getRandomInt(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomInt(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX)
});


const generatedPictures = Array.from({
  length: PICTURES_COUNT
}, (_value, index) => createPicture(index));

export {generatedPictures};
export {MINDESCRIPTIONLENGT,MAXDESCRIPTIONLENGT};
