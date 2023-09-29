function shakeWord(woordDatGeschudtMoetWorden) {
    const characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
  }
  
  var woord1 = shakeWord("Boekenkast");
  var woord2 = shakeWord("Programmeren");
  var woord3 = shakeWord("Functie");
  
  console.log(woord1);
  console.log(woord2);
  console.log(woord3);