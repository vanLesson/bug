import React from 'react';
import 'components/ImageAnimation/BurgerMenu/buregrMenu.css';

import 'components/ImageAnimation/BurgerMenu/arrow.scss';

export const Burger: React.FC<{slide: number}> = ({slide}) => {
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div
            style={
              // eslint-disable-next-line no-nested-ternary
              slide === 3
                ? {backgroundColor: '#0F72FF'}
                : slide === 4
                ? {backgroundColor: '#FF8E50'}
                : {backgroundColor: 'white'}
            }
          />
        </div>
        <div className="text" style={slide >= 3 ? {color: 'black'} : {color: 'white'}}>
          <p>media & communication</p>
        </div>
        <div className={`imgs${slide}`} />

        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
