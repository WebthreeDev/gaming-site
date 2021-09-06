import { Injectable } from '@angular/core';

// import * as marketPlaceArtifacts from '../../../build/contracts/MarketPlace.json';

declare let Web3: any, window: any;
let { ethereum, web3 } = window;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  connectionResult = 'No Erthereum browser detected. you should consider trying MetaMask';

  constructor() { }

  public checkAndInstantiateWeb3(): string {
    if (!ethereum || !web3) {
      return this.connectionResult;
    }
    if (ethereum) {
      ethereum.request({ method: 'eth_requestAccounts' });
      this.connectionResult = 'connected';
    } else if (web3) {
      web3 = new Web3(web3.currentProvider);
      this.connectionResult = 'connected';
    }
    return this.connectionResult;
  }

  public checkWeb3(): string {
    if (!ethereum || !web3) {
      return this.connectionResult;
    }
    return 'connected'
  }

  public loadBlockChainData(): any | string {
    const account = web3.eth.getAccounts();
    if (!!account) return account;
    return 'There is no account';
  }

  // public getContract() {
  //   return new Promise((resolve) => {
  //     const web3 = window.web3;
  //     let networkId;
  //     web3.eth.net.getId()
  //       .then((netId: any) => {
  //         networkId = netId;
  //         const abi = marketPlaceArtifacts.abi;
  //         const networkAddress = marketPlaceArtifacts.networks[networkId].address;
  //         const marketplace = new web3.eth.Contract(abi, networkAddress);
  //         resolve(marketplace);
  //       });
  //   });
  // }
}
