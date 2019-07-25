import { convertCurrency } from './currency';

describe('testing currency helpers', () => {
  it('should convert correctly given the value', () => {
    expect(convertCurrency(37189.97, 1, 0.001)).toBe(37.18997);
  });

  it('should convert correctly given the value', () => {
    expect(convertCurrency(1, 37189.97, 50)).toBe(0.001344448516629618);
  });
});
