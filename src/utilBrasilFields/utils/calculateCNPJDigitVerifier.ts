export function calculateCNPJDigitVerifier(cnpj: number[]) {
  var index = 2;

  var reverse = Array.from(cnpj).reverse();

  var sum = 0;

  for (let number of reverse) {
    sum += number * index;
    index = index === 9 ? 2 : index + 1;
  }

  var mod = sum % 11;

  return mod < 2 ? 0 : 11 - mod;
}
