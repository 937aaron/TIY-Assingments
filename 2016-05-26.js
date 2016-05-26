var currentAge = 27;
var dead = 72;
snacksaDay = 37;
var lifeSupply= 0;
var leapYear= (dead - currentAge)/4;
lifeSupply += (((dead - currentAge) * 365) + Math.floor(leapYear)) * snacksaDay;
console.log("You will need", lifeSupply, "M&M's to last you until the ripe old age of",dead);
