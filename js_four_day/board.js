class Board {
    constructor(px, py, width, height) {
      this.px = px;
      this.py = py;
      this.width = width;
      this.height = height;
      
    }
  
    renderBoard(ctx, playerL, playerR) {
      this.ctx = ctx;
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.px, this.py, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.setLineDash([5, 15]);
      this.ctx.moveTo(250, 0);
      this.ctx.lineTo(250, 600);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = "#FF0000";
      this.ctx.stroke();
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "#fff";
      this.ctx.fillText(playerL, 220, 30);
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "#fff";
      this.ctx.fillText(playerR, 270, 30);
      
    }
  }
  