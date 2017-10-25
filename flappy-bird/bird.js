function Bird(){

	this.y = height/2;
	this.x = 25;

	this.gravity = 0.6;
	this.velocity = 0;
	this.lift = -20;

	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 25, 25);
	}

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}

		if(this.y <= 0){
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.up = function(){
		this.velocity += this.lift;
	}
}