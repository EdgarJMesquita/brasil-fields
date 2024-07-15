import { MaskType } from '../formatter/constants/maskType';
import { mask } from '../formatter/utils/mask';

export function obterCpf(value: string) {
  return mask(value, { mask: MaskType.CPF, digitsOnly: true });
}
