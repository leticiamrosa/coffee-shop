import React, {Component} from 'react';
import {
  Container,
  ButtonLogin,
  ButtonLoginText,
  ContentButtons,
  Footer,
  FooterText,
  Logo,
  ContentLogo,
} from './styles';
// import api from '~/services/api';
import firebase from 'react-native-firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  async componentDidMount() {}

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <ContentLogo>
          <Logo size={40}>COFFEE</Logo>
          <Logo size={32}>SHOP DELIVERY</Logo>
        </ContentLogo>
        <ContentButtons>
          {firebase.database.nativeModuleExists && (
            <ButtonLoginText>database()</ButtonLoginText>
          )}
          <ButtonLogin
            bgColor="#0D9F67"
            onPress={() => {
              navigation.navigate('SignUp', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}>
            <ButtonLoginText>Sign Up</ButtonLoginText>
          </ButtonLogin>
          <ButtonLogin bgColor="#3B5998">
            <ButtonLoginText>Sign in Facebook</ButtonLoginText>
          </ButtonLogin>
        </ContentButtons>
        <Footer>
          <FooterText>Already have account - Skip</FooterText>
        </Footer>
      </Container>
    );
  }
}
