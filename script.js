const container = document.querySelector('#container');

for (i=0; i<256; i++) {
    var grid = document.createElement('div');
    grid.className = 'block';
    grid.classList.add(`${i}`);
    grid.textContent = `${i}`;
    container.appendChild(grid);
}



const canvas = document.querySelectorAll('.block');

canvas.forEach((block) => { 
    block.addEventListener("mouseover", () => {
        block.classList.toggle('colorful');
    });
});
