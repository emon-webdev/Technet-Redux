import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import cartReducer from './features/cart/cartSlice';
import productSlice from './features/products/productSlice';
import userSlice from './features/user/userSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productSlice,
        user: userSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;