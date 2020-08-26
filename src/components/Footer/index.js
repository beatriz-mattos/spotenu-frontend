import React from 'react';
import { FooterBase, Logo } from './styles';
import LogoSpotenu from "../../assets/spotenu-2.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <Logo src={LogoSpotenu} alt="Logo Spotenu" />
      </a>
      <p>Criado por Beatriz de Mattos</p>
    </FooterBase>
  );
};

export default Footer;
