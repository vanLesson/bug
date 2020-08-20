import React, {useEffect, useReducer, useRef} from 'react';
import {who, arrow} from './index.ts';

let slides;

export function Slid3(payload) {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  slides = payload.payload.payload.data.allSlide4;
  return (
    <div className="slides">
      <button
        className="slide4-button-back-phone"
        type="button"
        onClick={() => dispatch({type: 'NEXT'})}
      >
        <img className="arrow-back" src={arrow} alt="" />
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        return <Slide payload={payload} slide={slide} offset={offset} key={i} />;
      })}
      <button
        className="slide4-button-next-phone"
        type="button"
        onClick={() => dispatch({type: 'PREV'})}
      >
        <img className="arrow-next" src={arrow} alt="" />
      </button>
    </div>
  );
}

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({slide, offset}) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideContents">
        <div className="text-container">
          <h1 className="title">{slide.Slide4Title}</h1>
          <h1 className="title">{slide.title2}</h1>
          <div className="p-text">
            <p>{slide.Slide4Text}</p>
            <p>{slide.Slide4TextDown}</p>
          </div>
        </div>
        <div className="container">
          <img src={who} alt="" />
          <div className="blue-rect-phone" style={{background: slide.Slide4.hex}}>
            <img className="man" src={slide.Slide4Image.asset.url} alt="" />

            <h1 className="h1-container">{slide.number}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
