// --- JavaScript Functions demonstrating scope, parameters & return values ---

// Global variable tracking animation state
let animationActive = false;

/**
 * Toggles the animation class on the nature box.
 * @param {HTMLElement} element - The element to animate.
 * @returns {boolean} - Returns true if animation is now active, false otherwise.
 */
function toggleAnimation(element) {
  if (animationActive) {
    element.classList.remove('pulse');
    animationActive = false;
  } else {
    element.classList.add('pulse');
    animationActive = true;
  }
  return animationActive;
}

/**
 * Opens the modal by toggling visibility and animation classes.
 * @param {HTMLElement} modal - The modal element.
 */
function openModal(modal) {
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

/**
 * Closes the modal by removing animation class, then hiding it.
 * @param {HTMLElement} modal - The modal element.
 */
function closeModal(modal) {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// Event listeners after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  const natureBox = document.getElementById('natureBox');
  const animateBtn = document.getElementById('animateBtn');
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  animateBtn.addEventListener('click', () => {
    const active = toggleAnimation(natureBox);
    animateBtn.textContent = active ? 'Stop Animation' : 'Animate Nature Box';
  });

  openModalBtn.addEventListener('click', () => openModal(modal));
  closeModalBtn.addEventListener('click', () => closeModal(modal));
});
