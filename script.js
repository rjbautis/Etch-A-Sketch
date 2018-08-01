var div;
const size = 600;    // Same as width, height of container

function setUp() {
   div = document.createElement('div');

   // Grid container
   div.setAttribute('class', 'container');
   document.body.appendChild(div);
}

function createGrid(row, col) {
   for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
         let square = document.createElement('div');

         // Assign id to each square
         square.setAttribute('class', 'square');

         // Assign width and height proportional to the width and height of the container
         // Divide by the amount of squares per column
         square.setAttribute('style', 'width: ' + (size/ col) + 'px; height: ' + (size/ row) + 'px;');

         div.appendChild(square);
      }
   }
   // Initialize default brush
   paint('black');

   // Initialize all other brushes
   eraser();
   blackBrush();
   rainbowBrush();

   // Initialize clear and size buttons
   clear();
}

function eraser() {
   let eraserBtn = document.querySelector('#eraserBtn');
   eraserBtn.addEventListener('click', () => paint('transparent'));
}

function blackBrush() {
   let blackBtn = document.querySelector('#blackBtn');
   blackBtn.addEventListener('click', () => paint('black'));
}

function rainbowBrush() {
   let rainbowBtn = document.querySelector('#rainbowBtn');
   rainbowBtn.addEventListener('click', () => paint('rainbow'));
}


// Need to finish
function pencilBrush() {
   let pencilBtn = document.querySelector('#pencilBtn');
}



function clear() {
   let clearBtn = document.querySelector('#clearBtn');

   clearBtn.addEventListener('click', () => {
      let squares = document.querySelectorAll('.square');
      squares.forEach.call(squares, function(e) {
         e.style.backgroundColor = 'transparent';
      });      
   });
}

function setSize() {
   let setBtn = document.querySelector('#setBtn');

   setBtn.addEventListener('click', () => {
      console.log("hi");
      var newRow = prompt('Enter number of Rows:');
      var newCol = prompt('Enter number of Columns:');

      if (newRow == null || newCol == null) {
         return;
      }

      // Delete the div from document body tag
      document.body.removeChild(div);

      row = newRow;
      col = newCol;
      setUp();
      createGrid(row, col);
   })
}

function paint(color) {
   let squares = document.querySelectorAll('.square');
   squares.forEach.call(squares, function(e) {
      e.addEventListener('mouseover', () => {
         if (color === 'rainbow') {
            e.style.backgroundColor = 'rgb(' + generateColors() + ',' + 
                                       generateColors() + ',' + generateColors() + ')';
         } else {
            e.style.backgroundColor = color;
         }
      });
   });
}

function generateColors() {
   return Math.floor(Math.random() * 256);
}


setUp();
createGrid(16, 16);
setSize();
