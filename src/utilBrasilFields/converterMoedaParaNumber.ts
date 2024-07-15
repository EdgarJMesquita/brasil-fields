import { removeSimboloMoeda } from './removeSimboloMoeda';

export function converterMoedaParaNumber(value: string) {
  let result = value;

  result = removeSimboloMoeda(result);

  result = result.replace(/\./g, '');

  result = result.replace(',', '.');

  return parseFloat(result);
}
