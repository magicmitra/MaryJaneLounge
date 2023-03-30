import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import checkReducer from './checkSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        check: checkReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store