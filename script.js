document.addEventListener('DOMContentLoaded', () => {
  let draggedItem = null;

  document.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
    setTimeout(() => {
      event.target.style.display = 'none';
    }, 0);
  });

  document.addEventListener('dragend', (event) => {
    event.target.style.display = 'block';
    draggedItem = null;
  });

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  document.addEventListener('drop', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('image')) {
      const draggedRect = draggedItem.getBoundingClientRect();
      const targetRect = event.target.getBoundingClientRect();

      // Check if the dragged item is dropped onto another item
      if (draggedItem !== event.target) {
        // Swap positions using getBoundingClientRect
        draggedItem.style.transform = `translate(${targetRect.left - draggedRect.left}px, ${targetRect.top - draggedRect.top}px)`;
        event.target.style.transform = `translate(${draggedRect.left - targetRect.left}px, ${draggedRect.top - targetRect.top}px)`;

        // Swap content
        const tempContent = event.target.innerHTML;
        event.target.innerHTML = draggedItem.innerHTML;
        draggedItem.innerHTML = tempContent;

        // Reset transforms
        setTimeout(() => {
          draggedItem.style.transform = '';
          event.target.style.transform = '';
        }, 300);
      }
    }
    draggedItem = null;
  });
});
