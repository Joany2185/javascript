class Game {
    constructor(levels) {
        this.canvas = document.querySelector("#bricks");
        this.canvas.width = 400;
        this.canvas.height = 300;
        this.ctx = this.canvas.getContext('2d');
        
        this.loop = undefined;
        this.lives = 4;
        this.win = false;
        this.levels = levels;
        this.currentLevel = 0;

        this.initWithBlocks(); 
    }

    checkCollisions() {
      //check collision with board
      //check collision with paddle and bottom
      //check collision with bricks
      let collisionObject = this.checkCollisionWithWall();
      if(!collisionObject) {
        collisionObject = this.checkCollisionWithBottom();
      }
      if(!collisionObject) {
        collisionObject = this.checkCollisionWithBlocks();
      }
      if (collisionObject){
        console.log(collisionObject, this.ball);

      }
      return collisionObject;
    
  }
  checkCollisionWithWall() {

    if(this.ball.vy < 0 && this.ball.y <= 6) {
      return new Collision('cy', 'wall');
    }
    if(this.ball.vx < 0 && this.ball.x <= 6) {
      return new Collision('cx', 'wall');
    }
    if(this.ball.vx > 0 && this.ball.x >= 394) {
      return new Collision('cx', 'wall');
    }
    return undefined;
  }
  checkCollisionWithBlocks() {

    for(let i=0; i<this.blocks.length; i++) {
      const b = this.blocks[i];
      if(!b.visible){
        continue;
      }
      if(b.x < this.ball.x && (b.x+b.w) >this.ball.x && this.ball.y == (b.y)){
        return new Collision('cy','block', b);
      }
      if(b.x < this.ball.x && (b.x+b.w) >this.ball.x && this.ball.y == (b.y + b.h)){
        return new Collision('cy','block', b);
      }
      if(b.y < this.ball.y && (b.y+b.h) > this.ball.y && this.ball.x == (b.x)){
        return new Collision('cx','block', b);
      }
      if(b.y < this.ball.y && (b.y+b.h) > this.ball.y && this.ball.x == (b.x + b.w)){
        return new Collision('cx','block', b);
      }
    }

  }
  checkCollisionWithBottom() {
    if(this.ball.vy > 0 && this.ball.y >= 284) {

      if(this.checkCollisionWithPaddle()){

        return new Collision('cy', 'wall');
      }else {
        return new Collision('cy','bottom');
      }
    }
    
    
    return undefined;
  }
  checkCollisionWithPaddle(){
      return this.paddle.positionx < this.ball.x && (this.paddle.positionx + this.paddle.w) > this.ball.x;
  }

  handleCollision(collision) {
    if(!collision) {
      return;
    }
    if(collision.collisionWith == 'bottom') {
      this.lives --;
      if (this.lives == 0){
        this.stop();
        this.renderGame();
      } else {
        this.init();
      }
      return;
    }
    if(collision.collisionWith == 'block') { //block
      collision.object.decreaseLife();
    }
    if(collision.type == 'cx'){
      this.ball.vx = -this.ball.vx;
    }
    if(collision.type == 'cy'){
      this.ball.vy = -this.ball.vy;
    }
  }  

  handleWinning(){
    if (this.blocks.every((block) => !block.visible )){
        this.currentLevel++;
        this.stop();
        if (!this.levels[this.currentLevel]){
          //Complete win
          this.win = true
        } else {
          //just level change
          this.initWithBlocks();
      
        }
        this.renderGame();
    }
  }

  init() {
    this.ball = new Ball(200,284,6, this.levels[this.currentLevel].speed);
    this.board = new Board(0,0,400,300);
    this.paddle = new Paddle (150, 290, 100, 9, 'white', 'ArrowRight', 'ArrowLeft', this.levels[this.currentLevel].speed)
  }

  initWithBlocks(){
    this.init();
    this.blocks = [];
    this.x = 0;//origin point of the initial brick
    this.y = 30;//origin point of the initial brick
    this.row = this.levels[this.currentLevel].row;//number of rows
    this.col = this.levels[this.currentLevel].col;;//number of columns
    for( let c = 0; c < this.col; c++) { //how to put all the blocks in order in the columm
      for( let r = 0; r< this.row; r++){ //how to put all the blocks in order in the row
        this.blocks.push(new Block(this.x + 6, this.y, 10, 32, Math.floor(Math.random() * (this.levels[this.currentLevel].numberOfStates) + 1 )));//add a 'block' to wall       
          
        this.x += 40;//distance between blocks
      }
        this.x = 0;//empezar con el bloque
        this.y += 12; 
      }
      console.log(this.blocks);
  }

  renderGame(){
    this.board.renderBoard(this.ctx, this.lives, this.isRunning(), this.levels[this.currentLevel], this.win);
      
    this.paddle.renderPaddle(this.ctx);

    this.blocks.forEach(block => {
        block.renderBlock(this.ctx);
    });//.renderBlock(this.ctx);
    this.ball.renderBall(this.ctx);
  }  
 
  play() {
    if (this.lives != 0) {
      this.loop = setInterval(() => {
        this.handleWinning();
        const collision = this.checkCollisions();
        this.handleCollision(collision);
        this.renderGame();
  
        this.paddle.move();
        this.ball.move();
      }, this.levels[this.currentLevel].frame);   
    }
  }

  stop(){
    clearInterval(this.loop);
    this.loop = undefined;
    this.renderGame();
  }

  isRunning(){
    return !! this.loop;
  }
 
}