import {isEscapeKey,isEnterKey} from './util.js';

const modal = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const alertSuccessFragment = document.createDocumentFragment();
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const alertErrorFragment = document.createDocumentFragment();


const onSuccessDocumentClick = (evt) => {
  const element = document.querySelector('.success__inner');
  const withinBoundaries = evt.composedPath().includes(element);

  if (!withinBoundaries) {
    hideAlert();
  }
};

const createSuccesMessageUpload = () => {
  const messageElement = successTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.success__inner');
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onSuccessDocumentClick);
  messageElement.querySelector('.success__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  alertSuccessFragment.appendChild(messageElement);
  modal.append(alertSuccessFragment);
  modal.style.overflow = 'hidden';
};

const createErrorMessageUpload = () => {
  const messageElement = errorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.error__inner');
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onSuccessDocumentClick);
  messageElement.querySelector('.error__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  alertErrorFragment.appendChild(messageElement);
  modal.append(alertErrorFragment);
  modal.style.overflow = 'hidden';
};

function onHideAlertButtonClick() {
  hideAlert();
}


function onPopupEnterKeydown(evt) {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
}

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
}

function hideAlert() {
  const alertMessage = document.querySelector('.success') || document.querySelector('.error');
  modal.removeChild(alertMessage);
  modal.style.overflow = 'auto';
  document.removeEventListener('keydown', onPopupEnterKeydown);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onSuccessDocumentClick);
}


export {
  createSuccesMessageUpload,
  createErrorMessageUpload,
};
