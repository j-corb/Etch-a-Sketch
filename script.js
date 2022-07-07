const container = document.querySelector('#container');

for (i=0; i<256; i++) {
    var grid = document.createElement('div');
    grid.className = 'block';
    grid.classList.add(`${i}`);
    grid.textContent = `${i}`;
    grid.addEventListener("mouseover", changer);

    container.appendChild(grid);
}

function changer() {
    alert('ah');
}

