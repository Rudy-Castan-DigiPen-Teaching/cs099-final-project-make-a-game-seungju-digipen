// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

let x;
let y;
let dx;
let dy;
let ballRadius = 15;
let ballSpeed = 10;

let paddleHeight = 10;
let paddleWidth = 500;
let paddleX;

let rightPressed = false;
let leftPressed = false;
let gamePlay = true;

let brickRowCount = 5;
let brickColumnCount = 5;
let brickWidth = 300;
let brickHeight = 60;
let brickGap = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];

function setup()
{
    createCanvas( 1600, 1200 );
    x = width / 2;
    y = height / 2
    dx = ballSpeed;
    dy = ballSpeed;
    paddleX = ( width - paddleWidth ) / 2;
    for ( let c = 0; c < brickColumnCount; c++ )
    {
        bricks[ c ] = [];
        for ( let r = 0; r < brickRowCount; r++ )
        {
            bricks[ c ][ r ] = {
                x: 0,
                y: 0
            };
        }
    }
}

function draw()
{
    background( 120 );
    if ( gamePlay )
    {
        drawBall();
        drawPaddle();
        keyInput();
        paddleMoving();
        drawBricks();
        x += dx;
        y += dy;
        if ( x + dx > width - ballRadius || x + dx < ballRadius )
        {
            dx = -dx;
        }
        if ( y + dy < ballRadius )
        {
            dy = -dy;
        }
        else if ( y + dy > height - ballRadius )
        {
            if ( x > paddleX && x < paddleX + paddleWidth )
            {
                dy = -dy;
            }
            else
            {
                gamePlay = false;
            }
        }
    }
}

function drawBall()
{
    circle( x, y, 30 );
}

function drawPaddle()
{
    rect( paddleX, height - paddleHeight, paddleWidth, paddleHeight );
}

function keyInput()
{
    if ( keyIsDown( LEFT_ARROW ) )
    {
        leftPressed = true;
    }
    else
    {
        leftPressed = false;
    }

    if ( keyIsDown( RIGHT_ARROW ) )
    {
        rightPressed = true;
    }
    else
    {
        rightPressed = false;
    }
}

function paddleMoving()
{
    if ( rightPressed )
    {
        paddleX += 10;
    }
    if ( leftPressed )
    {
        paddleX -= 10;
    }
}

function drawBricks()
{
    for ( let c = 0; c < brickColumnCount; c++ )
    {
        for ( let r = 0; r < brickRowCount; r++ )
        {
            let brickX = ( c * ( brickWidth + brickGap ) ) + brickOffsetLeft;
            let brickY = ( r * ( brickHeight + brickGap ) ) + brickOffsetTop;
            bricks[ c ][ r ].x = brickX;
            bricks[ c ][ r ].y = brickY;
            rect( brickX, brickY, brickWidth, brickHeight );
        }
    }
}
