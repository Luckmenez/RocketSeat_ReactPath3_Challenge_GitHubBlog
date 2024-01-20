import { styled } from "styled-components";

export const ProfileFooterContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;

  & > div {
    display: flex;
    gap: 1.5rem;
  }

  .card__foooter--snacks {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    & > div {
    flex-direction: column;
  }
  }
`