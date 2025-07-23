import React from 'react';
import styled from 'styled-components';

// ========== CONTENEDORES PRINCIPALES ==========
export const Container = styled.div`
  background-color: #7a9fbf;
  font-family: Arial, sans-serif;
  color: white;
  min-height: 100vh;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #0f1e3a;
  font-weight: bold;
  gap: 2rem;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/ruta/del/fondo.png') no-repeat center;
  background-size: cover;
  padding: 3rem 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 9rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-family: Open Sans, Arial;
  font-weight: bold;
  color: #ffffff;
  align-self: flex-start; 
  padding-left: 1rem; 
  text-align: left; 

  @media (max-width: 768px) {
    align-self: center;
    text-align: center;
    padding-left: 0;
  }
`;

export const BlueBox = styled.div`
  background-color: #5158c7;
  color: white;
  max-width: 600px;
  padding: 1.5rem;
  line-height: 1.6;
  font-size: 1.3rem;
  font-family: Open Sans, Arial;
`;

export const Gallery = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

// ========== IMAGEBOX CON TIPOS TYPESCRIPT ==========
interface ImageBoxProps {
  borderColor?: string;
  barColor?: string;
  textBgColor?: string;
  textColor?: string;
  maxHeight?: string;
}

export const ImageBox = styled.div<ImageBoxProps>`
  position: relative;
  border: 5px solid ${({ borderColor }) => borderColor || '#6466af'};
  max-height:${({ maxHeight }) => maxHeight || '330px'};
  max-width: 300px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  img:not(.close-icon,.ios-icon,.expand-icon) {
    width: auto;
    height: auto;
    display: block;
  }

  span:not(.close-icon,.ios-icon,.expand-icon) {
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ textBgColor }) => textBgColor || '#1b2d4f'};
    color: ${({ textColor }) => textColor || 'white'};
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
  }

  .close-icon-container {
    background-color: ${({ barColor }) => barColor || '#acdedc'};
    height: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }

  .close-icon {
    height: 100%;
    object-fit: contain;
  }
  
  .ios-container {
    background-color: #3954a3;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden !important;
    cursor: pointer;
    z-index: 10;
    padding: 2px 4px; /* Más padding */
    box-sizing: border-box;
  }

  .ios-icon {
    height: 100%;
    object-fit: contain;
  }

  .expand-icon {
    height: 100%;
    object-fit: contain;
  }
`;