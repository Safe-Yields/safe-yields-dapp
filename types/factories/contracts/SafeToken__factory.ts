/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type { SafeToken, SafeTokenInterface } from "../../contracts/SafeToken";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_safeVault",
        type: "address",
      },
      {
        internalType: "address[2]",
        name: "_wallets",
        type: "address[2]",
      },
      {
        internalType: "uint256[2]",
        name: "_taxDistributionOnMintAndBurn",
        type: "uint256[2]",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "BUY_TAX_PERCENT",
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
    inputs: [],
    name: "SELL_TAX_PERCENT",
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
    inputs: [],
    name: "WALLETS",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admin",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "blacklist",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_safeTokensToBuy",
        type: "uint256",
      },
    ],
    name: "buyExactAmountOfSafe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_usdToSpend",
        type: "uint256",
      },
    ],
    name: "buySafeForExactAmountOfUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_safeTokensToBuy",
        type: "uint256",
      },
    ],
    name: "estimateBuyExactAmountOfSafe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsdReserves",
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
    inputs: [],
    name: "getWallets",
    outputs: [
      {
        internalType: "address[2]",
        name: "",
        type: "address[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_safeVault",
        type: "address",
      },
      {
        internalType: "address[2]",
        name: "_wallets",
        type: "address[2]",
      },
      {
        internalType: "uint256[2]",
        name: "_taxDistributionOnMintAndBurn",
        type: "uint256[2]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "price",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safeVault",
    outputs: [
      {
        internalType: "contract ISafeVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_safeTokensToSell",
        type: "uint256",
      },
    ],
    name: "sellExactAmountOfSafe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_usdToGet",
        type: "uint256",
      },
    ],
    name: "sellSafeForExactAmountOfUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "taxDistributionOnMintAndBurn",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usd",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "wallets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002568380380620025688339810160408190526200003491620002a5565b6002805460ff191690556200004c8484848462000056565b50505050620003bb565b600062000070600080516020620025488339815191525490565b90506001600160a01b038116620000a0576001600160a01b036000805160206200254883398151915255620000b6565b336001600160a01b03821614620000b657600080fd5b33600090815260056020526040902060019055600980546001600160a01b038681166001600160a01b0319928316179092556008805492881692909116919091179055620001048362000199565b62000113600a836002620001ac565b5060085460095460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af11580156200016b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000191919062000390565b505050505050565b620001a86000826002620001ef565b5050565b8260028101928215620001dd579160200282015b82811115620001dd578251825591602001919060010190620001c0565b50620001eb9291506200023a565b5090565b8260028101928215620001dd579160200282015b82811115620001dd57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000203565b5b80821115620001eb57600081556001016200023b565b80516001600160a01b03811681146200026957600080fd5b919050565b604080519081016001600160401b03811182821017156200029f57634e487b7160e01b600052604160045260246000fd5b60405290565b60008060008060c08587031215620002bc57600080fd5b620002c78562000251565b93506020620002d881870162000251565b935086605f870112620002ea57600080fd5b620002f46200026e565b8060808801898111156200030757600080fd5b604089015b818110156200032e57620003208162000251565b84529284019284016200030c565b5081955089609f8a01126200034257600080fd5b6200034c6200026e565b925082915060c089018a8111156200036357600080fd5b5b808210156200037f5781518452928401929084019062000364565b505080935050505092959194509250565b600060208284031215620003a357600080fd5b81518015158114620003b457600080fd5b9392505050565b61217d80620003cb6000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80638d3bd55b1161011a578063a9059cbb116100ad578063db7a46051161007c578063db7a46051461046a578063dd62ed3e1461047f578063deef94de146104aa578063f7e0ba5f146104bd578063f9f92be4146104d057600080fd5b8063a9059cbb14610431578063b416d1a3146103a2578063ba69c35814610444578063d63a6ccd1461045757600080fd5b80639c52a7f1116100e95780639c52a7f1146103f05780639dc29fac14610403578063a035b1fe14610416578063a634755e1461041e57600080fd5b80638d3bd55b146103aa5780639223c96e146103b257806395d89b41146103c55780639baaa20f146103e857600080fd5b8063624e5b05116101925780637ad71f72116101615780637ad71f7214610351578063889a52401461037c57806389d1cabc1461038f5780638ce8e9d7146103a257600080fd5b8063624e5b05146102ed57806363a846f8146102fe57806365fae35e1461031e57806370a082311461033157600080fd5b8063313ce567116101ce578063313ce5671461029357806340c10f19146102ad57806354fd4d50146102c25780635c975abb146102e257600080fd5b806306fdde0314610200578063095ea7b31461024657806318160ddd1461026957806323b872dd14610280575b600080fd5b6102306040518060400160405280601181526020017029b0b332902cb4b2b63239902a37b5b2b760791b81525081565b60405161023d9190611cfb565b60405180910390f35b610259610254366004611d2a565b6104f3565b604051901515815260200161023d565b61027260035481565b60405190815260200161023d565b61025961028e366004611d54565b61055b565b61029b601281565b60405160ff909116815260200161023d565b6102c06102bb366004611d2a565b6108d9565b005b610230604051806040016040528060018152602001603160f81b81525081565b60025460ff16610259565b6102c06102fb366004611d90565b50565b61027261030c366004611da9565b60056020526000908152604090205481565b6102c061032c366004611da9565b610916565b61027261033f366004611da9565b60066020526000908152604090205481565b61036461035f366004611d90565b610962565b6040516001600160a01b03909116815260200161023d565b61027261038a366004611d90565b610982565b6102c061039d366004611d90565b610999565b610272601981565b610272600281565b6102c06103c0366004611dfb565b610c08565b610230604051806040016040528060048152602001635341464560e01b81525081565b610272610d62565b6102c06103fe366004611da9565b610dd5565b6102c0610411366004611d2a565b610e1e565b610272610e57565b6102c061042c366004611d90565b610e97565b61025961043f366004611d2a565b61102b565b6102c0610452366004611d90565b61103f565b600854610364906001600160a01b031681565b6104726112e7565b60405161023d9190611ed3565b61027261048d366004611f0d565b600760209081526000928352604080842090915290825290205481565b600954610364906001600160a01b031681565b6102726104cb366004611d90565b61132b565b6102596104de366004611da9565b60046020526000908152604090205460ff1681565b3360008181526007602090815260408083206001600160a01b03871680855290835281842086905590518581529293909290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35060015b92915050565b600061056960025460ff1690565b156105ae5760405162461bcd60e51b815260206004820152601060248201526f14d85999551bdad95b8e9c185d5cd95960821b60448201526064015b60405180910390fd5b6001600160a01b03841615806105cb57506001600160a01b038316155b806105ee57506001600160a01b0384166000908152600560205260409020546001145b8061061157506001600160a01b0383166000908152600560205260409020546001145b61065d5760405162461bcd60e51b815260206004820152601e60248201527f53616665546f6b656e3a207472616e736665722d70726f68696269746564000060448201526064016105a5565b6001600160a01b0384166000908152600660205260409020548211156106c55760405162461bcd60e51b815260206004820152601e60248201527f53616665546f6b656e3a696e73756666696369656e742d62616c616e6365000060448201526064016105a5565b6001600160a01b03841660009081526004602052604090205460ff1615801561070757506001600160a01b03831660009081526004602052604090205460ff16155b61074b5760405162461bcd60e51b815260206004820152601560248201527414d85999551bdad95b8e989b1858dadb1a5cdd1959605a1b60448201526064016105a5565b6001600160a01b0384163314610821576001600160a01b03841660009081526007602090815260408083203384529091529020548211156107ce5760405162461bcd60e51b815260206004820181905260248201527f53616665546f6b656e3a696e73756666696369656e742d616c6c6f77616e636560448201526064016105a5565b6001600160a01b03841660009081526007602090815260408083203384529091529020546107fc90836115bc565b6001600160a01b03851660009081526007602090815260408083203384529091529020555b6001600160a01b03841660009081526006602052604090205461084490836115bc565b6001600160a01b03808616600090815260066020526040808220939093559085168152205461087390836115d7565b6001600160a01b0380851660008181526006602052604090819020939093559151908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906108c79086815260200190565b60405180910390a35060019392505050565b336000908152600560205260409020546001146109085760405162461bcd60e51b81526004016105a590611f40565b61091282826115f2565b5050565b336000908152600560205260409020546001146109455760405162461bcd60e51b81526004016105a590611f40565b6001600160a01b0316600090815260056020526040902060019055565b6000816002811061097257600080fd5b01546001600160a01b0316905081565b600a816002811061099257600080fd5b0154905081565b6109ce604051806040016040528060148152602001736275794578616374416d6f756e744f665361666560601b815250611684565b6000670de0b6b3a76400006109e1610e57565b6109eb9084611f8d565b6109f59190611fa4565b9050610a2e6040518060400160405280601581526020017475736450726963654f66546f6b656e73546f42757960581b815250826116c7565b6000612710610a3e601984611f8d565b610a489190611fa4565b9050610a72604051806040016040528060068152602001650eae6c8a8c2f60d31b815250826116c7565b6000610a7e8284611fc6565b9050610aac6040518060400160405280600a8152602001691d5cd9151bd4dc195b9960b21b815250826116c7565b610ab633856115f2565b6008546001600160a01b03166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018490526064016020604051808303816000875af1158015610b1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3f9190611fd9565b50600854600090610b5b906001600160a01b031684600a61170c565b9050610b83604051806040016040528060048152602001631c185a5960e21b815250826116c7565b6000610b8f8285611ffb565b1115610c01576009546001600160a01b031663b6b55f25610bb08385611ffb565b6040518263ffffffff1660e01b8152600401610bce91815260200190565b600060405180830381600087803b158015610be857600080fd5b505af1158015610bfc573d6000803e3d6000fd5b505050505b5050505050565b6000610c327fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b90506001600160a01b038116610c71576001600160a01b037fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355610c86565b336001600160a01b03821614610c8657600080fd5b33600090815260056020526040902060019055600980546001600160a01b038681166001600160a01b0319928316179092556008805492881692909116919091179055610cd283611946565b610cdf600a836002611bfc565b5060085460095460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af1158015610d36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5a9190611fd9565b505050505050565b600954604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd9160048083019260209291908290030181865afa158015610dac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd0919061200e565b905090565b33600090815260056020526040902054600114610e045760405162461bcd60e51b81526004016105a590611f40565b6001600160a01b0316600090815260056020526040812055565b33600090815260056020526040902054600114610e4d5760405162461bcd60e51b81526004016105a590611f40565b6109128282611953565b6000600354600014610e8a57600354610e6e610d62565b610e8090670de0b6b3a7640000611f8d565b610dd09190611fa4565b50670de0b6b3a764000090565b6000612710610ea7601982611fc6565b610eb19084611f8d565b610ebb9190611fa4565b90506000612710610ecd601984611f8d565b610ed79190611fa4565b90506000610ee3610e57565b610ef584670de0b6b3a7640000611f8d565b610eff9190611fa4565b9050610f0b3382611953565b6009546001600160a01b031663f3fef3a3336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101879052604401600060405180830381600087803b158015610f6557600080fd5b505af1158015610f79573d6000803e3d6000fd5b505060095460405163f3fef3a360e01b8152306004820152602481018690526001600160a01b03909116925063f3fef3a39150604401600060405180830381600087803b158015610fc957600080fd5b505af1158015610fdd573d6000803e3d6000fd5b505060085460009250610ffc91506001600160a01b031684600a61170c565b9050600061100a8285611ffb565b1115610c01576009546001600160a01b031663b6b55f25610bb08386611ffb565b600061103833848461055b565b9392505050565b6110756040518060400160405280601581526020017473656c6c4578616374416d6f756e744f665361666560581b815250611684565b6000670de0b6b3a7640000611088610e57565b6110929084611f8d565b61109c9190611fa4565b90506110dd6040518060400160405280601681526020017f75736450726963654f66546f6b656e73546f53656c6c00000000000000000000815250826116c7565b60006127106110ed601984611f8d565b6110f79190611fa4565b9050611121604051806040016040528060068152602001650eae6c8a8c2f60d31b815250826116c7565b600061112d8284611ffb565b905061115c6040518060400160405280600b81526020016a3ab9b22a37a932ba3ab93760a91b815250826116c7565b6111663385611953565b6111886040518060600160405280602381526020016120fa60239139856116c7565b6009546001600160a01b031663f3fef3a3336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401600060405180830381600087803b1580156111e257600080fd5b505af11580156111f6573d6000803e3d6000fd5b505060095460405163f3fef3a360e01b8152306004820152602481018690526001600160a01b03909116925063f3fef3a39150604401600060405180830381600087803b15801561124657600080fd5b505af115801561125a573d6000803e3d6000fd5b505050506112806040518060600160405280602481526020016120d660249139836116c7565b60085460009061129b906001600160a01b031684600a61170c565b90506112db60405180604001604052806011815260200170757364546178202d20706169643a20257360781b81525082856112d69190611ffb565b6116c7565b600061100a8285611ffb565b6112ef611c3a565b60408051808201918290529060009060029082845b81546001600160a01b03168152600190910190602001808311611304575050505050905090565b600061134f6040518060600160405280602b815260200161211d602b9139836116c7565b6113876040518060400160405280601081526020016f5f6d736753656e64657228293a20257360801b8152506113823390565b611b4e565b6040805180820190915260078152667573643a20257360c81b60208201526008546113bb91906001600160a01b0316611b4e565b60006127106113cb601982611ffb565b6113d59085611f8d565b6113df9190611fa4565b905060006127106113f1601984611f8d565b6113fb9190611fa4565b9050611425604051806040016040528060068152602001650eae6c8a8c2f60d31b815250826116c7565b600061142f610e57565b61144184670de0b6b3a7640000611f8d565b61144b9190611fa4565b905061147e6040518060400160405280600f81526020016e73616665546f6b656e73546f42757960881b815250826116c7565b61148833826115f2565b6008546001600160a01b03166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018890526064016020604051808303816000875af11580156114ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115119190611fd9565b5060085460009061152d906001600160a01b031684600a61170c565b6009549091506001600160a01b031663b6b55f258261154c8688611fc6565b6115569190611ffb565b6040518263ffffffff1660e01b815260040161157491815260200190565b600060405180830381600087803b15801561158e57600080fd5b505af11580156115a2573d6000803e3d6000fd5b5050505082846115b29190611fc6565b9695505050505050565b6000826115c98382611ffb565b915081111561055557600080fd5b6000826115e48382611fc6565b915081101561055557600080fd5b6001600160a01b03821660009081526006602052604090205461161590826115d7565b6001600160a01b03831660009081526006602052604090205560035461163b90826115d7565b6003556040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a35050565b6102fb816040516024016116989190611cfb565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052611b8f565b61091282826040516024016116dd929190612027565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052611b8f565b600061173f6040518060400160405280600f81526020016e446973747269627574696e6720257360881b815250846116c7565b604080518082018252600a81526962616c616e636520257360b01b602082015290516370a0823160e01b81523060048201526117cb91906001600160a01b038716906370a0823190602401602060405180830381865afa1580156117a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d6919061200e565b6000805b600281101561190d5760006127108583600281106117ef576117ef612049565b01546117fb9088611f8d565b6118059190611fa4565b90506118576040518060400160405280601081526020016f73656e64696e6720257320746f20257360801b815250826000856002811061184757611847612049565b01546001600160a01b0316611bb0565b866001600160a01b031663a9059cbb6000846002811061187957611879612049565b015460405160e083901b6001600160e01b03191681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af11580156118c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ec9190611fd9565b506118f78184611fc6565b92505080806119059061205f565b9150506117cf565b5061193e6040518060400160405280600e81526020016d446973747269627574656420257360901b815250826116c7565b949350505050565b6109126000826002611c58565b6001600160a01b0382166000908152600660205260409020548111156119bb5760405162461bcd60e51b815260206004820152601e60248201527f53616665546f6b656e3a696e73756666696369656e742d62616c616e6365000060448201526064016105a5565b6001600160a01b03821633148015906119f957506001600160a01b038216600090815260076020908152604080832033845290915290205460001914155b15611ac4576001600160a01b0382166000908152600760209081526040808320338452909152902054811115611a715760405162461bcd60e51b815260206004820181905260248201527f53616665546f6b656e3a696e73756666696369656e742d616c6c6f77616e636560448201526064016105a5565b6001600160a01b0382166000908152600760209081526040808320338452909152902054611a9f90826115bc565b6001600160a01b03831660009081526007602090815260408083203384529091529020555b6001600160a01b038216600090815260066020526040902054611ae790826115bc565b6001600160a01b038316600090815260066020526040902055600354611b0d90826115bc565b6003556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611678565b6109128282604051602401611b64929190612078565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b611bf7838383604051602401611bc8939291906120a3565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b179052611b8f565b505050565b8260028101928215611c2a579160200282015b82811115611c2a578251825591602001919060010190611c0f565b50611c36929150611ca0565b5090565b60405180604001604052806002906020820280368337509192915050565b8260028101928215611c2a579160200282015b82811115611c2a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611c6b565b5b80821115611c365760008155600101611ca1565b6000815180845260005b81811015611cdb57602081850181015186830182015201611cbf565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006110386020830184611cb5565b80356001600160a01b0381168114611d2557600080fd5b919050565b60008060408385031215611d3d57600080fd5b611d4683611d0e565b946020939093013593505050565b600080600060608486031215611d6957600080fd5b611d7284611d0e565b9250611d8060208501611d0e565b9150604084013590509250925092565b600060208284031215611da257600080fd5b5035919050565b600060208284031215611dbb57600080fd5b61103882611d0e565b6040805190810167ffffffffffffffff81118282101715611df557634e487b7160e01b600052604160045260246000fd5b60405290565b60008060008060c08587031215611e1157600080fd5b611e1a85611d0e565b93506020611e29818701611d0e565b935086605f870112611e3a57600080fd5b611e42611dc4565b806080880189811115611e5457600080fd5b604089015b81811015611e7757611e6a81611d0e565b8452928401928401611e59565b5081955089609f8a0112611e8a57600080fd5b611e92611dc4565b925082915060c089018a811115611ea857600080fd5b5b80821015611ec257813584529284019290840190611ea9565b505080935050505092959194509250565b60408101818360005b6002811015611f045781516001600160a01b0316835260209283019290910190600101611edc565b50505092915050565b60008060408385031215611f2057600080fd5b611f2983611d0e565b9150611f3760208401611d0e565b90509250929050565b60208082526018908201527f53616665546f6b656e3a6e6f742d617574686f72697a65640000000000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761055557610555611f77565b600082611fc157634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561055557610555611f77565b600060208284031215611feb57600080fd5b8151801515811461103857600080fd5b8181038181111561055557610555611f77565b60006020828403121561202057600080fd5b5051919050565b60408152600061203a6040830185611cb5565b90508260208301529392505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161207157612071611f77565b5060010190565b60408152600061208b6040830185611cb5565b90506001600160a01b03831660208301529392505050565b6060815260006120b66060830186611cb5565b90508360208301526001600160a01b038316604083015294935050505056fe7472616e736665727265642066726f6d207468652075736572207573645461783a2025736275726e656420746f6b656e732066726f6d205f6d736753656e64657228293a20257362757953616665466f724578616374416d6f756e744f665553442c205f757364546f5370656e643a202573a26469706673582212206dea1b8e4e5fce5701dec4bf4a19055fd479713d6800dfeeaac92ae0b682e12164736f6c63430008110033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";

type SafeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeToken__factory extends ContractFactory {
  constructor(...args: SafeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdToken: PromiseOrValue<string>,
    _safeVault: PromiseOrValue<string>,
    _wallets: [PromiseOrValue<string>, PromiseOrValue<string>],
    _taxDistributionOnMintAndBurn: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafeToken> {
    return super.deploy(
      _usdToken,
      _safeVault,
      _wallets,
      _taxDistributionOnMintAndBurn,
      overrides || {}
    ) as Promise<SafeToken>;
  }
  override getDeployTransaction(
    _usdToken: PromiseOrValue<string>,
    _safeVault: PromiseOrValue<string>,
    _wallets: [PromiseOrValue<string>, PromiseOrValue<string>],
    _taxDistributionOnMintAndBurn: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _usdToken,
      _safeVault,
      _wallets,
      _taxDistributionOnMintAndBurn,
      overrides || {}
    );
  }
  override attach(address: string): SafeToken {
    return super.attach(address) as SafeToken;
  }
  override connect(signer: Signer): SafeToken__factory {
    return super.connect(signer) as SafeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeTokenInterface {
    return new utils.Interface(_abi) as SafeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeToken {
    return new Contract(address, _abi, signerOrProvider) as SafeToken;
  }
}
