function verbing(string) {
	if (string.length >=3 && string.substring(string.length -3) === "ing") {
			console.log(string +"ly")
	}
	else if(string.length >=3) {
		console.log(string +"ing")
	}
	else {
		console.log(string);
	}
}
verbing("fold");
verbing("jostaing");
verbing("at");
