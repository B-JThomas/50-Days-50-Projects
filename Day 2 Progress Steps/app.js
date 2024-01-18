const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const progressBubble = document.querySelectorAll(".progress-bubble");
const progressBar = document.getElementById("progress");

let current = 1;

const nextFunction = () => {
    current++;
    if (current > progressBubble.length) {
        current = progressBubble.length;
    }
    // Update progress width
    update();
}

const prevFunction = () => {
    current--;
    if (current < 1) {
        current = 1;
    }
    // Update progress width
    update();
}

const update = () => {
    // Update active class on all bubbles up to current
    if (current === progressBubble.length) {
        nextButton.disabled = true;
      } else if (current === 1) {
        prevButton.disabled = true;
      } else {
        nextButton.disabled = false;
        prevButton.disabled = false;
    }
    for (let i = 0; i < progressBubble.length; i++) {
        if (i < current) {
            progressBubble[i].classList.add('active');
            progressBubble[i].style.transition = "all 0.6s ease"; // Add transition to the style
        } else {
            progressBubble[i].classList.remove('active');
            progressBubble[i].style.transition = "all 0.2s ease"; // Remove transition for inactive bubbles
        }
    }
    // Update the width of progressBar
    let newWidth = (100 / (progressBubble.length - 1)) * (current - 1);
    progressBar.style.width = `${newWidth}%`;
}

nextButton.onclick = nextFunction;
prevButton.onclick = prevFunction;