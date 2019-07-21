import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media, margin, padding, border } from '../helpers';

const flexStyles = ({
  width = '100%',
  height = '100%',
  direction = null,
  wrap = null,
  flow = null,
  justify = null,
  alignItems = null,
  alignContent = null,
}) => css`
  ${!width ? '' : `width: ${width}`};
  ${!height ? '' : `height: ${height}`};
  ${!direction ? '' : `flex-direction: ${direction}`};
  ${!wrap ? '' : `flex-wrap: ${wrap}`};
  ${!flow ? '' : `flex-flow: ${flow}`};
  ${!justify ? '' : `justify-content: ${justify}`};
  ${!alignItems ? '' : `align-items: ${alignItems}`};
  ${!alignContent ? '' : `align-content: ${alignContent}`};
`;

const FlexContainer = styled.div`
  display: ${({ inline }) => (!inline ? `` : 'inline-')}flex;
  ${flexStyles};
  ${padding};
  ${margin};
  ${border};
  @media (min-width: ${media.tablet}px) {
    ${({ tablet = { width: false, height: false } }) => css`
      ${flexStyles(tablet)};
      ${padding(tablet)};
      ${margin(tablet)};
      ${border(tablet)};
    `};
  }
  @media (min-width: ${media.desktop}px) {
    ${({ desktop = { width: false, height: false } }) => css`
      ${flexStyles(desktop)};
      ${padding(desktop)};
      ${margin(desktop)};
      ${border(desktop)};
    `};
  }
`;

export default FlexContainer;

FlexContainer.propTypes = {
  inline: PropTypes.bool,
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  desktop: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flow: PropTypes.string,
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
};
