import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Title>
      Wallet<Green>r</Green>
    </Title>
  );
}

const Title = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 2rem;
  color: grey;
  letter-spacing: 0.001rem;
`;

const Green = styled.span`
  color: #0db14b;
  font-family: 'Righteous', cursive;
`;
