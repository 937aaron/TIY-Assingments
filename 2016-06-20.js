function notBad (string) {
	if (string.search("not bad") >= 0){
		console.log(string.replace("not bad", "good"));
	}
	else {
		console.log(string);
	}
}
notBad("Josta is not bad");
notBad("Mad Max is amaze");
