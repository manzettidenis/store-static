import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Cards, ProductStyle, FirstCard, SecondCard, ThirdCard, Price } from './RelatedProducts.style'

const RelatedProducts = () => {
  return (
    <ProductStyle>
      <Container >
        <h3>Produtos Relacionados</h3>
        <hr />
        <Row>
          <Cards>

            <Col>
              <FirstCard>
                <img src="500x500.png">

                </img>
                <h2>99% OFF</h2>
                <div>
                  <p>técnicotécnicotécnico</p>
                  <Price>cnicotécnicocnicotécnico</Price>
                  <p>técnicotécnicotécnico</p>
                  <p>técnicotécnicotécnico</p>
                </div>
              </FirstCard>
            </Col>

            <Col>
              <SecondCard>
                <img src="500x500.png">

                </img>
                <h2>99% OFF</h2>
                <div>
                  <p>técnicotécnicotécnico</p>
                  <Price>cnicotécnicocnicotécnico</Price>
                  <p>técnicotécnicotécnico</p>
                  <p>técnicotécnicotécnico</p>
                </div>
              </SecondCard>
            </Col>

            <Col>
              <ThirdCard>
                <img src="500x500.png">

                </img>
                <h2>99% OFF</h2>
                <div>
                  <p>técnicotécnicotécnico</p>
                  <Price>cnicotécnicocnicotécnico</Price>
                  <p>técnicotécnicotécnico</p>
                  <p>técnicotécnicotécnico</p>
                </div>
              </ThirdCard>
            </Col>

          </Cards>
        </Row>
      </Container>
    </ProductStyle>
  )
}
export default RelatedProducts
