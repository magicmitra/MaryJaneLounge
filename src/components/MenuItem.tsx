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
                left: '215px',
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
                {`$ ${(props.price).toFixed(2)}`}
            </div>
        </div>
    )
}

export default MenuItem

