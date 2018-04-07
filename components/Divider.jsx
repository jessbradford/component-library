import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  border: 0;
  border-top: 1px solid gainsboro;
  display: block;
  height: 1px;
`;

export default function Divider() {
  return (
    <StyledDivider />
  );
}
