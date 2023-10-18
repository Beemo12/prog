function spongebobMock(inputString) {
  return inputString.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
}

let origineleZin = "Ik vind java script erg leuk";
let gemockteZin = spongebobMock(origineleZin);

console.log(gemockteZin);
