import React from 'react'
import { OrangeBorderedFreyre, OrangeBorderedHelp, OrangeBorderedSocial, StyledFooter, FooterItem, FooterList, UnderFooter, OrangeBordered, Item } from './FooterStyle'
import { Row, Col, Container } from 'react-grid-system'

const mockListSocial = ['Instagram', 'Facebook', 'Twitter']
const mockListHelp = ['FAQ', 'Mapa do site', 'Atendimento']
const mockListFreyre = ['Sobre', 'Trabalhe conosco', 'Seja Fornecedor']
const mockListFourthPosition = ['Política de privacidade', 'Política de devolução', 'Contrato De Compra e Vendda', 'Fale Conosco']

const Footer = () => {
  const renderMenuItems = (items) => {
    return (
      <FooterList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </FooterList>
    )
  }
  return (
    <StyledFooter>
      <Container>
        <Row>
          <>
            <Col>
              <FooterItem>
                  Social
              </FooterItem>
              <OrangeBorderedSocial />
              <FooterList>
                <Item>
                Instagram
                </Item>
                <Item>
                Facebook
                </Item>
                <Item>
              Twitter
                </Item>
              </FooterList>
            </Col>

            <Col>
              <FooterItem>
                  Ajuda
              </FooterItem>
              <OrangeBorderedHelp />
              <FooterList>
                <Item>
                 Faq
                </Item>
                <Item>
                Mapa do site
                </Item> <Item>
                Atendimento
                </Item>
              </FooterList>
            </Col>
          </>
          <>
            <Col>
              <FooterItem>
                  Freyre
              </FooterItem>
              <OrangeBorderedFreyre />
              <FooterList>
                <Item>
                Sobre
                </Item>
                <Item>
                Trabalhe Conosco
                </Item>
                <Item>
                    Seja Fornecedor
                </Item>
              </FooterList>
            </Col>
          </>
          <>
            <Col>
              <FooterList className={'spacing'}>
                <Item>
                Política de privacidade
                </Item>
                <Item>
                Política de devolução
                </Item>
                <Item>
              Contrato de compra e venda
                </Item>
                <Item>
              Fale Conosco
                </Item>
              </FooterList>
            </Col>
          </>
          <div className={'image'}>
            <img src="/footerlogo.png" />
          </div>
        </Row>
      </Container>
      <UnderFooter>
        <p>© Freyre 2021</p>
        <p> FREYRE LTDA - CNPJ 00.000.000./0000-01 - Rua consolação, 2000, Distrito Central, CEP, 08000-999, Palmeiras, Sp, Brazil.</p>
      </UnderFooter>
    </StyledFooter>
  )
}

export default Footer
