export class SimpleNode {
    value: any;
    prev: SimpleNode;
    next: SimpleNode;
    constructor(value:any){
        this.value = value
        this.prev = null;
        this.next = null;
    }
}

export class DoublyLinkedList {
    head: SimpleNode;
    tail: SimpleNode;
    length: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: any){
        let newNode = new SimpleNode(value);

        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.tail) return undefined;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            let newTail = this.tail.prev;
            newTail.next = null;
       }
       this.length--;
       return this.tail;
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }

    shift(){
        if(!this.head) return undefined;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            var temp = this.head;
            this.head = temp.next;
        }
        this.length--;
        return this;
    }

    unshift(value: any){
        let newNode = new SimpleNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}