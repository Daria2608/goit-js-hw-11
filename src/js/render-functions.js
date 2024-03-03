
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom'
});

const searchBtn = document.querySelector('button');
const searchInput = document.querySelector('input');
const searchForm = document.querySelector('form');
let imagesCollection = document.querySelector('.images');
const loader = document.querySelector('.loader-span')
loader.style.display = 'none';

import { makeRequest } from "./pixabay-api";

export function createCard() {
    makeRequest().then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                timeout: 3000,
                position: 'topRight',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
            });
        }
        else {
            const images = data.hits;
            imagesCollection.innerHTML = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `<div class="items">
        <a class="gallery-link" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
        </a>
        <div class="info-gallery">
        <p class="gallery-description">
        <span class="gallery-description-span">Likes: 
        <span class="span">${likes}</span>
        </span>
        </p>
        <p class="gallery-description">
        <span class="gallery-description-span">Views: <span class="span">${views}</span>
        </span>    
        </p>
        <p class="gallery-description">
        <span class="gallery-description-span">Comments: <span class="span">${comments}</span>
        </span>    
        </p>
        <p class="gallery-description">
        <span class="gallery-description-span">Downloads: <span class="span">${downloads}</span>
        </span>    
        </p></div></div>`
            })
                .join('')
      
        }
     lightbox.refresh(); }
)
} 
