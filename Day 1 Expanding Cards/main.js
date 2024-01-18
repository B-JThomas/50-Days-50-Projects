const container = document.querySelector('.carosel');
const panels = document.querySelectorAll('.card-container');

container.addEventListener('click', function (e) {
  let clickedPanel = null;
  if (e.target.tagName == 'H2') {
    clickedPanel = e.target.parentNode;
  } else {
    clickedPanel = e.target;
  }
  removeActive();
  clickedPanel.classList.add('active');
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}