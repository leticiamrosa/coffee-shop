import styled from 'styled-components';
import {colors, fonts} from '~/styles/styles';

export const ContentLogo = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.body};
  font-weight: 500;
  font-size: ${props => props.size || '40px'};
  line-height: 44px;
  text-align: center;
`;
