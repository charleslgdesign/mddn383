import { React, useState } from 'react'
import Store from './Store.js'


function Drinks() {

    const [show,setShow] = useState(false)
    return (
        <div className='appear'>
            <div className='white-paper-container'>
            <button onClick={()=>setShow(!show)} className='white-paper'><h1 className='white-paper-text'>store</h1></button>
            </div>

            {
            show?<div>
                    <Store/>
            </div>:null
            }
        </div>
    )
}

export default Drinks
