document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("parent");
  const images = container.getElementsByClassName("image");

  let dragged;

  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    dragged = event.target;
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData("text/plain");
    const sourceElement = document.getElementById(sourceId);
    const destElement = event.target;

    // Ensure that source and destination elements exist before accessing properties
    if (sourceElement && destElement && destElement.classList.contains("image")) {
      // Swap the background images
      const temp = sourceElement.style.backgroundImage;
      sourceElement.style.backgroundImage = destElement.style.backgroundImage;
      destElement.style.backgroundImage = temp;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", onDragStart);
    images[i].addEventListener("dragover", onDragOver);
    images[i].addEventListener("drop", onDrop);
  }
});