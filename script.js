const container = document.getElementById("parent");
const divs = container.getElementsByTagName("div");

for (let i = 1; i < divs.length; i++) {
  divs[i].addEventListener("dragstart", (event)=>{
	  event.dataTransfer.setData(`drag${i}`, event.target.id);
  });
  divs[i].addEventListener("dragover", (event)=>{
	  event.preventDefault();
  });
  divs[i].addEventListener("drop", (event)=>{ 
	  const drag1 = event.dataTransfer.getData(`drag${i}`);
	  const sourceElement = document.getElementById(drag1);
	  const destElement = event.target;
	
	  const sourceNextElement = sourceElement.nextElementSibling;
	  const destNextElement = destElement.nextElementSibling;
	
	  container.insertBefore(destElement, sourceNextElement);
	  container.insertBefore(sourceElement, destNextElement);
  });
}