import { MaskType } from '../formatter/constants/maskType';
import { mask } from '../formatter/utils/mask';

export function obterCep(value: string) {
  return mask(value, { mask: MaskType.CEP, digitsOnly: true });
}
