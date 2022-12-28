import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  MobileIcon
} from "./NavbarElements";


const Navbar = ({toggle}) => {
  return (
    // Fragamento
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Crediux</NavLogo>
          <MobileIcon onClick={toggle}>
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
            <NavBtnLink to="/">Contacta</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
