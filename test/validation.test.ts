import assert from 'assert';
import { validateAdjustment } from '../src/validation';

describe('Validation', () => {
  it('should validate adjustment successfully', () => {
    const chainlinkPrice = 2;
    const uniswapPrice = 2;
    const isValid = validateAdjustment(chainlinkPrice, uniswapPrice);
    assert(isValid, 'Adjustment should be valid');
  });

  it('should fail validation if prices are not aligned', () => {
    const chainlinkPrice = 2;
    const uniswapPrice = 1.5;
    const isValid = validateAdjustment(chainlinkPrice, uniswapPrice);
    assert(!isValid, 'Adjustment should be invalid');
  });
});
