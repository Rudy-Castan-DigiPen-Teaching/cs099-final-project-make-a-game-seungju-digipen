// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

class Ball
{
    constructor( paddle )
    {
        this.radius = 20
        this.width = this.radius * 2
        this.location = new Vec2( paddle.location.x + ( paddle.width / 2 ), paddle.location.y - ( this.radius -
            5 ) )
        this.color = color( 'blue' )
        this.velocity = new Vec2(floor(random(7, 10)), random(-7, -10))
        this.paddle = paddle
    }

    draw()
    {
        fill( this.color );
        ellipse( this.location.x, this.location.y, this.width, this.width )
    }

    update()
    {
        this.location.addTo( this.velocity )
    }

    bounceEdge()
    {
        //right
        if ( this.location.x + this.radius >= width )
        {
            this.reverseX()
            brickSound.play()
        }
        //left
        else if ( this.location.x - this.radius <= 0 )
        {
            this.reverseX()
            brickSound.play()
        }
        //top
        else if ( this.location.y - this.radius <= 0 )
        {
            this.reverseY()
            this.location.y = 20
            brickSound.play()
        }
    }

    bouncePaddle()
    {
        if ( this.location.x + this.radius >= this.paddle.location.x &&
            this.location.x - this.radius <= this.paddle.location.x + this.paddle.width )
        {
            if ( this.location.y + this.radius > this.paddle.location.y )
            {
                this.reverseY()
                this.location.y = ( this.paddle.location.y - this.radius - 1 )
                paddleSound.play()
            }
        }
        
    
    }

    reverseY()
    {
        this.velocity.y *= -1
    }

    reverseX()
    {
        this.velocity.x *= -1
    }

    offBottom()
    {
        return this.location.y - this.radius > height
    }
}
