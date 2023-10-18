let originalList = ['c', 5645, 9393.77, "hallo", true, false, "Goeie morgen", 88, -90, 777.777, 90, 665.33, "F"];
let strings = [], numbers = [], booleans = [];

for (let item of originalList) {
    typeof item === "string" ? strings.push(item) :
    typeof item === "number" ? numbers.push(item) :
    typeof item === "boolean" ? booleans.push(item) : null;
}

console.log("Strings:", strings);
console.log("Numbers:", numbers);
console.log("Booleans:", booleans);