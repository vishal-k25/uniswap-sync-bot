export function validateAdjustment(chainlinkPrice: number, uniswapPrice: number): boolean {
    // Logic to validate if the adjustment was successful
    return Math.abs(chainlinkPrice - uniswapPrice) < 0.01;
  }
  