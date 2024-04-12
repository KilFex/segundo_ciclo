function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

function randomColor(){
    const letters = "0123456789ABCDEF";
    let color= "#";
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTitleColor(){
    const title = document.querySelector("h1");
    title.style.color= randomColor();
}

setInterval(changeTitleColor, 1000); 

function addRedBorder(element){
    element.classList.add("red-border");
}
function removeRedBorder(element){
    element.classList.remove("red-border");
}
function showMessage(imageNumber){
    let message;
    switch(imageNumber){
        case 1: "Has hecho clic en la imagen 1.";
        break;

        case 2: "er"
    }
}