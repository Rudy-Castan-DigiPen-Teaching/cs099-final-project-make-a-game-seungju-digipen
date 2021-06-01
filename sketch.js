// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

let DIMENSION = 53.8;
let PLAYER_TURN = 1;
let BlackStone = []
const number_rows = 19;
const number_columns = 19;

function setup()
{
    createCanvas( windowHeight, windowHeight );
    DIMENSION = width / ( number_rows - 1 )
}

function draw()
{
    background( 220 );
    drawGrid();
    BlackStone.draw();
}

function drawGrid()
{
    for ( let row = 0; row < number_rows; ++row )
    {
        const now_y = row * DIMENSION;
        for ( let column = 0; column < number_columns; ++column )
        {
            const now_x = column * DIMENSION;
            line( now_x, 0, now_x, height );

            if ( mouseX > now_x - ( DIMENSION / 2 ) && mouseX < now_x + ( DIMENSION / 2 ) )
            {
                if ( mouseY > now_y - ( DIMENSION / 2 ) && mouseY < now_y + ( DIMENSION / 2 ) )
                {
                    if ( PLAYER_TURN == 1 )
                    {
                        push();
                        rectMode( CENTER );
                        square( now_x, now_y, ( DIMENSION / 2 ) );
                        pop();
                        if ( keyIsPressed && keyCode === 32 )
                        {
                            BlackStone.push( new Blackstone( now_x, now_y ) );
                        }
                    }
                }
            }
        }
        line( 0, now_y, width, now_y );
    }
}

class Blackstone
{
    constructor( start_x, start_y )
    {
        this.x = start_x;
        this.y = start_y
    }
    draw()
    {
        push();
        fill( 0 );
        circle( this.x, this.y, 30 );
        pop();
    }
}
