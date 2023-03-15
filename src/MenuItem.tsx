import { Button } from '@mui/material'
import React, { useState, Fragment } from 'react'


type MenuItemProps = {
    id: string,
    name: string,
    price: string,
    img: string
}

const MenuItem = (props: MenuItemProps) => {
    const [getAmount, setAmount] = useState(0)
    return (
        <div> 
            <img src={props.img}
                 style={imageStyle}
            />
            
            <Button style={buttonStyle}>
                ORDER
            </Button>
            {props.price}
        </div>
    )
}

const buttonStyle = {
    backgroundColor: "#683973",
    color: "#B899BF",
    textFont: 'IBM Plex Mono',
    marginRight: '30px'
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