// import searchImages from './js/searchImages.js';
// import loadMore from './js/loadMore.js';
import { searchImages, loadMore } from './js/searchImages.js';
import refs from './js/refs.js';
import './styles.css';

refs.formRef.addEventListener('submit', searchImages);
refs.btnLoadMoreRef.addEventListener('click', loadMore);