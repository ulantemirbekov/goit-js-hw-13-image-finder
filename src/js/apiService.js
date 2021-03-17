function fetchImages(query, page) {

    const API_KEY = '19541580-1bdd8df51d74162905bdf8d23';
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;

    return fetch(URL)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data => data.hits)
};

export default fetchImages;