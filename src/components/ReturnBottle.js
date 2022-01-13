import React, {useState, useEffect, useRef} from 'react'


function ReturnBottle(props) {
const [input,setInput] = useState('')

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value)
    const { value, maxLength } = e.target
}

const handleSubmit = e => {
    e.preventDefault()
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
    setInput('')
}


    return (

       

     <form className="return-form" onSubmit={handleSubmit}>
         {props.edit ? (
            <>
             <div className='lil-border'>
                <input 
                    placeholder='Update Number'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='product-input-edit'
                />
                <button onClick={handleSubmit} className ='product-button-edit'>
                    Update
                    </button>
                    </div>
                </>
             ) : (
                <>
         <input 
         type="number" placeholder="eg. 123456789" value={input}
         name="text" className="transfer-input" ref={inputRef} onChange={handleChange}
         />


         
     <button onClick={handleSubmit} className="return-button"><h1 className='small2'>deposit</h1></button> 
     </>
             )}
     </form> 

    
   
     
    
    )
}

export default ReturnBottle

