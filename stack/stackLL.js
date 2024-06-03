class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
    }

    isEmpty(){
        return this.head === null
    }

    push(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }

    pop(){
        let deleteNode = this.head
        this.head = deleteNode.next
        return deleteNode
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}

let stack = new Stack()

stack.print()

stack.push(65)
stack.push(87)
stack.push(84)
stack.push(12)

stack.print()

stack.pop()
stack.print()