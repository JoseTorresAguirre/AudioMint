// scripts/mint.js
async function main() {
  const [owner] = await ethers.getSigners();

  // Reemplaza con la dirección del contrato desplegado
  const contractAddress = "0x495dD7E254A9AD52C3d53b336A1773c0B65281be";
  const Muscitoken = await ethers.getContractFactory("Muscitoken");
  const musciTokenContract = await Muscitoken.attach(contractAddress);

  // La dirección a la que deseas mintar los tokens
  const recipientAddress = "0x56929428E78EE6c64ce8C376afB47398A7249F5C";
  const amount = ethers.utils.parseUnits("1000", 18); // Mint 100 MUS (ajusta la cantidad según sea necesario)

  const tx = await musciTokenContract.mint(recipientAddress, amount);
  await tx.wait();

  console.log(`Minted ${amount} MUS to ${recipientAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
