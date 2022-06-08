import styled from "styled-components";

interface INav {
  open: boolean;
}

export const Menu = styled.aside<INav>`
  position: fixed;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.bg};
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 44;

  .dark-mode {
    display: none;
  }

  .navbar {
    display: none;
  }

  .redes-sociais {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }

  .redes-sociais li a {
    font-size: 4rem;
    color: var(--color-headings);
  }

  @media (max-width: 700px) {
    .redes-sociais {
      display: none;
    }

    .navbar {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .navbar ul {
      width: 100%;
      height: 80vh;
    }

    .dark-mode {
      display: block;
      margin-top: 20px;
    }
  }
`;
