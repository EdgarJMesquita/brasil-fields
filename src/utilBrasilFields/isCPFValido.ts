import { calculateCPFDigitVerifier } from './utils/calculateCPFDigitVerifier';

export function isCPFValido(cpf: string): boolean {
  if (typeof cpf !== 'string' || !cpf) {
    console.warn('CPF must be a string received: ', typeof cpf);
    return false;
  }

  cpf = cpf.replace(/\D/g, '');

  const blockList = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678909',
  ];

  if (blockList.includes(cpf)) return false;

  if (cpf.length !== 11) return false;

  const digits = cpf
    .slice(0, 9)
    .split('')
    .map(it => Number.parseInt(it));

  digits.push(calculateCPFDigitVerifier(digits));

  digits.push(calculateCPFDigitVerifier(digits));

  return digits.join('').slice(9) === cpf.slice(9);
}
