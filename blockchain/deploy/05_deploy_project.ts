import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper_functions"
import { networkConfig, developmentChains } from "../helper_hardhat.config"
import { ethers } from "hardhat"

const deployProject: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log("----------------------------------------------------")
  log("Deploying Project.sol and waiting for confirmations...")
  const project = await deploy("project", {
    from: deployer,
    args: [],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  log(`project.sol at ${project.address}`)
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(project.address, [])
  }
  const projectContract = await ethers.getContractAt("project", project.address)
  const timeLock = await ethers.getContract("TimeLock")
  const transferTx = await projectContract.transferOwnership(timeLock.address)
  await transferTx.wait(1)
}

export default deployProject
deployProject.tags = ["all", "project"]
