
import { makeLink } from "./js/pixabay-api";
import { createCard } from "./js/render-functions";
import { makeRequest } from "./js/pixabay-api";


// Для роботи з піксабей 

const KEY = '42597996-b1dc9edd2aa87e1c7d2b2d72b';
const BASE_URL = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
let QUERY = '';
let LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;


// витягуємо елементи 
const searchBtn = document.querySelector('button');
const searchInput = document.querySelector('input');
const searchForm = document.querySelector('form');
let imagesCollection = document.querySelector('.images');
const loader = document.querySelector('.loader-span')
loader.style.display = 'none';

//вішаємо слухача на подію сабміт

searchForm.addEventListener('submit', getLink);

function getLink(event) {
    imagesCollection.innerHTML = '';
     event.preventDefault();
     //отримуємо значення для пошуку від користувача
    QUERY = searchInput.value.trim();
    // перевіряємо, чи користувач щось ввів 
    if (QUERY !== "")  {
        //викликаємо функцію генерації і повертаємо посилання
        LINK = makeLink(QUERY);
        //даємо згенероване посилання на сервер 
        makeRequest(LINK)
        //викликаємо функцію формування карток
        createCard()
    }
    searchForm.reset();
}





