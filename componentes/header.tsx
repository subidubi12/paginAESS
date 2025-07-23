"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { HeaderContainer,Logo,Nav,PushButton } from './styles/namepage.styles';

const Header:React.FC = () => {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo-aess.svg" alt="AESS Logo" />
      </Logo>
      <Nav>
        <PushButton onClick={() => navigateToPage("/")}>INICIO</PushButton>
        <PushButton onClick={() => navigateToPage("/sobrenosotros")}>SOBRE NOSOTROS</PushButton>
        <PushButton onClick={() => navigateToPage("/actividades")}>ACTIVIDADES</PushButton>
        <PushButton onClick={() => navigateToPage("/curiosidades")}>CURIOSIDADES</PushButton>
        <PushButton onClick={() => navigateToPage("/calendario")}>CALENDARIO</PushButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;