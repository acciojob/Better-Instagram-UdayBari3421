const container = document.getElementById("parent");
const divs = container.getElementsByTagName("div");

function onDragStart(event) {
  event.dataTransfer.setData("div1", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const div1 = event.dataTransfer.getData("div1");
  const sourceElement = document.getElementById(div1);
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