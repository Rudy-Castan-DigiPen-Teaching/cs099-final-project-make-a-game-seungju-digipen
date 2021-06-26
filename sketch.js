// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

let playerScore = 0
let paddle
let ball
let bricks = []
let gameState

let backgroundMusic
let paddleSound
let brickSound

function preload()
{
    paddleSound = loadSound( 'assets/ballhitpaddle.mp3' );
    brickSound = loadSound( 'assets/ballhitbricks.wav' );
    backgroundMusic = loadSound( 'assets/Fly With Me.mp3' );
}

function setup()
{
    createCanvas( 1600, 1200 )
    gameState = 'playing'
    paddle = new Paddle()
    ball = new Ball( paddle )
    const rows = 10
    const bricksPerRow = 16
    const brickWidth = width / bricksPerRow
    backgroundMusic.loop();
    for ( let row = 0; row < rows; row++ )
    {
        for ( let i = 0; i < bricksPerRow; i++ )
        {
            brick = new Brick( new Vec2( brickWidth * i, 40 * row ), brickWidth, 40, color( 265, 165, 0 ) )
            bricks.push( brick )
        }
    }

}

function draw()
{
    if ( gameState == 'playing' )
    {
        background( 120 )

        paddle.draw()
        if ( keyIsDown( LEFT_ARROW ) )
        {
            paddle.move( 'left' )
        }
        else if ( keyIsDown( RIGHT_ARROW ) )
        {
            paddle.move( 'right' )
        }

        ball.draw()
        ball.update()
        ball.bounceEdge()
        ball.bouncePaddle()

        for ( let i = bricks.length - 1; i >= 0; i-- )
        {
            const brick = bricks[ i ]
            if ( brick.isColliding( ball ) )
            {
                ball.reverseY()
                bricks.splice( i, 1 )
                playerScore += brick.points
                paddle.location.y -= 5
                brickSound.play()
            }
            else
            {
                brick.draw()
            }
        }

        fill( 255 )
        textSize( 32 )
        text( "Score : " + playerScore, width - 200, 30 )

        if ( ball.offBottom() )
        {
            gameState = 'LOSE'
        }

        if ( bricks.length === 0 )
        {
            gameState = 'WIN'
        }

    }
    else
    {
        push()
        fill( 255 )
        textAlign( CENTER )
        textSize( 128 )
        text( "YOU " + gameState, width / 2, height / 2 )
        pop()
        backgroundMusic.pause();
    }
}
