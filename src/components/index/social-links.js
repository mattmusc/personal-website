import * as React from 'react';
import styled from 'styled-components';


const links = [
  {
    icon: 'github',
    link: 'https://www.github.com/mattmusc',
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/matteomuscella/?locale=en_US',
  }
];

const SocialLink = styled.a`
  color: ${props => props.theme.grey};
  font-size: 2rem;
  
  &:hover {
    color: ${props => props.theme.orange};
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

export const SocialLinks = () => {
  return (
    <div>
      {links.map(({icon, link}) => (
        <SocialLink title={link} href={link}>
          <i className={`fab fa-${icon}`}/>
        </SocialLink>
      ))}
    </div>
  );
};

