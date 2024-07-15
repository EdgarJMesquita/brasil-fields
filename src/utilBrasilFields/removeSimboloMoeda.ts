export function removeSimboloMoeda(value: string) {
  return value.replace(/R\$\s?/g, '');
}
