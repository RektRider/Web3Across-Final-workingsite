// Flip card to back (on Learn More button click)
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.flip-card');
    card.classList.add('flipped');
  });
});

// Flip card back to front (by clicking anywhere on the back)
document.querySelectorAll('.flip-card-back').forEach(back => {
  back.addEventListener('click', () => {
    const card = back.closest('.flip-card');
    card.classList.remove('flipped');
  });
});

