import { styled } from "styled-components";

export const SnackContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => props.theme["base-span"]};
`