document.addEventListener('DOMContentLoaded', () => {
    const tetrisBoard = document.getElementById('tetris-board');
    const boardWidth = 10;
    const boardHeight = 20;
    const grid = [];
  
    // Crear el tablero de Tetris
    for (let y = 0; y < boardHeight; y++) {
      for (let x = 0; x < boardWidth; x++) {
        const block = document.createElement('a-box');
        block.setAttribute('position', `${x - boardWidth / 2} ${boardHeight - y - 1} 0`);
        block.setAttribute('width', '1');
        block.setAttribute('height', '1');
        block.setAttribute('depth', '1');
        block.setAttribute('color', '#ccc');
        block.setAttribute('visible', 'false'); // Hacer los bloques invisibles inicialmente
        tetrisBoard.appendChild(block);
        grid.push(block);
      }
    }
  
    // Función para mostrar un bloque (esto es solo una demostración)
    function showBlock(x, y) {
      const index = y * boardWidth + x;
      if (index >= 0 && index < grid.length) {
        grid[index].setAttribute('visible', 'true');
        grid[index].setAttribute('color', '#F00'); // Color rojo para indicar que el bloque está visible
      }
    }
  
    // Mostrar un bloque aleatorio como ejemplo
    setInterval(() => {
      const x = Math.floor(Math.random() * boardWidth);
      const y = Math.floor(Math.random() * boardHeight);
      showBlock(x, y);
    }, 1000);
  });
  
  