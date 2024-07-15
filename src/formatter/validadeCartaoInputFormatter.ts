import { MaskType } from './constants/maskType';
import { handleInputValue } from './utils/handleInputValue';
import { mask } from './utils/mask';

export function validadeCartaoInputFormatter(
  callback: (value: string) => void
) {
  return (value: any) => {
    try {
      const handledValue = handleInputValue(value);
      const digitsOnly = handledValue.replace(/\D/g, '');

      const result = mask(digitsOnly, {
        mask:
          digitsOnly.length < 4
            ? MaskType.VALIDADE_CARTAO1
            : MaskType.VALIDADE_CARTAO2,
        digitsOnly: true,
      });

      callback(result);
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
