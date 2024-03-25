import styled from "styled-components";

export const IssueDescriptionCardContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  gap: 2rem;
  margin-top: -3.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme["base-background"]};

  @media (max-width: 1280px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: ${(props) => props.theme["base-profile"]};
    margin: 0.5rem;
    width: 97%;
  }
`