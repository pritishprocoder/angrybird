class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/ball.jpg");
  }

  display() {
    //this.body.position.x = mouseX;
    //sthis.body.position.y = mouseY;
    super.display();
  }
}
