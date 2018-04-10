import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100%;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  background-image: radial-gradient(ellipse at bottom, #280144, black);
  z-index: 0;
`;
const Stars = styled.div`
  background-image:
    radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 1px),
    radial-gradient(white, rgba(255,255,255,.15) 2px, transparent 2px),
    radial-gradient(white, rgba(255,255,255,.1) 3px, transparent 3px),
    radial-gradient(white, rgba(255,255,255,.4) 1px, transparent 2px);
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  z-index: 2;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  @keyframes movestars {
    from {background-position:0 0;}
    to {background-position: -10000px 5000px;}
  }
  @-webkit-keyframes movestars {
    from { background-position: 0px 0px; }
    to { background-position: -10000px 5000px; }
  }
  -webkit-animation:movestars 300s linear infinite;
  animation:movestars 300s linear infinite;
`;

const StyledTitle = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300i');
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 70px;
  margin: 70px;
  text-align: center;
`;
const Moon = styled.div`
  box-shadow:  0px 0px 140px 10px white;
  margin: auto;
  width: 258px;
  height: 258px;
  border-radius: 100%;
  background-image: url('https://c1.staticflickr.com/1/185/376134441_233e705786_z.jpg?zz=1');
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
      <Stars>
        <StyledTitle>
          {props.webtitle}
        </StyledTitle>
        <Moon />
      </Stars>
    </StyledDiv>
  );
}

Somnium.propTypes = {
  webtitle: PropTypes.string.isRequired,
};
