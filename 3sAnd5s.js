var sum = 0

		for(var i =1; i <=1000; i++){
			if (i % 5 === 0 || i % 3 ===0) {
				sum += i;
				console.log(i);
			}
		}
console.log(sum);



var fibNum = 0;
var fib = function(x){
	var a=0;
	var b=1;
	var f=1;
		for (var i=0; i< 10; i++) {
			f=a+b;
			a=b;
			b=f;
		//	if (f % 2===0){
		//	fibNum += i;
		//	}
		//	console.log(i);
		}
	return f;
	//console.log(f);
};

console.log(fibNum);
