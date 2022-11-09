import {generatedPictures} from './data.js';

const miniatures = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// console.log(similarPictureTemplate)

const renderingMiniature = () => {
  const similarListFragment = document.createDocumentFragment();

  generatedPictures.forEach(({ url, likes, comments }) => {
    const miniatureElement = similarPictureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.appendChild(miniatureElement);
  });
  miniatures.appendChild(similarListFragment);
};
export {renderingMiniature};
