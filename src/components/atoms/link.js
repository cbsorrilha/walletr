import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const color = ({ variant }) => {
  switch (variant) {
    case 'dark':
      return css`
        color: #333333;
        &:hover {
          color: #666666;
        }
        ${({ active = false }) => active ? css`color: #666666;` : ""};
      `;

    case 'light':
      return css`
        color: #eeeeee;
        &:hover {
          color: #cccccc;
        }
        ${({ active = false }) => active ? css`color: #cccccc;` : ""};
      `;

    default:
      return css`
      color: #0db14b;
      &:hover {
        color: #1cee6c;
      }
      ${({ active = false }) => active ? css`color: #1cee6c;` : ""};
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
