import { Button } from '@mui/material'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import Quantity from './Quantity'

const Cart = () => {

    /**
     * What state(s) does the cart need? One possible scenario is knowing if this is 
     * the first time a user has ordered on a session so that the app can ask for 
     * payment details to guarantee them mothafuckas dont dine and dash. This will 
     * be used on the ORDER button.  
     * State changes:
     * -> removing an item from cart
     * -> calculating total
     */
    const items = useSelector((state: RootState) => state.cart.items)

    // x button <img> <name> <price>
    return (
        <div className="Cart">
            {
                items.map(item => {
                    return (
                        <div>
                            <img src={item.img}   
                                 style={imageStyle} 
                            />
                            {item.name }
                            <Quantity 
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                                type={item.type}
                />
                            {` $${item.price}`}
                        </div>
                    )
                })
            }
            <div className="Total">
                { `Total $${(items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)).toFixed(2)}` }
            </div>
            <Button style={buttonStyle}
                    onClick={() => {
                        items.length > 0 ?
                            alert('Your order is in the works. Thank you')
                            : alert('Select Items to Order')
                    }}>
                ORDER
            </Button>
        </div>
    )
}

const imageStyle = {
    height: 40,
    width: 80,
    marginRight: '5px'
}

const buttonStyle = {
    backgroundColor: "#E9C2F2",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    marginRight: '30px',
    marginLeft: '50px'
}

export default Cart
