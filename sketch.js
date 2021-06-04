// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021
function make2DArray( cols, rows )
{
    let arr = new Array( cols );
    for ( let i = 0; i < arr.length; i++ )
    {
        arr[ i ] = new Array( rows );
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 80;


function setup()
{
    createCanvas( 1600, 1200 );
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray( cols, rows );
    for ( let i = 0; i < cols; i++ )
    {
        for ( let j = 0; j < rows; j++ )
        {
            grid[ i ][ j ] = floor( random( 2 ) );
        }
    }
}

function draw()
{
    background( 255 );

    for ( let i = 0; i < cols; i++ )
    {
        for ( let j = 0; j < rows; j++ )
        {
            let x = i * resolution;
            let y = j * resolution;
            if ( grid[ i ][ j ] == 1 )
            {
                fill( 0, 255, 0 );
                stroke( 0 );
                rect( x, y, resolution - 1, resolution - 1 );
            }
        }
    }

    let next = make2DArray( cols, rows );

    // Compute next based on grid
    for ( let i = 0; i < cols; i++ )
    {
        for ( let j = 0; j < rows; j++ )
        {

        }
    }

    grid = next;
}

function countNeighbors( grid, x, y )
{
    let sum = 0;
    for ( let i = -1; i < 2; i++ )
    {
        for ( let j = -1; j < 2; j++ )
        {
            let col = ( x + i + cols ) % cols;
            let row = ( y + j + rows ) % rows;
            sum += grid[ col ][ row ];
        }
    }
    sum -= grid[ x ][ y ];
    return sum;
}


function mousePressed()
{
    if ( mouseButton === LEFT )
    {
        let i = round( mouseX / resolution );
        let j = round( mouseY / resolution );
        grid[ i ][ j ] = 1;
    }
}
