import { gerarCNPJ } from './gerarCNPJ';
import { gerarCPF } from './gerarCPF';
import { isCNPJValido } from './isCNPJValido';
import { isCPFValido } from './isCPFValido';
import { obterCnpj } from './obterCnpj';
import { obterCpf } from './obterCpf';
import { obterCep } from './obterCep';
import { obterTelefone } from './obterTelefone';
import { obterReal } from './obterReal';
import { removeCaracteres } from './removeCaracteres';
import { removeSimboloMoeda } from './removeSimboloMoeda';
import { converterMoedaParaNumber } from './converterMoedaParaNumber';

class UtilBrasilFields {
  static gerarCPF = gerarCPF;
  static isCPFValido = isCPFValido;
  static gerarCNPJ = gerarCNPJ;
  static isCNPJValido = isCNPJValido;
  static obterCpf = obterCpf;
  static obterCnpj = obterCnpj;
  static obterCep = obterCep;
  static obterTelefone = obterTelefone;
  static obterReal = obterReal;
  static removeCaracteres = removeCaracteres;
  static removeSimboloMoeda = removeSimboloMoeda;
  static converterMoedaParaNumber = converterMoedaParaNumber;
}

export {
  UtilBrasilFields,
  gerarCPF,
  isCPFValido,
  gerarCNPJ,
  isCNPJValido,
  obterCpf,
  obterCnpj,
  obterCep,
  obterTelefone,
  obterReal,
  removeCaracteres,
  removeSimboloMoeda,
  converterMoedaParaNumber,
};
