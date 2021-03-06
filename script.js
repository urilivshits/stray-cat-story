//Randomizing Background Color

const scriptedButton5 = document.querySelector(".button5");
const scriptedBody = document.querySelector("body");


const colors = ["black", "grey", "red", "white", "orange", "blue"];

scriptedButton5.addEventListener("click",changeColor);

function changeColor(){
    scriptedBody.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    
}

//Hiding texts
const scriptedButton1 = document.querySelector(".button1");
const scriptedText0 = document.querySelector("#text0");
const scriptedText1 = document.querySelector("#text1");
const scriptedText2 = document.querySelector("#text2");
const scriptedText3 = document.querySelector("#text3");

scriptedButton1.addEventListener("click", hideText);

function hideText(){
    scriptedText0.style.display = "none";
    scriptedText1.style.display = "none";
    scriptedText2.style.display = "none";
    scriptedText3.style.display = "none";
    scriptedImage1.style.width = "100%";
    scriptedImage2.style.width = "100%";
    scriptedImage3.style.width = "100%";
    
}

//Showing texts
const scriptedButton2 = document.querySelector(".button2");


scriptedButton2.addEventListener("click", showText);

function showText(){
    scriptedText0.style.display = "block";
    scriptedText1.style.display = "block";
    scriptedText2.style.display = "block";
    scriptedText3.style.display = "block";
    scriptedImage1.style.width = "350px";
    scriptedImage2.style.width = "350px";
    scriptedImage3.style.width = "350px";
}

//fixing image sizes
const scriptedImage1 = document.querySelector("#images1");
const scriptedImage2 = document.querySelector("#images2");
const scriptedImage3 = document.querySelector("#images3");
