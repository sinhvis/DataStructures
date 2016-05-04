// getRandomInt() - specify max and min random number. For a set of
// students, min grade = 50 and max grade = 100
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min ;
}

// genStuData() - generates student data. Inner loop generates student
// ID number, and right after inner loop finishes, a random grade is
// generated and concatenated to student ID.
// main program seperates ID from grade. hash function totals individual
// digits in student ID to compute a hash value using simpleHash().

function genStuData(arr) {
	for (var i = 0; i < arr.length; ++i) {
		var num = "" ;
		for (var j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10) ;
		}
		num += getRandomInt(50, 100) ;
		arr[i] = num ;
	}
}

function genStuData(arr) {
	for (var i = 0; i < arr.length; ++i) {
		var num = "" ;
		for (var j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10) ;
		}
		num += getRandomInt(50,100) ;
		arr[i] = num ;
	}
}

load("HashTable.js") ;
var numStudents = 10 ;
var arrSize = 97 ;
var idLen = 9 ;
var students = new Array(numStudents) ;
genStuData(students) ;
print ("Student data: \n") ;
for (var i = 0; i < students.length; ++i) {
	print(students[i].substring(0,8) + " " +
		students[i].substring(9)) ;
}
print("\n\nData distribution: \n") ;
var hTable = new HashTable() ;
for (var i = 0; i < students.length; ++i) {
	hTable.put(students[i]) ;
}
hTable.showDistro() ;
