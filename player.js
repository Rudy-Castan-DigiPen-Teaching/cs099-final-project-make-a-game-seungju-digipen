// Name       : Seungju Song
// Assignment : make-a-game
// Course     : CS099
// Spring 2021

//플레이어 캐릭터

class Player
{
    constructor( start_x, start_y, speed )
    {
        this.position = new Vec2( start_x, start_y );
        this.velocity = new Vec2( 0, 0 );
        this.velocity.setLength( speed );
    }

    update()
    {
        this.position.addTo( this.velocity );
    }


}
