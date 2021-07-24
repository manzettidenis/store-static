import React from 'react'
import { OrangeButton, LeftFormContainer, RightFormContainer, StyledLogin } from './LoginComponent.style'
import { Row, Col, Container } from 'react-grid-system'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const LoginComponent = () => {
  return (

    <StyledLogin>
      <Container>
        <Row>
          <Col>
            <h1>Acessar Sua Conta</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LeftFormContainer>
              <Form>
                <Row>
                </Row>

                <FormGroup className={'left-form'}>
                  <h2> Já tem conta?</h2>
                  <Row>

                    <Label className={'e-mail'} for="exampleEmail">E-mail</Label>
                  </Row>
                  <Row>
                    <Input type="email" size="65" name="email" id="exampleEmail" />
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label for="examplePassword">Senha</Label>
                  </Row>
                  <Row>
                    <Input type="password" size="65" name="password" id="examplePassword" />
                  </Row>
                  <Row>
                    <OrangeButton>
                                            Acessar
                    </OrangeButton>
                  </Row>
                </FormGroup>
              </Form>
            </LeftFormContainer>
          </Col>
          <Col md={6}>
            <RightFormContainer>
              <Form>
                <Row>
                </Row>

                <FormGroup className={'left-form'}>
                  <h2> Não? Crie Uma Agora!</h2>
                  <Row>
                    <Label className={'e-mail'} for="exampleEmail">Nome completo</Label>
                  </Row>
                  <Row>
                    <Input type="email" size="65" name="email" id="exampleEmail" />
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label for="examplePassword">e-mail</Label>
                  </Row>
                  <Row>
                    <Input type="password" size="65" name="password" id="examplePassword" />
                  </Row>

                </FormGroup>
                <FormGroup className={'left-form'}>
                  <Row>
                    <Label className={'e-mail'} for="exampleEmail">Senha</Label>
                  </Row>
                  <Row>
                    <Input type="email" size="65" name="email" id="exampleEmail" />
                  </Row>
                </FormGroup>
                <FormGroup className={'left-form'}>
                  <Row>
                    <Label className={'e-mail'} for="exampleEmail">Confirmar senha</Label>
                  </Row>
                  <Row>
                    <Input type="email" size="65" name="email" id="exampleEmail" />
                  </Row>
                </FormGroup>
                <FormGroup className={'left-form'}>
                  <Row>
                    <Label className={'e-mail'} for="exampleEmail">CPF ou CNPJ</Label>
                  </Row>
                  <Row>
                    <Input type="email" size="65" name="email" id="exampleEmail" />
                  </Row>
                </FormGroup>
                <Row>
                  <OrangeButton>
                                            Criar uma Conta
                  </OrangeButton>
                </Row>

              </Form>
            </RightFormContainer>
          </Col>
        </Row>
      </Container>
    </StyledLogin>

  )
}
export default LoginComponent
