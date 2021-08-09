const button = document.querySelector('.button');
const container = document.querySelector('#container');

const canvas = document.createElement('canvas');
canvas.setAttribute('class', 'canvas');
container.append(canvas)

const containerHeight = container.getBoundingClientRect().height;
const containerWidth = container.getBoundingClientRect().width;

canvas.setAttribute("style",`height: ${containerHeight}px; width: ${containerWidth}px;`)

const ctx = canvas.getContext('2d');

let count = 10

const column = containerWidth / count;
const row = containerHeight / count;

// for (let i=0; i <= 10; i++) {
    
//     if(i == 0) {
//         ctx.beginPath();
//         ctx.fillStyle = 'yellow';
//         ctx.strokeStyle = 'red';
//         ctx.fillRect(0, 0, row, column);
//     } else {
//         ctx.beginPath();
//         ctx.fillStyle = 'yellow';
//         ctx.strokeStyle = 'red';
//         ctx.fillRect(0 + count, 0 + count, row, column);
//     }
    

//     count += count;

// }




let painting = false;

// let count = 0;

// for(let i=0; i < 10; i++) {
//     container.style.gridTemplateColumns = `repeat(${i}, 1fr)`
//     container.style.gridTemplateRows = `repeat(${i}, 1fr)`
//     count++;
// }

// count--;

// const countTotal = (count*count);


// for(let i=0; i < countTotal; i++) {
//     const divs = document.createElement('div');
//     divs.classList.add('main');
//     container.appendChild(divs);
    
// }

// const containerHeight = container.getBoundingClientRect().height;
// const containerWidth = container.getBoundingClientRect().width;

// const canvasHeight = containerHeight / (count + 1);
// const canvasWidth = containerWidth / (count + 1);


// for(let i=0; i < countTotal; i++) {

//     let canvas = document.querySelector('.main' + [i]);
    
//     canvas.setAttribute("style",`height: ${canvasHeight}px; width: ${canvasWidth}px;`)

// }



const main = Array.from(document.querySelectorAll('.main'));


function mainDraw(e) {
    
    // if (!painting) return;

    
    // ctx.lineWidth = 5;
    // ctx.lineCap = 'round'
    // ctx.strokeStyle = 'green';

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'red';
    ctx.fillRect(e.offsetX, e.offsetY, row, column);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(e.offsetX, e.offsetY)
    // ctx.lineTo(e.offsetX, e.offsetY);
    // ctx.stroke();

}

// function startDrawing() {
//     painting = true;
// }

// function stopDrawing(e) {
//     painting = false;
    
//      ctx.beginPath();

// }


// main.forEach(main => main.addEventListener('mousemove', mainDraw))
// main.forEach(main => main.addEventListener('mousedown', startDrawing))
// main.forEach(main => main.addEventListener('mouseup', stopDrawing))

container.addEventListener('mousemove', mainDraw)
// container.addEventListener('mousedown', startDrawing)
// container.addEventListener('mouseup', stopDrawing)