function plural (number, noun) {
	if (number === 1) {
		return number + " " + noun ;
	}
	else if (noun === "goose" && number > 1) {
		return number + " " + "geese";

	}
	else {
		return number +" " + noun + "s";
	}
}
plural(6, "Josta bottle");
plural(1, "dog");
plural(3, "goose");
