import fetchImages from './apiService.js';
import addToMarkup from './addToMarkup.js';
import refs from './refs.js'


let inputValue = '';
let page = 1;
refs.btnLoadRef.style.display = 'none';

export const searchImages = (event) => {
    event.preventDefault();
    refs.galleryRef.innerHTML = '';
    inputValue = event.target.elements.query.value;

    if (inputValue.length > 1) {
        fetchImages(inputValue, page)
            .then(images => {
                addToMarkup(images)
                refs.btnLoadRef.style.display = 'block';
            })
            .catch(error => console.log(error))
    };
};

export const loadMore = () => {
    page += 1;

    fetchImages(inputValue, page)
        .then(images => {
            addToMarkup(images)
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            });
        }).catch(error => console.log(error))
};
