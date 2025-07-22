"use client";
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0b1e3f;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  font-family: 'Arial', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 40px;
  }

  span {
    font-size: 14px;
    line-height: 1.2;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const PushButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid transparent;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    border-color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo-aess.svg" alt="AESS Logo" />
      </Logo>
      <Nav>
       <a href="/"> <PushButton onClick={() => scrollToSection("inicio")} >INICIO</PushButton> </a>
       <a href="/sobreNosotros"> <PushButton onClick={() => scrollToSection("sobre-nosotros")}>SOBRE NOSOTROS</PushButton> </a> 
       <a href="/actividades"> <PushButton onClick={() => scrollToSection("actividades")}>ACTIVIDADES</PushButton> </a> 
       <a href="/curiosidades"> <PushButton onClick={() => scrollToSection("curiosidades")}>CURIOSIDADES</PushButton> </a> 
       <a href="/calendario"> <PushButton onClick={() => scrollToSection("calendario")}>CALENDARIO</PushButton> </a> 
      </Nav>
    </HeaderContainer>
  );
};

export default Header;