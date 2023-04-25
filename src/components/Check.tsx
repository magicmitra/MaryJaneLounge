import { Button, Typography } from '@mui/material'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import flattenCheck from '../utils/flattenCheck'

const Check = () => {

    const items = useSelector((state: RootState) => state.check.items)

    const handleCloseCheckAndPay = () => {
        // TODO
        alert('LETS HOOK UP YOUR POS/PAYMENT PROCESSOR!')
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
                            <Typography>
                                { item.name }
                                {` $${(item.price)}`} 
                            </Typography>   
                        </div>
                    )
                })
            }
            <div className='Subtotal'>
                <Typography>
                    Subtotal $ {subtotal.toFixed(2)}
                </Typography>
            </div>
            <div className="Tip">
                <Typography>
                    Tip - COMING SOON
                </Typography>
            </div>
            <div className='Tax'>
                <Typography>
                    Tax - COMING SOON
                </Typography>
            </div>
            <div className='Total-check'>
                <Typography>
                    Total $ {(subtotal + tax + tip).toFixed(2)}
                </Typography>
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
    color: "#A5BE7D",
    marginRight: '30px',
    marginLeft: '50px'
}

export default Check