
const loader = document.querySelector('.loader-span')
loader.style.display = 'none';


const KEY = '42597996-b1dc9edd2aa87e1c7d2b2d72b';
const BASE_URL = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
let QUERY = '';
let LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

// генеруємо посилання

export function makeLink(QUERY) {
    LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;
    return LINK;
}

export function makeRequest() {
    loader.style.display = 'block'
    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error! Status: ${response.status}`);
            }
            return response.json()
        })
    .catch(error => {alert('Error')}).finally(() => {loader.style.display = 'none'})
}