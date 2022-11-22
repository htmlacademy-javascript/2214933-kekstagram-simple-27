import { isEscapeKey, isEnterKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './filters.js';
import { sendImageData } from './api.js';
import { createSuccesMessageUpload, createErrorMessageUpload } from './alerts-render.js';
import { pristine } from './validate.js';

const userPhoto = document.querySelector('#upload-file');
const windowModal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const userCloseWindowModal = document.querySelector('#upload-cancel');
const imageUploadInput = body.querySelector('.img-upload__input');
const buttonSubmit = body.querySelector('.img-upload__submit');
const form = body.querySelector('.img-upload__form');

const onPopupEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  windowModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

userPhoto.addEventListener('change', () => {
  openUserModal();
});

userPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

function closeUserModal() {
  resetScale();
  resetEffects();
  windowModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  form.reset();
}

userCloseWindowModal.addEventListener('click', () => {
  closeUserModal();
});

userCloseWindowModal.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

imageUploadInput.addEventListener('change', () => {
  openUserModal();
});

const blockbuttonSubmit = () => {
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = 'Сохраняю...';
};

const unblockbuttonSubmit = () => {
  buttonSubmit.disabled = false;
  buttonSubmit.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    document.removeEventListener('keydown', onPopupEscKeydown);
    const isValid = pristine.validate();
    if (isValid) {
      blockbuttonSubmit();
      sendImageData(
        () => {
          onSuccess();
          createSuccesMessageUpload();
          unblockbuttonSubmit();
        },
        () => {
          createErrorMessageUpload();
          unblockbuttonSubmit();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setUserFormSubmit,closeUserModal};
