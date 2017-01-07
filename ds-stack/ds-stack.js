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

	if(this._storage.length === 0)
		return 0;
	return this._storage.pop();
};


