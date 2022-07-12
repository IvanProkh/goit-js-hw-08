// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const imagesMarkup = createImageGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);
gallery.addEventListener('click', onGalleryImageClick, { once: true });

function onGalleryImageClick(e) {
    console.log(e);
    const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });
}

function createImageGalleryMarkup (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <a 
        class="gallery__item"
        href="${original}"
        onclick="event.preventDefault()">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}"
            />
        </a>
    `;
    })
    .join('');
};

// Change code below this line