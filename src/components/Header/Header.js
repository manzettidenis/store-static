import React from 'react'
import { Navbar, Menu, SearchIcons, Car, ShoppingCartIcons, Zero, CarZero, SignUp, Header, MeuLink, SubMenu, SubList, SubItem } from './Header.style'
import { useMediaQuery } from '../../../utils/Usemedia'
import { Row, Col, Container } from 'react-grid-system'

const mockList = ['Início', 'Roupas', 'Prataria', 'Outros', 'Contato']

const Navigation = () => {
  const isBreakpoint = useMediaQuery(768)
  const renderMenuItems = (items) => {
    return (
      <SubList>
        {items.map((item, index) => (
          <SubItem key={index}>{item}</SubItem>
        ))}
      </SubList>
    )
  }
  return (
    <Container>
      <Row>
        <Col sm='24'>
          <Header>
            <Col>
              <Navbar className="navbar">
                {isBreakpoint ? (
                  <>
                  </>
                ) : (
                  <>
                    <div>
                      <img className="img-fluid" src="/logo.png" alt="await" />
                    </div>
                    <Menu>
                      <div className="topnav">
                        <div className="search-container">
                          <form action="/">
                            <input type="text" placeholder="Pesquisar por um produto" name="search" size="40" />
                            <button type="submit"><SearchIcons /></button>
                          </form>
                        </div>
                        <SignUp href="#about">Entre ou<br />cadastre<br />se</SignUp>
                        <Car>
                          <ShoppingCartIcons />
                          <CarZero>
                            <Zero>0</Zero>
                          </CarZero>
                          <a className={'car'}> <span>Carrinho</span> <br />R$0.00</a>
                        </Car>
                      </div>
                    </Menu>
                  </>
                )}
              </Navbar>
            </Col>
            <Col>
              <SubMenu>
                {renderMenuItems(mockList)}
              </SubMenu>
            </Col>
          </Header>
        </Col>
      </Row>
    </Container>
  )
}

export default Navigation
