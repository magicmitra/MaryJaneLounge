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
            {`$ ${props.price}`}
        </div>
    )
}

const imageStyle = {
    height: 100,
    width: 200,
    alignSelf: 'left',
    marginTop: '10px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '30px'
}

export default MenuItem

