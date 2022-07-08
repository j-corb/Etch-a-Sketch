const container = document.querySelector('#container');

for (i=0; i<256; i++) {
    var grid = document.createElement('div');
    grid.className = 'block';
    grid.classList.add(`${i}`);
    grid.setAttribute('style', `display: flex; min-width: 50px; min-height: 50px; `)
    //grid.textContent = `${i}`;
    container.appendChild(grid);
}

function sizeSelector() {
    size = Number(prompt('How many columns would you like?'));
    if (size < 101) {
        var canvas = document.querySelectorAll('.block');
        canvas.forEach((block) => {
            block.remove();
        });
      hw = 800/size;
        for (i=0; i< size**2; i++) {
            var grid = document.createElement('div');
            grid.className = 'block';
            //grid.textContent = `${i}`;
            grid.setAttribute('style', `display: flex; min-width: ${hw}px; min-height: ${hw}px; `)
            container.appendChild(grid);
        }
        container.setAttribute('style', `grid-template-columns: repeat(${size},1fr); column-gap: 0px;`);
        canvas = document.querySelectorAll('.block');

        canvas.forEach((block) => { 
            block.addEventListener("mouseover", () => {
                block.classList.toggle('colorful');
            });
        });
        erase.addEventListener('click', () => {
            canvas.forEach((block) => {
                block.classList.remove('colorful')
            })
        })
        
    } else {
        alert("Please select a number less than 101 for the sake of the computer.")
    }
}
var canvas = document.querySelectorAll('.block');

canvas.forEach((block) => { 
    block.addEventListener("mouseover", () => {
        block.classList.toggle('colorful');
    });
});

const btn = document.querySelector('.chooser');
const erase = document.querySelector('.clearer');
btn.addEventListener('click', sizeSelector);
erase.addEventListener('click', () => {
    canvas.forEach((block) => {
        block.classList.remove('colorful')
    })
})




