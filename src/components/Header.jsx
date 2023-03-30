import about from "../json/about.json";
import { HeaderContainer, NavLinkWrapper, NavContainer } from "../styledcomponents/Header";


export default function Header() {
  return (
    <>
    <HeaderContainer>
    <h1>My Portfolio</h1>
    </HeaderContainer>
    <NavContainer>
      <NavLinkWrapper href={about.github}><div>GitHub</div></NavLinkWrapper>
      <NavLinkWrapper href={about.linkedin}><div>LinkedIn</div></NavLinkWrapper>
    </NavContainer>
    </>
  );
}