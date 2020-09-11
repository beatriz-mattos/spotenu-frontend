import React from "react";
import LogoSpotenu from "../../assets/spotenu-2.png";
import { HeaderContainer, Logo, } from "./styles";
import DropdownMenu from "./DropdownMenu";

function Header () {
    return (
        <HeaderContainer>
            <Logo src={LogoSpotenu} alt="Logo Spotenu" />

            <div>
                <DropdownMenu />
            </div>
        </HeaderContainer>
    );
};

export default Header;