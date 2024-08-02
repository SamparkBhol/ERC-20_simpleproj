const Web3 = require('web3');
const contract = require('@truffle/contract');
const MyTokenArtifact = require('../build/contracts/MyToken.json');

// Configure web3
const web3 = new Web3('http://localhost:8545'); // Change to your node URL

// Interact with the contract
const MyToken = contract(MyTokenArtifact);
MyToken.setProvider(web3.currentProvider);

async function main() {
    const accounts = await web3.eth.getAccounts();
    const myToken = await MyToken.deployed();

    // Mint tokens
    await myToken.mint(accounts[1], 1000, { from: accounts[0] });
    console.log(`Minted 1000 tokens to ${accounts[1]}`);

    // Transfer tokens
    await myToken.transfer(accounts[2], 500, { from: accounts[1] });
    console.log(`Transferred 500 tokens from ${accounts[1]} to ${accounts[2]}`);

    // Burn tokens
    await myToken.burn(200, { from: accounts[2] });
    console.log(`Burned 200 tokens from ${accounts[2]}`);
}

main().catch((err) => console.error(err));