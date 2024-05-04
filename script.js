const gridContainer = document.querySelector("#grid-container");

const createGrid = () => {
    for (let i = 0; i < 16; i++) {
        const rowCell = document.createElement("div");
        rowCell.classList.add("rowDiv");
        //rowCell.style.height = "50px";
        //rowCell.style.width = "50px";
        rowCell.setAttribute("style", "border: 0.25px solid black; display: flex; gap: 1px; align-content: stretch; flex: 1;");

        for (let j = 0; j < 16; j++) {
            const columnCell = document.createElement("div");
            columnCell.classList.add("columnDiv");
            columnCell.setAttribute("style", "border: 0.25px solid black; flex: 1;");
            rowCell.appendChild(columnCell);
            }

            gridContainer.appendChild(rowCell);
        }
    }

createGrid();