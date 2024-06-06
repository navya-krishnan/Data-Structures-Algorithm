class Queue{
    constructor(){
        this.item = []
    }

    enqueue(value){
        this.item.push(value)
    }

    dequeue(){
        return this.item.shift()
    }

    isEmpty(){
        return this.item.length === 0
    }

    print(){
        if(this.isEmpty()){
            console.log("Array is empty");
        }else{
            console.log(this.item);
        }
    }
}

let queue = new Queue()

queue.print()

queue.enqueue(76)
queue.enqueue(87)
// queue.enqueue(20)

queue.print()

queue.dequeue()

queue.print()