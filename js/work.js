import image from './gallery-items.js';
import { refs } from './refs.js';

refs.galleryEl.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.overley.addEventListener('click', onBackdropClick)

function onOpenModal(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    refs.opneModal.classList.add("is-open")
    window.addEventListener('keydown', onEscPress)
    // const originalImg = event.target.dataset.source;
    // const imageAlt = event.target.getAtribute("alt");

    // if(refs.opneModal.closest("is-open")){
    //     openImageInModal(originalImg, imageAlt)
    // }    
}


// function openImageInModal(image, alt, index) {
  
  //     refs.imageEl.src = image;
  //     refs.imageEl.alt = alt;
  //     refs.imageEl.dataset.index = index;
  // }
  
  function onCloseModal() {
    window.removeEventListener('keydown', onEscPress);
    refs.opneModal.classList.remove("is-open");
};
  
  function onEscPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    };
};
  
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal()
  }
}

// function onActivIndex(event) {
//      let currentImg = evt.target.getAttribute("href");
//      return images.findIndex((image) => currentImg === image.original);    
// }
// function  openImageInModal(src = "", alt = "") {
//   refs.imageEl.alt = alt;
//   refs.imageEl = src;
// }