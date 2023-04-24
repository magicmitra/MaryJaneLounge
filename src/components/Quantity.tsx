import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/cartSlice'
import { RootState } from '../store/store'
import ProductModel from '../models/product'

const Quantity = (props: ProductModel) => {
    
    // Must be able to pull state from the store
    // Needs props from parent component that allows 
    // it to modify and retrieve the store state. 

    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()

    const handleAddClick = () => {
        dispatch(addToCart({
           id: props.id,
           name: props.name,
           price: props.price,
           img: props.img 
        }))
    }
    const handleSubtractClick = () => {
        dispatch(removeFromCart({
            id: props.id,
            name: props.name,
            price: props.price,
            img: props.img 
        }))
    }

    return (
        <div>
            <Button style={buttonPlusMinusStyleMinus}
                    onClick={handleSubtractClick}>
                -
            </Button>
            
                {(items.findIndex(item => item.id === props.id) === -1) ?
                    0
                    : items[items.findIndex(item => item.id === props.id)].quantity
                }
            
            <Button style={buttonPlusMinusStylePlus}
                    onClick={handleAddClick}>
                +
            </Button>
        </div>
    )
}

const buttonPlusMinusStyleMinus = {
    background: "#4E764E",
    color: "#A5BE7D",
    textFont: 'IBM Plex Mono',
    borderRadius: '5%',
    maxHeight: '18px',
    maxWidth: '9x',
    fontSize: '27px',
    marginRight: '4px'
}

const buttonPlusMinusStylePlus = {
    background: "#4E764E",
    color: "#A5BE7D",
    textFont: 'IBM Plex Mono',
    borderRadius: '5%',
    maxHeight: '18px',
    maxWidth: '9x',
    fontSize: '27px',
    marginLeft: '4px'
}

export default Quantity