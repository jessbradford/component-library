import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(to right, #9fccfc 35%, #0E6EB8 );
  border-radius: 10px;
  color: white;
  font-size: 14px;
  padding: 10px 25px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  .button:hover {
    background-color: #EE82EE;
    color: white;
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
