import fetchImages from './apiService.js';
import addToMarkup from './addToMarkup.js';
import refs from './refs.js';

let inputValue = '';
let page = 1;
refs.btnLoadMoreRef.style.display = 'none';

const searchImages = (event) => {
    event.preventDefault();
    refs.galleryRef.innerHTML = '';
    inputValue = event.target.elements.query.value;

    if (inputValue.length > 1) {
        fetchImages(inputValue, page)
            .then(images => {
                addToMarkup(images)
                refs.btnLoadMoreRef.style.display = 'block';
            })
            .catch(error => console.log(error))
    }
};

export default searchImages;
