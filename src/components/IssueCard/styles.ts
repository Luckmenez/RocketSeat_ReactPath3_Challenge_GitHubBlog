import styled from "styled-components";


export const IssueCardContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--Base-Post, #112131);
  flex-shrink: 0;
  padding: 2rem;

  &:hover {
    cursor: pointer;
    outline: 1px solid ${(props) => props.theme["base-label"]};
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`

export const IssueCardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & h4 {
    color: var(--Base-Title, #E7EDF4);
    font-family: Nunito;
    font-size: 1.33rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  span {
    color: var(--Base-Span, #7B96B2);
    font-family: Nunito;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    white-space: nowrap;
  }
`

export const IssueCardDescription = styled.div`
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  max-width: 100%;
  margin-top: 1.33rem;
  height: 6rem;
  overflow: hidden;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-overflow: ellipsis;
`

