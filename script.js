let prev = document.getElementById("buttonL");
let next = document.getElementById("buttonR");
let container = document.querySelector(".container");
let car = container.querySelectorAll(".list .cars");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = car.length - 1;

next.onclick = () => {
    let destiv = container.querySelector(".list .cars.active");
    destiv.classList.remove("active")
    
    active = active + 1 > lastPosition ? 0 : active + 1;
    car[active].classList.add("active");
    
    let destiv2 = indicator.querySelector("ul li.active");
    destiv2.classList.remove("active")
    dots[active].classList.add("active");
};

prev.onclick = () => {
    let destiv = container.querySelector(".list .cars.active");
    destiv.classList.remove("active")
    
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    car[active].classList.add("active");
    
    let destiv2 = indicator.querySelector("ul li.active");
    destiv2.classList.remove("active")
    dots[active].classList.add("active");
};