import { isEscapeKey, isEnterKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './filters.js';
import { sendImageData } from './api.js';
import { createSuccesMessageUpload, createErrorMessageUpload} from './alerts-render.js';
import {pristine} from './validate.js';

const uploadUserPhoto = document.querySelector('#upload-file');
const modalWindow = document.querySelector('.img-upload__overlay');
const modal = document.querySelector('body');
const userCloseModalWindow = document.querySelector('#upload-cancel');
const pictureUploadInput = modal.querySelector('.img-upload__input');
const submitButton = modal.querySelector('.img-upload__submit');
const form = modal.querySelector('.img-upload__form');

const onPopupEscapeDown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};


//функция открытия модального окна

function openUserModal() {
  modalWindow.classList.remove('hidden');
  modal.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscapeDown);
}

uploadUserPhoto.addEventListener('change', () => {
  openUserModal();
});

uploadUserPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

//функция закрытия модального окна

function closeUserModal() {
  resetScale();
  resetEffects();
  modalWindow.classList.add('hidden');
  modal.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeDown);
  form.reset();
}


userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});


userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});


pictureUploadInput.addEventListener('change', () => {
  openUserModal();
});


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};


const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};


const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendImageData(
        () => {
          onSuccess();
          createSuccesMessageUpload();
          unblockSubmitButton();
        },
        () => {
          createErrorMessageUpload();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setUserFormSubmit,closeUserModal,openUserModal};
