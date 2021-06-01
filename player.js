// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

//플레이어 캐릭터

class Player
{
    constructor( start_x, start_y)
    {
        this.position = new Vec2( start_x, start_y );
    }

    update()
    {
        if ( keyIsPressed )
        {
            if ( keyCode === LEFT_ARROW )
            {
                this.position.x -= 5;
            }
            if ( keyCode === RIGHT_ARROW)
            {
                this.position.x += 5;
            }
            if (keyCode === UP_ARROW)
            {
                this.position.y -= 5;
            }
            if (keyCode === DOWN_ARROW)
            {
                this.position.y += 5;
            }
        }
    }

    draw()
    {
        push();
        rectMode(CENTER);
        fill( 'orange' );
        rect( this.position.x, this.position.y, 30, 30 );
        pop();
    }
}
