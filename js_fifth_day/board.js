class Board {
    constructor(px, py, width, height) {
      this.px = px;
      this.py = py;
      this.width = width;
      this.height = height;
      
    }
    renderBoard(ctx, lives, isRunning, level, win) {
        this.ctx = ctx;
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.px, this.py, this.width, this.height);
        this.ctx.beginPath();

        if (win){
          this.ctx.font = "30px Arial";
          this.ctx.fillStyle = "#fff";
          this.ctx.fillText("You win, you are the best", 110 , 200);
        }
        
        if (!isRunning && lives != 0){
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "#fff";
          this.ctx.fillText("Press space to start", 110 , 180);
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "#fff";
          this.ctx.fillText(level.name, 170  , 210);
        }

        if (lives == 0 ){
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "#fff";
          this.ctx.fillText("Game over", 135, 180);
          this.ctx.font = "20px Arial";
          this.ctx.fillStyle = "#fff";
          this.ctx.fillText("Press 'R' to restart", 110, 210);
        } else {
          this.ctx.font = "15px Arial";
          this.ctx.fillStyle = "#fff";
          this.ctx.fillText("Life: " + lives, 350, 15);
        }
        
      }
}
