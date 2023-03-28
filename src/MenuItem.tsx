import { Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './store/cartSlice'
import { RootState } from './store/store'

type MenuItemProps = {
    id: string,
    name: string,
    price: number,
    img: string
}

const MenuItem = (props: MenuItemProps) => {
    const [amount, setAmount] = useState(0)
    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    
    // one click from the ORDER button and auto set state to 1
    // same with the plus button. Call it 'add'
    const handleAddClick = () => {
        setAmount(amount + 1)
        dispatch(add({
           id: props.id,
           name: props.name,
           price: props.price,
           img: props.img 
        }))
    }
    const handleSubtractClick = () => {
        setAmount(amount - 1)
        dispatch(remove({
            id: props.id,
            name: props.name,
            price: props.price,
            img: props.img 
        }))
    }

    // conditional render based of state
    // if amount is 0, then show order button
    // if amount > 0, show - and + buttons along with amount
    return (
        <div> 
            <img src={props.img}
                 style={imageStyle}
            />
            {props.name}
            {
                amount < 1 ? (
                    <Button style={buttonStyle}
                            onClick={handleAddClick}>
                        ORDER
                    </Button>
                ) : (
                    <div>
                        <Button style={buttonPlusMinusStyle}
                                onClick={handleSubtractClick}>
                        -
                        </Button>
                        {amount}
                        <Button style={buttonPlusMinusStyle}
                                onClick={handleAddClick}>
                        +
                        </Button>
                    </div>
                    
            )}
            {`$${props.price}`}
        </div>
    )
}

const buttonStyle = {
    backgroundColor: "#683973",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    marginRight: '30px',
    marginLeft: '50px'
}

const buttonPlusMinusStyle = {
    backgroundColor: "#683973",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    borderRadius: 50,
    height: '20px',
    width: '10px'
}


const imageStyle = {
    height: 200,
    width: 400,
    alignSelf: 'left',
    marginTop: '10px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '30px'
}

export default MenuItem

