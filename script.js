const gridContainer = document.querySelector("#grid-container");

const createGrid = () => {
    for (let i = 0; i < 16; i++) {
        const rowCell = document.createElement("div");
        rowCell.classList.add("rowDiv");
        rowCell.style.height = "50px";
        rowCell.style.width = "50px";
        rowCell.setAttribute("style", "border: 1px solid black; display: flex;");

        for (let j = 0; j < 15; j++) {
            const columnCell = document.createElement("div");
            columnCell.classList.add("columnDiv");
            rowCell.appendChild(columnCell);
            }

            gridContainer.appendChild(rowCell);
        }
    }

createGrid();