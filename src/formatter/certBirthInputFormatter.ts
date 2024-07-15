import { MaskType } from './constants/maskType';
import { baseNumberMaskHandler } from './utils/baseNumberMaskHandler';

export function certBirthInputFormatter(callback: (value: string) => void) {
  return (value: any) =>
    callback(baseNumberMaskHandler(value, MaskType.CERT_NASC));
}
