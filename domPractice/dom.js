


document.querySelector("body").style.fontFamily="Courier";


//Adding body text
var fullName = document.querySelector("#fullname");

	fullName.innerHTML = "Aaron Newcomer";

var hometown = document.querySelector("#hometown");

	hometown.innerHTML = "Dayton, OH";

var movie = document.querySelector("#movie");

	movie.innerHTML = "Oldboy";

var food = document.querySelector("#food");

	food.innerHTML = "Momma's Chili";

var redList = document.querySelectorAll("li");
for (var i = 0; i < redList.length; i++) {
  redList[i].style.color = "red";
  redList[i].className ="listitem";
};
//listClass.style.color="red";

var image = document.createElement("img");
image.src = "https://pbs.twimg.com/profile_images/711983895407960064/liIRSoxx.jpg";
image.setAttribute = ("height", "500");
image.setAttribute = ("width", "300");
document.querySelector("body").appendChild(image);
