import { React, useState } from 'react'
import smartContractSchematic from './img/smart-contract-schematic.svg'
import DataSchematic from './img/data-schematic.svg'

import wp2 from './img/foliage-2.png'
import wp3 from './img/foliage-3.png'
import CircularEconomy from './img/circular-economy.svg'
import AmFreshDrinks from './img/foliage-5.png'
import loyyal from './img/loyyal.png'

import red from './img/red-block.svg'
import purple from './img/purple-block.svg'
import orange from './img/orange-block.svg'
import lime from './img/lime-block.svg'



        // <p1>
        //     Kombucha is a probiotic tea with
        //         <br />
        //     The global kombucha market size was estimated at USD 1.67 billion in 2019 and is expected to reach USD 2.02 billion in 2020. What is kombucha market growth? b. The global kombucha market is expected to grow at a compound annual growth rate of 19.7% from 2020 to 2027 to reach USD 7.05 billion by 2027. (Kombucha Market Size & Share | Industry Analysis Report, 2027, 2020).
        //         <br />
        //     New Zealanders bought around 3.3 million litres of kombucha worth $27.4 million from supermarkets and other grocery outlets over the 12 months to mid-June 2021, according to figures from retail data analytics company IRI. (Mandow, 2021).
        // </p1>

function WhitePaper() {
    return (
        <div className='appear'>

            <div className='paragraph-container'>                
                
                <p1 className="paragraph-header">am.fresh.drinks</p1><p1 className="paragraph-text">
                                              <br/>
                                              <br/>
                                              <br/>
                                              <img className='big-foto' src={AmFreshDrinks}/>
                                    
                                              <br/>
                                              <br/>
                                              <br/>
                                              This white paper explains the integration of a <b>DRS (Deposit Return System)</b> with a <b>decentralized application (dApp).</b></p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-small-header">Contents</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              
                                              <p1 className="paragraph-text-left">
                                              <br/>
                                              <b><i>1.</i></b><i> Context</i>
                                              <br/>
                                              <br/>
                                              <b><i>2.</i></b><i> Tokenomics</i>
                                              <br/>
                                              <br/>
                                              <b><i>3.</i></b><i> Market</i>
                                              <br/>
                                              <br/>
                                              <b><i>4.</i></b><i> Design</i>
                                              <br/>
                                              <br/>
                                              <b><i>5.</i></b><i> Smart Contract</i>
                                              <br/>
                                              <br/>
                                              <b><i>6.</i></b><i> Sustainability</i>
                                              <br/>
                                              <br/>
                                              <b><i>7.</i></b><i> Hyperfinancialization</i>
                                              <br/>
                                              <br/>
                                              <b><i>8.</i></b><i> Conclusion</i>
                                              <br/>
                                              <br/>
                                              <b><i>9.</i></b><i> References</i>
                                              </p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Context</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text"><b>am.fresh.drinks</b> is a recently founded project that aims to sell <b>kombucha</b> in a <b>sustainable fashion</b> through the <b>decentralized web.</b>
                                              <br/>
                                              <br/>
                                              Existing<b> return bottle deposit systems</b> are practiced by companies like <a target='blank' href='https://www.coke.co.nz/'>'Coca-Cola'</a> but fail to offer a convenient exchange between the <b>customer</b> and <b>company,</b> amit the Global Enviromental Recyling Crisis <a target='blank' href='https://climate.org/the-global-environmental-recycling-crisis-what-options-exist-for-plastic-waste/#:~:text=Introduction,banning%20almost%20all%20waste%20imports.'> (The Global Environmental Recycling Crisis: What Options Exist for Plastic Waste, 2019).</a>
                                              <br/>
                                              <br/>
                                              To solve this <b>problem,</b> a return bottle system was proposed using an application built on top of a <b>Smart Contract</b> as a <b>'Dissruptive Inovation'</b> <a href='https://www.investopedia.com/terms/d/disruptive-innovation.asp#:%7E:text=for%20Disruptive%20Innovation%3F-,What%20Is%20Disruptive%20Innovation%3F,accessible%20to%20a%20broader%20population' target='blank'>(Disruptive Innovation Definition, 2021).</a> Furthermore, this proposal appropriately exists within the <a target='blank' href='https://environment.govt.nz/what-government-is-doing/areas-of-work/waste/ohanga-amiomio-circular-economy/'>'Circular Econonmy'</a><a target='blank' href='https://environment.govt.nz/what-government-is-doing/areas-of-work/waste/ohanga-amiomio-circular-economy/'> (Ōhanga Āmiomio - Circular Economy, 2021).</a>
                                              <br/>
                                              <br/>
                                              The app aims to act as a <b>'digital coffee card'</b>, but for returning used <b>kombucha bottles</b> in order to gain exclusive insentives from an <a target='blank' href='https://ethereum.org/en/developers/docs/standards/tokens/erc-20/'>'ERC-20 Token</a> built on top the popular <b>emergent blockchain</b> <a href='https://ethereum.org/en/' target='blank'>'Ethereum'.</a>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <img class='big-foto' src={loyyal}/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              In the ethos of <b>Blockchain</b> return systems, there are a few solutions with a similar system already such as<a target='blank' href='https://loyyal.com/'> ‘loyyal’.</a> This company offers blockchain technology services that aim to provide a <b>clearer overview </b>into the buissness’s loyalty through the <b>transparency</b> and <b>self-sovereignty of blockchain</b><a target='blank' href='https://www.weforum.org/agenda/2021/08/self-sovereign-identity-future-personal-data-ownership/#:~:text=In%20self%2Dsovereign%20identity%2C%20the,user%20of%20the%20identity%20information.'> (Self-Sovereign Identity: Future of Personal Data Ownership, 2021).</a>
                                              <br/>
                                              <br/>              
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              </p1>
                                              <p1 className="paragraph-small-header">Marketing</p1>
                                              <br/>
                                              <br/>              
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text">
                                              Currently, kombucha has <b>39.4%</b> of the <b>'functional beverages market share'</b> in the United States. With <b>51%</b> of adults between the ages of <b>25-34 drinking kombucha soda,</b> it’s not surprising to learn the kombucha market was already a <b>$534 million business in 2016</b> <a target='blank' href='https://blog.bottlestore.com/kombucha-popularity-makes-beverage-market-growth-soar/'>(Jonathan @ BottleStore, n.d.)</a>
                                              <br/>
                                              <br/>
                                              In the context of <b>New-Zealand,</b> kombucha is an <b>emergant market</b> with <b>high potential</b> as <b>1,850,000 litres were consumed in 2019</b> <a target='blank' href='https://www.scoop.co.nz/stories/BU1910/S00555/kombucha-consumption-at-an-all-time-high.html'>(Kombucha Consumption at an All-Time High | Scoop News, 2019).</a> Furthermore, the <b>social</b> and <b>political reform</b> against high sugar content in fizzy drinks makes kombucha a <b>desirable alternative</b> <a href='https://www.nzherald.co.nz/lifestyle/growing-support-for-cigarette-style-warnings-on-fizzy-drinks/PKDWD6AUGE4XR2STCHTY2UUQ4Q/#:~:text=A%20proposal%20to%20put%20%22cigarette,put%20on%20fizzy%20drink%20packaging.' target='blank'>(Keogh, 2020).</a> 
                                              <br/>
                                              <br/>
                                              <b>aM</b> intends to deliver to this <b>demographic primarily</b> through a targeted <b>social media campaign.</b> The current <b>pre-launch</b> phase prioritises raising <b>brand awareness.</b> The forecoming move to the <b>launch</b> phase is set to occur when Ethereum has merged to <a target='blank' href='https://ethereum.org/en/eth2/'>'ETH.20'</a> because of <b>financial and enviormental concerns</b> restraing the App's release <a target='blank' href='https://ethereum.org/en/eth2/'>(Ethereum, 2022b).</a>
                                                  </p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Tokenomics</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text">When users <b>return a bottle,</b> they are <b>eligible</b> to recive <b>1 aM token.</b> All aM tokens are issued through a DRS smart contract whenenver a used bottle is returned to a specified <b>'drop-off'</b> location.
                                              <br/>
                                              <br/>
                                              The <a target='blank' href='https://www.investopedia.com/terms/e/extrinsicvalue.asp#:~:text=Extrinsic%20value%20is%20the%20difference,in%20volatility%20in%20the%20market.'>Extrinsic Value</a> of <b>1 'aM'</b> is relative to the price of a bottle since returning <b>10 used bottles</b> grants you a new bottle for free <a target='blank' href='https://www.investopedia.com/terms/e/extrinsicvalue.asp#:~:text=Extrinsic%20value%20is%20the%20difference,in%20volatility%20in%20the%20market.'>(Extrinsic Value Definition, 2021)</a>. <b>Production costs</b> are made up of <b>70 cents</b> for each bottle while the rest includes <b>ingredients</b> and <b>labour.</b> 
                                              <br/>
                                              <br/>
                                              Since <b>aM</b> is an <b>emerging company,</b> <b>1 'aM token'</b> will also hold the value of <b>1 of 1000 shares</b> acting as an <a target='blank' href='https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp'>Initial Coin Offering (ICO)'</a>. 
                                              <br/>
                                              <br/>
                                              For the use case of <b>Cryptocurrencies,</b> <b>ICO's</b> are necessary to raise money for creating <b>apps, services, and coins</b> because of the <b>lack of central regulation</b> <a target='blank' href='https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp'>(Initial Coin Offering (ICO), 2022).</a>
                                              <br/>
                                              <br/>
                                              <b>Exchanging aM</b> to purchase a drink acts as <a target='blank' href='https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/#:~:text=What%20is%20coin%20burning%3F,burn%20address%2C%20its%20gone%20forever'>'Coin burning'.</a> This happens when a cryptocurrency token is <b>intentionally</b> sent to an <b>unusable wallet address</b> to remove it from <b>circulation.</b> The address, which is called a burn address or eater address, can't be accessed or assigned to anyone' <a target='blank' href='https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/#:~:text=What%20is%20coin%20burning%3F,burn%20address%2C%20its%20gone%20forever'> (Daly, 2021).</a>
                                              <br/>
                                              <br/>

                                             This means that once <b>1000 bottles</b> have been returned, the <b>'ICO' phase</b> will end. Then, <b>all aM tokens returned</b> will be sent back to the adresses and will exist as an exchangable token, <b>rewarding</b> the users who took part in this phase. 
                                              <br/>
                                              <br/>
                                              Overall, the project is <b>reasonable profitable,</b> though <a target='blank' href='https://maze.co/guides/usability-testing/methods/#:~:text=Quantitative%20or%20qualitative%3A%20quantitative%20testing,why%20they%20performed%20certain%20actions.'>quantative</a> user testing will be needed in order to optimise the application and logistics to a <b>larger scale.</b> <a target='blank' href='https://maze.co/guides/usability-testing/methods/#:~:text=Quantitative%20or%20qualitative%3A%20quantitative%20testing,why%20they%20performed%20certain%20actions.'>(Maze, 2021).</a></p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Design</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text">aM's brand identity is <b>minimal</b> but playful tones are expressed through the <b>handwritten typography</b> within <b>logotype</b> and <b>flavours.</b> Furthermore, this communicates the <b>'home made'</b> feel of the brand, something common among <b>health and lifestyle</b> companies.
                                              <br/>
                                              <br/>
                                              <div className='image-row'>
                                              <img className='wp-small-photo' src={wp2}></img>
                                              <img className='wp-small-photo' src={wp3}></img></div>
                                                  <br/>
                                                  <br/>
                                              <b>Photography</b> captured conveys the brand's <b>sustainability</b> through different plant compositions. This is also necessary for creating <b>negative space</b> inbetween <b>product photos</b> and other <b>primary assets</b> to give <b>contrast.</b>.
                                              <br/>
                                              <br/>
                                              aM's <b>'UI' (User Interface)</b> is insipred by the <b>preliminary</b> stages of <b>software</b> and the <b>internet</b> where the only visual indications consisted of <b>white on black/blue backgrounds</b> in <a target='blank' href='https://en.wikipedia.org/wiki/Command-line_interface'>'Comand-Line interfaces'</a> <a target='blank' href='https://en.wikipedia.org/wiki/Command-line_interface'>(Wikipedia contributors, 2022</a>. 
                                              The <b>rational</b> behind this design choice comes from the emergant <a target='blank' href='https://web3.foundation/'>'Web3'</a> technology's <b>similarity</b> to this previous <b>social and cultural movement.</b>
                                              <br/>
                                              <br/>
                                              In the <b>'store'</b> section of this application, <b>primative colors</b> are used to convey flavours. These were chosen to suit the <b>design language</b> of the <b>NFT cryptocurrency art space</b> in collections such as <a target='blank' href='https://www.larvalabs.com/cryptopunks'>'CryptoPunks'</a> <a target='blank' href='https://www.larvalabs.com/cryptopunks'>(CryptoPunks, 2022).</a>
                                              <br/>
                                              <br/>
                                              <br/>

                                              <img className='wp-small-photo' src={purple}/>
                                              <img className='wp-small-photo' src={red}/>
                                              <img className='wp-small-photo' src={orange}/>
                                              <img className='wp-small-photo' src={lime}/></p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Smart Contract</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text">In order to fufill <b>bookkeeping</b> of whether bottles have been returned, a <b>Smart Contract</b> is implemented to store all of this data. Each Kombucha bottle has it's own <a target='blank' href='https://ethereum.org/en/developers/docs/standards/tokens/erc-20/'>ERC-20 Token,</a> the <b>Ethereum</b> standard used to create <b>currencies</b> <a target='blank' href='https://ethereum.org/en/developers/docs/standards/tokens/erc-20/'>(Ethereum, 2022a).</a> 
                                              <br/>
                                              <br/>
                                              The code created was built on top of an existing <b>ERC-20 contract</b> using an <b>open-source github repository</b> from <a target='blank' href='https://openzeppelin.com/'>'OpenZeppelin'</a> <a target='blank' href='https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol'> (2022).</a> From there, I wrote some code that mints the initial supply to an inputable address. Because the contract is a <b>work in progress,</b> there is still a lot left to be desired however this served an adequate <b>proof of concept.</b>
                                              <br/>
                                              <br/>
                                              This paticular <b>token</b> was chosen because every token must equate to the same value. In the Ethereum smart contract language <b>'Solidity',</b> code is <b>deterministic</b> preventing true <b>random integers</b> from being created. Because of this, a dataset of randomised numbers will be <b>externally</b> accessed when <b>issuing tokens</b> <a target='blank' href='https://ethresear.ch/t/deterministic-abis/6064'> (2019).</a> 
                                              <br/>
                                              <br/> 
                                              <br/>
                                              <br/>
                                              <img className='fig' src={DataSchematic}/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              Once the <b>launch</b>  phase commends, an <b>NFT store</b> will be created where <b>aM Tokens</b> can be <b>exchanged</b> to buy <b>digital assets</b> adhearing to the <a target='blank' href='https://ethereum.org/en/developers/docs/standards/tokens/erc-721/#:~:text=A%20Non%2DFungible%20Token%20(NFT,concerts%20and%20sports%20matches%2C%20etc.'>ERC-721 standard</a> <a target='blank' href='https://ethereum.org/en/developers/docs/standards/tokens/erc-721/#:~:text=A%20Non%2DFungible%20Token%20(NFT,concerts%20and%20sports%20matches%2C%20etc.'>(Ethereum, 2022a).</a>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <img className='fig' src={smartContractSchematic}/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              
                                              <br/>
                                              <br/>
                                              <br/>
                                              </p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Sunstainability</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text">aM's <b>decentralized server-side code</b> is sustainable because it dose not rely on a centralised database, something which is dependant on <b>large power-heavy data centers.</b> Additionally, the forecoming <b>'Proof of Stake' </b><a>'Merge'</a> of Ethereum will reduce enviromental impacts by <b>99%</b> <a target='blank' href='https://ethereum.org/en/eth2/'>(Ethereum, 2022d).</a> 
                                              <br/>
                                              <br/>
                                              This is when be when the app will be deployed to the Ethereum Mainnet, opposed to the local test enviroment. This is because Ethereum <b>Gas fees</b> are <b>too high</b> to outweight the <b>financial incentives</b> of returning bottles <a target='blank' href='https://www.morningbrew.com/daily/stories/ethereum-gas-fees'> (Ethereum Gas Fees, 2022).</a>
                                              <br/>
                                              <br/>
                                              aM aims to only produce <b>1000 bottles</b> that will <b>circulate </b>between returns and purchases. This could potentially mean that new bottles will be <b>unavailable</b> while waiting for returns however aM's main priority is <b>sunstainabilty before profits.</b>
                                              <br/>
                                              <br/>
                                              Furthermore, a percentage of profits will be given to an <b>enviromental charity</b> selected by the <b>consensus</b> of <b>aM Token holders</b> during the <b>launch</b> phase.</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Hyperfinancialization</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className="paragraph-text"><b>aM</b> aims to disrupt the <b>monopolisation</b> of large fizzy drink companies through <b>empowering customers</b> who value <b>sustainability</b> with a <b>stake</b> in the company shares. It is unlikely that these big coorporations have sustainability and consumer health in their <b>best intrest. </b> For example, <b>fizzy drinks</b> are a <b>'significant contributor to many health conditions, including obesity, type 2 diabetes, and tooth decay'</b> <a target='blank' href='https://www.medicalnewstoday.com/articles/297600'>(Felman, 2019).</a>
                                              <br/>
                                              <br/>
                                              Over the past year, <b>inflation</b> has risen <b>7%</b> <a target='blank' href='https://www.cnbc.com/2022/01/12/cpi-december-2021-.html'>(Cox, 2022).</a> This is mostly attributed to the <b>global pandemic</b> however it could be speculated that <b>private banks</b> and <b>institutions</b> also played a part. 
                                              <br/>
                                              <br/>
                                              This makes the possibilty of <b>Cryptocurrencies</b> as a <b>dominant form</b> of finance seem evermore likely for the future. In consideration of this, creating <b>utility specified tokens</b> allows a way for more <b>transparent finance</b> and <b>self-soverienty</b> as shown in the potential benefits of the <b>'aM Token'.</b>
                                              </p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                              <p1 className="paragraph-small-header">Conclusion</p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <p1 className='paragraph-text'>In summary, <b>decentralized applications</b> hold <b>limitless oportuninties</b> for <b>finance</b> and <b>governence.</b> From exploration of the <b>'aM Token,'</b> significant <b>enviromental impacts</b> could be made to the distrobution of health drinks. This comes from <b>incentivising users</b> with <b>governence</b> and <b>financial benefits</b> for valuing <b>sustainability.</b> </p1>
                                              <br/>
                                              <br/>
                                              <p1 className='paragraph-text'>While <b>further research</b> is required on the <b>server-side code,</b> a potentially successfull <b>business model</b> eminantly awaits on the surface to be developed. Because of this, I am going to continue working on this project to be <b>pitched to investors.</b>
                                              <br/>
                                              <br/>
                                              <b>Thankyou for reading,</b> please feel free to contact me via <b>twitter</b> with any <b>suggestions/queries.</b>
                                              <br/>
                                              <br/>
                                              <a href='https://twitter.com/charleslgdesign' target='blank'>@charleslgdesign</a>
                                              </p1>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/>
                                              <br/> 
                                             <p1 className='paragraph-small-header'>References</p1>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                             <p1 className='references'>
                                            <br/>
                                            <br/>
                                              
                                              <b>Cox, J. (2022, January 13).</b> Inflation rises 7% over the past year, highest since 1982. CNBC. https://www.cnbc.com/2022/01/12/cpi-december-2021-.html
                                              <br/>
                                              <br/>
                                              <b>CryptoPunks. (2022).</b>  Larva Labs. https://www.larvalabs.com/cryptopunks
                                              <br/>
                                              <br/>
                                              <b>Daly, L.</b> (2021, November 10). What Is Cryptocurrency Coin Burning? The Motley Fool. https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/#:%7E:text=What%20is%20coin%20burning%3F,burn%20address%2C%20its%20gone%20forever
                                              <br/>
                                              <br/>
                                              <b>Disruptive Innovation Definition. (2021, August 24).</b> Investopedia. https://www.investopedia.com/terms/d/disruptive-innovation.asp#:%7E:text=for%20Disruptive%20Innovation%3F-,What%20Is%20Disruptive%20Innovation%3F,accessible%20to%20a%20broader%20population.
                                              <br/>
                                              <br/>
                                              <b>Ethereum. (2022).</b>Home. Ethereum.Org. https://ethereum.org/en/
                                              <br/>
                                              <br/>
                                              <b>Ethereum. (2022a).</b> ERC-20 Token Standard. Ethereum.Org. https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
                                              <br/>
                                              <br/>
                                              <b>Ethereum. (2022a). </b>ERC-721 Non-Fungible Token Standard. Ethereum.Org. https://ethereum.org/en/developers/docs/standards/tokens/erc-721/#:%7E:text=A%20Non%2DFungible%20Token%20(NFT,concerts%20and%20sports%20matches%2C%20etc.
                                              <br/>
                                              <br/>
                                              <b>Ethereum. (2022b).</b> The Eth2 upgrades. Ethereum.Org. https://ethereum.org/en/eth2/
                                              <br/>
                                              <br/>
                                              <b>Ethereum gas fees. </b>(2022). Morningbrew. https://www.morningbrew.com/daily/stories/ethereum-gas-fees
                                              <br/>
                                              <br/>
                                              <b>Extrinsic Value Definition. (2021, September 30).</b> Investopedia. https://www.investopedia.com/terms/e/extrinsicvalue.asp#:%7E:text=Extrinsic%20value%20is%20the%20difference,in%20volatility%20in%20the%20market.
                                              <br/>
                                              <br/>
                                              <b>Felman, A. (2019, November 6).</b> Is Coca-Cola bad for you? Medicalnewstoday. https://www.medicalnewstoday.com/articles/297600
                                              <br/>
                                              <br/>
                                              <b>Initial Coin Offering (ICO). (2022, January 4).</b>Investopedia. https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp
                                              <br/>
                                              <br/>
                                              <b>Jonathan @ BottleStore. (n.d.).</b> Kombucha Popularity Makes Beverage Market Growth Soar – BottleStore.com Blog. Blog.Bottlestore.Com. https://blog.bottlestore.com/kombucha-popularity-makes-beverage-market-growth-soar/
                                              <br/>
                                              <br/>
                                              <b>Keogh, B. (2020, September 21). </b>Growing support for “cigarette-style” warnings on fizzy drinks. NZ Herald. https://www.nzherald.co.nz/lifestyle/growing-support-for-cigarette-style-warnings-on-fizzy-drinks/PKDWD6AUGE4XR2STCHTY2UUQ4Q/#:%7E:text=A%20proposal%20to%20put%20%22cigarette,put%20on%20fizzy%20drink%20packaging.
                                              <br/>
                                              <br/>
                                              <b>Kombucha consumption at an all-time high | Scoop News. (2019). </b>Scoop Buisness. https://www.scoop.co.nz/stories/BU1910/S00555/kombucha-consumption-at-an-all-time-high.htm
                                              <br/>
                                              <br/>
                                              <b>Maze. (2021, September 30). </b>8 Top Usability Testing Methods Explained. https://maze.co/guides/usability-testing/methods/#:%7E:text=Quantitative%20or%20qualitative%3A%20quantitative%20testing,why%20they%20performed%20certain%20actions.
                                              <br/>
                                              <br/>
                                              <b>O. (2022).</b> openzeppelin-contracts/ERC20.sol at master · OpenZeppelin/openzeppelin-contracts. GitHub. https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
                                              <br/>
                                              <br/>
                                              <b>Ōhanga āmiomio - Circular economy. (2021, September 20). </b>Ministry for the Environment. https://environment.govt.nz/what-government-is-doing/areas-of-work/waste/ohanga-amiomio-circular-economy/
                                              <br/>
                                              <br/>
                                              <b>T. (2019, August 31).</b> Deterministic ABIs. Ethereum Research. https://ethresear.ch/t/deterministic-abis/6064
                                              <br/>
                                              <br/>
                                              <b>Self-sovereign identity: future of personal data ownership? (2021, August 12).</b> World Economic Forum. https://www.weforum.org/agenda/2021/08/self-sovereign-identity-future-personal-data-ownership/#:%7E:text=In%20self%2Dsovereign%20identity%2C%20the,user%20of%20the%20identity%20information.
                                              <br/>
                                              <br/>
                                              <b>S., A. (2021, October 27). </b>MetaMask Wallet Review. BitDegree.Org Crypto Exchanges. https://www.bitdegree.org/crypto/metamask-wallet-review
                                              <br/>
                                              <br/>
                                              <b>The Global Environmental Recycling Crisis: What Options Exist for Plastic Waste? (2019).</b> Climate Institute. https://climate.org/the-global-environmental-recycling-crisis-what-options-exist-for-plastic-waste/#:%7E:text=Introduction,banning%20almost%20all%20waste%20imports.
                                              <br/>
                                              <br/>
                                              <b> Wikipedia contributors. (2022, January 4).</b> Command-line interface. Wikipedia. https://en.wikipedia.org/wiki/Command-line_interface
                                              <br/>
                                              <br/>
                                              </p1>


            </div>
        </div>


    )
}

export default WhitePaper
