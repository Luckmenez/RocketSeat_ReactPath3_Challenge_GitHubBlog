import { styled } from "styled-components";

export const ProfileCardContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  gap: 2rem;
  margin-top: -3.5rem;
  display: flex;
  position: relative;
  background: ${(props) => props.theme["base-background"]};

  img {
    max-width: 10rem;
  }

  @media (max-width: 1280px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: ${(props) => props.theme["base-profile"]};
    margin: 0.5rem;
    width: 97%;

    img {
      max-width: 100%;
      display: flex;
    }
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  

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

  a {
    display: flex;
    text-decoration: none;    
    color: ${(props) => props.theme["blue-300"]};
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
`

export const ProfileDescription = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

export const ProfileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`