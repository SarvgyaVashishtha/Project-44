var player1 , player2 , player1_image , player2_image;
let clock , heart , shield , thunder_bolt , treasure , spike_ball;

function preload(){
player1_image = loadAnimation("Images/Player1/Walk (1).png", "Images/Player1/Walk (2).png", "Images/Player1/Walk (3).png",
"Images/Player1/Walk (4).png", "Images/Player1/Walk (5).png", "Images/Player1/Walk (6).png", "Images/Player1/Walk (7).png",
"Images/Player1/Walk (8).png", "Images/Player1/Walk (9).png", "Images/Player1/Walk (10).png");

player2_image = loadAnimation("Images/Player2/Run__000.png", "Images/Player2/Run__001.png", "Images/Player2/Run__002.png",
"Images/Player2/Run__003.png", "Images/Player2/Run__004.png", "Images/Player2/Run__005.png", "Images/Player2/Run__006.png",
"Images/Player2/Run__007.png", "Images/Player2/Run__008.png", "Images/Player2/Run__009.png");

clock = loadImage("Images/sand clock.png");

heart = loadImage("Images/Heart.png");

shield = loadImage("Images/Shield.png");

thunder_bolt = loadImage("Images/Thunder Bolt.png");

treasure = loadImage("Images/Treasure.png");

spike_ball = loadImage("Images/Spike ball.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
//creating the main two players.
player1 = createSprite(windowWidth/8-140,windowHeight/8-50,20,20);
player1.addAnimation("walking",player1_image);
player1.scale = 0.06;

player2 = createSprite(windowWidth/8-140,windowHeight-20,20,20);
player2.addAnimation("running",player2_image);
player2.scale = 0.07;

maze();
}


function draw(){
background("yellow");
drawSprites();
}

function maze(){
var wall1 = createSprite(80,285,10,460);
var wall1a = createSprite(570,105,10,100);
var wall1b = createSprite(620,105,10,100);
var wall1c = createSprite(520,255,10,300);
var wall1d = createSprite(820,385,10,260);
var wall1e = createSprite(470,205,10,100);  
var wall1f = createSprite(420,255,10,200);
var wall1g = createSprite(420,480,10,150);
var wall1h = createSprite(470,430,10,250);
var wall1i = createSprite(570,230,10,60);
var wall1j = createSprite(370,315,10,200);
var wall1k = createSprite(320,255,10,200);
var wall1l = createSprite(270,315,10,200);
var wall1m = createSprite(220,255,10,200);
var wall1n = createSprite(170,315,10,200);
var wall1o = createSprite(120,255,10,200);
var wall2 = createSprite(625,10,1100,10);
var wall2a = createSprite(325,60,480,10);
var wall2b = createSprite(880,60,510,10);
var wall2c = createSprite(880,105,510,10);
var wall2d = createSprite(870,150,420,10);
var wall2e = createSprite(870,205,510,10);
var wall2f = createSprite(325,110,400,10);
var wall2g = createSprite(275,155,400,10);
var wall2h = createSprite(670,260,300,10);
var wall2i = createSprite(595,160,60,10);
var wall3 = createSprite(1180,284,10,558);
var wall3a = createSprite(1130,160,10,100);
var wall3b = createSprite(1130,380,10,250);
var wall3c = createSprite(1080,480,10,150);
var wall4 = createSprite(625,558,1100,10);  
var wall4a = createSprite(1025,260,300,10);
var wall4b = createSprite(955,310,260,10); 
var wall4c = createSprite(1000,360,260,10);
var wall4d = createSprite(230,510,300,10);
var wall4e = createSprite(270,460,300,10);
var wall4f = createSprite(225,410,295,10);



}

function keyPressed(){
if(keyCode === LEFT_ARROW){
player1.x = player1.x-50
player2.x = player2.x-50
}
if(keyCode === RIGHT_ARROW){
    player1.x = player1.x+50
    player2.x = player2.x+50
    }

    if(keyCode === DOWN_ARROW){
        player1.y = player1.y+15
        player2.y = player2.y+15
        }

        if(keyCode === UP_ARROW){
            player1.y = player1.y-15
            player2.y = player2.y-15
            }

}