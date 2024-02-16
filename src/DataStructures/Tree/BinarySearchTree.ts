export class SimpleNode {
    value: any;
    left: null;
    right: null;
    constructor(value: any){
        this.value= value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: any; 
    constructor(value:any){
        this.root = value;
    }

    insert(value: any){
        let newNode = new SimpleNode(value);
        if(!this.root){
            this.root = SimpleNode;
        }
        else{
            var current = this.root;
            while(true){
                if(value  < current.value){
                    if(current.left === null){
                        current.left = newNode;
                    }
                    else{
                        current = current.left
                    }
                }
                else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                    }
                    else{
                        current = current.right;
                    }
                }
                // Not accepting duplicates
                else return undefined;
            }
        }
    }

    find(value:any){
        if(!this.root) return false;
        var found = false;
        let current = this.root;
        while(current && !found){
            if(value <  current.val){
                current = current.left;
            }
            else if (value >  current.right){
                current = current.right
            }
            else found = true;
        }
        return found;
    }
}

