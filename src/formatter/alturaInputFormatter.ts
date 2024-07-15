import { obterReal } from '../utilBrasilFields/obterReal';
import { handleInputValue } from './utils/handleInputValue';

export function alturaInputFormatter(callback: (value: string) => void) {
  return (value: any) => {
    try {
      const handledValue = handleInputValue(value);
      callback(obterReal(handledValue, { moeda: false }));
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
