
const hre = require("hardhat");

async function main() {

  const Transaction = await hre.ethers.deployContract("Tracking");

  await Transaction.waitForDeployment();

  console.log(
    `Tracking deployed to ${Transaction.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
