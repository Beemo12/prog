function leeftijdInJaren(geboorteJaar, geboorteMaand, geboorteDag) {
    let geboorteDatum = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag);
    let leeftijdInDagen = (new Date() - geboorteDatum) / (1000 * 60 * 60 * 24);
    return (leeftijdInDagen / 365.25).toFixed(2);
  }
  
  let geboorteJaar = prompt("Welk jaar ben je geboren?");
  let geboorteMaand = prompt("Welke maand ben je geboren?");
  let geboorteDag = prompt("Welke dag ben je geboren?");
  
  console.log(`Je bent ${leeftijdInJaren(geboorteJaar, geboorteMaand, geboorteDag)} jaar oud.`);  