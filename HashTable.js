// Hashing - common technique for storing data in such a way that data
// can be inserted and retrieved very quickly.
// uses a data structure called hash table.
// they provide fast insertion, deletion, and retrieval, but
// perform poorly for operations that involve searching, finding the
// minimum and maximum values in a data set.

// hash table structure designed around an array.
// each data element is stored in array based on associated data element
// called the key.
// To store a piece of data in hash table, key is mapped to a number in
// range of 0 through hash table size, using hash function.

// hash function tries to distribute the keys as evenly as possibly
// among the elements of the array.
// it is possible for two keys to hash to the same value, called a
// collision.

// HashTable class includes functions for computing hash values,
// inserting data into hash table, retrieving data from hash table,
// displaying the distribution of data, and other utility functions

function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}

// receives the array index value from simpleHash() and stores element
// in that position
function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}


// receives the array index value from betterHash() and stores element
// in that position
// function putBetterHashFunction(data) {
// 	var pos = this.betterHash(data) ;
// 	this.table[pos] = data ;
// }



// choice of hash function depends on data type of key.  if key is
// integer, simplest hash function is to return the key modulo the size
// of array.  
// may not be useful when keys all end in 0, and array size is 10.
// that's why array size should always be a prime number, such as 137
// if keys are random integers, then the hash function should more
// evenly distribute keys.  This type of hashing known as modular
// hashing.

// simple hash function
// function computes hash value by summing the ASCII value of each name
// using charCodeAt(), to return character's ASCII value
// However, if two elements hash to same value, only one of them is
// stored, example of collision.
function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	print("Hash value: " + data + " -> " + total) ;
	return total % this.table.length;
}



// betterHash() - avoid hashing collisions by computing a better hash
// value.  
// Algorithm known as Horner's method.
// Still sum up ASCII values of the characters, then multiply total by a
// prime constant.  
// Chosen 37 as the prime constant
//function betterHash(string) {
//	const H = 37 ;
//	var total = 0 ;
//	for (var i = 0; i < string.length; ++i) {
//		total += H * total + string.charCodeAt(i) ;
//	}
//	total = total % this.table.length ;
//	if (total < 0) {
//		total += this.table.length - 1 ;
//	}
//
//	return parseInt(total) ;
//}

function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			print(i + ": " + this.table[i]);
		}
	}
}

