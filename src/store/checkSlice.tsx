import { createSlice } from '@reduxjs/toolkit'
import CartItemModel from '../models/cartItem'

const items: Array<CartItemModel> = new Array()
export const checkSlice = createSlice({
    name: 'check',
    initialState: {
        items: items
    },
    reducers: {
        addToCheck: (state, action) => {
            const { payload } = action
            state.items = [...state.items, ...payload]
        },
        clearCheck: state => {
            state.items.slice(0)
        }
    }
})

export const { addToCheck, clearCheck } = checkSlice.actions

export default checkSlice.reducer