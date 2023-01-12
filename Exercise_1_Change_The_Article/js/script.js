// Using a DOM property, retrieve the h1 and console.log it.
let H1 = document.querySelector('h1');
console.log(H1);


// Using DOM methods, remove the last paragraph in the <article> tag.
let paragraph = document.getElementsByTagName('p');
let dernierPara = paragraph[3];
dernierPara.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let ClickOnH2 = document.querySelector('h2');
ClickOnH2.addEventListener('click', function onClick(event){ClickOnH2.style.background = 'red'})


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let ClickOnH3 = document.querySelector('h3');
ClickOnH3.addEventListener('click', function onClick(event){ClickOnH3.style.display = 'none'})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
button.addEventListener("click", infos);
function infos(){
    let myParagraphe = document.querySelectorAll('p');
        for(let p of myParagraphe){
            p.style.fontWeight = "bold";
        }
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
H1.onmouseover = function(){
    this.style.fontSize = "50px";
}
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let paragraphe2 = document.getElementById('p2');
paragraphe2.addEventListener('mouseover',() => {
    paragraphe2.style.animation = "fadeOut 1s";
    })