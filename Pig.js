class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.pig72 = 255  }
display(){
  if(this.body.speed>3){
    console.log(this.body.speed)
    push()
World.remove(world,this.body)
this.pig72 = this.pig72-5
tint(255,this.pig72)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop()
  }
  else{ 
    super.display()  }

}
}