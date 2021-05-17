function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const toggleText = document.querySelector('#text');

  const hideText = function () {
    toggleText.hidden = !toggleText.hidden;
  };

  toggleButton.addEventListener('click', hideText);
}
