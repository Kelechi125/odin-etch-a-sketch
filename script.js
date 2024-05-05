const gridContainer = document.querySelector("#grid-container");

const createGrid = () => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("rowDiv");
        //rowCell.style.height = "50px";
        //rowCell.style.width = "50px";
        row.setAttribute("style", "border: 0.25px solid black; display: flex; gap: 1px; align-content: stretch; flex: 1;");

        for (let j = 0; j < 16; j++) {
            const columnCell = document.createElement("div");
            columnCell.classList.add("cell");
            columnCell.setAttribute("style", "border: 0.25px solid black; flex: 1;");
            row.appendChild(columnCell);
            }

            gridContainer.appendChild(row);

        }
        //return;
    }

createGrid();



const myCells = document.querySelectorAll(".cell");

myCells.forEach(cell => {
    cell.classList.add(".hover");
})

myCells.forEach(cell => {
    cell.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
})


