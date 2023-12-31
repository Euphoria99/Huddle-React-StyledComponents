import SocialIcons from "./SocialIcons";
import { StyledContainer } from "./styles/Container.styled";
import { StyledFlex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledContainer>
        <img src="./images/logo_white.svg" alt="" />
        <StyledFlex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </StyledFlex>
        <p>&copy; {currentYear} Huddle. All rights reserved</p>
      </StyledContainer>
    </StyledFooter>
  );
}
