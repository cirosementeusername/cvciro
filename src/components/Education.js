import styled from "styled-components"



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  border: 1px solid #fff;
  h3{align-self: center} `


const Education = () => {
  return (
    <Wrapper>
      <h3>EDUCAZIONE</h3>
      <ul>
        <li>04/2021 Laurea Specialistica in Scienze Economiche Finanziarie, con votazione pari a 100/100 con lode , presso l'Università Parthenope di napoli.</li>
        <li>05/2018 Qualifica in Specialista Risorse Umane conseguito presso la scuola di Formazione Professionale: Idee Insieme.</li>
        <li>02/2018 Laurea di 1' livello in Economia e commercio, con votazione pari 85/100, presso Università di Napoli Parthenope.    </li>
      </ul>
    </Wrapper>
  )
}

export default Education