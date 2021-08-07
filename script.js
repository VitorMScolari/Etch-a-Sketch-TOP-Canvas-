const divs = document.createElement('div');
const container = document.querySelector('.container');
const button = document.querySelector('.button');

for(let i=0; i < 10; i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    container.append(divs);
}


/*
function gridNumbers(e) {
    div.remove(divs);
}

*/


/*
button.addEventListener('click', gridNumbers);

*/