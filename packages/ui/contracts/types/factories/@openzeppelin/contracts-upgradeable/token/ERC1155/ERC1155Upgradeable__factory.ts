/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155Upgradeable,
  ERC1155UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611361806100206000396000f3fe608060405234801561001057600080fd5b50600436106100775760003560e01c8062fdd58e1461007c57806301ffc9a7146100a25780630e89341c146100c55780632eb2c2d6146100e55780634e1273f4146100fa578063a22cb4651461011a578063e985e9c51461012d578063f242432a14610169575b600080fd5b61008f61008a366004610b46565b61017c565b6040519081526020015b60405180910390f35b6100b56100b0366004610b89565b610217565b6040519015158152602001610099565b6100d86100d3366004610bad565b610267565b6040516100999190610c0c565b6100f86100f3366004610d6d565b6102fb565b005b61010d610108366004610e16565b610347565b6040516100999190610f1c565b6100f8610128366004610f2f565b610468565b6100b561013b366004610f6b565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b6100f8610177366004610f9e565b610477565b60006001600160a01b0383166101ec5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b5060008181526065602090815260408083206001600160a01b03861684529091529020545b92915050565b60006001600160e01b03198216636cdb3d1360e11b148061024857506001600160e01b031982166303a24d0760e21b145b8061021157506301ffc9a760e01b6001600160e01b0319831614610211565b60606067805461027690611002565b80601f01602080910402602001604051908101604052809291908181526020018280546102a290611002565b80156102ef5780601f106102c4576101008083540402835291602001916102ef565b820191906000526020600020905b8154815290600101906020018083116102d257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103175750610317853361013b565b6103335760405162461bcd60e51b81526004016101e39061103c565b61034085858585856104bc565b5050505050565b606081518351146103ac5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101e3565b600083516001600160401b038111156103c7576103c7610c1f565b6040519080825280602002602001820160405280156103f0578160200160208202803683370190505b50905060005b84518110156104605761043b8582815181106104145761041461108a565b602002602001015185838151811061042e5761042e61108a565b602002602001015161017c565b82828151811061044d5761044d61108a565b60209081029190910101526001016103f6565b509392505050565b610473338383610695565b5050565b6001600160a01b0385163314806104935750610493853361013b565b6104af5760405162461bcd60e51b81526004016101e39061103c565b6103408585858585610775565b815183511461051e5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101e3565b6001600160a01b0384166105445760405162461bcd60e51b81526004016101e3906110a0565b3360005b84518110156106275760008582815181106105655761056561108a565b6020026020010151905060008583815181106105835761058361108a565b60209081029190910181015160008481526065835260408082206001600160a01b038e1683529093529190912054909150818110156105d45760405162461bcd60e51b81526004016101e3906110e5565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061061390849061112f565b909155505060019093019250610548915050565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610677929190611150565b60405180910390a461068d8187878787876108a3565b505050505050565b816001600160a01b0316836001600160a01b0316036107085760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101e3565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661079b5760405162461bcd60e51b81526004016101e3906110a0565b3360006107a785610a0e565b905060006107b485610a0e565b905060008681526065602090815260408083206001600160a01b038c168452909152902054858110156107f95760405162461bcd60e51b81526004016101e3906110e5565b60008781526065602090815260408083206001600160a01b038d8116855292528083208985039055908a1682528120805488929061083890849061112f565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610898848a8a8a8a8a610a59565b505050505050505050565b6108b5846001600160a01b0316610b1b565b1561068d5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906108ee908990899088908890889060040161117e565b6020604051808303816000875af1925050508015610929575060408051601f3d908101601f19168201909252610926918101906111dc565b60015b6109d5576109356111f9565b806308c379a00361096e5750610949611215565b806109545750610970565b8060405162461bcd60e51b81526004016101e39190610c0c565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101e3565b6001600160e01b0319811663bc197c8160e01b14610a055760405162461bcd60e51b81526004016101e39061129e565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610a4857610a4861108a565b602090810291909101015292915050565b610a6b846001600160a01b0316610b1b565b1561068d5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610aa490899089908890889088906004016112e6565b6020604051808303816000875af1925050508015610adf575060408051601f3d908101601f19168201909252610adc918101906111dc565b60015b610aeb576109356111f9565b6001600160e01b0319811663f23a6e6160e01b14610a055760405162461bcd60e51b81526004016101e39061129e565b6001600160a01b03163b151590565b80356001600160a01b0381168114610b4157600080fd5b919050565b60008060408385031215610b5957600080fd5b610b6283610b2a565b946020939093013593505050565b6001600160e01b031981168114610b8657600080fd5b50565b600060208284031215610b9b57600080fd5b8135610ba681610b70565b9392505050565b600060208284031215610bbf57600080fd5b5035919050565b6000815180845260005b81811015610bec57602081850181015186830182015201610bd0565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ba66020830184610bc6565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715610c5a57610c5a610c1f565b6040525050565b60006001600160401b03821115610c7a57610c7a610c1f565b5060051b60200190565b600082601f830112610c9557600080fd5b81356020610ca282610c61565b604051610caf8282610c35565b80915083815260208101915060208460051b870101935086841115610cd357600080fd5b602086015b84811015610cef5780358352918301918301610cd8565b509695505050505050565b600082601f830112610d0b57600080fd5b81356001600160401b03811115610d2457610d24610c1f565b604051610d3b601f8301601f191660200182610c35565b818152846020838601011115610d5057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610d8557600080fd5b610d8e86610b2a565b9450610d9c60208701610b2a565b935060408601356001600160401b0380821115610db857600080fd5b610dc489838a01610c84565b94506060880135915080821115610dda57600080fd5b610de689838a01610c84565b93506080880135915080821115610dfc57600080fd5b50610e0988828901610cfa565b9150509295509295909350565b60008060408385031215610e2957600080fd5b82356001600160401b0380821115610e4057600080fd5b818501915085601f830112610e5457600080fd5b81356020610e6182610c61565b604051610e6e8282610c35565b83815260059390931b8501820192828101915089841115610e8e57600080fd5b948201945b83861015610eb357610ea486610b2a565b82529482019490820190610e93565b96505086013592505080821115610ec957600080fd5b50610ed685828601610c84565b9150509250929050565b60008151808452602080850194506020840160005b83811015610f1157815187529582019590820190600101610ef5565b509495945050505050565b602081526000610ba66020830184610ee0565b60008060408385031215610f4257600080fd5b610f4b83610b2a565b915060208301358015158114610f6057600080fd5b809150509250929050565b60008060408385031215610f7e57600080fd5b610f8783610b2a565b9150610f9560208401610b2a565b90509250929050565b600080600080600060a08688031215610fb657600080fd5b610fbf86610b2a565b9450610fcd60208701610b2a565b9350604086013592506060860135915060808601356001600160401b03811115610ff657600080fd5b610e0988828901610cfa565b600181811c9082168061101657607f821691505b60208210810361103657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b8082018082111561021157634e487b7160e01b600052601160045260246000fd5b6040815260006111636040830185610ee0565b82810360208401526111758185610ee0565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190526000906111aa90830186610ee0565b82810360608401526111bc8186610ee0565b905082810360808401526111d08185610bc6565b98975050505050505050565b6000602082840312156111ee57600080fd5b8151610ba681610b70565b600060033d11156112125760046000803e5060005160e01c5b90565b600060443d10156112235790565b6040516003193d81016004833e81513d6001600160401b03808311602484018310171561125257505050505090565b828501915081518181111561126a5750505050505090565b843d87010160208285010111156112845750505050505090565b61129360208286010187610c35565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061132090830184610bc6565b97965050505050505056fea26469706673582212208e9b9d87c54aa8d6e8a5ed1955ca74e9140c5b6bbc930839c4d135630f6c94ff64736f6c63430008170033";

type ERC1155UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC1155UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Upgradeable {
    return super.attach(address) as ERC1155Upgradeable;
  }
  override connect(signer: Signer): ERC1155Upgradeable__factory {
    return super.connect(signer) as ERC1155Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155UpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Upgradeable;
  }
}
