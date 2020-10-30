const container = document.querySelector('#container');

//Make grid function + styles
function makeGrid(number) {
for (i = 0; i < (number * number); i++) {
        container.style.gridTemplateColumns = `repeat(${number}, auto)`;
        const square1 = document.createElement('div');
        square1.classList.add('square1');
        let size = 700/number
        square1.style.width = size;
        square1.style.height = size;
        container.appendChild(square1);
    }
}

//Random Color Function
function randomColor() {
    let squares = document.querySelectorAll('.square1');
    squares.forEach(function(square1) {
        square1.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
              square1.style.backgroundColor = "#" + randomColor;
            });
    })   
}

//New Grid Size function
function newSize(number) { 
    let squareAll = document.querySelectorAll(".square1");
            squareAll.forEach(function(square1) {
                square1.remove();
            })
            makeGrid(number);
        }
        
 //reload page function
 function reload() {
    location.reload(); 
}

//Gradient Function
function gradientColor() {
    let r = 240;
    let g = 240;
    let b = 240;
    let squares = document.querySelectorAll('.square1');
    squares.forEach(function(square1) {
        square1.addEventListener('mouseover', () => {
              square1.style.backgroundColor = `rgb(${r-- + ',' + ' ' } ${g-- + ',' + ' ' + b--})`
            });
    }) 
}

//Color Black Function
function colorBlack() {
    let squares = document.querySelectorAll('.square1');
    squares.forEach(function(square1) {
        square1.addEventListener('mouseover', () => {
              square1.style.backgroundColor = '#000000'
            });
    })  
}

//Reload page button to reset original grid size
const reset = document.createElement('button');
reset.classList.add('reset');
reset.innerHTML = "Reset";
reset.addEventListener('click', () => {
    reload()
});

buttons.appendChild(reset);

//Button to run new grid size function
const resize = document.createElement('button');
resize.classList.add('resize');
resize.innerHTML = "Change Size";
resize.addEventListener('click' , () => {
    let size = prompt("Enter Size of Grid" , "Enter Number");
        if (size <= 100) {
    newSize(size);
    } else {
        alert('Number Is Too High. Size Must Be Less Than 100.')
    }
});

buttons.appendChild(resize);

//Gradient button    
const gradient = document.createElement('button');
gradient.classList.add('gradient');
gradient.innerHTML = "Gradient";
gradient.addEventListener('click' , () => {
gradientColor();
});

buttons.appendChild(gradient);  

//change to black button
const black = document.createElement('button');
black.classList.add('black');
black.innerHTML = "Color in Black";
black.addEventListener('click' , () => {
colorBlack();
});

buttons.appendChild(black);

//Random Color button
const color = document.createElement('button');
color.classList.add('color');
color.innerHTML = "Random Colors";
color.addEventListener('click' , () => {
randomColor();
});

buttons.appendChild(color);


makeGrid(16);