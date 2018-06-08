import React from 'react';
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

export default function Card() {
  return (
    <CardOutline>
      <StyledDiv>
        <CardImage />
        <CardTitle title="TITLE" />
        <CardDescription desc="This is a description" />
        <Divider />
        <CardFooter />
      </StyledDiv>
    </CardOutline>
  );
}
