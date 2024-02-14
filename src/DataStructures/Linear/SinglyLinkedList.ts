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
    
    push(val:any) {
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
        if(this.length ==0){
            this.head = null;
            this.tail = null;
        }
        else{
            // We are looking for 2nd Last node and set this as new Tail
            var currentNode = this.head;
            let newTail = currentNode;
            while(currentNode.next) {
                newTail = currentNode;
                currentNode = currentNode.next;
                // This currentNode will be eliminated once the loop breaks
            }
            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return currentNode;
    }

    shift(){
        if(!this.head) return undefined;
        let firstNode = this.head;
        // We have to remove this firstNode (current head). 
        // Make firstNode's next as new head
        this.head = firstNode.next;
        this.length--;
        return this;
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

    unshift(val: any){
        let newNode = new SimpleNode(val);
        if(!this.head) {
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

    get(index:number){
        if(index < 0 || index > this.length) return undefined;
        let counter = 0;
        let currentNode = this.head;

        while(counter!== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index:number, val: any){
        if(index < 0 || index > this.length) return undefined;
        if(index == 0) this.unshift(val);
        else if(index == this.length) this.push(val);
        else {
            let newNode = new SimpleNode(val);
            let prevNode = this.get(index-1);
            
            let temp = prevNode.next;
            prevNode.next = newNode;
            newNode.next = temp;
        }
        this.length++;
        return true;
    }

    remove(index:number){
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) this.shift()
        else if(index == this.length-1) this.pop();
        else {
            let prevNode = this.get(index-1);
            var removedNode = prevNode.next;
            prevNode.next = removedNode.next;
        }
        this.length--;
        return removedNode;
    }

/*
0   curr    nxt 
1   prev    curr    nxt
2           prev    curr    nxt
3                   prev    curr  nxt(null) 
    13 -->  27 -->  32 -->  71
    H                       T                              
    
    13      27      32      71
    T
*/  

    reverse(){
        var currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        var nextNode:any;
        var prevNode = null;
        for(var i=0; i < this.length; i++) {
            // Save the currentNext (27)
            nextNode = currentNode.next;
            // Modify the currentNext to it's prevNode
            currentNode.next = prevNode;
            // currentNode becomes prevNode now
            prevNode = currentNode;
            // Now make this nextNode as current
            currentNode = nextNode;
        }
        return this;
    }
}



