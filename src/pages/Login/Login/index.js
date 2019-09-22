import React, {useState} from 'react';
import firebase from 'react-native-firebase';
import {
  Container,
  ContentForm,
  Footer,
  ContentRow,
  InputLabel,
  InputLogin,
  Cover,
  ContentLogo,
  Logo,
} from './styles';
import {
  ColorMatrix,
  concatColorMatrices,
  contrast,
  saturate,
} from 'react-native-color-matrix-image-filters';
import {ButtonSubmit} from '~/components/Buttons';

export default function Login({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Menu');
      })
      .catch(error => {
        console.warn('error', error);
      });
    console.warn(email, password);
  }

  return (
    <Container>
      <ColorMatrix matrix={concatColorMatrices([saturate(1.0), contrast(1.4)])}>
        {/* <Grayscale> */}
        <Cover style={{tintColor: 'gray'}} source={require('~/assets/bg.jpg')}>
          <ContentLogo>
            <Logo>Coffee Shop</Logo>
          </ContentLogo>
          <Footer>
            <ContentForm>
              <ContentRow>
                <InputLabel>E-mail</InputLabel>
                <InputLogin
                  // value={email}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                  autoCapitalize="none"
                />
              </ContentRow>

              <ContentRow>
                <InputLabel>Password</InputLabel>
                <InputLogin
                  // value={password}
                  secureTextEntry
                  onChangeText={text => setPassword(text)}
                />
              </ContentRow>

              <ButtonSubmit
                text="Sign Up"
                bgColor="#0D9F67"
                margin="0"
                onPress={async () => {
                  await handleLogin();
                }}
              />
            </ContentForm>
          </Footer>
        </Cover>
        {/* </Grayscale> */}
      </ColorMatrix>
    </Container>
  );
}
