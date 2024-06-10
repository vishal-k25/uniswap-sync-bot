import assert from 'assert';
import { fetchChainlinkPrices, fetchUniswapPrices } from '../src/priceFetcher';
import { ethers } from 'hardhat';
import dotenv from 'dotenv';

dotenv.config();

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID!;
const UNISWAP_POOL_ADDRESS = process.env.UNISWAP_POOL_ADDRESS!;

describe('Price Fetcher', () => {
  it('should fetch prices from Chainlink', async () => {
    const prices = await fetchChainlinkPrices();
    assert(prices.ARB, 'ARB price should be defined');
    assert(prices.USDC, 'USDC price should be defined');
  });

  it('should fetch prices from Uniswap', async () => {
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);
    const prices = await fetchUniswapPrices(UNISWAP_POOL_ADDRESS, provider);
    assert(prices, 'Uniswap prices should be defined');
  });
});
