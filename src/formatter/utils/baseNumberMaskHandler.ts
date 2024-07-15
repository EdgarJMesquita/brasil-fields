import { MaskType } from '../constants/maskType';
import { mask } from './mask';

export function baseNumberMaskHandler(value: any, selectedMask: MaskType) {
  try {
    if (typeof value === 'string') {
      return mask(value, {
        mask: selectedMask,
        digitsOnly: true,
      });
    }
    if (typeof value?.target?.value === 'string') {
      return mask(value?.target?.value, {
        mask: selectedMask,
        digitsOnly: true,
      });
    }
    return value;
  } catch (error) {
    console.warn(error);
    return value;
  }
}
