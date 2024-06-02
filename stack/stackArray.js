class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }

    print(){
        if(this.isEmpty()){
            console.log("array is empty");
        }else{
            console.log(this.items);
        }
    }
}

const stack = new Stack()


stack.push(87)
stack.push(45)
stack.print()

stack.pop()
stack.print()