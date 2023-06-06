const { ethers, upgrades } = require("hardhat");

const PROXY = '0x9Ebba89AbC39c2952822A9E9dc2218c0d008F961';

async function main() {
 const Pizza2 = await ethers.getContractFactory("Pizza2");
 console.log("Upgrading Pizza...");
 await upgrades.upgradeProxy(PROXY, Pizza2);
 console.log("Pizza upgraded successfully");
}

main();