var choices = ["Pizza","Kibbeh", "Burgers", "Chicken Strrrips"];

for (i = 0; i <= choices.length; i++) {
	console.log("My #"+ (i + 1) + " choice is" + " " + choices[i]);
}



var choices = ["Pizza","Kibbeh", "Burgers", "Chicken Strrrips"];

for (i = 0; i <= choices.length; i++) {
	var suffix;
	if (i=== 0) {
		suffix= "1st";

	}
	else if (i=== 1) {
		suffix="2nd";
	}
	else if (i === 2) {
		suffix="3rd";
	}
	else if (i===3){
		suffix="4th";
	}
	console.log("My "+ suffix + " choice is" + " " + choices[i]);
}
