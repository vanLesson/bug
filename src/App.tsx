import React, {useState} from 'react';
import './App.css';

import {GQL} from './api/graphql';
import {PromiseComponent} from './components/Promise/PromiseComponent';
import {PromiseComponentMobile} from './components/Promise/PromiseComponentMobile';

const P = () => <div>p</div>;
const Err = () => <p>Eroor</p>;
function App() {
  // eslint-disable-next-line prefer-const
  let [slide, setSlide] = useState(0);
  // eslint-disable-next-line prefer-const
  let [courusel, setCourusel] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounce(method: any, delay: any, e: any) {
    clearTimeout(method._tId);
    // eslint-disable-next-line no-param-reassign
    method._tId = setTimeout(function () {
      method(e);
    }, delay);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function scroling(e: any) {
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
  function checkKey(e: React.KeyboardEvent<HTMLDivElement>) {
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
  return (
    <div
      role="button"
      tabIndex={0}
      className="App"
      onWheel={(e) => debounce(scroling, 500, e.deltaY)}
      onKeyDown={(e) => checkKey(e)}
    >
      {/* @ts-ignore */}
      <PromiseComponentMobile
        Pending={P}
        Rejected={Err}
        promise={GQL(`# Write your query or mutation here
query{
 
allSlide1{

  Sldie1Text 
  
  Slide1FirstImage{
  asset{
    url
  }
} 
  
  Slide1SecondImage{
  asset{
    url
  } 
}
  
   BackColor{
    hex
  }
}
  allSlide2{
    Sldie2Text
    Slide2FirstImage{
      asset{     
        url
      }
    }
    Slide2SecondImage{
      asset{
        url
      }
    }
    Slide2SecondColor{
      hex
    }
  }
  allSlide3{
    Slide3FirstImage{
      asset{
        url
      }
    }
    Slide3SecondImage{
      asset{
        url
      }
    }
    Sldie2TextUp
    Slide3FirstColor{
      hex
    }
    Sldie2TextDown
    Slide3SecondColor{
      hex
    }
  }
  allSlide4{
    Slide4Title
    Slide4Text
    Slide4TextDown
    Slide4Back
    Slide4{
      hex
    }
    Slide4Image{
      asset{
        url
      }
    }
    number
  }
  allSldie5{
  Slide5Title
    Slide5Text
    Slide5Image{
      asset{
        url
      }
    }
}
}

`)}
      />
      {/* @ts-ignore */}
      <PromiseComponent
        Pending={P}
        Rejected={Err}
        promise={GQL(`# Write your query or mutation here
query{
 
allSlide1{

  Sldie1Text 
  
  Slide1FirstImage{
  asset{
    url
  }
} 
  
  Slide1SecondImage{
  asset{
    url
  } 
}
  
   BackColor{
    hex
  }
}
  allSlide2{
    Sldie2Text
    Slide2FirstImage{
      asset{     
        url
      }
    }
    Slide2SecondImage{
      asset{
        url
      }
    }
    Slide2SecondColor{
      hex
    }
  }
  allSlide3{
    Slide3FirstImage{
      asset{
        url
      }
    }
    Slide3SecondImage{
      asset{
        url
      }
    }
    Sldie2TextUp
    Slide3FirstColor{
      hex
    }
    Sldie2TextDown
    Slide3SecondColor{
      hex
    }
  }
  allSlide4{
    Slide4Title
    Slide4Text
    Slide4TextDown
    Slide4Back
    Slide4{
      hex
    }
    Slide4Image{
      asset{
        url
      }
    }
    number
  }
  allSldie5{
  Slide5Title
    Slide5Text
    Slide5Image{
      asset{
        url
      }
    }
}
}

`)}
      />
    </div>
  );
}

export default App;
