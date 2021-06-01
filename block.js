// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021
//블록, 맵을 구성하는 기본적 단위

class Block
{
    constructor( x, y, w, h )
    {
        this.position = new Vec2( x, y );
        this.width = w;
        this.height = h;
    }

    update( player )
    {
        if ( player.position.x <= this.width )
        {

        }
    }

    draw()
    {
        push();
        rectMode( CENTER );
        fill( 'orange' );
        rect( this.position.x, this.position.y, 30, 30 );
        pop();
    }
}

