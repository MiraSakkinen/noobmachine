fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(
        data => document.getElementById('print-here').innerHTML
        = data.answer
    );


let a = document.querySelector("a");
a.addEventListener("mouseenter", changeColor);
a.addEventListener("mouseleave",changeColor);

function changeColor(){
    a.classList.toggle("color");
}