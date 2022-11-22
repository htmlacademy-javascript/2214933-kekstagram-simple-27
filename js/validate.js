import {DESCRIPTION_MIN_LENGT, DESCRIPTION_MAX_LENGT} from './data.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextTag: 'div',
  errorClass: 'text__description--invalid',
  successClass: 'text__description--valid',
  errorTextClass: 'text__description--error'
});

const validateDescription = (value) => value.length >= DESCRIPTION_MIN_LENGT && value.length <= DESCRIPTION_MAX_LENGT;

pristine.addValidator(form.querySelector('.text__description'), validateDescription, 'От 20 до 140 символов.');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {pristine};
