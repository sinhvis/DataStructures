// Doubly Linked List
// traversing linked list from first to last node is straightforward
// not easy to traverse linked list
// adding property to Node class that stores link to previous node.
// when we insert node, more operations have to be performed to 
// assign propert links for previous and next nodes.
// However, gain efficiency when need to remove node from list
// since no longer have to search for previous node.

function Node(element) {
	this.element = element ;
	this.next = null ;
	this.previous = null ;
}

function DLList() {
	this.head = new Node("head") ;
	this.find = find ;
	this.insert = insert ;
	this.display = display ;
	this.remove = remove ;
	this.findLast = findLast ;
	this.dispReverse = dispReverse ;
}

function dispReverse() {
	var currNode = this.head ;
	currNode = this.findLast() ;
	while (!(currNode.previous == null)) {
		print(currNode.element) ;
		currNode = currNode.previous ;
	}
}

// findLast()  moves to last node without going past end of list.
// useful for displaying linked list in reverse order.
function findLast() {
	var currNode = this.head ;
	while (!(currNode.next == null)) {
		currNode = currNode.next ;
	}
	return currNode ;
}

// remove() for doubly linked list is more efficient because don't have to
// find previous node.  find node in the list, set node's previous property
// to node pointed to by deleted node's next property, redirect previous
// property of node the deleted node points to to node before the deleted
// node.

function remove(item) {
	var currNode = this.find(item) ;
	if (!(currNode.next == null)) {
		currNode.previous.next = currNode.next ;
		currNode.next.previous = currNode.previous ;
		currNode.next = null ;
		currNode.previous = null ;
	}
}


// We don't need findPrevious for Doubly Linked List

function display() {
	var currNode = this.head ;
	while (!(currNode.next == null)) {
		print(currNode.next.element) ;
		currNode = currNode.next ;
	}
}

function find(item) {
	var currNode = this.head ;
	while (currNode.element != item) {
		currNode = currNode.next ;
	}
	return currNode ;
}

// insert() similar to singly linked list, except we have the new node's 
// previous property to point to previous node
function insert(newElement, item) {
	var newNode = new Node(newElement) ;
	var current = this.find(item) ;
	newNode.next = current.next ;
	newNode.previous = current ;
	current.next = newNode ;
}


// driver program
var cities = new DLList() ;
cities.insert("Conway", "head") ;
cities.insert("Russellville", "Conway") ;
cities.insert("Carlisle", "Russellville") ;
cities.insert("Alma", "Carlisle") ;
cities.display() ;
print() ;
cities.remove("Carlisle") ;
cities.display() ;
print() ;
cities.dispReverse() ;
