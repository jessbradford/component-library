import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/fontawesome-free-regular';
import { faStar as faStarFilled } from '@fortawesome/fontawesome-free-solid';

const StyledDiv = styled.div`
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 2px;
  box-shadow: 2px 2px #f0f0f0;
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 150px 30px 95px 10px 20px;
  width: 200px;

  .date {
    justify-self: end;
  }

  .desc {
    font-size: 12px;
  }

  .divider {
    border: 0;
    border-top: 1px solid gainsboro;
    display: block;
    height: 1px;
  }

  .icon {
    padding-bottom: 3px;
  }

  .footer {
    align-items: center;
    display: grid;
    font-size: 10px;
    grid-template-columns: .3fr 2fr 1fr;
    grid-template-rows: 20px;
    color: darkgrey;
  }

  .star {
    color: whitesmoke;
    position: absolute;
    padding-left: 160px;
    padding-bottom: 262px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .word {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default function Card(props) {
  return (
    <StyledDiv>
      <FontAwesomeIcon
        className="star"
        icon={faStarFilled}
        onClick={props.toggleFab}
        size="2x"
        style={{
          color: props.starFilled ? 'yellow' : 'whitesmoke',
        }}
      />
      <div className="image" />
      <div className="title word">Title</div>
      <div className="desc word">
        This card can be used for books, blog posts, videos, or audio.
        Look at this great example of text. It is so pretty.
        And you can fit lots and lots of text. It looks great...
        <a href={props.href}>Read more.</a>
      </div>
      <div className="divider word" />
      <div className="footer word">
        <div className="icon">
          <FontAwesomeIcon icon={faFileAlt} size="2x" />
        </div>
        <div>
          10 minute read time
        </div>
        <div className="date">03/28/2018</div>
      </div>
    </StyledDiv>
  );
}
