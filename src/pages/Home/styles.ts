import { styled } from "styled-components";


export const HomeContainer = styled.div`
  
`

export const IssuesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

