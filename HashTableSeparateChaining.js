// Separate Chaining technique for collision resolution
// When collision occurs, and need to store the key at the generated
// index, but it's impossible to store more that one piece of data in an
// array element.
// Seperate chaining technique where each array element of a hash table
// stores another data structure, such as another array, which is then
// used to store keys.
// If two keys generate same hash value, each key can be stored in a
// different position of the secondary array.

function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash ;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	this.buildChains = buildChains ;
}

// To implement separate chaining, after array to store the hashed keys
// is created, call function that assigns empty array to each array
// element of hash table.
// buildChains() creates the second array (also called as chain)
function buildChains() {
	for (var i = 0; i < this.table.length; ++i) {
		this.table[i] = new Array() ;
	}
}

function put(key, data) {
	var pos = this.betterHash(key);
	var index = 0;
	if (this.table[pos][index] == undefined) {
		this.table[pos][index+1] = data;
	}
	++index;
	else {
		while (this.table[pos][index] != undefined) {
			++index;
		}
		this.table[pos][index] = data;
	}
}


function get(key) {
	var index = 0;
	var hash = this.betterHash(key);
	if (this.table[pos][index] = key) {
		return this.table[pos][index+1];
	}
	index += 2;
	else {
		while (this.table[pos][index] != key) {
			index += 2;
		}
		return this.table[pos][index+1];
	}
	return undefined;
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
	return total % this.table.length;
}



// to properly display the distribution after hashing with separate
// chaining, need to modify showDistro() to recognize that hash table is
// now a multidimensional array
function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			print(i + ": " + this.table[i]);
		}
	}
}

function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length-1;
	}
	return parseInt(total);
}
