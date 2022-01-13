import { React, useState } from 'react'
import ReturnBottle from './ReturnBottle.js'
import Products from './Products.js'
import Product from './Product.js'

function Returns() {
    const [show,setShow] = useState(false)
    return (
        <div className='appear'>
             <div className='white-paper-container'>
            <button className="white-paper" onClick={()=>setShow(!show)}><h1 className='white-paper-text'>deposit</h1></button>
        
            </div>
        { 
        
        show?<div>
                {/* <Product/> */}
                <Products/>
                {/* <ReturnBottle/> */}
        </div>:null

        
        }
        
</div>
            
    )
}

export default Returns
