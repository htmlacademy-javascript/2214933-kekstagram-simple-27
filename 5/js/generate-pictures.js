import {getRandomArrayElement, getRandomInt} from './util.js';
import { COMMENTS_COUNT, LIKES_COUNT, DESCRIPTIONARRAY, PICTURES_COUNT} from './data.js';

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

console.log(generatedPictures);

