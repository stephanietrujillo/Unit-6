/* Javascript code that accepts two integers and returns a random number between the two */

function randomInt(min,max) {
var min = +prompt ("Enter a number.");
var max = +prompt ("Enter another number. ");

var raNum= Math.floor(Math.random() * (max-min=1)) + min;

return raNum;
}
alert(randomInt());
