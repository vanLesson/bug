import React from 'react';
import 'components/ImageAnimation/images/main-phone.scss';
// import {who, man, arrow} from './index';
import {Slider} from './Slider';
import {Slid3} from './slide3';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// interface main {
//   set: (number: number) => void;
// }
export const MainPhone = (payload) => {
  debugger;
  // eslint-disable-next-line prefer-const
  // let [slide, setSlide] = useState(0);
  // const [courusel, setCourusel] = useState(0);
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function debounce(method: any, delay: any, e: any) {
  //   clearTimeout(method._tId);
  //   // eslint-disable-next-line no-param-reassign
  //   method._tId = setTimeout(function () {
  //     method(e);
  //   }, delay);
  // }
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function scroling(e: any) {
  //   if (e) {
  //     if (e > 0) {
  //       // eslint-disable-next-line no-plusplus
  //       setSlide(++slide);
  //       if (slide !== 4) {
  //         setCourusel(0);
  //       }
  //       if (slide === 4) {
  //         setCourusel(1);
  //       }
  //     }
  //     if (e < 0) {
  //       setSlide(slide - 1);
  //       // eslint-disable-next-line no-plusplus
  //       if (slide !== 4) {
  //         setCourusel(0);
  //       }
  //       if (slide === 4) {
  //         setCourusel(1);
  //       }
  //     }
  //   }
  // }
  // function checkKey(e: React.KeyboardEvent<HTMLDivElement>) {
  //   if (e.keyCode === 38) {
  //     // eslint-disable-next-line no-plusplus
  //     setSlide(--slide);
  //     if (slide !== 4) {
  //       setCourusel(0);
  //     }
  //     if (slide === 4) {
  //       setCourusel(1);
  //     }
  //   } else if (e.keyCode === 40) {
  //     // eslint-disable-next-line no-plusplus
  //     setSlide(++slide);
  //     if (slide !== 4) {
  //       setCourusel(0);
  //     }
  //     if (slide === 4) {
  //       setCourusel(1);
  //     }
  //   }
  // }
  //
  // if (slide < 0) {
  //   setSlide(0);
  // }
  // if (courusel < 0) {
  //   setCourusel(0);
  // }
  // if (slide > 5) {
  //   setSlide(5);
  // }
  return (
    <>
      <div className="arr">
        <div className="slide1-phone">
          <h1 className="first-h1-phone">IDEAS STRATEGIES SOLUTIONS</h1>
        </div>

        <div className="slide2-phone">
          <div className="div-wraper">
            <div className="slide2-div1-phone">
              <p> We suggest powerful backend solutions</p>
            </div>
            <div className="slide2-div2-phone" />
          </div>
          <div className="slide2-div3-phone">
            <h1> Development of systems for large business and small solutions</h1>
          </div>
        </div>
        <div className="slide3-phone">
          <div className="div-wraper">
            <div className="slide3-div1-phone" />
            <div className="slide3-div2-phone" />
          </div>
          <div className="slide3-div3-phone">
            <h1> We provide design research and design directly</h1>
          </div>
        </div>
        <div className="slide4-phone">
          <div className="div-wraper">
            <div className="slide4-div1-phone" />
            <div className="slide4-div2-phone">
              <h1>Cross platform development</h1>
            </div>
          </div>
          <div className="div-wraper">
            <div className="slide4-div2-2-phone">
              <h1>Frontend Backend Solutions</h1>
            </div>
            <div className="slide3-div4-phone" />
          </div>
        </div>
        <div className="slide5-phone">
          <Slid3 payload={payload} />
          {/* <img src={who} alt="" /> */}
          {/* <div className="blue-rect-phone"> */}
          {/*  <img className="man" src={man} alt="" /> */}
          {/*  <button className="slide4-button-back-phone" type="button"> */}
          {/*    <img className="arrow-back" src={arrow} alt="" /> */}
          {/*  </button> */}
          {/*  <button className="slide4-button-next-phone" type="button"> */}
          {/*    <img className="arrow-next" src={arrow} alt="" /> */}
          {/*  </button> */}
          {/*  <h1>01</h1> */}
          {/* </div> */}
        </div>
        <div className="slies">
          <h1 className="somes">Project</h1>
          {/* @ts-ignore */}
          <Slider payload={payload} />
        </div>
      </div>
    </>
  );
};
