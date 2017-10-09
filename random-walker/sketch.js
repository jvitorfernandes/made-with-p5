function Walker(x, y){
	this.y = y;
	this.x = x;
	this.size = 5;

	this.randomize = function(){

		var number = Math.floor(random(4));

		if(number == 0){
			if(this.x + 5 <= width){
				this.x += 5;
			}
			
		}else if(number == 1){
			if(this.x - 5 >= 0){
				this.x -= 5;
			}
			
		}else if(number == 2){
			if(this.y + 5 <= height){
				this.y += 5
			}
			
		}else if(number == 3){
			if(this.y - 5 >= 0){
				this.y -= 5;
			}

		}
	}

	this.update = function(){

		this.randomize();

		fill('white');
		stroke(0);
		// noStroke();
		rect(this.x, this.y, this.size-1, this.size-1);

	}

	this.cleanStroke = function(){
		fill(255);
		noStroke();
		rect(this.x, this.y, this.size, this.size);
	}
}

var james;
var simulationStarted = false;

function setup() {
  createCanvas(800, 600).parent('canvasContainer');
  background(0);

  var x = random(width);
  var y = random(height);
  james = new Walker(x, y);
}

function draw() {

	// if(simulationStarted){ //bug?
	// if(frameCount % 60 == 0){
		james.cleanStroke();
		james.update();
	// }
	// }
	// else{
	// 	fill(255);
	// 	textSize(24);
	// 	textAlign(CENTER);
	// 	// textFont('Sans-Serif');
	// 	text("click anywhere to start simulation", width/2, height/2);
	// }
}




function mousePressed(){

	// if(!simulationStarted){
	// 	background(0);
	// 	simulationStarted = true;
	// }

	james.x=(mouseX);
	james.y=(mouseY);
}