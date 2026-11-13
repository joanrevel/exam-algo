function jouerTour(pointsDeVie, valeur, action) {
  if (action === attaquer) {
    return attaquer(pointsDeVie, valeur, action);
  } else if (action === soigner) {
    return soigner(pointsDeVie, valeur, action);
  }
}

function attaquer(pointsDeVie, valeur) {
  return pointsDeVie - valeur;
}

function soigner(pointsDeVie, valeur) {
  return pointsDeVie + valeur;
}

console.log(jouerTour(100, 30, attaquer)); // 70
console.log(jouerTour(50, 20, soigner)); // 70
console.log(jouerTour(0, 25, soigner)); // 25
