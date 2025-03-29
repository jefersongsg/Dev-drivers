let prev = document.getElementById("buttonL");
let next = document.getElementById("buttonR");
let container = document.querySelector(".container");
let car = container.querySelectorAll(".list .cars");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = car.length - 1;

function slide() {
    let destiv = container.querySelector(".list .cars.active");
    destiv.classList.remove("active")

    let destiv2 = indicator.querySelector("ul li.active");
    destiv2.classList.remove("active")
    dots[active].classList.add("active");

    let formattedNumber = active < 9 ? "0" + (active + 1) : active + 1;
    indicator.querySelector(".numbers").innerHTML = formattedNumber;
}
next.onclick = () => {   
    active = active + 1 > lastPosition ? 0 : active + 1;
    slide();
    car[active].classList.add("active");
};

prev.onclick = () => {  
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    slide();
    car[active].classList.add("active");
};