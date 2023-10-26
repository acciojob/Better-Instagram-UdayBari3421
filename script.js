const container = document.getElementById("parent");
const divs = container.getElementsByTagName("div");

function onDragStart(event) {
  event.dataTransfer.setData("sourceId", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const sourceId = event.dataTransfer.getData("sourceId");
  const sourceElement = document.getElementById(sourceId);
  const destElement = event.target;

  const sourceNextElement = sourceElement.nextElementSibling;
  const destNextElement = destElement.nextElementSibling;

  container.insertBefore(destElement, sourceNextElement);

  container.insertBefore(sourceElement, destNextElement);
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("dragstart", onDragStart);
  divs[i].addEventListener("dragover", onDragOver);
  divs[i].addEventListener("drop", onDrop);
}