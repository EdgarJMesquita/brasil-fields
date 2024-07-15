import { obterReal } from '../utilBrasilFields/obterReal';
import { handleInputValue } from './utils/handleInputValue';

export function realInputFormatter(callback: (value: string) => void) {
  return (value: any) => {
    try {
      const handledValue = handleInputValue(value);
      callback(obterReal(handledValue));
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
