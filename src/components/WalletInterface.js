import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import amok_token_abi from './Contracts/amok_token_abi_.json'
import Interactions from './Interactions.js'
import Wallet from './Wallet.js'

function WalletInterface() {
	let contractAddress = '0x198F21D82f0078b603A58DBED6eB9fb5cDb989f4';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('connect');
	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);
	const [tokenName, setTokenName] = useState(null);
	const [balance, setBalance] = useState(null);
	const [transferHash, setTransferHash] = useState(null);
	const [showDecimals, setShowDecimals] = useState(false);



	const connectWalletHandler = () => {

		if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('connected');
				
			})

			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {

			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');

		}

	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}



	const updateBalance = async () => {

		let balanceBigN = await contract.balanceOf(defaultAccount);
		let balanceNumber = balanceBigN.toNumber();
		let tokenDecimals = await contract.decimals();
		let tokenBalance = balanceNumber / Math.pow(10, tokenDecimals);
		setBalance(toFixed(tokenBalance));	

	}



   function toFixed(x) {

   if (Math.abs(x) < 1.0) {

      var e = parseInt(x.toString().split('e-')[1]);

      if (e) {

         x *= Math.pow(10, e - 1);
         x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);

      }

   } else {

      var e = parseInt(x.toString().split('+')[1]);

      if (e > 20) {

         e -= 20;
         x /= Math.pow(10, e);
         x += (new Array(e + 1)).join('0');

      }

   }

   return x;

}



	const chainChangedHandler = () => {

		window.location.reload();

	}



	window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);



	const updateEthers = () => {


		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);
		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);
		let tempContract = new ethers.Contract(contractAddress, amok_token_abi, tempSigner);
		setContract(tempContract);



	}



	useEffect(() => {

		if (contract != null) {

			updateBalance();
			updateTokenName();
		}

	}, [contract]);

	const updateTokenName = async () => {
		setTokenName(await contract.name());

	}

    return (
        <div className='appear'>
			<div className='gallery-container-4'>

				<div className='ze-wallet'>
<h1 className='wallet-token-name-noB-2' onClick={connectWalletHandler} >{connButtonText}</h1>

<div className='lil-border'>
<h1 className='wallet-token-name-noB-white'>address:</h1>
<h1 className='small'>{defaultAccount}</h1>
        <h1 className='wallet-token-name-noB-white'>balance:</h1>
            <h1 className='small'>{balance, tokenName}</h1>
        </div>
    
            {errorMessage}

    <Interactions contract = {contract}/>
				</div>
			</div>
			</div>
            
 
    )
}

export default WalletInterface;
