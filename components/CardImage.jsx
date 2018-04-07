import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.div`
  @media(min-width: 600px) {
    width: 250px;
    height: 160px;
  }

  @media(max-width: 600px) {
    width: 137px;
    height: 150px;
    grid-row: 1 / -1;
  }
`;

export default function CardImage(props) {
  return (
    <StyledImage>
      {props.image}
    </StyledImage>
  );
}

CardImage.propTypes = {
  image: PropTypes.func.isRequired,
};
