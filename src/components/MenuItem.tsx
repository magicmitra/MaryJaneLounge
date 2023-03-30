import ProductModel from '../models/product'
import Quantity from './Quantity'

const MenuItem = (props: ProductModel) => {

    return (
        <div> 
            <img src={props.img}
                 style={imageStyle}
            />
            {props.name}
            <Quantity 
                id={props.id}
                name={props.name}
                price={props.price}
                img={props.img}
                type={props.type}
                />
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

