## Binary Search Tree

- Every node has atmost 2 children
- Children to left node are less than parent node
- Children to right node are greater than parent node

### Implement insert

- Accepts a value and create newNode
- If no root, set this newNode as root
- Otherwise check the value of newNode is less or greater than root
- If less
  - Check if there is node to left
  - if there is not, add the node as left prop
  - Else, if there is node, move the node again to left and repeat
- If greater
  - Check if there is node to right
  - if there is not, add that newNode as right prop
  - Else, if there is node to right, move the node again to right and repeat
