type MaskOptions = {
  mask: string;
  digitsOnly?: boolean;
  placeholder?: string;
  filter?: ((value: string) => boolean) | RegExp | string;
};

export function mask(value = '', options: MaskOptions) {
  const { mask, placeholder = '#', filter, digitsOnly = false } = options ?? {};

  if (!mask) return value;

  if (typeof filter === 'function') {
    value = value
      .split('')
      .filter(filter)
      .join('');
  }

  if (typeof filter === 'string') {
    value = value.replaceAll(filter, '');
  }

  if (filter instanceof RegExp) {
    value = value
      .split('')
      .filter(it => it.match(filter))
      .join('');
  }

  if (digitsOnly) {
    value = value.replace(/[^0-9]/g, '');
  }

  let builder = '';

  let valueIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (!value[valueIndex]) break;

    if (mask[i] !== placeholder) {
      builder += mask[i];
      continue;
    }

    builder += value[valueIndex];
    valueIndex++;
  }

  return builder;
}

//   console.log(mask('12345678910',{mask:'###.###.###-##', filter: /\d/}))

//   console.log(maskValue('12345bbb67890a1112',{mask:'##.###.###/####-##', digitsOnly: true}))

// console.log(
//   mask('12345bbb67890a1112', {
//     mask: '(##) #.####-####',
//     digitsOnly: true,
//   })
// );
// ``;
