const container = document.querySelector('#container');
const button = document.querySelector('.button');
const ctx = container.getContext("2d");

let painting = false;


for(let i=0; i < 10; i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    ctx.appendChild(divs);
}

const main = document.querySelectorAll('.main');


function mainDraw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round'


    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

}

function startDrawing() {
    painting = true;
}

function stopDrawing() {
     painting = false;
     ctx.beginPath();
}


main.forEach(main => main.addEventListener('mousemove', mainDraw))
main.forEach(main => main.addEventListener('mousedown', startDrawing))
main.forEach(main => main.addEventListener('mouseup', stopDrawing))


/*
function buttonPop {
    
}
*/

/*
button.addEventListener('click', gridNumbers);
*/