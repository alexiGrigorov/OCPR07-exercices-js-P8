// Créez votre fonction ici

function calculateAverage(numbers) {
  if (!numbers) {
    return "No numbers to calculate average";
  }
  return numbers.reduce((acc, number) => acc + number, 0) / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
