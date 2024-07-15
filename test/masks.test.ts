import { mask } from '../src/formatter/utils/mask';

describe('masks', () => {
  it('mask cep basic', () => {
    expect(mask('60833322', { mask: '#####-###' })).toBe('60833-322');
  });

  it('mask cep with digitsOnly filter', () => {
    expect(mask('6083A3322', { mask: '#####-###', digitsOnly: true })).toBe(
      '60833-322'
    );
  });

  it('mask cep with regex filter', () => {
    expect(mask('6083A3B322_', { mask: '#####-###', filter: /\d/ })).toBe(
      '60833-322'
    );
  });

  it('mask cep with callback filter', () => {
    expect(
      mask('6083A3B322_', {
        mask: '#####-###',
        filter: value => ['0', '1', '2', '3', '4'].includes(value),
      })
    ).not.toBe('60833-322');
  });

  it('mask cpf', () => {
    expect(mask('12345678910', { mask: '###.###.###-##', filter: /\d/ })).toBe(
      '123.456.789-10'
    );
  });
});
