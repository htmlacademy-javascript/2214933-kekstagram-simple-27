import{imageEffects} from './data.js';

const imageUploadPreviewImg = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const elementSlider = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const sliderFieldset = document.querySelector('.img-upload__effect-level');

const EFFECT_DEFAULT = imageEffects[5];

let chosenEffect = EFFECT_DEFAULT;

const isDefault = () => chosenEffect === EFFECT_DEFAULT;

const updateSlider = () => {
  elementSlider.classList.remove('hidden');
  sliderFieldset.classList.remove('hidden');
  elementSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if(isDefault()) {
    elementSlider.classList.add('hidden');
    sliderFieldset.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = imageEffects.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imageUploadPreviewImg.style.filter = 'none';
  imageUploadPreviewImg.className = '';
  valueElement.value = '';
  if (isDefault()) {
    return;
  }
  const valueSlider = elementSlider.noUiSlider.get();
  imageUploadPreviewImg.style.filter = `${chosenEffect.style}(${valueSlider}${chosenEffect.unit})`;
  imageUploadPreviewImg.classList.add(`effects__previw--${chosenEffect.name}`);
  valueElement.value = elementSlider;
};

const resetEffects = () => {
  chosenEffect = EFFECT_DEFAULT;
  updateSlider();
};

noUiSlider.create(elementSlider, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});

updateSlider();
form.addEventListener('change', onFormChange);
elementSlider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
