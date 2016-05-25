var book1= [{title: '"Fight Club"', author:"Chuck Palahniuk", read: true},
			{title: '"Catcher in the Rye"', author: "JD Salinger", read: false},
			{title: '"The Stinky Cheese Man"', author: "Jon Scieeszka", read: true},
			{title: '"Captain Underpants"', author: "Dav Pilkey", read: true},
			{title: '"Harry Potter and the Deathly Hollows"', author: "J.K. Rowling", read: false}];


//	console.log(book1.title, "by", book1.author);

//var book2= {title: "Catcher in the Rye", author: "JD Salinger", read: false};
//	console.log(book2.title, "by" , book2.author);



for (var i = 0; i < book1.length ; i++) {
	if (book1[i].read === true) {
		console.log("You already read", book1[i].title, "by", book1[i].author);
	}
	else {
		console.log("You still need to read", book1[i].title, "by", book1[i].author);
	}
	// if (book1[0].read === true) {
	// 	console.log("You already read", book1[0].title, "by", book1[0].author);
	// }
	// else {
	// 	console.log("You still need to read", book1[0].title, "by", book1[0].author);
	// }

}
