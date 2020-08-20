import React, {useMemo, useState} from 'react';
import {Main} from '../ImageAnimation/images/main';
import 'components/ImageAnimation/images/main.scss';
import 'components/ImageAnimation/BurgerMenu/buregrMenu.css';

import 'components/ImageAnimation/BurgerMenu/arrow.scss';
import Slider from '@material-ui/core/Slider';

export const PromiseComponentMobile = ({Pending, Rejected, promise}) => {
  // eslint-disable-next-line prefer-const
  let [slide, setSlide] = useState(0);
  // eslint-disable-next-line prefer-const
  let [courusel, setCourusel] = useState(0);

  function debounce(method, delay, e) {
    clearTimeout(method._tId);
    // eslint-disable-next-line no-param-reassign
    method._tId = setTimeout(function () {
      method(e);
    }, delay);
  }
  function slideSetPlus() {
    // eslint-disable-next-line no-const-assign,no-plusplus
    setSlide(++slide);
  }
  function slideSetMinus() {
    // eslint-disable-next-line no-const-assign,no-plusplus
    setSlide(--slide);
  }
  function couruseleSetPlus() {
    // eslint-disable-next-line no-const-assign,no-plusplus
    setCourusel(++courusel);
  }
  function couruselSetMinus() {
    // eslint-disable-next-line no-const-assign,no-plusplus
    setCourusel(--courusel);
  }
  function couruselSetFour() {
    setCourusel(4);
  }
  function slidelSetOne() {
    setSlide(3);
  }
  function slideSetTwo() {
    setSlide(2);
  }
  function slideSetThri() {
    setSlide(5);
  }
  function slideSetFour() {
    setSlide(1);
  }
  function couruselSetOne() {
    setCourusel(1);
  }

  function scroling(e) {
    if (e) {
      if (e > 0) {
        // eslint-disable-next-line no-plusplus
        setSlide(++slide);
        if (slide !== 4) {
          setCourusel(0);
        }
        if (slide === 4) {
          setCourusel(1);
        }
      }
      if (e < 0) {
        // eslint-disable-next-line no-plusplus
        setSlide(--slide);
        // eslint-disable-next-line no-plusplus
        if (slide !== 4) {
          setCourusel(0);
        }
        if (slide === 4) {
          setCourusel(1);
        }
      }
    }
  }

  function checkKey(e) {
    if (e.keyCode === 38) {
      // eslint-disable-next-line no-plusplus
      setSlide(--slide);
      if (slide !== 4) {
        setCourusel(0);
      }
      if (slide === 4) {
        setCourusel(1);
      }
    } else if (e.keyCode === 40) {
      // eslint-disable-next-line no-plusplus
      setSlide(++slide);
      if (slide !== 4) {
        setCourusel(0);
      }
      if (slide === 4) {
        setCourusel(1);
      }
    }
  }

  if (slide < 0) {
    setSlide(0);
  }
  if (courusel < 0) {
    setCourusel(0);
  }
  if (slide === 6) {
    setSlide(5);
  }

  const [p, setP] = useState({status: 'PENDING', payload: null, error: null});

  if (p.status === 'PENDING') {
    promise.then(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-ts-ignore
      // @ts-ignore
      (payload) => setP({status: 'RESOLVED', payload, error: null}),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-ts-ignore
      // @ts-ignore
      (error) => setP({status: 'REJECTED', payload: null, error}),
    );
    return <Pending />;
  }
  if (p.status === 'RESOLVED') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return (
      <>
        <div
          role="button"
          tabIndex={0}
          onWheel={(e) => debounce(scroling, 500, e.deltaY)}
          onKeyDown={(e) => checkKey(e)}
        >
          <Main
            slide={slide}
            courusel={courusel}
            slideSetPlus={slideSetPlus}
            slideSetMinus={slideSetMinus}
            couruseleSetPlus={couruseleSetPlus}
            couruselSetMinus={couruselSetMinus}
            couruselSetFour={couruselSetFour}
            couruselSetOne={couruselSetOne}
            slidelSetOne={slidelSetOne}
            slideSetTwo={slideSetTwo}
            slideSetThri={slideSetThri}
            slideSetFour={slideSetFour}
            paylaod={p.payload}
          />
          <div
            role="button"
            tabIndex={0}
            className="slide7"
            style={
              slide === 5
                ? {transform: 'translateY(0%)'}
                : {transform: 'translateY(-110%)'}
            }
          >
            {/* @ts-ignore */}
            <Slider payload={p.payload.data} />
          </div>
        </div>
      </>
    );
  }
  if (p.status === 'REJECTED') {
    return <Rejected error={p.error} />;
  }
};
