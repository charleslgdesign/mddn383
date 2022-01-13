	import { React, useState} from 'react'
	import WalletInterface from './WalletInterface.js'

	const Wallet = () => {

	const [show,setShow] = useState(false)	

	
	
	return (



	<div className='appear'>
		<div className='white-paper-container'>
	<button className="white-paper" onClick={()=>setShow(!show)}><h1 className='white-paper-text'>wallet</h1></button>
	</div>

{
	show?<div>
		<WalletInterface/>
	</div>:null



}

	
</div>





	)}

export default Wallet;
