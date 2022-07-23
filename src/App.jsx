import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";
import Contact from "./components/Contact";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 60% 0, 60% 100%, 0% 100%);
    background-color: black;
`;

const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
    background-color: black;
`;

const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
    background-color: black;
`;

const PriceShape = styled.div`
    ${Shape}
    clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
    background-color: black;
`;

const App = () => {


  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
    <Container>
        <Navbar />
        <Intro />
        <IntoShape />
    </Container>
    <Container>
      <Feature />
      <FeatureShape />
    </Container>
    <Container>
      <Service />
      {!smallScreen && <ServiceShape />}
    </Container>
    <Container>
      <Price />
      <PriceShape />
    </Container>
    <Container>
      <Contact />
      <Footer />
    </Container>
    </>

  );
};

export default App;