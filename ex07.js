function appliquerRemise(prix, pourcentage) {}

function ajouterTVA(prix) {
  let ajouterTVA = prix;
}

function calculerPrixFinal(prix, pourcentage) {
  return prix * (1 - pourcentage / 100) * 1.2;
}

appliquerRemise(100, 10); // 90
ajouterTVA(50); // 60

console.log(calculerPrixFinal(100, 10)); // 108
console.log(calculerPrixFinal(50, 20)); // 48
console.log(calculerPrixFinal(200, 0)); // 240
