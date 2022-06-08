import styled from "styled-components";

export const Phrase = styled.div`
  padding: 50px 0;

  h3 {
    font-size: 3.5rem;
    text-align: center;
    font-weight: normal;
    font-style: italic;
    text-align: center;
  }

  h3 .destaque {
    text-transform: uppercase;
  }

  @media (max-width: 700px){
    h3 {
      font-size: 2.5rem;
    }
  }
`;
