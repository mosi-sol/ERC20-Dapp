# ERC20-Dapp
simple dapp - for using for erc20 custom token as/is a dashboard

***

### chain id
const { chainId } = await provider.getNetwork()
console.log(chainId) // 1 = ethereum mainnet

getNetwork().name // gives human readable name like 'ethereum'

*** 

### use json rpc
import { ethers } from 'ethers';

const provider = new ethers.providers.StaticJsonRpcProvider(
  'https://mainnet.infura.io/v3/123456789000000.....000'
);

(async () => {
  console.log('hey');
  const result = await provider.getBlockNumber();
  console.log('yeh');
  console.log(result);
})();
