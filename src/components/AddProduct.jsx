import {useState} from 'react'
import Button from './Button'
import AddInputs from './AddInputs'
import Alert from './Alert'
const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !price || !category){
            setErrorMsg(<Alert msg={'Please Fill All Fields'} />)
            return
        }

        onAdd({name, price, category});

        setName('')
        setPrice('')
        setCategory('')
        setErrorMsg('')
    }

    return (
        <form style={{display:'flex'}}>
           <div>
               <AddInputs val={name} onCh={(e)=> setName(e.target.value)} ph={'Name'} ty={'text'}/>
              <span>
                   {errorMsg}
              </span>
           </div>
           <div>
           <AddInputs val={price} onCh={(e)=> setPrice(e.target.value)} ph={'Price'} ty={'number'}/>
             </div>
           <div>
           <AddInputs val={category} onCh={(e)=> setCategory(e.target.value)} ph={'Category'} ty={'text'}/>
             </div> 
           <Button onC={onSubmit} btnNm={'Add'}></Button>
        </form>
    )
}

export default AddProduct
