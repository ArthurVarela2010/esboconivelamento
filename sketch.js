function setup() {
    createCanvas(750, 750);
       background("green")
    
  }
  
  function draw() {
    
    stroke("purple");
    fill("blue");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    }
  }