import styled from "styled-components"



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3{align-self: center};
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #fff;
  width :100% ;
`


const SpokenLanguages = () => {
  return (
    <Wrapper>
      <h3>LINGUE PARLATE</h3>
      <ol>
        <li>ITALIANO
          <ol>Madrelingua</ol>
        </li>
        <li>INGLESE
          <ol>Livello B1</ol>
        </li>
        <li>FRANCESE
          <ol>Livello B1</ol>
        </li>
      
      </ol>
    </Wrapper>
  )
}

export default SpokenLanguages