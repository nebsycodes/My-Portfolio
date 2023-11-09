/*css for pacman*/

document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    const gameBoard = document.getElementById('game-board');
    const pacmanSpeed = 2;
    const ghostSpeed = 1;
    
    document.addEventListener('keydown', (event) => {
        movePacman(event.key);
    });

    function movePacman(key) {
        const pacmanRect = pacman.getBoundingClientRect();
        const gameBoardRect = gameBoard.getBoundingClientRect();
        
        switch (key) {
            case 'ArrowUp':
                if (pacmanRect.top > gameBoardRect.top) {
                    pacman.style.top = `${pacmanRect.top - pacmanSpeed}px`;
                }
                break;
            case 'ArrowDown':
                if (pacmanRect.bottom < gameBoardRect.bottom) {
                    pacman.style.top = `${pacmanRect.top + pacmanSpeed}px`;
                }
                break;
            case 'ArrowLeft':
                if (pacmanRect.left > gameBoardRect.left) {
                    pacman.style.left = `${pacmanRect.left - pacmanSpeed}px`;
                }
                break;
            case 'ArrowRight':
                if (pacmanRect.right < gameBoardRect.right) {
                    pacman.style.left = `${pacmanRect.left + pacmanSpeed}px`;
                }
                break;
        }
    }
});
