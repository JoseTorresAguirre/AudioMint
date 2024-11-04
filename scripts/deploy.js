const hre = require("hardhat");

async function main() {
  // Obtener la lista de cuentas disponibles
  const [deployer] = await hre.ethers.getSigners();

  console.log("Desplegando contratos con la cuenta:", deployer.address);

  // Obtener el contrato a desplegar
  const Muscitoken = await hre.ethers.getContractFactory("Muscitoken");

  // Especificar las direcciones para el constructor
  const initialMintAddress = "0x56929428E78EE6c64ce8C376afB47398A7249F5C"; // Reemplaza con tu dirección de wallet

  // Desplegar el contrato
  const muscitoken = await Muscitoken.deploy(
    deployer.address,
    initialMintAddress
  );

  await muscitoken.deployed();

  console.log("Muscitoken desplegado en:", muscitoken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
