function berekenLangeZijde(lengte, hoogte) {
    const langeZijde = Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
    return langeZijde;
}

let langeZijde = berekenLangeZijde(3, 4);
console.log(langeZijde);