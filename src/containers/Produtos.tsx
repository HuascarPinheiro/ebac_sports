import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'
import { addToCart } from '../store/reducers/carrinho'
import { toggleFavorite } from '../store/reducers/favorito'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()

  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorites.items)

  const produtoEstaNosFavoritos = (produtoId: number) =>
    favoritos.some((f) => f.id === produtoId)

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          favoritar={() => dispatch(toggleFavorite(produto))}
          aoComprar={() => dispatch(addToCart(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
