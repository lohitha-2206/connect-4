var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;
var gameOver = false;
var board;
var rows = 6;
var columns = 7;
var currColumns;  // Declare currColumns globally

window.onload = function() {
    Game();
}

function Game() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5]; // Initialize available rows per column

    let boardDiv = document.getElementById("board");
    boardDiv.innerHTML = ""; // Clear any existing content

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(" ");
            
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString(); // ✅ Fix toString() issue
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);

            boardDiv.append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currColumns[c]; // Get the lowest available row for this column

    if (r < 0) {
        return; // If column is full, do nothing
    }
    let turnDisplay = document.getElementById("winner"); // Display turn
    board[r][c] = currPlayer; // Assign piece to the board

    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (!tile) {
        console.error(`Element with id "${r}-${c}" not found!`);
        return;
    }

    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
        turnDisplay.innerText = "Yellow's Turn!";
    } else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
        turnDisplay.innerText = "Red's Turn!";
    }

    r -= 1;  // Move to the next available row
    currColumns[c] = r; // ✅ Fix column tracking

    checkWinner();  // Check if the game has a winner
}

function checkWinner() {
    // Horizontally
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != " ") {
                if (board[r][c] == board[r][c+1] && board[r][c] == board[r][c+2] && board[r][c] == board[r][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // Vertically
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != " ") {
                if (board[r][c] == board[r+1][c] && board[r][c] == board[r+2][c] && board[r][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // Anti-diagonally
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != " ") {
                if (board[r][c] == board[r+1][c+1] && board[r][c] == board[r+2][c+2] && board[r][c] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // Diagonally
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != " ") {
                if (board[r][c] == board[r-1][c+1] && board[r][c] == board[r-2][c+2] && board[r][c] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    winner.innerText = board[r][c] == playerRed ? "Red Wins!" : "Yellow Wins!";
    gameOver = true;
}
