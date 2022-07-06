function maiorMenor(array) {
  let maior;
  let menor;
  for (let i = 0; i < array.length; i++) {
    if (maior === undefined && menor === undefined) {
      maior = array[i];
      menor = array[i];
    } else {
      if (array[i] > maior) {
        maior = array[i];
      }
      if (array[i] < menor) {
        menor = array[i];
      }
    }
  }
  return [maior, menor];
}

array = [10, 5, 7, 3, 2, 3, 11, 20, 6, 9];
console.log(maiorMenor(array));
