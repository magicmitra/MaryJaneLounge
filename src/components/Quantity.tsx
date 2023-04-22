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
            <Button style={buttonPlusMinusStyle}
                    onClick={handleSubtractClick}>
                -
            </Button>
                {(items.findIndex(item => item.id === props.id) === -1) ?
                    0
                    : items[items.findIndex(item => item.id === props.id)].quantity
                }
            <Button style={buttonPlusMinusStyle}
                    onClick={handleAddClick}>
                +
            </Button>
        </div>
    )
}

const buttonPlusMinusStyle = {
    background: "#4E764E",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    borderRadius: 50,
    height: '20px',
    width: '10px'
}

export default Quantity