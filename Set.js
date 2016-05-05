// Set - collection of unique elements.  Elements are called members.
// 2 most important properties:
//	1. members are unordered
//	2. no  member can occur in a set more than once.
// useful to create a data structure that consists only of unique
// elements, such as a list of each unique word in a text.
// Definitions:
//	empty set: set containing no members
//	universe: set of all possible members
//	subset: set is considered a subset if all members of first set
//	are contained in the second set.
// Set Operations:
//	Union: new set obtained by combining the members of one set with
//	another.
//	Intersection: new set obtained by adding all members of one set
//	that also exist in the second set.
//	Difference: new set obtained by adding all members of one set
//	except those that also exist in the second set. (Clarify)


function Set() {
	this.dataStore = [] ;
	this.add = add ;
	this.remove = remove ;
	this.show = show ;
}

// add() - since a set can only contain unique members, must make sure
// that data isn't already in the array. indexOf() checks array for data
function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data) ;
		return true ;
	}
	else {
		return false ;
	}
}

// remove() - check if data is there, use splice() to remove data and
// return true. Otherwise, return false, indicating data isn't in set.
function remove(data) {
	var pos = this.dataStore.indexOf(data) ;
	if (pos > -1) {
		this.dataStore.splice(pos, 1) ;
		return true ;
	}
	else {
		return false ;
	}
}

// see members of set
function show() {
	return this.dataStore ;
}
