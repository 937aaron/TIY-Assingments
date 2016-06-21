function palindrome() {
	for(var i = 999; i > 1; i --) {
		for (var x = 999; i > 1; i--);
		palin = i*x;
		str = palin.toString();
		backwards = str.split("").reverse().join("");
		if (backwards === str){
		return backwards, str;
	}
	}

}

console.log(palindrome());
