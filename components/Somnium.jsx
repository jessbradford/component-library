import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';

const top = 'top: 0px;';

const StyledDiv = styled.div`
  height: 100%;
  left: 0px;
  position: fixed;
  ${top}
  width: 100%;
  background-image: radial-gradient(ellipse at bottom, #280144, black);

  .stars {
    z-index: 0;
  }
`;

const StyledTitle = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif');
  color: #FFF;
  font-family: 'Noto Serif', serif;
  font-size: 70px;
  margin: 40px;
  text-align: center;
`;
const Planet = styled.div`
  box-shadow:  -94px -31px 131px -51px white;
  margin: 0 auto;
  right: 0;
  left: 0;
  width: 258px;
  height: 258px;
  border-radius: 100%;
  z-index: 10;
  position: absolute;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png');
  background-size: 302px;
  background-position: 50%;
  animation: spin 120s infinite linear;
  @keyframes spin {
    0% {
      transform: rotateX(0deg) rotate(360deg)
    }
    100% {
      transform: rotateX(0deg) rotate(0deg)
    }
  }
`;

export default function Somnium(props) {
  return (
    <StyledDiv>
      <StyledTitle>
        {props.webtitle}
      </StyledTitle>
      <Planet />
      <Stars className="stars" />
    </StyledDiv>
  );
}

Somnium.propTypes = {
  webtitle: PropTypes.string.isRequired,
};
