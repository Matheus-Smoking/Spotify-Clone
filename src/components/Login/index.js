import React, { Component } from 'react';
import {  getAccess } from '../../service/HttpService';
import { 
  Container,
  Titulo,
  Action
} from "./style";

class Login extends Component { 

  constructor(props){
    super(props);
  }

  login() {
    getAccess()
  }

  render() {
    return (
        <Container>
            <Titulo>Efetue seu login para Continuar</Titulo>
            <Action onClick={() => this.login()} >Faça seu login</Action>
        </Container>
    )
  }
}

export default Login; 