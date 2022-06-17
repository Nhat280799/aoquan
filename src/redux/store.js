import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlice'

import cartItemsReducer from './sopping-cart/cartItemSlide'

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsReducer
    },
})