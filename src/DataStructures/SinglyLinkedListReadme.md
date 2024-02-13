# SinglyLinkedList

## LINKED LIST - Collection of NODES

    * DO NOT HAVE INDICES
    * RANDOM ACCESS IS NOT ALLOWED
    * INSERTION AND DELETION IS EASY

## ARRAYS

    * INSERTION AND DELETION ARE EXPENSIVE
    * RANDOM ACCESS

### Create a SimpleNode

```code

    export class SimpleNode {
        value: any;
        next: any;
        constructor(value: any){
            this.value = value;
            this.next = null;
        }
    }

    // It's not good with these nested next pointers...
    var first = new SimpleNode('Hi');
    first.next = new SimpleNode('There');
    first.next.next = new SimpleNode('!');
    console.log(first);

    /*
        We need push/pop etc..
        var list = new SinglyLinkedList();
        list.push(10);
        list.length();
    */

```

### Implement Push

- Should accept a value
- Create new node with the accepted value
- If NO head, set the head and tail to be this newly created node
- If head,
  - Set next prop of the tail to point this new node
  - Set this new node as tail
- Increment the length

### Implement Pop

- Accept No value
- If there are no nodes, return undefined
- We need to pop the tail. So set the 2nd last node's next prop to null.
  - (Starting from head, We need to use a while loop checking for next prop to be null)
- set the 2nd last node as tail
- Decrement length by 1.
- If the length is 0 after removing the node, make head and tail to be null;