import styled from "styled-components";

export const About = styled.main`
  padding: 120px 0;

  .sobre-min {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .profile-pic {
    border-radius: 50%;
    margin: 0 auto 2rem auto;
  }

  .descricao {
    width: 70%;
    text-align: center;
  }

  .sociais ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
  }

  .sociais ul li {
    transition: transform 0.5s;
  }

  .sociais ul li:hover {
    transform: translate(0px, -7px);
    transition: transform 0.5s;
  }

  .sociais ul li a {
    font-size: 4rem;
    color: var(--color-headings);
  }

  @media (max-width: 700px){
    .descricao {
      width: 100%;
    }
     .sociais ul{
      justify-content: space-between;
  }
   }
`;
