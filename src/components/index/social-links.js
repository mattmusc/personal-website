import * as React from 'react';
import styled from 'styled-components';


const links = [
  {
    icon: 'github',
    label: 'GitHub',
    link: 'https://www.github.com/mattmusc',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
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
    <div className="social-links">
      {links.map(({icon, label, link}) => (
        <SocialLink
          aria-label={label}
          href={link}
          key={label}
          rel="noreferrer"
          target="_blank"
          title={label}
        >
          <i aria-hidden="true" className={`fab fa-${icon}`}/>
        </SocialLink>
      ))}
    </div>
  );
};
