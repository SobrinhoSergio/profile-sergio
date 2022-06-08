import styled from "styled-components";

export const ScrollUp = styled.span`
  background: var(--color-headings);
  display: inline-flex;
  position: fixed;
  right: 1rem;
  bottom: 30px;
  opacity: 0.8;
  border-radius: 0.25rem;
  z-index: 99;
  cursor: pointer;

  .icon-top {
    padding: 0.5rem;
    font-size: 3rem;
    color: var(--white);
  }
`;
