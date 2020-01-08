class Paddle {
    constructor(positionx, positiony, w, h, color, right, left, speed) {
      this.positionx = positionx
      this.positiony = positiony
      this.w = w; 
      this.h = h; 
      this.color = color;
      this.vx = 0;
      this.right = right;
      this.left= left;
      this.speed = speed;

      document.addEventListener('keyup', event => {
        if(event.key == this.right|| event.key == this.left){
          this.vx = 0;
          event.stopPropagation();
          event.preventDefault();
        };
  
      });
  
      document.addEventListener('keydown', event => {
        if(event.key == this.left) {
          this.vx= -this.speed;
          event.stopPropagation();
          event.preventDefault();
        };
        if(event.key == this.right){
          this.vx= this.speed;
          event.stopPropagation();
          event.preventDefault();
        };

      });
    }

    

    renderPaddle(ctx) {
        //console.log(this.positionx, this.positiony, this.w, this.h);
      
        this.ctx = ctx;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.positionx, this.positiony, this.w, this.h);
        
    }
    move() { //direction change
      if ((this.vx > 0 && this.positionx == 300) || (this.vx < 0 && this.positionx == 0)) { //direction in y
              this.vx = 0;
      }
      this.positionx += this.vx;
    }
}
