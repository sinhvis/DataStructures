// Linked List data structure
// Arrays in JavaScript are implemented as objects
// they are less efficient than those in C++, Java, etc.
// arrays are sometimes too slow.
// Linked Lists can be used in almost every situation where 
// one-dimensional arrays are used,
// EXCEPT when RANDOM ACCESS is needed.
// When random access is required, an array is the better data structure

// Node class
// 	- element: contains element data
//	- next: stores a link to the next node
function Node(element) {
	this.element = element ;
	this.next = null ;
}

function LList() {
	this.head = new Node("head") ;
	this.find = find ;
	this.insert = insert ;
	this.display = display ;
	this.findPrevious = findPrevious ;
	this.remove = remove ;
}


function find(item) {
	var currNode = this.head ;
	while(currNode.element != item) {
		currNode = currNode.next ;
	}
	return currNode ;
}

// insert() insert newElement after item
function insert(newElement, item) {
	var newNode = new Node(newElement) ;
	var current = this.find(item) ;
	newNode.next = current.next ;
	current.next = newNode ;
}

function display() {
	var currNode = this.head ;
	while(!(currNode.next == null)) {
		print(currNode.next.element) ;
		currNode = currNode.next ;
	}
}


// to remove node, need to find node before node want to remove
// change prev node's next property to no longer reference the removed node,
// and point prev mode to point to node after removed node.
// That's why we need findPrevious()
function findPrevious(item) {
	var currNode = this.head ;
	while (!(currNode.next == null) &&
		(currNode.next.element != item)) {
		currNode = currNode.next ;
	}
	return currNode;
}

function remove(item) {
	var prevNode = this.findPrevious(item) ;
	if(!(prevNode.next == null)) {
		prevNode.next = prevNode.next.next ;
	}
}

// driver program
print('Linked List') ;
var cities = new LList() ;
cities.insert("Conway", "head") ;
cities.insert("Russellville", "Conway") ;
cities.insert("Alma", "Russellville") ;
cities.display() ;

print('Press ENTER for remove()') ;
readline() ;

var cities = new LList() ;
cities.insert("Conway", "head") ;
cities.insert("Russellville", "Conway") ;
cities.insert("Carlisle", "Russellville") ;
cities.insert("Alma", "Carlisle") ;
print('original cities:') ;
cities.display() ;
console.log() ;
print('removing Carlisle...') ;
cities.remove("Carlisle") ;
cities.display() ;
