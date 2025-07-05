import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const favoritos = useSelector((state: RootReducer) => state.favorites.items)
  const itensNoCarrinho = useSelector((state: RootReducer) => state.cart.items)

  const valorTotal = itensNoCarrinho.reduce((acumulador, item) => {
    return acumulador + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
