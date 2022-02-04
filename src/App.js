import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Education from "./components/Education";
import styled from "styled-components"
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SpokenLanguages from "./components/SpokenLanguages";
import PersonalData from "./components/PersonalData";
import Contact from "./components/Contact";

const Wrapper = styled.div`
display: flex;
flex-direction: row;`

const WrapperContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(to bottom right, #ffce00, #fe4880);`







function App() {
  return (
    <>
      <Navbar />

      <div className="container" >
        <h1 style={{ textAlign: "center" }}>CV online</h1>
        <hr />
        <Wrapper>
          <Card />
          <WrapperContainer>
            <PersonalData/>
            <Education />
            <Experience />
            <Skills />
            <SpokenLanguages />
            <Contact/>
          </WrapperContainer>
        </Wrapper>
      </div>
    </>
  );
}

export default App;
