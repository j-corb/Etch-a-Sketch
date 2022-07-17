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
    if (size < 101 && size > 0) {
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
                block.classList.add('colorful');
            });
        });
        //can simplify by putting all the event listeners within the forEach and remove the nested for each ?
        clear.addEventListener('click', () => {
            canvas.forEach((block) => {
                block.classList.remove('colorful');
            })
        })  
        eraser.addEventListener('click', () => {
            canvas.forEach((block) => {
                block.addEventListener("mouseover", () => {
                    block.classList.remove('colorful');
                })
            })
        });
        draw.addEventListener('click', () => {
            canvas.forEach((block) => {
                block.addEventListener("mouseover", () => {
                    block.classList.add('colorful');
                }) 
            })
        }); 
        /*color.addEventListener('click', () => {
            canvas.forEach((block) => {
                block.addEventListener("mouseover", () => {
                    block.style.cssText=`background-color: ${colorList[Math.floor(Math.random() * colorList.length)]}`;
                })
            })
        })*/
    } else {
        alert("Please select a valid number greater than 0 and less than 101 for the sake of the computer.")
    }
}

function eraseIt () {
    canvas.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.classList.remove('colorful');
        })
    })
}

function drawing () {
    canvas.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.classList.add('colorful');
        })
    })
}
/*colorList = ['red', 'blue', 'yellow', 'violet', 'orange', 'green', 'indigo'];

function rainbows () {
    canvas.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.classList.remove('colorful');
            block.style.cssText=`background-color: ${colorList[Math.floor(Math.random() * colorList.length)]}`;
        })
    })
}
*/

var canvas = document.querySelectorAll('.block');

canvas.forEach((block) => { 
    block.addEventListener("mouseover", () => {
        block.classList.add('colorful');
    });
});

const btn = document.querySelector('.chooser');
const clear = document.querySelector('.clearer');
const eraser = document.querySelector('.eraser');
const draw = document.querySelector('.draw');
const color = document.querySelector('.rainbow');

btn.addEventListener('click', sizeSelector);
clear.addEventListener('click', () => {
    canvas.forEach((block) => {
        block.classList.remove('colorful');
    })
})
eraser.addEventListener('click', eraseIt);
draw.addEventListener('click', drawing);
color.addEventListener('click', rainbows);




