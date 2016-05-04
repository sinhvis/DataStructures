// Dictionary stores data as key-value pairs
// Object class is designed to operate the dictionary
// Basis for Dictionary class is Array class rather than Object
// because need to be able to sort keys of a dictionary, and 
// JavaScript can't sort the properties of an Object
// However, everything in JavaScript is an object, so array is an object.
// Use with dictionaryDriver.js

function Dictionary() {
	this.datastore = new Array() ;
	this.add = add ;
	this.find = find ;
	this.remove = remove ;
	this.showAll = showAll ;
	this.count = count ;
	this.clear = clear ;
}

// add() - takes key and value. 
// key is the index for the value element.
function add(key, value) {
	this.datastore[key] = value ;
}

// find() - takes key and returns value associated with it
function find(key) {
	return this.datastore[key] ;
}

// remove() - uses a built-in function called delete
// function is part of Object, and takes a reference to key
function remove(key) {
	delete this.datastore[key] ;
}

// showAll() - keys(), when called with an object, returns all keys 
// stored in the object
//function showAll() {
//	for each (var key in Object.keys(this.datastore)) {
//		print(key + " -> " + this.datastore[key]) ;
//	}
//}

function showAll() {
	for(var key in this.datastore) {
		print(key + " ->  " + this.datastore[key]);
	}
}

function count() {
	var n = 0 ;
	for (var key in this.datastore) {
		++n ;
	}
	return n ;
}

function clear() {
	for (var key in this.datastore) {
		delete this.datastore[key] ;
	}
}
