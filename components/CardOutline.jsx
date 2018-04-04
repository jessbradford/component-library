import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledOutline = styled.div`
  border: 1px solid gainsboro;

  @media(min-width: 600px) {
    border-radius: 2px;
    box-shadow: 2px 2px #f0f0f0;
    height: 325px;
    width: 250px;
  }

  @media(max-width: 600px) {
    height: 150px;
    width: auto;
  }
`;

export default function CardOutline(props) {
  return (
    <StyledOutline>
      { props.children }
    </StyledOutline>
  );
}

CardOutline.propTypes = {
  children: PropTypes.element.isRequired,
};
