// scripts/balance.js

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

  // Dirección para la cual deseas consultar el saldo (puede ser la tuya o cualquier dirección)
  const addressToCheck = owner.address; // Cambia por la dirección que deseas consultar

  // Consultar el balance
  const balance = await musciTokenContract.balanceOf(addressToCheck);

  // Mostrar el balance en consola
  console.log(
    `El saldo de ${addressToCheck} es: ${ethers.utils.formatUnits(
      balance,
      18
    )} MUS`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
