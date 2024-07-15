import { cardInputFormatter } from './cardInputFormatter';
import { cepInputFormatter } from './cepInputFormatter';
import { cestInputFormatter } from './cestInputFormatter';
import { cnpjInputFormatter } from './cnpjInputFormatter';
import { cpfInputFormatter } from './cpfInputFormatter';
import { cpfOrCnpjInputFormatter } from './cpfOrCnpjInputFormatter';
import { dateInputFormatter } from './dateInputFormatter';
import { hourInputFormatter } from './hourInputFormatter';
import { plateInputFormatter } from './plateInputFormatter';
import { telInputFormatter } from './telInputFormatter';
import { certBirthInputFormatter } from './certBirthInputFormatter';
import { realInputFormatter } from './realInputFormatter';
import { alturaInputFormatter } from './alturaInputFormatter';
import { pesoInputFormatter } from './pesoInputFormatter';
import { validadeCartaoInputFormatter } from './validadeCartaoInputFormatter';
import { kmInputFormatter } from './kmInputFormatter';
import { temperaturaInputFormatter } from './temperaturaInputFormatter';

class Formatter {
  static cardInputFormatter = cardInputFormatter;
  static cepInputFormatter = cepInputFormatter;
  static cestInputFormatter = cestInputFormatter;
  static cnpjInputFormatter = cnpjInputFormatter;
  static cpfInputFormatter = cpfInputFormatter;
  static cpfOrCnpjInputFormatter = cpfOrCnpjInputFormatter;
  static dateInputFormatter = dateInputFormatter;
  static hourInputFormatter = hourInputFormatter;
  static plateInputFormatter = plateInputFormatter;
  static telInputFormatter = telInputFormatter;
  static certBirthInputFormatter = certBirthInputFormatter;
  static realInputFormatter = realInputFormatter;
  static alturaInputFormatter = alturaInputFormatter;
  static pesoInputFormatter = pesoInputFormatter;
  static kmInputFormatter = kmInputFormatter;
  static validadeCartaoInputFormatter = validadeCartaoInputFormatter;
  static temperaturaInputFormatter = temperaturaInputFormatter;
}

export {
  Formatter,
  cardInputFormatter,
  cepInputFormatter,
  cestInputFormatter,
  cnpjInputFormatter,
  cpfInputFormatter,
  cpfOrCnpjInputFormatter,
  dateInputFormatter,
  hourInputFormatter,
  plateInputFormatter,
  telInputFormatter,
  certBirthInputFormatter,
  realInputFormatter,
  alturaInputFormatter,
  pesoInputFormatter,
  kmInputFormatter,
  validadeCartaoInputFormatter,
  temperaturaInputFormatter,
};
