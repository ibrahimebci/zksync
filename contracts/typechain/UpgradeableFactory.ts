/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Upgradeable } from "./Upgradeable";

export class UpgradeableFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as Upgradeable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "newTargetInitializationParameters",
        type: "bytes",
      },
    ],
    name: "upgradeTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];