import { obterCnpj } from './obterCnpj';
import { calculateCNPJDigitVerifier } from './utils/calculateCNPJDigitVerifier';

export function gerarCNPJ(masked?: boolean): string {
  function generateRandom() {
    return Math.floor(Math.random() * 10);
  }

  let cnpj: number[] = [];

  for (let i = 0; i < 8; i++) {
    cnpj.push(generateRandom());
  }

  cnpj.push(0);
  cnpj.push(0);
  cnpj.push(0);
  cnpj.push(1);

  cnpj.push(calculateCNPJDigitVerifier(cnpj));
  cnpj.push(calculateCNPJDigitVerifier(cnpj));

  const cnpjString = cnpj.join('');

  if (masked) {
    return obterCnpj(cnpjString);
  }

  return cnpjString;
}
