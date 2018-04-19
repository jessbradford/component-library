import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 24px;
  .content {
    padding: 15px;
  }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      {props.headerTitle}
    </StyledHeader>
  );
}

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
