import React from "react";
import LogoSpotenu from "../../assets/spotenu-2.png";
import { HeaderContainer, Logo, } from "./styles";
import SimpleMenu from "./SimpleMenu";

function Header () {
    return (
        <HeaderContainer>
            <Logo src={LogoSpotenu} alt="Logo Spotenu" />

            <div>
                <SimpleMenu />
            </div>
        </HeaderContainer>
    );
};

export default Header;