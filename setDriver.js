load("Set.js") ;

var names = new Set() ;
names.add("David") ;
names.add("Jennifer") ;
names.add("Cynthia") ;
names.add("Mike") ;
names.add("Raymond") ;

if (names.add("Mike")) {
	print("Mike added") ;
}
else {
	print("Can't add Mike, must already be in set.") ;
}

print (names.show()) ;

var removed = "Mike" ;
if (names.remove(removed)) {
	print(removed + " removed.") ;
}
else {
	print(removed + " not removed.") ;
}

names.add("Clayton") ;
print(names.show()) ;
removed = "Alisa" ;
if (names.remove("Mike")) {
	print(removed + " removed.") ;
}
else {
	print(removed + " not removed.") ;
}


print("Press Enter for union") ;
readline() ;
load("Set.js") ;
var cis = new Set() ;
cis.add("Mike") ;
cis.add("Clayton") ;
cis.add("Jennifer") ;
cis.add("Raymond") ;

print('Contents of first set: ') ;
print(cis.show()) ;

var dmp = new Set() ;
dmp.add("Raymond") ;
dmp.add("Cynthia") ;
dmp.add("Jonathan") ;
print('Contents of second set: ') ;
print(dmp.show()) ;

var it = new Set() ;
it = cis.union(dmp) ;
print('After union: ') ;
print(it.show()) ;

print('Press Enter for intersect') ;
readline() ;

load("set.js") ;
var cis = new Set() ;
cis.add("Mike") ;
cis.add("Clayton") ;
cis.add("Jennifer") ;
cis.add("Raymond") ;
print("First set: ") ;
print(cis.show()) ;

var dmp = new Set() ;
dmp.add("Raymond") ;
dmp.add("Cynthia") ;
dmp.add("Bryan") ;
print("Second set:") ;
print(dmp.show()) ;

var inter = cis.intersect(dmp) ;
print("After intersect(dmp)") ;
print (inter.show()) ;


print("\n\nPress Enter for subset()") ;
readline() ;
load("set.js") ;
var it = new Set() ;
it.add("Cynthia") ;
it.add("Clayton") ;
it.add("Jennifer") ;
it.add("Danny") ;
it.add("Jonathan") ;
it.add("Terrill") ;
it.add("Raymond") ;
it.add("Mike") ;
print("first set: ") ;
print (it.show()) ;

var dmp = new Set() ;
dmp.add("Cynthia") ;
dmp.add("Raymond") ;
dmp.add("Jonathan") ;
print ("second set") ;
print(dmp.show()) ;

if (dmp.subset(it)) {
	print("dmp is a subset of it.") ;
}
else {
	print("dmp is not a subset of it.") ;
}

print("Press enter for another example of subset()")
readline() ;
load("set.js") ;
var it = new Set() ;
it.add("Cynthia") ;
it.add("Clayton") ;
it.add("Jennifer") ;
it.add("Danny") ;
it.add("Jonathan") ;
it.add("Terrill") ;
it.add("Raymond") ;
it.add("Mike") ;
print("first set: ") ;
print (it.show()) ;

var dmp = new Set() ;
dmp.add("Cynthia") ;
dmp.add("Raymond") ;
dmp.add("Jonathan") ;
dmp.add("Shirley") ;
print ("second set") ;
print(dmp.show()) ;

if (dmp.subset(it)) {
	print("dmp is a subset of it.") ;
}
else {
	print("dmp is not a subset of it.") ;
}


