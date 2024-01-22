var CryptoDoggies = artifacts.require("../contracts/CryptoDoggies.sol");

module.exports = function (deployer) {
  deployer.deploy(CryptoDoggies);
};
