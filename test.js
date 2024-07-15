function generateCNPJ() {
  function randomDigit() {
    return Math.floor(Math.random() * 10);
  }

  function calculateDigit(cnpj, weight) {
    let sum = 0;
    for (let i = 0; i < cnpj.length; i++) {
      sum += cnpj[i] * weight[i];
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }

  // Generate the first 12 digits
  let cnpj = [];
  for (let i = 0; i < 8; i++) {
    cnpj.push(randomDigit());
  }
  cnpj.push(0);
  cnpj.push(0);
  cnpj.push(0);
  cnpj.push(1);

  // Pesos para calcular o primeiro dígito verificador
  const firstWeight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  // Calcular o primeiro dígito verificador
  cnpj.push(calculateDigit(cnpj, firstWeight));

  // Pesos para calcular o segundo dígito verificador
  const secondWeight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  // Calcular o segundo dígito verificador
  cnpj.push(calculateDigit(cnpj, secondWeight));

  // Formatando o CNPJ
  return cnpj
    .join('')
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

// console.log(generateCNPJ());

const blockList = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
];

const stripRegex = /[^\d]/g;

function verifierDigit(cnpj) {
  let index = 2;
  let reverse = cnpj
    .split('')
    .map(s => parseInt(s))
    .reverse();
  let sum = 0;

  for (let number of reverse) {
    sum += number * index;
    index = index === 9 ? 2 : index + 1;
  }

  let mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
}

function format(cnpj) {
  return strip(cnpj).replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5'
  );
}

function strip(cnpj) {
  return (cnpj || '').replace(stripRegex, '');
}

function isValid(cnpj, stripBeforeValidation = true) {
  if (stripBeforeValidation) {
    cnpj = strip(cnpj);
  }

  if (!cnpj || cnpj.length !== 14 || blockList.includes(cnpj)) {
    return false;
  }

  let numbers = cnpj.substring(0, 12);
  numbers += verifierDigit(numbers).toString();
  numbers += verifierDigit(numbers).toString();

  return numbers.slice(-2) === cnpj.slice(-2);
}

function generate(useFormat = false) {
  let numbers = '';
  for (let i = 0; i < 12; i++) {
    numbers += Math.floor(Math.random() * 9).toString();
  }

  numbers += verifierDigit(numbers).toString();
  numbers += verifierDigit(numbers).toString();

  return useFormat ? format(numbers) : numbers;
}

// Gerar um CNPJ válido e formatado
console.log(generate(true));

// Validar um CNPJ
console.log(isValid('12.345.678/0001-95')); // Exemplo de uso
