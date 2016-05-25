//So I was trying so hard to get a for statement to work.
//and I couldn't. So I looked up some things and found that you could use a function.
//Couldn't get that to work either. Then I found While statement and boy let me tell you...
// MIND BLOWN!

var x = 1, //setting up my variables.
	a = 0, // 3 for the math-y part of making a number then replacing it with a new one
	b = 1, // sum to add the results together.
	i = 1, // and one for the loop counter
	sum=0; // sum to add the results together.
	while (i < 33){ // yo javascript. Loop until i is 33. Its a nice number
		x = a+b; //math-y bit add 2 numbers and that's gonna be x
		if (x % 2 === 0) { //if statement to test if even. odd numbers are odd
			sum += x; //adding our empty variable with the values of x while looping
		}
		//console.log(x); put this in to check if correct
		a=b; //this is the switchy bit of code. a's value becomes the b values
		b=x; //b becomes the result of the previous a+b
		i++; // loop counter to make it run 33 times and not crash the browser

	}
	console.log(sum); //Show me that number.



// var a,b,x
// var fib = 0
// var loop = function(n) {
// 	a=0;
// 	b=1;
// 	x=1;
// 	for (var i=1; i<=n; i++){
// 		x=a+b;
// 		a= b;
// 		b=x;
// 		fib =+ f.fibNum(i);
//
// 	}
//  console.log(fib);
// };
