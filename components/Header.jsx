import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 25px;
  font-size: 24px;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      {props.title}
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
