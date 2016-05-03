function weekTemps() {
	this.dataStore = [] ;
	this.add = add ;
	this.average = average ;
}

function add(temp) {
	print ('pushing ', temp) ;
	this.dataStore.push(temp) ;
}

function average() {
	var total = 0 ;
	for (var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i] ;
	}
	return total ;
}

week = new weekTemps() ;
week.add(1) ;
week.add(2) ;

print (week.average()) ;
