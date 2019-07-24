import React from 'react';
import styled, { css } from 'styled-components';
import { media, textStyles } from '../helpers';

const initialTextProps = { align: false, color: false, weight: false, bold: false };

const defaultRules = () => css`
  ${textStyles};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = initialTextProps }) => css`
      ${textStyles(tablet)};
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = initialTextProps }) => css`
      ${textStyles(desktop)};
    `};
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  ${defaultRules};
`;
const H2 = styled.h2`
  font-size: 1.75rem;
  ${defaultRules};
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  ${defaultRules};
`;
const H4 = styled.h4`
  font-size: 1.25rem;
  ${defaultRules};
`;
const H5 = styled.h5`
  font-size: 1rem;
  ${defaultRules};
`;
const H6 = styled.h6`
  font-size: 0.75rem;
  ${defaultRules};
`;

export default function Title({ hierarchy, ...props }) {
  switch (hierarchy) {
    case '2':
      return <H2 {...props} />;
    case '3':
      return <H3 {...props} />;
    case '4':
      return <H4 {...props} />;
    case '5':
      return <H5 {...props} />;
    case '6':
      return <H6 {...props} />;
    default:
      return <H1 {...props} />;
  }
}
