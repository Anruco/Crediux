import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";


const Navbar = () => {
  return (
    // Fragamento
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Crediux</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Sobre Nosotros</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="servicios">Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="maps">Localización</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="contacto">Personal</NavLinks>
            </NavItem>
          </NavMenu>
        <NavBtn>
            <NavBtnLink to='/'>Contacta</NavBtnLink>    
        </NavBtn>  
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
