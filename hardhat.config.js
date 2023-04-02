/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY="9d8EJfGWp05LCxfn693w1uRI1q2lGTuy";
const SEPOLIA_PRIVATE_KEY="6f463f7a8b5b6eb3859d95435789358fcf81ece2a3f5aa8ae1c842e2fc77e3f9";
// https://eth-sepolia.g.alchemy.com/v2/9d8EJfGWp05LCxfn693w1uRI1q2lGTuy

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};