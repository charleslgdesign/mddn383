import { React, useState } from 'react'
// import {lemonHoneyGinger} from './img/lemon-honey-ginger.png'
// import {passionfruitKawakawaRasberry} from './img/passionfruit-kawakawa-rasberry.png'
// import {blueberryFejioaKiwifruit} from './img/blueberry-fejioa-kiwifruit.png'
import { ReactComponent as Purple} from './img/purple.svg'
import { ReactComponent as Red} from './img/red.svg'
import { ReactComponent as Orange} from './img/orange.svg'
// import { ReactComponent as Yellow} from './img/yellow.svg'
import { ReactComponent as Lime} from './img/lime.svg'

function Store() {

//flavours
const [showP,setShowP] = useState(false)
const [showR,setShowR] = useState(false)
const [showO,setShowO] = useState(false)
const [showY,setShowY] = useState(false)
const [showL,setShowL] = useState(false)

//descriptions
const [showPdesc, setShowPdesc] = useState(false)
const [showRdesc, setShowRdesc] = useState(false)
const [showOdesc, setShowOdesc] = useState(false)
const [showLdesc, setShowLdesc] = useState(false)



    return (
        <div className='appear'>
            <div className='gallery-container-bA'>
                <div onClick={()=>setShowP(!showP)} className='color-purple'/>
                <div onClick={()=>setShowR(!showR)} className='color-red'/>
                <div onClick={()=>setShowO(!showO)} className='color-orange'/>
                {/* <div onClick={()=>setShowY(!showY)} className='color-yellow'/> */}
                <div onClick={()=>setShowL(!showL)} className='color-lime'/>
                </div>
                
        <div className='flavours'>
            {showP?<div className='appear'>
                <Purple onClick={()=>setShowPdesc(!showPdesc)} className='purple'/>{showPdesc?<div className='appear'><div className='flavour-paragraph'><p1 className='paragraph-text-white'>Blend of acidic carbonation and bitter piquancies, providing a sweet taste and aroma. </p1></div></div>:null}</div>:null}
            {showR?<div className='appear'>
                <Red className='red' onClick={()=>setShowRdesc(!showRdesc)}/>{showRdesc?<div className='appear'><div className='flavour-paragraph'><p1 className='paragraph-text-white'>An astringent mixture of tart fruits and home-picked kawakawa leaves. Most pungent of the flavours.</p1></div></div>:null}</div>:null}
            {showO?<div className='appear'>
                <Orange className='orange' onClick={()=>setShowOdesc(!showOdesc)}/>{showOdesc?<div className='appear'><div className='flavour-paragraph'><p1 className='paragraph-text-white'>The most sweet flavour</p1></div></div>:null}</div>:null}
             {/* {showY?<div className='appear'><Yellow className='yellow'/></div>:null}  */}
            {showL?<div className='appear'>
                <Lime className='lime' onClick={()=>setShowLdesc(!showLdesc)}/>{showLdesc?<div className='appear'><div className='flavour-paragraph'><p1 className='paragraph-text-white'></p1></div></div>:null}</div>:null}
            </div>
        </div>
        

    )
}

export default Store
