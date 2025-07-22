import React from 'react';
import styled from 'styled-components';

// ========== CONTENEDORES PRINCIPALES ==========
export const Container = styled.div`
  background-color: #1b2d4f;
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

// ========== TÍTULO ==========
export const Title = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  background-color: #c0392b;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

// ========== TEXTO AZUL ==========
export const BlueBox = styled.div`
  background-color: #373cc9;
  color: white;
  max-width: 600px;
  padding: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`;

// ========== GALERÍA DE FOTOS ==========
export const Gallery = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageBox = styled.div`
  position: relative;
  border: 3px solid white;
  max-width: 300px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #1b2d4f;
    color: white;
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;