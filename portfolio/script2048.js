/*js for games 2048*/

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const SIZE = 4;
    let cells = [];

    // Initialize the game board
    function initBoard() {
        for (let i = 0; i < SIZE; i++) {
            let row = [];
            for (let j = 0; j < SIZE; j++) {
                let cell = document.createElement('div');
                cell.classList.add('tile');
                row.push(cell);
                board.appendChild(cell);
            }
            cells.push(row);
        }
    }

    // Add a random tile to the board
    function addRandomTile() {
        let emptyCells = [];
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if (!cells[i][j].innerText) {
                    emptyCells.push({ row: i, col: j });
                }
            }
        }

        if (emptyCells.length > 0) {
            let { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            cells[row][col].innerText = Math.random() < 0.9 ? '2' : '4';
            cells[row][col].classList.add(`tile-${cells[row][col].innerText}`);
        }
    }

    // Move and merge tiles based on the direction
    function moveTiles(direction) {
        // Implement your move and merge logic here
        // Update the UI and check for game over conditions
    }

    // Initialize the game
    initBoard();
    addRandomTile();
    addRandomTile();

    // Handle key events
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            moveTiles(event.key);
            addRandomTile();
            // Implement game over logic here
        }
    });
});
