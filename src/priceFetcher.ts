import { ethers } from "ethers";
import axios from "axios";

const CHAINLINK_API = '...'; // Chainlink API endpoint

export async function fetchChainlinkPrices() {
  const response = await axios.get(CHAINLINK_API);
  return response.data;
}

export async function fetchUniswapPrices(poolAddress: string, provider: ethers.providers.Provider) {
  const poolContract = new ethers.Contract(poolAddress, ['function slot0() view returns (uint160, int24, uint16, uint16, uint16, uint8, bool)'], provider);
  const slot0 = await poolContract.slot0();
  return slot0;
}
