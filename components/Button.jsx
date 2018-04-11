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
  padding: 10px 25px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Button(props) {
  return (
    <StyledButton className="button" onClick={props.onClick}>
      {props.buttonName}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
