let currentPlayer = "X";
let board = Array(9).fill("");

function handleCellClick(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        renderBoard();
        if (checkWin(currentPlayer)) {
            alert(currentPlayer + " wins!");
            resetBoard();
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function renderBoard() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = board[i];
    }
}

function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === player);
    });
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function resetBoard() {
    board = Array(9).fill("");
    currentPlayer = "X";
    renderBoard();
}
