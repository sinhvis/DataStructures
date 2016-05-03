function Stack() {
	this.dataStore = [] ;
	this.top = 0 ;
	this.push = push ;
	this.pop = pop ;
	this.peek = peek ;
	this.clear = clear ;
	this.length = length ;
}

// push() - store new element in top position, and increment top
// so that new top is the next empty position in the array.
function push (element) {
	this.dataStore[this.top++] = element ;
}

// pop() - returns top element and decrements top
function pop() {
	return this.dataStore[--this.top];
}

// peek() returns top element by accessing element at top - 1 position
// if called on empty stack, get undefined because no value stored 
// at top position of stack
function peek() {
	return this.dataStore[this.top - 1] ;
}

// length() - How many elements are stored in the stack.
// returns the value of top
function length() {
	return this.top ;
}

// clear() stack by setting top variable to 0
function clear() {
	this.top = 0;
}


print('Testing Stack class implementation') ;
var s = new Stack() ;
s.push('David') ;
s.push('Raymond') ;
s.push('Bryan') ;

print("length: " + s.length()) ;
print(s.peek()) ;

var popped = s.pop() ;
print("The popped element is " + popped) ;

print (s.peek()) ;
s.push("Cynthia") ;
print(s.peek()) ;
s.clear() ;
print("length: " + s.length()) ;
print(s.peek()) ;
s.push("Clayton") ;
print(s.peek()) ;


print('\n\n\n\n') ;
print('Multiple Base Conversions') ;
print('Stack can be used to convert a number from one base to another base.  Given a number n, which we want to convert to a base b, here is algorithm for coversion:') ;
print('\t1. The rightmost digit of n is n % b. Push digit on to stack.') ;
print('\t2. Replace n with n / b') ;
print('\t3. Repeat steps 1 and 2 until n = 0, and there are no significant digits remaining') ;
print('\t4. Build the converted number string by popping the stack until stack is empty.') ;
print('Algorithm only works with bases 2 through 9') ;

function mulBase(num, base) {
	var s = new Stack() ;
	do {
		s.push(num % base) ;
		num = Math.floor(num /= base) ;
	} while (num > 0) ;
	var converted = "" ;
	while (s.length() > 0) {
		converted += s.pop() ;
	}
	return converted ;
}

var num = 32 ;
var base = 2 ;
var newNum = mulBase(num, base) ;
print(num + " converted to base " + base + " is " + newNum) ;

num = 125 ;
base = 8 ;
var newNum = mulBase(num, base) ;
print(num + " converted to base " + base + " is " + newNum) ;


print("\n\nPalindrome\n\n") ;
print("Spelled the same forward and backward") ;
print("Examples: dad, racecar") ;
print("Also: 'A man, a plan, a canal: Panama' if take out spaces and ignore punctuation") ;
print("1001 is a numeric palindrome") ;
print("Can use stack to determine if palindrome:") ;
print("\tTake original string and push each character onto a stack, moving from left to right.") ;
print("\tWhen end of string reached, stack contains original string in reverse order")
print("\tlast letter at top of stack, and first letter at bottom of stack") ;
print("\tOnce complete original string is on stack,") ;
print("\t\tcreate new string by popping each letter in stack") ;
print("\t\tProcess will create original string in reverse order") ;
print("\t\tCompare original string with reversed work, if equal, the string is a palindrome")

function isPalindrome(word) {
	var s = new Stack() ;
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]) ;
	}
	var rword = "" ;
	while (s.length() > 0) {
		rword += s.pop() ;
	}
	if (word == rword) {
		return true ;
	}
	else {
		return false ;
	}
}

var word = "hello" ;
print("word = " + word) ;
if (isPalindrome(word)) {
	print(word + " is a palindrome.") ;
}
else {
	print(word + " is not a palindrome.") ;
}

word = "racecar" ;
print("word = " + word) ;
if (isPalindrome(word)) {
	print(word + " is a palindrome.") ;
}
else {
	print(word + " is not a palindrome.") ;
}


print("\n\nRecursive processes\n\n") ;
function factorial(n) {
	if (n === 0) {
		return 1 ;
	}
	else {
		return n * (factorial(n - 1)) ;
	}
}


print("Factorial using stack") ;
function fact(n) {
	var s = new Stack() ;
	while (n > 1) {
		s.push(n--) ;
	}

	var product = 1 ;
	while (s.length() > 0) {
		product *= s.pop() ;
	}
	return product ;
}

print ("Factorial of 5: " + factorial(5)) ;
print ("Factorial of 5 (simulating recursion using stack): " + fact(5)) ;
