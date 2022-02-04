import telettubies from '../imgages/teletubbies.png';
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 8px;
padding: 20px;
align-items: center;
width: 300px;`


const Card = () => {
    return (
            <Wrapper>
                <img src={telettubies} className="card-img-top" alt="..." />
                     <div className="card-body">
                         <h5 className="card-title">CIRO SEMENTE</h5>
                          <p className="card-text">Linkedin contact:</p>
                         <a href="https://www.linkedin.com/in/ciro-semente-6aab4b15a/" className="btn btn-primary">Ciro</a>
                    </div>
            </Wrapper>
    )
  }
  
  export default Card


/*function Card () {

    return (

        <div className="col">

            <div className="card" style={{width:"200px" , textAlign:"center"}}>
                <img src={telettubies} className="card-img-top" alt="..." />
                     <div className="card-body">
                         <h5 className="card-title">Consulente IT</h5>
                          <p className="card-text">Linkedin contact:</p>
                         <a href="https://www.linkedin.com/in/ciro-semente-6aab4b15a/" className="btn btn-primary">Ciro</a>
                    </div>
            </div>

        </div>
    )
}

export default Card*/