## Doubly Linked list

Almost identical to the singly linked list except every node has another pointer, to the previous Node.

### Uses

- Unlike Singly linked lists, we can traverse the list from tail
- So, to pop the list, no need to traverse the whole list from head

### Implement push

- Should accept a value and Create new node
- If No tail, then this.tail = this.head = newNode
- Else find the tail of the list and tail.next = newNode
- Linking backwards also req. So newNode.prev = this.tail
- Make our new node as tail. this.tail = newNode
- Increment the length by 1

### Implement pop

- Accepts no value
- If no head, there is nothing to pop. So return undefined
- If length == 1, You need to pop this. So, set head = tail = null;
- Otherwise tail.prev will be the newTail
- Set this newTails.next to be null
- Decrement the length by 1 and return the tail

### Implement shift

- Accepts no value
- If no head, return undefined
- If length is 1, return null
- Otherwise
  - preserve this.head in temp
  - this.head = this.head.next
  - Decrement length by 1
  - return temp

### Implement unshift

- We need to insert new node before head and make this as new head
- Accepts a value and create a new node
- If no head
  - newNode.next and newNode.prev are null
- Otherwise
  - newNode.next = this.head
  - this.head = newNode
- Increment length by 1

### Implement get

- Accepts index and return undefind if index < 0 or index > length
- Otherwise
  - Check if index > half of the length
    - loop from the tail taking i=length-1 and dec until i===index
  - If index < half of the length
    - loop from head taking i=0 and inc i until i===index.

### Implement set

- Accepts value and index, to update the node value at given index
- get the node at index
  - if foundNode, foundNode.val = val and return true
  - else return false

### Implement insert

### Implement remove
