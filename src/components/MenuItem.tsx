import ProductModel from '../models/product'
import Quantity from './Quantity'

const MenuItem = (props: ProductModel) => {

    return (
        <div style={{
            position: 'relative'
        }}> 
            <img src={props.img}
                 style={{
                    height: 100,
                    width: 200,
                    alignSelf: 'left',
                    marginTop: '10px',
                    marginBottom: '5px',
                    marginLeft: '5px',
                    marginRight: '30px',
                 }}
            />
            <div style={{
                position: 'absolute',
                right: '100px',
                top: '12px'
            }}>
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
        </div>
    )
}

export default MenuItem

