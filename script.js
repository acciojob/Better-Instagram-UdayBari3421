//your code here
https://cdn.acciojob.com/questions-data/Screen_Recording_2023-02-07_at_2_15_57_PM_AdobeExpress.gif

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");
  let selectedImage = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", handleDragStart);
    image.addEventListener("dragover", handleDragOver);
    image.addEventListener("dragenter", handleDragEnter);
    image.addEventListener("dragleave", handleDragLeave);
    image.addEventListener("drop", handleDrop);
    image.addEventListener("dragend", handleDragEnd);
  });

  function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    selectedImage = event.target;
    setTimeout(() => {
      event.target.style.display = "none";
    }, 0);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains("image") && event.target !== selectedImage) {
      event.target.classList.add("selected");
    }
  }

  function handleDragLeave(event) {
    if (event.target.classList.contains("selected")) {
      event.target.classList.remove("selected");
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    const draggedImageId = event.dataTransfer.getData("text/plain");
    const draggedImage = document.getElementById(draggedImageId);

    if (event.target.classList.contains("image") && event.target !== draggedImage) {
      swapImages(selectedImage, event.target);
    }

    if (event.target.classList.contains("selected")) {
      event.target.classList.remove("selected");
    }
  }

  function handleDragEnd() {
    selectedImage.style.display = "block";
    selectedImage = null;
  }

  function swapImages(image1, image2) {
    const temp = image1.innerHTML;
    image1.innerHTML = image2.innerHTML;
    image2.innerHTML = temp;
  }
});