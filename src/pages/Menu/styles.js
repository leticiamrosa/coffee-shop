import styled from 'styled-components';
import {colors, fonts} from '~/styles/styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.View`
  width: 170px;
  height: 170px;
  /* margin: 10px; */
  margin: 8px;
  background-color: white;
`;

export const CardImage = styled.Image`
  height: 60%;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CardList = styled.FlatList`
  display: flex;
`;

export const Description = styled.View`
  display: flex;
  flex: 1;
  padding: 10px;
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 8px;
`;

export const CardTitle = styled.Text`
  color: ${colors.regular};
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
`;

export const CardDescription = styled.Text`
  color: ${colors.regular};
  font-family: ${fonts.body};
  font-weight: 400;
`;

export const ButtonList = styled.TouchableOpacity``;
