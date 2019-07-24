import { css } from 'styled-components';

export const media = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

export const margin = ({ margin }) => {
  if (!margin) {
    return '';
  }
  if (typeof margin == 'string') {
    return css`
      margin: ${margin};
    `;
  }

  return css`
    ${margin.top ? `margin-top: ${margin.top}` : `margin-top: 0`};
    ${margin.right ? `margin-right: ${margin.right}` : `margin-right: 0`};
    ${margin.bottom ? `margin-bottom: ${margin.bottom}` : `margin-bottom: 0`};
    ${margin.left ? `margin-left: ${margin.left}` : `margin-left: 0`};
  `;
};

export const padding = ({ padding }) => {
  if (!padding) {
    return '';
  }
  if (typeof padding == 'string') {
    return css`
      padding: ${padding};
    `;
  }

  return css`
    ${padding.top ? `padding-top: ${padding.top}` : `padding-top: 0`};
    ${padding.right ? `padding-right: ${padding.right}` : `padding-right: 0`};
    ${padding.bottom ? `padding-bottom: ${padding.bottom}` : `padding-bottom: 0`};
    ${padding.left ? `padding-left: ${padding.left}` : `padding-left: 0`};
  `;
};

export const border = ({ border }) => {
  if (!border) {
    return '';
  }
  if (typeof border == 'string') {
    return css`
      border: ${border};
    `;
  }

  return css`
    ${border.top ? `border-top: ${border.top}` : `border-top: 0`};
    ${border.right ? `border-right: ${border.right}` : `border-right: 0`};
    ${border.bottom ? `border-bottom: ${border.bottom}` : `border-bottom: 0`};
    ${border.left ? `border-left: ${border.left}` : `border-left: 0`};
    ${border.radius ? `border-radius: ${border.radius}` : ``};
  `;
};

export const textStyles = ({ align = 'left', color = '#333', weight = 'normal', bold }) => css`
  ${!align ? '' : `text-align: ${align}`};
  ${!color ? '' : `color: ${color}`};
  ${!weight ? '' : `font-weight: ${weight}`};
  ${!bold ? '' : `font-weight: 700`};
`;
