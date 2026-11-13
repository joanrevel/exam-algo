function accesSalle(estMembre, aInvitation, estBanni) {
  if (estBanni === true) return false;
  else if (estMembre === true || aInvitation === true) return true;
  else return false;
}

console.log(accesSalle(true, false, false)); // true
console.log(accesSalle(false, true, false)); // true
console.log(accesSalle(true, true, true)); // false
