import fetchImages from './apiService.js';
import addToMarkup from './addToMarkup.js';

let inputValue = '';
let page = 1;

const loadMore = () => {
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

export default loadMore;