async function main(){
    const Store = await ethers.getContractFactory("Storage");

    const store = await Store.deploy("Voicu", "Bogdan", "Storage App", 250);
    console.log("Contract deployed :", store.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });