import styled from "styled-components";

export const Header = styled.header`
  background: ${(props) => props.theme.colors.bg};

  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  @media (max-width: 700px) {
    position: static;

    .header {
      padding: 20px 0;
    }

    .navbar {
      display: none;
    }

    .dark-mode {
      display: none;
    }
  }
`;
