//amount of balls per array
var N;

//array names
var B1;
var B2;

var r;
var g;
var b;

function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 );
  
  N = 25;
  
  //creating the arrays (array is a table of variables for a for-loop)
  B1 = new Array(N);
  B2 = new Array(N);
  
  center= createVector( width*0.5 , height*0.5 );
  
  //create for-loop for the arrays)
  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();
  }
  
  fill( 255, 255 , 255 );
  textAlign( CENTER );
  textSize( 50 );
  text( " Press number keys 1 to 3 to change color schemes" , width/2 , height/7 );
  text( " Press s to save and n for a new canvas " , width/2 , height/7 + 200 );

  startTime = millis();
  
  firstFrame = true;
  
  r = mouseY % 255;
  g = mouseY % 150;
  b = mouseX % 150;
  
}

function draw(){
  if( millis() - startTime < 3000 ){
    return;
  }
  
  if( firstFrame ){
    background( 0 , 0 , 0 );
    firstFrame = false;
  }
  
   if( key === '1' ){
   r = mouseY % 255;
   g = mouseY % 175;
   b = mouseX % 150;
 }
  if( key === '2' ){
    r = mouseY % 100;
    g = mouseY % 255;
    b = mouseX % 100;
  }
  if( key === '3' ){
    r = mouseY % 175;
    g = mouseY % 150;
    b = mouseX % 255;
  }
  
  textSize( 100 );
  text( " color " , width/2 , height/7 );
  fill( r , g , b );

//  background( 0 , 0 , 0 , 1 );
  
  //for-loop to create the arrays
  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();

    stroke( r , g , b , 10 );
    line( B1[n].pos.x , B1[n].pos.y , B2[n].pos.x , B2[n].pos.y );
  }
  
}

//new function-anything that is classified as ball will follow these instructions
var Ball = function(){
  //create vector for position of the bal
  this.pos = createVector( random( 0 , width ) , random( 0 , height ) );
  
  //create vector for velocity
    //direction (randomized)
  this.v = p5.Vector.random2D();
    //speed
  this.v.mult( random( 1 , 3 ) );
  
  //new function-anything told to evolveDraw will follow these instructions
  this.evolveDraw =function() {
    //adds velocity to position
    this.pos.add( this.v );
  
  //set boundries for balls)
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
  };
  
};
function keyTyped() {
 if( key === 's' ) {
   saveCanvas( 'canvas' , 'jpg' );
   console.log("saved");
 }
 if( key === 'n' ){
   background( 0 , 0 , 0 );
   console.log("New Canvas");
 }
 if( key === '1' ){
   r = mouseY % 255;
   g = mouseY % 150;
   b = mouseX % 150;
 }
  if( key === '2' ){
    r = mouseY % 150;
    g = mouseY % 255;
    b = mouseX % 150;
  }
  if( key === '3' ){
    r = mouseY % 150;
    g = mouseY % 150;
    b = mouseX % 255;
  }
}
