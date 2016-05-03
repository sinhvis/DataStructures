// can use push() to add data to the end of an array
// shift to remove data from front of array

function Queue() {
	this.dataStore = [] ;
	this.enqueue = enqueue ;
	this.dequeue = dequeue ;
	this.front = front ;
	this.back = back ;
	this.toString = toString ;
	this.empty = empty ;
	this.count = count ;
}

function enqueue(element) {
	this.dataStore.push(element) ;
}

function dequeue() {
	return this.dataStore.shift() ;
}

function front() {
	return this.dataStore[0] ;
}

function back() {
	return this.dataStore[this.dataStore.length - 1] ;
}

function toString() {
	var retStr = "" ;
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n" ;
	}
	return retStr ;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true ;
	}
	else {
		return false ;
	}
}

function count() {
	return this.dataStore.length ;
}

print("Test program for Queue") ;
var q = new Queue() ;
q.enqueue("Meredith") ;
q.enqueue("Cynthia") ;
q.enqueue("Jeniffer") ;
print("Contents of Queue") ;
print(q.toString()) ;
q.dequeue() ;
print("After one dequeue()") ;
print(q.toString()) ;
print("Front of queue: " + q.front()) ;
print("Back of queue: " + q.back()) ;


print("Press any key for Square Dance") ;
readline() ;

print('\n\n\n\n') ;
print('Square Dance') ;
print('------------\n\n') ;


// Each dancer is store in this object
function Dancer(name, sex) {
	this.name = name ;
	this.sex = sex ;
}


// load dancers from file into program
function getDancers(males, females) {
	var names = read("dancers.txt").split("\n") ;
	for (var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim() ;
	}
	for (var i = 0; i < names.length; ++i) {
		var dancer = names[i].split(" ") ;
		var sex = dancer[0] ;
		var name = dancer[1] ;
		if (sex == 'F') {
			femaleDancers.enqueue(new Dancer(name, sex)) ;
		}
		else {
			maleDancers.enqueue(new Dancer(name, sex)) ;
		}
	}
}


// pair up male and female dancers and announces the pairings
function dance(males, females) {
	print("The dance partners are: \n") ;
	while (!females.empty() && !males.empty()) {
		person = females.dequeue() ;
		print(person) ;
		putstr("Female dancer is: " + person.name) ;
		person = males.dequeue() ;
		print(" and the male dancer is: " + person.name) ;
	}
	print() ;
}

// test program
var maleDancers = new Queue() ;
var femaleDancers = new Queue() ;
getDancers(maleDancers, femaleDancers) ;


dance(maleDancers, femaleDancers) ;
if(!femaleDancers.empty()) {
	print(femaleDancers.front().name + " is waiting to dance.") ;
}
if (!maleDancers.empty()) {
	print(maleDancers.front().name + " is waiting to dance.") ;
}

print("Press ENTER to continue to see counts of dancers waiting...") ;
readline() ;

var maleDancers = new Queue() ;
var femaleDancers = new Queue() ;
getDancers(maleDancers, femaleDancers) ;
dance(maleDancers, femaleDancers) ;
if (maleDancers.count() > 0) {
	print("There are " + maleDancers.count() + 
		" male dancers waiting to dance.") ;
}

if (femaleDancers.count() > 0) {
	print("There are " + femaleDancers.count() + 
		" female dancers waiting to dance.") ;
}

print('Press enter for Sorting...') ;
readline() ;
print('Sorting Data with Queues') ;
print('radix sort') ;

print('function that distributes numbers by the place (1s or 10s) digit') ;
function distribute(nums, queues, n, digit) {
	for (var i = 0; i < n; ++i) {
		if (digit == 1) {
			queues[nums[i] % 10].enqueue(nums[i]) ;
		}
		else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]) ;
		}
	}
}

print ('function for collecting numbers from queues') ;
function collect(queues, nums) {
	var i = 0 ;
	for (var digit = 0; digit < 10; ++digit) {
		while(!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue() ;
		}
	}
}

function dispArray(arr) {
	for (var i = 0; i < arr.length; ++i) {
		putstr(arr[i] + " ") ;
	}
}

// main program
var queues = [] ;
for (var i = 0; i < 10; ++i) {
	queues[i] = new Queue() ;
}
var nums = [] ;
for (var i = 0; i < 10; ++i) {
	nums[i] = Math.floor(Math.floor(Math.random() * 101)) ;
}
print('Before radix sort, nums: ') ;
dispArray(nums) ;

distribute(nums, queues, 10, 1) ;
collect(queues, nums) ;
print('\nafter collect(queues, nums), nums (1st pass): ') ;
dispArray(nums) ;

distribute(nums, queues, 10, 10) ;
collect(queues, nums) ;
print('\nafter collect(queues, nums), nums (2nd pass): ') ;
dispArray(nums) ;

print('\nAfter radix sort: ') ;
dispArray(nums) ;


