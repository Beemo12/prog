let mijnArray = [42, "Hallo", true, [1, 2, 3], { naam: "gebruiker" }];

console.log("Initiële array:", mijnArray);

mijnArray.push("Nieuw item");
console.log("Array na push:", mijnArray);

let verwijderdItem = mijnArray.pop();
console.log("Verwijderd item na pop:", verwijderdItem, "\nArray na pop:", mijnArray);

mijnArray.unshift("Eerste item");
console.log("Array na unshift:", mijnArray);

let shiftItem = mijnArray.shift();
console.log("Verwijderd item na shift:", shiftItem, "\nArray na shift:", mijnArray);

console.log("Gesliced array:", mijnArray.slice(1, 3));

console.log("Index van 'true':", mijnArray.indexOf(true));

console.log("Is 'Hallo' aanwezig?", mijnArray.includes("Hallo"));

mijnArray.reverse();
console.log("Array na reverse:", mijnArray);

console.log("Samengevoegd array:", mijnArray.concat([10, 20, 30]));

console.log("Gefilterd array (alleen getallen):", mijnArray.filter(item => typeof item === 'number'));
