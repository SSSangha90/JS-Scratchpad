

var team = prompt("What team are you supporting in the World Cup?").toLowerCase();
alert("Sensing their chances to lift the trophy.");

switch(team) {
  case "england":
    alert("They have a fairly young team, full of pace and optimism. Without the pressure, they could stand a very good chance!");
    break;
  case "france":
    alert("Full of talent, you certainly wouldn't bet against them. Nonetheless, they seem to go missing in recent tournaments");
    break;
  case "germany":
    alert("Undoubtedly one of the firm favourites given their historic pedigree and current talent, such as Sane and Ozil");
    break;
  case "egypt":
    alert("with Mo Salah in the team, anything can happen!");
    break;
  default:
    alert("Please enter a valid nation");
    break;
}


