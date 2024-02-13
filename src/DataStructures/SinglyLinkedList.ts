export class SimpleNode {
    value: any;
    next: any;
    constructor(value: any){
        this.value = value;
        this.next = null;
    }
}

export class SinglyLinkedList {
    head: SimpleNode;
    tail: SimpleNode;
    length: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val:any){
        let newNode = new SimpleNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }   
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        } 
        this.length++;
    }

    pop(){
        if(!this.head) return undefined;
        // We are looking for 2nd Last node and set this as new Tail
        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next; // This currentNode will be eliminated once the loop breaks
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length ==0){
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
}



