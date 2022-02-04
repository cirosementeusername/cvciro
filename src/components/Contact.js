import styled from "styled-components"



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  border: 1px solid #fff;
  h2 {text-align: center};
  width:100% ; `




const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  label {
    width: 100px;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  background-color: #2f00ff;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;




const Contact = () => {
  return (
    <Wrapper>
        <h2>Entra in contatto con me</h2>

                <InputContainer className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" />
                </InputContainer>

                <InputContainer className="form-group">
                    <label htmlFor="name">Cognome:</label>
                    <input type="text" name="text" id="text" />
                </InputContainer>

                <InputContainer className="form-group">
                    <label htmlFor="text">Richiesta:</label>
                    <input type="text" name="password" id="text" />
                </InputContainer>
                
                <InputWrapper>
                    <select name="soddisfazione">
                        <option value="">Seleziona</option>
                        <option value="">Poco Soddisfatto</option>
                        <option value="">Abbastanza Soddisfatto</option>
                        <option value="">Molto Soddisfatto</option>
                    </select>
                </InputWrapper>


      <WrapperButton>
        <Button>Submit</Button>
      </WrapperButton>






    </Wrapper>
  )
}

export default Contact