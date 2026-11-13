function formaterDuree(minutes) {
  let hours = 0;

  if (minutes < 60) {
    let hours = 0;
  }
  if (minutes >= 120) {
    let hours = 2;
    let formaterDuree = minutes % 60;
    if (minutes >= 60 && minutes < 120) {
      let hours = 1;
    }
    return hours + " h" + formaterDuree + " min";
  }
}

console.log(formaterDuree(135)); // "2h15min"
console.log(formaterDuree(60)); // "1h0min"
console.log(formaterDuree(45)); // "0h45min"
