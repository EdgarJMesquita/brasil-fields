export function calculateCPFDigitVerifier(cpf: number[]) {
  let sum = 0;
  for (let i = 0; i < cpf.length; i++) {
    sum += cpf[i] * (cpf.length + 1 - i);
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}
