import { UtilBrasilFields } from '../src/utilBrasilFields';

describe('validators', () => {
  it('isCPFValido valid', () => {
    expect(UtilBrasilFields.isCPFValido('36039544163')).toBeTruthy();
  });

  it('isCPFValido invalid', () => {
    expect(UtilBrasilFields.isCPFValido('36039544162')).toBeFalsy();
  });

  it('gerarCPF', () => {
    const cpf = UtilBrasilFields.gerarCPF();
    expect(UtilBrasilFields.isCPFValido(cpf)).toBeTruthy();
  });

  it('gerarCNPJ', () => {
    const cnpj = UtilBrasilFields.gerarCNPJ();
    expect(UtilBrasilFields.isCNPJValido(cnpj)).toBeTruthy();
  });

  it('isCNPJValido valid', () => {
    expect(UtilBrasilFields.isCNPJValido('30755641000117')).toBeTruthy();
  });

  it('isCNPJValido invalid', () => {
    expect(UtilBrasilFields.isCNPJValido('30755641000112')).toBeFalsy();
  });

  it('obterCep', () => {
    expect(UtilBrasilFields.obterCep('12345678')).toBe('12345-678');
  });

  it('obterCpf', () => {
    expect(UtilBrasilFields.obterCpf('12345678909')).toBe('123.456.789-09');
  });

  it('obterCnpj', () => {
    expect(UtilBrasilFields.obterCnpj('12345678909101')).toBe(
      '12.345.678/9091-01'
    );
  });

  it('obterTelefone default', () => {
    expect(UtilBrasilFields.obterTelefone('00123456789')).toBe(
      '(00) 12345-6789'
    );
  });

  it('obterTelefone ddd false', () => {
    expect(UtilBrasilFields.obterTelefone('123456789', { ddd: false })).toBe(
      '12345-6789'
    );
  });

  it('obterTelefone ddd false without 9', () => {
    expect(UtilBrasilFields.obterTelefone('12345678', { ddd: false })).toBe(
      '1234-5678'
    );
  });

  it('obterTelefone mascara false with 9', () => {
    expect(UtilBrasilFields.obterTelefone('23456789', { mascara: false })).toBe(
      '23456789'
    );
  });

  it('obterTelefone mascara false without 9', () => {
    expect(UtilBrasilFields.obterTelefone('23456789', { mascara: false })).toBe(
      '23456789'
    );
  });

  it('obterReal moeda false', () => {
    expect(UtilBrasilFields.obterReal('23456789', { moeda: false })).toBe(
      '234.567,89'
    );
  });

  it('obterReal', () => {
    expect(UtilBrasilFields.obterReal('23456789')).toBe('R$ 234.567,89');
  });

  it('obterReal moeda false number', () => {
    expect(UtilBrasilFields.obterReal('23456789', { moeda: false })).toBe(
      '234.567,89'
    );
  });

  it('obterReal number integer', () => {
    expect(UtilBrasilFields.obterReal(23456789)).toBe('R$ 23.456.789,00');
  });

  it('obterReal number float', () => {
    expect(UtilBrasilFields.obterReal(234567.89)).toBe('R$ 234.567,89');
  });

  it('obterReal decimal 0', () => {
    expect(UtilBrasilFields.obterReal(234567.85, { decimal: 0 })).toBe(
      'R$ 234.567'
    );
  });

  it('obterReal decimal 3', () => {
    expect(UtilBrasilFields.obterReal(234567.85, { decimal: 3 })).toBe(
      'R$ 234.567,850'
    );
  });

  it('removeCaracteres', () => {
    expect(UtilBrasilFields.removeCaracteres('abc 123 @ & ( - _+ -')).toBe(
      'abc123'
    );
  });

  it('removeSimboloMoeda', () => {
    expect(UtilBrasilFields.removeSimboloMoeda('R$ 123,00')).toBe('123,00');
  });

  it('converterMoedaParaFloat', () => {
    expect(UtilBrasilFields.converterMoedaParaNumber('R$ 123,00')).toBe(123);
  });

  it('converterMoedaParaFloat', () => {
    expect(UtilBrasilFields.converterMoedaParaNumber('R$ 123,99')).toBe(123.99);
  });
});
