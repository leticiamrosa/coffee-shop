import styled, {css} from 'styled-components';
import {colors, fonts} from '~/styles/styles';

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const CardList = styled.FlatList``;

export const Product = styled.Text``;

export const Description = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* flex: 1; */
  padding: 10px;
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100px;
`;

export const CardImage = styled.Image`
  height: 100%;
  width: 30%;
  display: flex;
  /* flex: 1; */
  border-radius: 8px;
`;

export const CardTitle = styled.Text`
  display: flex;
  color: ${colors.regular};
  font-family: ${fonts.body};
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
`;

export const CardDescription = styled.Text`
  display: flex;
  color: ${colors.regular};
  font-family: ${fonts.body};
  font-weight: 400;
`;

export const ContentText = styled.View`
  display: flex;
  /* flex: 1; */
  padding: 10px;
`;

export const Price = styled.Text`
  display: flex;
  color: ${colors.regular};
  background-color: yellow;

  ${props => props.small && css``}
`;

export const ButtonList = styled.TouchableOpacity``;
