let accounts;

let provider;

// tst -> testnet bsc -> 0x29dC51d1481A0141F5238d8D3d03bba95bE3CB0A
const ERC20Address = "0x29dC51d1481A0141F5238d8D3d03bba95bE3CB0A";
const ERC20Abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_decimals",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "burner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "miner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxProvider",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


window.onload = function() {
    if(window.ethereum) {
        this.ethereum.on('accountsChanged', accountChange);
        window.ethereum.request({ 
            method: 'eth_accounts' })
            .then(accountChange)
            .catch((err) => {
                console.log(err);
            });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
    }
    else{
        console.log("please install metamask");
    }
}

const accountChange = (a) => {
    console.log("account change");
    accounts = a;
	document.getElementById("address").innerHTML = accounts;
	document.getElementById("connection").innerHTML = "connect "+ accounts;
}

// connect wallet
const enableEth = async () => {
    accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' }).catch((err) => {
            console.log(err.code);
        });
    console.log(accounts);
}

// native token balance
const getBalance = async () => {
    let balance;
    balance = await window.ethereum.request({ 
        method: 'eth_getBalance' , 
        params: [
            accounts[0]
        ]
    }).catch((err) => {
        console.log(err);
    });
    balance = parseInt(balance);
    balance = balance / Math.pow(10, 18);
	document.getElementById("showGas").innerHTML = "fuel is: "+ balance.toString();
}

// tst balance
const ERC20Balance = async () => {
    let ERC20Contract = new ethers.Contract(ERC20Address, ERC20Abi, provider);
    console.log(ERC20Contract);
    let bal = await ERC20Contract.balanceOf(accounts[0]);
    bal = parseInt(bal);
    bal = bal / Math.pow(10, 18);
	document.getElementById("showTST").innerHTML = "TST balance is: "+ bal.toString();
}

// TST total supply
const totalTST = async () => {
    let ERC20Contract = new ethers.Contract(ERC20Address, ERC20Abi, provider);
    console.log(ERC20Contract);
    let bal = await ERC20Contract.totalSupply();
    bal = parseInt(bal);
    bal = bal / Math.pow(10, 18);
	document.getElementById("showTotal").innerHTML = "total TST is: "+ bal.toString();
}

// mint custom number of TST by using variable t1
const theMint2 = async (t1) => {
	let theTContract = new ethers.Contract(ERC20Address, ERC20Abi, provider.getSigner());
	console.log(typeof(t1));
	if(t1 > 0) {
		const amount = ethers.utils.parseUnits(t1, 18);
		let tx = await theTContract.mint(amount);
		console.log(tx);
	}
}

/*************************************************** */

// 0x5c91F36432D4DD8Eb0050B6f827Dfe83E92a8597
// 0xc58522826208d07a4fdac68fea01be618b25685a

// from accounts[0] to input address
const tstTransfer = async (tr1, tr2) => {
	let theTContract = new ethers.Contract(ERC20Address, ERC20Abi, provider.getSigner());
	const amount = ethers.utils.parseUnits(tr1, 18);
	let tx = await theTContract.transfer(tr2, amount);
	tstcheckEvents();
}

// use for transfer and mint
const tstcheckEvents = async () => {
	let theTContract = new ethers.Contract(ERC20Address, ERC20Abi, provider);
	theTContract.on('Transfer', (from, to, value) => {
		document.getElementById("showTransfer").innerHTML = "from: "+ from.toString()+" to: "+ to.toString()+" value: "+ value.toString();
	});
}
