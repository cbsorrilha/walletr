import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media, margin, padding, border } from '../helpers';

const flexItemStyles = ({
  width = 'auto',
  height = 'auto',
  minWidth = null,
  maxWidth = null,
  minHeight = null,
  maxHeight = null,
  order = null,
  grow = null,
  shrink = null,
  basis = null,
  flex = null,
  align = null,
}) => css`
  width: ${width};
  height: ${height};
  ${!minWidth ? '' : ` min-width: ${minWidth}`};
  ${!minHeight ? '' : ` min-height:: ${minHeight}`};
  ${!maxWidth ? '' : ` max-width: ${maxWidth}`};
  ${!maxHeight ? '' : ` max-height:: ${maxHeight}`};
  ${!order ? '' : `order: ${order}`};
  ${!grow ? '' : `flex-grow: ${grow}`};
  ${!shrink ? '' : `flex-shrink: ${shrink}`};
  ${!basis ? '' : `flex-basis: ${basis}`};
  ${!flex ? '' : `flex: ${flex}`};
  ${!align ? '' : `align-self: ${align}`};
`;

const FlexItem = styled.div`
  ${flexItemStyles};
  ${padding};
  ${margin};
  ${border};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) =>
    css`
        ${flexItemStyles(tablet)};
        ${padding(tablet)};
        ${margin(tablet)};
        ${border(tablet)};
      `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) =>
    css`
        ${flexItemStyles(desktop)};
        ${padding(desktop)};
        ${margin(desktop)};
        ${border(desktop)};
      `};
  }
`;

export default FlexItem;

FlexItem.propTypes = {
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  order: PropTypes.string,
  grow: PropTypes.string,
  shrink: PropTypes.string,
  basis: PropTypes.string,
  flex: PropTypes.string,
  align: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
};
