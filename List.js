function List() {
	this.listSize = 0 ;
	this.pos = 0 ;
	this.dataStore = [] ;
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

function clear() {
	delete this.dataStore ;
	this.dataStore = [] ;
	this.listSize = 0 ;
	this.pos = 0 ;
} ;

function find(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] === element) {
			return i ;
		}
	}
	return -1 ;
} ;

function toString() {
	return this.dataStore ;
} ;

function insert() {

} ;


function remove(element) {
	var foundAt = this.find(element) ;
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1) ;
		this.listSize-- ;
		return true ;
	}
	return false ;
} ;

function front() {
	this.pos = 0 ;
} ;

function end() {
	this.pos = this.listSize - 1 ;
} ;

function prev() {
	if (this.pos >= 0) {
		--this.pos ;
	}
} ;

function next() {
	if (this.pos <= this.listSize - 1) {
		++this.pos;
	}
} ;

function length() {
	return this.listSize ;
} ;

function currPos() {
	return this.pos ;
} ;

function moveTo(position) {
	this.pos = position ;
} ;

function getElement() {
	return this.dataStore[this.pos] ;
} ;

function contains(element) {
	var foundAt = this.find(element) ;
	if(foundAt > -1) {
		return true ;
	}
	return false ;
} ;


function append(element) {
	this.dataStore[this.listSize++] = element ;
} ;


var list = new List() ;

list.append(5) ;
list.append(6) ;
list.append(0) ;

print (list.toString()) ;

print ('finds') ;
print (list.find(5)) ;
print (list.find(6)) ;
print (list.find(0)) ;
print (list.find(10)) ;

print ('removes') ;
print (list.remove(5)) ;
print (list.remove(6)) ;
print (list.remove(10)) ;
print (list.remove(0)) ;
print (list.toString()) ;

print ('\n\n\n\n') ;
print ('length') ;
var list = new List() ;
list.append(5) ;
list.append(6) ;
list.append(0) ;

print(list.length()) ;
print('list.clear()') ;
list.clear() ;
print ('list.length(): ', list.length())

print('testing contains') ;
var list = new List() ;
list.append(5) ;
list.append(6) ;
list.append(0) ;

print (list.contains(5)) ;
print (list.contains(6)) ;
print (list.contains(0)) ;
print (list.contains(17)) ;


print('\n\n') ;
print('Iterators') ;
var list = new List() ;
list.append(1) ;
list.append(2) ;
list.append(3) ;
list.append(4) ;
list.append(5) ;

list.front() ;
print(list.getElement()) ;
list.end() ;
print(list.getElement()) ;
list.prev() ;
print(list.getElement()) ;
list.next() ;
print(list.getElement()) ;
list.moveTo(1) ;
print(list.getElement()) ;
print(list.currPos()) ;

print('\n\n') ;
print ('Traverse using Iterator') ;
print ('Contents of list: ', list.toString()) ;

// infinite loop.  backwards example is also infinite
for (list.front(); list.currPos() < list.length(); list.next()) {
	print('currPos: ' + list.currPos()) ;
	print('length(): ' + list.length()) ;
	print(list.getElement()) ;
	// readline() ;
} ;

print("\n\nBackwards\n\n") ;
for(list.end(); list.currPos() >= 0; list.prev()) {
	print('currPos: ' + list.currPos()) ;
	print(list.getElement()) ;
	// readline() ;
}

print('\n\nMovie Kiosk Application\n\n') ;

function createArr(file) {
	var arr = read(file).split("\n") ;
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = arr[i].trim() ;
	}
	return arr ;
}


//movies has not been defined yet.  need to use createArr() to generate movies
movies = createArr("films.txt") ;

// take movies array and store its contents in a list
var movieList = new List() ;
for(var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]) ;
}

// print (movieList.toString()) ;

//function displayList(list) {
//	for (list.front(); list.currPos() < list.length(); list.next()) {
//		print (list.getElement()) ;
//		// readline() ;
//	}
//}

// modification of earlier displayList
// if it discovers the list is made of Customer objects, 
// it will display those objects accordingly
function displayList(list) {
	for (list.front(); list.currPos() < list.length(); list.next()) {
		if (list.getElement() instanceof Customer) {
			print(list.getElement()["name"] + ", " +
			     list.getElement()["movie"]) ;
		}
		else {
			print(list.getElement()) ;
		}
	}
}

// constructor function for Customer object
function Customer(name, movie) {
	this.name = name ;
	this.movie = movie ;
}

function checkOut(name, movie, filmList, customerList) {
	if (movieList.contains(movie)) {
		var c = new Customer(name, movie) ;
		customerList.append(c) ;
		filmList.remove(movie) ;
	}
	else {
		print(movie + " is not available.") ;
	}
}

var movies = createArr("films.txt") ;
var movieList = new List() ;
var customers = new List() ;

for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]) ;
}
print("Available movies: \n") ;
displayList(movieList) ;

checkOut("Jane Doe", "The Godfather", movieList, customers) ;
print("\nCustomer Rentals: \n") ;
displayList(customers) ;

print("\n\nInteractive Movie Kiosk\n\n") ;
var movies = createArr("films.txt") ;
var movieList = new List() ;
var customers = new List() ;
for(var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]) ;
}

print ("Available movies: \n") ;
displayList(movieList) ;
putstr("\nEnter your name: ") ;
var name = readline() ;
putstr("What movie would you like? ") ;
var movie = readline() ;
checkOut(name, movie, movieList, customers) ;
print("\nCustomer Rentals: \n") ;
displayList(customers) ;
print("\nMovies now available\n") ;
displayList(movieList) ;
