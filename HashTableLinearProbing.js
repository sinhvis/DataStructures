// Linear Probing - another technique for handling collisions
// It is an example of a more general hashing technique called
// open-addressing hashing.
// When there is a collision, program looks to see if the next element
// of the hash table is empty. If so, the key is placed in that element.
// If the element is not empty, program continues to search for empty
// hash table element until next one is found
// This technique makes use of the fact that any hash table is going to
// have many empty elements and it makes sense to use the space to store
// keys.

// Linear probing should be chosen over separate chaining when the array
// for storing data can be fairly large
// if the size of the array can be up to half the number of elements to
// be stored, should use separate chaining; but if size of the array
// can be twice  the size of the number of elements to be stored, should
// use linear probing.

// A second array  has to be added to store values, called values.  The
// table and the values arrays work in parallel, so that when a key is
// stored in a position in the tables array, a value is stored in the
// corresponding position.
function HashTable() {
	this.table = new Array(137);
	this.values = [] ;
	this.simpleHash = simpleHash;
	this.betterHash = betterHash ;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
}

// put() changed for linear probing
function put(key, data) {
	var pos = this.betterHash(key) ;
	if (this.table[pos] == undefined) {
		this.table[pos] = key ;
		this.values[pos] = data ;
	}
	else {
		while (this.table[pos] != undefined) {
			pos++ ;
		}
		this.table[pos] = key ;
		this.values[pos] = key ;
	}
}


// get() begins searching the hash table at the hashed position of the
// key.  if data passed to function matches key found at the position,
// the corresponding data in the values position is returned.  If the
// keys don't match, the function loops through the table until it
// either finds the key or reaches a cell that is undefined, meaning key
// was never placed into the hash table.
function get(key) {
	var hash = -1 ;
	hash = this.betterHash(key) ;
	if (hash > -1) {
		for (var i = hash; this.table[hash] != undefined; i++) {
			if (this.table[hash] == key) {
				return this.values[hash] ;
			}
		}
	}
	return undefined ;
}



// receives the array index value from betterHash() and stores element
// in that position
// function putBetterHashFunction(data) {
// 	var pos = this.betterHash(data) ;
// 	this.table[pos] = data ;
// }



function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}



function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			print(i + ": " + this.table[i]);
		}
	}
}

// betterHash() - avoid hashing collisions by computing a better hash
// value.  
// Algorithm known as Horner's method.
// Still sum up ASCII values of the characters, then multiply total by a
// prime constant.  
// Chosen 37 as the prime constant

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
