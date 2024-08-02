# ERC-20_simpleproj

## Introduction

This project is an implementation of an ERC-20 token using Solidity. The token includes minting, burning, and transfer functions.

## Prerequisites

- Node.js
- npm
- Truffle
- Ganache (or any Ethereum client)

## Setup

1. Install Truffle globally:

```bash
npm install -g truffle
```

2. Initialize a new Truffle project:

```bash
truffle init
```

3. Install OpenZeppelin contracts:

```bash
npm install @openzeppelin/contracts
```

## Deployment

1. Compile the contracts:

```bash
truffle compile
```

2. Deploy the contracts:

```bash
truffle migrate
```

## Interaction

1. Run the interaction script:

```bash
node scripts/interact.js
```

## Testing

1. Run the tests:

```bash
truffle test
```
