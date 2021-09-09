import styled from 'styled-components';

export const themes = {
  bn: {
    bg: '#fff',
    text: '#000',
    accent: '#4f4f4f',
    link: '#000',
  },
  dark: {
    bg: '#002b36',
    text: '#839496',
    accent: '#268bd2',
    link: '#93a1a1',
  },
  light: {
    bg: '#fdf6e3',
    text: '#657b83',
    accent: '#268bd2',
    link: '#93a1a1',
  },
};

export const Wrapper = styled.div`
  font-family: Domine, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;

  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};

  // animate the change of colors, just to have a smoother change
  transition: all .3s;
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
  font-size: .9rem;
  width: 100%;
  margin-bottom: 3.5vh;
`;

export const Main = styled.main`
  padding: 0 4vw;

  display: flex;
  flex-direction: column;

  margin: 3vh 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // from 2nd child onwards
  p:nth-child(n + 2) {
    margin-top: 0;
  }

  padding: 0 6vw 0 8vw;
`;

export const Hello = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 1.5vh;
  color: ${props => props.theme.accent};
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
  font-size: .95rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 4vh;
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

export const TogglesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Toggle = styled.i`
  cursor: pointer;
  font-size: 2em;
  display: ${props => props.isActive ? 'block' : 'none'}
`;

export const ToggleLight = styled(Toggle)`
  //transition: .3s;
  //transform: rotate(0deg);
  //
  //&:hover {
  //  transform: rotate(45deg);
  //}
`

export const ToggleDark = styled(Toggle)``;
