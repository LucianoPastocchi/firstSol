var Migrations = artifacts.require("../contracts/lifecycle/Migrations.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
