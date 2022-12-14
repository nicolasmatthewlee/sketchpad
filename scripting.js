const gridsize=500;
const gridlength=30;
const gap=0;

let color = 'black';
let mousedown = false;

const blocksize = (gridsize-((gridlength-1)*gap))/gridlength;

// create grid_container and add to DOM
const grid_container = document.createElement('div');

// set css properties
grid_container.style.display = 'flex';
grid_container.style.justifyContent = 'center';

// add grid_container to DOM
document.body.appendChild(grid_container);

// create grid and add to DOM
const grid = document.createElement('div');
grid.setAttribute('id','grid');
grid.style.userSelect = 'none';

// set css properties
grid.style.display = 'grid';

grid.style.width = gridsize+'px';
grid.style.height = gridsize+'px';
grid.style.rowGap = gap+'px';
grid.style.columnGap = gap+'px';

// add grid to DOM
grid_container.appendChild(grid); 

// create block elements and add to grid

for (let row=0;row<gridlength;row++) {

    for (let col=0;col<gridlength;col++) {
        const block = document.createElement('div');
        block.setAttribute('id','block');

        // set grid positions
        block.style.gridColumnStart=col;
        block.style.gridColumnEnd=col+1;
        block.style.gridRowStart=row;
        block.style.gridRowEnd=row+1;

        // css properties
        block.style.height = blocksize+'px';
        block.style.width = blocksize+'px';
        block.style.fontSize = '8px';
        block.style.textAlign = 'center';
        block.style.backgroundColor = 'yellow';

        // hovering change color
        block.addEventListener('mouseover',() => {if (mousedown==true) { block.style.backgroundColor=color}});
        
        grid.appendChild(block);
    }

}

function clear_grid() {
    blocks = grid.querySelectorAll('#block');
    block_array = Array.from(blocks);
    block_array.map(block => block.style.backgroundColor='yellow');
}

// clear button
const clear_button_container = document.createElement('div');
clear_button_container.style.display = 'flex';
clear_button_container.style.justifyContent = 'center';
clear_button_container.style.padding = '20px';
document.body.appendChild(clear_button_container);

const clear_button = document.createElement('button');
clear_button.textContent = 'Clear';
clear_button.style.backgroundColor = 'red';
clear_button.style.color = 'white';
clear_button.style.borderRadius = '10px';
clear_button.style.height = '40px';
clear_button.style.width = '80px';
clear_button.style.fontSize = '20px';
clear_button.style.borderColor = 'rgb(255, 94, 94)';
clear_button.addEventListener('click',clear_grid)
clear_button_container.appendChild(clear_button);

// add functionality to change color upon mouse click

function changecolor() {
    const colors = ['red','blue','orange','black'];
    next=colors.indexOf(color)+1;
    if (next>=colors.length) {
        next=0;
    }
    color=colors[next];
    console.log(color);
}

addEventListener('dblclick',changecolor);

// add help button

const help_button = document.createElement('button');
help_button.textContent = '?';
help_button.style.fontSize = '20px';
help_button.style.fontWeight = '600';
help_button.style.fontFamily = 'Courier New, Courier, monospace';
help_button.style.width = '40px';
help_button.style.height = '40px';
help_button.style.borderRadius = '20px';
help_button.style.marginLeft = '20px';
clear_button_container.appendChild(help_button);
help_button.addEventListener('click',() => alert('Mouse down over the sketching area to draw. Double click to change colors.'));

// listen for mousedown or mouseup
addEventListener('mousedown', () => mousedown=true);
addEventListener('mouseup', () => mousedown=false);