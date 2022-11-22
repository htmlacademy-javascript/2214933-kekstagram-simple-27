
const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';
const ALERT_SHOW_TIME = 10000;

const showLoadError = (message) => {
  const alertContainer = document.createElement('div');
  const alertAdvice = document.createElement('p');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  alertAdvice.textContent = 'Попробуйте перезагрузить страницу.';
  document.body.append(alertContainer);
  alertContainer.append(alertAdvice);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {isEscapeKey, isEnterKey,showLoadError };
