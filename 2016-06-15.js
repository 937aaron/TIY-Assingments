function fixStart (string) {
	var first= string[0];
	console.log(first);
	for (var x= 1; x < string.length; x++){
		var replace = string.substring(2,x)
		if (replace===first) {
			replace = "*"
			string.replace(replace, "*");
			console.log (replace);
			console.log(string);
			console.log(x);
		}
		else {

		}

	}
			string.replace(replace, "*");
			console.log (replace);
			console.log(string);
			console.log(x);
			console.log(string);
			console.log(x);
}
fixStart("babby");
