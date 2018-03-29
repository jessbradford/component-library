import React, { Fragment } from 'react';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFileAlt from '@fortawesome/react-fontawesome';


const StyledDiv = styled.div`
  border: 1px solid gainsboro;
  border-radius: 2px;
  box-shadow: 2px 2px #f0f0f0;
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 150px 30px 95px 10px 20px;
  width: 200px;

  .Desc {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .Divider {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid gainsboro;
  }

  .Footer {
    justify-items: center;
    display: grid;
    font-size: 10px;
    grid-gap: 10px;
    grid-template-columns: .5fr 2fr 1fr;
    grid-template-rows: 1fr;
    opacity: 0.5;
    padding-left: 10px;
    padding-right: 10px;
  }

  .Title {
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;
  }
`
export default function Card() {
  return (
    <StyledDiv>
      <div className="Image">Image</div>
      <div className="Title">Title</div>
      <div className="Desc">
        This card can be used for books, blog posts, videos, or audio. Look at this great example of text. It is so pretty. And you can fit lots and lots of text. It looks great... <a>Read more.</a>
      </div>
      <div className="Divider"></div>
      <div className="Footer">
        <div><FontAwesomeIcon icon={faFileAlt} /></div>
        <div>
          10 minute read time
        </div>
        <div>03/28/2018</div>
      </div>
    </StyledDiv>
  )
}
