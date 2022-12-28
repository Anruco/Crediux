import React from 'react'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements"; 

function Sidebar({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = 'about'>
            Sobre Nosotros
          </SidebarLink>
          <SidebarLink to = 'servicios'>
            Servicios
          </SidebarLink>
          <SidebarLink to = 'maps'>
            Localización
          </SidebarLink>
          <SidebarLink to = 'personal'>
            Personal
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to = '/contacto'>
            Contacta
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar