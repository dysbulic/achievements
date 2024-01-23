/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Roles, RolesInterface } from "../../src/Roles";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "roleName",
        type: "string",
      },
    ],
    name: "roleIndexForName",
    outputs: [
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "roleNameByIndex",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6109eb61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063778f5a7b14610045578063814c24501461006f575b600080fd5b61005861005336600461073d565b61008f565b60405160ff90911681526020015b60405180910390f35b61008261007d3660046107ed565b6103bf565b6040516100669190610860565b600080826040516020016100a39190610873565b6040516020818303038152906040528051906020012090506040516020016100da906829bab832b93ab9b2b960b91b815260090190565b6040516020818303038152906040528051906020012081036101005760015b9392505050565b6040516526b4b73a32b960d11b60208201526026016040516020818303038152906040528051906020012081036101385760026100f9565b6040516521b0b9ba32b960d11b60208201526026016040516020818303038152906040528051906020012081036101705760036100f9565b604051692a3930b739b332b932b960b11b6020820152602a016040516020818303038152906040528051906020012081036101ac5760046100f9565b6040516921b7b73334b3bab932b960b11b6020820152602a016040516020818303038152906040528051906020012081036101e85760056100f9565b6040516926b0b4b73a30b4b732b960b11b6020820152602a016040516020818303038152906040528051906020012081036102245760066100f9565b6040516621b932b0ba37b960c91b602082015260270160405160208183030381529060405280519060200120810361025d5760076100f9565b604051662634b6b4ba32b960c91b60208201526027016040516020818303038152906040528051906020012081036102965760086100f9565b60405165213ab93732b960d11b60208201526026016040516020818303038152906040528051906020012081036102ce5760096100f9565b604051682232b9ba3937bcb2b960b91b602082015260290160405160208183030381529060405280519060200120810361030957600a6100f9565b604051654f7261636c6560d01b602082015260260160405160208183030381529060405280519060200120810361034157600b6100f9565b6040516b14995cd95c9d995913185cdd60a21b6020820152602c0160405160208183030381529060405280519060200120810361037f57600c6100f9565b82604051602001610390919061088f565b60408051601f198184030181529082905262461bcd60e51b82526103b691600401610860565b60405180910390fd5b606060001960ff8316016103f257505060408051808201909152600981526829bab832b93ab9b2b960b91b602082015290565b60011960ff83160161042057505060408051808201909152600681526526b4b73a32b960d11b602082015290565b60021960ff83160161044e57505060408051808201909152600681526521b0b9ba32b960d11b602082015290565b60031960ff83160161048057505060408051808201909152600a8152692a3930b739b332b932b960b11b602082015290565b60041960ff8316016104b257505060408051808201909152600a81526921b7b73334b3bab932b960b11b602082015290565b60051960ff8316016104e457505060408051808201909152600a81526926b0b4b73a30b4b732b960b11b602082015290565b60061960ff83160161051357505060408051808201909152600781526621b932b0ba37b960c91b602082015290565b60071960ff8316016105425750506040805180820190915260078152662634b6b4ba32b960c91b602082015290565b60081960ff831601610570575050604080518082019091526006815265213ab93732b960d11b602082015290565b60091960ff8316016105a15750506040805180820190915260098152682232b9ba3937bcb2b960b91b602082015290565b600a1960ff8316016105cf5750506040805180820190915260068152654f7261636c6560d01b602082015290565b600b1960ff83160161060357505060408051808201909152600c81526b14995cd95c9d995913185cdd60a21b602082015290565b61060f8260ff1661061f565b60405160200161039091906108ca565b6060816000036106465750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610670578061065a8161091c565b91506106699050600a8361094b565b915061064a565b6000816001600160401b0381111561068a5761068a610727565b6040519080825280601f01601f1916602001820160405280156106b4576020820181803683370190505b5090505b841561071f576106c960018361095f565b91506106d6600a86610978565b6106e190603061098c565b60f81b8183815181106106f6576106f661099f565b60200101906001600160f81b031916908160001a905350610718600a8661094b565b94506106b8565b949350505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561074f57600080fd5b81356001600160401b038082111561076657600080fd5b818401915084601f83011261077a57600080fd5b81358181111561078c5761078c610727565b604051601f8201601f19908116603f011681019083821181831017156107b4576107b4610727565b816040528281528760208487010111156107cd57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156107ff57600080fd5b813560ff811681146100f957600080fd5b60005b8381101561082b578181015183820152602001610813565b50506000910152565b6000815180845261084c816020860160208601610810565b601f01601f19169290920160200192915050565b6020815260006100f96020830184610834565b60008251610885818460208701610810565b9190910192915050565b7202ab735b737bbb7103937b632903a3cb8329d1606d1b8152600082516108bd816013850160208701610810565b9190910160130192915050565b7302ab735b737bbb7102937b6329024b73232bc1d160651b8152600082516108f9816014850160208701610810565b9190910160140192915050565b634e487b7160e01b600052601160045260246000fd5b60006001820161092e5761092e610906565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261095a5761095a610935565b500490565b8181038181111561097257610972610906565b92915050565b60008261098757610987610935565b500690565b8082018082111561097257610972610906565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220e42324af0187eb54f869717ccce6733f2867b05b515b02e4fd21938e63f679cf64736f6c63430008170033";

type RolesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RolesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Roles__factory extends ContractFactory {
  constructor(...args: RolesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Roles> {
    return super.deploy(overrides || {}) as Promise<Roles>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Roles {
    return super.attach(address) as Roles;
  }
  override connect(signer: Signer): Roles__factory {
    return super.connect(signer) as Roles__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RolesInterface {
    return new utils.Interface(_abi) as RolesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Roles {
    return new Contract(address, _abi, signerOrProvider) as Roles;
  }
}
