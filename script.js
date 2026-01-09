const image1 = document.getElementById("image1");
const inputBlur = document.getElementById("blur");
const inputSepia = document.getElementById("sepia");
const inputNegatyw = document.getElementById("negatyw");
const applyImage1Button = document.querySelectorAll(".btn")[0];

function applyImage1Filter() {
    let filterValue = "";

    if (inputBlur.checked) {
        const randomBlur = 4 + Math.floor(Math.random() * 9);
        filterValue = `blur(${randomBlur}px)`;
    }
    if (inputSepia.checked) {
        filterValue = "sepia(100%)";
    }
    if (inputNegatyw.checked) {
        filterValue = "invert(100%)";
    }

    image1.style.filter = filterValue;
}

applyImage1Button.addEventListener("click", applyImage1Filter);



const image2 = document.querySelectorAll(".blok img")[1];
const colorButton = document.querySelectorAll(".btn")[1];
const bwButton = document.querySelectorAll(".btn")[2];

function setImage2Color() {
    image2.style.filter = "none";
}

function setImage2Grayscale() {
    image2.style.filter = "grayscale(100%)";
}

colorButton.addEventListener("click", setImage2Color);
bwButton.addEventListener("click", setImage2Grayscale);



const image3 = document.querySelectorAll(".blok img")[2];
const opacitySlider = document.querySelectorAll(".suwak")[0];
const opacityButton = document.querySelectorAll(".btn")[3];

function applyOpacityFilter() {
    const opacityValue = opacitySlider.value;
    image3.style.filter = `opacity(${opacityValue}%)`;
}

opacityButton.addEventListener("click", applyOpacityFilter);



const image4 = document.querySelectorAll(".blok img")[3];
const brightnessSlider = document.querySelectorAll(".suwak")[1];
const brightnessButton = document.querySelectorAll(".btn")[4];

function applyBrightnessFilter() {
    const brightnessValue = brightnessSlider.value;
    image4.style.filter = `brightness(${brightnessValue}%)`;
}

brightnessButton.addEventListener("click", applyBrightnessFilter);