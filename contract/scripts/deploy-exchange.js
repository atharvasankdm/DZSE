// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer1, deployer2] = await hre.ethers.getSigners();

  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Exchange = await hre.ethers.getContractFactory("Exchange");
  const exchange = await Exchange.connect(deployer1).deploy();
  await exchange.deployed();

  const Company = await hre.ethers.getContractFactory("Company");
  const company = await Company.connect(deployer2).deploy();
  await company.deployed();

  console.log(
    "Exchange deployed to:",
    exchange.address,
    " By:",
    deployer1.address
  );
  console.log(
    "Company deployed to:",
    company.address,
    " By:",
    deployer2.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
