// Flip card to back
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.flip-card');
    card.classList.add('flipped');
  });
});

// Flip card back to front
document.querySelectorAll('.flip-back-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.flip-card');
    card.classList.remove('flipped');
  });
});
