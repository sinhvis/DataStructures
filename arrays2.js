print('\n\n') ;
print('object that stores that weekly obseverd high temperature.  it has functions for adding a new temperature and computing the average of the tempertures stored in the object.') ;

function weekTemps() {
	this.dataStore = [] ;
	this.add = add ;
	this.average = average ;
}

function add(temp) {
	print('adding ', temp) ;
	this.dataStore.push(temp) ;
}

function average() {
	var total = 0 ;
	for (var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i] ;
	}
	return total / this.dataStore.length ;
}

var thisWeek = new weekTemps() ;
thisWeek.add(52) ;
thisWeek.add(55) ;
thisWeek.add(61) ;
thisWeek.add(65) ;
thisWeek.add(55) ;
thisWeek.add(50) ;
thisWeek.add(52) ;
thisWeek.add(49) ;

print(thisWeek.average()) ;
