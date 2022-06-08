import styled from "styled-components";

export const Ability = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;

  .habilidade {
    padding: 40px 20px;
    background: ${(props) => props.theme.colors.bgPanel};
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.5s;
  }

 .habilidade:hover {
    transform: translate(0px, -9px);
    transition: transform 0.5s;
  }

  .conhecimento {
    text-align: center;
  }

  .conhecimento .icon {
    font-size: 6rem;
    color: var(--color-headings);
    margin: 0 auto;
  }

  .conhecimento h3 {
    font-size: 3rem;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  .conhecimento span i {
    font-size: 2.8rem;
    color: var(--color-headings);
  }
  
  @media (max-width: 700px){

    grid-template-columns: 100%;
  }

`;
