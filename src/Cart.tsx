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
     */
    const [firstOrder, setFirstOrder] = useState(true)
    const items = useSelector((state: RootState) => state.cart.items)

    // x button <img> <name> <price>
    return (
        <div className="Cart">
            {
                items.map(item => {
                    return (
                        <div>
                            <Button>
                                x
                            </Button>
                            <img src={item.img}   
                                 onClick={() => {}} 
                            />
                            {item.name}
                            {`$${item.price}`}
                        </div>
                    )
                })
            }
            <div className="Subtotal">
                {/** */}
            </div>  
            <div className="Taxes">
                {/** */}
            </div>
            <div className="Total">
                {/** */}
            </div>
            <Button>
                ORDER
            </Button>
        </div>
    )
}


export default Cart
