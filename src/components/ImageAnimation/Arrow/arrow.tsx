import React from 'react';
import 'components/ImageAnimation/BurgerMenu/arrow.scss';

export const Arrow = () => (
  <div
    className="arrow"
    // onClick={(event) => {
    //   setCounter(counter + 1);
    //   scroll(event, counter);
    // }}
  >
    <div className="arrow-top" />
    <div className="arrow-bottom" />
  </div>
);
