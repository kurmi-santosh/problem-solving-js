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
- Set the 2nd last node as tail
- Decrement length by 1.
- If the length is 0 after removing the node, make head and tail to be null;

### Implement Shifting

- We need to remove existing head and make it's next node as new head
- If there are no nodes, return undefined
- Store the current head property in as firstNode variable
- Set the head property to be the firstNode's next
- Decrement the length by 1
- return the firstNode

### Implement unshift

- We need to insert new node before head and make this as new head
- Should accept a value - and Create new node
- If there are no nodes, set the head and tail to be this new node
- Otherwise set this new nodes next to current head
- Set this new node as head
- Increment length by 1
- Return the linked list

### Implement insert

- where should we insert ? should receive the index value.
- If index > length or index < 0 - return false
- If the index is 0 - unshift(val)
- If the index is length - push(val)
- Otherwise GET the node at the (index-1)
  - We need to name this as prevNode and this prevNode.next should be preserved at temp.
  - Set the next prop of this prevNode to be our newNode
  - Set the next prop of our newNode to be the preserved value (temp)

### Implement remove

- Should accept index
- If index >= length or index < 0 return undefined
- If index is 0 - shift()
- If index = length-1 - pop()
- Otherwise GET the node at (index-1)
  - Preserve this prevNode.next as removedNode
  - Set the prevNode.next to be removedNode.next
  - decrement the length
  - return the removedNode

### Implement reverse

```code

0   curr    nxt
1   prev    curr    nxt
2           prev    curr    nxt
3                   prev    curr  nxt(null)
    13 -->  27 -->  32 -->  71
    H                       T
Rev
    13      27      32      71
    T

```

- Swap head and tail
- 13H is the currentNode
- Loop through the list
- Create variables prevNode=null and nextNode
  - save currentNext as nextNode
  - now set currentNext as prevNode (which is null)
  - currentNode becomes your prevNode
  - and nextNode becomes you currentNode
