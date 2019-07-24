import { converterFromPrice } from './currency';

describe('testing currency helpers', () => {
  const [convertBTC, convertBRL] = converterFromPrice(37189.97);
  it('should convert correctly given the value', () => {
    expect(convertBTC(0.001)).toBe(37.18997);
  });

  it('should convert correctly given the value', () => {
    expect(convertBRL(50)).toBe(0.001344448516629618);
  });
});
