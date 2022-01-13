import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import GalleryHeader from './GalleryHeader.js'
import comp1 from 'https://charleslgdesign.github.io/mddn383/src/components/img/table-composition-1.png'
import comp2 from 'https://charleslgdesign.github.io/mddn383/src/components/img/flower-composition-1.png'
import comp3 from 'https://charleslgdesign.github.io/mddn383/src/components/img/flower-composition-2.png'
import comp4 from 'https://charleslgdesign.github.io/mddn383/src/components/img/table-composition-2.png'
import comp5 from 'https://charleslgdesign.github.io/mddn383/src/components/img/table-composition-3.png'
import comp6 from 'https://charleslgdesign.github.io/mddn383/src/components/img/table-composition-4.png'
import comp7 from 'https://charleslgdesign.github.io/mddn383/src/components/img/table-composition-5.png'
import comp8 from './img/table-composition-6.png'
import logo from './img/logo.svg'
import fieldComp1 from './img/field-composition-1.png'
import { Transition } from 'react-transition-group'
import flowerComp1 from './img/flower-composition-1.png'
import flowerComp2 from './img/flower-composition-2.png'
import outdoorTableComp1 from './img/outdoor-table-composition-1.png'
import commonsMarketComp1 from './img/commons-market-1.png'
import foliage1 from './img/foliage-1.png'
import foliage2 from './img/foliage-2.png'
import foliage3 from './img/foliage-3.png'
import foliage4 from './img/foliage-4.png'
import foliage5 from './img/foliage-5.png'
import foliage6 from './img/foliage-6.png'
import strawberry1 from './img/strawberry.png'

const Gallery = () => {



    return (
       
        
        <div className='appear'>

    {

        <><div className='gallery-container'>
           
                        <img className='gallery-image' src={foliage5} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={foliage2} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={comp6} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={fieldComp1} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={foliage3} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={foliage4} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={commonsMarketComp1} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={strawberry1} alt="kombucha sitting on wooden table next to newspaper" />
                        <img className='gallery-image' src={foliage6} alt="foliage"/>
                        <img className='gallery-image' src={comp8} alt="kombucha on a table"/>
                        

            </div>
        </>

    }

</div>


        
        
    
    )

}


export default Gallery
