/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var answer = prompt("What is the capital of France?");

if(answer === "Paris"){
  alert("You are correct!");
}
else if(answer === "paris"){
  alert("You are correct!");
}
else {
  alert("Sorry," + " " + answer + " " + "is not correct");
}

var favouriteAnimal = prompt("What's your favourite animal?");

if(favouriteAnimal === "Dog"){
  alert("Dogs are the one!");
}
else if(favouriteAnimal === "Cat"){
  alert("You kidding?");
}
else {
  alert("meh");
}
