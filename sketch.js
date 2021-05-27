var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png", "cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png", "mouse3.png")
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = ceateSprite(900,50,20,20)
    cat.addAnimation(catimg1)
    cat.addAnimation(catimg2)

    mouse = createSprite(100,50,20,20)
    mouse.addAnimation(mouseimg1)
    mouse.addAnimation(mouseimg2)

    

  
}

function draw() {
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catRunning", catimg2);
        cat.changeAnimation("catRunning")
    }

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25
 }


}
