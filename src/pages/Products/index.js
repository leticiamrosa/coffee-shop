import React, {useState, useEffect} from 'react';
import firebase from 'react-native-firebase';
import {
  Container,
  CardList,
  ButtonList,
  Card,
  CardDescription,
  CardTitle,
  CardImage,
  Description,
  ContentText,
  Price,
} from './styles';

export default function Products({navigation}) {
  const [data, getData] = useState();
  const itemId = navigation.getParam('drinks');

  console.warn(itemId);
  useEffect(() => {
    // readUserData();
  }, [data]);

  function check() {
    const test = itemId.map(item => {
      // console.log(item);
    });
  }

  async function readUserData() {
    await firebase
      .database()
      .ref('drinks/')
      .once('value', function(snapshot) {
        // console.warn(snapshot.val());
      })
      .then(snapshot => {
        getData(snapshot.val());
      });
  }

  // console.warn(data);
  return (
    <Container>
      <CardList
        data={itemId}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return (
            <>
              <ButtonList
                onPress={() => {
                  // navigation.navigate('Products', {
                  //   drinks: drinks,
                  // });
                }}>
                {/* <CardImage
                    source={{
                      uri: item.url,
                    }}
                  /> */}
                <Description>
                  <CardImage source={{uri: item.url}} />
                  <ContentText>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>Freshly brewed coffee</CardDescription>
                  </ContentText>
                </Description>
              </ButtonList>
            </>
          );
        }}
      />
      {/* {itemId &&
        itemId.map(item => {
          return <Product key={item.name}>{item.name}</Product>;
        })} */}
      {/* <Product>{itemId[0].name}</Product> */}
    </Container>
  );
}
