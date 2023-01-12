let mybutton = document.getElementById("mybtn");
let div = document.querySelector("div");


// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
mybutton.addEventListener("click", clickEvent)
mybutton.addEventListener("mouseover", mouseoverEvent);
mybutton.addEventListener("mouseout", mouseoutEvent);


// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
function clickEvent(){
    let randColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "Welcome To MARLIN'S GROUP !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

function mouseoutEvent(){
    let randColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    div.style.background ="#" + randColor

}

function mouseoverEvent(){
    div.style.background = "url(https://images.pexels.com/photos/12366627/pexels-photo-12366627.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)";
    div.style.backgroundSize = "cover";
}

