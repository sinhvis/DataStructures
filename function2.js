// void function in JavaScript
// all function parameters in JavaScript are passed by value, 
// and there are no reference parameters.
// However, there are reference objects, such as arrays which are
// passed to functions by reference.
function curve(arr, amount) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] += amount ;
	}
}

var grades = [77, 73, 74, 81, 90] ;
curve(grades, 5) ;
print(grades) ;
