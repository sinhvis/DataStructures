// List Abstract Data Type

function List() {
	this.listSize = 0 ;
	this.pos = 0 ;
	this.dataStore = [] ; // initializes an empty array to store list elements
	this.clear = clear ;
	this.find = find ;
	this.toString = toString ;
	this.insert = insert ;
	this.append = append ;
	this.remove = remove ;
	this.front = front ;
	this.end = end ;
	this.prev = prev ;
	this.next = next ;
	this.length = length ;
	this.currPos = currPos ;
	this.moveTo = moveTo ;
	this.getElement = getElement ;
	this.contains = contains ;
}

// append() - appends a new element onto the list at the next available position, which will be equal to the size of the listSize variable.
// after element is appended, listSize is incremented
function append(element) {
	this.dataStore[this.listSize++] = element ;
}

// remove() - find element, remove it, adjust the space in the underlying array to fill in hole left by removing an element. simplify the process by using splice() mutator function
// define a find() to find the element to remove
function find(element) {
	for(var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return i ;
		}
	}
	return -1 ;
}

// remove() uses position returned by find() to splice dataStore array at that place.  then listSize is decremented by 1 to reflect new size. returns 1 if element is removed, and false otherwise
function remove(element) {
	var foundAt = this.find(element) ;
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1) ;
		--this.listSize ;
		return true ;
	}
	return false ;
}

function length() {
	return this.listSize ;
}

function toString() {
	return this.dataStore ;
}

// insert() occurs after a specified element already in the list
// uses the helper find() to determine the correct position for the new element by finding the element specified in the after argument. Use shift() to insert new element into the list.  The increment listSize by 1 and return true if insertion was successful
function insert(element, after) {
	var insertPos = this.find(after) ;
	if(insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element) ;
		++this.listSize ;
		return true ;
	}
	return false ;
}


// clear() clears out elements from the list and allow elements to be entered.
// use delete operatorto delete dataStore array
// dataStore = [] re-creates the empty array.
// listSize and pos are both set to zero to indicate start of a new list.
function clear() {
	delete this.dataStore ;
	this.dataStore = [] ;
	this.listSize = this.pos = 0 ;
}

// contains() - see if a particular value is part of the list
function contains(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if(this.dataStore[i] == element) {
			return true ;
		}
	}
	return false ;
}


// Traversing a List
// allows movement through a list, 
// getElement() displays the current element in a list
// concept of iterators
function front() {
	this.pos = 0 ;
}

function end() {
	this.pos = this.listSize - 1 ;
}

function prev() {
	if (this.pos > 0) {
		--this.pos ;
	}
}

function next() {
	if (this.pos < this.listSize - 1) {
		++this.pos ;
	}
}

function currPos() {
	return this.pos ;
}

function moveTo(postion) {
	this.pos = position ;
}

function getElement() {
	return this.dataStore[this.pos] ;
}





print('\n\nDemonstrating iterators') ;
var names = new List() ;
names.append('Clayton') ;
names.append('Raymond') ;
names.append('Cynthia') ;
names.append('Jennifer') ;
names.append('Bryan') ;
names.append('Danny') ;

print('Contents of names: ', names.toString()) ;

names.front() ;
print('after moving to first element: ', names.getElement()) ;

names.next() ;
print('move forward one element: ', names.getElement()) ;

names.next() ;
names.next() ;
names.prev() ;
print('move forward twice and backward once: ', names.getElement()) ;

print('\n\n') ;
//print('Using iterator to traverse through list:') ;
//for (names.front(); names.currPos() < (names.length()); names.next()) {
//	// DEBUG
//	print ('names.currPos(): ', names.currPos()) ;
//	print ('names.length(): ', names.length()) ;
//	print ('names.length() - 1: ', names.length() - 1) ;
//	print(names.getElement()) ;
//	readline() ;
//}


//print('\n\n') ;
//print('Traversing list backward using iterator') ;
//for (names.end(); names.currPos() >= 0; names.prev()) {
//	print (names.getElement()) ;
//	readline() ;
//}

function createArr(file) {
	var arr = read(file).split("\n") ;
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = arr[i].trim() ;
	}
	return arr ;
}

arr = createArr("films.txt") ;
for (var i = 0; i < arr.length; ++i) {
	print(i, arr[i]) ;
}

print('arr.length = ', arr.length) ;
