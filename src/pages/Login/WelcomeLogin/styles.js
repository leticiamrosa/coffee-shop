import styled from 'styled-components';
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
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.body};
  font-weight: 500;
  font-size: ${props => props.size || '40px'};
  line-height: 44px;
  text-align: center;
`;

export const ButtonLogin = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin: 10px 20px;
  background-color: ${props => props.bgColor};
`;

export const ButtonLoginText = styled.Text`
  color: ${props => props.color || colors.white};
  font-weight: 600;
  line-height: 20px;
`;

export const ContentButtons = styled.View`
  display: flex;
  justify-content: flex-end;
`;

export const Footer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const FooterText = styled.Text`
  display: flex;
  font-family: ${fonts.body};
  color: ${colors.white};
  line-height: 20px;
  font-weight: 300;
`;
