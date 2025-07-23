import React from 'react';
import { Container, Navbar, ContentWrapper, MainSection, Title, BlueBox, Gallery, ImageBox } from "./styles/namepage.styles";

const SobreNosotros: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <div>INICIO</div>
        <div>SOBRE NOSOTROS</div>
        <div>ACTIVIDAESS</div>
        <div>CURIOSIDAESS</div>
        <div>CALENDARIO</div>
      </Navbar>

      <MainSection>
        <Title>sobre nosotros</Title>
        <ContentWrapper>
          <BlueBox>
            Pludanis verake moltur denali qinsor embelak, feroz lintrum valaque sin orvet.
            Lomis entara quelun festar bidorel yunkan, drevos camina luntri sabenquix. <br /><br />
            Zintaro vexus prelundar. <br />
            Flenquis moradax inverto kelmun jaralis. Quretin danvo elaxtrum fordenique la surivax colmen, trovalti grevaso en lurën quantisar.
          </BlueBox>

          <Gallery>
            <ImageBox 
              borderColor="#6466af" 
              maxHeight='327px'              
            >
              <div className="close-icon-container">
                <img src="/X.png" className="close-icon" alt="cerrar" />
              </div>
              <img src="/CONIEE.png" alt="grupo frente a edificio" />
            </ImageBox>

            <ImageBox 
              borderColor="#3954a3" 
              maxHeight='100%'
            >
              <div className="ios-container">
                <img src="/load.png" className="ios-icon" alt="cerrar" />
                <img src="/expand.png" className="expand-icon" alt="cerrar" />
              </div>
              <img src="/Fotorand1.png" alt="grupo con bandera" />
            </ImageBox>
          </Gallery>
        </ContentWrapper>
      </MainSection>
    </Container>
  );
};

export default SobreNosotros;