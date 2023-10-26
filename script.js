document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("parent");
  const images = container.getElementsByClassName("image");

  let dragged;

  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    dragged = event.target;
    setTimeout(() => {
      event.target.style.display = "none";
    }, 0);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData("text/plain");
    const sourceElement = document.getElementById(sourceId);
    const destElement = event.target;

    // Swap the positions of the source and destination elements
    container.insertBefore(sourceElement, destElement);

    // Show the dragged element again
    setTimeout(() => {
      dragged.style.display = "block";
    }, 0);
  }

  // Add event listeners to each image
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", onDragStart);
    images[i].addEventListener("dragover", onDragOver);
    images[i].addEventListener("drop", onDrop);
  }
});