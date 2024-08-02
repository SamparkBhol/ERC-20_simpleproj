const MyToken = artifacts.require("MyToken");

contract("MyToken", accounts => {
  it("should mint tokens correctly", async () => {
    const myToken = await MyToken.deployed();
    await myToken.mint(accounts[1], 1000, { from: accounts[0] });
    const balance = await myToken.balanceOf(accounts[1]);
    assert.equal(balance.toNumber(), 1000, "Minting failed");
  });

  it("should transfer tokens correctly", async () => {
    const myToken = await MyToken.deployed();
    await myToken.transfer(accounts[2], 500, { from: accounts[1] });
    const balance = await myToken.balanceOf(accounts[2]);
    assert.equal(balance.toNumber(), 500, "Transfer failed");
  });

  it("should burn tokens correctly", async () => {
    const myToken = await MyToken.deployed();
    await myToken.burn(200, { from: accounts[2] });
    const balance = await myToken.balanceOf(accounts[2]);
    assert.equal(balance.toNumber(), 300, "Burning failed");
  });
});