import { createSlice } from '@reduxjs/toolkit'
import CartItemModel from '../models/cartItem'

const items: Array<CartItemModel> = new Array()
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: items
    },
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action
            const index = state.items.findIndex(item => item.id === payload.id)
            if(index !== -1) {
                // item already there just update the count
                state.items[index].quantity++
            } else {
                state.items.push({
                    ...payload,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {
            const { payload } = action
            const index = state.items.findIndex(e => e.id == payload.id)
            if(state.items[index].quantity > 1) {
                state.items[index].quantity--
            } else {
                state.items.splice(index, 1)
            }
        },
        clearCart: state => {
            state.items.splice(0)
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

/**
 * Possible Reducers:
 * -> A reducer to splice an entire item out regardless of quentity (x button on UI)
 */