document.addEventListener("DOMContentLoaded", function () {
  const parent = document.getElementById("parent");

  let dragged;

  parent.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.dataTransfer.setData("text/plain", ""); // Required for Firefox
  });

  parent.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  parent.addEventListener("drop", function (event) {
    event.preventDefault();
    const target = event.target;

    if (target !== dragged && target.classList.contains("image")) {
      // Swap the order of the dragged and target elements
      const parentRect = parent.getBoundingClientRect();
      const draggedRect = dragged.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const offsetX = event.clientX - targetRect.left;
      const offsetY = event.clientY - targetRect.top;

      if (event.clientX < parentRect.left + draggedRect.width / 2) {
        parent.insertBefore(dragged, target);
      } else {
        parent.insertBefore(dragged, target.nextSibling);
      }

      dragged.style.position = "relative";
      dragged.style.left = offsetX + "px";
      dragged.style.top = offsetY + "px";

      // Reset styles after a short delay for a smooth animation
      setTimeout(function () {
        dragged.style.position = "";
        dragged.style.left = "";
        dragged.style.top = "";
      }, 100);
    }
  });
});