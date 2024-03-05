const texts = ["Abbas Vajwana", "Web-developer", "Graphic-desginer" , "Ui-Ux Designer"]; // Array of texts to be typed
const Ispeed = 100; // Typing speed in milliseconds
let textIndex = 0;
let charIndex = 0;
let speed = Ispeed;

function type() {
  if (charIndex < texts[textIndex].length) {
    document.getElementById('text').textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1000); // Wait for 1 second before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    const newText = texts[textIndex].substring(0, charIndex - 1);
    document.getElementById('text').textContent = newText;
    charIndex--;
    setTimeout(erase, speed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to the next text
    setTimeout(type, 500); // Wait for 0.5 seconds before typing again
  }
}

type();