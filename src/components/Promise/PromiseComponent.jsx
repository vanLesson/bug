// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-ts-ignore
// @ts-ignore
import React, {useState} from 'react';
// import {Main} from '../ImageAnimation/images/main';
import 'components/ImageAnimation/images/main.scss';
import 'components/ImageAnimation/BurgerMenu/buregrMenu.css';

import 'components/ImageAnimation/BurgerMenu/arrow.scss';
import {MainPhone} from '../ImageAnimation/images/main-phone';

export const PromiseComponent = ({Pending, Rejected, promise}) => {
  // eslint-disable-next-line prefer-const
  let [slide, setSlide] = useState(0);
  // eslint-disable-next-line prefer-const
  let [courusel, setCourusel] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounce(method, delay, e) {
    clearTimeout(method._tId);
    // eslint-disable-next-line no-param-reassign
    method._tId = setTimeout(function () {
      method(e);
    }, delay);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
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
          <MainPhone payload={p.payload} />
        </div>
      </>
    );
  }
  if (p.status === 'REJECTED') {
    return <Rejected error={p.error} />;
  }
};
