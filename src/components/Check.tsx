import { Button } from '@mui/material'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import CartItemModel from '../models/cartItem'
import ProductModel from '../models/product'

const Check = () => {

    const items = useSelector((state: RootState) => state.check.items)

    const handleCloseCheckAndPay = () => {
        // TODO
        alert('GIMME YOUR MONEY!')
    }

    // TODO Isolate this bitch
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
    const subtotal: number = checkItems.reduce((acc, curr) => acc + curr.price, 0)
    const tax = 0   // TODO
    const tip = 0   // TODO

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
                Subtotal $ {subtotal.toFixed(2)}
            </div>
            <div className="Tip">
                Tip - COMING SOON
            </div>
            <div className='Tax'>
                Tax - COMING SOON
            </div>
            <div className='Total'>
                Total $ {(subtotal + tax + tip).toFixed(2)}
            </div>
            <Button style={buttonStyle}
                    onClick={handleCloseCheckAndPay}>
                PAY
            </Button>
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