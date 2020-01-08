class Block {
    constructor(x,y,h,w,life) {
        this.x = x ;
        this.y = y ;
        this.h = h;
        this.w = w;
        this.life = life;
        this.visible = true;

    }
    decreaseLife() {
        this.life --;
        if (this.life == 0){
            this.visible = false;
        }
        
    }
    getColor(){
        let color = 'black';
        if (this.life == 1){
            color = 'blue';
        }
        if (this.life ==2){
            color = 'orange';
        }
        if (this.life == 3){
            color = 'pink';
        }
        return color;
    }
    renderBlock(ctx) {
        this.ctx = ctx;
        this.ctx.fillStyle = this.getColor();
        this.ctx.fillRect(this.x, this.y, this.w, this.h);  

    }
}