import React from 'react'
import { SecondCalendar, StatusAproved, SecondNumber, StatusPayment, NumberOrder, CalendarPayment, SentStatus, ListWaitingPayment, Shopping, List, Item, HR, StatusDelivered } from './Shopping.style'
import { Row, Col, Container } from 'react-grid-system'

const mockNumber = ['Nº do Pedido:', '4321']
const mockCalendar = ['Data da Compra', '21/09/2020']
const mockStatus = ['Status da Compra:', 'Aguardando Pagamento']
const mockSent = ['Status do Envio:', 'Em trânsito']
const mockSecondNumber = ['Nº do Pedido:', '1337']
const mockSecondCalendar = ['Data de compra:', '24/24/2020']
const mockStatusAproved = ['status da Compra', 'Aprovado']
const mockStatusDelivered = ['Status de Envio', 'Em trânsito']

const renderListItems = (items) => {
  return (
    <List>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  )
}

const ShoppingStories = () => {
  return (
    <Shopping>
      <Container>
        <Row>
          <Col>
            <Col>
              <h2>Histórico de Compras</h2>
              <hr className={'orange'} />
            </Col>
            <div className={'lists'}>
              <Row>
                <Col>
                  <NumberOrder>
                    {renderListItems(mockNumber)}
                  </NumberOrder>
                </Col>
                <Col>
                  <CalendarPayment>
                    {renderListItems(mockCalendar)}
                  </CalendarPayment>
                </Col>
                <Col>
                  <StatusPayment>
                    {renderListItems(mockStatus)}
                  </StatusPayment>
                </Col>
                <Col>
                  <SentStatus>
                    {renderListItems(mockSent)}
                  </SentStatus>
                </Col>
              </Row>
              <HR/>
              <Row>
                <Col>
                  <SecondNumber>
                    {renderListItems(mockSecondNumber)}
                  </SecondNumber>
                </Col>
                <Col>
                  <SecondCalendar>
                    {renderListItems(mockSecondCalendar)}
                  </SecondCalendar>
                </Col>
                <Col>
                  <StatusAproved>
                    {renderListItems(mockStatusAproved)}
                  </StatusAproved>
                </Col>
                <Col>
                  <StatusDelivered>
                    {renderListItems(mockStatusDelivered)}
                  </StatusDelivered>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Shopping>
  )
}
export default ShoppingStories
