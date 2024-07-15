import { MaskType } from '../formatter/constants/maskType';
import { mask } from '../formatter/utils/mask';

export function obterCnpj(value: string) {
  return mask(value, { mask: MaskType.CNPJ, digitsOnly: true });
}
