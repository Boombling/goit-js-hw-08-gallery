import image from './gallery-items.js';
import { refs } from './refs.js';

refs.galleryEl.addEventListener('click', onOpenOriginalImage)
refs.closeModalBtn.addEventListener('click', closeImageModal)
refs.overley.addEventListener('click', onBackdropClick)

function onOpenOriginalImage(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    refs.opneModal.classList.add("is-open")
    const originalImg = event.target.dataset.source;
    const imageAlt = event.target.getAtribute("alt");

    if(refs.opneModal.closest("is-open")){
        openImageInModal(originalImg, imageAlt)
    }    
}

function keydownModuleWindow(event) {
  if (event.code === 'Escape') {
    return closeImageModal();
  };
};

// function openImageInModal(image, alt, index) {
    
//     refs.imageEl.src = image;
//     refs.imageEl.alt = alt;
//     refs.imageEl.dataset.index = index;
//     window.addEventListener('keydown', event => keydownModuleWindow(event));
// }

function closeImageModal() {
    window.removeEventListener('keydown', keydownModuleWindow);
    refs.opneModal.classList.remove("is-open");
    openImageInModal();
}
function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        closeImageModal()
    }

// function onActivIndex(event) {
//      let currentImg = evt.target.getAttribute("href");
//      return images.findIndex((image) => currentImg === image.original);    
// }
function  openImageInModal(src = "", alt = "") {
  refs.imageEl.alt = alt;
  refs.imageEl = src;
}