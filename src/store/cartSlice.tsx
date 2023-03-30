import { createSlice } from '@reduxjs/toolkit'
import CartItemModel from '../models/cartItem'

const items: Array<CartItemModel> = new Array()
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: items
    },
    reducers: {
        add: (state, action) => {
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
        remove: (state, action) => {
            const { payload } = action
            const index = state.items.findIndex(e => e.id == payload.id)
            if(state.items[index].quantity > 1) {
                state.items[index].quantity--
            } else {
                state.items.splice(index, 1)
            }
        },
        clear: state => {
            state.items.splice(0)
        }
    }
})

export const { add, remove, clear } = cartSlice.actions

export default cartSlice.reducer