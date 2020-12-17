import refs from './refs.js';
import imageTemplate from '../template/imageTemplate.hbs';

function updateMarkup(images) {
    let markup = imageTemplate(images);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
};

export default updateMarkup;