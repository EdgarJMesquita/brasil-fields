import { MaskType } from './constants/maskType';
import { handleInputValue } from './utils/handleInputValue';
import { mask } from './utils/mask';

export function cpfOuCnpjInputFormatter(callback: (value: string) => void) {
  return (value: any) => {
    try {
      const handledValue = handleInputValue(value);

      const digitsOnly = handledValue.replace(/\D/g, '');

      const maskedValue = mask(digitsOnly, {
        mask: digitsOnly.length <= 11 ? MaskType.CPF : MaskType.CNPJ,
        digitsOnly: true,
      });
      callback(maskedValue);
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
