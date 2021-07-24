import React from 'react'
import { DetailsStyle, StyledContainer, HR, Divisor, DivisorTwo, DivisorThree, Strong } from './Detais.style'
import { Container } from 'react-grid-system'

const ShoppingStories = () => {
  return (
    <DetailsStyle>
      <Container>
        <>
          <h2>Detalhes da Compra</h2>
          <HR />
          <StyledContainer>
            <Divisor>
              <ul>
                <li><Strong>Lista de Produtos</Strong></li>
                <li> 5x Camisetas</li>
                <li>x2 Tênis</li>
                <li>x3 Bermuda</li>
                <li>x1 Casaco</li>
              </ul>
              <ul>
                <li><img src="/Details.png" /></li>
              </ul>

            </Divisor>
            <hr className={'line'} />
            <DivisorTwo>
              <ul>
                <Strong><li>Detalhes Do Pedido</li></Strong>
                <li>Nome do Comprador José Ferreira Lima</li>
                <li>Pedido Nº.456</li>
                <li>Data da Compra 22/09/2020</li>
                <li>Código de Rastreio: PACSEDEX1234</li>
              </ul>
              <ul className={'spacing-first'}>
                <li>Método de Pagamento: Cartão de Crédito</li>
                <li>Status de Pedido Aprovado</li>
                <li>Método de Envio Econômico</li>
                <li>Prazo de Chegada 15 dias úteis</li>
              </ul>
            </DivisorTwo>
            <hr className={'line'} />
            <DivisorThree>
              <ul >
                <Strong><li>Endereço de Entrega</li></Strong>
                <li>Rua Arnaldo Bendo Coelho Nº123</li>
                <li>Bairro: Zona Leste</li>
                <li>Cidade: São Paulo</li>
                <li>CEP: 12345-678</li>
              </ul>
              <ul className={'spacing'}>
                <Strong><li>Endereço de Cobrança</li></Strong>
                <li>Rua Arnaldo Bento Coelho Nº123</li>
                <li>Complemento: Ap 23</li>
                <li>Bairro Zona Leste</li>
                <li>Cidade: São Paulo</li>
                <li>CEP: 12345-678 </li>
              </ul>
            </DivisorThree>
          </StyledContainer>
        </>
      </Container>
    </DetailsStyle>
  )
}
export default ShoppingStories
