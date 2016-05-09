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
	this.contains = contains;
	this.union = union ;
	this.intersect = intersect ;
	this.subset = subset ;
	this.size = size ;
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


// union() - builds a new set by adding all the members of first set.
// then checks each member of the second set to see whether is already a
// member of the first set. if it is, the member is skipped over, if
// not, member is added to new set.
// contains() - helper for union() - looks to see if specified member is
// part of set

function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true ;
	}
	else {
		return false ;
	}
}

function union(set) {
	var tempSet = new Set() ;
	for (var i = 0; i < this.dataStore.length; ++i) {
		tempSet.add(this.dataStore[i]) ;
	}
	for (var i = 0; i < set.dataStore.length; ++i) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]) ;
		}
	}
	return tempSet ;
}

// intersect() - for Set intersection
// Each member of the first set is found to be a member of the second
// set, it is added to a new set, which is the return value
function intersect(set) {
	var tempSet = new Set() ;
	for(var i = 0; i < this.dataStore.length; ++i) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]) ;
		}
	}
	return tempSet ;
}


// subset() - first checks if proposed subset's length is less than the
// larger set being compared. if subset length is greater, then cannot
// be subset. 
// if smaller, check if each member of subset is member of larger set.
// if any member is not in larger set, return false and stop.
// if gets to end of larger set, then return true.
//function subset(set) {
//	if (this.size() > set.size()) {
//		return false ;
//	}
//	else {
//		for (var member in this.dataStore) {
//			// DEBUG
//			print ("dmp member: " + member) ;
//			if (!set.contains(member)) {
//				return false ;
//			}
//		}
//	}
//	return true ;
//}

// Re-written version of subset because for var in is not working.
function subset(set) {
	if (this.size() > set.size()) {
		return false ;
	}
	else {
		for (var i = 0; i < this.dataStore.length; ++i) {
			if(!set.contains(this.dataStore[i])) {
				return false ;
			}
		}
	}
	return true ;
}


// size() - needed by subset() before checking to see if each element of
// sets match.
function size() {
	return this.dataStore.length ;
}
