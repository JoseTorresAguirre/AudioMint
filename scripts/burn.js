// scripts/burn.js

const { ethers } = require("hardhat");

async function main() {
  // Conectarse a las cuentas disponibles
  const [owner] = await ethers.getSigners();
  console.log("Conectado a la cuenta:", owner.address);

  // Dirección del contrato desplegado
  const contractAddress = "0x495dD7E254A9AD52C3d53b336A1773c0B65281be"; // Dirección de tu contrato desplegado

  // Obtener el contrato desplegado
  const Muscitoken = await ethers.getContractFactory("Muscitoken");
  const musciTokenContract = await Muscitoken.attach(contractAddress);

  // La cantidad de tokens que deseas quemar (por ejemplo 100 tokens)
  const amountToBurn = ethers.utils.parseUnits("100", 18); // 100 MUS, ajusta según lo que necesites

  // Realizar la transacción para quemar los tokens
  console.log(`Quemando ${amountToBurn} tokens de ${owner.address}`);
  const tx = await musciTokenContract.connect(owner).burn(amountToBurn);

  // Esperar que la transacción se confirme
  await tx.wait();

  console.log(`Tokens quemados exitosamente: ${amountToBurn}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
