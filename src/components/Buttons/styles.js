import styled from 'styled-components';
import {colors, fonts} from '~/styles/styles';

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin: ${props => props.margin || '10px 20px'};
  background-color: ${props => props.bgColor || colors.primary};
  border: 1px solid ${props => props.bgColor || colors.primary};
  border-radius: 4px;
  elevation: 1;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.body};
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: ${props => props.color || colors.white};
`;
