var a,b,x
var fib = 0
var loop = function(n) {
	a=0;
	b=1;
	x=1;
	for (var i=1; i<=n; i++){
		x=a+b;
		a= b;
		b=x;
		fib =+ f.fibNum(i);

	}
 console.log(fib);
};
