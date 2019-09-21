import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Background} from './styles';
import bg from '~/assets/bg.svg';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Background source={bg} />
      </Container>
    );
  }
}
