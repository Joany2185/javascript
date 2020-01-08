class Collision {
    constructor(type, collisionWith, object) {
        this.type = type;//cx,cy
        this.collisionWith = collisionWith;//block,paddle,wall,bottom
        this.object = object;
    }
}