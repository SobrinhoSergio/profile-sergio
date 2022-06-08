import styled from "styled-components";
import { bg5 } from "../../assets";

export const Home = styled.main`
  background-image: url(${bg5});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .principal {
    text-align: center;
    color: var(--grey);
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .principal h2 {
    font-size: 3.5rem;
    font-style: italic;
  }

  @keyframes rotacao {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(180deg);
    }
  }

  .animation {
    animation: rotacao 2s infinite linear;
  }

  .principal h1 {
    font-size: 3.5rem;
  }

  .mouse {
    width: 25px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 20px;
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .mouse-wheel {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin: auto;
    animation: move-wheel 1s linear infinite;
  }

  @keyframes move-wheel {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(1rem);
    }
  }

  @media (max-width: 700px) {
    .principal h2 {
      font-size: 2.5rem;
      margin: 20px 0;
    }

    .principal h1 {
      font-size: 2rem;
    }
  }
`;
