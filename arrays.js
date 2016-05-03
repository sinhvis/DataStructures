// different ways of creating arrays
var numbers = [] ;
print(numbers.length) ;

var numbers = [1, 2, 3, 4, 5] ;
print (numbers.length) ;

// Calling constructors
var numbers = new Array() ;
print(numbers.length) ;

var numbers = new Array(1, 2, 3, 4, 5) ;
print(numbers.length) ;

var numbers = new Array(10) ;
print (numbers.length) ;

var objects = [1, "Joe", true, null] ;

var numbers = 3 ;
var arr = [7, 3, 1776] ;

print (Array.isArray(numbers)) ;
print(Array.isArray(arr)) ;

var nums = [] ;
for (var i = 0; i < 100; ++i) {
	nums[i] = i + 1 ;
}

var sum = 0 ;
for (var i = 0; i < nums.length; ++i) {
	sum += nums[i] ;
}
print (sum) ;

// using split() on a string creates an array
var sentence = "the quick brown fox jumped over the lazy dog" ;
var words = sentence.split(" ") ;
for (var i = 0; i < words.length; ++i) {
	print("word " + i + ": " + words[i]) ;
}

// When one array is assigned to another, changes made to original array
// change is relected on the other as well.
// this is shallow copy
var nums = [] ;
for (var i = 0; i < 100; ++i) {
	nums[i] = i + 1 ;
}
var samenums = nums ;
nums[0] = 400 ;
print(samenums[0]) ;

// deep copy is when each of original array's elements 
// is actually copied to the new array's elements
function copy(arr1, arr2) {
	for (var i = 0; i < arr1.length; ++i) {
		arr2[i] = arr1[i] ;
	}
}

var nums = [] ;
for (var i = 0; i < 100; ++i) {
	nums[i] = i + 1 ;
}
var samenums = [] ;
copy(nums, samenums) ;
nums[0] = 400 ;
print(samenums[0]) ;

var nums = [1, 2, 3, 4, 5] ;
print(nums) ;


// Searching for Value
// indexOf(value) returns index of where value is found in array
// returns -1 if not found
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"] ;
print("Names: ") ;
print (names) ;
putstr("Enter a name to search for: ") ;
var name = readline() ;
var position = names.indexOf(name) ;
if (position >= 0) {
	print("Found " + name + " at position " + position) ;
}
else {
	print(name + " not found in array.") 
}

// if there are multiple occurences of the same data, indexOf() will 
// return the first occurrence, and
// lastIndexOf() will return the position of the last occurrence
// of -1 if argument isn't found.
var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"] ;
var name = "Mike" ;
var firstPos = names.indexOf(name) ;
print("First found " + name + " at position " + firstPos) ;
var lastPos = names.lastIndexOf(name) ;
print("Last found " + name + " at position " + lastPos) ;


// both join and toString return string containing elements of 
// array delimited by commas
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"] ;
var namestr = names.join() ;
print(namestr) ;
namestr = names.toString() ;
print(namestr) ;
print(names) ;

// concat and splice create new arrays from existing arrays
// concat puts together two or more arrays to create a new array.
// splice creates a new array from a subset of an existing array.
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"] ;
var dmpDept = ["Raymond", "Cynthia", "Bryan"] ;
// should show cis first
var itDiv = cisDept.concat(dmpDept) ;
print(itDiv) ;
itDiv = dmpDept.concat(cisDept) ;
print(itDiv) ;


// splice creates a new array contents of an existing array
// arguments are starting position and the number of elements
var itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"] ;
var dmpDept = itDiv.splice(3, 3) ;
var cisDept = itDiv ;
print (dmpDept) ;
print (cisDept) ;

// Mutator functions

// Adding elements to an array
// push() and unshift()
// push() adds an element to end of an array.
var nums = [1, 2, 3, 4, 5] ;
print (nums) ;
nums.push(6) ;
print(nums) ;

// Using push() is more intuitive that using length property
var nums = [1, 2, 3, 4, 5] ;
print(nums) ;
nums[nums.length] = 6 ;
print(nums) ;

// Adding data to beginning of an array is more difficult that adding data
// to end of array.
// Each existing element of array has to be shifted up one position before
// the new data is added
// Example code:
print("Adding data to beginning of array (manually without benefit of mutator (unshift()) function") ;
var nums = [2, 3, 4, 5] ;
var newnum = 1 ;
var N = nums.length ;
for (var i = N; i >= 0; --i) {
	nums[i] = nums[i - 1] ;
}
nums[0] = newnum ;
print (nums) ;

print("Adding array elements to beginning of an array using unshift()") ;
var nums = [2, 3, 4, 5] ;
print (nums) ;
var newnum = [1, 2];
nums.unshift (newnum) ;
print (nums) ;

nums = [3, 4, 5] ;
nums.unshift(newnum) ;
print(nums) ;

// Removing Elements from an Array
// use pop() to remove single element from end
print("Removing element") ;
var nums = [1, 2, 3, 4, 5, 9] ;
print(nums) ;
nums.pop() ;
print (nums) ;

print("Removing element from beginning of array without using mutator function shift()") ;
var nums = [9, 1, 2, 3, 4, 5] ;
print("Original array: ", nums) ;
for (var i = 0; i < nums.length; ++i) {
	nums[i] = nums[i+1] ;
}
print("After removal from beginning: ", nums) ;

print("shift() removes element from beginning of array") ;
var nums = [9, 1, 2, 3, 4, 5] ;
print("Before shift(), array: ", nums) ;
nums.shift() ;
print('After shift, array: ', nums) ;

print("Both pop() and shift() returns the values they remove.  Values can be collected in a variable.") ;
var nums = [6, 1, 2, 3, 4, 5] ;
print ("before shift, array; ", nums) ;
var first = nums.shift() ;
nums.push(first) ;
print ("after push, array: ", nums) ;

// Adding and Removing elements from the middle of the array
print("Adding elements using splice() requires following arguments;") ;
print("	\tStarting index (where to begin adding elements") ;
print("	\tNumber of elements to remove (0 to add elements") ;
print(" \t\tElements to add to the array") ;
var nums = [1, 2, 3, 7, 8, 9] ;
print ("Before splice(): ", nums) ;
var newElements = [4, 5, 6] ;
print ("newElements: ", newElements) ;
print ("nums.splice(3, 0, newElements)") ;
nums.splice(3, 0, newElements) ;
print ("After splice(): ", nums) ;

print("Elements spliced into an array can be any list of items.") ;
var nums = [1, 2, 3, 7, 8, 9] ;
print ('before splice: ', nums) ;
print ('nums.splice(3, 0, 4, 5, 6)') ;
nums.splice(3, 0, 4, 5, 6) ;
print ('after splice: ', nums) ;

print("\n\n\n\n") ;

print ("splice() to remove elements from array") ;
var nums = [1, 2, 3, 100, 200, 300, 400, 4, 5] ;
print('before splice():', nums) ;
print('nums.splice(3, 4) starting index = 3, elements to remove = 4') ;
nums.splice(3, 4) ;
print ('after splice():', nums) ;


print('Putting Array Elements in Order') ;
print('reverse() reverses order of elements of array') ;
var nums = [1, 2, 3, 4, 5] ;
print('before reverse:', nums) ;
print('nums.reverse()') ;
nums.reverse() ;
print('After reverse():', nums) ;

print('\n\n') ;
print('sorting elements of an array into order. sort() works ver well with striungs') ;
var names = ['David', 'Mike', 'Cynthia', 'Clayton', 'Bryan', 'Raymond'] ;
print ('before sort: ', names) ;
names.sort() ;
print ('after sort: ', names) ;

print("Sort does not work well with numbers") ;
var nums = [3, 1, 2, 100, 4, 200] ;
print ("before sort: ", nums) ;
nums.sort() ;
print ("after sort: ", nums) ;

print("Can make sort work properly by passing an ordering function as first argument to sort()") ;
function compare (num1, num2) {
	return num1 - num2 ;
}

var nums = [3, 1, 2, 100, 4, 200] ;
nums.sort(compare) ;
print("after nums.sort(compare): ", nums) ;

print('\n\n') ;
print("Iterator Functions") ;
print("These functions apply a function to each element of an array, either returning a value, a set of values, or a new array after applying the function to each element of an array.") ;

print ('Non-Array-Generating Iterator Functions') ;
print('do not generate a new array; instead they either perform an operation on each element of an array or generate a single value from an array') ;
print('forEach() takes a function as an argument and applies the function to each element of an array') ;
function square(num) {
	print(num * num) ;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
print('nums: ', nums) ;
print ('Calling nums.forEach(square)') ;
nums.forEach(square) ;

print('\n') ;
print('every() applies a boolean function and returns true if function can return true for every element in array') ;
function isEven(num) {
	return num % 2 == 0 ;
}

var nums = [2, 4, 6, 8, 10] ;
print ('nums: ', nums) ;
var even = nums.every(isEven) ;
if(even) {
	print ('all numbers are even') ;
} 
else {
	print('not all numbers are even') ;
}

var nums = [2, 4, 6, 7, 8, 10] ;
print ('nums: ', nums) ;
var even = nums.every(isEven) ;
if(even) {
	print ('all numbers are even') ;
} 
else {
	print('not all numbers are even') ;
}

print('\n') ;
print('some() takes bool function and returns true if at least one of the elements in the array meets the criterion of the bool function') ;
function isEven(num) {
	return num % 2 == 0 ;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
print ("nums: ", nums) ;
var someEven = nums.some(isEven) ;
if (someEven) {
	print("some numbers are even") ;
}
else {
	print ('no numbers are even') ;
}

var nums = [1, 3, 5, 7, 9] ;
print ("nums: ", nums) ;
var someEven = nums.some(isEven) ;
if (someEven) {
	print("some numbers are even") ;
}
else {
	print ('no numbers are even') ;
}


print('\n') ;
print('reduce() applies a function to an accumulator and the successive elements of an array until the end of the array is reached, yielding a single value') ;

function add(runningTotal, currentValue) {
	return runningTotal + currentValue ;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
print ('nums: ', nums) ; 
var sum = nums.reduce(add) ;
print(sum) ;
print('above works like this:') ;
print ('add(1, 2) -> 3') ;
print ('add(3, 3) -> 6') ;
print ('add(6, 4) -> 10') ;
print ('add(10, 5) -> 15') ;
print ('add(15, 6) -> 21') ;
print ('add(21, 7) -> 28') ;
print ('add(28, 8) -> 36') ;
print ('add(36, 9) -> 45') ;
print ('add(45, 10) -> 55') ;

print('can also use reduce() with strings to perform concatenation') ;
function concat(accumulatedString, item) {
	return accumulatedString + item ;
}

var words = ['the ', 'quick ', 'brown ', 'fox '] ;
print ('words: ', words) ;
var sentence = words.reduce(concat) ;
print ('after words.reduce(concat)') ;
print(sentence) ;

print('\n') ;
print('reduceRight() similar to reduce(), only working from righthand side of array to left') ;
print('following uses reduceRight() to reverse elements of an array') ;
function concat(accumulatedString, item) {
	return accumulatedString + item ;
}

var words = ['the ', 'quick ', 'brown ', 'fox '] ;
print ('words: ', words) ;
var sentence = words.reduceRight(concat) ;
print ('after words.reduceRight(concat)') ;
print(sentence) ;


print('\n\n') ;
print('Iterator Functions That Return a New Array') ;
print('map() and filter()') ;
print('map() works like forEach(), applying a function to each element of array.  Difference is that map() returns a new array with the results of function application') ;
function curve(grade) {
	return grade += 5 ;
}
var grades = [77, 65, 81, 92, 83] ;
print ('grades: ', grades) ;
var newgrades = grades.map(curve) ;
print('after newgrades = grades.map(curve):') ;
print ('newgrades: ', newgrades) ;
print('\n') ;
print('Using map() with strings') ;

function add(a, b) {
	return (a + b) ;
}

print (add(1, 2)) ;

function mapExample(word) {
	return word[0] ;
}

var words = ['for', 'your', 'information'] ;
print('words: ', words) ;
var acronym = words.map(mapExample) ;
print('acronym: ', acronym) ;
print ('acronym.join(""):', acronym.join("")) ;

print('\n') ;
print('filter() similar to every(), but instead of returning true if all elements of array satisfy a bool function, function returns a new array consisting of those elements that satisfy a bool function.') ;

function isEven(num) {
	return num % 2 == 0 ;
}

function isOdd(num) {
	return num % 2 != 0 ;
}

var nums = [] ;
for (var i = 0; i < 20; ++i) {
	nums[i] = i + 1 ;
}

print('nums: ', nums) ;

var evens = nums.filter(isEven) ;
print("Even numbers: ") ;
print("nums.filter(isEven): ", evens) ;

var odds = nums.filter(isOdd) ;
print("Odd numbers: ") ;
print("nums.filter(isOdd): ", odds) ;

print ('\n') ;
print("another interesting use of filter()") ;
function passing(num) {
	return num > 60 ;
}

var grades = [] ;
for (var i = 0; i < 20; ++i) {
	grades[i] = Math.floor(Math.random() * 101) ;
}

var passGrades = grades.filter(passing) ;
print("All grades: ");
print (grades) ;
print("Passing grades: ") ;
print (passGrades) ;

print('\n')
print ("Use filter with strings") ;
print("example of 'i before e except after c'") ;
function afterc(str) {
	if (str.indexOf("cie") > -1) {
		return true ;
	}
	return false ;
}

var words = ["recieve", "deceive", "percieve", "deceit", "concieve"] ;
print ('words: ', words) ;
var misspeled = words.filter(afterc) ;
print ("misspelled words: ", misspeled)  ;

print ("\n\n\n\n") ;
print("Two-Dimensional and Multidimensional Arrays") ;
print("Two-dimensional arrays: like a spreadsheet with rows and columns. create an array and make each element of array an array as well. need to know the number of rows want the arrays to create.");
print("Create two-dimensional array with n rows and one column") ;
var twod = [] ;
var rows = 5 ;
for (var i = 0; i < rows; ++i) {
	twod[i] = [] ;
}
print('Above example will set each element of array to undefined') ;
print ('\n') ;
print ('Better way to create 2 dimensional array: Extend JavaSCript array object with a function thata sets the number of rows and colums and sets each value to a value passed to function') ;

Array.matrix = function(numrows, numcols, initial) {
	var arr = [] ;
	for (var i = 0; i < numrows; ++i) {
		var columns = [] ;
		for (var j = 0; j < numcols; ++j) {
			columns[j] = initial ;
		}
		arr[i] = columns ;
	}
	return arr ;
}

var nums = Array.matrix(5, 5, 0) ;
print('nums[1][1]: ', nums[1][1]) ;
var names = Array.matrix(3, 3, "") ;
names[1][2] = "Joe" ;
print('names[1][2]: ', names[1][2]) ;

print('\n') ;
print('also create a two-dimensional array and initalize it to a set of values in one line') ;
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]] ;
print ('grades: [[89, 77, 78], [76, 82, 81], [91, 94, 89]]')  ;
print('grades[2][2]: ', grades[2][2]) ;

print('\n\n') ;
print("Processing Two-Dimensional Array Elements") ;


var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]] ;
var total = 0 ;
var average = 0.0 ;
for (var row = 0; row < grades.length; ++row) {
	for (var col = 0; col < grades[row].length; ++col) {
		total += grades[row][col] ;
	}
	average = total / grades[row].length ;
	print("Student " + parseInt(row+1) + " average: " + average.toFixed(2)) ;
	total = 0 ;
	average = 0.0 ;
}

print('\n\n') ;
print ('for row-wise computation, simply flip the for loops so that the outerloop controls the columns and inner loop controls the rows') ;
print('Column wise computation: ') ;

var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]] ;
var total = 0 ;
var average = 0.0 ;
for (var col = 0; col < grades.length; ++col) {
	for(var row = 0; row < grades[col].length; ++row) {
		total += grades[row][col] ;
	}

	average = total / grades[col].length ;
	print ("Test " + parseInt(col + 1) + " average: " + average.toFixed(2)) ;
	total = 0 ;
	average = 0.0 ;
}


print("\n\n\n") ;
print ("Jagged Arrays") ;
print ("Where rows in array may have different number of elements") ;

var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]] ;
print ('grades: [[89, 77], [76, 82, 81], [91, 94, 89, 99]]') ;
var total = 0 ;
var average = 0.0 ;
for (var row = 0; row < grades.length; ++row) {
	for (var col = 0; col < grades[row].length; ++col) {
		total += grades[row][col] ;
	}
	average = total / grades[row].length ;
	print("Student " + parseInt(row+1) + " average: " + average.toFixed(2)) ;
	total = 0 ;
	average = 0.0 ;
}

print("\n\n\n") ;
print("Arrays of Objects") ;
print ("arrays can also consist of objects, and the functions and properties of arrays work with objects") ;

function Point(x, y) {
	this.x = x ;
	this.y = y ;
}

function displayPts(arr) {
	for (var i = 0; i < arr.length; ++i) {
		print(arr[i].x + ", " + arr[i].y) ;
	}
}

var p1 = new Point(1, 2) ;
var p2 = new Point(3, 5) ;
var p3 = new Point(2, 8) ;
var p4 = new Point(4, 4) ;

var points = [p1, p2, p3, p4] ;
for (var i = 0; i < points.length; ++i) {
	print("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y) ;
}

var p5 = new Point(12, -3) ;
points.push(p5) ;
print("After push: ") ;
displayPts(points) ;
points.shift() ;
print("After shift: ") ;
displayPts(points) ;

print('\n\n') ;
print('object that stores that weekly obseverd high temperature.  it has functions for adding a new temperature and computing the average of the tempertures stored in the object.') ;

function weekTemps() {
	this.dataStore = [] ;
	this.add = add ;
	this.average = average ;
}

function add(temp) {
	this.dataStore.push(temp) ;
}
