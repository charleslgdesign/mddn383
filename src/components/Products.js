import { React, useState } from 'react'
import ReturnBottle from './ReturnBottle'
import Product from './Product'
import product from './Product'
import {id} from './ReturnBottle.js'



function Products(id) {

    const [products,setProducts] = useState([])

    const addProduct = product => {
        if(!product || /^\s*$/.test(product.text)) {
            return

        }
         const newProduct = [product, ...products]

            setProducts(newProduct) 
    }


    const completeReturn =  id => {
            
        let updatedProducts = product.map(product => {
            if (product.id === id) {
                product.isComplete = !product.isComplete
            }
            return product
        })
        setProducts(updatedProducts)
    }

    const removeProduct = id => {
        const removedArr = [...products].filter(product => product.id !== id)

        setProducts(removedArr)
    }

    const updateProduct = (productId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return  
    }
    setProducts(prev => prev.map(item => (item.id === productId ? newValue : item)));
}

            return (

         <div className='appear'>
             <div className='wallet-container'>
                <div className="lil-border2">
                    <h1 className='wallet-token-name-noB-white2'>Enter your 9 Digit Bottle Number, and click 'deposit' to recieve your 'aM Token' </h1>
                    <br />  
                    <ReturnBottle onSubmit={addProduct}/>
                    <Product 
                    products={products} 
                    completeReturn={completeReturn}
                    updateProduct={updateProduct}
                    removeProduct={removeProduct}
                    />
                    </div>
                </div>
            </div>

        
                
                 )
    }



            
export default Products