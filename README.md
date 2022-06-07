# ERC20-Dapp
simple dapp - for using for erc20 custom token as/is a dashboard

BSC testnet = [here](https://testnet.bscscan.com/address/0x29dC51d1481A0141F5238d8D3d03bba95bE3CB0A#code) 

***

### chain id
```js
const { chainId } = await provider.getNetwork()
console.log(chainId) // 1 = ethereum mainnet

getNetwork().name // gives human readable name like 'ethereum'
```
*** 

### use json rpc
```js
import { ethers } from 'ethers';

const provider = new ethers.providers.StaticJsonRpcProvider(
  'https://mainnet.infura.io/v3/123456789000000.....000' // not use infura for more security, i use alchemy.io
);

(async () => {
  console.log('hey');
  const result = await provider.getBlockNumber();
  console.log('yeh');
  console.log(result);
})();
```
