import styled from "styled-components";

interface INav {
  open: boolean;
}

export const StyledBurger = styled.div<INav>`
  width: 4rem;
  height: 4rem;
  z-index: 55;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
`;

export const Menus = styled.div<INav>`
  width: 4rem;
  height: 0.3rem;
  background: var(--grey);
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:nth-child(1) {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    transform: ${(props) =>
      props.open ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
