import { Button } from '@mui/material'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import CartItemModel from '../models/cartItem'
import ProductModel from '../models/product'

const Check = () => {

    const items = useSelector((state: RootState) => state.check.items)

    const handleCloseCheckAndPay = () => {
        // TODO
    }

    const flattenCheck = (cartItems: CartItemModel[]) => {
        const checkItems: ProductModel[] = []
        cartItems.map(item => {
            let quantity = item.quantity
            while(quantity > 0) {
                checkItems.push(item)
                quantity--
            }
        })
        return checkItems
    }

    const checkItems = flattenCheck(items)

    // Tip is calculated BEFORE taxes
    return (
        <div className="Check">
            {
                checkItems.map(item => {
                    return (
                        <div>
                            { item.name }
                            {` $${(item.price)}`}    
                        </div>
                    )
                    
                })
            }
            <div className='Subtotal'>
                Subtotal
            </div>
            <div className='Tax'>
                Tax
            </div>
            <div className='Total'>
                Total
            </div>
        </div>
    )
}

const buttonStyle = {
    backgroundColor: "#E9C2F2",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    marginRight: '30px',
    marginLeft: '50px'
}

export default Check