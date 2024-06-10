
Uniswap Sync Bot

Overview
The Uniswap Sync Bot is designed to ensure the exchange rates in a Uniswap V3 pool are in sync with Chainlink price feeds. This helps maintain consistency and prevents transaction failures due to mismatched prices between the two platforms.

Features
Fetches current prices from Chainlink.
Fetches current exchange rates from Uniswap V3 pools.
Calculates the necessary swap amount to adjust Uniswap rates to match Chainlink prices.
Executes swaps on Uniswap to adjust the rates.
Validates the adjustment to ensure consistency.

Technologies Used
Node.js
TypeScript
Hardhat
Ethers.js
Solidity
Mocha (for testing)

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed
Hardhat installed globally
Infura Project ID
Private key for a wallet with sufficient funds for transactions
Address of the Uniswap V3 pool you want to interact with

Clone the repository:
git clone 
cd uniswap-sync-bot/


Install dependencies:
npm install


Set up environment variables:

Create a .env file in the root directory and add the following:

INFURA_PROJECT_ID=your_infura_project_id
PRIVATE_KEY=your_private_key
CHAINLINK_PRICE_FEED_ADDRESS=your_chainlink_price_feed_address
UNISWAP_POOL_ADDRESS=your_uniswap_pool_address

Compile the contracts:
npx hardhat compile

Deploy the mock contracts (for testing):
npx hardhat run scripts/deploy.ts --network hardhat

Run the bot:
npx ts-node src/index.ts

Run the tests:
npx hardhat test
