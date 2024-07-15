type Options = {
  moeda?: boolean;
  decimal?: number;
};

export function obterReal(value: string | number, options?: Options) {
  const { moeda = true, decimal = 2 } = options ?? {};

  let result = '';

  // handle integer numbers
  if (typeof value === 'number') {
    if (value % 1 !== 0) {
      const [integer, float] = value.toString().split('.');
      const handledFloatPart = decimal ? float.padEnd(decimal, '0') : '';
      result = integer + handledFloatPart;
    } else {
      result = value.toFixed(decimal);
    }
  } else {
    result = value;
  }

  result = result.replace(/\D/g, '');

  result = parseFloat(result).toString();

  result = result.padStart(1 + decimal, '0');

  if (decimal) {
    result = result.replace(RegExp(`(\\d+)(\\d{${decimal}})$`), '$1,$2');
  }

  result = result.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  if (moeda) {
    return 'R$ ' + result;
  }

  return result;
}
