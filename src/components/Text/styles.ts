import styled from "styled-components";

export const Text = styled.p`
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  color: var(--color-text);
  
  @media (max-width: 700px){

    font-size: 1.9rem;
        line-height: 2.5rem;
  }
`;
