import React, {Component} from 'react';
import { Logo } from '~/components/Logo';
import {View, Text} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
      <ContentHeader>
        <HeaderImage>
          <Logo />
        </HeaderImage>
      </ContentHeader>
        <Text> index </Text>
      </Container>
    );
  }
}
