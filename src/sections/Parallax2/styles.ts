import styled from "styled-components";
import { bg2 } from "../../assets";

export const Parallax = styled.section`
  background-image: url(${bg2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: color;
  background-attachment: fixed;
  height: 100vh;
`;
