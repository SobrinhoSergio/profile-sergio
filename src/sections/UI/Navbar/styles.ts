import styled from "styled-components";

export const Navbar = styled.nav`
  background: ${(props) => props.theme.colors.bgPanel};
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s;
  width: 100%;

  a {
    font-weight: 600;
    display: inline-block;
    color: var(--grey);
    font-size: 1.5rem;
    padding: 10px 0;
    width: 100%;
    text-transform: uppercase;
  }

  a.active {
    background-color: var(--color-headings);
    transition: all 0.3s;
    color: var(--white);
    border-radius: 3px;
  }
`;
