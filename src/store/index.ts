import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/carrinho'

import favoriteReducer from './reducers/favorito'

import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
