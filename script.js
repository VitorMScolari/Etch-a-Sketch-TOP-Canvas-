const button = document.querySelector('.button');
const container = document.querySelector('#container');
// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');

let painting = false;

let count = 0;


for(let i=0; i <65; i++) {
    container.style.gridTemplateColumns = `repeat(${i}, 1fr)`
    container.style.gridTemplateRows = `repeat(${i}, 1fr)`
    count++;
}

count--;

const countTotal = (count*count);



for(let i=0; i < countTotal; i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    container.appendChild(divs);

    // let main = document.querySelector('.main');
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'main' + [i]);
    divs.appendChild(canvas)
}



/*
main.forEach((e) => {

    for (let i=0; i <= main.length; i++) {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('class', 'main' + [i]);
        e.appendChild(canvas)
    }

})

const mainBoard = document.querySelectorAll('.main1');
const ctx = mainBoard.getContext('2d');

*/

const main = Array.from(document.querySelectorAll('.main'));


function mainDraw(e) {
    
    if (!painting) return;

    for(let i=0; i <= 10; i++) {

    let mainBoard = document.querySelector('.main' + [i]);

    let ctx = mainBoard.getContext('2d');

    
    ctx.lineWidth = 5;
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'green';


    ctx.beginPath();
    // ctx.moveTo(i.offsetX, i.offsetY)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    }

}

function startDrawing() {
    painting = true;
}

function stopDrawing(e) {
    painting = false;
    
    for(let i=0; i <= 10; i++) {

    let mainBoard = document.querySelector('.main' + [i]);
    let ctx = mainBoard.getContext('2d');

     ctx.beginPath();

    }
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

