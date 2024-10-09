//votre code ici
function pairNumbers(startNumber, endNumber) {
  const result = [];
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result.join(",");
}

export default pairNumbers;
