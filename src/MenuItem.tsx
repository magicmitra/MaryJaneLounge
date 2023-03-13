import React, { useState } from 'react'

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
                 height={350}
                 width={700}
                 style={{ alignSelf: 'left' }}
            />
        </div>
    )
}

export default MenuItem