import { Button, Typography } from '@mui/material'
import { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addToCheck } from '../store/checkSlice'
import { clearCart } from '../store/cartSlice'
import Quantity from './Quantity'

const Cart = () => {

    /**
     * What state(s) does the cart need? One possible scenario is knowing if this is 
     * the first time a user has ordered on a session so that the app can ask for 
     * payment details to guarantee them mothafuckas dont dine and dash. This will 
     * be used on the ORDER button.  
     */ 
    
    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()

    /* Pressing the ORDER button
     * -> All items retrieved from cart are placed into the check
     * -> Call clear() on cart
     */
    const handleCartOrderClick = () => {
        if(items.length > 0) {
            dispatch(addToCheck(items))
            dispatch(clearCart())
            // TODO: 
            // 1. pass this request to the server to be processed
            // and passed into the kitchen app. 
            // 2. Ask for payment details on first order to secure payment
            alert('Your order is in the works, Hang tight.')
        } else {
            alert('Select Items to Order')
        }
    }

    return (
        <div className="Cart">
            {
                items.map(item => {
                    return (
                        <div>
                            <img src={item.img}   
                                 style={imageStyle} 
                            />
                            <Typography>{item.name}</Typography>
                            <Quantity 
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                                type={item.type}
                />
                            <Typography>{` $ ${item.price}`}</Typography>
                        </div>
                    )
                })
            }
            <div className="Total-cart">
                <Typography>
                    { `Total $ ${(items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)).toFixed(2)}` }
                </Typography>
            </div>
            <Button style={buttonStyle}
                    onClick={handleCartOrderClick}>
                ORDER
            </Button>
        </div>
    )
}

const imageStyle = {
    height: 35,
    width: 70,
    marginRight: '5px'
}

const buttonStyle = {
    background: "#2B393B",
    color: "#A5BE7D",
    marginRight: '30px',
    marginLeft: '50px'
}

export default Cart
