Hethers

# ⛔️ DEPRECATED

Deprecation of Hethers.js by October 20, 2023\
As we continue to eveolve the Hedera ecosystem, we are committed to ensuring that our developer tools and resources remain easy to use and up-to-date. With this goal in mind, the Hethers.js library will be deprecated by October 20, 2023
If you are currently using or planned to use Hethers in your projects, please consider instead [ethers.js](https://docs.ethers.org/v6/) or [web3js](https://web3js.org/) in combination with [hedera-json-rpc-relay](https://github.com/hashgraph/hedera-json-rpc-relay) before the deprecation date. For ED25519 focused scenarios the [hedera-sdk-js](https://github.com/hashgraph/hedera-sdk-js) may be utilized

---

[![No Maintenance Intended](https://unmaintained.tech/badge.svg)]()
[![npm (tag)](https://img.shields.io/npm/v/@hashgraph/hethers)](https://www.npmjs.com/package/@hashgraph/hethers)
[![Node.js CI](https://github.com/hashgraph/hethers.js/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/hashgraph/hethers.js/actions/workflows/nodejs.yml)

A complete SDK targeting the Hedera Hashgraph Smart Contract Service (EVM) in JavaScript (and TypeScript).
The library is a modified fork of the [ethers](https://github.com/ethers-io/ethers.js) library.

**Features:**

- Keep your private keys in your client, **safe** and sound
- Import and export **JSON wallets**
- Import and export BIP 39 **mnemonic phrases** (12 word backup phrases) and **HD Wallets** (English as well as Czech, French, Italian, Japanese, Korean, Simplified Chinese, Spanish, Traditional Chinese)
- Meta-classes create JavaScript objects from any contract ABI, including **ABIv2** and **Human-Readable ABI**
- Connect to the Hedera Network over both Consensus and Mirror nodes.
- **Modular** packages; include only what you need.
- Extensive [documentation](https://docs.hedera.com/hethers/)
- Large collection of **test cases** which are maintained and added to
- Fully **TypeScript** ready, with definition files and full TypeScript source
- **MIT License** (including ALL dependencies); completely open source to do with as you please

## Keep Updated

For the latest changes, see the [CHANGELOG](https://github.com/hashgraph/hethers.js/blob/master/CHANGELOG.md).

## Installing

```
npm install --save @hashgraph/hethers
```

## Documentation

Browse the [documentation](https://docs.hedera.com/hethers) online:

- [Getting Started](https://docs.hedera.com/hethers/getting-started)
- [Full API Documentation](https://docs.hedera.com/hethers/application-programming-interface)

## License

MIT License (including **all** dependencies).
