const gridContainer = document.querySelector("#grid-container");

const createGrid = () => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("rowDiv");
        //rowCell.style.height = "50px";
        //rowCell.style.width = "50px";
        row.setAttribute("style", "border: 0.25px solid black; display: flex; align-content: stretch; flex: 1;");

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
        event.target.classList.add("hover");
    })
})

const myButton = document.querySelector("#myButton");

//When button is clicked
//A prompt window pops up requesting a numerical input
//Check if the input is a number
//Clear the current grid
//Dimension of grid much be 960px wide
//Create a new grid based on the number inputted

myButton.addEventListener("click", () => {
    let userInput = prompt("Enter a number:");

    if (isNaN(Number(userInput)) || Number(userInput > 100)) {
        alert("Please try again.");
    } else if (!isNaN(Number(userInput)) && Number(userInput) > 0 && Number(userInput) < 100) {
        function clearContainer() {
            gridContainer.innerHTML = "";
        }
    
        clearContainer();

        for (let i = 0; i < userInput; i++) {
            const row = document.createElement("div");
            row.classList.add("rowDiv");
            
            row.setAttribute("style", "border: 0.25px solid black; display: flex; align-content: stretch; flex: 1;");
    
            for (let j = 0; j < userInput; j++) {
                const columnCell = document.createElement("div");
                columnCell.classList.add("cell");
                columnCell.setAttribute("style", "border: 0.25px solid black; flex: 1;");
                row.appendChild(columnCell);
                }
    
                gridContainer.appendChild(row);
    
            }

            const myCells = document.querySelectorAll(".cell");

            myCells.forEach(cell => {
                cell.classList.add(".hover");
            })

            myCells.forEach(cell => {
                cell.addEventListener("mouseover", event => {
                    event.target.classList.add("hover");
                })
            })
    }
    
})
