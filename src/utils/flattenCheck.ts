import CartItemModel from '../models/cartItem'
import ProductModel from '../models/product'

const flattenCheck = (cartItems: CartItemModel[]) => {
    const checkItems: ProductModel[] = []
    cartItems.map(item => {
        let quantity = item.quantity
        while(quantity > 0) {
            checkItems.push(item)
            quantity--
        }
    })
    return checkItems
}


export default flattenCheck