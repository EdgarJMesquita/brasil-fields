import { MaskType } from './constants/maskType';
import { handleInputValue } from './utils/handleInputValue';
import { mask } from './utils/mask';

export function placaVeiculoInputFormatter(callback: (value: string) => void) {
  return (value: string) => {
    try {
      const handledValue = handleInputValue(value);

      const alphaNumericsOnly = handledValue.replace(/[^a-zA-Z\d]/g, '');

      const isFifthCaractereAlpha = /[a-zA-Z]/.test(
        alphaNumericsOnly.at(4) ?? ''
      );

      const maskedValue = mask(handledValue, {
        mask: isFifthCaractereAlpha ? '' : MaskType.PLATE,
      });

      callback(maskedValue);
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
