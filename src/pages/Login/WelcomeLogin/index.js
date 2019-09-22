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

export default class WelcomeLogin extends Component {
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
          <ButtonLogin
            bgColor="#3B5998"
            onPress={() => navigation.navigate('Login')}>
            <ButtonLoginText>Sign In</ButtonLoginText>
          </ButtonLogin>
        </ContentButtons>
        <Footer>
          <FooterText>Already have account - Skip</FooterText>
        </Footer>
      </Container>
    );
  }
}
