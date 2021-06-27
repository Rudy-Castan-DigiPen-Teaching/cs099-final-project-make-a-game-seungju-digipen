// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

class Paddle
{
    constructor()
    {
        this.width = 200
        this.height = 25
        this.color = color( 255 )
        this.location = new Vec2( ( width / 2 - ( this.width / 2 ) ), height - 35 )
        this.speed = new Vec2( 10, 0 )
    }

    draw()
    {
        fill( this.color )
        rect( this.location.x, this.location.y, this.width, this.height )
    }

    move( direction )
    {
        if ( direction === 'right' )
        {
            this.location.addTo( this.speed )
        }
        else if ( direction === 'left' )
        {
            this.location.subtractFrom( this.speed )
        }

        if ( this.location.x < 0 )
        {
            this.location.x = 0
        }
        else if ( this.location.x + this.width > width )
        {
            this.location.x = width - this.width
        }
    }
}
