// scripts/mint.js
async function main() {
  // Obtén las cuentas disponibles
  const [owner] = await ethers.getSigners(); // Obtener el primer signatario

  // Dirección del contrato desplegado
  const contractAddress = "0x495dD7E254A9AD52C3d53b336A1773c0B65281be"; // Dirección de tu contrato desplegado

  // Obtén la fábrica del contrato y conéctala al contrato desplegado
  const Muscitoken = await ethers.getContractFactory("Muscitoken");
  const musciTokenContract = Muscitoken.attach(contractAddress);

  // Dirección del destinatario y cantidad de tokens a mintear
  const recipientAddress = "0x56929428E78EE6c64ce8C376afB47398A7249F5C"; // Reemplaza con la dirección correcta
  const amount = ethers.utils.parseUnits("1000", 18); // Ajusta la cantidad según sea necesario

  // Realiza la transacción de minting
  console.log(`Minting ${amount} MUS to ${recipientAddress}...`);
  const tx = await musciTokenContract.mint(recipientAddress, amount);

  // Espera a que la transacción se confirme
  await tx.wait();
  console.log(`Minted ${amount} MUS successfully to ${recipientAddress}`);
}

main()
  .then(() => process.exit(0)) // Cerrar el script cuando se complete
  .catch((error) => {
    console.error(error);
    process.exit(1); // Si ocurre un error, terminar con código de error
  });
