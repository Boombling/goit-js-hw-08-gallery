import image from './gallery-items.js';
import { refs } from './refs.js';

refs.galleryEl.insertAdjacentHTML("beforeend", createGalleryList(image));
function createGalleryList(image) {
  return image
    .map((img) => `<li class="gallery__item">
      < a
    class= "gallery__link"
    href = "${img.original}"
      >
      <img
        class="gallery__image"
        src= "${img.preview}"
        data-source= "${img.original}"
        alt= "${img.description}"
      />
  </a >
</li > `)
        .join("");
    }
/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */