import { ethers } from "ethers";
import { fetchChainlinkPrices, fetchUniswapPrices } from "./priceFetcher";
import { calculateSwapAmount } from "./swapCalculator";
import { executeSwap } from "./swapExecutor";
import { validateAdjustment } from "./validation";
import dotenv from "dotenv";

dotenv.config();

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const UNISWAP_POOL_ADDRESS = process.env.UNISWAP_POOL_ADDRESS!;

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  const chainlinkPrices = await fetchChainlinkPrices();
  const uniswapPrices = await fetchUniswapPrices(UNISWAP_POOL_ADDRESS, provider);

  const swapAmount = calculateSwapAmount(chainlinkPrices.ARB, uniswapPrices[0]);
  await executeSwap(signer, UNISWAP_POOL_ADDRESS, swapAmount);

  const isValid = validateAdjustment(chainlinkPrices.ARB, uniswapPrices[0]);
  console.log(`Adjustment ${isValid ? 'successful' : 'failed'}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
