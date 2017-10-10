var bird;
var pipes = [];

function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('canvasContainer');
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
	background(0);
	bird.show();
	bird.update();

	if(frameCount % 80 == 0){
		pipes.push(new Pipe());
	}

	for(var i = pipes.length; i >= 0 ; i--){
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].offscreen()){
			pipes.splice(i, 1);
		}
	}

}

function keyPressed(){
	if (key == ' '){
		bird.up();
	}

}