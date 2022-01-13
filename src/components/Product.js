import React, {useState}  from 'react'
import { Component } from 'react'
import ReturnBottle from './ReturnBottle'
import ReactDOM from 'react-dom'

const Product = ({ products, completeReturn, removeProduct, updateProduct}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


const submitUpdate = value => {
    updateProduct(edit.id, value)
    setEdit({
        id: null,
        value: ''
    })
}   


if (edit.id) {
    return <ReturnBottle edit={edit} onSubmit={submitUpdate} />
}

    return products.map((product, index) => (

        <div className='appear'>

    <div 
        className={product. isReturned ? 'bottle-returned':'product-row'} 
        key={index}
    >
<div className="submited-block">
    <div className="product-number" key={product.id} onClick={() => completeReturn(product.id)}>
                    {product.text}
            </div>
            
            <div className="lil-border-75">
                
                <button className='remove-button' onClick={() => removeProduct(product.id)}
                ><h1 className="small2">remove</h1></button>
                
                <button onClick={() => setEdit({ id: product.id, value: product.text})}
                className='edit-button'/>  
            </div>
        </div>
    </div>
</div>
        ))

    
}

    
export default Product

    
