const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.parseEther("CrowdFunding");

  const crowdFunding = await CrowdFunding.deployContract();

  await crowdFunding.waitForDeployment();

  console.log(`CrowdFunding deployed to ${crowdFunding.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
