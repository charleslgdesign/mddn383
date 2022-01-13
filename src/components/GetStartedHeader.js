import { React, useState } from 'react'
import GetStarted from './GetStarted.js'

function GetStartedHeader() {
    const [show,setShow] = useState(false)
    return (
        <div className='appear'>
        <div className='white-paper-container'>
        <button onClick={()=>setShow(!show)} className='white-paper'><h1 className='white-paper-text'>setup</h1></button>
        </div>
        {

show?<div>
    <GetStarted/>
</div>:null

}

</div>
)
}

export default GetStartedHeader
