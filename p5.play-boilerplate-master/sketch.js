const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground1;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4
var bird;
var sling1;
var bg,platform;
var gamestate="onsling";
var score=0;
var slingdrag=0;
function preload()
{
     getTime();
}
function setup()
{
  createCanvas(1200,400);
  myengine=Engine.create();
  myworld=myengine.world;
  
  ground = new Ground(600,height,1200,20)
  platform =new Ground(0,height,500,400);
  bird = new Bird(200,200);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810,260,20,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig3 = new Pig(810, 220);

  log3 =  new Log(810,180,20,300, PI/2);

  box5 = new Box(810,160,70,70);
  log4 = new Log(750,120,20,150,PI/7);
  log5 = new Log(880,120,20,150,-PI/7);

 
  sling1=new Slingshot(bird.body,{x:200,y:50});
}

function draw()
{
  if(bg)
    background(bg);
  noStroke();
  fill("yellow");
  textSize(25);
  text("score:" + score,width-300,50);
  Engine.update(myengine);
  ground.display();
  box1.display();
  box2.display();
  log1.display();
  box3.display();
  box4.display();
  log3.display();
  box5.display();
  log4.display();
  log5.display();
  pig1.display();
  pig3.display();
  pig1.score();
  pig3.score();
  bird.display();
  sling1.display();
  platform.display();
  
}

function mouseDragged()
{
  if(gamestate==="onsling")
  {
      Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
  slingdrag=1;
}

function mouseReleased()
{
  sling1.fly();
  gamestate="launched"
}

function keyPressed()
{
  if(keyCode===32)
  {
    bird.trajectory=[];
    Matter.Body.setPosition(bird.body,{x:200,y:50});
    sling1.attach(bird.body);
    gamestate="onsling";
    slingdrag=0;
  }
}

async function getTime()
{
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON=await response.json();
  console.log(responseJSON);

  var hour=responseJSON.datetime.slice(11,13);
  if(hour>06 && hour<19)
  {
    bg=loadImage("sprites/bg.png");
  }
  else
  {
    bg=loadImage("sprites/bg2.jpg");
  }
  
  
}


