/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "CallSalt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002864380380620028648339810160408190526200003491620004aa565b6200004f600080516020620027e48339815191528062000230565b6200007960008051602062002804833981519152600080516020620027e483398151915262000230565b620000a360008051602062002824833981519152600080516020620027e483398151915262000230565b620000cd60008051602062002844833981519152600080516020620027e483398151915262000230565b620000e8600080516020620027e4833981519152306200027b565b6001600160a01b03811615620001135762000113600080516020620027e4833981519152826200027b565b60005b835181101562000199576200015d6000805160206200280483398151915285838151811062000149576200014962000550565b60200260200101516200027b60201b60201c565b620001866000805160206200284483398151915285838151811062000149576200014962000550565b62000191816200057c565b905062000116565b5060005b8251811015620001e357620001d06000805160206200282483398151915284838151811062000149576200014962000550565b620001db816200057c565b90506200019d565b5060028490556040517f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5906200021e906000908790620005c2565b60405180910390a150505050620005e8565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200028782826200028b565b5050565b62000297828262000313565b62000287576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002cf3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff165b92915050565b805b81146200034c57600080fd5b50565b805162000338816200033e565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156200039a576200039a6200035c565b6040525050565b6000620003ad60405190565b9050620003bb828262000372565b919050565b60006001600160401b03821115620003dc57620003dc6200035c565b5060209081020190565b60006001600160a01b03821662000338565b6200034081620003e6565b80516200033881620003f8565b6000620004276200042184620003c0565b620003a1565b83815290506020808201908402830185811115620004485762000448600080fd5b835b8181101562000470578062000460888262000403565b845250602092830192016200044a565b5050509392505050565b600082601f830112620004905762000490600080fd5b8151620004a284826020860162000410565b949350505050565b60008060008060808587031215620004c557620004c5600080fd5b6000620004d387876200034f565b94505060208501516001600160401b03811115620004f457620004f4600080fd5b62000502878288016200047a565b93505060408501516001600160401b03811115620005235762000523600080fd5b62000531878288016200047a565b9250506060620005448782880162000403565b91505092959194509250565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019820362000592576200059262000566565b5060010190565b600062000338620005a78381565b90565b620005b58162000599565b82525050565b80620005b5565b60408101620005d28285620005aa565b620005e16020830184620005bb565b9392505050565b6121ec80620005f86000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f14610576578063e38335e514610596578063f23a6e61146105a9578063f27a0c92146105d557600080fd5b8063bc197c81146104fd578063c4d252f514610529578063d45c44351461054957600080fd5b806391d14854116100c657806391d1485414610474578063a217fddf14610494578063b08e51c0146104a9578063b1c5f427146104dd57600080fd5b80638065657f146104005780638f2a0bb0146104205780638f61f4f51461044057600080fd5b8063248a9ca31161015957806331d507501161013357806331d507501461038057806336568abe146103a0578063584b153e146103c057806364d62353146103e057600080fd5b8063248a9ca3146102ff5780632ab0f5291461032f5780632f2ff15d1461036057600080fd5b80630d3cf6fc116101955780630d3cf6fc14610260578063134008d31461029457806313bc9f20146102a7578063150b7a02146102c757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021f57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e236600461124b565b6105ea565b005b3480156101f557600080fd5b50610209610204366004611310565b6106be565b6040516102169190611343565b60405180910390f35b34801561022b57600080fd5b506102537fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040516102169190611357565b34801561026c57600080fd5b506102537f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101e76102a2366004611365565b6106e9565b3480156102b357600080fd5b506102096102c23660046113fa565b61079e565b3480156102d357600080fd5b506102f26102e2366004611514565b630a85bd0160e11b949350505050565b60405161021691906115a2565b34801561030b57600080fd5b5061025361031a3660046113fa565b60009081526020819052604090206001015490565b34801561033b57600080fd5b5061020961034a3660046113fa565b6000908152600160208190526040909120541490565b34801561036c57600080fd5b506101e761037b3660046115b0565b6107c4565b34801561038c57600080fd5b5061020961039b3660046113fa565b6107ee565b3480156103ac57600080fd5b506101e76103bb3660046115b0565b610807565b3480156103cc57600080fd5b506102096103db3660046113fa565b610846565b3480156103ec57600080fd5b506101e76103fb3660046113fa565b61085c565b34801561040c57600080fd5b5061025361041b366004611365565b6108bb565b34801561042c57600080fd5b506101e761043b366004611637565b6108fa565b34801561044c57600080fd5b506102537fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561048057600080fd5b5061020961048f3660046115b0565b610a8b565b3480156104a057600080fd5b50610253600081565b3480156104b557600080fd5b506102537ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b3480156104e957600080fd5b506102536104f836600461171c565b610ab4565b34801561050957600080fd5b506102f2610518366004611890565b63bc197c8160e01b95945050505050565b34801561053557600080fd5b506101e76105443660046113fa565b610af9565b34801561055557600080fd5b506102536105643660046113fa565b60009081526001602052604090205490565b34801561058257600080fd5b506101e76105913660046115b0565b610b84565b6101e76105a436600461171c565b610ba9565b3480156105b557600080fd5b506102f26105c4366004611956565b63f23a6e6160e01b95945050505050565b3480156105e157600080fd5b50600254610253565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161061481610d33565b60006106248989898989896108bb565b90506106308184610d40565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161066c969594939291906119e2565b60405180910390a383156106b357807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387856040516106aa9190611357565b60405180910390a25b505050505050505050565b60006001600160e01b03198216630271189760e51b14806106e357506106e382610da8565b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610715816000610a8b565b610723576107238133610ddd565b60006107338888888888886108bb565b905061073f8185610e36565b61074b88888888610e93565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516107839493929190611a37565b60405180910390a361079481610f1a565b5050505050505050565b6000818152600160205260408120546001811180156107bd5750428111155b9392505050565b6000828152602081905260409020600101546107df81610d33565b6107e98383610f53565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146108385760405162461bcd60e51b815260040161082f90611abe565b60405180910390fd5b6108428282610fd7565b5050565b6000818152600160208190526040822054610800565b33301461087b5760405162461bcd60e51b815260040161082f90611b16565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5600254826040516108ae929190611b26565b60405180910390a1600255565b60008686868686866040516020016108d8969594939291906119e2565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161092481610d33565b8887146109435760405162461bcd60e51b815260040161082f90611b81565b8885146109625760405162461bcd60e51b815260040161082f90611b81565b60006109748b8b8b8b8b8b8b8b610ab4565b90506109808184610d40565b60005b8a811015610a3e5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e858181106109c0576109c0611b91565b90506020020160208101906109d59190611ba7565b8d8d868181106109e7576109e7611b91565b905060200201358c8c87818110610a0057610a00611b91565b9050602002810190610a129190611bc8565b8c8b604051610a26969594939291906119e2565b60405180910390a3610a3781611c3c565b9050610983565b508315610a7e57807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610a759190611357565b60405180910390a25b5050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610ad5989796959493929190611dc0565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610b2381610d33565b610b2c82610846565b610b485760405162461bcd60e51b815260040161082f90611e73565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610b9f81610d33565b6107e98383610fd7565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610bd5816000610a8b565b610be357610be38133610ddd565b878614610c025760405162461bcd60e51b815260040161082f90611b81565b878414610c215760405162461bcd60e51b815260040161082f90611b81565b6000610c338a8a8a8a8a8a8a8a610ab4565b9050610c3f8185610e36565b60005b89811015610d1d5760008b8b83818110610c5e57610c5e611b91565b9050602002016020810190610c739190611ba7565b905060008a8a84818110610c8957610c89611b91565b9050602002013590503660008a8a86818110610ca757610ca7611b91565b9050602002810190610cb99190611bc8565b91509150610cc984848484610e93565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610d009493929190611a37565b60405180910390a35050505080610d1690611c3c565b9050610c42565b50610d2781610f1a565b50505050505050505050565b610d3d8133610ddd565b50565b610d49826107ee565b15610d665760405162461bcd60e51b815260040161082f90611ecf565b600254811015610d885760405162461bcd60e51b815260040161082f90611f22565b610d928142611f32565b6000928352600160205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b14806106e357506301ffc9a760e01b6001600160e01b03198316146106e3565b610de78282610a8b565b61084257610df48161103c565b610dff83602061104e565b604051602001610e10929190611f8b565b60408051601f198184030181529082905262461bcd60e51b825261082f91600401612011565b610e3f8261079e565b610e5b5760405162461bcd60e51b815260040161082f90612069565b801580610e775750600081815260016020819052604090912054145b6108425760405162461bcd60e51b815260040161082f906120bc565b6000846001600160a01b0316848484604051610eb09291906120d9565b60006040518083038185875af1925050503d8060008114610eed576040519150601f19603f3d011682016040523d82523d6000602084013e610ef2565b606091505b5050905080610f135760405162461bcd60e51b815260040161082f90612136565b5050505050565b610f238161079e565b610f3f5760405162461bcd60e51b815260040161082f90612069565b600090815260016020819052604090912055565b610f5d8282610a8b565b610842576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610f933390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610fe18282610a8b565b15610842576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606106e36001600160a01b03831660145b6060600061105d836002612146565b611068906002611f32565b6001600160401b0381111561107f5761107f61141b565b6040519080825280601f01601f1916602001820160405280156110a9576020820181803683370190505b509050600360fc1b816000815181106110c4576110c4611b91565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110f3576110f3611b91565b60200101906001600160f81b031916908160001a9053506000611117846002612146565b611122906001611f32565b90505b600181111561119a576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061115657611156611b91565b1a60f81b82828151811061116c5761116c611b91565b60200101906001600160f81b031916908160001a90535060049490941c9361119381612165565b9050611125565b5083156107bd5760405162461bcd60e51b815260040161082f9061217c565b60006001600160a01b0382166106e3565b6111d3816111b9565b8114610d3d57600080fd5b80356106e3816111ca565b806111d3565b80356106e3816111e9565b60008083601f84011261120f5761120f600080fd5b5081356001600160401b0381111561122957611229600080fd5b60208301915083600182028301111561124457611244600080fd5b9250929050565b600080600080600080600060c0888a03121561126957611269600080fd5b60006112758a8a6111de565b97505060206112868a828b016111ef565b96505060408801356001600160401b038111156112a5576112a5600080fd5b6112b18a828b016111fa565b955095505060606112c48a828b016111ef565b93505060806112d58a828b016111ef565b92505060a06112e68a828b016111ef565b91505092959891949750929550565b6001600160e01b031981166111d3565b80356106e3816112f5565b60006020828403121561132557611325600080fd5b60006113318484611305565b949350505050565b8015155b82525050565b602081016106e38284611339565b8061133d565b602081016106e38284611351565b60008060008060008060a0878903121561138157611381600080fd5b600061138d89896111de565b965050602061139e89828a016111ef565b95505060408701356001600160401b038111156113bd576113bd600080fd5b6113c989828a016111fa565b945094505060606113dc89828a016111ef565b92505060806113ed89828a016111ef565b9150509295509295509295565b60006020828403121561140f5761140f600080fd5b600061133184846111ef565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156114565761145661141b565b6040525050565b600061146860405190565b90506114748282611431565b919050565b60006001600160401b038211156114925761149261141b565b601f19601f83011660200192915050565b82818337506000910152565b60006114c26114bd84611479565b61145d565b9050828152602081018484840111156114dd576114dd600080fd5b6114e88482856114a3565b509392505050565b600082601f83011261150457611504600080fd5b81356113318482602086016114af565b6000806000806080858703121561152d5761152d600080fd5b600061153987876111de565b945050602061154a878288016111de565b935050604061155b878288016111ef565b92505060608501356001600160401b0381111561157a5761157a600080fd5b611586878288016114f0565b91505092959194509250565b6001600160e01b0319811661133d565b602081016106e38284611592565b600080604083850312156115c6576115c6600080fd5b60006115d285856111ef565b92505060206115e3858286016111de565b9150509250929050565b60008083601f84011261160257611602600080fd5b5081356001600160401b0381111561161c5761161c600080fd5b60208301915083602082028301111561124457611244600080fd5b600080600080600080600080600060c08a8c03121561165857611658600080fd5b89356001600160401b0381111561167157611671600080fd5b61167d8c828d016115ed565b995099505060208a01356001600160401b0381111561169e5761169e600080fd5b6116aa8c828d016115ed565b975097505060408a01356001600160401b038111156116cb576116cb600080fd5b6116d78c828d016115ed565b955095505060606116ea8c828d016111ef565b93505060806116fb8c828d016111ef565b92505060a061170c8c828d016111ef565b9150509295985092959850929598565b60008060008060008060008060a0898b03121561173b5761173b600080fd5b88356001600160401b0381111561175457611754600080fd5b6117608b828c016115ed565b985098505060208901356001600160401b0381111561178157611781600080fd5b61178d8b828c016115ed565b965096505060408901356001600160401b038111156117ae576117ae600080fd5b6117ba8b828c016115ed565b945094505060606117cd8b828c016111ef565b92505060806117de8b828c016111ef565b9150509295985092959890939650565b60006001600160401b038211156118075761180761141b565b5060209081020190565b600061181f6114bd846117ee565b8381529050602080820190840283018581111561183e5761183e600080fd5b835b81811015611862578061185388826111ef565b84525060209283019201611840565b5050509392505050565b600082601f83011261188057611880600080fd5b8135611331848260208601611811565b600080600080600060a086880312156118ab576118ab600080fd5b60006118b788886111de565b95505060206118c8888289016111de565b94505060408601356001600160401b038111156118e7576118e7600080fd5b6118f38882890161186c565b93505060608601356001600160401b0381111561191257611912600080fd5b61191e8882890161186c565b92505060808601356001600160401b0381111561193d5761193d600080fd5b611949888289016114f0565b9150509295509295909350565b600080600080600060a0868803121561197157611971600080fd5b600061197d88886111de565b955050602061198e888289016111de565b945050604061199f888289016111ef565b935050606061191e888289016111ef565b61133d816111b9565b81835260006020840193506119cf8385846114a3565b601f19601f8401165b9093019392505050565b60a081016119f082896119b0565b6119fd6020830188611351565b8181036040830152611a108186886119b9565b9050611a1f6060830185611351565b611a2c6080830184611351565b979650505050505050565b60608101611a4582876119b0565b611a526020830186611351565b8181036040830152611a658184866119b9565b9695505050505050565b602f81526000602082017f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636581526e103937b632b9903337b91039b2b63360891b602082015291505b5060400190565b602080825281016106e381611a6f565b602b81526000602082017f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742081526a62652074696d656c6f636b60a81b60208201529150611ab7565b602080825281016106e381611ace565b60408101611b348285611351565b6107bd6020830184611351565b602381526000602082017f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d618152620e8c6d60eb1b60208201529150611ab7565b602080825281016106e381611b41565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611bbc57611bbc600080fd5b600061133184846111de565b6000808335601e1936859003018112611be357611be3600080fd5b8084019250823591506001600160401b03821115611c0357611c03600080fd5b602083019250600182023603831315611c1e57611c1e600080fd5b509250929050565b634e487b7160e01b600052601160045260246000fd5b60006000198203611c4f57611c4f611c26565b5060010190565b6000611c6283836119b0565b505060200190565b60006107bd60208401846111de565b8183526000602084019350818060005b85811015611cb657611c9b8284611c6a565b611ca58882611c56565b975060208301925050600101611c89565b509495945050505050565b82818337505050565b81835260006020840193506001600160fb1b03831115611cec57611cec600080fd5b602083029250611cfd838584611cc1565b50500190565b60006113318484846119b9565b6000808335601e1936859003018112611d2b57611d2b600080fd5b8381016020810193503591506001600160401b03821115611d4e57611d4e600080fd5b36829003831315611c1e57611c1e600080fd5b818352600060208401935083602084028101838060005b87811015611db3578484038952611d8f8284611d10565b611d9a868284611d03565b95506020840160209b909b019a93505050600101611d78565b5091979650505050505050565b60a08082528101611dd2818a8c611c79565b90508181036020830152611de781888a611cca565b90508181036040830152611dfc818688611d61565b9050611e0b6060830185611351565b611e186080830184611351565b9998505050505050505050565b603181526000602082017f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063618152701b9b9bdd0818994818d85b98d95b1b1959607a1b60208201529150611ab7565b602080825281016106e381611e25565b602f81526000602082017f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c81526e1c9958591e481cd8da19591d5b1959608a1b60208201529150611ab7565b602080825281016106e381611e83565b602681526000602082017f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e748152652064656c617960d01b60208201529150611ab7565b602080825281016106e381611edf565b808201808211156106e3576106e3611c26565b60005b83811015611f60578181015183820152602001611f48565b50506000910152565b6000611f73825190565b611f81818560208601611f45565b9290920192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526017016000611fbd8285611f69565b7001034b99036b4b9b9b4b733903937b6329607d1b815260110191506113318284611f69565b6000611fed825190565b808452602084019350612004818560208601611f45565b601f19601f8201166119d8565b602080825281016107bd8184611fe3565b602a81526000602082017f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973815269206e6f7420726561647960b01b60208201529150611ab7565b602080825281016106e381612022565b602681526000602082017f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570658152656e64656e637960d01b60208201529150611ab7565b602080825281016106e381612079565b6000611cfd8385846114a3565b60006113318284866120cc565b603381526000602082017f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720748152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b60208201529150611ab7565b602080825281016106e3816120e6565b81810280821583820485141761215e5761215e611c26565b5092915050565b60008161217457612174611c26565b506000190190565b60208082528181019081527f537472696e67733a20686578206c656e67746820696e73756666696369656e746040830152606082016106e356fea2646970667358221220da277a91cfc01f16b3d9ac41571a6fae6c911899805bcf071dd381aef082f0d264736f6c634300081100335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TimelockController";
  }

  deploy(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    );
  }
  attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }
  static readonly contractName: "TimelockController";
  public readonly contractName: "TimelockController";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}