import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media, margin, padding } from '../helpers';

const variants = {
  primary: {
    backgroundColor: '#2164d9',
    backgroundHover: '#184ba2',
    color: '#FFF',
  },
  danger: {
    backgroundColor: '#FF1C16',
    backgroundHover: '#E10600',
    color: '#FFF',
  },
  default: {
    backgroundColor: '#A6A6A6',
    backgroundHover: '#969696',
    color: '#FFF',
  },
};

const disabled = ({ disabled }) => (disabled ? 'opacity: 0.8;' : '');

const variantBackgroundColorHover = ({ variant }) => {
  const { backgroundHover } = variants[variant];
  return backgroundHover
    ? css`
        background-color: ${variants[variant].backgroundHover};
      `
    : '';
};

const variantBackgroundColor = ({ variant }) => {
  const { backgroundColor } = variants[variant];
  return backgroundColor
    ? css`
        background-color: ${variants[variant].backgroundColor};
      `
    : '';
};

const variantColor = ({ variant }) => {
  const { color } = variants[variant];
  return color
    ? css`
        color: ${variants[variant].color};
      `
    : '';
};

const buttonStyles = ({ width = '100%', maxWidth, variant = 'default' }) => css`
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 0.2rem;
  cursor: pointer;
  ${width ? `width: ${width}` : ''};
  ${maxWidth ? `max-width: ${maxWidth}` : ''};
  ${variantBackgroundColor({ variant })};
  ${variantColor({ variant })};
  &:hover {
    ${variantBackgroundColorHover({ variant })};
  }
`;

const ButtonUI = styled.button`
  ${buttonStyles};
  ${padding};
  ${margin} ${disabled};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) => `
      ${padding(tablet)}
      ${disabled(tablet)}
      ${margin(tablet)}
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) => `
      ${padding(desktop)}
      ${disabled(desktop)}
      ${margin(desktop)}
    `};
  }
`;

export default ButtonUI;

ButtonUI.defaultProps = {
  variant: 'default',
  disabled: false,
};

ButtonUI.propTypes = {
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'danger']),
  disabled: PropTypes.bool,
};
