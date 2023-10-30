function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background(157, 225, 242  );

    fill(96, 6, 6  );
    textSize(14);
    text('Me at a Griz game!', 5, 250);

    
    textSize(14);
    text('GO GRIZ!', 5, 270);

    textSize(10);
    text('Madison Collins', 370, 500);

    fill(242, 215, 189);
    circle(250,100,100);

    fill(118, 7, 31  );
    rect(200,190,100,200);
    
    fill(128, 128, 128);
    triangle(220,320,250,220,280,320);

    fill(255, 255, 255);
    triangle(230,190,250,151,270,190);

    fill(5);
    point(230,80);
    point(270,80);

    line(120, 20, 200, 195);
    line(370, 20, 300, 195);

    ellipse(250,110,10,40);

    fill(176, 147, 54  );
    ellipse(250,30,60,40);

    fill(242, 215, 189);
    rect(260,390,30,80);
    rect(210,390,30,80);
  }
  