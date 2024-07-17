import { Formatter } from '../src/formatter';

describe('formatters', () => {
  it('cepInputFormatter', () => {
    Formatter.cepInputFormatter(value => {
      expect(value).toBe('12345-678');
    })('123C-45678');
  });

  it('cpfInputFormatter', () => {
    Formatter.cpfInputFormatter(value => {
      expect(value).toBe('123.456.789-10');
    })('12345AB678910');
  });

  it('cpfOrCnpjInputFormatter cnpj', () => {
    Formatter.cpfOrCnpjInputFormatter(value => {
      expect(value).toBe('12.345.678/9101-11');
    })('123456789101112');
  });

  it('cpfOrCnpjInputFormatter cpf', () => {
    Formatter.cpfOrCnpjInputFormatter(value => {
      expect(value).toBe('098.351.022-0');
    })('0983510220');
  });

  it('cpfOuCnpjInputFormatter cnpj', () => {
    Formatter.cpfOuCnpjInputFormatter(value => {
      expect(value).toBe('12.345.678/9101-11');
    })('123456789101112');
  });

  it('cpfOuCnpjInputFormatter cpf', () => {
    Formatter.cpfOuCnpjInputFormatter(value => {
      expect(value).toBe('098.351.022-0');
    })('0983510220');
  });

  it('cardInputFormatter', () => {
    Formatter.cardInputFormatter(value => {
      expect(value).toBe('1111 2222 3333 4444');
    })('1111222233334444');
  });

  it('cartaoBancarioInputFormatter', () => {
    Formatter.cartaoBancarioInputFormatter(value => {
      expect(value).toBe('1111 2222 3333 4444');
    })('1111222233334444');
  });

  it('cestInputFormatter', () => {
    Formatter.cestInputFormatter(value => {
      expect(value).toBe('11.112.22');
    })('1111222233334444');
  });

  it('dateInputFormatter', () => {
    Formatter.dateInputFormatter(value => {
      expect(value).toBe('12/11/2000');
    })('12112000');
  });

  it('dataInputFormatter', () => {
    Formatter.dataInputFormatter(value => {
      expect(value).toBe('12/11/2000');
    })('12112000');
  });

  it('hourInputFormatter', () => {
    Formatter.hourInputFormatter(value => {
      expect(value).toBe('10:20');
    })('1020');
  });

  it('horaInputFormatter', () => {
    Formatter.horaInputFormatter(value => {
      expect(value).toBe('10:20');
    })('1020');
  });

  it('plateInputFormatter old', () => {
    Formatter.plateInputFormatter(value => {
      expect(value).toBe('abc-1234');
    })('abc1234');
  });

  it('plateInputFormatter new', () => {
    Formatter.plateInputFormatter(value => {
      expect(value).toBe('abc1d23');
    })('abc1d23');
  });

  it('placaVeiculoInputFormatter old', () => {
    Formatter.placaVeiculoInputFormatter(value => {
      expect(value).toBe('abc-1234');
    })('abc1234');
  });

  it('placaVeiculoInputFormatter new', () => {
    Formatter.placaVeiculoInputFormatter(value => {
      expect(value).toBe('abc1d23');
    })('abc1d23');
  });

  it('telInputFormatter with 9', () => {
    Formatter.telInputFormatter(value => {
      expect(value).toBe('(12) 94567-8910');
    })('12945678910');
  });

  it('telInputFormatter without 9', () => {
    Formatter.telInputFormatter(value => {
      expect(value).toBe('(12) 3456-7891');
    })('1234567891');
  });

  it('telefoneInputFormatter with 9', () => {
    Formatter.telefoneInputFormatter(value => {
      expect(value).toBe('(12) 94567-8910');
    })('12945678910');
  });

  it('telefoneInputFormatter without 9', () => {
    Formatter.telefoneInputFormatter(value => {
      expect(value).toBe('(12) 3456-7891');
    })('1234567891');
  });

  it('certBirthInputFormatter', () => {
    Formatter.certBirthInputFormatter(value => {
      expect(value).toBe('000000 00 00 0000 0 00000 000 0000000 00');
    })('00000000000000000000000000000000');
  });

  it('certNascimentoInputFormatter', () => {
    Formatter.certNascimentoInputFormatter(value => {
      expect(value).toBe('000000 00 00 0000 0 00000 000 0000000 00');
    })('00000000000000000000000000000000');
  });

  it('realInputFormatter 1,99', () => {
    Formatter.realInputFormatter(value => {
      expect(value).toBe('R$ 1,99');
    })('199');
  });

  it('realInputFormatter 0,01', () => {
    Formatter.realInputFormatter(value => {
      expect(value).toBe('R$ 0,01');
    })('1');
  });

  it('realInputFormatter 10,00', () => {
    Formatter.realInputFormatter(value => {
      expect(value).toBe('R$ 10,00');
    })('1000');
  });

  it('realInputFormatter 100,00', () => {
    Formatter.realInputFormatter(value => {
      expect(value).toBe('R$ 100,00');
    })('10000');
  });

  it('realInputFormatter 01000,00', () => {
    Formatter.realInputFormatter(value => {
      expect(value).toBe('R$ 1.000,00');
    })('0100000');
  });

  it('realInputFormatter 999.999.999,99', () => {
    Formatter.realInputFormatter(value => {
      expect(value).toBe('R$ 999.999.999,99');
    })('99999999999');
  });

  it('alturaInputFormatter', () => {
    Formatter.alturaInputFormatter(value => {
      expect(value).toBe('2,22');
    })('222');
  });

  it('pesoInputFormatter', () => {
    Formatter.pesoInputFormatter(value => {
      expect(value).toBe('2,222');
    })('2222');
  });

  it('kmInputFormatter', () => {
    Formatter.kmInputFormatter(value => {
      expect(value).toBe('333.333');
    })('333333');
  });

  it('validadeCartaoInputFormatter', () => {
    Formatter.validadeCartaoInputFormatter(value => {
      expect(value).toBe('12/12');
    })('1212');
  });

  it('validadeCartaoInputFormatter', () => {
    Formatter.validadeCartaoInputFormatter(value => {
      expect(value).toBe('12/2012');
    })('122012');
  });

  it('temperaturaInputFormatter', () => {
    Formatter.temperaturaInputFormatter(value => {
      expect(value).toBe('27,1');
    })('271');
  });

  it('cnsInputFormatter', () => {
    Formatter.cnsInputFormatter(value => {
      expect(value).toBe('123 4567 8901 1121');
    })('123456789011121');
  });
});
