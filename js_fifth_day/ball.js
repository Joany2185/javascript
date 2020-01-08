class Ball {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.direction = "up";
        this.vx = speed;
        this.vy = -speed;
    }
    renderBall(ctx) {
        this.ctx = ctx;
        this.ctx.beginPath();
        this.ctx.fillStyle = "#fff";
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }
    move() {
        // if((this.vy > 0 && this.y == 0) || (this.vy < 0 && this.y == 390)){
        //          this.vy = 0;
        // }

        this.y += this.vy;
        this.x += this.vx;
    }

 
}