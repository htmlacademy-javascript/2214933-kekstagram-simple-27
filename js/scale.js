const userModalWindow = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = userModalWindow.querySelector('.scale__control--value');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');

const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

let scaleControlValue = DEFAULT_SCALE;

const scaleImage = (value = DEFAULT_SCALE) => {
  scaleControlValue = 100;
  imgUploadPreviewImg.style.transform = `scale(${value / 100})`;
  scaleControl.value = `${scaleControlValue}%`;
};


const onSmallerButtonClick = () => {
  if (scaleControlValue > MIN_SCALE ) {
    scaleControlValue -= SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / 100})`;
  }
};

const onBiggerButtonClick = () => {
  if (scaleControlValue < MAX_SCALE) {
    scaleControlValue += SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / 100})`;
  }
};

const resetScale = () => {
  scaleImage();
};

scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
scaleControlBigger.addEventListener('click', onBiggerButtonClick);

export { resetScale };
