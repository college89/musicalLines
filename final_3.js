let myFont;
let master_text = "";


function preload() {
  myFont = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(0,0,10);
  //noLoop();
  frameRate(4);
}

function draw() {
  background(0,0,10);

 var hue = random(0, 360);
  for(var i = 0; i<width; i+=4){
    stroke(hue+(i/width)*100, 100, 80);
    line(i, 0, i, random(160, 640)*noise(i/200)*2);
  }
  for(var y = 2; y<width; y+=4){
    stroke(hue+(y/width)*100, 100, 80);
    line(y, 0, y, 800);
  }

     fill(255);
     textSize(height - mouseY);
     textAlign(CENTER);
     text(master_text, mouseX, mouseY);


 var num = random(4, 8);
  for(var x = 0; x<num; x++){
    fill(hue+90, 100, 80+random(0, 20));
    //text("hana", random(-480, 240), random(0, 960));
  }
}

function mousePressed(){
    if (mouseButton === LEFT) {
        save('pix.jpg');
    }

}

//add this function make the text be dynamic
function keyReleased() {
  if (keyCode==8) {
    if (master_text.length>0) {
       master_text = master_text.substring(0, master_text.length-1);
    }
  }
  else if (keyCode>=65 && keyCode<=90 || keyCode==32 || keyCode==54) {
    master_text += str(key);
  }else if(keyCode == ENTER || keyCode == RETURN){
    console.log("hi");
    master_text = master_text + " " + master_text;
  }
}
