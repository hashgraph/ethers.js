"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
// import Web3HttpProvider from "web3-providers-http";
var ethers_1 = require("ethers");
var bignumber_1 = require("@ethersproject/bignumber");
var providers_1 = require("@ethersproject/providers");
var utils_1 = require("ethers/lib/utils");
var default_hedera_provider_1 = require("@ethersproject/providers/lib/default-hedera-provider");
var sdk_1 = require("@hashgraph/sdk");
var bnify = ethers_1.ethers.BigNumber.from;
var hederaTestnetOperableAccount = {
    "operator": {
        "accountId": "0.0.19041642",
        "privateKey": "302e020100300506032b6570042204207ef3437273a5146e4e504a6e22c5caedf07cb0821f01bc05d18e8e716f77f66c"
    },
};
var blockchainData = {
    homestead: {
        addresses: [
            {
                address: "0xAC1639CF97a3A46D431e6d1216f576622894cBB5",
                balance: bnify("4813414100000000"),
                code: "0x"
            },
            // Splitter contract
            {
                address: "0x3474627D4F63A678266BC17171D87f8570936622",
                code: "0x606060405260e060020a60003504630b3ed5368114602e57806337b0574a14605257806356fa47f0146062575b005b602c6004356000546101009004600160a060020a03908116339091161460bb575b50565b60005460ff166060908152602090f35b602c60043560005460ff1615609657600160a060020a038116600034606082818181858883f193505050501515604f576002565b33600160a060020a0316600034606082818181858883f193505050501515604f576002565b600080546101009004600160a060020a03169082606082818181858883f193505050501515604f57600256",
                storage: {
                    "0": "0x0000000000000000000000b2682160c482eb985ec9f3e364eec0a904c44c2300"
                }
            },
            {
                address: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
                name: "ricmoo.firefly.eth"
            },
        ],
        blocks: [
            {
                hash: "0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741",
                parentHash: "0xb495a1d7e6663152ae92708da4843337b958146015a2802f4193a410044698c9",
                number: 3,
                timestamp: 1438270048,
                nonce: "0x2e9344e0cbde83ce",
                difficulty: 17154715646,
                gasLimit: bnify("0x1388"),
                gasUsed: bnify("0"),
                miner: "0x5088D623ba0fcf0131E0897a91734A4D83596AA0",
                extraData: "0x476574682f76312e302e302d66633739643332642f6c696e75782f676f312e34",
                transactions: []
            }
        ],
        transactions: [
            {
                hash: "0xccc90ab97a74c952fb3376c4a3efb566a58a10df62eb4d44a61e106fcf10ec61",
                blockHash: "0x9653f180a5720f3634816eb945a6d722adee52cc47526f6357ac10adaf368135",
                blockNumber: 4097745,
                transactionIndex: 18,
                type: 0,
                from: "0x32DEF047DeFd076DB21A2D759aff2A591c972248",
                gasPrice: bnify("0x4a817c800"),
                gasLimit: bnify("0x3d090"),
                to: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                value: bnify("0x186cc6acd4b0000"),
                nonce: 0,
                data: "0xf2c298be000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000067269636d6f6f0000000000000000000000000000000000000000000000000000",
                r: "0x1e5605197a03e3f0a168f14749168dfeefc44c9228312dacbffdcbbb13263265",
                s: "0x269c3e5b3558267ad91b0a887d51f9f10098771c67b82ea6cb74f29638754f54",
                v: 38,
                creates: null,
                //raw: "0xf8d2808504a817c8008303d090946fc21092da55b392b045ed78f4732bff3c580e2c880186cc6acd4b0000b864f2c298be000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000067269636d6f6f000000000000000000000000000000000000000000000000000026a01e5605197a03e3f0a168f14749168dfeefc44c9228312dacbffdcbbb13263265a0269c3e5b3558267ad91b0a887d51f9f10098771c67b82ea6cb74f29638754f54",
                chainId: 1
            }
        ],
        transactionReceipts: [
            {
                blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                blockNumber: 0x3c92b5,
                type: 0,
                contractAddress: null,
                cumulativeGasUsed: 0x1cca2e,
                from: "0x18C6045651826824FEBBD39d8560584078d1b247",
                gasUsed: 0x14bb7,
                logs: [
                    {
                        address: "0x314159265dD8dbb310642f98f50C066173C1259b",
                        blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                        blockNumber: 0x3c92b5,
                        data: "0x00000000000000000000000018c6045651826824febbd39d8560584078d1b247",
                        logIndex: 0x1a,
                        topics: [
                            "0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82",
                            "0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae",
                            "0xf0106919d12469348e14ad6a051d0656227e1aba2fefed41737fdf78421b20e1"
                        ],
                        transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                        transactionIndex: 0x39,
                    },
                    {
                        address: "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef",
                        blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                        blockNumber: 0x3c92b5,
                        data: "0x000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000000000000000595a32ce",
                        logIndex: 0x1b,
                        topics: [
                            "0x0f0c27adfd84b60b6f456b0e87cdccb1e5fb9603991588d87fa99f5b6b61e670",
                            "0xf0106919d12469348e14ad6a051d0656227e1aba2fefed41737fdf78421b20e1",
                            "0x00000000000000000000000018c6045651826824febbd39d8560584078d1b247"
                        ],
                        transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                        transactionIndex: 0x39,
                    }
                ],
                logsBloom: "0x00000000000000040000000000100000010000000000000040000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000200000010000000004000000000000000000000000000000000002000000000000000000000000400000000020000000000000000000000000000000000000004000000000000000000000000000000000000000000000000801000000000000000000000020000000000040000000040000000000000000002000000004000000000000000000000000000000000000000000000010000000000000000000000000000000000200000000000000000",
                root: "0x9b550a9a640ce50331b64504ef87aaa7e2aaf97344acb6ff111f879b319d2590",
                status: null,
                to: "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef",
                transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                transactionIndex: 0x39
            },
            // Byzantium block
            {
                byzantium: true,
                blockHash: "0x34e5a6cfbdbb84f7625df1de69d218ade4da72f4a2558064a156674e72e976c9",
                blockNumber: 0x444f76,
                type: 0,
                contractAddress: null,
                cumulativeGasUsed: 0x15bfe7,
                from: "0x18C6045651826824FEBBD39d8560584078d1b247",
                gasUsed: 0x1b968,
                logs: [
                    {
                        address: "0xb90E64082D00437e65A76d4c8187596BC213480a",
                        blockHash: "0x34e5a6cfbdbb84f7625df1de69d218ade4da72f4a2558064a156674e72e976c9",
                        blockNumber: 0x444f76,
                        data: "0x",
                        logIndex: 0x10,
                        topics: [
                            "0x748d071d1992ee1bfe7a39058114d0a50d5798fe8eb3a9bfb4687f024629a2ce",
                            "0x5574aa58f7191ccab6de6cf75fe2ea0484f010b852fdd8c6b7ae151d6c2f4b83"
                        ],
                        transactionHash: "0x7f1c6a58dc880438236d0b0a4ae166e9e9a038dbea8ec074149bd8b176332cac",
                        transactionIndex: 0x1e,
                    }
                ],
                logsBloom: "0x00000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000200000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000800000000000000000800000000000000000000000000000000000000",
                status: 1,
                to: "0xb90E64082D00437e65A76d4c8187596BC213480a",
                transactionHash: "0x7f1c6a58dc880438236d0b0a4ae166e9e9a038dbea8ec074149bd8b176332cac",
                transactionIndex: 0x1e
            }
        ]
    },
    kovan: {
        addresses: [
            {
                address: "0x09c967A0385eE3B3717779738cA0B9D116e0EcE7",
                balance: bnify("997787946734641021"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0xf0ec9bf41b99a6bd1f6cd29f91302f71a1a82d14634d2e207edea4b7962f3676",
                parentHash: "0xf110ecd84454f116e2222378e7bca81ac3e59be0dac96d7ec56d5ef1c3bc1d64",
                number: 3,
                timestamp: 1488459452,
                difficulty: 131072,
                gasLimit: bnify("0x5b48ec"),
                gasUsed: bnify("0"),
                miner: "0x00A0A24b9f0E5EC7Aa4c7389b8302fd0123194dE",
                extraData: "0xd5830105048650617269747986312e31352e31826c69",
                transactions: []
            },
            // Kovan Test Case with difficulty > 53-bits; See #711
            {
                hash: "0xd92891a6eeaed4892289edf9bd5ebff261da5c6a51f7131cc1a481c6f4d1aa75",
                parentHash: "0xcc769a02513be1df80eee7d3a5cb87f14f37baee03c13f3e3ad1e7bdcaf7dac3",
                number: 16265864,
                timestamp: 1579621004,
                difficulty: null,
                gasLimit: bnify("0x989680"),
                gasUsed: bnify("0x0705bf"),
                miner: "0x596e8221A30bFe6e7eFF67Fee664A01C73BA3C56",
                extraData: "0xde830206088f5061726974792d457468657265756d86312e34302e30826c69",
                transactions: [
                    "0x20e6760fa1297fb06c8c20e6ed99581e0ba964d51167ea3c8ff580bfcb10bfc3",
                    "0x0ce7eba48b1bbdee05823b79ae24e741f3f290d0abfef8ae9adf32db108b7dd6",
                    "0x1fa2baafa844bf4853e4abbbf49532bf570210d589dc626dbf7ebc4832bdfa5d",
                    "0xdb5d1fa54d30a4b6aee0b242a2c68ea52d3dd28703f69e6e30871827850aa2fa",
                    "0xcc898db85d7d2493d4778faf640be32a4a3b7f5f987257bdc0009ce75a18eeaa"
                ]
            },
        ],
        transactions: [],
        transactionReceipts: []
    },
    rinkeby: {
        addresses: [
            {
                address: "0xd09a624630a656a7dbb122cb05e41c12c7cd8c0e",
                balance: bnify("3000000000000000000"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0x9eb9db9c3ec72918c7db73ae44e520139e95319c421ed6f9fc11fa8dd0cddc56",
                parentHash: "0x9b095b36c15eaf13044373aef8ee0bd3a382a5abb92e402afa44b8249c3a90e9",
                number: 3,
                timestamp: 1492010489,
                nonce: "0x0000000000000000",
                difficulty: 2,
                gasLimit: bnify("0x47e7c4"),
                gasUsed: bnify(0),
                //                miner: "0x42EB768f2244C8811C63729A21A3569731535f06",
                extraData: "0xd783010600846765746887676f312e372e33856c696e757800000000000000004e10f96536e45ceca7e34cc1bdda71db3f3bb029eb69afd28b57eb0202c0ec0859d383a99f63503c4df9ab6c1dc63bf6b9db77be952f47d86d2d7b208e77397301",
                transactions: []
            },
        ],
        transactions: [],
        transactionReceipts: []
    },
    ropsten: {
        addresses: [
            {
                address: "0x03a6F7a5ce5866d9A0CCC1D4C980b8d523f80480",
                balance: bnify("15861113897828552666"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0xaf2f2d55e6514389bcc388ccaf40c6ebf7b3814a199a214f1203fb674076e6df",
                parentHash: "0x88e8bc1dd383672e96d77ee247e7524622ff3b15c337bd33ef602f15ba82d920",
                number: 3,
                timestamp: 1479642588,
                nonce: "0x04668f72247a130c",
                difficulty: 996427,
                gasLimit: bnify("0xff4033"),
                gasUsed: bnify("0"),
                miner: "0xD1aEb42885A43b72B518182Ef893125814811048",
                extraData: "0xd883010503846765746887676f312e372e318664617277696e",
                transactions: []
            },
        ],
        transactions: [
            // Berlin tests (EIP-2930)
            {
                hash: "0x48bff7b0e603200118a672f7c622ab7d555a28f98938edb8318803eed7ea7395",
                type: 1,
                accessList: [
                    {
                        address: "0x0000000000000000000000000000000000000000",
                        storageKeys: []
                    }
                ],
                blockHash: "0x378e24bcd568bd24cf1f54d38f13f038ee28d89e82af4f2a0d79c1f88dcd8aac",
                blockNumber: 9812343,
                from: "0x32162F3581E88a5f62e8A61892B42C46E2c18f7b",
                gasPrice: bnify("0x65cf89a0"),
                gasLimit: bnify("0x5b68"),
                to: "0x32162F3581E88a5f62e8A61892B42C46E2c18f7b",
                value: bnify("0"),
                nonce: 13,
                data: "0x",
                r: "0x9659cba42376dbea1433cd6afc9c8ffa38dbeff5408ffdca0ebde6207281a3ec",
                s: "0x27efbab3e6ed30b088ce0a50533364778e101c9e52acf318daec131da64e7758",
                v: 0,
                creates: null,
                chainId: 3
            },
            {
                hash: "0x1675a417e728fd3562d628d06955ef35b913573d9e417eb4e6a209998499c9d3",
                type: 1,
                accessList: [
                    {
                        address: "0x0000000000000000000000000000000000000000",
                        storageKeys: [
                            "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
                            "0x0000000000111111111122222222223333333333444444444455555555556666",
                            "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
                        ]
                    }
                ],
                blockHash: "0x7565688256f5801768237993b47ca0608796b3ace0c4b8b6e623c6092bef14b8",
                blockNumber: 9812365,
                from: "0x32162F3581E88a5f62e8A61892B42C46E2c18f7b",
                gasPrice: bnify("0x65cf89a0"),
                gasLimit: bnify("0x71ac"),
                to: "0x32162F3581E88a5f62e8A61892B42C46E2c18f7b",
                value: bnify("0"),
                nonce: 14,
                data: "0x",
                r: "0xb0646756f89817d70cdb40aa2ae8b5f43ef65d0926dcf71a7dca5280c93763df",
                s: "0x4d32dbd9a44a2c5639b8434b823938202f75b0a8459f3fcd9f37b2495b7a66a6",
                v: 0,
                creates: null,
                chainId: 3
            },
            // London Tests (EIP-1559)
            {
                hash: '0xb8c7871d9d8597ee8a50395d8b39dafa280c90337dc501d0db1321806c6ea98c',
                blockHash: '0xfd824501af65b1d0f21ea9eb7ec83f45108fcd6fd1bca5d6414ba5923ad87b49',
                blockNumber: 10512507,
                transactionIndex: 5,
                type: 2,
                creates: null,
                from: '0xad252DD6C011E613610A36368f04aC84D5185b7c',
                //gasPrice: bnify("0x0268ab0ed6"),
                maxPriorityFeePerGas: bnify("0x0268ab0ed6"),
                maxFeePerGas: bnify("0x0268ab0ed6"),
                gasLimit: bnify("0x5208"),
                to: '0x8210357f377E901f18E45294e86a2A32215Cc3C9',
                value: bnify("0x7b"),
                nonce: 0,
                data: '0x',
                r: '0x7426c348119eed4e9e0525b52aa77edbbf1107610702b4642fa9d2688dce6fa7',
                s: '0x03f606ad1f12af5876280a34601a4eb3919b797cf3878161e2d24b61d2609846',
                v: 1,
                accessList: [],
                chainId: 3,
            },
        ],
        transactionReceipts: [
            {
                blockHash: "0xc9235b8253fce455942147aa8b450d23081b867ffbb2a1e4dec934827cd80f8f",
                blockNumber: 0x1564d8,
                type: 0,
                contractAddress: null,
                cumulativeGasUsed: bnify("0x80b9"),
                from: "0xb346D5019EeafC028CfC01A5f789399C2314ae8D",
                gasUsed: bnify("0x80b9"),
                logs: [
                    {
                        address: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                        blockHash: "0xc9235b8253fce455942147aa8b450d23081b867ffbb2a1e4dec934827cd80f8f",
                        blockNumber: 0x1564d8,
                        data: "0x00000000000000000000000006b5955a67d827cdf91823e3bb8f069e6c89c1d6000000000000000000000000000000000000000000000000016345785d8a0000",
                        logIndex: 0x0,
                        topics: [
                            "0xac375770417e1cb46c89436efcf586a74d0298fee9838f66a38d40c65959ffda"
                        ],
                        transactionHash: "0x55c477790b105e69e98afadf0505cbda606414b0187356137132bf24945016ce",
                        transactionIndex: 0x0,
                    }
                ],
                logsBloom: "0x00000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000010000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                root: "0xf1c3506ab619ac1b5e8f1ca355b16d6b9a1b7436b2960b0e9ec9a91f4238b5cc",
                to: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                transactionHash: "0x55c477790b105e69e98afadf0505cbda606414b0187356137132bf24945016ce",
                transactionIndex: 0x0
            },
            // Byzantium Receipt
            {
                byzantium: true,
                blockHash: "0x61d343e0e081b60ac53bab381e07bdd5d0815b204091a576fd05106b814e7e1e",
                blockNumber: 0x1e1e3b,
                contractAddress: null,
                cumulativeGasUsed: bnify("0x4142f"),
                from: "0xdc8F20170C0946ACCF9627b3EB1513CFD1c0499f",
                gasUsed: bnify("0x1eb6d"),
                logs: [
                    {
                        address: "0xCBf1735Aad8C4B337903cD44b419eFE6538aaB40",
                        blockHash: "0x61d343e0e081b60ac53bab381e07bdd5d0815b204091a576fd05106b814e7e1e",
                        blockNumber: 0x1e1e3b,
                        data: "0x000000000000000000000000b70560a43a9abf6ea2016f40a3e84b8821e134c5f6c95607c490f4f379c0160ef5c8898770f8a52959abf0e9de914647b377fa290000000000000000000000000000000000000000000000000000000000001c20000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000355524c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c6a736f6e2868747470733a2f2f6170692e6b72616b656e2e636f6d2f302f7075626c69632f5469636b65723f706169723d455448555344292e726573756c742e584554485a5553442e632e300000000000000000000000000000000000000000",
                        logIndex: 0x1,
                        topics: ["0xb76d0edd90c6a07aa3ff7a222d7f5933e29c6acc660c059c97837f05c4ca1a84"],
                        transactionHash: "0xf724f1d6813f13fb523c5f6af6261d06d41138dd094fff723e09fb0f893f03e6",
                        transactionIndex: 0x2,
                    }
                ],
                logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000080000000202000000",
                status: 1,
                to: "0xB70560a43A9aBf6ea2016F40a3e84B8821E134c5",
                transactionHash: "0xf724f1d6813f13fb523c5f6af6261d06d41138dd094fff723e09fb0f893f03e6",
                transactionIndex: 0x2
            },
            // London Tests (EIP-1559)
            {
                blockNumber: 10512507,
                blockHash: '0xfd824501af65b1d0f21ea9eb7ec83f45108fcd6fd1bca5d6414ba5923ad87b49',
                transactionHash: '0xb8c7871d9d8597ee8a50395d8b39dafa280c90337dc501d0db1321806c6ea98c',
                transactionIndex: 5,
                byzantium: true,
                type: 2,
                to: '0x8210357f377E901f18E45294e86a2A32215Cc3C9',
                from: '0xad252DD6C011E613610A36368f04aC84D5185b7c',
                contractAddress: null,
                gasUsed: bnify("0x5208"),
                logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
                logs: [],
                cumulativeGasUsed: bnify("0x038f3e"),
                effectiveGasPrice: bnify("0x268ab0ed6"),
                status: 1,
            }
        ],
    },
    goerli: {
        addresses: [
            {
                address: "0x06B5955A67D827CDF91823E3bB8F069e6c89c1D6",
                balance: bnify("314159000000000000"),
                code: "0x"
            },
        ],
        blocks: [
            {
                hash: "0xd5daa825732729bb0d2fd187a1b888e6bfc890f1fc5333984740d9052afb2920",
                parentHash: "0xe675f1362d82cdd1ec260b16fb046c17f61d8a84808150f5d715ccce775f575e",
                number: 3,
                timestamp: 1548947483,
                difficulty: 2,
                gasLimit: bnify("10455073"),
                gasUsed: bnify("0"),
                //                miner: "0xe0a2Bd4258D2768837BAa26A28fE71Dc079f84c7",
                extraData: "0x506172697479205465636820417574686f7269747900000000000000000000002822e1b202411c38084d96c84302b8361ec4840a51cd2fad9cb4bd9921cad7e64bc2e5dc7b41f3f75b33358be3aec718cf4d4317ace940e01b3581a95c9259ac01",
                transactions: []
            },
            // Blockhash with leading zero; see #629
            {
                hash: "0x0f305466552efa183a0de26b6fda26d55a872dbc02aca8b5852cc2a361ce9ee4",
                parentHash: "0x6723e880e01c15c5ac894abcae0f5b55ea809a31eaf5618998928f7d9cbc5118",
                number: 1479831,
                timestamp: 1571216171,
                difficulty: 2,
                gasLimit: bnify(0x7a1200),
                gasUsed: bnify("0x0d0ef5"),
                //                miner: "0x22eA9f6b28DB76A7162054c05ed812dEb2f519Cd",
                extraData: "0x0000000000000000000000000000000000000000000000000000000000000000f4e6fc1fbd88adf57a272d98f725487f872ef0495a54c2b873a58d14e010bf517cc5650417f18cfd4ad2396272c564a7da1265ae27c397609293f488ec57d68e01",
                transactions: [
                    "0xea29f0764f03c5c67ac53a866a28ce23a4a032c2de4327e452b39f482920761a",
                    "0x0eef23ffb59ac41762fdfa55d9e47e82fa7f0b70b1e8ec486d72fe1fee15f6de",
                    "0xba1eeb67ac6e8d1aa900ff6fbd84ac46869c9e100b33f787acfb234cd9c93f9f",
                    "0x4f412ab735b29ddc8b1ff7abe4bfece7ad4684aa20e260fbc42aed75a0d387ea",
                    "0x2f1fddcc7a2c4b2b7d83c5cadec4e7b71c34cec65da99b1114bd2b044ae0636c"
                ]
            }
        ],
        transactions: [],
        transactionReceipts: [
            {
                blockHash: "0x2384e8e8bdcf6eb87ec7c138fa503ac34adb32cac817e4b35f14d4339eaa1993",
                blockNumber: 47464,
                byzantium: true,
                type: 0,
                contractAddress: null,
                cumulativeGasUsed: bnify(21000),
                from: "0x8c1e1e5b47980D214965f3bd8ea34C413E120ae4",
                gasUsed: bnify(21000),
                logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                to: "0x58Bb4221245461E1d4cf886f18a01E3Df40Bd359",
                transactionHash: "0xec8b1ac5d787f36c738cc7793fec606283b41f1efa69df4ae6b2a014dcd12797",
                transactionIndex: 0,
                logs: [],
                status: 1
            }
        ],
    }
};
blockchainData["default"] = blockchainData.homestead;
function equals(name, actual, expected) {
    if (expected && expected.eq) {
        if (actual == null) {
            assert_1.default.ok(false, name + " - actual big number null");
        }
        expected = ethers_1.ethers.BigNumber.from(expected);
        actual = ethers_1.ethers.BigNumber.from(actual);
        assert_1.default.ok(expected.eq(actual), name + " matches");
    }
    else if (Array.isArray(expected)) {
        if (actual == null) {
            assert_1.default.ok(false, name + " - actual array null");
        }
        assert_1.default.equal(actual.length, expected.length, name + " array lengths match");
        for (var i = 0; i < expected.length; i++) {
            equals("(" + name + " - item " + i + ")", actual[i], expected[i]);
        }
    }
    else if (typeof (expected) === "object") {
        if (actual == null) {
            if (expected === actual) {
                return;
            }
            assert_1.default.ok(false, name + " - actual object null");
        }
        var keys_1 = {};
        Object.keys(expected).forEach(function (key) { keys_1[key] = true; });
        Object.keys(actual).forEach(function (key) { keys_1[key] = true; });
        Object.keys(keys_1).forEach(function (key) {
            equals("(" + name + " - key + " + key + ")", actual[key], expected[key]);
        });
    }
    else {
        if (actual == null) {
            assert_1.default.ok(false, name + " - actual null");
        }
        assert_1.default.equal(actual, expected, name + " matches");
    }
}
function waiter(duration) {
    return new Promise(function (resolve) {
        var timer = setTimeout(resolve, duration);
        if (timer.unref) {
            timer.unref();
        }
    });
}
var allNetworks = ["default", "homestead", "ropsten", "rinkeby", "kovan", "goerli"];
// We use separate API keys because otherwise the testcases sometimes
// fail during CI because our default keys are pretty heavily used
var _ApiKeys = {
    alchemy: "YrPw6SWb20vJDRFkhWq8aKnTQ8JRNRHM",
    etherscan: "FPFGK6JSW2UHJJ2666FG93KP7WC999MNW7",
    infura: "49a0efa3aaee4fd99797bfa94d8ce2f1",
};
var _ApiKeysPocket = {
    homestead: "6004bcd10040261633ade990",
    ropsten: "6004bd4d0040261633ade991",
    rinkeby: "6004bda20040261633ade994",
    goerli: "6004bd860040261633ade992",
};
function getApiKeys(network) {
    if (network === "default" || network == null) {
        network = "homestead";
    }
    var apiKeys = ethers_1.ethers.utils.shallowCopy(_ApiKeys);
    apiKeys.pocket = _ApiKeysPocket[network];
    return apiKeys;
}
// @ts-ignore
var providerFunctions = [
    {
        name: "getDefaultProvider",
        networks: allNetworks,
        create: function (network) {
            if (network == "default") {
                return ethers_1.ethers.getDefaultProvider("homestead", getApiKeys(network));
            }
            return ethers_1.ethers.getDefaultProvider(network, getApiKeys(network));
        }
    },
];
// This wallet can be funded and used for various test cases
var fundWallet = ethers_1.ethers.Wallet.createRandom();
var testFunctions = [];
Object.keys(blockchainData).forEach(function (network) {
    function addSimpleTest(name, func, expected) {
        var _this = this;
        testFunctions.push({
            name: name,
            networks: [network],
            execute: function (provider) { return __awaiter(_this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, func(provider)];
                        case 1:
                            value = _a.sent();
                            equals(name, expected, value);
                            return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    function addObjectTest(name, func, expected, checkSkip) {
        var _this = this;
        testFunctions.push({
            name: name,
            networks: [network],
            checkSkip: checkSkip,
            execute: function (provider) { return __awaiter(_this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, func(provider)];
                        case 1:
                            value = _a.sent();
                            Object.keys(expected).forEach(function (key) {
                                equals(name + "." + key, value[key], expected[key]);
                            });
                            return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    var tests = blockchainData[network];
    // And address test case can have any of the following:
    // - balance
    // - code
    // - storage
    // - ENS name
    tests.addresses.forEach(function (test) {
        if (test.balance) {
            addSimpleTest("fetches account balance: " + test.address, function (provider) {
                return provider.getBalance(test.address);
            }, test.balance);
        }
        if (test.code) {
            addSimpleTest("fetches account code: " + test.address, function (provider) {
                return provider.getCode(test.address);
            }, test.code);
        }
    });
    tests.transactions.forEach(function (test) {
        var hash = test.hash;
        addObjectTest("fetches transaction " + hash, function (provider) { return __awaiter(void 0, void 0, void 0, function () {
            var tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.getTransaction(hash)];
                    case 1:
                        tx = _a.sent();
                        assert_1.default.equal(typeof (tx.wait), "function", "wait is a function");
                        delete tx.wait;
                        return [2 /*return*/, tx];
                }
            });
        }); }, test, function (provider, network, test) {
            // Temporary; pocket is being broken again for old transactions
            return provider === "PocketProvider";
            //return false;
        });
    });
    tests.transactionReceipts.forEach(function (test) {
        var hash = test.transactionHash;
        addObjectTest("fetches transaction receipt " + hash, function (provider) { return __awaiter(void 0, void 0, void 0, function () {
            var receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.getTransactionReceipt(hash)];
                    case 1:
                        receipt = _a.sent();
                        if (test.status === null) {
                            assert_1.default.ok(receipt.status === undefined, "no status");
                            receipt.status = null;
                        }
                        // This changes with every block; so just make sure it is a number
                        // assert.equal(typeof(receipt.confirmations), "number", "confirmations is a number");
                        // delete receipt.confirmations;
                        return [2 /*return*/, receipt];
                }
            });
        }); }, test, function (provider, network, test) {
            // Temporary; pocket is being broken again for old transactions
            return provider === "PocketProvider";
            //return false;
        });
    });
});
(function () {
    var _this = this;
    function addErrorTest(code, func) {
        var _this = this;
        testFunctions.push({
            name: "throws correct " + code + " error",
            networks: ["ropsten"],
            checkSkip: function (provider, network, test) {
                return false;
            },
            execute: function (provider) { return __awaiter(_this, void 0, void 0, function () {
                var value, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, func(provider)];
                        case 1:
                            value = _a.sent();
                            console.log(value);
                            assert_1.default.ok(false, "did not throw");
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            assert_1.default.equal(error_1.code, code, "incorrect error thrown");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); }
        });
    }
    /*
    @TODO: Use this for testing pre-EIP-155 transactions on specific networks
    addErrorTest(ethers.utils.Logger.errors.NONCE_EXPIRED, async (provider: ethers.providers.Provider) => {
        return provider.sendTransaction("0xf86480850218711a0082520894000000000000000000000000000000000000000002801ba038aaddcaaae7d3fa066dfd6f196c8348e1bb210f2c121d36cb2c24ef20cea1fba008ae378075d3cd75aae99ab75a70da82161dffb2c8263dabc5d8adecfa9447fa");
    });
    */
    // Wallet(id("foobar1234"))
    addErrorTest(ethers_1.ethers.utils.Logger.errors.NONCE_EXPIRED, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, provider.sendTransaction("0xf86480850218711a00825208940000000000000000000000000000000000000000038029a04320fd28c8e6c95da9229d960d14ffa3de81f83abe3ad9c189642c83d7d951f3a009aac89e04a8bafdcf618e21fed5e7b1144ca1083a301fd5fde28b0419eb63ce")];
        });
    }); });
    addErrorTest(ethers_1.ethers.utils.Logger.errors.INSUFFICIENT_FUNDS, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        var txProps, wallet, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txProps = {
                        to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
                        gasPrice: 9000000000,
                        gasLimit: 21000,
                        chainId: 3,
                        value: 1,
                    };
                    wallet = ethers_1.ethers.Wallet.createRandom();
                    return [4 /*yield*/, wallet.signTransaction(txProps)];
                case 1:
                    tx = _a.sent();
                    return [2 /*return*/, provider.sendTransaction(tx)];
            }
        });
    }); });
    addErrorTest(ethers_1.ethers.utils.Logger.errors.INSUFFICIENT_FUNDS, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        var txProps, wallet;
        return __generator(this, function (_a) {
            txProps = {
                to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
                gasPrice: 9000000000,
                gasLimit: 21000,
                value: 1,
                // @TODO: Remove this once all providers are eip-1559 savvy
                type: 0,
            };
            wallet = ethers_1.ethers.Wallet.createRandom().connect(provider);
            return [2 /*return*/, wallet.sendTransaction(txProps)];
        });
    }); });
    addErrorTest(ethers_1.ethers.utils.Logger.errors.UNPREDICTABLE_GAS_LIMIT, function (provider) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, provider.estimateGas({
                    to: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" // ENS contract
                })];
        });
    }); });
})();
testFunctions.push({
    // TODO: when the logic underneath is ready, this test should be rewritten
    name: "sends a legacy transaction",
    extras: ["funding"],
    timeout: 900,
    networks: ["ropsten"],
    checkSkip: function (provider, network, test) {
        return false;
    },
    execute: function (provider) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); }
});
testFunctions.push({
    name: "sends an EIP-2930 transaction",
    extras: ["funding"],
    timeout: 900,
    networks: ["ropsten"],
    checkSkip: function (provider, network, test) {
        return false;
    },
    execute: function (provider) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); }
});
testFunctions.push({
    name: "sends an EIP-1559 transaction",
    extras: ["funding"],
    timeout: 900,
    networks: ["ropsten"],
    checkSkip: function (provider, network, test) {
        // These don't support EIP-1559 yet for sending
        return (provider === "AlchemyProvider");
    },
    execute: function (provider) { return __awaiter(void 0, void 0, void 0, function () {
        var wallet, addr, b0, tx, b1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = fundWallet.connect(provider);
                    addr = "0x8210357f377E901f18E45294e86a2A32215Cc3C9";
                    return [4 /*yield*/, waiter(3000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, provider.getBalance(wallet.address)];
                case 2:
                    b0 = _a.sent();
                    assert_1.default.ok(b0.gt(ethers_1.ethers.constants.Zero), "balance is non-zero");
                    return [4 /*yield*/, wallet.sendTransaction({
                            type: 2,
                            accessList: {
                                "0x8ba1f109551bD432803012645Ac136ddd64DBA72": [
                                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                                    "0x0000000000000000000000000000000000000000000000000000000000000042",
                                ]
                            },
                            to: addr,
                            value: 123,
                        })];
                case 3:
                    tx = _a.sent();
                    return [4 /*yield*/, tx.wait()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, waiter(3000)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, provider.getBalance(wallet.address)];
                case 6:
                    b1 = _a.sent();
                    assert_1.default.ok(b0.gt(b1), "balance is decreased");
                    return [2 /*return*/];
            }
        });
    }); }
});
// TODO: methods here should be tested when they are ready
// describe("Test Provider Methods", function() {
//     let fundReceipt: Promise<ethers.providers.TransactionReceipt> = null;
//     const faucet = "0x8210357f377E901f18E45294e86a2A32215Cc3C9";
//
//     before(async function() {
//         this.timeout(300000);
//
//         // Get some ether from the faucet
//         const provider = new ethers.providers.InfuraProvider("ropsten", getApiKeys("ropsten").infura);
//         const funder = await ethers.utils.fetchJson(`https:/\/api.ethers.io/api/v1/?action=fundAccount&address=${ fundWallet.address.toLowerCase() }`);
//         fundReceipt = provider.waitForTransaction(funder.hash);
//         fundReceipt.then((receipt) => {
//             console.log(`*** Funded: ${ fundWallet.address }`);
//         });
//     });
//
//     after(async function() {
//         this.timeout(300000);
//
//         // Wait until the funding is complete
//         await fundReceipt;
//
//         // Refund all unused ether to the faucet
//         const provider = new ethers.providers.InfuraProvider("ropsten", getApiKeys("ropsten").infura);
//         const gasPrice = await provider.getGasPrice();
//         const balance = await provider.getBalance(fundWallet.address);
//         const tx = await fundWallet.connect(provider).sendTransaction({
//             to: faucet,
//             gasLimit: 21000,
//             gasPrice: gasPrice,
//             value: balance.sub(gasPrice.mul(21000))
//         });
//
//         console.log(`*** Sweep Transaction:`, tx.hash);
//     });
//
//     providerFunctions.forEach(({ name, networks, create}) => {
//
//         networks.forEach((network) => {
//             const provider = create(network);
//
//             testFunctions.forEach((test) => {
//
//                 // Skip tests not supported on this network
//                 if (test.networks.indexOf(network) === -1) { return; }
//                 if (test.checkSkip && test.checkSkip(name, network, test)) {
//                     return;
//                 }
//
//                 // How many attempts to try?
//                 const attempts = (test.attempts != null) ? test.attempts: 3;
//                 const timeout = (test.timeout != null) ? test.timeout: 60;
//                 const extras = (test.extras || []).reduce((accum, key) => {
//                     accum[key] = true;
//                     return accum;
//                 }, <Record<string, boolean>>{ });
//
//                 xit(`${ name }.${ network ? network: "default" } ${ test.name}`, async function() {
//                     // Multiply by 2 to make sure this never happens; we want our
//                     // timeout logic to success, not allow a done() called multiple
//                     // times because our logic returns after the timeout has occurred.
//                     this.timeout(2 * (1000 + timeout * 1000 * attempts));
//                     // Wait for the funding transaction to be mined
//                     if (extras.funding) { await fundReceipt; }
//
//                     // We wait at least 1 seconds between tests
//                     if (!extras.nowait) { await waiter(1000); }
//
//                     let error: Error = null;
//                     for (let attempt = 0; attempt < attempts; attempt++) {
//                         try {
//                             const result = await Promise.race([
//                                 test.execute(provider),
//                                 waiter(timeout * 1000).then((result) => { throw new Error("timeout"); })
//                             ]);
//                             return result;
//                         } catch (attemptError) {
//                             console.log(`*** Failed attempt ${ attempt + 1 }: ${ attemptError.message }`);
//                             error = attemptError;
//
//                             // On failure, wait 5s
//                             await waiter(5000);
//                         }
//                     }
//                     throw error;
//                 });
//             });
//         });
//     });
//
// });
describe("Test Basic Authentication", function () {
    //this.retries(3);
    function test(name, url) {
        it("tests " + name, function () {
            this.timeout(60000);
            return ethers_1.ethers.utils.fetchJson(url).then(function (data) {
                assert_1.default.equal(data.authenticated, true, "authenticates user");
            });
        });
    }
    var secure = {
        url: "https://httpbin.org/basic-auth/user/passwd",
        user: "user",
        password: "passwd"
    };
    var insecure = {
        url: "http://httpbin.org/basic-auth/user/passwd",
        user: "user",
        password: "passwd"
    };
    var insecureForced = {
        url: "http://httpbin.org/basic-auth/user/passwd",
        user: "user",
        password: "passwd",
        allowInsecureAuthentication: true
    };
    test("secure url", secure);
    test("insecure url", insecureForced);
    it("tests insecure connections fail", function () {
        this.timeout(60000);
        assert_1.default.throws(function () {
            return ethers_1.ethers.utils.fetchJson(insecure);
        }, function (error) {
            return (error.reason === "basic authentication requires a secure https url");
        }, "throws an exception for insecure connections");
    });
});
// describe("Test Events", function() {
//     this.retries(3);
//
//     async function testBlockEvent(provider: ethers.providers.Provider) {
//         return new Promise((resolve, reject) => {
//             let firstBlockNumber: number = null;
//             const handler = (blockNumber: number) => {
//                 if (firstBlockNumber == null) {
//                     firstBlockNumber = blockNumber;
//                     return;
//                 }
//                 provider.removeListener("block", handler);
//                 if (firstBlockNumber + 1 === blockNumber) {
//                     resolve(true);
//                 } else {
//                     reject(new Error("blockNumber fail"));
//                 }
//             };
//             provider.on("block", handler);
//         });
//     }
//
//     it("InfuraProvider", async function() {
//         this.timeout(60000);
//         const provider = new ethers.providers.InfuraProvider("rinkeby");
//         await testBlockEvent(provider);
//     });
// });
describe("Test Hedera Provider", function () {
    var provider = new providers_1.DefaultHederaProvider(default_hedera_provider_1.HederaNetworks.TESTNET);
    var accountConfig = { shard: BigInt(0), realm: BigInt(0), num: BigInt(98) };
    var solAddr = (0, utils_1.getAddressFromAccount)(accountConfig);
    var timeout = 15000;
    it('Gets the balance', function () {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, provider.getBalance(solAddr)];
                    case 1:
                        balance = _a.sent();
                        // the balance of 0.0.98 cannot be negative
                        assert_1.default.strictEqual(true, balance.gte(0));
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout);
    describe("Sign & Send Transacton, Wait for receipt", function () {
        var _this = this;
        var signedTx;
        beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
            var privateKey, txID, tx, txBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        privateKey = sdk_1.PrivateKey.fromString(hederaTestnetOperableAccount.operator.privateKey);
                        txID = sdk_1.TransactionId.generate(hederaTestnetOperableAccount.operator.accountId);
                        return [4 /*yield*/, new sdk_1.ContractCreateTransaction()
                                .setContractMemo("memo")
                                .setGas(100000)
                                .setBytecodeFileId("0.0.26562254")
                                .setNodeAccountIds([new sdk_1.AccountId(0, 0, 3)])
                                .setConstructorParameters(new sdk_1.ContractFunctionParameters().addUint256(100))
                                .setTransactionId(txID)
                                .freeze()
                                .sign(privateKey)];
                    case 1:
                        tx = _a.sent();
                        txBytes = tx.toBytes();
                        signedTx = ethers_1.ethers.utils.hexlify(txBytes);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should populate transaction receipt", function () {
            return __awaiter(this, void 0, void 0, function () {
                var sendTransactionResponse, _a, _b, receipt;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = provider).sendTransaction;
                            return [4 /*yield*/, signedTx];
                        case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                        case 2:
                            sendTransactionResponse = _c.sent();
                            return [4 /*yield*/, sendTransactionResponse.wait()];
                        case 3:
                            receipt = _c.sent();
                            // assert.strict(receipt.logs.length > 0);
                            assert_1.default.strictEqual(receipt.to, null);
                            assert_1.default.strictEqual(receipt.contractAddress, '0x' + sendTransactionResponse.customData.contractId);
                            assert_1.default.strictEqual(receipt.from, (0, utils_1.getAddressFromAccount)(hederaTestnetOperableAccount.operator.accountId));
                            assert_1.default.strictEqual(receipt.transactionHash, sendTransactionResponse.hash);
                            return [2 /*return*/];
                    }
                });
            });
        }).timeout(timeout);
        it("Should populate transaction receipt with timeout", function () {
            return __awaiter(this, void 0, void 0, function () {
                var sendTransactionResponse, _a, _b, receipt;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = provider).sendTransaction;
                            return [4 /*yield*/, signedTx];
                        case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                        case 2:
                            sendTransactionResponse = _c.sent();
                            return [4 /*yield*/, sendTransactionResponse.wait(timeout)];
                        case 3:
                            receipt = _c.sent();
                            // assert.strict(receipt.logs.length > 0);
                            assert_1.default.strictEqual(receipt.to, null);
                            assert_1.default.strictEqual(receipt.contractAddress, '0x' + sendTransactionResponse.customData.contractId);
                            assert_1.default.strictEqual(receipt.from, (0, utils_1.getAddressFromAccount)(hederaTestnetOperableAccount.operator.accountId));
                            assert_1.default.strictEqual(receipt.transactionHash, sendTransactionResponse.hash);
                            return [2 /*return*/];
                    }
                });
            });
        }).timeout(timeout);
        it("Should throw timeout exceeded", function () {
            return __awaiter(this, void 0, void 0, function () {
                var insufficientTimeout;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            insufficientTimeout = 500;
                            return [4 /*yield*/, assert_1.default.rejects(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var sendTransactionResponse, _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                _b = (_a = provider).sendTransaction;
                                                return [4 /*yield*/, signedTx];
                                            case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                                            case 2:
                                                sendTransactionResponse = _c.sent();
                                                return [4 /*yield*/, sendTransactionResponse.wait(insufficientTimeout)];
                                            case 3:
                                                _c.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, function (err) {
                                    console.log("err:", err);
                                    assert_1.default.strictEqual(err.name, 'Error');
                                    assert_1.default.strictEqual(err.reason, 'timeout exceeded');
                                    assert_1.default.strictEqual(err.code, 'TIMEOUT');
                                    assert_1.default.strictEqual(err.timeout, insufficientTimeout);
                                    return true;
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }).timeout(timeout);
    });
    /* This test is skipped because the previewnet will be resetted */
    it.only("Should populate txn response", function () {
        return __awaiter(this, void 0, void 0, function () {
            var existingId, record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existingId = "0.0.1546615-1641987871-235099329";
                        return [4 /*yield*/, provider.getTransaction(existingId)];
                    case 1:
                        record = _a.sent();
                        // @ts-ignore
                        assert_1.default.strictEqual(record.transactionId, existingId);
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout);
    /* This test is skipped because the previewnet will be resetted */
    it.only("Should return null on record not found", function () {
        return __awaiter(this, void 0, void 0, function () {
            var fakeTransactionId, record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fakeTransactionId = "0.0.0-0000000000-000000000";
                        return [4 /*yield*/, provider.getTransaction(fakeTransactionId)];
                    case 1:
                        record = _a.sent();
                        // @ts-ignore
                        assert_1.default.strictEqual(record, null);
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout);
    /* This test is skipped because the previewnet will be resetted */
    it.only("Should throw backend error", function () {
        return __awaiter(this, void 0, void 0, function () {
            var badRequestId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        badRequestId = "0.0.0";
                        return [4 /*yield*/, assert_1.default.rejects(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, provider.getTransaction(badRequestId)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (err) {
                                assert_1.default.strictEqual(err.name, 'Error');
                                assert_1.default.strictEqual(err.reason, 'bad result from backend');
                                assert_1.default.strictEqual(err.method, 'TransactionResponseQuery');
                                assert_1.default.strictEqual(err.error.response.status, 400);
                                assert_1.default.strictEqual(err.error.response.statusText, 'Bad Request');
                                return true;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout);
    it("Is able to get hedera provider as default", function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultProvider, chainIDDerivedProvider, balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaultProvider = ethers_1.ethers.providers.getDefaultProvider(default_hedera_provider_1.HederaNetworks.TESTNET);
                        assert_1.default.notStrictEqual(defaultProvider, null);
                        chainIDDerivedProvider = ethers_1.ethers.providers.getDefaultProvider(291);
                        assert_1.default.notStrictEqual(chainIDDerivedProvider, null);
                        return [4 /*yield*/, defaultProvider.getBalance(solAddr)];
                    case 1:
                        balance = _a.sent();
                        assert_1.default.strictEqual(true, balance.gte(0));
                        return [4 /*yield*/, chainIDDerivedProvider.getBalance(solAddr)];
                    case 2:
                        balance = _a.sent();
                        assert_1.default.strictEqual(true, balance.gte(0));
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout * 4);
    it("Defaults the provider to hedera mainnet", function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultMainnetProvider, balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaultMainnetProvider = ethers_1.ethers.providers.getDefaultProvider();
                        assert_1.default.notStrictEqual(defaultMainnetProvider, null);
                        return [4 /*yield*/, defaultMainnetProvider.getBalance(solAddr)];
                    case 1:
                        balance = _a.sent();
                        assert_1.default.strictEqual(true, balance.gte(0));
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout * 4);
    it('should submit signed transaction', function () {
        return __awaiter(this, void 0, void 0, function () {
            var privateKey, txID, tx, txBytes, signedTx, provider, txResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        privateKey = sdk_1.PrivateKey.fromString(hederaTestnetOperableAccount.operator.privateKey);
                        txID = sdk_1.TransactionId.generate(hederaTestnetOperableAccount.operator.accountId);
                        return [4 /*yield*/, new sdk_1.ContractCreateTransaction()
                                .setContractMemo("memo")
                                .setGas(100000)
                                // .setInitialBalance(1000)
                                .setBytecodeFileId("0.0.26562254")
                                .setNodeAccountIds([new sdk_1.AccountId(0, 0, 3)])
                                .setConstructorParameters(new sdk_1.ContractFunctionParameters().addUint256(100))
                                .setTransactionId(txID)
                                .freeze()
                                .sign(privateKey)];
                    case 1:
                        tx = _a.sent();
                        txBytes = tx.toBytes();
                        signedTx = ethers_1.ethers.utils.hexlify(txBytes);
                        provider = ethers_1.ethers.providers.getDefaultProvider('testnet');
                        return [4 /*yield*/, provider.sendTransaction(signedTx)];
                    case 2:
                        txResponse = _a.sent();
                        assert_1.default.strictEqual(txResponse.gasLimit.toNumber(), 100000);
                        assert_1.default.strictEqual(txResponse.from, (0, utils_1.getAddressFromAccount)(hederaTestnetOperableAccount.operator.accountId));
                        assert_1.default.strictEqual(txResponse.to, undefined); // contract create TX should not be addressed to anything
                        return [2 /*return*/];
                }
            });
        });
    }).timeout(timeout * 4);
    /* This test is skipped because the local network won't be started in the CI */
    xit("Should be able to query local network", function () {
        return __awaiter(this, void 0, void 0, function () {
            var genesis, prov, bal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genesis = {
                            operator: {
                                // genesis is the operator
                                accountId: "0.0.2",
                                privateKey: "302e020100300506032b65700422042091132178e72057a1d7528025956fe39b0b847f200ab59b2fdd367017f3087137",
                                publicKey: "302a300506032b65700321000aa8e21064c61eab86e2a9c164565b4e7a9a4146106e0a6cd03a8c395a110e92"
                            },
                            network: {
                                "127.0.0.1:50211": "0.0.3",
                                "127.0.0.1:50212": "0.0.4",
                                "127.0.0.1:50213": "0.0.5"
                            }
                        };
                        prov = new ethers_1.ethers.providers.HederaProvider(genesis.network["127.0.0.1:50211"], "127.0.0.1:50211", "");
                        return [4 /*yield*/, prov.getBalance(solAddr)];
                    case 1:
                        bal = _a.sent();
                        assert_1.default.strictEqual(true, bal.gte(0));
                        return [2 /*return*/];
                }
            });
        });
    });
    it("Should be able to query testnet with custom urls", function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider2, balance2, txId, record2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider2 = new ethers_1.ethers.providers.HederaProvider("0.0.3", "0.testnet.hedera.com:50211", "https://testnet.mirrornode.hedera.com");
                        return [4 /*yield*/, provider2.getBalance(solAddr)];
                    case 1:
                        balance2 = _a.sent();
                        assert_1.default.strictEqual(true, balance2.gte(0));
                        txId = "0.0.1546615-1641987871-235099329";
                        return [4 /*yield*/, provider2.getTransaction(txId)];
                    case 2:
                        record2 = _a.sent();
                        assert_1.default.notStrictEqual(record2, null, "Record is null");
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe("Test Hedera Provider Formatters", function () {
    var timeout = 15000;
    var provider = new providers_1.DefaultHederaProvider(default_hedera_provider_1.HederaNetworks.TESTNET);
    it('Should parse hedera response to hethers response', function () {
        return __awaiter(this, void 0, void 0, function () {
            var hederaTransactionResponse, transactionResponse;
            return __generator(this, function (_a) {
                hederaTransactionResponse = {
                    amount: 0,
                    call_result: "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014157806395d89b411461016a578063a0712d6814610172578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101e6565b6040516100ce9190610936565b60405180910390f35b6100ea6100e53660046108f3565b610278565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a3660046108b7565b61028e565b604051601281526020016100ce565b6100ea61013c3660046108f3565b61033d565b6100fe61014f366004610862565b6001600160a01b031660009081526020819052604090205490565b6100c1610379565b61018561018036600461091d565b610388565b005b6100ea6101953660046108f3565b6103ce565b6100ea6101a83660046108f3565b610467565b6100fe6101bb366004610884565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f5906109b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610221906109b1565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b6000610285338484610474565b50600192915050565b600061029b848484610598565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103255760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103328533858403610474565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161028591859061037490869061098b565b610474565b6060600480546101f5906109b1565b60408051338152602081018390527f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885910160405180910390a16103cb3382610767565b50565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104505760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161031c565b61045d3385858403610474565b5060019392505050565b6000610285338484610598565b6001600160a01b0383166104d65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161031c565b6001600160a01b0382166105375760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161031c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105fc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161031c565b6001600160a01b03821661065e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161031c565b6001600160a01b038316600090815260208190526040902054818110156106d65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161031c565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061070d90849061098b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161075991815260200190565b60405180910390a350505050565b6001600160a01b0382166107bd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161031c565b80600260008282546107cf919061098b565b90915550506001600160a01b038216600090815260208190526040812080548392906107fc90849061098b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b038116811461085d57600080fd5b919050565b60006020828403121561087457600080fd5b61087d82610846565b9392505050565b6000806040838503121561089757600080fd5b6108a083610846565b91506108ae60208401610846565b90509250929050565b6000806000606084860312156108cc57600080fd5b6108d584610846565b92506108e360208501610846565b9150604084013590509250925092565b6000806040838503121561090657600080fd5b61090f83610846565b946020939093013593505050565b60006020828403121561092f57600080fd5b5035919050565b600060208083528351808285015260005b8181101561096357858101830151858201604001528201610947565b81811115610975576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109ac57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806109c557607f821691505b602082108114156109e657634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a89138010396e5c52a2e58663294560a5b37fe1fb303e2dc2199cfbb5765afec64736f6c63430008070033",
                    contract_id: "0.0.28540926",
                    created_contract_ids: ["0.0.28540926"],
                    error_message: "",
                    from: "0x0000000000000000000000000000000001b37ffc",
                    function_parameters: "0x",
                    gas_limit: 300000,
                    gas_used: 93420,
                    timestamp: "1642692857.235742000",
                    to: "0x0000000000000000000000000000000001b37ffe",
                    block_hash: '',
                    block_number: 0,
                    hash: "0x525e387986062f406fae028c164f98dff64aef97dc6e042506026d7931a02402b8feaa13e77eb6dd3efc70f9b1a4633e",
                    logs: [
                        {
                            address: "0x0000000000000000000000000000000001b37ffe",
                            contract_id: "0.0.28540926",
                            data: "0x0000000000000000000000000000000000000000000000000000000001b37ffc0000000000000000000000000000000000000000000000000000000000002710",
                            index: 0,
                            topics: [
                                "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885"
                            ]
                        },
                        {
                            address: "0x0000000000000000000000000000000001b37ffe",
                            contract_id: "0.0.28540926",
                            data: "0x0000000000000000000000000000000000000000000000000000000000002710",
                            index: 1,
                            topics: [
                                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                                "0x0000000000000000000000000000000000000000000000000000000000000000",
                                "0x0000000000000000000000000000000000000000000000000000000001b37ffc"
                            ]
                        }
                    ],
                    transaction: {
                        transaction_id: "0.0.28540924-1642692847-203890635",
                        result: "SUCCESS"
                    }
                };
                transactionResponse = {
                    accessList: null,
                    chainId: 1,
                    data: '',
                    from: '',
                    gasLimit: null,
                    hash: '',
                    transactionId: '',
                    // r: '',
                    // s: '',
                    to: '',
                    // v: 0,
                    value: null,
                    customData: {
                        gas_used: 0,
                        call_result: '',
                        logs: {},
                        transaction: {}
                    },
                    wait: null
                };
                transactionResponse = provider.formatter.txRecordToTxResponse(hederaTransactionResponse);
                assert_1.default.strictEqual(transactionResponse.to, hederaTransactionResponse.to);
                assert_1.default.strictEqual(transactionResponse.from, hederaTransactionResponse.from);
                assert_1.default.strictEqual(transactionResponse.hash, hederaTransactionResponse.hash);
                assert_1.default.strictEqual(transactionResponse.transactionId, hederaTransactionResponse.transaction.transaction_id);
                assert_1.default.strictEqual(transactionResponse.gasLimit.toNumber(), hederaTransactionResponse.gas_limit);
                assert_1.default.strictEqual(transactionResponse.customData.gas_used, hederaTransactionResponse.gas_used);
                assert_1.default.strictEqual(transactionResponse.customData.call_result, hederaTransactionResponse.call_result);
                assert_1.default.deepStrictEqual(transactionResponse.customData.logs, hederaTransactionResponse.logs);
                assert_1.default.deepStrictEqual(transactionResponse.customData.transaction, hederaTransactionResponse.transaction);
                return [2 /*return*/];
            });
        });
    }).timeout(timeout);
    it('Should parse hethers response to hethers receipt', function () {
        return __awaiter(this, void 0, void 0, function () {
            var transactionResponse, receipt;
            return __generator(this, function (_a) {
                transactionResponse = {
                    accessList: null,
                    chainId: 1,
                    data: '',
                    from: "0x0000000000000000000000000000000001b37ffc",
                    gasLimit: bignumber_1.BigNumber.from(300000),
                    hash: "0x525e387986062f406fae028c164f98dff64aef97dc6e042506026d7931a02402b8feaa13e77eb6dd3efc70f9b1a4633e",
                    transactionId: "0.0.28540924-1642692847-203890635",
                    r: '',
                    s: '',
                    to: null,
                    v: 0,
                    value: null,
                    customData: {
                        gas_used: 93420,
                        call_result: "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014157806395d89b411461016a578063a0712d6814610172578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101e6565b6040516100ce9190610936565b60405180910390f35b6100ea6100e53660046108f3565b610278565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a3660046108b7565b61028e565b604051601281526020016100ce565b6100ea61013c3660046108f3565b61033d565b6100fe61014f366004610862565b6001600160a01b031660009081526020819052604090205490565b6100c1610379565b61018561018036600461091d565b610388565b005b6100ea6101953660046108f3565b6103ce565b6100ea6101a83660046108f3565b610467565b6100fe6101bb366004610884565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f5906109b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610221906109b1565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b6000610285338484610474565b50600192915050565b600061029b848484610598565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103255760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103328533858403610474565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161028591859061037490869061098b565b610474565b6060600480546101f5906109b1565b60408051338152602081018390527f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885910160405180910390a16103cb3382610767565b50565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104505760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161031c565b61045d3385858403610474565b5060019392505050565b6000610285338484610598565b6001600160a01b0383166104d65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161031c565b6001600160a01b0382166105375760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161031c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105fc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161031c565b6001600160a01b03821661065e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161031c565b6001600160a01b038316600090815260208190526040902054818110156106d65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161031c565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061070d90849061098b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161075991815260200190565b60405180910390a350505050565b6001600160a01b0382166107bd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161031c565b80600260008282546107cf919061098b565b90915550506001600160a01b038216600090815260208190526040812080548392906107fc90849061098b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b038116811461085d57600080fd5b919050565b60006020828403121561087457600080fd5b61087d82610846565b9392505050565b6000806040838503121561089757600080fd5b6108a083610846565b91506108ae60208401610846565b90509250929050565b6000806000606084860312156108cc57600080fd5b6108d584610846565b92506108e360208501610846565b9150604084013590509250925092565b6000806040838503121561090657600080fd5b61090f83610846565b946020939093013593505050565b60006020828403121561092f57600080fd5b5035919050565b600060208083528351808285015260005b8181101561096357858101830151858201604001528201610947565b81811115610975576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109ac57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806109c557607f821691505b602082108114156109e657634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a89138010396e5c52a2e58663294560a5b37fe1fb303e2dc2199cfbb5765afec64736f6c63430008070033",
                        logs: [
                            {
                                address: "0x0000000000000000000000000000000001b37ffe",
                                contract_id: "0.0.28540926",
                                data: "0x0000000000000000000000000000000000000000000000000000000001b37ffc0000000000000000000000000000000000000000000000000000000000002710",
                                index: 0,
                                topics: [
                                    "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885"
                                ]
                            },
                            {
                                address: "0x0000000000000000000000000000000001b37ffe",
                                contract_id: "0.0.28540926",
                                data: "0x0000000000000000000000000000000000000000000000000000000000002710",
                                index: 1,
                                topics: [
                                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                                    "0x0000000000000000000000000000000000000000000000000000000001b37ffc"
                                ]
                            }
                        ],
                        transaction: {
                            transaction_id: "0.0.28540924-1642692847-203890635",
                            result: "SUCCESS"
                        }
                    },
                    wait: null
                };
                receipt = {
                    to: "",
                    from: "",
                    contractAddress: "",
                    gasUsed: null,
                    logsBloom: null,
                    transactionHash: "",
                    logs: [
                        {
                            address: "",
                            data: "",
                            topics: [],
                            transactionHash: "",
                            logIndex: 0
                        }
                    ],
                    cumulativeGasUsed: null,
                    byzantium: false,
                    status: 0
                };
                receipt = provider.formatter.txRecordToTxReceipt(transactionResponse);
                assert_1.default.strictEqual(receipt.from, transactionResponse.from);
                assert_1.default.strictEqual(receipt.to, transactionResponse.to);
                assert_1.default.strictEqual(receipt.contractAddress, null);
                assert_1.default.strictEqual(receipt.transactionHash, transactionResponse.hash);
                assert_1.default.strictEqual(receipt.cumulativeGasUsed, transactionResponse.customData.gas_used);
                assert_1.default.strictEqual(receipt.gasUsed, transactionResponse.customData.gas_used);
                assert_1.default.strictEqual(receipt.status, 1);
                assert_1.default.strictEqual(receipt.logs.length, 2);
                assert_1.default.strictEqual(receipt.logs[0].address, transactionResponse.customData.logs[0].address);
                assert_1.default.strictEqual(receipt.logs[0].data, transactionResponse.customData.logs[0].data);
                assert_1.default.deepStrictEqual(receipt.logs[0].topics, transactionResponse.customData.logs[0].topics);
                assert_1.default.strictEqual(receipt.logs[0].transactionHash, transactionResponse.hash);
                assert_1.default.strictEqual(receipt.logs[0].logIndex, transactionResponse.customData.logs[0].index);
                assert_1.default.strictEqual(receipt.logs[1].address, transactionResponse.customData.logs[1].address);
                assert_1.default.strictEqual(receipt.logs[1].data, transactionResponse.customData.logs[1].data);
                assert_1.default.deepStrictEqual(receipt.logs[1].topics, transactionResponse.customData.logs[1].topics);
                assert_1.default.strictEqual(receipt.logs[1].transactionHash, transactionResponse.hash);
                assert_1.default.strictEqual(receipt.logs[1].logIndex, transactionResponse.customData.logs[1].index);
                return [2 /*return*/];
            });
        });
    }).timeout(timeout);
});
//# sourceMappingURL=test-providers.spec.js.map