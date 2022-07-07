// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imagesMarkup = createImageGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);
gallery.addEventListener('click', onGalleryImageClick)

function createImageGalleryMarkup (galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a
        class="gallery__link"
        href="${original}"
        onclick="event.preventDefault()">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>
    `;
    })
    .join('');
};

function onGalleryImageClick(e) {
    const openImage = e.target.classList.contains('gallery__image');

    if (!openImage) {
        return
    } else {
        
        const instance = basicLightbox.create(`
            <img src="${e.target.dataset.source}"  alt="${e.target.alt}">
        `)
        
        instance.show()

    function pressEsc(e) {

        if (e.key === 'Escape') {
            instance.close()
        }
    }
        
    document.addEventListener('keydown', pressEsc);
    }
}
