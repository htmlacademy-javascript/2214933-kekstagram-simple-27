const userWindow = document.querySelector('.img-upload__overlay');
const sizeControlSmaller = document.querySelector('.scale__control--smaller');
const sizeControlBigger = document.querySelector('.scale__control--bigger');
const sizeControl = userWindow.querySelector('.scale__control--value');
const imageUploadPreviewImg = document.querySelector('.img-upload__preview img');

const SIZE_DEFAULT = 100;
const SIZE_MIN = 25;
const SIZE_MAX = 100;
const SIZE_STEP = 25;

let sizeControlValue = SIZE_DEFAULT;

const scaleImage = (value = SIZE_DEFAULT) => {
  sizeControlValue = 100;
  imageUploadPreviewImg.style.transform = `scale(${value / 100})`;
  sizeControl.value = `${sizeControlValue}%`;
};


const onSmallerButtonClick = () => {
  if (sizeControlValue > SIZE_MIN ) {
    sizeControlValue -= SIZE_STEP;
    sizeControl.value = `${sizeControlValue}%`;
    imageUploadPreviewImg.style.transform = `scale(${sizeControlValue / 100})`;
  }
};

const onBiggerButtonClick = () => {
  if (sizeControlValue < SIZE_MAX) {
    sizeControlValue += SIZE_STEP;
    sizeControl.value = `${sizeControlValue}%`;
    imageUploadPreviewImg.style.transform = `scale(${sizeControlValue / 100})`;
  }
};

const resetScale = () => {
  scaleImage();
};

sizeControlSmaller.addEventListener('click', onSmallerButtonClick);
sizeControlBigger.addEventListener('click', onBiggerButtonClick);

export { resetScale };
