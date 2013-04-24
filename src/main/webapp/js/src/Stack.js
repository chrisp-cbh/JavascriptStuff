function Stack() {
	this.theStack = new Array();
}
	
Stack.prototype.isEmpty = function() {
	return this.theStack.length == 0;
};
Stack.prototype.getSize = function() {
	return this.theStack.length;
};
Stack.prototype.push = function(value){
	this.theStack.push(value);
};
Stack.prototype.pop = function(){
	this.theStack.pop();
};
Stack.prototype.getTop = function(){
	return this.theStack[this.theStack.length-1];
};
