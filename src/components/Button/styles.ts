import styled from "styled-components";

export const Btn = styled.button`
  border: 1px solid var(--color-headings);
  background-color: var(--color-headings);
  padding: 10px 30px;
  margin: 40px 0;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: #0f7fff;
    transition: all 0.3s;
  }

  a {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  @media (max-width: 700px){
   a{ 
     font-size: 2.5rem;
   }
  }

`;
