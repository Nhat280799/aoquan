import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = { value : items,}

const findItem = (arr,item) => arr.filter(e => e.slug === item.slug || e.color === item.color || e.size === item.size)

const delItem = (arr,item) => arr.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)

export const cartItemsSlice = createSlice({
    name : 'cartItems',
    initialState,
    reducers : {
        addItem : (state,action) => {
            const newItem = action.payload;

            const dupticate = findItem(state.value, newItem)

            if(dupticate.length > 0){
                state.value = delItem(state.value , newItem)

                state.value = [...state.value , {
                   id: dupticate[0].id,
                    slug: newItem.slug,
                    color: newItem.color,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity + dupticate[0].quantity
                }]
            }else{
                state.value = [...state.value , {
                    ...newItem,
                    id : state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1 
                }]
            }
           localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
            console.log(state.value)
        },
    },
})

export const { addItem } = cartItemsSlice.actions

export default cartItemsSlice.reducer
