/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

alert("It's a zombie apocalypse. You wake up, go downstairs and find a bloodthirsty zombie in your living room!");
var weapon = prompt("You head to the kitchen to find a weapon. What do you choose? A large butcher's knife, a rolling pin, or a frying pan?");
var randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if(randomNumber === 0 ){
  alert("The Zombie bites you, you lose!");
}
else if(randomNumber === 1 ){
  alert("You killed the zombie with your" + " " + weapon + ". You win!");
}
