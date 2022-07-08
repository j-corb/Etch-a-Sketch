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
            grid.classList.add(`${i}`);
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
    } else {
        alert("Please select a number less than 101 for the sake of the computer.")
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', sizeSelector);

var canvas = document.querySelectorAll('.block');

canvas.forEach((block) => { 
    block.addEventListener("mouseover", () => {
        block.classList.toggle('colorful');
    });
});



