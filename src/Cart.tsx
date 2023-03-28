import { Button } from '@mui/material'
import { useState } from 'react'
import { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './store/cartSlice'


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
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)
    const [firstOrder, setFirstOrder] = useState(true)

    const handleXClick = (id: string) => {
        dispatch(remove({
            id,
            name: '',
            price: null,
            img: ''
        }))
    }
    

    // x button <img> <name> <price>
    return (
        <div className="Cart">
            {
                items.map(item => {
                    return (
                        <div>
                            <Button onClick={() => handleXClick(item.id)}>
                                x
                            </Button>
                            <img src={item.img}   
                                 style={imageStyle} 
                            />
                            {item.name }
                            {` $${item.price}`}
                        </div>
                    )
                })
            }
            <div className="Total">
                { `Total $${items.reduce((acc, curr) => acc + curr.price, 0)}` }
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
