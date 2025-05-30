import { useState } from "react";
import { Card } from "./Card";
import sroll_left from '../images/scroll_left.png';
import sroll_right from '../images/scroll_right.png';
import { ScrollBar } from "./ScrollBar";

import tesla from '../images/tesla.svg'
import raketa from '../images/racketa.svg'
import bomb from '../images/bomb.svg'
import lodka from '../images/lodka.svg'
import {teslaTitle, lodkaTitle, raketTitle, bombTitle, teslaText, bombText, lodkaText} from '../db'

export const Scroll = () => {
  const CARD_WIDTH = 421;
  const TOTAL_CARDS = 5;

  const [scrollWindow, setScrollWindow] = useState<number>(0);

  const activeIndex = Math.abs(scrollWindow / CARD_WIDTH);

  const handleScrollRight = () => {
    setScrollWindow(current => Math.max(current - CARD_WIDTH, -CARD_WIDTH * (TOTAL_CARDS-1)));
  };

  const handleScrollLeft = () => {
    setScrollWindow(current => Math.min(current + CARD_WIDTH, 0));
  };

  const handleDotClick = (index: number) => {
    setScrollWindow(-CARD_WIDTH * index);
  };

  return (
    <div className="scroll">
      <div className="scroll__interface">
        <img className="scroll__button" src={sroll_left} onClick={handleScrollLeft} alt="" />
        <h1 className="scroll__title">World Discover</h1>
        <img className="scroll__button" src={sroll_right} onClick={handleScrollRight} alt="" />
      </div>
      <div className="scroll__main">
        <div className="scroll__window">
          <div className="scroll__items" style={{ transform: `translateX(${scrollWindow}px)`, transition: 'transform 0.3s ease' }}>
            <Card img={tesla} title={teslaTitle} text={teslaText}/>
            <Card img={lodka} title={lodkaTitle} text={lodkaText}/>
            <Card img={bomb} title={bombTitle} text={bombText}/>
            <Card img={raketa} title={raketTitle} text={bombText}/>
            <Card img={tesla} title={teslaTitle} text={teslaText}/>
          </div>
        </div>
      </div>
      <ScrollBar activeIndex={activeIndex} onDotClick={handleDotClick} />
    </div>
  );
};
