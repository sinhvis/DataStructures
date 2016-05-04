print("Using simple hash function") ;
load("HashTable.js") ;
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
		"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable() ;
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]) ;
}

hTable.showDistro() ;

print("Press Enter for better hash function") ;
readline() ;
load("HashTable.js") ;
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
		"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable() ;
for (var i = 0; i < someNames.length; ++i) {
	hTable.putBetterHashFunction(someNames[i]) ;
}

hTable.showDistro() ;


