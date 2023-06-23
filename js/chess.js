import { renderHeader } from '../js/header.js';
renderHeader();

const formDOM = document.querySelector('form');
const inputDOM = formDOM.querySelector('input');
const boardDOM = document.querySelector('.board');

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(inputDOM.value);

    if (number > 0 && number % 1 === 0) {
        renderChessBoard(number);
    }
});

function renderChessBoard(size = 8) {
    let blackHTML = '';
    let whiteHTML = '';
    let HTML = '';

    for (let m = 0; m < size; m++) {
        blackHTML += `<div class="cell ${m % 2 === 0 ? 'black' : ''}"></div>`;
        whiteHTML += `<div class="cell ${m % 2 === 0 ? '' : 'black'}"></div>`;
    }

    for (let i = 0; i < size; i++) {
        HTML += `<div class="row">${i % 2 === 0 ? blackHTML : whiteHTML}</div>`
    }

    boardDOM.innerHTML = HTML;
}

renderChessBoard();



/*
// Create a center tag to center all the elements
let parentDiv = document.querySelector("#board");

let alphas = "abcdefgh".split("");
let nums = "87654321".split("");

// Create a table element
let ChessTable = document.createElement("div");

for (let i = 0; i < 8; i++) {
// Create a row
let divRow = document.createElement("div");
divRow.setAttribute("class", "div-row");
for (let j = 0; j < 8; j++) {
// Create a cell
let divData = document.createElement("div");
let boxId = alphas[j] + nums[i];

// If the sum of cell coordinates is even
// then color the cell white
if ((i + j) % 2 == 0) {
// Create a class attribute for all white cells
divData.setAttribute("class", "piece-box white-box");
divData.setAttribute("id", boxId);
divRow.appendChild(divData);
}

// If the sum of cell coordinates is odd then
// color the cell black
else {
// Create a class attribute for all black cells
divData.setAttribute("class", "piece-box black-box");
divData.setAttribute("id", boxId);
// Append the cell to its row
divRow.appendChild(divData);
}
}

// Append the row
parentDiv.appendChild(divRow);
}

// Modifying table attribute properties
parentDiv.setAttribute("cellspacing", "0");
document.body.appendChild(parentDiv);
*/