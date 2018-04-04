import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

const StyledIcon = styled(FontAwesomeIcon)`
  color: whitesmoke;
  position: absolute;

  @media(min-width: 600px) {
    padding-left: 205px;
    padding-bottom: 280px;
  }

  @media(max-width: 600px) {
    padding-left: 5px;
    padding-bottom: 280px;
  }
`;

export default function StarIcon(props) {
  return (
    <StyledIcon
      icon={faStar}
      onClick={props.onClick}
      onHover={props.onHover}
      size="2x"
      style={{
        color: props.starFilled ? 'yellow' : 'whitesmoke',
      }}
    />
  );
}

StarIcon.propTypes = {
  starFilled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};
