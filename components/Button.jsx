import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const StyledButton = styled.button`
  background-color: ${Colors.blue} ;
  border: ${Colors.blue};
  border-radius: 5px;
  color: white;
  font-size: 14px;
  padding: 10px 10px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    opacity: 0.9;
  }
  max-width: 100px;
  justify-self: end;
`;

export default function Button(props) {
  return (
    <StyledButton onClick={props.onClick}>
      {props.button}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired,
};
