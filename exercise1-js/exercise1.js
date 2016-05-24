/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
Sort will sort the value of the array. It can sory by alphabetical or numrical value.
var comics = ["Batman", "X-men", "Wonder Woman"]
comics.sort
>Batman X-men Wonder Woman

// .concat()
concat is used to join to arrays
var comics = ["Batman", "X-men", "Wonder Woman"]
var tvShows = ["Breaking Bad", "Baskets", "Game of Thrones"]
var favoriteThings= comics.concat(tvShows)

// .indexOf()
indexOf tells the position of a value in an array.
var comics = ["Batman", "X-men", "Wonder Woman"]
var a= indexOf.("X-Men")
>1

// .split()
split splits an array into a new array.
var comics = ["Batman", "X-men", "Wonder Woman"]
var s = comics.split("Bat")
>Bat

// .join()
join is used to join strings of an array together and seperated by a set seperator.
var comics = ["Batman", "X-men", "Wonder Woman"]
var n = comics.join()
>Batman,X-men,Wonder Woman

// .pop()
pop is used to remove the last element of an array.
var comics = ["Batman", "X-men", "Wonder Woman"]
comics.pop();
>Batman,X-Men

// .push()
push adds elements to an array
var comics = ["Batman", "X-men", "Wonder Woman"]
comics.push("Spiderman")
>Batman,X-men,Wonder Woman,Spiderman

// .slice()
slice returns the sepcified value of an array including the first value until but not including the last
var comics = ["Batman", "X-men", "Wonder Woman"]
comic.slice(0,2);
>Batman,X-men

// .splice()
splice is used to remove or add items to an array at a specified point in the array.
var comics = ["Batman", "X-men", "Wonder Woman"]
comic.splice(1, 0, "Spiderman", "Jessica Jones");
>Batman, Spiderman, Jessica Jones, X-men, Wonder Woman

// .shift()
shift removes the first item in an array then returns the remainder of the array
var comics = ["Batman", "X-men", "Wonder Woman"]
comic.shift()
>X-men, Wonder Woman,

// .unshift()
unshift adds items to the begining of the array
var comics = ["Batman", "X-men", "Wonder Woman"]
comic.unshift("Spiderman","Punisher")
>Spiderman, Punisher, Batman, X-men, Wonder Woman


// .filter()
filter tests an array by seeing if the return value is true
function rentToDangHigh(value) {
  return value >= 1000;
}
var filt=[800,1200,999,1000].filter(rentToDangHigh);
> [1200, 1000]
// .map()
map creates an array that is the result of a function
var num= [2,4,6]
var plusOne= num.map(function(num){
  return num + 1;
});
console.log(plusOne);
> [3,4,6]
