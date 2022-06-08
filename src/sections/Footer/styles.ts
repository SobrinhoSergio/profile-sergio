import styled from "styled-components";
import { bg2 } from "../../assets";

export const Footer = styled.footer` 

  .dev {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    align-items: center;
    background: ${(props) => props.theme.colors.bgPanel};
  }

  .dev p{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 10px;
    font-size: 2.0rem;
    
  }

  .dev p img{
    width: 3.0rem;
    animation: spinning 5s infinite linear;
  }

  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media (max-width: 700px){
    .dev p{
      font-size: 1.5rem;
    }
`;
