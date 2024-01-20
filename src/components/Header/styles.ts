import { styled } from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme["base-profile"]};
  max-height: 18.5rem;
  justify-content: space-between;
  padding-bottom: 1.5rem;

  & > img {
    padding: 1rem
  }

  @media (max-width: 1280px) {
    justify-content: center;
    padding-top: 1.5rem;
    .sideImages {
      display: none;
    }
  }
`

export const LogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;


  & img {
    max-width: 2.8125rem;
    max-height: 2.5rem;
  }
  
  & span {
    color: ${(props) => props.theme["blue-300"]};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 
  }

`