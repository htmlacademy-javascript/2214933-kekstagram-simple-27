import { createPictureList } from './rendering-pictures.js';
import { getImageData } from './api.js';
import {showLoadError} from './util.js';
import './form.js';
import { setUserFormSubmit,closeUserModal } from './form.js';
getImageData(createPictureList, showLoadError);
setUserFormSubmit(closeUserModal);
