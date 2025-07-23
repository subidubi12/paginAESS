'use client';
import React from 'react';
import styled from 'styled-components';

export const Fondo = styled.div`
  background-color: #abc5fd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`;

export const ContenedorVentanas = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

export const Ventana = styled.div`
  width: 320px;
  background: white;
  border: 3px solid #5a5dff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const BarraVentana = styled.div`
  background: #b3d7ff;
  padding: 8px 12px;
  display: flex;
  justify-content: flex-end;
`;

export const BotonCerrar = styled.div`
  width: 16px;
  height: 16px;
  background: #ff5c5c;
  border-radius: 50%;
  cursor: pointer;
`;

export const Imagen = styled.img`
  width: 100%;
  height: auto;
`;

export const Pie = styled.div`
  text-align: center;
  padding: 12px;
  background: #2f2f91;
  color: white;
  font-weight: bold;
`;