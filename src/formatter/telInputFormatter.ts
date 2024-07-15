import { obterTelefone } from '../utilBrasilFields/obterTelefone';
import { handleInputValue } from './utils/handleInputValue';

export function telInputFormatter(callback: (value: string) => void) {
  return (value: any) => {
    try {
      const handledValue = handleInputValue(value);
      callback(obterTelefone(handledValue));
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
