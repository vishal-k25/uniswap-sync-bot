import { ethers } from "hardhat";

async function main() {
  // Fetch the deployer account
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy the UniswapSyncBot contract
  const UniswapSyncBot = await ethers.getContractFactory("UniswapSyncBot");
  const bot = await UniswapSyncBot.deploy();

  await bot.deployed();

  console.log("UniswapSyncBot contract deployed to:", bot.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
