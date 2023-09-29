function berekenCylinderInhoud(diameter, hoogte) {
    const straal = diameter / 2;
    const inhoud = Math.PI * Math.pow(straal, 2) * hoogte;
    return inhoud;
}

let cylinderInhoud = berekenCylinderInhoud(8, 10);
console.log(cylinderInhoud);