import React from 'react';
import { FooterBase, Logo, } from './styles';
import LogoSpotenu from "../../assets/spotenu-2.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <Logo src={LogoSpotenu} alt="Logo Spotenu" />
      </a>
      <p>Criado por Beatriz de Mattos</p>

      {/* <Icones>
        <a href='https://www.instagram.com/' target="_blank" >
          <Img src='https://w7.pngwing.com/pngs/828/240/png-transparent-camera-application-logo-social-media-computer-icons-blog-instagram-logo-text-number-magenta.png' alt='Instagram' />
        </a>

        <a href='https://web.whatsapp.com/' target="_blank" >
          <Img src='https://img.icons8.com/ios-filled/50/000000/whatsapp.png' alt='Twitter' />
        </a>
        
        <a href='https://www.facebook.com/' target="_blank" >
          <Img src='https://image.flaticon.com/icons/png/512/23/23660.png' alt='Facebook' />
        </a>
      </Icones> */}
    </FooterBase>
  );
};

export default Footer;
