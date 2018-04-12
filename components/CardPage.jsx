import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import Stars from './Stars';

const StyledCardPage = styled.div`
  display: grid;
  padding-top: 65px;
  @media(min-width: 600px) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 250px);
    grid-template-rows: 325px 325px 325px;
    justify-content: center;
  }
`;

const StyledHeader = styled.div`
  color: #fff;
  background-image: radial-gradient(ellipse at bottom, #280144, black);
  font-family: 'Noto Serif', serif;
  font-size: 51px;
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif');
  height: 155px;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  width: 100%;

  .p {
    padding: 40px;
  }
`;

export default function CardPage(props) {
  return (
    <div>
      <StyledHeader>
        <Stars />
        <div className="p">{props.headerName}</div>
      </StyledHeader>
      <StyledCardPage>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledCardPage>
    </div>
  );
}

CardPage.propTypes = {
  headerName: PropTypes.string.isRequired,
};
