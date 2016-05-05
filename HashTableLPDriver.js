// Driver to demonstrate Linear Probing 
load('HashTableLinearProbing.js') ;
var hTable = new HashTable() ;
// hTable.buildChains() ;
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
		"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"] ;
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]) ;
}
hTable.showDistro() ;
