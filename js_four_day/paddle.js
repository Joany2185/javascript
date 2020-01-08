class Paddle {
    constructor(positionx, positiony, w, h, color, up, down) {
      this.positionx = positionx
      this.positiony = positiony
      this.w = w; 
      this.h = h; 
      this.color = color;
      this.vy = 0;
      this.up = up;
      this.down = down;
  
      document.addEventListener('keyup', event => {
        if(event.key == this.up|| event.key == this.down){
          this.vy = 0;
          event.stopPropagation();
          event.preventDefault();
        };
  
      });
  
      document.addEventListener('keydown', event => {
        if(event.key == this.up){
          this.vy = -2;
          event.stopPropagation();
          event.preventDefault();
        };
        if(event.key == this.down) {
          this.vy = 2;
          event.stopPropagation();
          event.preventDefault();
        };
      });
    }
    renderPaddle(ctx) {
      
      this.ctx = ctx;
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.positionx, this.positiony, this.w, this.h);
      
    }
    move() { //direction change
      if ((this.vy > 0 && this.positiony == 500) || (this.vy < 0 && this.positiony == 0)) {
        //direction in y
        this.vy = 0;
      }
      this.positiony += this.vy;
    }
  }