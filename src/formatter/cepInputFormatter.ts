import { MaskType } from './constants/maskType';
import { baseNumberMaskHandler } from './utils/baseNumberMaskHandler';

export function cepInputFormatter(callback: (value: string) => void) {
  return (value: any) => callback(baseNumberMaskHandler(value, MaskType.CEP));
}
