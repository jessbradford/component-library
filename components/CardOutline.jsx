import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const StyledOutline = styled.div`
  border: 1px solid ${Colors.grey};

  @media(min-width: 600px) {
    border-radius: 2px;
    box-shadow: 2px 2px ${Colors.boxshadowgrey};
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
