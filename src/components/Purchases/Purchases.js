import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { RightListBottom, ProductCodeBottom, ProductPriceBottom, ProductAmountBottom, ProductDeniedContainer, ButtonBorder, ProductCode, ProductPrice, ProductAmount, ProductContainer, RightList, Title, PurchasesStyle, Hr, SearchProduct, PurchasesContainer } from './Purchases.style'

const mockAmount = ['Produto', 'Categoria', 'Qtd:']
const mockPrice = ['R$ 89,90']
const mockCode = ['Código: 1337', 'Marca: Nome']
const mockStatus = ['Comprador:', 'Alysson', 'Status da Compra:', 'Aprovada', 'Data da Compra', '21/09/2020']
const mockBottom = ['Comprador:', 'Alysson', 'Status da Compra:', 'Negada', 'Data da Compra', '21/09/2020']

const renderListItems = (items) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

const Purchases = () => {
  return (
    <PurchasesStyle>
      <Container>
        <div>
          <Title>Pedidos Efetuados</Title>
          <Hr />
        </div>
        <PurchasesContainer>

          <Row>
            <Col>
              <SearchProduct>
                <form className="example" action="/action_page.php">
                  <input size="100" type="text" placeholder="Nome do produto" name="search" />
                  <button type="submit">Pesquisar</button>
                </form>
              </SearchProduct>

            </Col>
          </Row>

        </PurchasesContainer>
        <Col>
          <ProductContainer>
            <Col>
              <img src="250X250.png" />
            </Col>
            <Col>
              <ProductAmount>
                {renderListItems(mockAmount)}
              </ProductAmount>
            </Col>
            <Col>
              <ProductPrice>
                {renderListItems(mockPrice)}
              </ProductPrice>
            </Col>
            <Col>
              <ProductCode>
                {renderListItems(mockCode)}
              </ProductCode>
            </Col>
            <Col>
              <RightList>
                {renderListItems(mockStatus)}
              </RightList>
            </Col>
          </ProductContainer>
        </Col>
        <Col>
          <ProductContainer>
            <Col>
              <img src="250X250.png" />
            </Col>
            <Col>
              <ProductAmount>
                {renderListItems(mockAmount)}
              </ProductAmount>
            </Col>
            <Col>
              <ProductPrice>
                {renderListItems(mockPrice)}
              </ProductPrice>
            </Col>
            <Col>
              <ProductCode>
                {renderListItems(mockCode)}
              </ProductCode>
            </Col>
            <Col>
              <RightList>
                {renderListItems(mockStatus)}
              </RightList>
            </Col>
          </ProductContainer>
        </Col>
        <Col>
          <ProductContainer>
            <Col>
              <img src="250X250.png" />
            </Col>
            <Col>
              <ProductAmount>
                {renderListItems(mockAmount)}
              </ProductAmount>
            </Col>
            <Col>
              <ProductPrice>
                {renderListItems(mockPrice)}
              </ProductPrice>
            </Col>
            <Col>
              <ProductCode>
                {renderListItems(mockCode)}
              </ProductCode>
            </Col>
            <Col>
              <RightList>
                {renderListItems(mockStatus)}
              </RightList>
            </Col>
          </ProductContainer>
        </Col>
        <Row>
          <Col>
            <ProductDeniedContainer>
              <ButtonBorder />

              <div>
                <Col>
                  <ProductContainer>
                    <Col>
                      <img src="250X250.png" />
                    </Col>
                    <Col>
                      <ProductAmountBottom >
                        {renderListItems(mockAmount)}
                      </ProductAmountBottom>
                    </Col>
                    <Col>
                      <ProductPriceBottom >
                        {renderListItems(mockPrice)}
                      </ProductPriceBottom>
                    </Col>
                    <Col>
                      <ProductCodeBottom>
                        {renderListItems(mockCode)}
                      </ProductCodeBottom>
                    </Col>
                    <Col>
                      <RightListBottom>
                        {renderListItems(mockBottom)}
                      </RightListBottom>
                    </Col>
                  </ProductContainer>
                </Col>
              </div>
            </ProductDeniedContainer>
          </Col>
        </Row>
      </Container>
    </PurchasesStyle>
  )
}
export default Purchases
