import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: radial-gradient(at bottom, #330051, #000);
  height: 100%;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
`;

const StyledTitle = styled.h1`
  color: #FFF;
  text-align: center;
`;

export default function Somnium(props) {
  return (
    <StyledDiv>
      <StyledTitle>
        {props.webtitle}
      </StyledTitle>
    </StyledDiv>
  );
}

Somnium.propTypes = {
  webtitle: PropTypes.string.isRequired,
};
