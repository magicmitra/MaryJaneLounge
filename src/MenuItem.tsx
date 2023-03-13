type MenuItemProps = {
    id: string,
    name: string,
    price: string,
    img: string
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <div> 
            {props.id}
            {props.name}
            {props.price}
            {props.img}
        </div>
    )
}

export default MenuItem