const gridsize=400;
const gridlength=20;
const gap=1;

const blocksize=(gridsize-((gridlength-1)*gap))/gridlength;


// create grid_container and add to DOM
const grid_container = document.createElement('div');

// set css properties
grid_container.style.display = 'flex';
grid_container.style.justifyContent = 'center';
grid_container.style.backgroundColor = 'blue';

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

grid.style.backgroundColor = 'red';

// add grid to DOM
grid_container.appendChild(grid); 



// create block elements and add to grid

for (let row=0;row<gridlength;row++) {

    for (let col=0;col<gridlength;col++) {
        const block = document.createElement('div');

        block.style.height = blocksize+'px';
        block.style.width = blocksize+'px';

        // set grid positions
        block.style.gridColumnStart=col;
        block.style.gridColumnEnd=col+1;
        block.style.gridRowStart=row;
        block.style.gridRowEnd=row+1;
        
        block.style.backgroundColor = 'yellow';
        
        grid.appendChild(block);
    }

}

