var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var hairX = 250;
var hairY = 150;
var hairDirection = 2;

var size = 22;
var count = 0;
var sizeDirection = 2;


function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background(157, 225, 242  );

    //title
    fill(96, 6, 6  );
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

    text('Me at a Griz game!', 5, 250);
    text('GO GRIZ!', 5, 270);

  
    //artist (me)
    textSize(10);
    text('Madison Collins', 370, 500);
    
    //head
    fill(242, 215, 189);
    
    circle(headX,headY,100);
    headX+=headDirection;
    if(headX >= 418 || headX <= 0)
    {
        headDirection *= -1;
    }

   

    //body
    fill(118, 7, 31);
    rect(headX,190,100,200);
    
    headX+=headDirection;
    if(headX >= 418|| headX <= 0)
    {
        headDirection *= -1;
    }
   
  

    //triangle body
    fill(128, 128, 128);
    triangle(220,320,250,220,280,320);
    
    //neck
    fill(255, 255, 255);
    triangle(230,190,250,151,270,190);

    //eyes
    fill(5);
    point(230,80);
    point(270,80);

    //arms
    line(120, 20, 200, 195);
    line(370, 20, 300, 195);

    //mouth
    ellipse(250,110,10,40);

    //hair
    {fill(176, 147, 54  );
    fill(176, 147, 54  );
    ellipse(hairX,hairY,60,40);

    hairX+=hairDirection;
    hairY+=hairDirection
    if(hairX >= 500 || hairX <= 0)
    {
        hairDirection *= -1;
    }
    if(hairY >= 500 || hairY <= 0)
    {
        hairDirection *= -1;
    }
   
   }

    //left leg
    fill(242, 215, 189);
    rect(210,bodyY,30,80);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 545)
    {
        bodyDirection *= -1;
    }
    //right leg
    fill(242, 215, 189);
    rect(260,bodyY,30,80);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 545)
    {
        bodyDirection *= -1;
    }
  
   
    


    
  }
  