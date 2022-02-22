// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract = require("../artifacts/contracts/storage.sol/Storage.json");



// Provider = Provider - this is a node provider that gives you read and write access to the blockchain
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// Signer = Signer - this represents an Ethereum account that has the ability to sign transactions.
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract = Contract - this is an Ethers.js object that represents a specific contract deployed on-chain.
const storageContranct = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await storageContranct.message();
    console.log("The message is: " + message);

    const getName = await storageContranct.getName();
    console.log(getName);

   const  newMessage = await storageContranct.update("Up lvl2");
   await newMessage.wait();

   const message2 = await storageContranct.message();
   console.log("The new message is: " + message2);
  }
  main();