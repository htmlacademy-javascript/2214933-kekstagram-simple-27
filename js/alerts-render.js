import {isEscapeKey,isEnterKey} from './util.js';

const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const fragmentSuccessAlert = document.createDocumentFragment();
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const fragmentErrorAlert = document.createDocumentFragment();


const onSuccessDocumentClick = (evt) => {
  const element = document.querySelector('.success__inner');
  const boundary = evt.composedPath().includes(element);

  if (!boundary) {
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
  fragmentSuccessAlert.appendChild(messageElement);
  body.append(fragmentSuccessAlert);
  body.style.overflow = 'hidden';
};

const createErrorMessageUpload = () => {
  const messageElement = errorTemplate.cloneNode(true);
  const messageContainer = messageElement.querySelector('.error__inner');
  document.addEventListener('keydown', onPopupEnterKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onSuccessDocumentClick);
  messageElement.querySelector('.error__button').addEventListener('click', onHideAlertButtonClick);
  messageElement.appendChild(messageContainer);
  fragmentErrorAlert.appendChild(messageElement);
  body.append(fragmentErrorAlert);
  body.style.overflow = 'hidden';
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
  const messageAlert = document.querySelector('.success') || document.querySelector('.error');
  body.removeChild(messageAlert);
  body.style.overflow = 'auto';
  document.removeEventListener('keydown', onPopupEnterKeydown);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onSuccessDocumentClick);
}


export {
  createSuccesMessageUpload,
  createErrorMessageUpload,
};
