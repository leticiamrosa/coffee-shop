import styled from 'styled-components';
import {Input, Label} from 'native-base';
import {colors, fonts} from '~/styles/styles';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  padding: 16px;
  justify-content: space-between;
  background-color: ${colors.regular};
`;

export const ContentLogo = styled.View`
  display: flex;
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: flex-end;
`;

export const ContentDescription = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin: 10px 16px;
  padding-bottom: 16px;
`;

export const Description = styled.Text`
  display: flex;
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`;

export const ContentForm = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ContentRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const InputLogin = styled(Input)`
  background-color: white;
  color: ${colors.regular};
  border: 1px solid white;
  flex: 2;
`;

export const InputLabel = styled(Label)`
  display: flex;
  font-family: ${fonts.body};
  color: ${colors.regular};
  font-weight: 300;
  justify-content: center;
  align-self: center;
  flex: 1;
  padding-left: 20px;
`;

export const Footer = styled.View`
  display: flex;
`;
