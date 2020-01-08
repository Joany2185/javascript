class Queue {
    constructor(arr,element){
        this.arr = arr;
        this.element = element;
    };
    enqueue(element) {//adds element at the end of the queue (arr)

        return this.arr.push(element);
    };

    dequeue(){//removes an element from the front and returns that element / de atras
        
        return this.arr.pop();
    };
    // first() {//return front - most element from queue, but does not remove it

    // };
    // isEmpty() {//return true if the quee has no elements in it, otherwise false

    // }
    // clear() {//remove all elements from queue

    // }
}

let queue = new Queue([1,2,3],6);

queue.enqueue(4);
// queue.dequeue();
// queue.enqueue(5);
// queue.dequeue();
console.log(queue);