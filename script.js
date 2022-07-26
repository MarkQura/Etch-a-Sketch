const center = document.querySelector(".center");
const input = document.querySelector(".slider");
let btnArr = Array.from(document.querySelectorAll("button"));

let gridSize = 16;

let removeDivs = number => {
    for (let i = 0; i < number; ++i) {
        center.removeChild(center.children[gridSize**2 - 1 - i]);
    }
} 

let addDivs = number => {
    for (let i = 0; i < number; ++i) {
        let cont = document.createElement("div");
        cont.classList.add("sketch");
        center.appendChild(cont);
    }
} 

for (let i = 0; i < gridSize**2; ++i) {
    let cont = document.createElement("div");
    cont.classList.add("sketch");
    center.appendChild(cont);
}

input.addEventListener("mousemove", () => {
    let temp = input.value;
    document.querySelector(".sliderText").innerText = `${temp} x ${temp}`;
});

input.addEventListener("change", () => {
    let temp = +input.value;
    
    if (temp < gridSize) {
        removeDivs(gridSize**2 - temp**2);
        center.style.gridTemplateColumns = `repeat(${temp}, 1fr)`;
        center.style.gridTemplateRows = `repeat(${temp}, 1fr)`;
    } else if (temp > gridSize) {
        center.style.gridTemplateColumns = `repeat(${temp}, 1fr)`;
        center.style.gridTemplateRows = `repeat(${temp}, 1fr)`;
        addDivs(temp**2 - gridSize**2);
    }

    gridSize = temp;
});