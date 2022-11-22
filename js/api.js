const DATA_SOURCE_INPUT = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const DATA_SOURCE_OUTPUT = 'https://27.javascript.pages.academy/kekstagram-simple';

const getImageData = (success, error) => {
  fetch (DATA_SOURCE_INPUT)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((data) => {
      success(data);
    })
    .catch(() => {
      error();
    });
};

const sendImageData = (success, error, body) => {
  fetch (
    DATA_SOURCE_OUTPUT,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        return success();
      }
      throw new Error();
    })
    .catch(() => {
      error();
    });
};

export{sendImageData};
export {getImageData};
