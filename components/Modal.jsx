import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Colors from '../constants/Colors';
import Divider from './Divider';
import Header from './Header';

const StyledBackground = styled.div`
  background:rgba(0,0,0,0.7);
  height: 100%;
  width: 100%;
  left: 0px;
  position: fixed;
  top: 0px;
  z-index: 0;
`;

const StyledModal = styled.div`
  align-items: center;
  background: ${Colors.white};
  border: 1px solid ${Colors.grey};
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5px 2fr 5px 1fr;
  height: 180px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 10px 5px 20px;
  position: absolute;
  right: 0;
  top: 20px;
  width: 70%;
  z-index: 0;
  .modalButton {
    justify-self: end;
  }
  .divider {
    margin-left: -20px;
    margin-right: -10px
  }
`;

export default function Modal(props) {
  return (
    <div>
      <StyledBackground>
        <StyledModal>
          <Header headerTitle="Title" />
          <div className="divider">
            <Divider />
          </div>
          <p>{props.message}</p>
          <div className="divider">
            <Divider />
          </div>
          <div className="modalButton">
            <Button button="Button" />
          </div>
        </StyledModal>
      </StyledBackground>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
};
