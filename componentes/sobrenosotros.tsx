import { Container,Navbar,MainSection,Title,BlueBox,Gallery,ImageBox } from "./styles/namepage.styles";
const SobreNosotros = () => {
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

        <BlueBox>
          Pludanis verake moltur denali qinsor embelak, feroz lintrum valaque sin orvet.
          Lomis entara quelun festar bidorel yunkan, drevos camina luntri sabenquix. <br /><br />
          Zintaro vexus prelundar. <br />
          Flenquis moradax inverto kelmun jaralis. Quretin danvo elaxtrum fordenique la surivax colmen, trovalti grevaso en lurën quantisar.
        </BlueBox>

        <Gallery>
          <ImageBox>
            <img src="/CONIEE.png" alt="grupo frente a edificio" />
          </ImageBox>

          <ImageBox>
            <img src="/Fotorand1.png" alt="grupo con bandera" />
            <span>foto del drim tim</span>
          </ImageBox>
        </Gallery>
      </MainSection>
    </Container>
  );
};

export default SobreNosotros;
