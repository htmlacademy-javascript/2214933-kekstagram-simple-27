import { setUserFormSubmit,closeUserModal } from './form.js';
import './validate.js';
import { createPictureList } from './rendering-pictures.js';
import { getImageData } from './api.js';

getImageData((pictures) => {
  createPictureList(pictures);
});

setUserFormSubmit(closeUserModal);
