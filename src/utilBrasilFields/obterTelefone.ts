import { MaskType } from '../formatter/constants/maskType';
import { mask } from '../formatter/utils/mask';

type Options = {
  mascara?: boolean;
  ddd?: boolean;
};

export function obterTelefone(value: string, options?: Options) {
  const digitsOnly = value.replace(/\D/g, '');

  const { ddd = true, mascara = true } = options ?? {};

  let selectedMask = '';

  if (!mascara) {
    return digitsOnly;
  }

  const without9 = ddd ? digitsOnly.length <= 10 : digitsOnly.length <= 8;

  if (ddd) {
    selectedMask = without9 ? MaskType.TEL : MaskType.TEL_WITH_9;
  } else {
    selectedMask = without9 ? MaskType.TEL_WITH_9_NO_DDD : MaskType.TEL_NO_DDD;
  }

  return mask(value, {
    mask: selectedMask,
    digitsOnly: true,
  });
}
