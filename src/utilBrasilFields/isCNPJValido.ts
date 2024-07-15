import { calculateCNPJDigitVerifier } from './utils/calculateCNPJDigitVerifier';

export function isCNPJValido(cnpj: string): boolean {
  if (typeof cnpj !== 'string' || !cnpj) {
    console.warn('CNOJ must be a string received: ', typeof cnpj);
    return false;
  }

  cnpj = cnpj.replace(/\D/g, '');

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

  if (blockList.includes(cnpj)) return false;

  if (cnpj.length !== 14) return false;

  const digits = cnpj
    .slice(0, -2)
    .split('')
    .map(it => Number.parseInt(it));

  digits.push(calculateCNPJDigitVerifier(digits));

  digits.push(calculateCNPJDigitVerifier(digits));

  return digits.join('').slice(-2) === cnpj.slice(-2);
}
