import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import {Logo} from '~/components/Logo';
import {ButtonSubmit} from '~/components/Buttons';
import {
  Container,
  ContentDescription,
  Description,
  Footer,
  ContentLogo,
  ContentForm,
  InputLogin,
  ContentRow,
  InputLabel,
} from './styles';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showButton: true,
      email: null,
      password: null,
      username: null,
      name: null,
      id: null,
    };
  }

  async componentDidMount() {}

  async writeUserData() {
    const {name, username, email, id} = this.state;
    const {navigation} = this.props;
    await firebase
      .database()
      .ref('Users/')
      .push({
        uid: id,
        first_name: name,
        email: email,
        username: username,
      })
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        console.warn(error);
      });
  }

  async handleSubmit() {
    const {email, password} = this.state;
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // console.warn(userCredential.user.uid);
        this.setState({
          id: userCredential.user.uid,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {navigation} = this.props;
    const {showForm, showButton, email, password, username, name} = this.state;

    // const itemId = navigation.getParam('itemId');
    // console.warn(JSON.stringify(itemId));
    return (
      <Container>
        <ContentLogo>
          <Logo sizeTitle={30} sizeSubtitle={40} />
        </ContentLogo>
        <ContentDescription>
          <Description>
            The Little Coffee Shop serves specialty coffee, fancy grilled cheese
            sandwiches, scratch cooking, craft ales, and cider.
          </Description>
        </ContentDescription>

        <Footer>
          {showButton && (
            <ButtonSubmit
              text="Sign Up"
              bgColor="#0D9F67"
              onPress={() => {
                // navigation.navigate('SignUpForm');
                this.setState({showForm: true, showButton: false});
              }}
            />
          )}

          {showForm && (
            <ContentForm>
              <ContentRow>
                <InputLabel>Name</InputLabel>
                <InputLogin
                  value={name}
                  onChangeText={text => {
                    this.setState({name: text});
                  }}
                />
              </ContentRow>
              <ContentRow>
                <InputLabel>E-mail</InputLabel>
                <InputLogin
                  value={email}
                  onChangeText={text => {
                    this.setState({email: text});
                  }}
                  autoCapitalize="none"
                />
              </ContentRow>
              <ContentRow>
                <InputLabel>Password</InputLabel>
                <InputLogin
                  value={password}
                  secureTextEntry
                  onChangeText={text => this.setState({password: text})}
                />
              </ContentRow>
              <ContentRow>
                <InputLabel>UserName</InputLabel>
                <InputLogin
                  value={username}
                  onChangeText={text => this.setState({username: text})}
                />
              </ContentRow>
              <ButtonSubmit
                text="Sign Up"
                bgColor="#0D9F67"
                margin="0"
                onPress={async () => {
                  // this.setState({showForm: true, showButton: false});
                  await Promise.all([
                    this.handleSubmit(),
                    setTimeout(() => {
                      this.writeUserData();
                    }, 5000),
                  ]);
                }}
              />
            </ContentForm>
          )}
        </Footer>
      </Container>
    );
  }
}
