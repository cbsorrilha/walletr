import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const color = ({ variant }) => {
  switch (variant) {
    case 'dark':
      return `
        color: #333333;
        &:hover {
          color: #666666;
        }
      `;

    case 'light':
      return `
        color: #eeeeee;
        &:hover {
          color: #cccccc;
        }
      `;

    default:
      return `
      color: #6A93db;
      &:hover {
        color: #2f65c4;
      }
    `;
  }
};

const linkStyles = css`
  font-family: 'Hind', sans-serif;
  text-decoration: none;
  cursor: pointer;
  ${color};
`;

const AnchorLink = styled.a`
  ${linkStyles};
`;

const RouterLink = styled(Link)`
  ${linkStyles};
`;

const LinkUI = ({ href, to, ...props }) => {
  if (!href && !to) {
    return <AnchorLink {...props} />;
  }
  if (!to) {
    <AnchorLink {...props} href={href} />;
  }
  return <RouterLink {...props} to={to} />;
};

export default LinkUI;
