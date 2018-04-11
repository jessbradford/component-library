import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const StyledDesc = styled.div`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;

  .link {
    color: ${Colors.blue};
  }
`;

export default function CardDescription(props) {
  return (
    <StyledDesc>
      {props.desc}
      <a className="link" href={props.href}>...Read more.</a>
    </StyledDesc>
  );
}

CardDescription.propTypes = {
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
