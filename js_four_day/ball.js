class Ball {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.direction = "right";
      this.vx = 2;
      this.vy = 2;
    }
    renderBall(ctx) {
      this.ctx = ctx
      this.ctx.beginPath();
      this.ctx.fillStyle = "#fff";
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      
      this.ctx.fill();
    }
    move() {
      
      this.x += this.vx; //movement in X
      this.y += this.vy;
    }
  }