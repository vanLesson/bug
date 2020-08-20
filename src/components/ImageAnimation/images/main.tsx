import React from 'react';
import 'components/ImageAnimation/images/main.scss';
import 'components/ImageAnimation/BurgerMenu/buregrMenu.css';
import 'components/ImageAnimation/BurgerMenu/arrow.scss';
// import Navigation from "./swiper";
import {arrow} from './index';

import './style.scss';
// import {Slider} from './Slider';
// import {GQL} from '../../../api/graphql';

interface mainProps {
  slide: number;
  slideSetPlus: () => void;
  slideSetMinus: () => void;
  couruseleSetPlus: () => void;
  couruselSetMinus: () => void;
  couruselSetFour: () => void;
  couruselSetOne: () => void;
  courusel: number;
  slidelSetOne: () => void;
  slideSetTwo: () => void;
  slideSetThri: () => void;
  slideSetFour: () => void;
  paylaod: object | undefined | null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Main: React.FC<mainProps> = ({
  slide,
  courusel,
  couruselSetFour,
  couruselSetOne,
  couruseleSetPlus,
  couruselSetMinus,
  slidelSetOne,
  slideSetTwo,
  slideSetThri,
  slideSetFour,
  paylaod,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  // eslint-disable-next-line no-console
  console.log(paylaod.data.allSlide1[0].BackColor.hex);
  debugger;
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div
            style={
              // eslint-disable-next-line no-nested-ternary
              courusel === 1
                ? {backgroundColor: '#0F72FF'}
                : // eslint-disable-next-line no-nested-ternary
                courusel === 2
                ? {backgroundColor: '#FF8E50'}
                : // eslint-disable-next-line no-nested-ternary
                courusel === 3
                ? {backgroundColor: '#F83D47'}
                : // eslint-disable-next-line no-nested-ternary
                courusel === 4
                ? {backgroundColor: '#7044FB'}
                : // eslint-disable-next-line no-nested-ternary
                slide === 4
                ? {backgroundColor: 'black'}
                : slide === 5
                ? {backgroundColor: 'black'}
                : {backgroundColor: 'white'}
            }
          />
        </div>
        <div
          className="text"
          style={
            slide >= 4
              ? {color: 'black', transition: 'all 1s'}
              : {color: 'white', transition: 'all 1s'}
          }
        >
          <p>media & communication</p>
        </div>
        <div
          className={
            // eslint-disable-next-line no-nested-ternary
            courusel === 1
              ? 'imgs3'
              : // eslint-disable-next-line no-nested-ternary
              courusel === 2
              ? 'imgs4'
              : // eslint-disable-next-line no-nested-ternary
              courusel === 3
              ? 'imgs5'
              : // eslint-disable-next-line no-nested-ternary
              courusel === 4
              ? 'imgs6'
              : // eslint-disable-next-line no-nested-ternary
              slide === 4
              ? 'imgs3'
              : // eslint-disable-next-line no-nested-ternary
              slide === 5
              ? 'imgs3'
              : slide === 2
              ? 'imgs0'
              : 'imgs1'
          }
        />

        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  {/* eslint-disable */}
                  <p onClick={slidelSetOne}>About</p>
                </li>
                <li>
                  {/* eslint-disable */}
                  <p onClick={slideSetTwo}>Career</p>
                </li>
                <li>
                  {/* eslint-disable */}
                  <p onClick={slideSetThri}>Projects</p>
                </li>
                <li>
                  {/* eslint-disable */}
                  <p onClick={slideSetFour}>Team</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="arros"
        role="button"
        tabIndex={0}

      >
        <div
          className="slide1"
          style={
            slide >= 1
              ? {opacity: 0, visibility: 'hidden'}
              : {textShadow: '1px', visibility: 'visible'}
          }
        >
          <h1
            style={
              slide >= 1
                ? {opacity: 0, transform: 'translateX(1000%)'}
                : {textShadow: '1px', visibility: 'visible', transition: 'all 0s'}
            }
            className="first-h1"
          >
            IDEAS STRATEGIES SOLUTIONS
          </h1>
        </div>
        <div
          className="slide2"
          style={
            slide === 1
              ? {
                  visibility: 'visible',
                }
              : {textShadow: '1px', visibility: 'hidden'}
          }
        >
          <div
            className="flip-card-inner"
            style={

              slide === 2
                ? {
                    transform: ' rotateX(180deg)',

                    visibility: 'visible'
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div1-front"
              style={
                // @ts-ignore
                slide === 1
                    //@ts-ignore
                  ? {transform: `translateX(0%) rotateX(0deg)`, visibility: 'visible',backgroundImage:`url(${paylaod.data.allSlide1[0].Slide1FirstImage.asset.url})`}
                  : {}
              }
            >

            </div>
            {/* @ts-ignore*/}
            <div className="slide2-div1-back " style={{backgroundImage:`url(${paylaod.data.allSlide2[0].Slide2FirstImage.asset.url})`}}>

            </div>
          </div>

          <div
            className="flip-card-inner-2"
            style={
              slide === 2
                ? {
                    transform: ' rotateX(180deg)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden',}
            }
          >
            <div
              className="slide2-div2-front"
              style={
                // @ts-ignore
                slide === 1 ? {transform: `translateX(106.73%)`,backgroundImage:`url(${paylaod.data.allSlide1[0].Slide1SecondImage.asset.url})`} : {textShadow: '1px'}
              }
            >

            </div>  {/* @ts-ignore*/}
            <div className="slide2-div2-back " style={{backgroundColor:`${paylaod.data.allSlide2[0].Slide2SecondColor.hex}`}}>
              <h1>
                {/* @ts-ignore*/}
                {paylaod.data.allSlide2[0].Sldie2Text}
              </h1>
            </div>
          </div>
          <div
            className="flip-card-inner-3"
            style={
              slide === 2
                ? {
                    transform: ' rotateX(-180deg)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div3-front"
              style={
                // @ts-ignore
                slide === 1 ? {transform: `translateX(106.73%)`,backgroundColor:`${paylaod.data.allSlide1[0].BackColor.hex}`} : {textShadow: '1px'}
              }
            >
              <h1>
                {/* @ts-ignore*/}
                {paylaod.data.allSlide1[0].Sldie1Text}
              </h1>
            </div>
            {/* @ts-ignore*/}
            <div className="slide2-div3-back " style={{backgroundImage:`url(${paylaod.data.allSlide2[0].Slide2SecondImage.asset.url})`}}>

            </div>
          </div>
        </div>
        <div
          className="slide2-1"
          style={
            slide === 3
              ? {
                  transform: 'transformY(0%)',
                  visibility: 'visible',
                }
              : {textShadow: '1px', visibility: 'hidden'}
          }
        >
          <div
            className="flip-card2-1-inner"
            style={
              slide === 3
                ? {
                    transform: 'transformY(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-1-div1-front"

              style={//@ts-ignore
                slide === 3 ? {transform: `translateX(0%)`,backgroundImage:`url(${paylaod.data.allSlide3[0].Slide3FirstImage.asset.url})`} : {textShadow: '1px'}}
            >
              <h1>

              </h1>
            </div>
          </div>
          <div
            className="flip-card2-1-1-inner"
            style={
              slide === 3
                ? {
                    transform: ' transformY(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-1-1-div1-front"
              style={
                slide === 3
                    //@ts-ignore
                  ? {transform: `translateY(100%)`,backgroundColor:`${paylaod.data.allSlide3[0].Slide3SecondColor.hex}`, zIndex: 1}
                  : {textShadow: '1px'}
              }
            >
              <h1>
                {/* @ts-ignore*/}
                {paylaod.data.allSlide3[0].Sldie2TextDown}
              </h1>
            </div>
          </div>
          <div
            className="flip-card2-1-inner-2"
            style={
              slide === 3
                ? {
                    transform: ' transformX(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div2-1-front"
              style={
                //@ts-ignore
                slide === 3 ? {transform: `translateX(106.7%)`,backgroundColor:`${paylaod.data.allSlide3[0].Slide3FirstColor.hex}`} : {textShadow: '1px'}
              }
            >
              <h1>
                {/* @ts-ignore*/}
                {paylaod.data.allSlide3[0].Sldie2TextUp}
              </h1>
            </div>
          </div>
          <div
            className="flip-card2-1-inner-3"
            style={
              slide === 3
                ? {
                    transform: ' transformX(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div3-1-front"
              style={
                slide === 3
                    //@ts-ignore
                  ? {transform: `translateX(106.7%)`, zIndex: 0,backgroundImage:`url(${paylaod.data.allSlide3[0].Slide3SecondImage.asset.url})`}
                  : {textShadow: '1px'}
              }
            >
              <h1>

              </h1>
            </div>
          </div>
        </div>
        <div
          className="slide3"
          style={
            courusel === 1
              ? {opacity: '1', transform: 'translateX(0%)'}
              : {opacity: '0', transform: 'translateX(-80%)'}
          }
        >
          <div className="slide3-text">
            {/*@ts-ignore*/}
            <h1 className="slide3-h1">{paylaod.data.allSlide4[0].Slide4Title}</h1>
            <p>
              {/*@ts-ignore*/}
              {paylaod.data.allSlide4[0].Slide4Text}
            </p>
            <p>
              {/*@ts-ignore*/}
              {paylaod.data.allSlide4[0].Slide4TextDown}
            </p>
          </div>
          <div
            className="slide3-blue-rect"
            style={
              courusel === 1
                  //@ts-ignore
                ? {transform: ' translateX(0%)',backgroundColor:`${paylaod.data.allSlide4[0].Slide4.hex}`}
                : {transform: 'translateX(300%)'}
            }
          >
        {/*@ts-ignore*/}
            <div className="slide3-div-img" style={{backgroundImage:`url()${paylaod.data.allSlide4[0].Slide4Image.asset.url}`}}>
              <button
                type="button"
                className="slide3-button-back"
                onClick={couruselSetFour}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                type="button"
                className="slide3-button-next"
                onClick={couruseleSetPlus}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              {/*@ts-ignore*/}
              <h1 className="slide3-counter-h1">{paylaod.data.allSlide4[0].number}</h1>
            </div>
          </div>
          <h1
            className="slide3-back-h1"
            style={
              courusel === 1
                ? {transform: ' translateX(0%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Who we are
          </h1>
        </div>
        <div
          className="slide4"
          style={
            courusel === 2
                ? {opacity: '1', transform: 'translateX(0%)'}
                : {opacity: '0', transform: 'translateX(-80%)'}
          }
        >
          <div className="slide4-text">
            <h1 className="slide4-h1">Cooperative work</h1>
            <p>
              We offer value-driven brand, marketing and development solutions to satisfy
              the unique communication needs of your business and cost-effectively
              leverage your business results.
            </p>
            <p>We understand the role of teamwork in maximizing your results. </p>
            <p>
              From strategy consulting and vital messaging to mobile and web application
              development, we bring you the right people with the right skill sets - a
              diverse nucleus of professionals with a passion for creativity and success.
            </p>
          </div>
          <div
            className="slide4-blue-rect"
            style={
              courusel === 2
                  ? {transform: ' translateX(0%)', opacity: '1'}
                  : {transform: 'translateX(300%)'}
            }
          >
            <div className="slide4-div-img">
              <button
                className="slide4-button-back"
                type="button"
                onClick={couruselSetMinus}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                className="slide4-button-next"
                type="button"
                onClick={couruseleSetPlus}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide4-counter-h1">02</h1>
            </div>
          </div>
          <h1
            className="slide4-back-h1"
            style={
              courusel === 2
                ? {transform: ' translateX(15%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Cooperative work
          </h1>
        </div>
        <div
          className="slide5"
          style={
            courusel === 3
                ? {opacity: '1', transform: 'translateX(0%)'}
                : {opacity: '0', transform: 'translateX(-80%)'}
          }
        >
          <div className="slide5-text">
            <h1 className="slide5-h1">Creative. Innovative.</h1>
            <p>
              Delivering winning solutions on time and within budget, our talented team
              will engineer an exciting and durable brand presence for your business - in
              any medium.
            </p>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>At iQ3 we don't just think outside the box, we build better boxes.</p>
          </div>
          <div
            className="slide5-blue-rect"
            style={
              courusel === 3
                  ? {transform: ' translateX(0%)', opacity: '1'}
                  : {transform: 'translateX(300%)'}
            }
          >
            <div className="slide5-div-img">
              <button
                className="slide5-button-back"
                type="button"
                onClick={couruselSetMinus}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                className="slide5-button-next"
                type="button"
                onClick={couruseleSetPlus}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide5-counter-h1">03</h1>
            </div>
          </div>
          <h1
            className="slide5-back-h1"
            style={
              courusel === 3
                ? {transform: ' translateX(15%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Creative. Innovative.
          </h1>
        </div>
        <div
          className="slide6"
          style={
            courusel === 4
              ? {opacity: '1', transform: 'translateX(0%)'}
              : {opacity: '0', transform: 'translateX(-80%)'}
          }
        >
          <div className="slide6-text">
            <h1 className="slide6-h1">Marketing</h1>
            <p>
              As marketing professionals, we know how to communicate. We understand the
              media, the opportunities, the risks and the rewards.
            </p>

            <p>
              We understand needs and how to create powerful results consistently and
              effectively under some of the most challenging circumstances.
            </p>
            <p>
              We know what the focus should be, the long-term goals and what makes for a
              successful, sustainable result.
            </p>
          </div>
          <div
            className="slide6-blue-rect"
            style={
              courusel === 4
                ? {transform: ' translateX(0%)', opacity: '1'}
                : {transform: 'translateX(300%)'}
            }
          >
            <div className="slide6-div-img">
              <button
                className="slide6-button-back"
                type="button"
                onClick={couruselSetMinus}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                className="slide6-button-next"
                type="button"
                onClick={couruselSetOne}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide5-counter-h1">04</h1>
            </div>
          </div>
          <h1
            className="slide6-back-h1"
            style={
              courusel === 4
                ? {transform: ' translateX(15%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Marketing{' '}
          </h1>
        </div>

      </div>



    </>
  );
};
