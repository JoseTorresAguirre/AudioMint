require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { INFURA_PROJECT_ID, WALLET_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.22", // Asegúrate de que coincida con la versión de tu contrato
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
};
