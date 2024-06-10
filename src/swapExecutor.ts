import { ethers } from "ethers";
import { fetchChainlinkPrices, fetchUniswapPrices } from "./priceFetcher";
import { calculateSwapAmount } from "./swapCalculator";

const CHAINLINK_API = process.env.CHAINLINK_API!;
const UNISWAP_POOL_ADDRESS = process.env.UNISWAP_POOL_ADDRESS!;

export async function executeSwap(
  signer: ethers.Wallet,
  poolAddress: string,
  swapAmount: number
) {
  const provider = signer.provider!;
  const chainlinkPrices = await fetchChainlinkPrices();
  const uniswapPrices = await fetchUniswapPrices(poolAddress, provider);

  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const contractABI = [
    "function executeSwap(address,bool,int256,uint160)"
  ];

  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.executeSwap(poolAddress, true, swapAmount, 0);
  await tx.wait();
}
