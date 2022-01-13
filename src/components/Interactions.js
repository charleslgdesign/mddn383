import {React, useState, useEffect} from 'react'
import editButton from './img/edit-button.svg'
const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();


	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value * .001;
		let recieverAddress = e.target.recieverAddress.value;

		let txt = await props.contract.transfer(recieverAddress, transferAmount);
		console.log(txt);
		setTransferHash("Transfer confirmation hash: " + txt.hash);
	}

	return (
			
				<div className='lil-border'>
				<form onSubmit={transferHandler}>
					<h1 className='wallet-token-name-noB-white'>transfer</h1>

						<h1 className='small2'> reciever address: </h1>
						<input className="transfer-input" type='text' id='recieverAddress'/>

						<h1 h1 className='small2'> send amount: </h1>
						<input className='transfer-input' type='number' id='sendAmount' min='0' step='1'/>

						<button className='send-button' type='submit'><h1 class='send'>send</h1></button>
						<div>
							{transferHash}
						</div>
					</form>
				</div>

		)
	
}

export default Interactions;