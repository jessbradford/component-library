import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';
import CardImage from './CardImage';
import CardOutline from './CardOutline';
import CardTitle from './CardTitle';
import Divider from './Divider';

const StyledDiv = styled.div`
  align-items: center;
  display: grid;

  @media(min-width: 600px) {
    grid-template-columns: 250px;
    grid-template-rows: 160px 30px 100px 10px 30px;
  }

  @media(max-width: 600px) {
    grid-template-columns: 137px auto;
    grid-template-rows: 30px 80px 10px 30px;
  }
  `;

export default function Card({ title, desc }) {
  return (
    <CardOutline>
      <StyledDiv>
        <CardImage />
        <CardTitle title={title} />
        <CardDescription desc={desc} />
        <Divider />
        <CardFooter />
      </StyledDiv>
    </CardOutline>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
