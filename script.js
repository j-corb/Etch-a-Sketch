const container = document.querySelector('#container');

for (i=0; i<256; i++) {
    var grid = document.createElement('div');
    grid.className = 'block';
    grid.classList.add(`${i}`);
    grid.textContent = `${i}`;
    container.appendChild(grid);
}



function sizeSelector() {
    size = Number(prompt('How many columns would you like?'));
    //container.style.cssText = `repeat(${size}, 1fr)`;
    if (size < 101) {
        var canvas = document.querySelectorAll('.block');
        canvas.forEach((block) => {
            block.remove();
        });
      
        for (i=0; i< size**2; i++) {
            var grid = document.createElement('div');
            grid.className = 'block';
            grid.classList.add(`${i}`);
            grid.textContent = `${i}`;

            container.appendChild(grid);
            
        }
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



