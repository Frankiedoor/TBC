document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.image-loop-container');
  const items = document.querySelectorAll('.image-loop-item');
  let currentPosition = 0;
  const slideWidth = items[0].offsetWidth;

  function slide() {
    currentPosition -= slideWidth;
    if (currentPosition < -slideWidth * (items.length - 1)) {
      currentPosition = 0;
    }
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }

  setInterval(slide, 3000); // Adjust the time interval (in milliseconds) for the slide transition
});
