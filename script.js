const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const gradientButton = document.getElementById("gradientButton");

function setGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

gradientButton.addEventListener("click", setGradient);

// Initial gradient setup
setGradient();
