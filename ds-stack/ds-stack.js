var Stack = function() {
	//your code is here
	this._storage = [];
};


Stack.prototype.add = function(value) {
	// body...
	this._storage.push(value);
};


Stack.prototype.remove = function() {
	// body...
	return this._storage.pop();
};


