import React from 'react'


function GetStarted() {
    return (
        <div className='appear'>

        <div className='paragraph-container'>                
            
            <p1 className="paragraph-header">Setup</p1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p1 className="paragraph-small-header">Prerequisites</p1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p1 className="paragraph-text"><b>1.</b> Firstly, a cryptocurrency wallet will be needed to interact with the <b>'wallet</b> and <b>'deposit'</b> part of this application in order to interact with this application.
            <br/>
            <br/>
            <a href='https://metamask.io/' target='blank'>MetaMask</a> is recomended because it of it's <b>strong community of developers </b>updating its <b>open-source code</b> <a target='blank' href='https://www.bitdegree.org/crypto/metamask-wallet-review'>(S., 2021).</a>
            <br/>
            <br/>
             
            <b>2.</b> <a target='blank'
            href='https://trufflesuite.com/ganache/'>'Ganache Truffle Suite'</a> will be necessary for running the <b>server-side,</b> code locally without having to spend real Ethereum on <b>'gas fees'</b>. Futhermore, because this implementation doesn't have any way of mitigating high gas prices, the fees would outweigh the financial insentives of <b>returning bottles</b> in the first place.
            <br/>
            <br/>
            
            <b>3.</b> Once installed, open <b>'Ganache'</b> and select <b>'Quickstart Ethereum'.</b> This will create the local blockchain enviroment that act as the <b>'back-end'</b> to the application.
            <br/>
            <br/>
           
            <b>4.</b> Using <a target='blank' href='https://remix.ethereum.org/'>remix.ethereum.org, </a> <b>'Compile'</b> the following <b>Smart Contract: </b> 
           <br/>
           <br/>
          
        
           <a href='/AmToken.sol' download>AmToken.sol</a>
            <br/>
            <br/>
            
        <b>5.</b> The Contract will need to be connected to the <b>Ganache</b> back end, by <b>'Deploying'</b> it to the provided address as a <b>'Web3 provider'.</b><br/><br/> <b>By default,</b> this should be: <b>'http://127.0.0.1:7545'</b>, however it is recomended to check you have the right address to avoid any <b>errors</b> later on.
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
       
          
            
            </p1>
            <p1 className="paragraph-small-header">Final Note</p1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p1 className='paragraph-text'>
            With all the <b>prerequisites</b> out of the way, you are now ready to interact with the <b>Am Token</b> and <b>Wallet.</b> <br/><br/>It should be mentioned that this project is merely a <b>prototype.</b> Any <b>suggestions/queries</b> would be highly appreciated via twitter at <a href='https://twitter.com/charleslgdesign' target='blank'>@charleslgdesign</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          
           </p1>
           
    
       
        </div>
        </div>
    )
}

export default GetStarted
