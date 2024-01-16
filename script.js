
//your code here
const images = document.querySelectorAll('.image');
let draggedImage = null;

// Add event listeners to all images to make them draggable
images.forEach(image => {
  image.addEventListener('dragstart', () => {
    draggedImage = image;
    image.classList.add('selected');
  });

  image.addEventListener('dragend', () => {
    draggedImage = null;
    image.classList.remove('selected');
  });

  image.addEventListener('dragover', e => {
    e.preventDefault();
  });

  image.addEventListener('drop', () => {
    if (draggedImage !== image) {
      // Swap the background images of the dragged and dropped images
      const temp = draggedImage.style.backgroundImage;
      draggedImage.style.backgroundImage = image.style.backgroundImage;
      image.style.backgroundImage = temp;
    }
  });
});