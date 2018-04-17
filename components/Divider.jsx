import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const StyledDivider = styled.div`
  border: 0;
  border-top: 1px solid ${Colors.grey};
  display: block;
  height: 1px;
  margin: -10px;
`;

export default function Divider() {
  return (
    <StyledDivider />
  );
}
