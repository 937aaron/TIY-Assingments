var inputValue = document.querySelector(".guess").parseInt();

var num = document.querySelector(".guess").onSubmit(Math.floor((Math.random() * 10) + 1);

if (inputValue === num) {
	var congrats = document.createElement("h1");
  congrats = "YAY YOU WIN!";
};
else if (inputValue > num) {
	var lower = document.createElement("h1");
  var lower ="LOWER!";
};
else if (inputValue > num) {
	var higher = document.createElement("h1");
  var higher = "HIGHER!";
};
else {
	var umm = document.createElement("h1");
	var umm ="Dude, did you even type a number?";
};
