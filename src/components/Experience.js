import styled from "styled-components"



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  border: 1px solid #fff;
  h3{align-self: center} `


const Experience = () => {
  return (
    <Wrapper>
      <h3>ESPERIENZE LAVORATIVE</h3>
      <ul>
        <li>2021/22 Novembre (2021)- attuale: Tirocinio formativo presso Antlia s.r.l. principali attività svolte in programmazione JS e React.</li>
        <li>2018/2019 Settembre(2018)- Marzo(2019): Programmazione editoriale, presso Università Federico II di Napoli.</li>
        <li>2017/2018 Settembre(2017)-MAggio(2018): Responsabile Amministrativo presso lo studio associato Caracciolo 15, sito in Napoli alla via Caracciolo n.15.</li>
        <li>2016/2017 Febbraio(2016)-MArzo(2017): Contabile junior prsso lo studio Dott. Commercialista Calvino sito in Via Michelangelo Schipa 44 NA.</li>
      </ul>
    </Wrapper>
  )
}

export default Experience