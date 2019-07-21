import React from "react";
import styled, { css } from "styled-components";
import Link from "../atoms/link";

export default function NavigationLink({ active, label, ...props }) {
  return (
    <NavigationLinkUI active={active} {...props}>
      {label}
    </NavigationLinkUI>
  );
}

const NavigationLinkUI = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  ${({ active = false }) =>
    active
      ? css`
          background-color: #e6e6e6;
        `
      : ""};
  padding: 0 1.5rem;
`;
