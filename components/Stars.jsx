import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const StarBackground = styled.div`
  background-image:
    radial-gradient(${Colors.white}, rgba(255,255,255,.1) 3px, transparent 3px),
    radial-gradient(${Colors.white}, rgba(255,255,255,.4) 1px, transparent 2px);
  background-size: 250px 250px, 150px 150px;
  background-position: 130px 270px, 70px 100px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  @keyframes movestars {
    from {background-position: 0px 5000px;}
    to {background-position: 0px 0px;}
  }
  @-webkit-keyframes movestars {
    from { background-position: 0px 5000px; }
    to { background-position: 0px 0px; }
  }
  -webkit-animation:movestars 500s linear infinite;
  animation:movestars 500s linear infinite;
`;

const IndividualStars = styled.div`
  width: 100%;
  height: 100%;
  .star {
    background: radial-gradient(${Colors.white}, rgba(255,255,255,.1) 2px, transparent 3px);
    border-radius: 50%;
    position: absolute;
  }
  .star1 {
    margin-left: 5px;
  }
  .star2 {
    margin-left: 220px;
    margin-top: -98px;
  }
  .star3 {
    margin-left: -220px;
    margin-top: -330px;
  }
  .star4 {
    margin-left: 266px;
    margin-top: -360px;
  }
  .star5 {
    margin-left: -380px;
    margin-top: 9px;
  }
  .star6 {
    margin-left: 389px;
    margin-top: -57px;
  }
  .star7 {
    margin-left: -310px;
    margin-top: -424px;
  }
  .star8 {
    margin-left: 200px;
    margin-top: -283px;
  }
  .star9 {
    margin-left: 0px;
    margin-top: -560px;
  }
  .star10 {
    margin-left: -350px;
    margin-top: -663px;
  }
`;

export default function Stars() {
  return (
    <div>
      <StarBackground />
      <IndividualStars>
        <IndividualStars className="star star1" />
        <IndividualStars className="star star2" />
        <IndividualStars className="star star3" />
        <IndividualStars className="star star4" />
        <IndividualStars className="star star5" />
        <IndividualStars className="star star6" />
        <IndividualStars className="star star7" />
        <IndividualStars className="star star8" />
        <IndividualStars className="star star9" />
        <IndividualStars className="star star10" />
      </IndividualStars>
    </div>
  );
}
