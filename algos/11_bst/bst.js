class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };
};
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insertNodeHelper(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNodeHelper(node.left, newNode);
            };
        } else {
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNodeHelper(node.right,newNode);
            }
        }
    }
    insert(data){
        var newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNodeHelper(this.root, newNode);
        }
    }

    getMinHelper(node){
        if(node.left == null){
            // console.log("At " + node.data)
            return node.data;
            
        } else {
            // console.log("At " + node.data)
            return this.getMinHelper(node.left);
        }
    }
    getMin(){
        if(this.root.left == null){
            return this.root.data;
        } else {
            // console.log("At " + this.root.data)
            return this.getMinHelper(this.root.left);
        }
    }

    getMaxHelper(node){
        if(node.right == null){
            return node.data;
            
        } else {
            return this.getMaxHelper(node.right);
        }
    }
    getMax(){
        if(this.root.right == null){
            return this.root.data;
        } else {
            return this.getMaxHelper(this.root.right);
        }
    }

    contains(val) {
        if( this.root == null )
            return;
        if ( val === this.root.data )
            return true;
        else if( val > this.root.data )
        {
            if( this.root.right == null )
                return false;
            return this.containsHelper(val,this.root.right);
        }
        else if( val < this.root.data )
        {
            if( this.root.left == null )
                return false;
            return this.containsHelper(val,this.root.left);
        }
            
    }

    containsHelper(val, node)
    {
        if ( val === node.data )
            return true;
        else if( val > node.data )
        {
            if ( node.right == null )
                return false;
            return this.containsHelper(val,node.right);
        }
        else if( val < node.data )
        {
            if ( node.left == null )
                return false;
            return this.containsHelper(val,node.left);
        }
    }

    getSize() {
        return this.getSizeHelper(this.root);
    }

    getSizeHelper(node){
        if (node) {
            return 1 + this.getSizeHelper(node.left) + this.getSizeHelper(node.right);
        }
        return 0;
    }

    isEmpty()
    {
        if ( this.root == null )
            return true;
        return false;
    }

};
const BST = new BinarySearchTree();

console.log(BST.isEmpty()) // true
BST.insert(10); // min
BST.insert(34);
BST.insert(12);
BST.insert(32);
BST.insert(422); // max
BST.insert(52);
// size 6
console.log(BST.getMin()) // 10
console.log(BST.contains(52)) // true
console.log(BST.contains(40000)) // false
console.log(BST.contains(1)) // false

console.log(BST.getMax()) // 422
console.log(BST.getSize()) // 6
console.log(BST.isEmpty()) // false