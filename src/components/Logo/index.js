import React from 'react';
import {LogoText} from './styles';

export function Logo({sizeTitle, sizeSubtitle}) {
  return (
    <>
      <LogoText size={sizeTitle}>COFFEE</LogoText>
      <LogoText size={sizeSubtitle}>SHOP DELIVERY</LogoText>
    </>
  );
}

export default {Logo};
