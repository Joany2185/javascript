class Stack {

    constructor(){
        this.arr = [];
      
    };
    push(element) {// pushes a new element on top of the stack

        this.arr[this.arr.length] = element;


    };
    isEmpty(){//returns'true' if the stack does not have elements in it.

        if(this.arr.length === 0){
            return (true)
        } else {
            return (false)
        }
        
    };

    clear(){//remove all the elements from the stack.

        this.arr.length = 0;
        return ('It is clear');

    }
   top() {//returns the top-most element, but doesnt change the stack
    
        let top = this.arr[this.arr.length-1];
        return top;
      
        
    }
    pop() {// Removes the top most element from the stack and returns that element

        let element = this.arr.splice([this.arr.length-1]);
        return element;
    }


}

let stack = new Stack();


console.log(stack);
stack.push(6); 
console.log(stack) 
stack.push(4);
console.log(stack) 
console.log(stack.top());
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack);
stack.clear();
console.log(stack);
stack.isEmpty();
console.log(stack.isEmpty());

