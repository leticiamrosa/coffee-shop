import React from 'react';
import {Button, ButtonText} from './styles';

export function ButtonSubmit({
  onPress,
  color,
  bgColor,
  disabled,
  text,
  margin,
}) {
  return (
    <>
      <Button
        bgColor={bgColor}
        color={color}
        disabled={disabled}
        onPress={onPress}
        margin={margin}>
        <ButtonText>{text}</ButtonText>
      </Button>
    </>
  );
}

export default {ButtonSubmit};
