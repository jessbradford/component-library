import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/fontawesome-free-regular';
import Colors from '../constants/Colors';

const StyledFooter = styled.div`
  align-items: center;
  display: grid;
  font-size: 10px;
  grid-template-columns: .3fr 2fr 1fr;
  grid-template-rows: 20px;
  color: ${Colors.darkgrey};
  padding-left: 10px;
  padding-right: 10px;

  .date {
    justify-self: end;
  }

  .icon {
    padding-bottom: 3px;
  }
`;

export default function CardFooter(props) {
  return (
    <StyledFooter>
      <div className="icon">
        <FontAwesomeIcon icon={faFileAlt} size="2x" />
      </div>
      <div>
        {props.readtime}
      </div>
      <div className="date">{props.date}</div>
    </StyledFooter>
  );
}

CardFooter.propTypes = {
  date: PropTypes.string.isRequired,
  readtime: PropTypes.string.isRequired,
};
