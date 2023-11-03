import React from "react";
import "./MatchBox.css";
import Soccer from "../../../assets/images/soccer.webp";
import { RightArrow } from "../../../Icons";
import SoccerImg from "../../../assets/images/soccer-1.webp";
import SoccerImg2 from "../../../assets/images/soccer-2.webp";

function MatchBox({ props }) {
  return (
    <>
      <div className="match-box main-wrap">
        <div className="block-1">
          <h3 className="par-22 text-white">27th April</h3>
          <p className="par-12 text-white mb-0">Conquerors North</p>
        </div>
        <div className="block-2">
          <div className="block-2-inner-wrap d-flex align-items-center">
            <div className="img-wrap-block">
              <img className="w-100" src={Soccer} alt="1111" />
            </div>
            <p className="par-20 light-pink mx-3 mb-0">vs</p>
            <div className="img-wrap-block">
              <img className="w-100" src={Soccer} alt="1111" />
            </div>
          </div>
          <div className="time-wrapper-block">
            <div className="time-wrap text-center">
              <p className="par-22 text-white mb-0 px-1">3 : 1</p>
            </div>
            <p className="par-10 text-white mb-0 mt-1">Highlights</p>
          </div>
        </div>
        <div className="block-3">
          <RightArrow />
        </div>
      </div>
      <div className="match-box main-wrap mt-32">
        <div className="block-1">
          <h3 className="par-22 text-white">28th April</h3>
          <p className="par-12 text-white mb-0">Conquerors North</p>
        </div>
        <div className="block-2">
          <div className="block-2-inner-wrap d-flex align-items-center">
            <div className="img-wrap-block">
              <img className="w-100" src={SoccerImg} alt="1111" />
            </div>
            <p className="par-20 light-pink mx-3 mb-0">vs</p>
            <div className="img-wrap-block">
              <img className="w-100" src={SoccerImg2} alt="1111" />
            </div>
          </div>
          <div className="time-wrapper-block">
            <div className="d-inline-flex align-items-center flex-column">
              <div className="time-wrap text-center p-1">
                <p className="par-22 text-white mb-0">13</p>
              </div>
              <p className="par-10 text-white mb-0 mt-1">days</p>
            </div>
            <div className="d-inline-flex align-items-center flex-column">
              <p className="par-22 text-white mb-0 mx-1">:</p>
            </div>
            <div className="d-inline-flex align-items-center flex-column">
              <div className="time-wrap text-center p-1">
                <p className="par-22 text-white mb-0">28</p>
              </div>
              <p className="par-10 text-white mb-0 mt-1">minutes</p>
            </div>
          </div>
        </div>
        <div className="block-3">
          <RightArrow />
        </div>
      </div>
    </>
  );
}

export default MatchBox;
