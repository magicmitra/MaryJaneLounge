import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Button, Typography } from '@mui/material'
import { addToCart } from '../store/cartSlice'
import ProductModel from '../models/product'
import Quantity from './Quantity'

const MenuItem = (props: ProductModel) => {
    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()

    const handleAddClick = () => {
        dispatch(addToCart({
           id: props.id,
           name: props.name,
           price: props.price,
           img: props.img 
        }))
    }

    return (
        <div className='MenuItem' 
             style={{
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
            
            <div className='ItemName' 
                 style={{
                position: 'absolute',
                left: '215px',
                top: '12px'
            }}>
                <Typography>
                    {props.name} 
                </Typography>        
            </div>
            <div className='ItemPrice'
                 style={{
                position: 'absolute',
                left: '215px',
                top: '40px'
            }}>
                <Typography>
                    {`$ ${(props.price).toFixed(2)}`}
                </Typography>
            </div>
            <div className='Quantity-button'
                 style={{
                position: 'absolute',
                left: '215px',
                bottom: '10px'
            }}>
                {(items.findIndex(item => item.id === props.id) === -1) ?
                    <Button style={buttonOrderStyle}
                            onClick={handleAddClick}>
                        ORDER
                    </Button>
                    : 
                    <Quantity 
                        id={props.id}
                        name={props.name}
                        price={props.price}
                        img={props.img}
                        type={props.type}
                />
                }
            </div>        
        </div>
    )
}

const buttonOrderStyle = {
    background: "#4E764E",
    color: "#A5BE7D",
    fontSize: '15px',
    paddingBottom: '1px',
    paddingTop: '1px'
}

export default MenuItem

