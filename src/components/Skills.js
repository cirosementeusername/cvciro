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
  
  
  const Skills = () => {
  return (
    <Wrapper>
      <h3>SKILLS</h3>
      <ul>
        <li>Buona conoscenza del pacchetto Office(word, excel, acces, power point).</li>
        <li>Programmazione editoriale (updating data).</li>
        <li>Conoscenze basilari in ambito front end developer(HTML, JavaScript e libreria open-source React.)</li>
      </ul>
    </Wrapper>
  )
}

export default Skills