import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoriteState = {
  items: Produto[]
}

const initialState: FavoriteState = {
  items: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Produto>) {
      const exists = state.items.find(
        (produto) => produto.id === action.payload.id
      )
      if (exists) {
        state.items = state.items.filter(
          (produto) => produto.id !== action.payload.id
        )
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { toggleFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
