const container = document.getElementById('container');
const modalImage = document.getElementById('modal-image');
const modal = document.getElementById('modal');
const description = document.getElementById('image-description');

const images = container.querySelectorAll('img');

console.log(images);

for (let i=0; i<images.length; i++) {
  images[i].addEventListener('click', function() {
    modalImage.src = images[i].src;
    description.textContent = images[i].getAttribute('description');
    modal.classList.remove('no-display')
  })
}

modal.addEventListener('click', function() {
  modal.classList.add('no-display')
})