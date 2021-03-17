import refs from './refs.js';
import imageTemplate from '../template/imageTemplate.hbs';

function addToMarkup(images) {
    let markup = imageTemplate(images);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
};

export default addToMarkup;