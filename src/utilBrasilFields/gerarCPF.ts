import { obterCpf } from './obterCpf';
import { calculateCPFDigitVerifier } from './utils/calculateCPFDigitVerifier';

export function gerarCPF(masked?: boolean): string {
  function generateRandom() {
    return Math.floor(Math.random() * 10);
  }

  let cpf: number[] = [];

  for (let i = 0; i < 9; i++) {
    cpf.push(generateRandom());
  }

  cpf.push(calculateCPFDigitVerifier(cpf));
  cpf.push(calculateCPFDigitVerifier(cpf));

  const cpfString = cpf.join('');

  if (masked) {
    return obterCpf(cpfString);
  }

  return cpfString;
}
