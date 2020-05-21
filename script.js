const scriptedButton = document.querySelector(".button1");
const scriptedBody = document.querySelector("body");
const scriptedHeader = document.querySelector("#header");


const colors = ["black", "grey", "red", "white", "orange", "blue"];

scriptedButton.addEventListener("click",changeColor);



function changeColor(){
    scriptedBody.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    scriptedHeader.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}
