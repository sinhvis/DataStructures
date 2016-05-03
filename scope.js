// when defining variables without var, variable automatically has 
// global scope

function showScope() {
	scope = "local" ;
	return scope ;
}

scope = "global" ;
print(scope) ;
print(showScope()) ;
print(scope) ;
