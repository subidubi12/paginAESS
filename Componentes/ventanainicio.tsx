import { Fondo, Titulo,ContenedorVentanas, Ventana, BotonCerrar,BarraVentana,Imagen,Pie } from "../Componentes/styles/namepage.styles"; 

export default function Ventanainicio() {
  return (
    <Fondo>
      <Titulo>ventana de inicio</Titulo>
      <ContenedorVentanas>
        <Ventana>
          <BarraVentana>
            <BotonCerrar />
          </BarraVentana>
          <Imagen src="/EVENTOS.jpg" alt="eventos" />
          <Pie>próximos eventos</Pie>
        </Ventana>
        <Ventana>
          <BarraVentana>
            <BotonCerrar />
          </BarraVentana>
          <Imagen src="/RECIENTES.jpg" alt="calendario" />
          <Pie>publicaciones recientes</Pie>
        </Ventana>
      </ContenedorVentanas>
    </Fondo>
  );
}
