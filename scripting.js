const gridsize=500;
const gridlength=30;
const gap=0;

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
        block.addEventListener('mouseover',() => block.style.backgroundColor='black')
        
        grid.appendChild(block);
    }

}

function clear_grid() {
    blocks = grid.querySelectorAll('#block');
    block_array = Array.from(blocks);
    block_array.map(block => block.style.backgroundColor='yellow');
}

// reset button
reset_button = document.createElement('button');
reset_button.textContent = 'Clear Sketchpad';
reset_button.addEventListener('click',clear_grid);
document.body.appendChild(reset_button);
