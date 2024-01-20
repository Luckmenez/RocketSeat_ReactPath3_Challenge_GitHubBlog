import { HeaderContainer, LogoTitle } from "./styles";
import effectLeft from "../../assets/effect_left.svg";
import effectRight from "../../assets/effect_right.svg";
import terminalSolid from "../../assets/terminal_solid.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img className="sideImages" src={effectLeft} />
      <LogoTitle>
        <img src={terminalSolid} />
        <span>GITHUB BLOG</span>
      </LogoTitle>
      <img className="sideImages" src={effectRight} />
    </HeaderContainer>
  );
}
