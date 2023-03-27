import { createSlice } from '@reduxjs/toolkit'
import ProductModel from '../models/product'

const items: ProductModel[] = new Array()
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: items
    },
    reducers: {
        add: (state, action) => {
           const { payload } = action
           state.items.push(payload)
        },
        remove: (state, action) => {
            const { payload } = action
            const index = state.items.findIndex(e => e.id == payload.id)
            state.items.splice(index, 1)

        },
        clear: state => {
            state.items.splice(0)
        }
    }
})

export const { add, remove, clear } = cartSlice.actions

export default cartSlice.reducer