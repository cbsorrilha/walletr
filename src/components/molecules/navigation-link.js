import React from 'react';
import styled, { css } from 'styled-components';
import FlexItem from '../atoms/flex-item';
import Link from '../atoms/link';

export default function NavigationLink({ active, label, ...props }) {
  return (
    <NavigationLinkUI active={active}>
      <Link {...props}>{label}</Link>
    </NavigationLinkUI>
  );
}

const NavigationLinkUI = styled(FlexItem)`
  height: 100%;
  display: flex;
  align-items: center;
  ${({ active = false }) =>
    active
      ? css`
          background-color: #e6e6e6;
        `
      : ''};
  padding: 0 1.5rem;
`;
