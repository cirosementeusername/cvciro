import styled from "styled-components"



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #fff; 
  width :100% ;
  `
  

  const Personaldata = () => {
  return (
    <Wrapper>
        <table>
            <tr><td>INFORMAZIONI PERSONALI</td></tr>
            <tr><td>Data di nascita:</td><td>04/06/1991</td></tr>
            <tr><td>Domicilio:</td><td>Via Briante 37, Cernusco sul Naviglio, MI</td></tr>
            <tr><td>Residenza:</td><td>Via Ponte Della maddalena 147, Napoli, NA</td></tr>            
            <tr><td>Email:</td><td><a href="mailto:cirosemente@hotmail.it">cirosemente@hotmail.it</a></td></tr>
            <tr><td>Telefono:</td><td>3334089253</td></tr>
            <tr><td>Patente:</td><td>B, D, CQC</td></tr>
        </table>



    </Wrapper>
  )
}

export default Personaldata