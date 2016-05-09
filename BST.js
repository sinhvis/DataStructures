// Binary Search Tree (BST)
// A BST is made up of nodes
function Node(data, left, right) {
	this.data = data ;
	this.left = left ;
	this.right = right ;
	this.show = show ;
}

function show() {
	return this.data ;
}

// insert() 
// 1. Create a Node object, passing in the data the node will store.
// 2. Check BST for root node.  if it doesn't exist, then BST is new,
// 	and this node is root node, otherwise move to next step.
// 3. If node being inserted is not the root node,  prepare to traverse
// 	the BST to find proper insertion point.  Similar to traversing a
// 	Linked List.  function uses a Node object that is assigned as
// 	the current node as the function moves from level to level in
// 	the BST.  The function also has to position itself inside the
// 	BST at the root node.
// 4. Once inside the BST, next step is to determine where to put the
// 	node. This is performed inside a loop that breaks once the
// 	correct insertion point is determined.  Algorithm for
// 	determining correct insertion point:
//		1. Set the root to be current node.
//		2. If the data value in inserted node is less than data
//			value in current node, set the new current node
//			to be left child of the current node.  If data
//			value in inserted node is greater that data
//			value in the current node, skip to step 4.
//		3. If value of the left child of the current node is
//			null, insert the new node here, and exit the
//			loop. Otherwise, skip to the next iteration of
//			the loop.
// 		4. Set the current node to be the right child of the
// 			current node.
// 		5. If the value of the right child of the current node
// 			is null, insert the new node here and exit the
// 			loop. Otherwise, skip to the next iteration of
// 			the loop.

function BST() {
	this.root = null ;
	this.insert = insert ;
	// this.inOrder = inOrder ;
}

function insert(data) {
	var n = new Node(data, null, null) ;
	if (this.root == null) {
		this.root = n ;
	}
	else {
		var current = this.root ;
		var parent ;
		while (true) {
			parent = current ;
			if (data < current.data) {
				current = current.left ;
				if(current == null) {
					parent.left = n ;
					break ;
				}
			}
			else {
				current = current.right ;
				if (current == null) {
					parent.right = n ;
					break ;
				}
			}
		}
	}
}


function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left) ;
		putstr(node.show() + " ")  ;
		inOrder(node.right) ;
	}
}


print("Driver for BST") ;
var nums = new BST() ;
nums.insert(23) ;
nums.insert(45) ;
nums.insert(16) ;
nums.insert(37) ;
nums.insert(3) ;
nums.insert(99) ;
nums.insert(22) ;
print("Inorder traversal: ") ;
inOrder(nums.root) ;


