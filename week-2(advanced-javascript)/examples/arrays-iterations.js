var tmp = [1,2,3,4,5];

Array.prototype.foo = function() {
	return 'bar';
};

for (var key in tmp) {
	console.log("key:", key);
	console.log("tmp[key]", tmp[key]);
}
