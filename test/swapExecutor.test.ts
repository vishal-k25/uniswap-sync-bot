import assert from 'assert';
import { ethers } from 'hardhat';
import { executeSwap } from '../src/swapExecutor';
import dotenv from 'dotenv';

dotenv.config();

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const UNISWAP_POOL_ADDRESS = process.env.UNISWAP_POOL_ADDRESS!;

describe('Swap Executor', () => {
  it('should execute swap without errors', async () => {
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);

    try {
      await executeSwap(signer, UNISWAP_POOL_ADDRESS, 200);
      assert(true, 'Swap executed successfully');
    } catch (error) {
      assert.fail('Swap execution failed');
    }
  });
});
