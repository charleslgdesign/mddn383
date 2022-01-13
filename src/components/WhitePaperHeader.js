import { React, useState } from 'react'
import WhitePaper from './WhitePaper.js'

function WhitePaperHeader() {
    const [show,setShow] = useState(false)
    return (

        <div className='appear'>
        <div className='white-paper-container'>
        <button onClick={()=>setShow(!show)} className='white-paper'><h1 className='white-paper-text'>white paper</h1></button>
        </div>

{

        show?<div>
            <WhitePaper/>
        </div>:null

}

        </div>
    )
}

export default WhitePaperHeader
