import { React, useState } from 'react'
import Gallery from './Gallery.js'

function GalleryHeader() {

    const [show,setShow] = useState(false)

    return (

        <div className='appear'>
<button className="white-paper" onClick={()=>setShow(!show)}><h1 className='white-paper-text'>gallery</h1></button>

      {

        show?<div>

    
            <Gallery/>

  
        </div>:null

    }
        </div>
    )
}

export default GalleryHeader
