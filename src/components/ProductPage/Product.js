import React from 'react'
import { Images, Sliders, Delete, NumberCar, One, Button, ExpandMoreIcons, ItemDropDown, ItemDropDownSecond, Select, PriceDescTwo, PriceDesc, ProductPrice, AlignTwo, Align, List, Item, ProductStyle, X500, X250, ProductName, Par, Title } from './Product.style'
import { Row, Col, Container } from 'react-grid-system'

const Product = () => {
  return (
    <ProductStyle>
      <Container fluid >
        <Row>
          <Col md={6}>
            <Images>
              <X500 src="/500x500.png" alt="img" />
              <Sliders>
                <X250 src="/500x500.png" alt="img" />
                <X250 src="/500x500.png" alt="img" />
                <X250 src="/500x500.png" alt="img" />
              </Sliders>
            </Images>
          </Col>
          <Col md={6}>
            <ProductName>
              <Col>
                <Title>Nome do produto</Title>
              </Col>
              <>
                <List>
                  <Item><Align>Código 2342343</Align></Item>
                  <Item><AlignTwo>texto size232323</AlignTwo></Item>
                </List>
              </>
              <>
                <Par>asdasdas</Par>
                <ProductPrice>R$ 99,90</ProductPrice>
                <PriceDesc>técnicotécnicotécnico</PriceDesc>
                <PriceDesc>técnicotécnicotécnico</PriceDesc>
                <PriceDescTwo>técnicotécnicotécnico</PriceDescTwo>
              </>
              <Select className={'select'}>
                <ItemDropDown className="dropdown">
                  <button className="dropbtn">
                    <span>Dropdown</span>
                    <ExpandMoreIcons />
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </ItemDropDown>
                <ItemDropDownSecond>
                  <ItemDropDown className="dropdown">
                    <button className="dropbtn">
                      <span>Dropdown</span>
                      <ExpandMoreIcons />
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </ItemDropDown>
                </ItemDropDownSecond>
              </Select>
              <>
                <NumberCar>
                  <One>
                                        1
                  </One>
                  <Button> Adicionar a Carrinho</Button>
                </NumberCar>
              </>
              <Delete>
                <p>tecnico tenico</p>
                <button><span>Excluir</span></button>
              </Delete>
            </ProductName>
          </Col>
        </Row>
      </Container>
    </ProductStyle>
  )
}
export default Product
