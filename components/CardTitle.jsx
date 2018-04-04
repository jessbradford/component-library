import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function CardTitle(props) {
  return (
    <StyledTitle>{props.title}</StyledTitle>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
