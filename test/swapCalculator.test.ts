import assert from 'assert';
import { calculateSwapAmount } from '../src/swapCalculator';

describe('Swap Calculator', () => {
  it('should calculate correct swap amount', () => {
    const chainlinkPrice = 2;
    const uniswapPrice = 1.5;
    const swapAmount = calculateSwapAmount(chainlinkPrice, uniswapPrice);
    assert(swapAmount > 0, 'Swap amount should be greater than 0');
  });
});
