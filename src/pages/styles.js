import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Domine, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;

  height: 100vh;

  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
`;

export const Header = styled.header`
  padding: 2vh 4vw;
  display: flex;

  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8vw;
  min-width: 60px;

  & > h1 {
    margin: 0;
    font-size: max(3rem, 6vw);
  }

  & > div {
    border-left: 2px solid ${props => props.theme.text};
    height: 70%;
    transform: translateY(25%);
  }
`;

export const Footer = styled.div`
  text-align: center;
  font-size: .8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 3.5vh;
`;

export const Main = styled.main`
  padding: 0 4vw;

  display: flex;
  flex-direction: column;

  margin: 5vh 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // from 2nd child onwards
  p:nth-child(n + 2) {
    margin-top: 0;
  }

  padding-left: 8vw;
`;

export const Hello = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 1.5vh;
`;

export const P = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 1vh 0;
`;

export const StackTitle = styled.h3`
  margin-top: 7vh;
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

export const TechStack = styled.p`
  line-height: 1.5;
`;

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 2vh;
`;

export const SocialLinkItemContainer = styled.div`
  &:not(:first-child) {
    margin-left: 2em;
  }

  transition: .3s;

  &:hover, &:hover > a {
    transform: scale(1.4, 1.4);
  }
`;

export const SocialLink = styled.a`
  color: ${props => props.theme.text};
`;

export const SocialLinkItem = styled.i`
  font-size: 2.8em;
`;