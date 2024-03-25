import styled from "styled-components";


export const IssueDescriptionCardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IssueDescriptionCardHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    margin-left: 0.5rem;
  }
  

  h4 {
    color: ${(props) => props.theme["base-title"]};
    font-family: Nunito;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  .space_container {
    margin-right: 1rem;
  }

  svg {
    align-self: center;
  }

  a, div {
    display: flex;
    text-decoration: none;    
    color: ${(props) => props.theme["blue-300"]};
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    cursor: pointer;
  }
`