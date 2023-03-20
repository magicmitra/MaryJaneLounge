import { Button } from '@mui/material'
import React, { useState, Fragment } from 'react'


type MenuItemProps = {
    id: string,
    name: string,
    price: number,
    img: string
}

const MenuItem = (props: MenuItemProps) => {
    const [amount, setAmount] = useState(0)

    // one click from the ORDER button and auto set state to 1
    // same with the plus button. Call it 'add'
    const handleAddClick = () => setAmount(amount + 1)
    const handleSubtractClick = () => setAmount(amount - 1)

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

// Color Scheme (monochromatic)
// #6F5C73 - greyish
// #DE7AF4 - pink light
// #E9C2F2 - browninsh pink
// #683973 - maroon
// #B899BF - light grey 