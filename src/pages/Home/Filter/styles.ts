import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.33rem;
  margin-bottom: 3rem;
  
  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1280px) {
    margin: 4.5rem 1rem 4.5rem 1rem;
  }
`

export const InputQuery = styled.input`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid var(--Base-Border, #1C2F41);
  background: var(--Base-Input, #040F1A);
  color: #FFFFFF;
`

