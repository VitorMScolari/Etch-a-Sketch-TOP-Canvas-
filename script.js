const button = document.querySelector('.button');
const container = document.querySelector('#container');
// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');

let painting = false;


for(let i=0; i <= 10; i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    container.appendChild(divs);
}

const main = document.querySelectorAll('.main');

for(let i=0; i <= 10; i++) {
    const canvas = document.createElement('canvas');
    canvas.classList.add('draw')
    const ctx = canvas.getContext('2d');
    main.append(canvas)
}


// ctx.width = main.innerWidth;
// ctx.height = main.innerHeight;


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