let prev = document.getElementById("buttonL");
let next = document.getElementById("buttonR");
let container = document.querySelector(".container");
let cars = container.querySelectorAll(".list",  ".car");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");

let active = 0;
let firtPosition = 0;
let lastPosition = cars.length - 1;

next.onclick = () => {
    let destiv = container.querySelector(".list" , ".car.active");
    destiv.classList.remove("active")
    
    active = active + 1 > lastPosition ? 0 : active + 1;
    console.log(active);
};

prev.onclick = () => {
    let destiv = container.querySelector(".list" , ".car.active");
    destiv.classList.remove("active")
    
    console.log(active);
   
};