
varX = 50;
varY = 50;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800,800);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    newCharacter(300,300);
}

function draw()
{
    background(17,135,239);
    stroke(0);
    fill(0);
    

    blackBorders(15);

  
    textSize(10);
    text("EXIT", width-50,height-50)

   
    drawCharacter();
    characterMoves();


    
    fill(120,122,14);
    rect(shapeX, 120, shapeY, 210);


     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    fill(120,122,389);
    rect(shapeX, shapeY, 210);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    

   
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(15);
        text("WINNER WINNER CHICKEN DINNER!", width/2-10, height/2-50);
    }


    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 55);
}

function characterMoves()
{
   
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function newCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    
}x

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}
function blackBorders(thickness)
{
  
    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0, height-thickness,width, thickness);
  
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
