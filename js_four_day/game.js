class Game {
    constructor() {
      this.canvas = document.querySelector("#pongCanvas");
      this.canvas.width  = 500;
      this.canvas.height = 600;
      this.ctx = this.canvas.getContext("2d");
      this.init();
      this.playerL = 0;
      this.playerR = 0;

    }
    checkCollisions() {
        if ((this.ball.vx > 0 && this.ball.x >= 480) || (this.ball.vx < 0 && this.ball.x <= 20)) { //direction change
            //direction in X
            let collisionWithPaddle = false;
            if (this.ball.vx > 0) { 
                //We are wotking with paddle R
                collisionWithPaddle = this.checkCollisionWithPaddle(this.paddleR);
            } else {
                // We are working with paddle L
                collisionWithPaddle = this.checkCollisionWithPaddle(this.paddleL);
            }
            if (collisionWithPaddle){
                // game continues and velocity of ball is inverted
                this.ball.vx = -this.ball.vx;
            } else {
                // we need to restart and increase the score;
                this.ball.vx > 0 ? this.playerL++: this.playerR++;
                this.init();
            }
            
        }
        if ((this.ball.vy > 0 && this.ball.y == 595) || (this.ball.vy < 0 && this.ball.y == 5)) {
        //direction in y
            this.ball.vy = -this.ball.vy;
        }
    }

    checkCollisionWithPaddle(paddle){
        return paddle.positiony < this.ball.y && (paddle.positiony + paddle.h) > this.ball.y;
    }

    init(){
        this.ball = new Ball(15, 5, 5);
        this.board = new Board(0, 0, 500, 600);
        this.paddleL = new Paddle(5, 250, 10, 100, "red",'w', 's');
        this.paddleR = new Paddle(485, 250, 10, 100, "red", 'ArrowUp', 'ArrowDown');
    }

    play() {
      setInterval(() => {
       
        this.checkCollisions();
        this.board.renderBoard(this.ctx, this.playerL, this.playerR);
        this.ball.renderBall(this.ctx);
        this.paddleL.renderPaddle(this.ctx);
        this.paddleR.renderPaddle(this.ctx);
        this.ball.move();
        this.paddleL.move();
        this.paddleR.move();
      }, 17);
    
    }

} 