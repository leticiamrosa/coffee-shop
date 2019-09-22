import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import {
  Container,
  Content,
  Card,
  CardImage,
  Description,
  CardTitle,
  CardDescription,
  CardList,
  ButtonList,
} from './styles';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      menu: ['Café', 'Bebidas', 'Salgados', 'Refrescos', 'Doces'],
    };
  }

  async componentDidMount() {
    await this.readUserData();
  }

  readUserData() {
    firebase
      .database()
      .ref('Menu/coffee')
      .once('value', function(snapshot) {
        // console.warn(snapshot.val());
      })
      .then(snapshot => {
        this.setState({
          drinks: snapshot.val(),
        });
        // console.warn(snapshot.val());
      });
  }

  render() {
    const {drinks, menu} = this.state;
    const {navigation} = this.props;
    return (
      <Container>
        <Content>
          <CardList
            data={menu}
            numColumns={2}
            keyExtractor={item => item}
            renderItem={({item}) => {
              return (
                <ButtonList
                  onPress={() => {
                    navigation.navigate('Products', {
                      drinks: drinks,
                    });
                  }}>
                  <Card>
                    <CardImage
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1421882402971-b18cd1741ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1788&q=80',
                      }}
                    />
                    <Description>
                      <CardTitle>{item}</CardTitle>
                      <CardDescription>Freshly brewed coffee</CardDescription>
                    </Description>
                  </Card>
                </ButtonList>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
