const picturesWrapper = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureList = (galleryValue) => {
  const pictureFragment = document.createDocumentFragment();

  galleryValue.forEach((image) => {
    const picture = pictureTemplate.cloneNode(true);
    const pictureImage = picture.querySelector('.picture__img');
    const pictureLike = picture.querySelector('.picture__likes');
    const pictureComment = picture.querySelector('.picture__comments');
    pictureImage.src = image.url;
    pictureLike.textContent = image.likes;
    pictureComment.textContent = image.comments;
    pictureFragment.appendChild(picture);
  });

  picturesWrapper.appendChild(pictureFragment);
};

export {createPictureList};
