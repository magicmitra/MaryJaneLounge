import { Button } from '@mui/material'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import flattenCheck from '../utils/flattenCheck'

const Check = () => {

    const items = useSelector((state: RootState) => state.check.items)

    const handleCloseCheckAndPay = () => {
        // TODO
        alert('GIMME YOUR MONEY!')
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
    background: "#2B393B",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    marginRight: '30px',
    marginLeft: '50px'
}

export default Check