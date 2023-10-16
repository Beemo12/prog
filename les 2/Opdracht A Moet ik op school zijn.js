let huidigeTijd = new Date();
let hours = huidigeTijd.getHours();

if (hours >= 9 && hours <= 16) {
  console.log("ik moet naar school");
} else {
  console.log("ik moet niet naar school");
}