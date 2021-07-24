import React from 'react'
import { HrSecond, ProfileStyle, Adress, FormularySection, FormContainer, HrFirst, Button, ButtonRight } from './Profile.style'
import { Row, Col, Container } from 'react-grid-system'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const ProfileEdit = () => {
  return (

    <ProfileStyle>
      <Container>
        <>
          <h1>Editar perfil</h1>
          <HrFirst />
        </>
        <FormularySection>
          <Container>
            <div className="contact" id="contacts">
              <Row>
                <Col md={12}>
                  <div className="speak">
                    <h2 className="personal">Dados Pessoais</h2>

                  </div>
                </Col>
                <Col>
                  <div className="form">
                    <Form action="" method="POST">
                      <Col>
                        <FormGroup>
                          <p>Nome completo:</p>
                          <Label htmlFor="name">{ }</Label>
                          <Input type="text"
                            className="yourname"
                          />
                        </FormGroup>
                      </Col>
                      <Col >
                        <FormGroup>
                          <p>E-mail:</p>
                          <Label for="exampleEmail">{ }</Label>
                          <Input
                            type="email"
                            name="_replyto"
                            id="exampleEmail"
                            className="yourname"
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormContainer>
                          <FormGroup className={'form-group'} >
                            <p>CPF:</p>
                            <Label for="exampleEmail">{ }</Label>
                            <Input
                              type="email"
                              name="_replyto"
                              id="exampleEmail"
                              className="spacing"
                              //    onChange={handleOnChange}
                            />
                          </FormGroup>
                          <FormGroup className={'form-group'}>
                            <p>RG:</p>
                            <Label for="exampleEmail">{ }</Label>
                            <Input
                              type="email"
                              name="_replyto"
                              id="exampleEmail"
                              //    onChange={handleOnChange}
                            />
                          </FormGroup>
                        </FormContainer>
                      </Col>
                      <Col>
                        <FormContainer>
                          <FormGroup className={'form-group'}>
                            <p>Data de Nascimento</p>
                            <Label for="exampleEmail">{ }</Label>
                            <Input
                              type="email"
                              name="_replyto"
                              id="exampleEmail"
                              //    onChange={handleOnChange}
                              className="spacing"
                              placeholder={'dd/aa/aaaa'} />
                          </FormGroup>
                          <FormGroup className={'form-group'}>
                            <p>Sexo:</p>
                            <Label for="exampleSelect"></Label>
                            <Input placeholder={'dd/aa/aaaa'} className={'gender'}type="select" name="select" id="exampleSelect">
                              <option>Masculino</option>
                              <option>Feminino</option>
                            </Input>
                          </FormGroup>
                        </FormContainer>
                      </Col>
                      <Col>
                        <FormContainer>
                          <FormGroup className={'form-group'} >
                            <p>Telefone Fixo:</p>
                            <Label for="exampleEmail">{ }</Label>
                            <Input
                              type="email"
                              name="_replyto"
                              id="exampleEmail"
                              className="spacing"
                              //    onChange={handleOnChange}
                            />
                          </FormGroup>
                          <FormGroup className={'form-group'}>
                            <p>Celular:</p>
                            <Label for="exampleEmail">{ }</Label>
                            <Input
                              type="email"
                              name="_replyto"
                              id="exampleEmail"

                            />
                          </FormGroup>
                        </FormContainer>
                      </Col>
                      <Col>
                        <HrSecond />
                        <Adress>
                          <h2 className="personal">Endereço</h2>
                          <pc className="text">(some text smallresolution)</pc>
                          <Col>
                          </Col>
                          <Col>
                            <FormContainer>
                              <FormGroup className={'form-group'} >
                                <p>Logadoura:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                  className="spacing" />
                              </FormGroup>
                              <FormGroup className={'form-group-number'}>
                                <p>Número:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"

                                  //    onChange={handleOnChange}
                                />
                              </FormGroup>
                              <FormGroup className={'form-group'}>
                                <p>Complemento:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                  size="100"
                                />
                              </FormGroup>
                            </FormContainer>
                          </Col>
                          <Col>
                            <FormContainer>
                              <FormGroup className={'form-group'}>
                                <p>Bairro:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                  //    onChange={handleOnChange}
                                  className="spacing"
                                />
                              </FormGroup>
                              <FormGroup className={'form-group'}>
                                <p>Cidade:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                  //    onChange={handleOnChange}
                                  className="spacing"/>
                              </FormGroup>        <FormGroup className={'form-group'}>
                                <p>Estado:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                />
                              </FormGroup>
                            </FormContainer>
                          </Col>
                          <Col>
                            <FormContainer>
                              <FormGroup className={'form-group'} >
                                <p>CEP:</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                  className="spacing"
                                  size="40"
                                  //    onChange={handleOnChange}
                                />
                              </FormGroup>
                              <FormGroup className={'form-group'}>
                                <p>Ponto de Referência</p>
                                <Label for="exampleEmail">{ }</Label>
                                <Input
                                  type="email"
                                  name="_replyto"
                                  id="exampleEmail"
                                  className="cel-phone-space"
                                  size="60"
                                />
                              </FormGroup>

                            </FormContainer>
                            <Col>
                              <Button>
                                                        Salvar
                              </Button>
                              <ButtonRight>
                                                        Ver Histórico de Compras
                              </ButtonRight>
                            </Col>
                          </Col>

                        </Adress>
                      </Col>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </FormularySection>
      </Container>
    </ProfileStyle>

  )
}
export default ProfileEdit
