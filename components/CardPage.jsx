import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const StyledCardPage = styled.div`
  display: grid;
  @media(min-width: 600px) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 250px);
    grid-template-rows: 325px 325px 325px;
    justify-content: center;
  }
`;

export default function CardPage() {
  return (
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
  );
}

CardPage.propTypes = {
  headerName: PropTypes.string.isRequired,
};
