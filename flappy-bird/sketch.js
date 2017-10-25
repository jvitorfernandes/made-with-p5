var bird;
var pipes = [];
var score = 0;
var gameStop = false;

function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('canvasContainer');
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
	background(0);

	if(!gameStop){
		for(var i = pipes.length-1; i >= 0 ; i--){
			pipes[i].show();
			pipes[i].update();

			if(pipes[i].hits(bird)){
				gameStop=true;
			}

			if(pipes[i].offscreen()){
				pipes.splice(i, 1);
				score++;
			}
		}

		bird.show();
		bird.update();

		if(frameCount % 80 == 0){
			pipes.push(new Pipe());
		}
	}
	else{
		text('score: ' + score, 60, 30);
		for(var i = pipes.length-1; i >= 0 ; i--){
			pipes[i].show();
		}
		bird.show();
	}

}

function keyPressed(){
	if (key == ' '){
		if(gameStop){
			// game.reset(); to do
		}else{
			bird.up();
		}
	}

}